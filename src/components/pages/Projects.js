import React from "react";
import { Link } from 'react-router-dom';
import '../../App.css';

export default function Projects() {
    return <><br></br><br></br><div className='center'>
      <Link to="https://franks-farms.com">
        <img className="i-size" src='/images/ff-thumb.jpg' alt="Franks Farms"/>
        </Link><br></br><br></br>
      <Link to="https://rubiesoftruth.com">
        <img className="i-size" src='/images/rubyruth.jpg' alt="Rubies of Truth"/>
        </Link>
      </div></>
}