import React from 'react';
import './Logo.css'
import classNames from "classnames";


const Logo = ({color}) => {
    console.log(color)
    return <div className={classNames(color, 'logo')}>logo</div>;
};

export default Logo;