import React from "react";
import { Link } from 'react-router-dom';
import '../../App.css';

export default function Projects() {
    return <><br></br><br></br><div className='center'>
      <Link to="https://www.americasbestcleans.com/">
        <img className="i-size" src='/images/abcd-rr.png' alt="Americas Best Carpet & Duct Cleaning"/>
        </Link><br></br><br></br>
      <Link to="https://rubiesoftruth.com">
        <img className="i-size" src='/images/rubyruth.jpg' alt="Rubies of Truth"/>
        </Link>
      </div></>
}