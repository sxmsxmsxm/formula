import React, {Component} from 'react'

import './formula.css'

export default class FormulaField extends Component{

	render(){
		return(
			<div >
				<h3 className="formula-modal-edit-title">公式编辑</h3>
				<textarea  rows="3" className="formula-edit-textarea thin-scroll"></textarea>
			</div>
		)
	}
}
  
