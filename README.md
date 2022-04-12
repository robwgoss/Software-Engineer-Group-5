UARK CSCE Spring 2022 Software Engineering project for group 5

*LIVE DEPLOY:* https://swe-group-5.herokuapp.com/ (DON'T VIEW FOR SPRINT 4)

----USE PYTHON TRAFFIC GENERATOR PROVIDED BY PROFESSOR----

**HOW TO RUN LOCALLY**

Clone the respository, this repo does not have node_modules installed so that proccess is within the client and server setup.

*Server*

1) Navigate to the top-level project folder (/Software-Engineer-Group-5) in terminal in the IDE of your choice (VSCODE RECOMMENDED). 

2) Run the command `npm install` to install the node_module.

3) Run the command `npm install nodemon` to install the other node libraries for the server. (Don't skip this step, or you will face errors)

4) Run the command `nodemon index` to start a local server.

*Client*

1) Navigate to the `client` folder in a NEW terminal in the IDE of your choice (VSCODE RECOMMENDED).

2) Run the command `npm install` to install the node_modules for the client, then run `npm install react-router-dom`.

3) Once the server is installed and running, run the command `npm start` in this terminal while still in the `client` folder.

4) The application will open up a browser tab and boot locally on `http://localhost:3000/`.



