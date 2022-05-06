import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button/index'

const mathOps = ["/","*","-","+",]
const renderButtons = onClickOperation =>{
   
    const renderButton = mathOp => (
        
        <Button 
          key ={mathOp} 
          type="button-operation-text"
          text={ mathOp.toString()} 
          clickHandler={onClickOperation}
        />
    ) 
    return mathOps.map(renderButton)
  }
const MathOperations = ({onClickOperation,onClickEqual}) => (
        
        <section className="math-operations">
            {renderButtons(onClickOperation)}
            <Button type="button-operation-text" text="=" clickHandler={onClickEqual}/>
        </section>
)
MathOperations.propTypes = {
    onClickOperation:PropTypes.func.isRequired,
    onClickEqual:PropTypes.func.isRequired,
}
export default MathOperations;