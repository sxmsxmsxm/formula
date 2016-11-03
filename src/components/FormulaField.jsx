import React, {Component} from 'react'
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon'
import './formula.css'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class FormulaEidt extends Component{

	constructor(){
		super();
		this.state = {current: '1'};
	}

	handleClick(e) {
		console.log('click ', e);
		this.setState({
			current: e.key,
		});
	}

	render(){
		return(
			<div className="formula-modal-field-wrap ">
				<h3 className="formula-modal-body-title">本表单</h3>
			  	<Menu  onClick={this.handleClick.bind(this)}  style={{ width: 158 }} defaultOpenKeys={['sub1']} selectedKeys={[this.state.current]} mode="inline" className="formula-modal-field-list thin-scroll">
					<SubMenu key="sub1" title={<span>字段名一字段名一字段名一</span>}>
						<Menu.Item key="1">子字段名称</Menu.Item>
						<Menu.Item key="2">子字段名称子字段名称子字段名称</Menu.Item>
						<Menu.Item key="3">子字段名称</Menu.Item>
						<Menu.Item key="4">子字段名称</Menu.Item>
					</SubMenu>
					
					<SubMenu key="sub2" title={<span>字段名二</span>}>
						<Menu.Item key="5">子字段名称</Menu.Item>
						<Menu.Item key="6">子字段名称</Menu.Item>
						<Menu.Item key="7">子字段名称</Menu.Item>
						<Menu.Item key="8">子字段名称</Menu.Item>
					</SubMenu>
					<SubMenu key="sub4" title={<span>字段名三</span>}>
						<Menu.Item key="9">子字段名称</Menu.Item>
						<Menu.Item key="10">子字段名称</Menu.Item>
						<Menu.Item key="11">子字段名称</Menu.Item>
						<Menu.Item key="12">子字段名称</Menu.Item>
					</SubMenu>
					<SubMenu key="sub5" title={<span>字段名四</span>}>
					</SubMenu>
				</Menu>
			</div>
		)
	}
}
  
