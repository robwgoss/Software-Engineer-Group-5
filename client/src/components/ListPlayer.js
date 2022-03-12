import React, {Fragment, useEffect, useState} from "react";
import EditPlayer from "./EditPlayer";
import { useNavigate } from "react-router-dom";
import '../App.css';

const ListPlayers = () => {
    let navigate = useNavigate();
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
        getPlayers('red')
            .then((jsonData) => setPlayers(jsonData))

        getPlayers('green')
            .then((jsonData) => setPlayersGreen(jsonData))

        return () => {
            console.log("component unmounted");
        }

    }, []);

    const handleUserKeyPress = event => {
    const { key, keyCode } = event;

    if (keyCode === 116) {
        navigate("/playaction");
    }
    
  };

  useEffect(() => {
    window.addEventListener('keydown', handleUserKeyPress);

    return () => {
      window.removeEventListener('keydown', handleUserKeyPress);
    };
  });


return (<Fragment>
    <div class="row">
    <div class="col-sm-6 bg-danger table-striped text-white table-responsive table-sm">
            <table className="table table-danger table-bordered table-curved mt-5 text-center">
        <thead>
        <tr>
            <th>Id</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Codename</th>
            <th>Edit</th>
            <th>Delete</th>
        </tr>
        </thead>
        <tbody>
        {players.map(player => (
            <tr key={player.id}>
                <td>{player.id}</td>
                <td>{player.first_name}</td>
                <td>{player.last_name}</td>
                <td>{player.codename}</td>
                <td><EditPlayer player={player}/></td>
                <td><button className = "btn btn-warning" onClick={()=>deletePlayer(player.id)}>Delete</button></td>
            </tr>
         ))}

    </tbody>
  </table></div>

  <div class="col-sm-6 bg-success text-white table-striped table-responsive table-sm">
            <table className="table mt-5 table-bordered table-curved table-success text-center">
        <thead>
        <tr>
            <th>Id</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Codename</th>
            <th>Edit</th>
            <th>Delete</th>
        </tr>
        </thead>
        <tbody>
        {playersGreen.map(player => (
            <tr key={player.id}>
                <td>{player.id}</td>
                <td>{player.first_name}</td>
                <td>{player.last_name}</td>
                <td>{player.codename}</td>
                <td><EditPlayer player={player}/></td>
                <td><button className = "btn btn-warning" onClick={()=>deletePlayer(player.id)}>Delete</button></td>
            </tr>
         ))}

    </tbody>
  </table></div>

    </div>

</Fragment>);
};

export default ListPlayers;
