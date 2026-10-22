 
const express = require("express");
const tasks = [];
const path = require("path");

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to my To-Do App!");
});

app.get("/about", (req, res) => {
    res.send("This app helps you manage your daily tasks.");
});

app.get("/contact", (req, res) => {
    res.send("Contact us at hello@example.com");
});

app.get("/form", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

 // Add a new task
app.get("/task", (req, res) => {
    const task = req.query.title;

    tasks.push(task);

    res.send("Your task is: " + task);
});

// Display all tasks
app.get("/tasks", (req, res) => {
    res.json(tasks);
});
app.get("/delete-task", (req, res) => {
    const index = Number(req.query.index);

    if (index >= 0 && index < tasks.length) {
        tasks.splice(index, 1);
        res.send("Task deleted successfully!");
    } else {
        res.send("Invalid task index.");
    }
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
