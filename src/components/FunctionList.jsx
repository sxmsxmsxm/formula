import React, {Component} from 'react'
import Collapse from 'antd/lib/collapse';
import './formula.css'

const Panel = Collapse.Panel;

export default class FunctionList extends Component{
    handleChange(key) {
        console.log(key);
    }
    render(){
        return(
            <div className="formula-modal-funclist-wrap" >
                <h3 className="formula-modal-funclist-title">函数列表</h3>
                <div className="formula-panel-collapse-wrap thin-scroll" >
                    <Collapse defaultActiveKey={['1']} onChange={this.handleChange.bind(this)} className="formula-panel-collapse">
                        <Panel header="常用计算公式" key="1" className="formula-panel-collapse-titles">
                            <ul>
                                <li className="formula-panel-collapse-items">1</li>
                                <li className="formula-panel-collapse-items">2</li>
                                <li className="formula-panel-collapse-items">3</li>
                                <li className="formula-panel-collapse-items">4</li>
                            </ul>
                        </Panel>
                        <Panel header="面积计算公式" key="2" className="formula-panel-collapse-titles">
                            <ul>
                                <li className="formula-panel-collapse-items">1</li>
                                <li className="formula-panel-collapse-items">2</li>
                                <li className="formula-panel-collapse-items">3</li>
                                <li className="formula-panel-collapse-items">4</li>
                            </ul>
                        </Panel>
                        <Panel header="三角函数计算公式" key="3" className="formula-panel-collapse-titles">
                            <ul>
                                <li className="formula-panel-collapse-items">1formula-panel-collapse-itemsformula-panel-collapse-itemsformula-panel-collapse-items</li>
                                <li className="formula-panel-collapse-items">2</li>
                                <li className="formula-panel-collapse-items">3</li>
                                <li className="formula-panel-collapse-items">4</li>
                            </ul>
                        </Panel>
                        <Panel header="常用计算公式" key="4" className="formula-panel-collapse-titles">
                            <ul>
                                <li className="formula-panel-collapse-items">1</li>
                                <li className="formula-panel-collapse-items">2</li>
                                <li className="formula-panel-collapse-items">3</li>
                                <li className="formula-panel-collapse-items">4</li>
                            </ul>
                        </Panel>
                        <Panel header="面积计算公式" key="5" className="formula-panel-collapse-titles">
                            <ul>
                                <li className="formula-panel-collapse-items">1</li>
                                <li className="formula-panel-collapse-items">2</li>
                                <li className="formula-panel-collapse-items">3</li>
                                <li className="formula-panel-collapse-items">4</li>
                            </ul>
                        </Panel>
                        <Panel header="三角函数计算公式" key="6" className="formula-panel-collapse-titles">
                            <ul>
                                <li className="formula-panel-collapse-items">1</li>
                                <li className="formula-panel-collapse-items">2</li>
                                <li className="formula-panel-collapse-items">3</li>
                                <li className="formula-panel-collapse-items">4</li>
                            </ul>
                        </Panel>
                        <Panel header="三角函数计算公式" key="7" className="formula-panel-collapse-titles">
                            <ul>
                                <li className="formula-panel-collapse-items">1</li>
                                <li className="formula-panel-collapse-items">2</li>
                                <li className="formula-panel-collapse-items">3</li>
                                <li className="formula-panel-collapse-items">4</li>
                            </ul>
                        </Panel>
                    </Collapse>
                </div>
                <div className="formula-panel-function-tips thin-scroll">
                    
                    <div className="formula-panel-tips-content" > <span className="formula-panel-tips-title">说明：</span>分情况 如果 cexpr1 那么 expr1 如果 cexpr2 那么 expr2 [否则 exprn]  结束: 
   例如：分情况 如果 商品="牛奶" 那么 0.02 
                如果 商品="面包" 那么 0.015 
                如果 商品="电视" 那么 0.15 
                否则 0.1 结束</div>
                </div>
            </div>
        )
    }
}