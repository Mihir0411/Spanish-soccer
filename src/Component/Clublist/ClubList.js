import React from 'react';
import { Link } from 'react-router-dom';
import './ClubList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';

const ClubList = (props) => {
    const {idTeam,strSport,strTeam,strTeamBadge} = props.team

    return (
        <div className="clubName">
            <img src={strTeamBadge} alt=""/>
            <h3>Name: {strTeam}</h3>
            <h5>Club Type: {strSport}</h5>
            <Link to={`/detail/${idTeam}`}><button>Explore <FontAwesomeIcon icon={faArrowRight} /></button></Link>

        </div>
    );
};

export default ClubList;