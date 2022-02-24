import React, {Fragment, useEffect, useState} from "react";
import EditPlayer from "./EditPlayer";
const ListPlayers = () => {
    const [players, setPlayers] = useState([]);



    const deletePlayer = async id => {
        try{    
          const deleteTodo = await fetch(`players/${id}`,{
              method: "DELETE"
          });

          setPlayers(players.filter(player => player.id !== id));
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

    }


useEffect(()=>{

    getPlayers();

}, []);  



return (<Fragment>
    <table className="table mt-5 text-center">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Codename</th>
        <th>Edit</th>
        <th>Delete</th>
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
            <td>{player.first_name}</td>
            <td>{player.last_name}</td>
            <td>{player.codename}</td>
            <td><EditPlayer player={player}/></td>
            <td><button className = "btn btn-danger" onClick={()=>deletePlayer(player.id)}>Delete</button></td>
        </tr>
    ))}
     
    </tbody>
  </table>
</Fragment>);
};

export default ListPlayers;