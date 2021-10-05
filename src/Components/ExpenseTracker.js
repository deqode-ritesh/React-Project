import React,{useEffect, useState} from "react";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.css';
import SimpleUniqueId from "./UniqueId";
import Validate from "./Validation";
const MainDiv = styled.section`max-width:400px;
                     margin:0 auto;
                     padding:10px;
                     background-color:#eee !important;
                     `
const TransactionBorder = styled.div`border-right:1px solid #eee;`                     
function ExpenseTracker(){
        const field ={
                id:'',
                text_value:'',
                amount:''
        }
    const[transactionArray, setTransactionArray] = useState(field);
    const[transactionFormErrorArray, setTransactionFormErrorArray] = useState(field);
    const[TransactionList, setTransactionList] = useState([]);
    const[Income, setIncome] = useState(0);
    const[Expenses, setExpenses] = useState(0);
   
    function addTransaction(event){
        event.preventDefault();
        if(!Validation()){
          return '';
        }

        transactionArray.id = SimpleUniqueId('List-');
        let trasctArray = [];
        trasctArray = TransactionList;
        trasctArray.push(transactionArray);
        setTransactionList(trasctArray);
        if(transactionArray.amount>0){
             setIncome(prevState=>prevState+Number(transactionArray.amount));   
        }else{
             setExpenses(prevState=>prevState+Number(transactionArray.amount));     
        }
        setTransactionArray(field);      
     }    
    function changeFun(event){
           setTransactionArray({...transactionArray,[event.target.name]:event.target.value});    
     }
    function Validation(){
        let Response = Validate(transactionArray,transactionFormErrorArray);
        setTransactionFormErrorArray(Response.field);
       if(!Response.count){
                return true;
        }
        return false; 
    }





    return(
                <div className="container">
                    <div className="row">
                        <div className="col">
                                <MainDiv className="shadow-lg p-3 mb-5 bg-body rounded">
                                     <h5 className="fs-5 mb-4">Expense Tracker</h5>
                                     <p className="fs-6 m-3 mb-0">Your Balance</p>
                                     <p className="fs-5 m-3 mt-0">{(Income+Expenses)>0?('$'+(Income+Expenses)):'-'+('$'+Math.abs(Income+Expenses))}</p>
                                     <div className="row shadow-sm p-3 mb-4 bg-body rounded text-center">
                                         <TransactionBorder className="col-6 ">
                                                <p className="fs-6 mb-0">Income</p>
                                                <p className="fs-6 mb-0 text-success">{Income}</p>
                                         </TransactionBorder>
                                         <div className="col-6">
                                                <p className="fs-6 mb-0">Expenses</p>
                                                <p className="fs-6 mb-0 text-danger">{Expenses}</p> 
                                          </div>  
                                     </div>
                                     <div className="row">
                                        <p className="fs-6">History</p>
                                        <hr/>
                                        <ul className="list-group">
                                                {TransactionList.map(item=>(
                                                      <li key={item.id} className={item.amount>0?"list-group-item mt-2 success-rightborder":"list-group-item mt-2 danger-rightborder"}>{item.text_value}<div className="float-end">{item.amount}</div></li>  
                                                ))}
                                        
                                        </ul>
                                     </div>
                                     <div className="row mt-4">
                                        <p>Add New Transaction</p>
                                        <hr/>
                                        <form onSubmit={(e)=>addTransaction(e)}>
                                        <div>
                                              <label className="form-label">Text</label>
                                              <input type="text" name="text_value" value={transactionArray.text_value} className="form-control" onChange={changeFun} />
                                        </div>
                                        <div>
                                              <label className="form-label">Amount</label>
                                              <input type="number" name="amount" value={transactionArray.amount} className="form-control" onChange={changeFun} />
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="mt-4">
                                        <input type="submit" value="Submit" />
                                        </div>
                                        </form>
                                     </div>
                                </MainDiv>
                        </div>
                    </div>  
                </div>   
        
        );
}
export default ExpenseTracker;

