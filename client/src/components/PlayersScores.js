import React, {Fragment, useEffect, useState} from "react";
import '../App.css';

const ScoresScreen = () => {
   
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

const [dataRec, setDataRec] = useState([0]);

const [dataTransmisssionStats, setDataTransmisssionStats] = useState([]);

const [statusPlayerGame, setStatusPlayerGame] = useState([]);
useEffect(()=>{
    getPlayers('red').then((jsonData) => setPlayers(jsonData))
    getPlayers('green').then((jsonData) => setPlayersGreen(jsonData))
  

        
    return () => {
       console.log("component unmounted");
   }
}, []);  


const [playerRedTotal, setPlayerRedTotal] = useState([]);

const [playerGreenTotal, setPlayerGreenTotal] = useState([]);
useEffect(()=>{
    var ws = new WebSocket("ws://127.0.0.1:8888/");

    ws.onopen = () => {
        console.log('Opened Connection!');
    }; 
   
       
     
    ws.onmessage = (event) => {
       // setDataRec(JSON.parse(event.data)); //array1
       
        console.log(JSON.parse(event.data));
        var eventParsed = JSON.parse(event.data);
   
        switch (eventParsed.type)    {
            case "scorePoints" :
             
                setDataRec(eventParsed.obj_array); //array1
                
            break;
            case "dataStats" :
            {    
            console.log("testing testing testing testing");
                setDataTransmisssionStats(eventParsed.obj_array); //array 2
                
                var playerTransmit;
            var playerHit;
            for(let i = 0 ; i<dataTransmisssionStats.length; i++){
               
                if(dataTransmisssionStats[i] == 1){
                    playerTransmit = i;
                }
                if(dataTransmisssionStats[i] == 0){
                    playerHit = i;
                }
            }
           // setStatusPlayerGame("Player "+ players[playerTransmit-1].codename +" HIT Player " + playersGreen[playerHit-1].codename);
      
              for(let i = 0; i< players.length; i++){
               if(playerTransmit == players[i]["id"]){
                setStatusPlayerGame("Player "+ players[i]["codename"] +" HIT Player " + playersGreen[i]["codename"]);
               }
           }
           for(let i = 0; i< playersGreen.length; i++){
            if(playerTransmit == playersGreen[i]["id"]){
             setStatusPlayerGame("Player "+ playersGreen[i]["codename"] +" HIT Player " + players[i]["codename"]);
            }
           }
        }
    
            break;
            
        }
    
    
             console.log(dataRec);
             
            console.log(statusPlayerGame);
        };

        var redtotal = 0;
             for(let i = 0; i < players.length;i++){
                 if(dataRec[players[i].id] != null){
                     redtotal += dataRec[players[i].id];
                 }
             }
             setPlayerRedTotal(redtotal);
             var greentotal = 0;
             for(let i = 0; i < playersGreen.length;i++){
                 if(dataRec[playersGreen[i].id] != null){
                     greentotal += dataRec[playersGreen[i].id];
                 }
             }
             setPlayerGreenTotal(greentotal);
          
    
        ws.onclose = () => {
            console.log('Closed Connection!');
        };
           
        return () => {
            ws.close();
       }
    })
    


return (<Fragment>
    <br/>
    <div class="row">
    <div class="col-sm-6 bg-danger table-striped text-white table-responsive table-sm" style={{borderRadius:"15px 0px 0px 15px"}}>
            <table className="table table-danger table-bordered table-curved mt-2 text-center">
        <thead>
        <tr>
        <th>Id</th>
        <th>Codename</th>
        <th>Points</th>
        </tr>
        </thead>
        <tbody>
        {players.map(player => (
            <tr key={player.id}>
                <td>{player.id}</td>
                <td>{player.codename}</td>
                <td>{dataRec[player.id] != null ? dataRec[player.id] : 0}</td>
            </tr>
         ))}
    </tbody>
  </table>
  <h1>Total Score: {playerRedTotal}</h1>
  </div>

  <div class="col-sm-6 bg-success text-white table-striped table-responsive table-sm" style={{borderRadius:"0px 15px 15px 0px"}}>
            <table className="table mt-2 table-bordered table-curved table-success text-center">
        <thead>
        <tr>
            <th>Id</th>
            <th>Codename</th>
            <th>Points</th>
        </tr>
        </thead>
        <tbody>
        {playersGreen.map(player => (
            <tr key={player.id}>
                <td>{player.id}</td>
                <td>{player.codename}</td>
                <td>{dataRec[player.id] != null ? dataRec[player.id] : 0}</td>
            </tr>
         ))}
    </tbody>
  </table>
  

  <h1>Total Score: {playerGreenTotal}</h1>
  </div>
  <h1 style={{color:"white"}}>{statusPlayerGame}</h1>
  
    </div>
</Fragment>);
};

export default ScoresScreen;
