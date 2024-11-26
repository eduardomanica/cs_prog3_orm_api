import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Jogador from '../models/Jogador';

class JogadorController {  
    async store(req: Request, res: Response){
    
        const repository = getRepository(Jogador);
        const { nickname, senha, quantpontos, quantdinheiro, data_cadastro, data_ultimo_login, situacao} = req.body;
        const nicknameExists = await repository.findOne({ where: { nickname } });
        if (nicknameExists) {
            return res.sendStatus(409);
        }
        const j = repository.create({ nickname, senha, quantpontos, quantdinheiro, data_cadastro, data_ultimo_login, situacao }); //cria a entidade
        Jogador
        await repository.save(j); //persiste a entidade na tabela.
        return res.json(j);
    }
}


export default new JogadorController();