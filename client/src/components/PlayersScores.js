import React, {Fragment, useEffect, useState} from "react";
import EditPlayer from "./EditPlayer";
import { useNavigate } from "react-router-dom";
import '../App.css';

const ScoresScreen = () => {
   
    const [players, setPlayers] = useState([]);

    const [playersGreen, setPlayersGreen] = useState([]);

    const deletePlayer = async id => {
        try{    
          const deletePlayer = await fetch(`players/${id}`,{
              method: "DELETE"
          });

          setPlayers(players.filter(player => player.id !== id));
        }catch(err){
            console.error(err.message);
        }

    }

    const deletePlayerGreen = async idgreen => {
        try{    
          const deletePlayer = await fetch(`playersGreen/${idgreen}`,{
              method: "DELETE"
          });

          setPlayersGreen(playersGreen.filter(playergreen => playergreen.idgreen !== idgreen));
        }catch(err){
            console.error(err.message);
        }

    }


    const getPlayers = async () => {
        try{    
            const response = await fetch("/players")
            const jsonData = await response.json();

            setPlayers(jsonData);
        }catch(err){
            console.error(err.message);
        }
        return () => {
            console.log("component unmounted");
        }

    }
    const getPlayersGreen = async () => {
        try{    
            const response = await fetch("/playersGreen")
            const jsonData = await response.json();

            setPlayersGreen(jsonData);
        }catch(err){
            console.error(err.message);
        }
        return () => {
            console.log("component unmounted");
        }
    }


useEffect(()=>{

    getPlayers();
   return () => {
       console.log("component unmounted");
   }

}, []);  

useEffect(()=>{

    getPlayersGreen();
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
            {/*  <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
        </tr> */}
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
            {/*  <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
        </tr> */}
        {playersGreen.map(playergreen => (
            <tr key={playergreen.idgreen}>
          
                <td>{playergreen.codename}</td>
                
             
            </tr>
         ))}
     
    </tbody>
  </table></div>
   
    </div>
    
</Fragment>);
};

export default ScoresScreen;