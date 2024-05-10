import express, { request } from "express";
import {query} from "express-validator" 
import mongoose from "mongoose";

const app = express();

mongoose.connect('mongodb://localhost:27017/RUN')
.then(()=> console.log('connected to database'))

const PORT = process.env.PORT || 4000;

const mockUsers = [
  { id: 1, uusername: 'Anson', displayName: "Anson"},
  { id: 2, uusername: 'Raph', displayName: "Raph"},
  { id: 3, uusername: 'Goody', displayName: "Goody"},
  { id: 4, uusername: 'Anson', displayName: "Caleb"},
  { id: 5, uusername: 'Raph', displayName: "Emma"},
  { id: 6, uusername: 'Goody', displayName: "Daniel"},
]

app.get("/", (request, response) =>{response.send("Hello World! Am a senior Dev")
});

app.get('/api/user', (request, response) =>{
  response.send(mockUsers);
});

app.get("/api/users/:id", (request, response) =>{
  console.log(request.params);
  const parsedId = parseInt(request.params.id)
})
app.get('/api/products', (request, response) =>{
  response.send([{id: 123, name: "chicken laps", price: 2000}]);
});

app.listen(PORT,() => {console.log(`Running on port ${PORT}`)

});
