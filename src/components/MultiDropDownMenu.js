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
            formGroup:[],//最后存取的数据
            title:props.title,
            keyName:props.keyName,
            leafName:props.leafName
        };
        this.formData=this.state.formGroup;
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
        var cachedFormGroup=this.state.formGroup;
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
        this.setState({
            formGroup:cachedFormGroup,
            title:this.renderTitle(cachedFormGroup)||this.props.title
        })
    }
    renderList(type,ele,activeIndex,index,depth){
        let xml = null;
        let {formGroup,keyName,dropDownBranch}=this.state;
        if(type=='branch'){
            //树枝节点
            xml = <li key={depth+ele[keyName]} className={index==activeIndex?"on":''}>
                <div className='multi-list-checkbox'
                     onClick={()=>{
                            //设置branch数据状态
                            this.branchCheckBoxHandler(ele);
                     }}>
                    <b className={dropDownBranch.indexOf(ele)>=0?'active':''}></b>
                </div>
                <div className='multi-drop-down-list-content'
                     onMouseOver={()=>{
                                    this.calculateNextMenuTree(depth,index)
                                 }}
                    >
                    {ele[keyName]}
                </div>
                <em></em>
            </li>
        }else{
            //如果数据在formGroup里面，则勾选
            xml = <li className="multi-drop-down-input" onClick={()=>{this.checkboxHandler(ele)}} key={depth+ele[keyName]}>
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
    /**
     * 处理点击树状节点操作，只需考虑子节点的情况
     *
     * 增加自动勾选所有的子级别目录 2016.6.15*__*
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
                    cachedDropDownBranch.push(data);
                }else{
                    let index = cachedFormGroup.indexOf(data);
                    index<0&&cachedFormGroup.push(data)
                }
            });
        }
        this.setState({
            dropDownBranch:cachedDropDownBranch,
            formGroup:cachedFormGroup,
            title:this.renderTitle(cachedFormGroup)||this.props.title
        })
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
        let XML =  <ul className="multi-drop-down-list select-drop-down-list" key={depth}>
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
                    <div className="question-multi-menu-body" style={{display:'block'}}>
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