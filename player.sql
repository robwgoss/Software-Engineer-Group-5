
--CREATE DATABASE playerlist;
CREATE TYPE STATUS AS ENUM('red', 'green', 'inactive');
CREATE TABLE player(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    codename VARCHAR(30),
    status STATUS DEFAULT 'inactive'
);
