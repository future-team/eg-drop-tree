
/**
 * Created by slashhuang on 16/5/10.
 */
import React, { Component ,PropTypes} from 'react';
import {render} from 'react/lib/ReactDOM';
require('./public.less');
import MultiDropDown from "../../src/index.js";//联想功能组件
export default class IndexModule extends Component {
    constructor(props,context){
        super(props,context);
    }
    render(){
        let mockMultiDropData=[
            {
                "typeName": "第1.0级",
                "children": [
                    {
                        "typeName": "第2.0级",
                        "children": [
                            {
                            "typeName": "第3.0级",
                            "children": [ ],
                            "leaf":true
                            },
                            {
                                "typeName":"第3.1级",
                                "children": [{
                                    "typeName":"第4.0级",
                                    "children": [
                                        {
                                            "typeName":"第5.0级",
                                            "children": [ ],
                                            "leaf":true
                                        },
                                        {
                                            "typeName": "第5.1级",
                                            "children": [ ]
                                        },
                                        {
                                            "typeName": "第5.2级",
                                            "children": [ ],
                                            "leaf":true
                                        }]
                                    },
                                    {
                                        "typeName": "第4.2级",
                                        "children": [ ]
                                    },
                                    {
                                        "typeName": "第4.3级",
                                        "children": [ ],
                                        "leaf":true
                                    }]
                            },
                            {
                                "typeName": "第3.2级",
                                "children": [ ]
                            },
                            {
                                "typeName": "第3.3级",
                                "children": [ ],
                                "leaf":true
                            }
                        ]
                    },
                    {
                        "typeName": "第2.1级",
                        "children": [ ],
                        "leaf":true
                    }
                ]
            },
            {
                "typeName": "第1.0=级",
                "children": [
                    {
                        "typeName":"第2.0=级",
                        "children": [
                            {
                                "typeName": "3.0=级",
                                "children": [ ],
                                "leaf":true
                            }
                        ]
                    }
                ]
            }
        ];
        var bu = [
            {id: 1,name: "交易后台"},
            {id: 2,name: "结婚1"}];
        let menuData=[
            { data:'近一个周的问题',callback:()=>{alert('clicked')}},
            { data:'近一个月的问题',callback:()=>{alert('clicked')}},
            { data:'一个月之前的问题',callback:()=>{alert('clicked')}}];

        return (
            <div className="paddingSpace">

                <div style={{fontSize:'12px',display:'inline-block',width:'200px'}}>
                    <MultiDropDown dropDownData={mockMultiDropData} keyName='typeName' leafName='leaf' title="树状列表选择" ref="MultiDropDown"/>
                </div>

                <div className='demo-button-container'>
                    <div className='demo-button' style={{background:'red'}} onClick={()=>{this.getDropDownData('MultiDropDown')}}>点击获取树状列表的选择结果</div></div>
            </div>
        );
    }
    getDropDownData(type){
        alert(JSON.stringify(this.refs[type].formData));
    }
}
render(<IndexModule/>,document.getElementById('root'));

