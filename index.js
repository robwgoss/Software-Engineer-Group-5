const express = require('express');
const app = express();
const cors = require("cors");
const pool = require("./db");
const PORT = process.env.PORT || 5000;



//process.env.PORT
//process.env.NODE_ENV => production or undefined

app.use(express.static("./client/build"));

if(process.env.NODE_ENV === "production"){
    //serve static content
    //npm run build
    app.use(express.static(path.join(__dirname, "client/build")));
}
//middleware
app.use(cors());
app.use(express.json());//req.body

//ROUTES//

//CREATE A PLAYER
app.post("/players", async(req, res) =>{
    try{
      const{first_name} = req.body;
      const newPlayer = await pool.query(
      "INSERT INTO player (first_name) VALUES($1) RETURNING *", 
      [first_name]
      );

      res.json(newPlayer.rows[0]);
    }catch(err){
        console.error(err.message);
    }
});
//GET ALL PLAYER
app.get("/players", async(req,res)=>{
    try{
        const allPlayers = await pool.query("SELECT * FROM player");
        res.json(allPlayers.rows);
    }catch(err){
        console.error(err.message);
    }




});

//GET A PLAYER
app.get("/players/:id", async(req,res) =>{
    try{
    const {id} = req.params;
    const player = await pool.query("SELECT * FROM player WHERE id = $1", 
    [id]
    );

    res.json(player.rows[0])
    }catch(err){
        console.error(err.message);
    }
});

//UPDATE A PLAYER
app.put("/players/:id", async(req,res)=>{
    try{
        const {id} = req.params;
        const{first_name} = req.body;
        const updatePlayer = await pool.query(
            "UPDATE player SET first_name = $1 WHERE id = $2",
            [first_name, id]
        );
            res.json("Player was updated!");
    }catch(err){
        console.error(err.message);
    }
});

//DELETE A PLAYER
app.delete("/players/:id", async(req,res)=>{
    try{
        const {id} = req.params;
        const deletePlayer = await pool.query("DELETE FROM player WHERE id = $1", 
        [id]);
        res.json("Player was deleted!");

    }catch(err){
        console.error(err.message);
    }
});

app.listen(PORT, ()=> {
    console.log(`server has started on port ${PORT}`);
});