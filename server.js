//import express from "express";
const express = require("express");
//import faker from "faker";
const faker = require("faker");

const app = express();
const port = 800;

//app.get("/api/hello", (req, res) => {
    //res.send("Hello World");
    //res.json({message: "Hello World"});
//});

const generateUser = () => {
    const newFake = {
        _id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
    return newFake;
};

app.get("/api/users/new", (req, res) => {
    const newUser = generateUser();
    res.json(newUser);
});

app.listen(port, () => {
    console.log(`Express server is listening on port ${port}`);
});
