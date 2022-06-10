import { URLModel } from 'database/model/URL';
import  {Request , Response } from 'express';
import shortid from 'shortid';
import { config } from '../config/Constatants';




export class URLController {
        public async shorten(req:Request,response:Response):Promise<void> {
           // Verifacar se a RL já não existe 
           const{originURL} = req.body
           const url = await URLModel.findOne({ originURL })
		if (url) {
			response.json(url)
			return
		}
           // Criar um hash pra essa  URL 
           const hash = shortid.generate()
           const shortURL = ` ${config.API_URL}/${hash}`
           const newURL = await URLModel.create({ hash, shortURL, originURL })
		response.json(newURL)
           //Salvar essa URL no banco
           // Retornar a URL que Salvou
           response.json({originURL, hash, shortURL})
        }
    public async redirect(req: Request, response: Response):Promise<void>{
        // Pegar o hash da URL
        const { hash} =req.params
        // Encontra a URL original pelo hash
        const url = await URLModel.findOne({ hash })

		if (url) {
			response.redirect(url.originURL)
			return
		}
        //redirecinar para URL original apartir do encintramos no BD
        response.status(400).json({ error: 'URL not found' })
	}

    }

