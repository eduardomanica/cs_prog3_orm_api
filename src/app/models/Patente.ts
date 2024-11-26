import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('tb_patente')
class Patente {//codigo fonte referente ao pdf da parte 7.

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    nome: string;

    @Column('int')
    quant_min_pontos: number;

    @Column('date', { default: () => 'CURRENT_TIMESTAMP' })
    datacriacao: Date;

    @Column('text')
    cor: string;

    @Column('text')
    logotipo: string;
}
export default Patente;