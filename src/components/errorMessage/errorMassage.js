import React from 'react';
import { Alert } from 'reactstrap';

const ErrorMassage = ({errorMessage})=>{
    return (
        <Alert color="danger" className="text-center w-100 mt-5">
        Something goes wrong.
      </Alert>   
    )
}

export default ErrorMassage;

