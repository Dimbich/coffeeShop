import React from 'react';
import './spinner.css';
import RowBlock from '../rowBlock';

const Spinner = ()=>{
    const spinner = {
        config: {size: 4, offset: 1},
        content: <div className="lds-css ng-scope">
        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
</div>
    }
    return (
        <RowBlock columns = {[spinner]}/>
    )
}

export default Spinner;

