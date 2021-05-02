import React from 'react';
import Male from '../image/male.png'
import feMale from '../image/female.png'


const TeamGender = (props) => {
    const  {strGender} = props.gender
    return (
        <div className="gender">
            {
                strGender === "Male" ? <img src={Male} style={{width:"80%"}} alt=""/>
                :  <img src={feMale} style={{width:"80%"}} alt=""/> 
            }
        </div>
    );
};

export default TeamGender;