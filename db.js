const Pool = require("pg").Pool;
require("dotenv").config();

const devConfig = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;

const proConfig = 'postgres://dnohfltysxkmbv:4b41edfe4dd6b15665b708cb0e5b6fe0a17cc423ef11c0bbc97a460d31811b78@ec2-3-230-238-86.compute-1.amazonaws.com:5432/dmsge7vdq5ku6';



const pool = new Pool({

        connectionString: proConfig,

        ssl: {

          rejectUnauthorized: false,

        },

      })


module.exports = pool;

