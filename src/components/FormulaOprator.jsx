import React, {Component} from 'react'
import './formula.css'

export default class FormulaOprator extends Component{

	render(){
		return(

			<ul >
				<li className="formula-oprator-items">+</li>
				<li className="formula-oprator-items">-</li>
				<li className="formula-oprator-items">*</li>
				<li className="formula-oprator-items">/</li>
				<li className="formula-oprator-items">%</li>
				<li className="formula-oprator-items">=</li>
				<li className="formula-oprator-items">(</li>
				<li className="formula-oprator-items">)</li>
				<li className="formula-oprator-items">&lt;</li>
				<li className="formula-oprator-items">&gt;</li>
				<li className="formula-oprator-items">&lt;=</li>
				<li className="formula-oprator-items">&gt;=</li>
				<li className="formula-oprator-items">!=</li>
				<li className="formula-oprator-items">与</li>
				<li className="formula-oprator-items">或</li>
				<li className="formula-oprator-items">非</li>
				<li className="formula-oprator-items">1</li>
				<li className="formula-oprator-items">2</li>
				<li className="formula-oprator-items">3</li>
				<li className="formula-oprator-items">4</li>
				<li className="formula-oprator-items">5</li>
				<li className="formula-oprator-items">6</li>
				<li className="formula-oprator-items">7</li>
				<li className="formula-oprator-items">8</li>
				<li className="formula-oprator-items">9</li>
				<li className="formula-oprator-items">0</li>
			</ul>

		)
	}
}
  
