
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
        this.state={
            mockMultiDropData:[],
            selected:[1000023, 1000022, 1000024, 1000025, 1000034, 1000035, 1000036, 1000037, 1000026, 1000027, 1000028, 1000029, 1000030, 1000031, 1000032, 1000033, 1000038, 1000039, 1000040, 1000041, 1000042, 1000043, 1000044, 1000045, 1000046, 1000047, 1000048, 1000049, 1000050, 1000051, 1000052, 1000053, 1000055, 1000056, 1000057, 1000058, 1000059, 1000060, 1000061, 1000062, 1000063, 1000064, 1000219, 1000065, 1000066, 1000067, 1000068, 1000069, 1000070, 1000054, 1000071, 1000072, 1000073, 1000074, 1000075, 1000076, 1000077, 1000078, 1000079, 1000080, 1000081, 1000082, 1000083, 1000084, 1000085, 1000086, 1000087, 1000088, 1000089, 1000090, 1000091, 1000092, 1000093, 1000094, 1000095, 1000096].join(',')
            }
    }
    componentDidMount(){
        var self=this;
        setTimeout(function(){
            self.setState({
                mockMultiDropData:[
                    {
                        "typeId": 2,
                        "parentTypeId": 0,
                        "typeName": "测试",
                        "leadingAnswer": "",
                        "level": 1,
                        "firstOwnerId": 0,
                        "secondOwnerId": 0,
                        "children": [
                            {
                                "typeId": 1000023,
                                "parentTypeId": 10005,
                                "typeName": "线上测试",
                                "leadingAnswer": "这是线上测试分类,你玩我吧!",
                                "level": 3,
                                "firstOwnerId": 22315,
                                "secondOwnerId": 17896,
                                "children": [],
                                "leaf": true
                            }, {
                                "typeId": 1000022,
                                "parentTypeId": 10005,
                                "typeName": "线上测试",
                                "leadingAnswer": "这是线上测试分类,你玩我吧!",
                                "level": 3,
                                "firstOwnerId": 22315,
                                "secondOwnerId": 17896,
                                "children": [],
                                "leaf": true
                            },
                            {
                                "typeId": 1000024,
                                "parentTypeId": 10005,
                                "typeName": "ppe测试",
                                "leadingAnswer": "这是线上测试分类,你玩我吧!",
                                "level": 3,
                                "firstOwnerId": 22315,
                                "secondOwnerId": 17896,
                                "children": [],
                                "leaf": true
                            },
                            {
                                "typeId": 1000025,
                                "parentTypeId": 10005,
                                "typeName": "beta测试",
                                "leadingAnswer": "这是线上测试分类,你玩我吧!",
                                "level": 3,
                                "firstOwnerId": 22315,
                                "secondOwnerId": 17896,
                                "children": [],
                                "leaf": true
                            }
                        ],
                        "leaf": false
                    },
                    {
                        "typeId": 3,
                        "parentTypeId": 0,
                        "typeName": "POI相关",
                        "leadingAnswer": "",
                        "level": 1,
                        "firstOwnerId": 0,
                        "secondOwnerId": 0,
                        "children": [
                            {
                                "typeId": 10014,
                                "parentTypeId": 3,
                                "typeName": "评价评分",
                                "leadingAnswer": "",
                                "level": 2,
                                "firstOwnerId": 0,
                                "secondOwnerId": 0,
                                "children": [
                                    {
                                        "typeId": 1000034,
                                        "parentTypeId": 10014,
                                        "typeName": "美团侧评价",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 37743,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000035,
                                        "parentTypeId": 10014,
                                        "typeName": "点评侧评价",
                                        "leadingAnswer": "点评评价的恶意差评、炒作的举报和申诉请到<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://trust.dianping.com\" target=\"_blank\">http://trust.dianping.com</a>提交反馈",
                                        "level": 3,
                                        "firstOwnerId": 20779,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000036,
                                        "parentTypeId": 10014,
                                        "typeName": "美团侧星级评分",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 25305,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000037,
                                        "parentTypeId": 10014,
                                        "typeName": "点评侧评分",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 34348,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    }
                                ],
                                "leaf": false
                            },
                            {
                                "typeId": 1000026,
                                "parentTypeId": 10006,
                                "typeName": "门店基本信息/地图报错",
                                "leadingAnswer": "\n【到综/到餐推广销售】请在阿波罗商机（门店）标签→【POI报错】入口提交报错：<br/>\n  <a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"https://a.dper.com/shops#!/shop/all\" target=\"_blank\">https://a.dper.com/shops#!/shop/all</a><br/>\n【到餐销售】请在美团点评数据门户报错，报错入口：<br/>\n  <a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://mdc.sankuai.com/web/report/poierror\" target=\"_blank\">http://mdc.sankuai.com/web/report/poierror</a><br/>\n  以上报错90%系统都能够自动处理，比其他渠道等着人工处理要快的多。<br/>\n 【点评&美团映射关系报错】，所有销售都请在MDC门户→美大关联报错提交：<br/>\n  <a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://mdc.sankuai.com/web/report/relatingreport\" target=\"_blank\">http://mdc.sankuai.com/web/report/relatingreport</a><br/>\n  以上报错都会在1个工作日内17:00前处理完毕\n不管在门户或阿波罗报错，商户名、地址、电话、营业状态、地图字段通过审核后，会自动同步修改另一侧信息（除行政区、商区、靠近字段，这三个字段需要在<br/><a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://mdc.sankuai.com/\" target=\"_blank\">http://mdc.sankuai.com/</a>，门店报错-丰富度信息，点击管理点评连锁，跳转点评阿波罗报错审核）",
                                "level": 3,
                                "firstOwnerId": 37425,
                                "secondOwnerId": 0,
                                "children": [],
                                "leaf": true
                            },
                            {
                                "typeId": 1000027,
                                "parentTypeId": 10007,
                                "typeName": "门店营业状态报错",
                                "leadingAnswer": "【到综/到餐推广销售】请在阿波罗商机（门店）标签→【POI报错】入口提交报错：<br/>\n  <a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"https://a.dper.com/shops#!/shop/all\" target=\"_blank\">https://a.dper.com/shops#!/shop/all</a><br/>\n【到餐销售】请在美团点评数据门户报错，报错入口：<br/>\n  <a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://mdc.sankuai.com/web/report/poierror\" target=\"_blank\">http://mdc.sankuai.com/web/report/poierror</a><br/>\n  以上报错90%系统都能够自动处理，比其他渠道等着人工处理要快的多。<br/>\n 【点评&美团映射关系报错】，所有销售都请在MDC门户→美大关联报错提交：<br/>\n  <a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://mdc.sankuai.com/web/report/relatingreport\" target=\"_blank\">http://mdc.sankuai.com/web/report/relatingreport</a><br/>\n  以上报错都会在1个工作日内17:00前处理完毕\n不管在门户或阿波罗报错，商户名、地址、电话、营业状态、地图字段通过审核后，会自动同步修改另一侧信息（除行政区、商区、靠近字段，这三个字段需要在<br/><a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://mdc.sankuai.com/\" target=\"_blank\">http://mdc.sankuai.com/</a>，门店报错-丰富度信息，点击管理点评连锁，跳转点评阿波罗报错审核）",
                                "level": 3,
                                "firstOwnerId": 37425,
                                "secondOwnerId": 0,
                                "children": [],
                                "leaf": true
                            },
                            {
                                "typeId": 1000028,
                                "parentTypeId": 10008,
                                "typeName": "举报重复/拆分/美大关联",
                                "leadingAnswer": "【到综/到餐推广销售】请在阿波罗商机（门店）标签→【POI报错】入口提交报错：<br/>\n  <a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"https://a.dper.com/shops#!/shop/all\" target=\"_blank\">https://a.dper.com/shops#!/shop/all</a><br/>\n【到餐销售】请在美团点评数据门户报错，报错入口：<br/>\n  <a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://mdc.sankuai.com/web/report/poierror\" target=\"_blank\">http://mdc.sankuai.com/web/report/poierror</a><br/>\n  以上报错90%系统都能够自动处理，比其他渠道等着人工处理要快的多。<br/>\n 【点评&美团映射关系报错】，所有销售都请在MDC门户→美大关联报错提交：<br/>\n  <a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://mdc.sankuai.com/web/report/relatingreport\" target=\"_blank\">http://mdc.sankuai.com/web/report/relatingreport</a><br/>\n  以上报错都会在1个工作日内17:00前处理完毕\n不管在门户或阿波罗报错，商户名、地址、电话、营业状态、地图字段通过审核后，会自动同步修改另一侧信息（除行政区、商区、靠近字段，这三个字段需要在<br/><a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://mdc.sankuai.com/\" target=\"_blank\">http://mdc.sankuai.com/</a>，门店报错-丰富度信息，点击管理点评连锁，跳转点评阿波罗报错审核）",
                                "level": 3,
                                "firstOwnerId": 37425,
                                "secondOwnerId": 0,
                                "children": [],
                                "leaf": true
                            },
                            {
                                "typeId": 1000029,
                                "parentTypeId": 10009,
                                "typeName": "门店品牌连锁",
                                "leadingAnswer": "【到综/到餐推广销售】请在阿波罗商机（门店）标签→【POI报错】入口提交报错：<br/>\n  <a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"https://a.dper.com/shops#!/shop/all\" target=\"_blank\">https://a.dper.com/shops#!/shop/all</a><br/>\n【到餐销售】请在美团点评数据门户报错，报错入口：<br/>\n  <a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://mdc.sankuai.com/web/report/poierror\" target=\"_blank\">http://mdc.sankuai.com/web/report/poierror</a><br/>\n  以上报错90%系统都能够自动处理，比其他渠道等着人工处理要快的多。<br/>\n 【点评&美团映射关系报错】，所有销售都请在MDC门户→美大关联报错提交：<br/>\n  <a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://mdc.sankuai.com/web/report/relatingreport\" target=\"_blank\">http://mdc.sankuai.com/web/report/relatingreport</a><br/>\n  以上报错都会在1个工作日内17:00前处理完毕\n不管在门户或阿波罗报错，商户名、地址、电话、营业状态、地图字段通过审核后，会自动同步修改另一侧信息（除行政区、商区、靠近字段，这三个字段需要在<br/><a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://mdc.sankuai.com/\" target=\"_blank\">http://mdc.sankuai.com/</a>，门店报错-丰富度信息，点击管理点评连锁，跳转点评阿波罗报错审核）",
                                "level": 3,
                                "firstOwnerId": 37425,
                                "secondOwnerId": 0,
                                "children": [],
                                "leaf": true
                            },
                            {
                                "typeId": 1000030,
                                "parentTypeId": 10010,
                                "typeName": "举报虚假门店",
                                "leadingAnswer": "【举报虚假门店】需要提供对应的shop ID及对应的举证，不接受只提供商户名的虚假门店报错；一个shop ID至少对应一张能证明门店确实虚假的照片，即提供的照片可以证明在该地址上的确不存在该门店，因此照片需要能同时将该地址和门头照拍下来，如果一张照片无法同时体现地址和门头照，可以分成有共同之处的两张照片，提供以上资质到qc.mdc@meituan.com审核处理",
                                "level": 3,
                                "firstOwnerId": 37425,
                                "secondOwnerId": 0,
                                "children": [],
                                "leaf": true
                            },
                            {
                                "typeId": 1000031,
                                "parentTypeId": 10011,
                                "typeName": "门店首图展示",
                                "leadingAnswer": "美团首图设置请到以下链接自行报错，1个工作日内17:00前处理完毕\n<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://mdc.sankuai.com/web/report/img\" target=\"_blank\">http://mdc.sankuai.com/web/report/img</a>",
                                "level": 3,
                                "firstOwnerId": 37425,
                                "secondOwnerId": 0,
                                "children": [],
                                "leaf": true
                            },
                            {
                                "typeId": 1000032,
                                "parentTypeId": 10012,
                                "typeName": "门店品类划分",
                                "leadingAnswer": "【到综/到餐推广销售】请在阿波罗商机（门店）标签→【POI报错】入口提交报错：<br/>\n  <a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"https://a.dper.com/shops#!/shop/all\" target=\"_blank\">https://a.dper.com/shops#!/shop/all</a><br/>\n【到餐销售】请在MDC门户报错，报错入口：<br/>\n  <a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://mdc.sankuai.com/web/report/poierror\" target=\"_blank\">http://mdc.sankuai.com/web/report/poierror</a><br/>\n以上报错都会在1个工作日内17:00前处理完毕",
                                "level": 3,
                                "firstOwnerId": 37434,
                                "secondOwnerId": 0,
                                "children": [],
                                "leaf": true
                            },
                            {
                                "typeId": 1000033,
                                "parentTypeId": 10013,
                                "typeName": "门店罚款相关",
                                "leadingAnswer": "",
                                "level": 3,
                                "firstOwnerId": 37425,
                                "secondOwnerId": 0,
                                "children": [],
                                "leaf": true
                            },
                            {
                                "typeId": 1000038,
                                "parentTypeId": 10015,
                                "typeName": "其他POI问题",
                                "leadingAnswer": "闪惠二维码自助重置，请点击此链接自助恢复扫码功能，处理后立即生效：<br/><a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://bd.hui.dper.com/hui/poi/shop_query\" target=\"_blank\">http://bd.hui.dper.com/hui/poi/shop_query</a>\n补充点评侧商区体系结构，请在阿波罗商机（门店）标签→【POI报错】入口→新增商区结构提交报错，每周三迭代上线，可每周四查看：<br/><a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"https://a.dper.com/shops#!/shop/all\" target=\"_blank\">https://a.dper.com/shops#!/shop/all</a>",
                                "level": 3,
                                "firstOwnerId": 37425,
                                "secondOwnerId": 0,
                                "children": [],
                                "leaf": true
                            }
                        ],
                        "leaf": false
                    },
                    {
                        "typeId": 4,
                        "parentTypeId": 0,
                        "typeName": "公私海拜访/任务相关/仪表盘相关/MOMA异常",
                        "leadingAnswer": "",
                        "level": 1,
                        "firstOwnerId": 0,
                        "secondOwnerId": 0,
                        "children": [
                            {
                                "typeId": 1000039,
                                "parentTypeId": 10016,
                                "typeName": "公私海及拜访相关",
                                "leadingAnswer": "1.公海中的门店不能认领。\n公海中商家如不在BD的负责区域内，BD不可认领该门店（无认领按钮），商家是否在BD的负责区域是根据在MDC新建门店时的坐标判断。<br/>\n2.门店不能延期？\n门店进入冻结期后，方可操作延期，望知悉。",
                                "level": 3,
                                "firstOwnerId": 25047,
                                "secondOwnerId": 0,
                                "children": [],
                                "leaf": true
                            },
                            {
                                "typeId": 1000040,
                                "parentTypeId": 10017,
                                "typeName": "仪表盘相关",
                                "leadingAnswer": "1.仪表盘的数据是依据提成计算的逻辑显示相关数据，如对数据有疑问，可登陆报表门户<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://report.mtdata.sankuai.com/\" target=\"_blank\">http://report.mtdata.sankuai.com/</a>查看「新美大-BD业绩汇总（含门店）」并在相应页面提交反馈。",
                                "level": 3,
                                "firstOwnerId": 3163,
                                "secondOwnerId": 0,
                                "children": [],
                                "leaf": true
                            },
                            {
                                "typeId": 1000041,
                                "parentTypeId": 10018,
                                "typeName": "任务、通知及提醒",
                                "leadingAnswer": "1. 对任务/通知功能的业务问题，例如：对任务规则的疑问，希望增减工单，请直接联系任务创建人<br/>\n2. 对任务/通知列表的功能问题，例如：看不到工单，收不到通知等，请在下面提交问题",
                                "level": 3,
                                "firstOwnerId": 4691,
                                "secondOwnerId": 0,
                                "children": [],
                                "leaf": true
                            },
                            {
                                "typeId": 1000042,
                                "parentTypeId": 10019,
                                "typeName": "MOMA系统异常",
                                "leadingAnswer": "此分类仅处理 MOMA 下载/安装/下载过程中遇到的问题<br/>\n使用 MOMA “我的项目” 遇到的问题，请提交至 “合同/上单” 分类下对应的子分类<br/>\nMOMA常见问题及帮助：<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=345942954\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=345942954</a>",
                                "level": 3,
                                "firstOwnerId": 4691,
                                "secondOwnerId": 0,
                                "children": [],
                                "leaf": true
                            },
                            {
                                "typeId": 1000043,
                                "parentTypeId": 10020,
                                "typeName": "CRM系统优化建议",
                                "leadingAnswer": "",
                                "level": 3,
                                "firstOwnerId": 25047,
                                "secondOwnerId": 0,
                                "children": [],
                                "leaf": true
                            }
                        ],
                        "leaf": false
                    },
                    {
                        "typeId": 5,
                        "parentTypeId": 0,
                        "typeName": "合同/上单",
                        "leadingAnswer": "",
                        "level": 1,
                        "firstOwnerId": 0,
                        "secondOwnerId": 0,
                        "children": [
                            {
                                "typeId": 10021,
                                "parentTypeId": 5,
                                "typeName": "上单相关",
                                "leadingAnswer": "",
                                "level": 2,
                                "firstOwnerId": 0,
                                "secondOwnerId": 0,
                                "children": [
                                    {
                                        "typeId": 1000044,
                                        "parentTypeId": 10021,
                                        "typeName": "上单规则",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 32259,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000045,
                                        "parentTypeId": 10021,
                                        "typeName": "上单审核问题",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 32259,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000046,
                                        "parentTypeId": 10021,
                                        "typeName": "上单规则特批",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 29256,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000047,
                                        "parentTypeId": 10021,
                                        "typeName": "确认页面反馈",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 32259,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000048,
                                        "parentTypeId": 10021,
                                        "typeName": "撰写进度咨询",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 32259,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000049,
                                        "parentTypeId": 10021,
                                        "typeName": "毛利咨询",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 5239,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    }
                                ],
                                "leaf": false
                            },
                            {
                                "typeId": 10022,
                                "parentTypeId": 5,
                                "typeName": "上线后修改",
                                "leadingAnswer": "",
                                "level": 2,
                                "firstOwnerId": 0,
                                "secondOwnerId": 0,
                                "children": [
                                    {
                                        "typeId": 1000050,
                                        "parentTypeId": 10022,
                                        "typeName": "合同变更",
                                        "leadingAnswer": "售后手册：<br/><a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=71737727\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=71737727</a>",
                                        "level": 3,
                                        "firstOwnerId": 5239,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000051,
                                        "parentTypeId": 10022,
                                        "typeName": "页面修改",
                                        "leadingAnswer": "上线后页面条款修改标准5.1版：<br/><a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=73008462\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=73008462</a>",
                                        "level": 3,
                                        "firstOwnerId": 5239,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000052,
                                        "parentTypeId": 10022,
                                        "typeName": "上线后变更审核问题",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 5239,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000053,
                                        "parentTypeId": 10022,
                                        "typeName": "top商家页面修改特批",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 2645,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    }
                                ],
                                "leaf": false
                            },
                            {
                                "typeId": 10024,
                                "parentTypeId": 5,
                                "typeName": "上单特殊申请",
                                "leadingAnswer": "",
                                "level": 2,
                                "firstOwnerId": 0,
                                "secondOwnerId": 0,
                                "children": [
                                    {
                                        "typeId": 1000055,
                                        "parentTypeId": 10024,
                                        "typeName": "盖章申请",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 6621,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000056,
                                        "parentTypeId": 10024,
                                        "typeName": "甲方合同/甲方文件审核",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 6621,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000057,
                                        "parentTypeId": 10024,
                                        "typeName": "涉黄相关",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 17477,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    }
                                ],
                                "leaf": false
                            },
                            {
                                "typeId": 10025,
                                "parentTypeId": 5,
                                "typeName": "餐饮上单系统",
                                "leadingAnswer": "",
                                "level": 2,
                                "firstOwnerId": 0,
                                "secondOwnerId": 0,
                                "children": [
                                    {
                                        "typeId": 1000058,
                                        "parentTypeId": 10025,
                                        "typeName": "新建/修改合同/合作商",
                                        "leadingAnswer": "新上单系统 <br/><a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=374472408\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=374472408</a>",
                                        "level": 3,
                                        "firstOwnerId": 37426,
                                        "secondOwnerId": 17495,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000059,
                                        "parentTypeId": 10025,
                                        "typeName": "新建/修改买单项目",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 37426,
                                        "secondOwnerId": 33682,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000060,
                                        "parentTypeId": 10025,
                                        "typeName": "新建/修改团购项目",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 37426,
                                        "secondOwnerId": 7748,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000061,
                                        "parentTypeId": 10025,
                                        "typeName": "财务结算",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 37426,
                                        "secondOwnerId": 3072,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000062,
                                        "parentTypeId": 10025,
                                        "typeName": "摄影师拍图",
                                        "leadingAnswer": "项目无法创建拍摄任务，请查看编辑图片信息采写状态是否勾选为“否”。",
                                        "level": 3,
                                        "firstOwnerId": 37426,
                                        "secondOwnerId": 25028,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000063,
                                        "parentTypeId": 10025,
                                        "typeName": "商家确认",
                                        "leadingAnswer": "1、如果商家收不到美团域邮件，请先检查邮箱地址填写是否正确（QQ邮箱250505450@qq.com，写成250505450@qq.om，肯定是收不到的）<br/>\n2、如果是自建的邮箱系统建议合作伙伴或者商户把美团的邮件服务器IP地址添加为白名单。",
                                        "level": 3,
                                        "firstOwnerId": 37426,
                                        "secondOwnerId": 25028,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000064,
                                        "parentTypeId": 10025,
                                        "typeName": "其他优化建议",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 37426,
                                        "secondOwnerId": 14549,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000219,
                                        "parentTypeId": 10025,
                                        "typeName": "电子合同",
                                        "leadingAnswer": "电子合同相关说明 <br/><a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=526713985\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=526713985</a>",
                                        "level": 3,
                                        "firstOwnerId": 7748,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    }
                                ],
                                "leaf": false
                            },
                            {
                                "typeId": 10026,
                                "parentTypeId": 5,
                                "typeName": "非餐上单系统",
                                "leadingAnswer": "",
                                "level": 2,
                                "firstOwnerId": 0,
                                "secondOwnerId": 0,
                                "children": [
                                    {
                                        "typeId": 1000065,
                                        "parentTypeId": 10026,
                                        "typeName": "阿波罗客户协议",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 37426,
                                        "secondOwnerId": 32936,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000066,
                                        "parentTypeId": 10026,
                                        "typeName": "阿波罗验券&团购消费记录",
                                        "leadingAnswer": "BD门户top问题梳理<br/><a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=435884877\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=435884877</a>",
                                        "level": 3,
                                        "firstOwnerId": 37426,
                                        "secondOwnerId": 28305,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000067,
                                        "parentTypeId": 10026,
                                        "typeName": "阿波罗闪惠消费记录",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 37426,
                                        "secondOwnerId": 18901,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000068,
                                        "parentTypeId": 10026,
                                        "typeName": "C端团购展示",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 37426,
                                        "secondOwnerId": 25865,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000069,
                                        "parentTypeId": 10026,
                                        "typeName": "C端闪惠展示",
                                        "leadingAnswer": "BD门户top问题梳理<br/><a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=435884877\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=435884877</a>",
                                        "level": 3,
                                        "firstOwnerId": 37426,
                                        "secondOwnerId": 18901,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000070,
                                        "parentTypeId": 10026,
                                        "typeName": "非餐-阿波罗上单",
                                        "leadingAnswer": "BD门户top问题梳理<br/><a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=435884877\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=435884877</a>",
                                        "level": 3,
                                        "firstOwnerId": 37426,
                                        "secondOwnerId": 16295,
                                        "children": [],
                                        "leaf": true
                                    }
                                ],
                                "leaf": false
                            },
                            {
                                "typeId": 1000054,
                                "parentTypeId": 10023,
                                "typeName": "纸质合同归档",
                                "leadingAnswer": "",
                                "level": 3,
                                "firstOwnerId": 27655,
                                "secondOwnerId": 0,
                                "children": [],
                                "leaf": true
                            }
                        ],
                        "leaf": false
                    },
                    {
                        "typeId": 6,
                        "parentTypeId": 0,
                        "typeName": "预付/结款/发票",
                        "leadingAnswer": "",
                        "level": 1,
                        "firstOwnerId": 0,
                        "secondOwnerId": 0,
                        "children": [
                            {
                                "typeId": 10027,
                                "parentTypeId": 6,
                                "typeName": "预付相关",
                                "leadingAnswer": "",
                                "level": 2,
                                "firstOwnerId": 0,
                                "secondOwnerId": 0,
                                "children": [
                                    {
                                        "typeId": 1000071,
                                        "parentTypeId": 10027,
                                        "typeName": "CBD餐饮预付规则及流程",
                                        "leadingAnswer": "1、餐饮预付的规则<br/>\n<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=74918759\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=74918759</a><br/>\n2、预付工作台如何使用？<br/>\n<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=192943557\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=192943557</a><br/>\n3、合同的关联以及解除关联和重新关联<br/>\n<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=391651820\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=391651820</a><br/>\n4、需要发邮件给baoxiao@meituan.com的特殊流程<br/>\n<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=181778889\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=181778889</a><br/>\n5、综合业务取消预付<br/>\n<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=410007821\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=410007821</a>",
                                        "level": 3,
                                        "firstOwnerId": 30093,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000072,
                                        "parentTypeId": 10027,
                                        "typeName": "南中国餐饮预付规则及流程",
                                        "leadingAnswer": "1、餐饮预付的规则<br/>\n<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=74918759\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=74918759</a><br/>\n2、预付工作台如何使用？<br/>\n<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=192943557\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=192943557</a><br/>\n3、合同的关联以及解除关联和重新关联<br/>\n<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=391651820\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=391651820</a><br/>\n4、需要发邮件给baoxiao@meituan.com的特殊流程<br/>\n<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=181778889\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=181778889</a><br/>\n5、综合业务取消预付<br/>\n<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=410007821\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=410007821</a>",
                                        "level": 3,
                                        "firstOwnerId": 12234,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000073,
                                        "parentTypeId": 10027,
                                        "typeName": "北中国餐饮预付规则及流程",
                                        "leadingAnswer": "1、餐饮预付的规则<br/>\n<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=74918759\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=74918759</a><br/>\n2、预付工作台如何使用？<br/>\n<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=192943557\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=192943557</a><br/>\n3、合同的关联以及解除关联和重新关联<br/>\n<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=391651820\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=391651820</a><br/>\n4、需要发邮件给baoxiao@meituan.com的特殊流程<br/>\n<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=181778889\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=181778889</a><br/>\n5、综合业务取消预付<br/>\n<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=410007821\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=410007821</a>",
                                        "level": 3,
                                        "firstOwnerId": 29149,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000074,
                                        "parentTypeId": 10027,
                                        "typeName": "品牌战略餐饮预付规则及流程",
                                        "leadingAnswer": "1、餐饮预付的规则<br/>\n<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=74918759\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=74918759</a><br/>\n2、预付工作台如何使用？<br/>\n<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=192943557\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=192943557</a><br/>\n3、合同的关联以及解除关联和重新关联<br/>\n<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=391651820\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=391651820</a><br/>\n4、需要发邮件给baoxiao@meituan.com的特殊流程<br/>\n<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=181778889\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=181778889</a><br/>\n5、综合业务取消预付<br/>\n<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=410007821\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=410007821</a>",
                                        "level": 3,
                                        "firstOwnerId": 8498,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000075,
                                        "parentTypeId": 10027,
                                        "typeName": "坏账反馈追缴",
                                        "leadingAnswer": "请参考链接<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=525246152\" target=\"_blank\">追款全攻略（点击有惊喜）</a>",
                                        "level": 3,
                                        "firstOwnerId": 35288,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000076,
                                        "parentTypeId": 10027,
                                        "typeName": "预付余额迁移",
                                        "leadingAnswer": "请参考链接<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=521633893\" target=\"_blank\">阿波罗系统尾款处理方案</a>",
                                        "level": 3,
                                        "firstOwnerId": 19782,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000077,
                                        "parentTypeId": 10027,
                                        "typeName": "非餐饮预付问题",
                                        "leadingAnswer": "如果原美团有预付尾款，请BD及时迁移尾款至阿波罗系统，并在阿波罗系统上单关联消耗，避免产生坏账。",
                                        "level": 3,
                                        "firstOwnerId": 23366,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000078,
                                        "parentTypeId": 10027,
                                        "typeName": "卖超打款",
                                        "leadingAnswer": "此分类主要针对点评侧预付卖超打款问题，如果商家认为点评侧打款有疑问（没收到钱）、需要对账，或为美团侧打款问题请优先联系城市运营反馈。城市运营无法解决请将无法解决的问题点写明在提问描述中，选择分类【预付/结款/发票-财务结款】中对应事业部进行反馈",
                                        "level": 3,
                                        "firstOwnerId": 19782,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    }
                                ],
                                "leaf": false
                            },
                            {
                                "typeId": 10028,
                                "parentTypeId": 6,
                                "typeName": "财务结款",
                                "leadingAnswer": "",
                                "level": 2,
                                "firstOwnerId": 0,
                                "secondOwnerId": 0,
                                "children": [
                                    {
                                        "typeId": 1000079,
                                        "parentTypeId": 10028,
                                        "typeName": "CBD打款问题",
                                        "leadingAnswer": "1、若是后台显示打款成功，但商家没收到款，请在“财务平台—付款凭证”模块提交问题；<br/>\n2、若为点评侧款项问题，一直未付款，请先核对是否绑定了默认银行账号，设置默认银行账号后，系统第二天会自动触发打款；<br/>\n3、财务结算问题应由城市运营支持专员解读，如有问题可先咨询城市运营同事，若仍无法解答请提交。<br/>\n美团侧结算常见问题参见wiki：<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=420263897\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=420263897</a>\n4、点评侧结算常见问题参见wiki：<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=482512772\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=482512772</a>",
                                        "level": 3,
                                        "firstOwnerId": 2501,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000080,
                                        "parentTypeId": 10028,
                                        "typeName": "南中国打款问题",
                                        "leadingAnswer": "1、若是后台显示打款成功，但商家没收到款，请在“财务平台—付款凭证”模块提交问题；\n<br/>2、若为点评侧款项问题，一直未付款，请先核对是否绑定了默认银行账号，设置默认银行账号后，系统第二天会自动触发打款；\n<br/>3、财务结算问题应由城市运营支持专员解读，如有问题可先咨询城市运营同事，若仍无法解答请提交。\n美团侧结算常见问题参见wiki：<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=420263897\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=420263897</a>\n<br/>4、点评侧结算常见问题参见wiki：<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=482512772\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=482512772</a>",
                                        "level": 3,
                                        "firstOwnerId": 18779,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000081,
                                        "parentTypeId": 10028,
                                        "typeName": "北中国打款问题",
                                        "leadingAnswer": "1、若是后台显示打款成功，但商家没收到款，请在“财务平台—付款凭证”模块提交问题；\n<br/>2、若为点评侧款项问题，一直未付款，请先核对是否绑定了默认银行账号，设置默认银行账号后，系统第二天会自动触发打款；\n<br/>3、财务结算问题应由城市运营支持专员解读，如有问题可先咨询城市运营同事，若仍无法解答请提交。\n美团侧结算常见问题参见wiki：<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=420263897\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=420263897</a>\n<br/>4、点评侧结算常见问题参见wiki：<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=482512772\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=482512772</a>",
                                        "level": 3,
                                        "firstOwnerId": 28446,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000082,
                                        "parentTypeId": 10028,
                                        "typeName": "品牌战略打款问题",
                                        "leadingAnswer": "1、若是后台显示打款成功，但商家没收到款，请在“财务平台—付款凭证”模块提交问题；<br/>\n2、若为点评侧款项问题，一直未付款，请先核对是否绑定了默认银行账号，设置默认银行账号后，系统第二天会自动触发打款；<br/>\n3、财务结算问题应由城市运营支持专员解读，如有问题可先咨询城市运营同事，若仍无法解答请提交。<br/>\n美团侧结算常见问题参见wiki：<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=420263897\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=420263897</a>\n<br/>4、点评侧结算常见问题参见wiki：<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=482512772\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=482512772</a>",
                                        "level": 3,
                                        "firstOwnerId": 2501,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000083,
                                        "parentTypeId": 10028,
                                        "typeName": "CBDT+1问题",
                                        "leadingAnswer": "T+1结算由城市BD发起申请，具体规则及操作流程可参见wiki：<br/><a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=440278269\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=440278269</a>",
                                        "level": 3,
                                        "firstOwnerId": 2501,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000084,
                                        "parentTypeId": 10028,
                                        "typeName": "南中国T+1问题",
                                        "leadingAnswer": "T+1结算由城市BD发起申请，具体规则及操作流程可参见wiki：<br/><a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=440278269\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=440278269</a>",
                                        "level": 3,
                                        "firstOwnerId": 18779,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000085,
                                        "parentTypeId": 10028,
                                        "typeName": "北中国T+1问题",
                                        "leadingAnswer": "T+1结算由城市BD发起申请，具体规则及操作流程可参见wiki：<br/><a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=440278269\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=440278269</a>",
                                        "level": 3,
                                        "firstOwnerId": 28446,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000086,
                                        "parentTypeId": 10028,
                                        "typeName": "品牌战略T+1问题",
                                        "leadingAnswer": "T+1结算由城市BD发起申请，具体规则及操作流程可参见wiki：<br/><a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=440278269\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=440278269</a>",
                                        "level": 3,
                                        "firstOwnerId": 2501,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000087,
                                        "parentTypeId": 10028,
                                        "typeName": "CBD财务对账",
                                        "leadingAnswer": "财务对账问题应由城市运营支持专员先行处理，如有问题可先咨询城市运营同事，若仍无法解答请提交问题点。\n对账方法可参见wiki：<br/><a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=496901742\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=496901742</a>",
                                        "level": 3,
                                        "firstOwnerId": 2501,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000088,
                                        "parentTypeId": 10028,
                                        "typeName": "南中国财务对账",
                                        "leadingAnswer": "财务对账问题应由城市运营支持专员先行处理，如有问题可先咨询城市运营同事，若仍无法解答请提交问题点。\n对账方法可参见wiki：<br/><a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=496901742\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=496901742</a>",
                                        "level": 3,
                                        "firstOwnerId": 18779,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000089,
                                        "parentTypeId": 10028,
                                        "typeName": "北中国财务对账",
                                        "leadingAnswer": "财务对账问题应由城市运营支持专员先行处理，如有问题可先咨询城市运营同事，若仍无法解答请提交问题点。\n对账方法可参见wiki：<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=496901742\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=496901742</a>",
                                        "level": 3,
                                        "firstOwnerId": 28446,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000090,
                                        "parentTypeId": 10028,
                                        "typeName": "品牌战略财务对账",
                                        "leadingAnswer": "财务对账问题应由城市运营支持专员先行处理，如有问题可先咨询城市运营同事，若仍无法解答请提交问题点。\n对账方法可参见wiki：<br/><a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=496901742\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=496901742</a>",
                                        "level": 3,
                                        "firstOwnerId": 2501,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    }
                                ],
                                "leaf": false
                            },
                            {
                                "typeId": 10029,
                                "parentTypeId": 6,
                                "typeName": "财务平台",
                                "leadingAnswer": "",
                                "level": 2,
                                "firstOwnerId": 0,
                                "secondOwnerId": 0,
                                "children": [
                                    {
                                        "typeId": 1000091,
                                        "parentTypeId": 10029,
                                        "typeName": "美团侧发票问题（有票）",
                                        "leadingAnswer": "邮件申请发票模板（适用于申请专票或无法mis后台申请的）<br/><a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=410005414\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=410005414</a>",
                                        "level": 3,
                                        "firstOwnerId": 27657,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000092,
                                        "parentTypeId": 10029,
                                        "typeName": "美团侧发票问题（无票）",
                                        "leadingAnswer": "邮件申请发票模板（适用于申请专票或无法mis后台申请的）<br/><a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=410005414\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=410005414</a>",
                                        "level": 3,
                                        "firstOwnerId": 27657,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000093,
                                        "parentTypeId": 10029,
                                        "typeName": "点评侧发票问题(特殊case)",
                                        "leadingAnswer": "点评侧团购、闪惠、KTV预定佣金发票开具流程<br/><a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=502659151\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=502659151</a>",
                                        "level": 3,
                                        "firstOwnerId": 10451,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000094,
                                        "parentTypeId": 10029,
                                        "typeName": "点评侧发票问题(团购/闪惠/KTV预定佣金发票)",
                                        "leadingAnswer": "点评侧团购、闪惠、KTV预定佣金发票开具流程<br/><a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=502659151\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=502659151</a>",
                                        "level": 3,
                                        "firstOwnerId": 10451,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000095,
                                        "parentTypeId": 10029,
                                        "typeName": "点评侧发票问题(上架费霸王餐发票)",
                                        "leadingAnswer": "点评侧团购、闪惠、KTV预定佣金发票开具流程<br/><a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=502659151\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=502659151</a>",
                                        "level": 3,
                                        "firstOwnerId": 10451,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000096,
                                        "parentTypeId": 10029,
                                        "typeName": "付款凭证/退票凭证/银行流水等凭证",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 18260,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    }
                                ],
                                "leaf": false
                            }
                        ],
                        "leaf": false
                    },
                    {
                        "typeId": 7,
                        "parentTypeId": 0,
                        "typeName": "商家后台/商家代运营",
                        "leadingAnswer": "",
                        "level": 1,
                        "firstOwnerId": 0,
                        "secondOwnerId": 0,
                        "children": [
                            {
                                "typeId": 10031,
                                "parentTypeId": 7,
                                "typeName": "商家维护（中台）",
                                "leadingAnswer": "",
                                "level": 2,
                                "firstOwnerId": 0,
                                "secondOwnerId": 0,
                                "children": [
                                    {
                                        "typeId": 1000101,
                                        "parentTypeId": 10031,
                                        "typeName": "延期相关",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 25107,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000102,
                                        "parentTypeId": 10031,
                                        "typeName": "投诉类问题",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 30879,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000103,
                                        "parentTypeId": 10031,
                                        "typeName": "餐饮品类代运营相关（中台）",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 3684,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000104,
                                        "parentTypeId": 10031,
                                        "typeName": "综合品类代运营相关（中台）",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 5530,
                                        "secondOwnerId": 35785,
                                        "children": [],
                                        "leaf": true
                                    }
                                ],
                                "leaf": false
                            },
                            {
                                "typeId": 10032,
                                "parentTypeId": 7,
                                "typeName": "商家后台/开店宝",
                                "leadingAnswer": "",
                                "level": 2,
                                "firstOwnerId": 0,
                                "secondOwnerId": 0,
                                "children": [
                                    {
                                        "typeId": 1000105,
                                        "parentTypeId": 10032,
                                        "typeName": "登陆异常",
                                        "leadingAnswer": "1.检查网络是否正常：尝试重新连接WIFI，或重启路由器，或使用手机网络登录。<br/>\n2.若页面显示有问题，或按钮点击后无反应，可能为电脑IE浏览器版本过低导致，请尝试下载谷歌浏览器<br/>\n3.找回密码时，若发现手机号不正确，请联系业务人员（BD）在后台修改合同中的甲方联系人手机号，若有多个合同，请全部修改正确。<br/>\n4.密码频繁被他人修改，可能是因为商家开通了其他业务（如外卖），两个业务的商家负责人共用同一个账号（互相改密码），请商家核实确认，内部沟通。",
                                        "level": 3,
                                        "firstOwnerId": 37426,
                                        "secondOwnerId": 32411,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000106,
                                        "parentTypeId": 10032,
                                        "typeName": "团购券验证问题",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 37426,
                                        "secondOwnerId": 20812,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000107,
                                        "parentTypeId": 10032,
                                        "typeName": "买单订单问题",
                                        "leadingAnswer": "优惠买单、闪惠问题BD<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://bd.hui.dper.com/hui/welcome\" target=\"_blank\">自助工具</a>（快速解决买单常见问题哦）",
                                        "level": 3,
                                        "firstOwnerId": 37426,
                                        "secondOwnerId": 28212,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000108,
                                        "parentTypeId": 10032,
                                        "typeName": "经营数据问题",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 37426,
                                        "secondOwnerId": 29351,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000109,
                                        "parentTypeId": 10032,
                                        "typeName": "口碑管理问题",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 37426,
                                        "secondOwnerId": 29351,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000110,
                                        "parentTypeId": 10032,
                                        "typeName": "餐饮商户通问题",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 37426,
                                        "secondOwnerId": 20825,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000111,
                                        "parentTypeId": 10032,
                                        "typeName": "其它非财务问题",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 37426,
                                        "secondOwnerId": 7074,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000112,
                                        "parentTypeId": 10032,
                                        "typeName": "CBD财务数据问题",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 2501,
                                        "secondOwnerId": 28961,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000113,
                                        "parentTypeId": 10032,
                                        "typeName": "北中国财务数据问题",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 28446,
                                        "secondOwnerId": 28961,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000114,
                                        "parentTypeId": 10032,
                                        "typeName": "南中国财务数据问题",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 18779,
                                        "secondOwnerId": 28961,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000115,
                                        "parentTypeId": 10032,
                                        "typeName": "品牌战略财务数据问题",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 2501,
                                        "secondOwnerId": 28961,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000116,
                                        "parentTypeId": 10032,
                                        "typeName": "银行账号管理",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 37426,
                                        "secondOwnerId": 3072,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000117,
                                        "parentTypeId": 10032,
                                        "typeName": "自助上单",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 37426,
                                        "secondOwnerId": 31079,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000118,
                                        "parentTypeId": 10032,
                                        "typeName": "自助修改（页面相关）",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 37426,
                                        "secondOwnerId": 5577,
                                        "children": [],
                                        "leaf": true
                                    }
                                ],
                                "leaf": false
                            },
                            {
                                "typeId": 1000221,
                                "parentTypeId": 10030,
                                "typeName": "商服",
                                "leadingAnswer": "",
                                "level": 3,
                                "firstOwnerId": 3100,
                                "secondOwnerId": 0,
                                "children": [],
                                "leaf": true
                            }
                        ],
                        "leaf": false
                    },
                    {
                        "typeId": 8,
                        "parentTypeId": 0,
                        "typeName": "页面展示/排序",
                        "leadingAnswer": "",
                        "level": 1,
                        "firstOwnerId": 0,
                        "secondOwnerId": 0,
                        "children": [
                            {
                                "typeId": 10033,
                                "parentTypeId": 8,
                                "typeName": "闪惠买单展示",
                                "leadingAnswer": "",
                                "level": 2,
                                "firstOwnerId": 0,
                                "secondOwnerId": 0,
                                "children": [
                                    {
                                        "typeId": 1000119,
                                        "parentTypeId": 10033,
                                        "typeName": "页面相关（手机端）",
                                        "leadingAnswer": "优惠买单自查方法<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://news.sankuai.com/pages/viewpage.action?pageId=42206876\" target=\"_blank\">http://news.sankuai.com/pages/viewpage.action?pageId=42206876</a>",
                                        "level": 3,
                                        "firstOwnerId": 37426,
                                        "secondOwnerId": 18901,
                                        "children": [],
                                        "leaf": true
                                    }
                                ],
                                "leaf": false
                            },
                            {
                                "typeId": 10034,
                                "parentTypeId": 8,
                                "typeName": "手机端",
                                "leadingAnswer": "",
                                "level": 2,
                                "firstOwnerId": 0,
                                "secondOwnerId": 0,
                                "children": [
                                    {
                                        "typeId": 1000120,
                                        "parentTypeId": 10034,
                                        "typeName": "餐饮品类展示异常",
                                        "leadingAnswer": "项目搜索不到自查方法\n<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=367305411\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=367305411</a>",
                                        "level": 3,
                                        "firstOwnerId": 37426,
                                        "secondOwnerId": 2904,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000121,
                                        "parentTypeId": 10034,
                                        "typeName": "综合品类展示异常",
                                        "leadingAnswer": "项目搜索不到自查方法\n<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=367305411\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=367305411</a>",
                                        "level": 3,
                                        "firstOwnerId": 37426,
                                        "secondOwnerId": 25865,
                                        "children": [],
                                        "leaf": true
                                    }
                                ],
                                "leaf": false
                            },
                            {
                                "typeId": 10035,
                                "parentTypeId": 8,
                                "typeName": "PC端",
                                "leadingAnswer": "",
                                "level": 2,
                                "firstOwnerId": 0,
                                "secondOwnerId": 0,
                                "children": [
                                    {
                                        "typeId": 1000122,
                                        "parentTypeId": 10035,
                                        "typeName": "美团侧展示异常",
                                        "leadingAnswer": "项目搜索不到自查方法\n<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=367305411\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=367305411</a>",
                                        "level": 3,
                                        "firstOwnerId": 37426,
                                        "secondOwnerId": 20901,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000123,
                                        "parentTypeId": 10035,
                                        "typeName": "新增/修改品类相关（PC端+手机端）",
                                        "leadingAnswer": "项目搜索不到自查方法\n<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=367305411\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=367305411</a>",
                                        "level": 3,
                                        "firstOwnerId": 37426,
                                        "secondOwnerId": 46,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000124,
                                        "parentTypeId": 10035,
                                        "typeName": "点评侧展示异常",
                                        "leadingAnswer": "项目搜索不到自查方法<br/>\n<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=367305411\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=367305411</a>",
                                        "level": 3,
                                        "firstOwnerId": 37426,
                                        "secondOwnerId": 5256,
                                        "children": [],
                                        "leaf": true
                                    }
                                ],
                                "leaf": false
                            },
                            {
                                "typeId": 10036,
                                "parentTypeId": 8,
                                "typeName": "搜索排序",
                                "leadingAnswer": "",
                                "level": 2,
                                "firstOwnerId": 0,
                                "secondOwnerId": 0,
                                "children": [
                                    {
                                        "typeId": 1000125,
                                        "parentTypeId": 10036,
                                        "typeName": "美团侧搜索",
                                        "leadingAnswer": "项目搜索不到自查方法\n<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=367305411\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=367305411</a>",
                                        "level": 3,
                                        "firstOwnerId": 37426,
                                        "secondOwnerId": 17494,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000126,
                                        "parentTypeId": 10036,
                                        "typeName": "美团侧排序",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 37426,
                                        "secondOwnerId": 17494,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000127,
                                        "parentTypeId": 10036,
                                        "typeName": "点评侧搜索-商户—搜不到商户",
                                        "leadingAnswer": "在线提问系统问题模板&自查小技巧：<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=511399971\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=511399971</a>",
                                        "level": 3,
                                        "firstOwnerId": 37426,
                                        "secondOwnerId": 37427,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000128,
                                        "parentTypeId": 10036,
                                        "typeName": "点评侧搜索-商户—使已关商户搜索不到",
                                        "leadingAnswer": "在线提问系统问题模板&自查小技巧：<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=511399971\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=511399971</a>",
                                        "level": 3,
                                        "firstOwnerId": 37426,
                                        "secondOwnerId": 37427,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000129,
                                        "parentTypeId": 10036,
                                        "typeName": "点评侧搜索-商户—商户排序靠后",
                                        "leadingAnswer": "在线提问系统问题模板&自查小技巧：<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=511399971\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=511399971</a>",
                                        "level": 3,
                                        "firstOwnerId": 37426,
                                        "secondOwnerId": 37427,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000130,
                                        "parentTypeId": 10036,
                                        "typeName": "点评侧搜索-商户—搜索框下拉提示有误",
                                        "leadingAnswer": "在线提问系统问题模板&自查小技巧：<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=511399971\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=511399971</a>",
                                        "level": 3,
                                        "firstOwnerId": 37426,
                                        "secondOwnerId": 37427,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000131,
                                        "parentTypeId": 10036,
                                        "typeName": "点评侧搜索-商户—添加关键词标签",
                                        "leadingAnswer": "在线提问系统问题模板&自查小技巧：<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=511399971\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=511399971</a>",
                                        "level": 3,
                                        "firstOwnerId": 37426,
                                        "secondOwnerId": 37427,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000132,
                                        "parentTypeId": 10036,
                                        "typeName": "点评侧搜索-商户—列表页与商户页不一致",
                                        "leadingAnswer": "在线提问系统问题模板&自查小技巧：<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=511399971\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=511399971</a>",
                                        "level": 3,
                                        "firstOwnerId": 37426,
                                        "secondOwnerId": 37427,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000133,
                                        "parentTypeId": 10036,
                                        "typeName": "点评侧搜索-商户—取消推广大拇指标识",
                                        "leadingAnswer": "在线提问系统问题模板&自查小技巧：<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=511399971\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=511399971</a>",
                                        "level": 3,
                                        "firstOwnerId": 37426,
                                        "secondOwnerId": 37427,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000134,
                                        "parentTypeId": 10036,
                                        "typeName": "点评侧搜索-团购—搜不到团单",
                                        "leadingAnswer": "在线提问系统问题模板&自查小技巧：<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=511399971\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=511399971</a>",
                                        "level": 3,
                                        "firstOwnerId": 37426,
                                        "secondOwnerId": 37427,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000135,
                                        "parentTypeId": 10036,
                                        "typeName": "点评侧搜索-团购—团单排序靠后",
                                        "leadingAnswer": "在线提问系统问题模板&自查小技巧：<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=511399971\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=511399971</a>",
                                        "level": 3,
                                        "firstOwnerId": 37426,
                                        "secondOwnerId": 37427,
                                        "children": [],
                                        "leaf": true
                                    }
                                ],
                                "leaf": false
                            }
                        ],
                        "leaf": false
                    },
                    {
                        "typeId": 9,
                        "parentTypeId": 0,
                        "typeName": "消费者购买/退款/投诉问题",
                        "leadingAnswer": "",
                        "level": 1,
                        "firstOwnerId": 0,
                        "secondOwnerId": 0,
                        "children": [
                            {
                                "typeId": 10045,
                                "parentTypeId": 9,
                                "typeName": "购买支付",
                                "leadingAnswer": "",
                                "level": 2,
                                "firstOwnerId": 0,
                                "secondOwnerId": 0,
                                "children": [
                                    {
                                        "typeId": 1000144,
                                        "parentTypeId": 10045,
                                        "typeName": "团购订单/发码",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 37426,
                                        "secondOwnerId": 20812,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000145,
                                        "parentTypeId": 10045,
                                        "typeName": "买单订单",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 37426,
                                        "secondOwnerId": 18246,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000146,
                                        "parentTypeId": 10045,
                                        "typeName": "支付收银台问题－支付方式不全",
                                        "leadingAnswer": "支付方式展示不全： \n美团会根据各支付通道的质量、限额、用户的使用场景等具体情况，为用户提供较为稳定的支付方式。如果某支付方式未展示，可能是该支付方式在该场景下使用不顺畅，建议您选择其他支付方式进行支付。",
                                        "level": 3,
                                        "firstOwnerId": 37426,
                                        "secondOwnerId": 32557,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000147,
                                        "parentTypeId": 10045,
                                        "typeName": "支付收银台问题-重复支付",
                                        "leadingAnswer": "重复支付：<br/>\n一般情况下，系统会自动处理并原路退回至支付所用的账户，请耐心等待。如长时间过去仍有异常情况，请继续提问",
                                        "level": 3,
                                        "firstOwnerId": 37426,
                                        "secondOwnerId": 32557,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000148,
                                        "parentTypeId": 10045,
                                        "typeName": "支付收银台问题－某支付方式无法支付",
                                        "leadingAnswer": "某支付方式无法支付：<br/>\n请确认该支付方式是否为置灰不可点击，或者有红色文字提示：<br/>\n（1）若有，则该支付方式正在维护中，暂时不可使用，可以稍后再试，或者选择其他支付方式；<br/>\n（2）若无，则可能是超出了该用户在该支付方式的支付限额（分为单笔限额、单日限额和单月限额三种）。",
                                        "level": 3,
                                        "firstOwnerId": 37426,
                                        "secondOwnerId": 32557,
                                        "children": [],
                                        "leaf": true
                                    }
                                ],
                                "leaf": false
                            },
                            {
                                "typeId": 1000136,
                                "parentTypeId": 10037,
                                "typeName": "退款异议闪惠买单",
                                "leadingAnswer": "",
                                "level": 3,
                                "firstOwnerId": 37428,
                                "secondOwnerId": 0,
                                "children": [],
                                "leaf": true
                            },
                            {
                                "typeId": 1000137,
                                "parentTypeId": 10038,
                                "typeName": "退款异议餐饮团购",
                                "leadingAnswer": "",
                                "level": 3,
                                "firstOwnerId": 37428,
                                "secondOwnerId": 0,
                                "children": [],
                                "leaf": true
                            },
                            {
                                "typeId": 1000138,
                                "parentTypeId": 10039,
                                "typeName": "退款异议活动综合",
                                "leadingAnswer": "",
                                "level": 3,
                                "firstOwnerId": 37428,
                                "secondOwnerId": 0,
                                "children": [],
                                "leaf": true
                            },
                            {
                                "typeId": 1000139,
                                "parentTypeId": 10040,
                                "typeName": "个案客诉反馈沟通-闪惠买单",
                                "leadingAnswer": "",
                                "level": 3,
                                "firstOwnerId": 37428,
                                "secondOwnerId": 0,
                                "children": [],
                                "leaf": true
                            },
                            {
                                "typeId": 1000140,
                                "parentTypeId": 10041,
                                "typeName": "个案客诉反馈沟通-餐饮团购",
                                "leadingAnswer": "",
                                "level": 3,
                                "firstOwnerId": 37428,
                                "secondOwnerId": 0,
                                "children": [],
                                "leaf": true
                            },
                            {
                                "typeId": 1000141,
                                "parentTypeId": 10042,
                                "typeName": "个案客诉反馈沟通-综合活动",
                                "leadingAnswer": "",
                                "level": 3,
                                "firstOwnerId": 37428,
                                "secondOwnerId": 0,
                                "children": [],
                                "leaf": true
                            },
                            {
                                "typeId": 1000142,
                                "parentTypeId": 10043,
                                "typeName": "被操作不可购买",
                                "leadingAnswer": "",
                                "level": 3,
                                "firstOwnerId": 37429,
                                "secondOwnerId": 0,
                                "children": [],
                                "leaf": true
                            },
                            {
                                "typeId": 1000143,
                                "parentTypeId": 10044,
                                "typeName": "批量退款咨询",
                                "leadingAnswer": "",
                                "level": 3,
                                "firstOwnerId": 37429,
                                "secondOwnerId": 0,
                                "children": [],
                                "leaf": true
                            }
                        ],
                        "leaf": false
                    },
                    {
                        "typeId": 10,
                        "parentTypeId": 0,
                        "typeName": "用户活动/专题活动/物料资源",
                        "leadingAnswer": "",
                        "level": 1,
                        "firstOwnerId": 0,
                        "secondOwnerId": 0,
                        "children": [
                            {
                                "typeId": 10046,
                                "parentTypeId": 10,
                                "typeName": "商户自促",
                                "leadingAnswer": "",
                                "level": 2,
                                "firstOwnerId": 0,
                                "secondOwnerId": 0,
                                "children": [
                                    {
                                        "typeId": 1000149,
                                        "parentTypeId": 10046,
                                        "typeName": "自促双平台展示问题",
                                        "leadingAnswer": "1查看项目的售卖渠道是否为“允许在美团和点评双平台售卖”，若不是请自行修改<br/>\n2若是，请核实商家后台是否设置有效的促销活动（对应项目id的促销活动为“活动中”）",
                                        "level": 3,
                                        "firstOwnerId": 4071,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000150,
                                        "parentTypeId": 10046,
                                        "typeName": "自促名店问题",
                                        "leadingAnswer": "1查看该品牌在“新美大-头腰商家品牌攻防报表\"\"内上月交易额是否满足该城市划线<br/>\n2查看该项目的在线时间、美团价及评分是否满足名店准入规则<br/>\n3查看该促销活动设置的促销份数（促销量-已促销量）、促销折扣、促销时间是否满足名店参与规则<br/>\n4查看商家后台-促销活动列表页内，有无名店标签及其状态<br/>\n5查看商家后台内“操作历史”，当日0-16点修改内容次日生效",
                                        "level": 3,
                                        "firstOwnerId": 4071,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000151,
                                        "parentTypeId": 10046,
                                        "typeName": "自促天天特价问题",
                                        "leadingAnswer": "1查看该项目的品类信息、在线时间是否满足天天特价准入规则<br/>\n2查看该项目对应的促销活动设置的促销份数（促销量-已促销量）、促销折扣、促销时间是否满足天天特价规则<br/>\n3查看该城市天天特价展位是否开启（须有8个及以上满足以上规则的项目才可开通展位）<br/>\n4查看该城市天天特价专题内已展示项目数（最多展示50个项目）",
                                        "level": 3,
                                        "firstOwnerId": 20358,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000152,
                                        "parentTypeId": 10046,
                                        "typeName": "普通自促问题",
                                        "leadingAnswer": "1自促活跃门店数异常，请在报表右侧报错<br/>\n2调价后，无法设置促销活动，请核实页面销量是否满足【闪电上单】-【发布信息】内阶梯销量要求<br/>\n3后台提示暂停中，请核实后台设置页内促销时间",
                                        "level": 3,
                                        "firstOwnerId": 4071,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    }
                                ],
                                "leaf": false
                            },
                            {
                                "typeId": 10047,
                                "parentTypeId": 10,
                                "typeName": "新客活动——团购",
                                "leadingAnswer": "",
                                "level": 2,
                                "firstOwnerId": 0,
                                "secondOwnerId": 0,
                                "children": [
                                    {
                                        "typeId": 1000153,
                                        "parentTypeId": 10047,
                                        "typeName": "常规活动配置立减、展位疑问",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 34872,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000154,
                                        "parentTypeId": 10047,
                                        "typeName": "常规活动规则疑问",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 34872,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000155,
                                        "parentTypeId": 10047,
                                        "typeName": "营销系统活动提报疑问",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 34872,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    }
                                ],
                                "leaf": false
                            },
                            {
                                "typeId": 10048,
                                "parentTypeId": 10,
                                "typeName": "新客活动——闪惠买单",
                                "leadingAnswer": "",
                                "level": 2,
                                "firstOwnerId": 0,
                                "secondOwnerId": 0,
                                "children": [
                                    {
                                        "typeId": 1000156,
                                        "parentTypeId": 10048,
                                        "typeName": "常规活动配置立减、展位疑问",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 21424,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000157,
                                        "parentTypeId": 10048,
                                        "typeName": "营销系统活动提报疑问",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 21424,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000158,
                                        "parentTypeId": 10048,
                                        "typeName": "常规活动规则疑问",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 21424,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    }
                                ],
                                "leaf": false
                            },
                            {
                                "typeId": 10049,
                                "parentTypeId": 10,
                                "typeName": "老客活动",
                                "leadingAnswer": "",
                                "level": 2,
                                "firstOwnerId": 0,
                                "secondOwnerId": 0,
                                "children": [
                                    {
                                        "typeId": 1000159,
                                        "parentTypeId": 10049,
                                        "typeName": "常规活动配置立减、展位疑问",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 21402,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000160,
                                        "parentTypeId": 10049,
                                        "typeName": "营销系统活动提报疑问",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 21402,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000161,
                                        "parentTypeId": 10049,
                                        "typeName": "常规活动规则疑问",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 21402,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    }
                                ],
                                "leaf": false
                            },
                            {
                                "typeId": 10050,
                                "parentTypeId": 10,
                                "typeName": "固定专题活动",
                                "leadingAnswer": "",
                                "level": 2,
                                "firstOwnerId": 0,
                                "secondOwnerId": 0,
                                "children": [
                                    {
                                        "typeId": 1000162,
                                        "parentTypeId": 10050,
                                        "typeName": "CBD名店大牌",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 27075,
                                        "secondOwnerId": 13646,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000163,
                                        "parentTypeId": 10050,
                                        "typeName": "南中国名店大牌",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 37430,
                                        "secondOwnerId": 13646,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000164,
                                        "parentTypeId": 10050,
                                        "typeName": "北中国名店大牌",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 22670,
                                        "secondOwnerId": 13646,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000165,
                                        "parentTypeId": 10050,
                                        "typeName": "CBD天天特价",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 27075,
                                        "secondOwnerId": 20358,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000166,
                                        "parentTypeId": 10050,
                                        "typeName": "北中国天天特价",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 22670,
                                        "secondOwnerId": 20358,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000167,
                                        "parentTypeId": 10050,
                                        "typeName": "南中国天天特价",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 37430,
                                        "secondOwnerId": 20358,
                                        "children": [],
                                        "leaf": true
                                    }
                                ],
                                "leaf": false
                            },
                            {
                                "typeId": 10051,
                                "parentTypeId": 10,
                                "typeName": "节假日活动",
                                "leadingAnswer": "",
                                "level": 2,
                                "firstOwnerId": 0,
                                "secondOwnerId": 0,
                                "children": [
                                    {
                                        "typeId": 1000168,
                                        "parentTypeId": 10051,
                                        "typeName": "CBD节假日活动",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 0,
                                        "secondOwnerId": 32753,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000169,
                                        "parentTypeId": 10051,
                                        "typeName": "南中国节假日活动",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 37430,
                                        "secondOwnerId": 32753,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000170,
                                        "parentTypeId": 10051,
                                        "typeName": "北中国节假日活动",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 22670,
                                        "secondOwnerId": 32753,
                                        "children": [],
                                        "leaf": true
                                    }
                                ],
                                "leaf": false
                            },
                            {
                                "typeId": 10052,
                                "parentTypeId": 10,
                                "typeName": "资源申请",
                                "leadingAnswer": "",
                                "level": 2,
                                "firstOwnerId": 0,
                                "secondOwnerId": 0,
                                "children": [
                                    {
                                        "typeId": 1000171,
                                        "parentTypeId": 10052,
                                        "typeName": "霸王餐相关咨询",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 24068,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000172,
                                        "parentTypeId": 10052,
                                        "typeName": "城市专题制作",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 14115,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    }
                                ],
                                "leaf": false
                            },
                            {
                                "typeId": 10053,
                                "parentTypeId": 10,
                                "typeName": "城市物料",
                                "leadingAnswer": "",
                                "level": 2,
                                "firstOwnerId": 0,
                                "secondOwnerId": 0,
                                "children": [
                                    {
                                        "typeId": 1000173,
                                        "parentTypeId": 10053,
                                        "typeName": "城市物料设计需求/物料",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 28107,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000174,
                                        "parentTypeId": 10053,
                                        "typeName": "POS",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 3805,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    }
                                ],
                                "leaf": false
                            }
                        ],
                        "leaf": false
                    },
                    {
                        "typeId": 11,
                        "parentTypeId": 0,
                        "typeName": "罚款相关",
                        "leadingAnswer": "",
                        "level": 1,
                        "firstOwnerId": 0,
                        "secondOwnerId": 0,
                        "children": [
                            {
                                "typeId": 1000175,
                                "parentTypeId": 10054,
                                "typeName": "包销罚款与返款",
                                "leadingAnswer": "关于罚款返款：<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=441096006\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=441096006</a>\n罚款返款规则：<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=74918032\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=74918032</a>",
                                "level": 3,
                                "firstOwnerId": 35288,
                                "secondOwnerId": 0,
                                "children": [],
                                "leaf": true
                            },
                            {
                                "typeId": 1000176,
                                "parentTypeId": 10055,
                                "typeName": "陪访拜访罚款",
                                "leadingAnswer": "1、怀孕、转岗等情况报备需邮件到sales.fakuan@meituan.com报备，邮件需向上两级领导确认后方可减免<br/>\n邮件格式：<br/>\n主题：【罚款报备申诉】<br/>\n报备人姓名：<br/>\n报备人工号：<br/>\n报备原因：<br/>\n具体减免情况：如需减免工作日需说明具体减免几天，如需减免陪访拜访标准需说明具体减免为多少个",
                                "level": 3,
                                "firstOwnerId": 28269,
                                "secondOwnerId": 0,
                                "children": [],
                                "leaf": true
                            }
                        ],
                        "leaf": false
                    },
                    {
                        "typeId": 12,
                        "parentTypeId": 0,
                        "typeName": "销售数据报表",
                        "leadingAnswer": "",
                        "level": 1,
                        "firstOwnerId": 0,
                        "secondOwnerId": 0,
                        "children": [
                            {
                                "typeId": 1000177,
                                "parentTypeId": 10056,
                                "typeName": "报表数据有误",
                                "leadingAnswer": "",
                                "level": 3,
                                "firstOwnerId": 12158,
                                "secondOwnerId": 0,
                                "children": [],
                                "leaf": true
                            },
                            {
                                "typeId": 1000178,
                                "parentTypeId": 10057,
                                "typeName": "报表界面展示优化建议",
                                "leadingAnswer": "",
                                "level": 3,
                                "firstOwnerId": 12158,
                                "secondOwnerId": 0,
                                "children": [],
                                "leaf": true
                            },
                            {
                                "typeId": 1000179,
                                "parentTypeId": 10058,
                                "typeName": "新的报表需求",
                                "leadingAnswer": "",
                                "level": 3,
                                "firstOwnerId": 12158,
                                "secondOwnerId": 0,
                                "children": [],
                                "leaf": true
                            }
                        ],
                        "leaf": false
                    },
                    {
                        "typeId": 13,
                        "parentTypeId": 0,
                        "typeName": "公关法务问题",
                        "leadingAnswer": "",
                        "level": 1,
                        "firstOwnerId": 0,
                        "secondOwnerId": 0,
                        "children": [
                            {
                                "typeId": 10059,
                                "parentTypeId": 13,
                                "typeName": "法务问题",
                                "leadingAnswer": "",
                                "level": 2,
                                "firstOwnerId": 0,
                                "secondOwnerId": 0,
                                "children": [
                                    {
                                        "typeId": 1000180,
                                        "parentTypeId": 10059,
                                        "typeName": "知识产权/合同/劳动关系等民事争议或诉讼、包销款催收",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 3045,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000181,
                                        "parentTypeId": 10059,
                                        "typeName": "分公司用印",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 27395,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000182,
                                        "parentTypeId": 10059,
                                        "typeName": "分公司注册、变更、注销等",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 27395,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000183,
                                        "parentTypeId": 10059,
                                        "typeName": "法律文件/授权",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 27395,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000184,
                                        "parentTypeId": 10059,
                                        "typeName": "证明",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 27395,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000185,
                                        "parentTypeId": 10059,
                                        "typeName": "资质证照申请",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 13722,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000186,
                                        "parentTypeId": 10059,
                                        "typeName": "租房、装修、中介、物业合同审核",
                                        "leadingAnswer": "自检<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=513194769\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=513194769</a>",
                                        "level": 3,
                                        "firstOwnerId": 13985,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000187,
                                        "parentTypeId": 10059,
                                        "typeName": "租房、装修、中介、物业等事项咨询",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 13985,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000188,
                                        "parentTypeId": 10059,
                                        "typeName": "费用支出类合同审核",
                                        "leadingAnswer": "1、邮件预审→审核通过后提交OA→寄回总部盖章→OA合同付款。（若合同直接提交OA审核系统，如有不符合要求的地方需要驳回的话，会一直驳回到申请人，即前面各审批人需要不停的重复审批，所以需要城市先提交邮件预审合同内容，避免OA流程中反复驳回、申请，降低效率）\n<br/>2、请先在貔貅系统预算申请审核通过方案后，发送邮件至legal.ddcy@meituan.com，抄送zhangmin12.发送规则:<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=355194785\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=355194785</a>。\n<br/>3、 OA审核通过后，总部合同对接人会跟进合同后续的打印、盖章、邮寄等事宜；",
                                        "level": 3,
                                        "firstOwnerId": 13159,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000189,
                                        "parentTypeId": 10059,
                                        "typeName": "与商户间业务合同审核",
                                        "leadingAnswer": "1、发邮件至baoxiao@meituan.com，由包销组审核包销方案，审批通过后，包销组会根据合同情况给各部门审核同学发送（主要指总部品控bs.shenhe@meituan.com、法务legal.ddcy@meituan.com、财务），待所需部门提出意见并修改审核通过后，包销商家合同审核流程方告完成；完成后，总控品控会跟进合同后续的打印、盖章、邮寄等事宜；\n<br/>2、发邮件至bs.shenhe@meituan.com（邮件发送规范：<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=39161249\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=39161249</a>），总部品控审核通过后，会发送给给各部门审核同学发送（主要指：法务legal.ddcy@meituan.com、财务jiesuan@meituan.com），待所需部门提出意见并修改审核通过后，非包销商家合同审核流程方告完成；完成后，总控品控会跟进合同后续的打印、盖章、邮寄等事宜；\n<br/>3、甲方（即非标）合同、补充协议各类合同性质的特殊文件（不区分包销和非包销），请发送至：sys_ba@dianping.com；\n<br/>4、甲方（即非标）合同、补充协议各类合同性质的特殊文件，请发送至：sqt-service@dianping.com",
                                        "level": 3,
                                        "firstOwnerId": 13159,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000190,
                                        "parentTypeId": 10059,
                                        "typeName": "其它业务相关法律问题咨询",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 13159,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    }
                                ],
                                "leaf": false
                            },
                            {
                                "typeId": 10060,
                                "parentTypeId": 13,
                                "typeName": "公共关系",
                                "leadingAnswer": "",
                                "level": 2,
                                "firstOwnerId": 0,
                                "secondOwnerId": 0,
                                "children": [
                                    {
                                        "typeId": 1000191,
                                        "parentTypeId": 10060,
                                        "typeName": "地方正面传播需求（商户合作、促销活动等）",
                                        "leadingAnswer": "1、可申请包装为典型案例并在媒体进行传播的商户要求：<br/>\n对美团大众点评十分认可，销量较高，有一定的知名度，对互联网营销价值、口碑管理、闪惠、买单提升效率等有较深的认识，商家负责人表达能力强且愿意接受采访。<br/>\n2、申请商家案例传播需要的资料如下：<br/>\n商家基本情况及品牌介绍，何时与美团点评进行合作，目前的销量如何，BD层面了解到的商家对于互联网的认识及如何利用。<br/>\n3、申请商家案例传播的流程如下：<br/>\n城市经过上述评估后找到总部公关部对接人，经过评估确定可以采访，城市协助总部同事采访商家。<br/>\n4、商家采访后会在以下渠道进行宣传：<br/>\n互联网、经济等相关的媒体渠道，视具体产出的内容而定。商家案例可以作为对外传播的素材积累，提供给感兴趣的媒体。",
                                        "level": 3,
                                        "firstOwnerId": 17245,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000192,
                                        "parentTypeId": 10060,
                                        "typeName": "地方媒体采访需求（商户、用户相关危机负面）",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 30892,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000193,
                                        "parentTypeId": 10060,
                                        "typeName": "竞对攻防、高管专访",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 15830,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000194,
                                        "parentTypeId": 10060,
                                        "typeName": "微信订阅号新闻、活动推广等",
                                        "leadingAnswer": "“美团网”订阅号，定位为新闻号。核心职能为，发布美团相关新闻，扩散美团正面信息。<br/><br/>\n\n1、固定三条模板推送，以转载为主：【头条】“聚焦”版块，为美团相关新闻，稿件需经公关部把关；<br/>\n2、【次条】“业内”版块，转载我司相关行业的业内新闻；<br/>\n3、【三条】“活动”或“前沿”版块，“前沿”为行业前沿信息，“活动”版块可以支持业务线活动；<br/>\n4、【订阅号的排期】根据头条美团相关新闻发布需求来定，如无特殊情况，时间固定在下午17：00-18:00。",
                                        "level": 3,
                                        "firstOwnerId": 12871,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000195,
                                        "parentTypeId": 10060,
                                        "typeName": "微博推广、投诉、举报等",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 28655,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000196,
                                        "parentTypeId": 10060,
                                        "typeName": "微博品牌合作",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 33748,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000197,
                                        "parentTypeId": 10060,
                                        "typeName": "一元夺宝（抽奖单）",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 26318,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    }
                                ],
                                "leaf": false
                            }
                        ],
                        "leaf": false
                    },
                    {
                        "typeId": 14,
                        "parentTypeId": 0,
                        "typeName": "业务支持相关",
                        "leadingAnswer": "",
                        "level": 1,
                        "firstOwnerId": 0,
                        "secondOwnerId": 0,
                        "children": [
                            {
                                "typeId": 10061,
                                "parentTypeId": 14,
                                "typeName": "风控/刷单",
                                "leadingAnswer": "",
                                "level": 2,
                                "firstOwnerId": 0,
                                "secondOwnerId": 0,
                                "children": [
                                    {
                                        "typeId": 1000198,
                                        "parentTypeId": 10061,
                                        "typeName": "大型活动风控",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 12861,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000199,
                                        "parentTypeId": 10061,
                                        "typeName": "商家购买信息存疑反馈/商家刷单",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 29059,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    }
                                ],
                                "leaf": false
                            },
                            {
                                "typeId": 10062,
                                "parentTypeId": 14,
                                "typeName": "新开站/分区调整/联络点/殖民地",
                                "leadingAnswer": "",
                                "level": 2,
                                "firstOwnerId": 0,
                                "secondOwnerId": 0,
                                "children": [
                                    {
                                        "typeId": 1000200,
                                        "parentTypeId": 10062,
                                        "typeName": "页面点亮及相关咨询",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 2250,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000201,
                                        "parentTypeId": 10062,
                                        "typeName": "联络点申请审批及相关咨询",
                                        "leadingAnswer": "1、联络点相关操作流程及申请方式可查看：<br/>\n<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=86366754\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=86366754</a><br/>\n2、联络点申请及各类调整均在每月1-20日接受邮件申请并完成全部审批（逾期延期下月），审批完成后，次月1-7日的工作日期间统一进行系统调整（如遇国家法定节假日往后顺延）。",
                                        "level": 3,
                                        "firstOwnerId": 28269,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000202,
                                        "parentTypeId": 10062,
                                        "typeName": "殖民地申请审批及相关咨询",
                                        "leadingAnswer": "1、殖民地相关操作流程及申请方式可查看：<br/>\n<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=100829611\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=100829611</a><br/>\n2、殖民地申请及各类调整均在每月1-20日接受邮件申请并完成全部审批（逾期延期下月），审批完成后，次月1-7日的工作日期间统一进行系统调整（如遇国家法定节假日往后顺延）。",
                                        "level": 3,
                                        "firstOwnerId": 28269,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000203,
                                        "parentTypeId": 10062,
                                        "typeName": "城市/区域分区审批",
                                        "leadingAnswer": "1、城市分区流程可查看：<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=397266474\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=397266474</a><br/>\n2、城市合并流程可查看：<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=397266150\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=397266150</a><br/>\n3、城市边界调整流程可查看：<a style=\"cursor: pointer; color: #2c87bd\" class=\"external-link\" href=\"http://wiki.sankuai.com/pages/viewpage.action?pageId=397266009\" target=\"_blank\">http://wiki.sankuai.com/pages/viewpage.action?pageId=397266009</a><br/>\n4、城市分区、合并、边界调整均在每月1-20日接受邮件申请并完成全部审批（逾期延期下月），审批完成后，次月1-7日的工作日期间统一进行系统调整（如遇国家法定节假日往后顺延）。",
                                        "level": 3,
                                        "firstOwnerId": 28269,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000204,
                                        "parentTypeId": 10062,
                                        "typeName": "主站开站流程推进及相关咨询",
                                        "leadingAnswer": "现不支持新开主站",
                                        "level": 3,
                                        "firstOwnerId": 28269,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    }
                                ],
                                "leaf": false
                            },
                            {
                                "typeId": 1000205,
                                "parentTypeId": 10063,
                                "typeName": "城市租房/换房/续租",
                                "leadingAnswer": "",
                                "level": 3,
                                "firstOwnerId": 27655,
                                "secondOwnerId": 0,
                                "children": [],
                                "leaf": true
                            },
                            {
                                "typeId": 1000206,
                                "parentTypeId": 10064,
                                "typeName": "摄影师相关问题",
                                "leadingAnswer": "",
                                "level": 3,
                                "firstOwnerId": 27655,
                                "secondOwnerId": 0,
                                "children": [],
                                "leaf": true
                            },
                            {
                                "typeId": 1000207,
                                "parentTypeId": 10065,
                                "typeName": "运营团队管理",
                                "leadingAnswer": "",
                                "level": 3,
                                "firstOwnerId": 27655,
                                "secondOwnerId": 0,
                                "children": [],
                                "leaf": true
                            },
                            {
                                "typeId": 1000208,
                                "parentTypeId": 10066,
                                "typeName": "BD或城市支撑团队违规或失职投诉",
                                "leadingAnswer": "",
                                "level": 3,
                                "firstOwnerId": 29212,
                                "secondOwnerId": 0,
                                "children": [],
                                "leaf": true
                            }
                        ],
                        "leaf": false
                    },
                    {
                        "typeId": 15,
                        "parentTypeId": 0,
                        "typeName": "优化建议/其他问题",
                        "leadingAnswer": "",
                        "level": 1,
                        "firstOwnerId": 0,
                        "secondOwnerId": 0,
                        "children": [
                            {
                                "typeId": 10067,
                                "parentTypeId": 15,
                                "typeName": "优化建议",
                                "leadingAnswer": "",
                                "level": 2,
                                "firstOwnerId": 0,
                                "secondOwnerId": 0,
                                "children": [
                                    {
                                        "typeId": 1000209,
                                        "parentTypeId": 10067,
                                        "typeName": "公司制度意见建议",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 37426,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000210,
                                        "parentTypeId": 10067,
                                        "typeName": "系统功能优化意见",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 37426,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    },
                                    {
                                        "typeId": 1000211,
                                        "parentTypeId": 10067,
                                        "typeName": "吐槽",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 37426,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    }
                                ],
                                "leaf": false
                            },
                            {
                                "typeId": 10068,
                                "parentTypeId": 15,
                                "typeName": "城市选择错误分类",
                                "leadingAnswer": "",
                                "level": 2,
                                "firstOwnerId": 0,
                                "secondOwnerId": 0,
                                "children": [
                                    {
                                        "typeId": 1000212,
                                        "parentTypeId": 10068,
                                        "typeName": "重新分配",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 37426,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    }
                                ],
                                "leaf": false
                            },
                            {
                                "typeId": 10069,
                                "parentTypeId": 15,
                                "typeName": "无流程/无对接问题",
                                "leadingAnswer": "",
                                "level": 2,
                                "firstOwnerId": 0,
                                "secondOwnerId": 0,
                                "children": [
                                    {
                                        "typeId": 1000213,
                                        "parentTypeId": 10069,
                                        "typeName": "问题反馈",
                                        "leadingAnswer": "",
                                        "level": 3,
                                        "firstOwnerId": 37426,
                                        "secondOwnerId": 0,
                                        "children": [],
                                        "leaf": true
                                    }
                                ],
                                "leaf": false
                            }
                        ],
                        "leaf": false
                    },
                    {
                        "typeId": 16,
                        "parentTypeId": 0,
                        "typeName": "推广业务",
                        "leadingAnswer": "",
                        "level": 1,
                        "firstOwnerId": 0,
                        "secondOwnerId": 0,
                        "children": [
                            {
                                "typeId": 1000214,
                                "parentTypeId": 10070,
                                "typeName": "财务收款/点金/开票",
                                "leadingAnswer": "",
                                "level": 3,
                                "firstOwnerId": 2234,
                                "secondOwnerId": 0,
                                "children": [],
                                "leaf": true
                            },
                            {
                                "typeId": 1000215,
                                "parentTypeId": 10071,
                                "typeName": "推广方案录入审批",
                                "leadingAnswer": "",
                                "level": 3,
                                "firstOwnerId": 2234,
                                "secondOwnerId": 0,
                                "children": [],
                                "leaf": true
                            },
                            {
                                "typeId": 1000216,
                                "parentTypeId": 10072,
                                "typeName": "账号密码",
                                "leadingAnswer": "",
                                "level": 3,
                                "firstOwnerId": 2234,
                                "secondOwnerId": 0,
                                "children": [],
                                "leaf": true
                            },
                            {
                                "typeId": 1000217,
                                "parentTypeId": 10073,
                                "typeName": "推广通",
                                "leadingAnswer": "",
                                "level": 3,
                                "firstOwnerId": 2234,
                                "secondOwnerId": 0,
                                "children": [],
                                "leaf": true
                            },
                            {
                                "typeId": 1000218,
                                "parentTypeId": 10074,
                                "typeName": "其他推广业务问题",
                                "leadingAnswer": "",
                                "level": 3,
                                "firstOwnerId": 2234,
                                "secondOwnerId": 0,
                                "children": [],
                                "leaf": true
                            }
                        ],
                        "leaf": false
                    }
                ]
            }  )
        },0);
    }
    render(){
        let _this=this;
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
                    <MultiDropDown selected={
                    this.state.selected
                   }
                                   onChange={
                                   function(e){
                                    _this.setState({
                                   selected:e
                                   })
                                   }

                                   }
                                   dropDownData={this.state.mockMultiDropData} keyName='typeName' leafName='leaf' title="树状列表选择" ref="MultiDropDown"/>
                </div>

                <div className='demo-button-container'>
                    <div className='demo-button' style={{background:'red'}} onClick={()=>{this.getDropDownData('MultiDropDown')}}>点击获取树状列表的选择结果</div></div>
            </div>
        );
    }
    getDropDownData(type){
        console.log(this.refs[type].getParams());
    }
}
render(<IndexModule/>,document.getElementById('root'));

