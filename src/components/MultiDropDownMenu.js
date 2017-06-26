/**
 * Created by slashhuang on 16/5/11.
 * 层级下拉菜单栏
 * 组件建模
 * 1. dropDownQueue
 *    === ===[鼠标当前停留的位置，对应的源数组序列号数组]，比如[1,2]代表现在是dropDownData[1].children[2].children数据节点上
 * 2. formGroup
 *    === ===[鼠标点击过的数据值存储]
 * 3. dropDownBranch
 *    === ===[树状节点的checkbox数据model]
 * 4. depth
 *    === ===[目前鼠标点击或者mouseOver的对象对应的上级菜单数据节点]
 * 5. index
 *    === ===[目前鼠标点击的列表中的哪一项]
 *
 */
import React, { Component ,PropTypes} from 'react';

export default class MultiDropDownMenu extends Component {

    constructor(props,context){
        super(props,context);
        this.state={
            dropDownBranch:[],//树状分支节点鼠标点击事件存取,
            dropDownQueue:[],
            partSelectBranch:{},//分支节点的map，只要其子节点至少有一个被选中，就将该节点cache进来
            formGroup:[],//最后存取的数据
            title:props.title,
            keyName:props.keyName,
            leafName:props.leafName
        };
        this.formData=this.state.formGroup;
        this.itemHeight=this.props.itemHeight||0;
        this.offsetYMap={};
        this.treePathMap={

        };
        let activeNodeList=[],
            activeBranchList=[],
            partSelectBranch={};
        this.generateTreePathMap(this.treePathMap,this.props,activeNodeList,activeBranchList,partSelectBranch);
        this.state.formGroup=activeNodeList;
        this.state.dropDownBranch=activeBranchList;
        this.state.partSelectBranch=partSelectBranch;
        this.state.title=this.renderTitle(activeNodeList)||this.props.title;
    }
    generateTreePathMap(treePathMap,props,activeNodeList,activeBranchList,partSelectBranch){
        //缓存所有节点的路径信息，根节点的index假设为-1
        let {dropDownData,selected}= props;
        let selectedMap={};
        if(selected){
            let selectedList=selected.split(',');
            selectedList.forEach(function(id){
                selectedMap[id]=true;
            })
        }
        this.climbTree('-1',dropDownData,treePathMap,selectedMap,activeNodeList);
        this.selectActiveBranchNode({
            typeId:'-1',
            children:dropDownData
        },activeBranchList,selectedMap)

        this.findPartSelectBranchNode({
            typeId:'-1',
            children:dropDownData
        },partSelectBranch,selectedMap);
        //目前partSelectBranch包含子节点全选中的情况，需要将这种情况排除
        activeBranchList.forEach(function(item){
            if(partSelectBranch[item.typeId]){
                delete partSelectBranch[item.typeId];
            }
        });
    }
    findPartSelectBranchNode(item,partSelectBranch,selectedMap){
        let self=this;
        let itemChildren=item.children?item.children:[];
        if(itemChildren.length==0){
            if(selectedMap[item.typeId]){
                return true;
            }else{
                return false
            }
        }else{
            var partSelect=false;

            for(let subIndex=0;subIndex<itemChildren.length;subIndex++){
                partSelect=self.findPartSelectBranchNode(itemChildren[subIndex],partSelectBranch,selectedMap)||partSelect;
            }
            if(partSelect){
                if(item.typeId!=-1){
                    partSelectBranch[item.typeId]=true;
                }
            }
            return partSelect
        }
    }
    selectActiveBranchNode(item,activeBranchList,selectedMap){
        let self=this;
        let itemChildren=item.children?item.children:[];
        if(itemChildren.length==0){
            if(selectedMap[item.typeId]){
                return true;
            }else{
                return false
            }
        }else{
            var childrenSelectAll=true;

            for(let subIndex=0;subIndex<itemChildren.length;subIndex++){
                childrenSelectAll=self.selectActiveBranchNode(itemChildren[subIndex],activeBranchList,selectedMap)&&childrenSelectAll;
            }
            if(childrenSelectAll){
                if(item.typeId!=-1){
                    activeBranchList.push(item);
                }
            }
            return childrenSelectAll
        }
    }
    climbTree(path,list,treePathMap,selectedMap,activeNodeList){
        var self=this;
        if(list&&list.length){
            list.forEach((item,index)=>{
                let currentPath=path+','+index,
                    itemChildren=item.children;
                treePathMap[item.typeId]=currentPath;
                if(selectedMap&&selectedMap[item.typeId]){
                    activeNodeList.push(item);
                }
                if(itemChildren&&itemChildren.length){
                    self.climbTree(currentPath,itemChildren,treePathMap,selectedMap,activeNodeList);
                }
            });
        }
    }
    static defaultProps={
        leafName:'leaf',
        keyName:'keyName',
        title:'下拉菜单'
    };
    static propTypes= {
        /**
         * ui展示的数据结构中的键值
         * */
        keyName:PropTypes.string,
        /**
         * 初始化展示头部文字
         * */
        title:PropTypes.string,
        /**
         * 叶子节点的键值(true or false)
         * */
        leafName:PropTypes.string
    };

    getParams(){
        return this.state.formGroup.map((item)=>{
            return item.typeId;
        });
    }
    /**
     * 渲染标题
     * @param formGroup
     *
     * @return {*}
     */
   renderTitle(formGroup){
        let keyName=this.state.keyName;
       return formGroup&&formGroup.reduce((pre,ele)=>{
           return pre+ele[keyName]+';'
       },'')
   }

    /**
     * 处理多选框点击操作
     * @param ele
     */
    checkboxHandler(ele){
        var cachedFormGroup=this.state.formGroup,
            cachedDropDownBranch=this.state.dropDownBranch;
        /**
         * 按照如下格式存取对外调用的数据，确保完备
         * [ele]//ele为数组中的每一项
         */
        var targetIndex= cachedFormGroup.indexOf(ele);
        if(targetIndex>-1){
            cachedFormGroup.splice(targetIndex,1);
        }else{
            cachedFormGroup.push(ele)
        }
        this.updateParentNode(ele,cachedDropDownBranch,cachedFormGroup);
        let selectedIdList=cachedFormGroup.map((item)=>{
            return item.typeId;
        })
        this.props.onChange&&this.props.onChange(selectedIdList.join(','));
        //this.setState({
        //    formGroup:cachedFormGroup,
        //    dropDownBranch:cachedDropDownBranch,
        //    title:this.renderTitle(cachedFormGroup)||this.props.title
        //})
    }
    renderList(type,ele,activeIndex,index,depth){
        let xml = null;
        let {formGroup,keyName,dropDownBranch,partSelectBranch}=this.state;
        if(type=='branch'){
            //树枝节点
            xml = <li key={depth+ele['typeId']} title={ele[keyName]} className={index==activeIndex?"on":''}
                      onClick={()=>{
                            //设置branch数据状态
                            this.branchCheckBoxHandler(ele);
                     }}>
                <div className='multi-list-checkbox'>
                    <b className={(dropDownBranch.indexOf(ele)>=0?'active':'')+(partSelectBranch[ele.typeId]?' part-select':'')}></b>
                </div>
                <div className='multi-drop-down-list-content'
                     onMouseOver={(e)=>{
                                    if(!this.itemHeight){
                                    let parentNode=e.target;
                                    while(parentNode.nodeName!=='LI'){
                                        parentNode=parentNode.parentElement
                                        if(!parentNode){
                                            parentNode=e.target;
                                            break;
                                        }
                                    }
                                    this.itemHeight=parentNode.offsetHeight
                                    }
                                    this.reCalPosFlag=true;
                                    this.hoverEle=ele;
                                    this.hoverEleIndex=index;
                                    this.dropDownDepth=depth;
                                    this.calculateNextMenuTree(depth,index)
                                 }}
                    >
                    {ele[keyName]}
                </div>
                <em></em>
            </li>
        }else{
            //如果数据在formGroup里面，则勾选
            xml = <li title={ele[keyName]}  className="multi-drop-down-input" onClick={()=>{this.checkboxHandler(ele)}} key={depth+ele['typeId']}>
                <i className={formGroup.indexOf(ele)<0?'check-box':'check-box active'}>
                    <b></b>
                </i>
                <div className="select-drop-down-check-content"> {ele[keyName]}</div>
            </li>
        }
        return  xml;

    }
    /**
     * 计算新的menu队列数据
     * @param depth 状态数组深度
     * @param index 替换的序数号
     */
    calculateNextMenuTree(depth,index){
        let cachedDropDownQueue=this.state.dropDownQueue;
        cachedDropDownQueue=cachedDropDownQueue.slice(0,depth);//每次鼠标浮动，保留之前的
        cachedDropDownQueue[depth] = index;//队列尾部添加序数号
        //推入数据
        this.setState({
            dropDownQueue:cachedDropDownQueue
        });
        return cachedDropDownQueue;
    }
    componentDidUpdate(){
        let {reCalPosFlag,hoverEle,hoverEleIndex,itemHeight,dropDownDepth,offsetYMap}=this,
            {dropDownQueue}=this.state;
        //每次hover结束之后都需要重新计算位置
        if(this.reCalPosFlag){
            //当前需要展开的那一列list
            let curDropDownLi=this.refs['drop-down-'+(dropDownDepth+1)],
                curLevelData=this.props.dropDownData,
                level1Length=curLevelData.length;
            for(let index=0;index<dropDownQueue.length;index++){
                curLevelData=curLevelData[dropDownQueue[index]].children
            }
            //curLevelData为当前需要展开那一列list的data
            if(curDropDownLi){
                let offsetY=hoverEleIndex*itemHeight;
                //基于当前panel顶部的偏移量,offsetYMap始终缓存每一级panel基于第一级panel顶部的offset
                offsetYMap[dropDownDepth]=offsetY;
                if(dropDownDepth>0){
                    //将其调整为基于第一级panel顶部的偏移量
                    let parentOffsetY=offsetYMap[dropDownDepth-1]||0;
                    offsetY=parentOffsetY+offsetY
                }
                if(offsetY+curLevelData.length*itemHeight>level1Length*itemHeight){
                    offsetY=level1Length*itemHeight-curLevelData.length*itemHeight
                }
                if(offsetY<0){
                    offsetY=0;
                }
                offsetYMap[dropDownDepth]=offsetY;
                curDropDownLi.style.marginTop=offsetY+'px';
            }
            this.reCalPosFlag=false;
        }
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.dropDownData){
            let activeNodeList=[],
                activeBranchList=[],
                partSelectBranch={};
            this.generateTreePathMap(this.treePathMap,nextProps,activeNodeList,activeBranchList,partSelectBranch);
            this.setState({
                formGroup:activeNodeList,
                title:this.renderTitle(activeNodeList)||this.props.title,
                dropDownBranch:activeBranchList,
                partSelectBranch:partSelectBranch
        });
        }
    }

    updateParentNode(ele,dropDownBranch,formGroup){
        let {treePathMap}=this,
            {dropDownData}= this.props;
            var path=[];
            if(treePathMap[ele.typeId]){
                path=treePathMap[ele.typeId].split(',');
            }else{
              return;
            }
        //去除根节点-1
        path.shift();
        //去除自身index，只留下中间路径
        path.pop();
        let sblings=dropDownData,
            parent={
                typeId:'0'
            };
        if(path.length){
            path.forEach((index)=>{
                parent=sblings[index];
                sblings=sblings[index].children;
            })
            //console.log(path,sblings)
            var cachedMap={};
            dropDownBranch.forEach((item)=>{
                cachedMap[item.typeId]=true;
            })
            formGroup.forEach((item)=>{
                cachedMap[item.typeId]=true;
            })
            //console.log(cachedMap);
            var currentId=ele.typeId;
            //勾中checkbox,要检查是否全部勾中
            if(cachedMap[currentId]){
                var selectAll=true;
                sblings.forEach((item)=>{
                    if(!cachedMap[item.typeId]){
                        selectAll=false;
                    }
                })
                //如果全部勾中，需要添加parent节点
                if(selectAll){
                    if(parent.typeId!='0'){
                        dropDownBranch.push(parent);
                        this.updateParentNode(parent,dropDownBranch,formGroup)
                    }
                }
            }else{
                //取消勾选
                let index = dropDownBranch.indexOf(parent);
                index > -1 && dropDownBranch.splice(index,1);
                if(parent.typeId!='0') {
                    this.updateParentNode(parent,dropDownBranch,formGroup)
                }
            }
        }
    }

    /**
     * 处理点击树状节点操作，只需考虑子节点的情况
     *
     * 增加自动勾选所有的子级别目录 2016.6.15 *__*
     *
     * @param ele
     */
    branchCheckBoxHandler(ele){
        let {dropDownBranch,formGroup}=this.state;
        //formGroup数据处理
        //树枝节点的处理
        let cachedDropDownBranch=dropDownBranch.slice();
        let cachedFormGroup =formGroup.slice();

        var targetIndex= cachedDropDownBranch.indexOf(ele);
        if(targetIndex>-1){
            cachedDropDownBranch.splice(targetIndex,1);
            this.iterateSourceData(ele.children,function(data){
                if(data&&!data.leaf){
                    let index = cachedDropDownBranch.indexOf(data);
                    index > -1 && cachedDropDownBranch.splice(index,1);
                }else{
                    let index = cachedFormGroup.indexOf(data);
                    index>-1&&cachedFormGroup.splice(index,1);
                }
            });
        }else{
            cachedDropDownBranch.push(ele);
            //遍历子树，推送所有的branch
            this.iterateSourceData(ele.children,function(data){
                if(data&&!data.leaf){
                    let index = cachedDropDownBranch.indexOf(data);
                    index<0&&cachedDropDownBranch.push(data);
                }else{
                    let index = cachedFormGroup.indexOf(data);
                    index<0&&cachedFormGroup.push(data)
                }
            });
        }
        this.updateParentNode(ele,cachedDropDownBranch,cachedFormGroup);
        //console.log('branch',this.state,{
        //    dropDownBranch:cachedDropDownBranch,
        //    formGroup:cachedFormGroup,
        //    title:this.renderTitle(cachedFormGroup)||this.props.title
        //})
        let selectedIdList=cachedFormGroup.map((item)=>{
            return item.typeId;
        })
        this.props.onChange&&this.props.onChange(selectedIdList.join(','));
        //this.setState({
        //    dropDownBranch:cachedDropDownBranch,
        //    formGroup:cachedFormGroup,
        //    title:this.renderTitle(cachedFormGroup)||this.props.title
        //})
    }
    /**
     * 遍历数据，执行自定义操作
     */
    iterateSourceData(data,callback){
        var func=(data)=>{
            for(let i=0;i<data.length;i++){
                callback(data[i]);
                if(data[i]&&data[i].children){
                    func(data[i].children);
                }
            }
        };
        func(data)
    };

    getSourceData(preQueue){
        let {dropDownData} = this.props;
        return  preQueue.reduce((pre,cur)=>{
                return pre[cur].children
            }
        ,dropDownData);
    };
    /**
     * 下拉children所需要的数据形式
     * [1,2,3]=>
     * dropDownData[1].children//第1层
     * dropDownData[1].children[2].children
     * dropDownData[1].children[2].children[3]
     * @type {{dropDownQueue: Array}}
     */
    renderQueuedMenu(dropDownQueue){
        var cachedData=[];
        dropDownQueue.reduce((preQueue,cur)=>{
            /**
             * 参数叠加
             */
            preQueue.push(cur);

            /**
             * 往数组推送数据
             */
            var childMenuSourceData = this.getSourceData.call(this,preQueue);
            if(childMenuSourceData && childMenuSourceData.length>0 ){
                cachedData.push(this.renderChildMenu(childMenuSourceData,preQueue.length,dropDownQueue));
            }
            return preQueue;
        },[]);
        return cachedData;
    }

    /**
     *
     * @param listData 菜单数据
     * @param depth 菜单深度(parent的节点)
     * @return {XML}
     * active的序数号码dropDownQueue[depth+1]
     */
    renderChildMenu(listData,depth,dropDownQueue){
        let {leafName}=this.state;
        let activeIndex = dropDownQueue[depth];
        let XML =  <ul className="multi-drop-down-list select-drop-down-list" key={'drop-down-'+depth} ref={'drop-down-'+depth}>
            {
                listData&&listData.map((ele,index)=>{
                    return ele[leafName]?this.renderList('leaf',ele,activeIndex,index,depth):this.renderList('branch',ele,activeIndex,index,depth);
                })
            }
        </ul>;
        return XML;
    }

    render(){
        let {dropDownData}= this.props;
        let {dropDownQueue,title}=this.state;
        return(
            <div className='question-multi-menu'>
                <div className="question-multi-menu-head" onMouseOver={()=>{
                 this.setState({
                    dropDownQueue:[]
                 })
                }}>
                    <span className="drop-down-hint">
                    {title}
                    </span>
                    <i className='drop-down-arrow'></i>
                </div>
                {dropDownData&&dropDownData.length>0?
                    <div className="question-multi-menu-body">
                        {
                            this.renderChildMenu(dropDownData,0,dropDownQueue)/*来自第0层*/
                        }
                        {
                            this.renderQueuedMenu(dropDownQueue)
                        }

                    </div>:null
                }

            </div>
        );
    }
}