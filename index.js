const express = require('express');
const app = express();
const cors = require("cors");
const pool = require("./db");
const path = require("path");
const PORT = process.env.PORT || 5000;



//process.env.PORT
//process.env.NODE_ENV => production or undefined

if (process.env.NODE_ENV === "production") {
    //server static content
    //npm run build
    app.use(express.static(path.join(__dirname, "client/build")));
  }
  
  console.log(__dirname);
  console.log(path.join(__dirname, "client/build"));
  
//middleware
app.use(cors());
app.use(express.json());//req.body

//ROUTES//

//CREATE A PLAYER
app.post("/players", async(req, res) =>{
    try{
    
      const{id,first_name, last_name, codename} = req.body;
      
      const newPlayer = await pool.query(
      "INSERT INTO player (id,first_name, last_name, codename) VALUES($1,$2,$3,$4) RETURNING *", 
      [id,first_name,last_name,codename]
      );

      res.json(newPlayer.rows[0]);
   
    }catch(err){
        console.error(err.message);
        
    }
});


//CREATE A Green PLAYER
app.post("/playersGreen", async(req, res) =>{
    try{
    
      const{idGreen,first_nameGreen, last_nameGreen, codenameGreen} = req.body;
      
      const newPlayer = await pool.query(
      'INSERT INTO "playergreen" (idgreen, first_name, last_name, codename) VALUES($1,$2,$3,$4) RETURNING *', 
      [idGreen,first_nameGreen,last_nameGreen,codenameGreen]
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

//GET ALL GREEN PLAYERS
app.get("/playersGreen", async(req,res)=>{
    try{
        const allPlayers = await pool.query('SELECT * FROM "playergreen"');
        res.json(allPlayers.rows);
    }catch(err){
        console.error(err.message);
    }




});

//GET A PLAYER based on id
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

//GET A GreenPLAYER based on id
app.get("/playersGreen/:idgreen", async(req,res) =>{
    try{
    const {idgreen} = req.params;
    const player = await pool.query('SELECT * FROM "playergreen" WHERE idgreen = $1', 
    [idgreen]
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
        const{first_name, last_name, codename} = req.body;
        const updatePlayer = await pool.query(
            'UPDATE "player" SET first_name = $1, last_name = $2, codename = $3 WHERE id = $4',
            [first_name, last_name, codename, id]
        );
            res.json("Player was updated!");
    }catch(err){
        console.error(err.message);
    }
});

//UPDATE A Green PLAYER
app.put("/playersGreen/:idgreen", async(req,res)=>{
    try{
        const {idgreen} = req.params;
        const{first_name, last_name, codename} = req.body;
        const updatePlayer = await pool.query(
            'UPDATE "playergreen" SET first_name = $1, last_name = $2, codename = $3 WHERE idgreen = $4',
            [first_name, last_name, codename, idgreen]
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

//DELETE A Green PLAYER
app.delete("/playersGreen/:idgreen", async(req,res)=>{
    try{
        const {idgreen} = req.params;
        const deletePlayer = await pool.query('DELETE FROM "playergreen" WHERE "idgreen" = $1', 
        [idgreen]);
        res.json("Player was deleted!");

    }catch(err){
        console.error(err.message);
    }
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
  });

  
app.listen(PORT, ()=> {
    console.log(`server has started on port ${PORT}`);
});
