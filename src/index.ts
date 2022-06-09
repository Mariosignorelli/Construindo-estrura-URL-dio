import { URLController } from "controller/URLController";
import express, {Request, Response} from "express";


const api = express();
 api.use(express.json())
const urlController = new URLController()
api.post('/shorten', urlController.shorten)
api.get('hash', urlController.redirect)


api.listen(5000, () =>  console.log('express  listening'));