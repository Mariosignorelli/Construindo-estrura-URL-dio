import  {Request , Response } from 'express';
import shortid from 'shortid';
import { config } from '../config/Constatants';



export class URLController {
        public async shorten(req:Request,response:Response):Promise<void> {
           // Verifacar se a RL já não existe 
           // Criar um hash pra essa  URL 
           const{originURL} = req.body
           const hash = shortid.generate()
           const shortURL = ` ${config.API_URL}/${hash}`
           //Salvar essa URL no banco
           // Retornar a URL que Salvou
           response.json({originURL, hash, shortURL})
        }
    public async redirect(req: Request, res: Response):Promise<void>{
        // Pegar o hash da URL
        const { hash} =req.params
        // Encontra a URL original pelo hash
         const url = {
            originURL:"mongodb+srv://MCS:<password>@project-dio.ps7e9tg.mongodb.net/?retryWrites=true&w=majority",
            hash:'CUSD3DgEB',
            shortURL:'http://localhost:5000/CUSD3DgEB'
         }
        //redirecinar para URL original apartir do encintramos no BD

    }
}
