import React, {Fragment, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';

const PingActionScreen = () => {
    let navigate = useNavigate();
    const [players, setPlayers] = useState([]);
    const [playersGreen, setPlayersGreen] = useState([]);
    

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
        window.addEventListener('keydown', handleUserKeyPress);
        
        return () => {
            window.removeEventListener('keydown', handleUserKeyPress);
            console.log("component unmounted");
        }

    }, []);

    const handleUserKeyPress = event => {
    const { key, keyCode } = event;

    if (keyCode === 116) {
        navigate("/playaction");
    }
    
  };
  const consoleFunc = () =>{
    console.log(players);
    console.log(playersGreen);
  };

return (<Fragment>
    <h1 class="text-white">Red Team</h1>
    <button onClick = {consoleFunc}><b>Player 1</b>{ players.filter(player => player.id === 1).map(player => <div>{player.codename}</div>)} <span style={{backgroundColor:"#f08080"}}>HIT</span> <br></br> <b>Player 4</b>{ playersGreen.filter(playerGreen => playerGreen.id === 4).map(playerGreen => <div>{playerGreen.codename}</div>)}  </button>
    <button onClick = {consoleFunc}><b>Player 1</b>{ players.filter(player => player.id === 1).map(player => <div>{player.codename}</div>)} <span style={{backgroundColor:"#f08080"}}>HIT</span> <br></br> <b>Player 5</b>{ playersGreen.filter(playerGreen => playerGreen.id === 5).map(playerGreen => <div>{playerGreen.codename}</div>)}  </button>
    <button onClick = {consoleFunc}><b>Player 1</b>{ players.filter(player => player.id === 1).map(player=> <div>{player.codename}</div>)} <span style={{backgroundColor:"#f08080"}}>HIT</span> <br></br> <b>Player 6</b>{ playersGreen.filter(playerGreen => playerGreen.id === 6).map(playerGreen => <div>{playerGreen.codename}</div>)}  </button>
    <button onClick = {consoleFunc}><b>Player 2</b>{ players.filter(player => player.id === 2).map(player => <div>{player.codename}</div>)} <span style={{backgroundColor:"#f08080"}}>HIT</span> <br></br> <b>Player 4</b>{ playersGreen.filter(playerGreen => playerGreen.id === 4).map(playerGreen => <div>{playerGreen.codename}</div>)}  </button>
    <button onClick = {consoleFunc}><b>Player 2</b>{ players.filter(player => player.id === 2).map(player => <div>{player.codename}</div>)} <span style={{backgroundColor:"#f08080"}}>HIT</span> <br></br> <b>Player 5</b>{ playersGreen.filter(playerGreen => playerGreen.id === 5).map(playerGreen => <div>{playerGreen.codename}</div>)}  </button>
    <button onClick = {consoleFunc}><b>Player 2</b>{ players.filter(player => player.id === 2).map(player => <div>{player.codename}</div>)} <span style={{backgroundColor:"#f08080"}}>HIT</span> <br></br> <b>Player 6</b>{ playersGreen.filter(playerGreen => playerGreen.id === 6).map(playerGreen => <div>{playerGreen.codename}</div>)}  </button>
    <button onClick = {consoleFunc}><b>Player 3</b>{ players.filter(player => player.id === 3).map(player => <div>{player.codename}</div>)} <span style={{backgroundColor:"#f08080"}}>HIT</span> <br></br> <b>Player 4</b>{ playersGreen.filter(playerGreen => playerGreen.id === 4).map(playerGreen => <div>{playerGreen.codename}</div>)}  </button>
    <button onClick = {consoleFunc}><b>Player 3</b>{ players.filter(player => player.id === 3).map(player => <div>{player.codename}</div>)}<span style={{backgroundColor:"#f08080"}}>HIT</span> <br></br> <b>Player 5</b>{ playersGreen.filter(playerGreen =>playerGreen.id === 5).map(playerGreen => <div>{playerGreen.codename}</div>)}  </button>
    <button onClick = {consoleFunc}><b>Player 3</b>{ players.filter(player => player.id === 3).map(player => <div>{player.codename}</div>)} <span style={{backgroundColor:"#f08080"}}>HIT</span> <br></br> <b>Player 6</b>{ playersGreen.filter(playerGreen => playerGreen.id === 6).map(playerGreen => <div>{playerGreen.codename}</div>)} </button>
    
    <br></br>
    <br></br>

    <h1 class="text-white">Green Team</h1>
  
    <button onClick = {consoleFunc}><b>Player 4</b>{ playersGreen.filter(playerGreen => playerGreen.id === 4).map(playerGreen => <div>{playerGreen.codename}</div>)} <span style={{backgroundColor:"#90EE90"}}>HIT</span> <br></br> <b>Player 1</b>{ players.filter(player => player.id === 1).map(player => <div>{player.codename}</div>)}  </button>
    <button onClick = {consoleFunc}><b>Player 4</b>{ playersGreen.filter(playerGreen => playerGreen.id === 4).map(playerGreen => <div>{playerGreen.codename}</div>)} <span style={{backgroundColor:"#90EE90"}}>HIT</span> <br></br> <b>Player 2</b>{ players.filter(player => player.id === 2).map(player => <div>{player.codename}</div>)}  </button>
    <button onClick = {consoleFunc}><b>Player 4</b>{ playersGreen.filter(playerGreen => playerGreen.id === 4).map(playerGreen => <div>{playerGreen.codename}</div>)} <span style={{backgroundColor:"#90EE90"}}>HIT</span> <br></br> <b>Player 3</b>{ players.filter(player => player.id === 3).map(player => <div>{player.codename}</div>)}  </button>
    <button onClick = {consoleFunc}><b>Player 5</b>{ playersGreen.filter(playerGreen => playerGreen.id === 5).map(playerGreen => <div>{playerGreen.codename}</div>)} <span style={{backgroundColor:"#90EE90"}}>HIT</span> <br></br> <b>Player 1</b>{ players.filter(player => player.id === 1).map(player => <div>{player.codename}</div>)}  </button>
    <button onClick = {consoleFunc}><b>Player 5</b>{ playersGreen.filter(playerGreen => playerGreen.id === 5).map(playerGreen => <div>{playerGreen.codename}</div>)} <span style={{backgroundColor:"#90EE90"}}>HIT</span> <br></br> <b>Player 2</b>{ players.filter(player => player.id === 2).map(player => <div>{player.codename}</div>)}  </button>
    <button onClick = {consoleFunc}><b>Player 5</b>{ playersGreen.filter(playerGreen => playerGreen.id === 5).map(playerGreen => <div>{playerGreen.codename}</div>)} <span style={{backgroundColor:"#90EE90"}}>HIT</span> <br></br> <b>Player 3</b>{ players.filter(player => player.id === 3).map(player => <div>{player.codename}</div>)}  </button>
    <button onClick = {consoleFunc}><b>Player 6</b>{ playersGreen.filter(playerGreen => playerGreen.id === 6).map(playerGreen => <div>{playerGreen.codename}</div>)} <span style={{backgroundColor:"#90EE90"}}>HIT</span> <br></br> <b>Player 1</b>{ players.filter(player => player.id === 1).map(player => <div>{player.codename}</div>)}  </button>
    <button onClick = {consoleFunc}><b>Player 6</b>{ playersGreen.filter(playerGreen => playerGreen.id === 6).map(playerGreen => <div>{playerGreen.codename}</div>)}<span style={{backgroundColor:"#90EE90"}}>HIT</span> <br></br> <b>Player 2</b>{ players.filter(player => player.id === 2).map(player => <div>{player.codename}</div>)}  </button>
    <button onClick = {consoleFunc}><b>Player 6</b>{ playersGreen.filter(playerGreen => playerGreen.id === 6).map(playerGreen => <div>{playerGreen.codename}</div>)} <span style={{backgroundColor:"#90EE90"}}>HIT</span> <br></br> <b>Player 3</b>{ players.filter(player => player.id === 3).map(player => <div>{player.codename}</div>)} </button>
    
</Fragment>);
};

export default PingActionScreen;
