//import express from "express";
const express = require("express");

const app = express();
const port = 800;

app.get("/api/hello", (req, res) => {
    //res.send("Hello World");
    res.json({message: "Hello World"});
});

app.listen(port, () => {
    console.log(`Express server is listening on port ${port}`);
});
