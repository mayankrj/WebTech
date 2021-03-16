const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
}));


const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "welcome123",
    database: "Login",
});

app.post('/register', (req, res) => {

    const username = req.body.username ;
    const password = req.body.password ;

    db.query("INSERT INTO Users (username,password) VALUES (?,?)", [username, password], (err, result) => {
        console.log(err);
    })
}
);

app.post('/login', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    db.query("SELECT * from Users WHERE username = ? AND password= ?", [username, password], (err, result) => {
        if (err) {
            res.send({ err: err });
        }
        else {
            if (result.length>0) {
                res.send(result);
            }
            else {
                res.send({ message: "wrong" });
            }
        }
    })
}) ;

app.listen(3001);

