import React, { useEffect, useState } from 'react';
import Header from '../header/Header';
import ClubList from '../Clublist/ClubList';
import './Home.css'

const Home = () => {
    const [team, setTeam] = useState([])
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain')
            .then(res => res.json())
            .then(data => setTeam(data.teams))
    }, [])

    return (
        <div className="body">
            <Header/>
            <div className="container">
                <div className="row">
                    <div className="clubList">
                        {
                            team.map(team => <ClubList team={team} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;