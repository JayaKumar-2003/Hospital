import express from 'express';
import cors from 'cors';

const app = new express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.listen(3000,()=>{
    console.log(`${'http://localhost:3000'}`)
})