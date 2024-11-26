import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Patente from '../models/Patente';

class PatenteController {

    async store(req: Request, res: Response) {

        const repository = getRepository(Patente);

        const { id, nome, quant_min_pontos, datacriacao, cor, logotipo } = req.body;

        const idExists = await repository.findOne({ where: { id } });

        if (idExists) {

            return res.sendStatus(409);

        }

        const p = repository.create(req.body);

        await repository.save(p);
        return res.json(p);
    }

}

export default new PatenteController();