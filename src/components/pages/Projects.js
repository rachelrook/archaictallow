import React from "react";
import { Link } from 'react-router-dom';
import '../../App.css';

export default function Projects() {
    return <><br></br><br></br><div className='center'>
      <Link to="https://franks-farms.com">
        <img className="i-size" src='/images/ff-thumb.jpg' alt="Franks Farms"/>
        </Link>
      </div></>
}