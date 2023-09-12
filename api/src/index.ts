import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();

app.get('/', async (req: any, res: any) => {
    const dinos = await prisma.dino.findMany();
    res.json(dinos);
})

app.listen(4000);