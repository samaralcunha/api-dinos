import express from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';

const prisma = new PrismaClient();
const app = express();

app.use(cors());

app.get('/dinos', async (req: any, res: any) => {
    const dinos = await prisma.dino.findMany();
    res.json(dinos);
});

app.get('/jurassico', async (req: any, res: any) => {
    try {
        const jurassico = await prisma.dino.findMany({
            where: {
                periodo: "Jurássico"
            }
        });
        res.json(jurassico);
    } catch {
        res.status(500).json({ error: "Dinos tão com problema pra aparecer :(" });
    }
});

app.get('/cretaceo', async (req: any, res: any) => {
    try {
        const cretaceo = await prisma.dino.findMany({
            where: {
                periodo: "Cretáceo"
            }
        });
        res.json(cretaceo);
    } catch {
        res.staus(500).json({ error: "Dinos tão com problema pra aparecer :(" });
    }
});

app.get('/triassico', async (req: any, res: any) => {
    try {
        const triassico = await prisma.dino.findMany({
            where: {
                periodo: "Triássico"
            }
        });
        res.json(triassico);
    } catch {
        res.staus(500).json({ error: "Dinos tão com problema pra aparecer :(" });
    }
});

app.listen(4000);