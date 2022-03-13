import React, {Fragment, useEffect, useState} from "react";
import EditPlayer from "./EditPlayer";
import { useNavigate } from "react-router-dom";
import '../App.css';

const ScoresScreen = () => {
   
    const [players, setPlayers] = useState([]);

    const [playersGreen, setPlayersGreen] = useState([]);

    const deletePlayer = async (id, status) => {
        try{
            const deletePlayer = await fetch(`players/${id}`,{
                method: "DELETE"
            });

            setPlayers(players.filter(player => player.id !== id));
            setPlayersGreen(playersGreen.filter(player => player.id !== id));
        }catch(err){
            console.error(err.message);
        }
    }

    const getPlayers = async (player_status) => {
        try{
            const response = await fetch('/player_status/' + player_status)
            const jsonData = await response.json();

            return jsonData
        }catch(err){
            console.error(err.message);
        }
        return () => {
            console.log("component unmounted");
        }
    }

useEffect(()=>{

    getPlayers('red').then((jsonData) => setPlayers(jsonData))
    getPlayers('green').then((jsonData) => setPlayersGreen(jsonData))
   return () => {
       console.log("component unmounted");
   }

}, []);  

return (<Fragment>
    <div class="row">
    <div class="col-sm-6 bg-danger table-striped text-white table-responsive table-sm">
            <table className="table table-danger table-bordered table-curved mt-2 text-center">
        <thead>
        <tr>
       
        <th>Codename</th>
        <th>Points</th>
       
        </tr>
        </thead>
        <tbody>
        {players.map(player => (
            <tr key={player.id}>
                <td>{player.codename}</td>
            </tr>
         ))}
    </tbody>
  </table></div>
    
  <div class="col-sm-6 bg-success text-white table-striped table-responsive table-sm">
            <table className="table mt-2 table-bordered table-curved table-success text-center">
        <thead>
        <tr>
            <th>Codename</th>
            <th>Points</th>
            
        </tr>
        </thead>
        <tbody>
        {playersGreen.map(player => (
            <tr key={player.id}>
                <td>{player.codename}</td>
            </tr>
         ))}
    </tbody>
  </table></div>
   
    </div>
    
</Fragment>);
};

export default ScoresScreen;
