import React, {Component} from 'react'
import { Modal, Button ,Row, Col } from 'antd';
import FormulaField from './components/FormulaField'
import FormulaEidt  from './components/FormulaEidt'
import FunctionList from './components/FunctionList'
import FormulaOprator from  './components/FormulaOprator'

const EditFormula = React.createClass({
	getInitialState() {
		return { visible: false };
	},
	showModal() {
		this.setState({
			visible: true
		});
	},
	handleOk() {
		// console.log('点击了确定');
		this.setState({
			visible: false
		});
	},
	handleCancel(e) {
		// console.log(e);
		this.setState({
			visible: false
		});
	},
	render() {
		return (
		<div >
			<Button type="primary" onClick={this.showModal}>编辑公式</Button>
			<Modal title="编辑公式" visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel} width="1000" className="formula-edit-modal  thin-scroll" style={{top:"20px"}}>	
				<Row>
					<Col  span="4">
						<FormulaField  />
					</Col>
					<Col  span="14" className="formula-modal-edit-wrap">
						<FormulaEidt  />
						<FormulaOprator />
					</Col>
					<Col  span="6">
						<FunctionList />
					</Col>
				</Row>
			</Modal>
		</div>
		);
	}
})
export default EditFormula
