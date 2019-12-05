import React from 'react';
import style from "./spinner.module.scss";

const Spinner = (props) => {
    return ( 
        <div {...props}>
            <div className={style["cssload-loading"]}>loading ...</div>
        </div>
    );
}

export default Spinner;