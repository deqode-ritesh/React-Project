import React from "react";
function Validate(TransactionArray,transactionFormErrorArray){
    let Response = {field:'',count:0}
    let errors = transactionFormErrorArray;
    if(TransactionArray.text_value === ""){
            errors.text_value ="Please insert the Text";  
    }else{
            errors.text_value ="";     
    }

    if(TransactionArray.amount === ""){
        errors.amount ="Please insert the amount";  
    }else{
        errors.amount ="";     
    }
    
    let errorCount = 0;
    for (const [key,value] of Object.entries(errors)) {
            if (value) {
            errorCount = 1;
            break;
            }
    }
    Response.field = errors;
    Response.count = errorCount;
    return Response;
}

export default Validate;