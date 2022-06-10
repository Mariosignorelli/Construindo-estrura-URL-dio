import { URLController } from "controller/URLController";
import { mongo_connection } from "database/mongo_connection";
import express, {Request, Response} from "express";


const api = express();
 api.use(express.json())

 const database = new mongo_connection()
 database.connect()
 
const urlController = new URLController()
api.post('/shorten', urlController.shorten)
api.get('hash', urlController.redirect)


api.listen(5000, () =>  console.log('express  listening'));