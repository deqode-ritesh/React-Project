import React,{useState} from "react";
import '../Calculator.css';
import styles from "./calculator.module.css";

function Calculator(){

    const [prevValue,setPreviousVal] = useState(0);
    const [afterValue,setAfterVal] = useState(0);
    const [operand, setOperandVal] = useState('');
   // const [equalOperand, setEqualOperandVal] = useState(false);
    const [operationList, setOperationList] = useState([]);
    
    function gen4() {
        return Math.random().toString(16).slice(-4)
      }
      
      function simpleUniqueId(prefix) {
        return (prefix || '').concat([
          gen4(),
          gen4(),
          gen4(),
          gen4(),
          gen4(),
          gen4(),
          gen4(),
          gen4()
        ].join(''))
      }
    
    function operations(tempValue,presesntVal,operand){
        switch(operand){
            case '+': 
                return (tempValue + presesntVal);
            case '-': return (tempValue - presesntVal);
            case 'X': return (tempValue * presesntVal);
            case '/': return (tempValue / presesntVal);
            default: return '';
        }
    }
    function OnOperandClick(operandVal){
         setOperandVal(prevState=>operandVal);
         setAfterVal(prevValue);
         setPreviousVal(0);
    }
    function OnNumberClick(number){
        if(prevValue === 0){
            setPreviousVal(prevState => number.toString());
        }else{
            setPreviousVal(prevState => prevState + number.toString());
        }
       
    }
    function OnEqualClick(){
       // setEqualOperandVal(true); 
        let output = '';
      
        if(afterValue && prevValue && operand){
          output = operations(Number(afterValue),Number(prevValue),operand);
         
          let operation={
                id:simpleUniqueId('List-'),
                firstValue:afterValue,
                secondValue:prevValue,
                operand:operand
            }
        setOperationList([...operationList,operation]);
        setAfterVal(prevState=>'');
        setPreviousVal(prevState=>output);
       }
       // setEqualOperandVal(false); 
    }
    function changeFun(){

    }
    function clearOperations(){
        setPreviousVal(prevState=>0);
        setAfterVal(prevState=>0);
        setOperandVal(prevState=>'');
        setOperationList(prevState=>[]);
    }
    function UpdateOperations(props){
        return (<ul>
            {props.Operations.length>0?
            props.Operations.map((ops)=>(
                <li key={ops.id}>{ops.firstValue} {ops.operand} {ops.secondValue} {'='}{operations(Number(ops.firstValue),Number(ops.secondValue),ops.operand)}</li>
            )):''}
        </ul>);
    }    

    return(
<div className={styles.calculator}>
<div>
 <UpdateOperations Operations={operationList} />
</div>

<input type="number" value={prevValue} onChange={changeFun} />

<div className={styles.calculator_buttons}>
  <button className={[styles.calc_button,styles.is_clear].join(' ')} onClick={clearOperations}>C</button>
  <button className={[styles.calc_button,styles.ops].join(' ')} onClick={()=>OnOperandClick('/')}>&divide;</button>

  <button className={styles.calc_button} onClick={()=>OnNumberClick(7)}>7</button>
  <button className={styles.calc_button} onClick={()=>OnNumberClick(8)}>8</button>
  <button className={styles.calc_button} onClick={()=>OnNumberClick(9)}>9</button>
  <button className={[styles.calc_button,styles.ops].join(' ')} onClick={()=>OnOperandClick('X')}>x</button>

  <button className={styles.calc_button} onClick={()=>OnNumberClick(4)}>4</button>
  <button className={styles.calc_button} onClick={()=>OnNumberClick(5)}>5</button>
  <button className={styles.calc_button} onClick={()=>OnNumberClick(6)}>6</button>
  <button className={[styles.calc_button,styles.ops].join(' ')} onClick={()=>OnOperandClick('-')}>-</button>

  <button className={styles.calc_button} onClick={()=>OnNumberClick(1)}>1</button>
  <button className={styles.calc_button} onClick={()=>OnNumberClick(2)}>2</button>
  <button className={styles.calc_button} onClick={()=>OnNumberClick(3)}>3</button>
  <button className={[styles.calc_button,styles.ops].join(' ')} onClick={()=>OnOperandClick('+')}>+</button>

  <button className={[styles.calc_button,styles.is_zero].join(' ')} onClick={()=>OnNumberClick(0)}>0</button>
  <button className={[styles.calc_button,styles.is_equals].join(' ')} onClick={()=>OnEqualClick('=')}>=</button>
</div>

</div>

    );
}
export default Calculator;