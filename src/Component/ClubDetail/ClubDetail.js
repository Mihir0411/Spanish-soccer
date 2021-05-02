import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import TeamGender from '../teamgender/TeamGender';
import './ClubDetail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag, faFutbol, faMapMarkerAlt, faMars } from '@fortawesome/free-solid-svg-icons';
import facebook from '../image/Facebook.png'
import twitter from '../image/Twitter.png'
import youTube from '../image/YouTube.png'


const ClubDetail = () => {
    const {idTeam} = useParams()
    const [detail, setDetail] = useState([])
   
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`
        fetch(url)
            .then(res => res.json())
            .then(data => setDetail(data.teams[0]))
    }, [idTeam])

    return (
            <div className="container">
                <div className="image imageLogo">
                    <img src={detail.strTeamBadge} alt="" />
                </div>
                <div className="container ">
                    <div className="clubInfo">
                        <h2> {detail.strTeam}</h2>
                        <div className="d-flex ">
                            <div className="col-md-8">
                                <p><FontAwesomeIcon icon={faMapMarkerAlt} /> founded: {detail.intFormedYear}</p>
                                <p><FontAwesomeIcon icon={faFlag} /> country: {detail.strCountry}</p>
                                <p><FontAwesomeIcon icon={faFutbol} /> sports Type: {detail.strSport}</p>
                                <p><FontAwesomeIcon icon={faMars} /> gander: {detail.strGender}</p>
                            </div>
                            <div className="col-md-4 teamGender">
                                <TeamGender gender={detail}/>
                            </div>
                        </div>
                    </div>
                    <div className="description">
                        Description: {detail.strDescriptionEN}
                    </div>
                    <div className="social">
                        <a href="https://www.facebook.com/"><img src={facebook} alt="" /></a>
                        <a href="https://www.twitter.com/"><img src={twitter} alt="" /></a>
                        <a href="https://www.youtube.com/"><img src={youTube} alt="" /></a>
                    </div>
                </div>
            </div>
    );
};

export default ClubDetail;