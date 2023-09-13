"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const cors_1 = __importDefault(require("cors"));
const prisma = new client_1.PrismaClient();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.get('/dinos', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dinos = yield prisma.dino.findMany();
    res.json(dinos);
}));
app.get('/jurassico', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const jurassico = yield prisma.dino.findMany({
            where: {
                periodo: "Jurássico"
            }
        });
        res.json(jurassico);
    }
    catch (_a) {
        res.status(500).json({ error: "Dinos tão com problema pra aparecer :(" });
    }
}));
app.get('/cretaceo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cretaceo = yield prisma.dino.findMany({
            where: {
                periodo: "Cretáceo"
            }
        });
        res.json(cretaceo);
    }
    catch (_b) {
        res.staus(500).json({ error: "Dinos tão com problema pra aparecer :(" });
    }
}));
app.get('/triassico', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const triassico = yield prisma.dino.findMany({
            where: {
                periodo: "Triássico"
            }
        });
        res.json(triassico);
    }
    catch (_c) {
        res.staus(500).json({ error: "Dinos tão com problema pra aparecer :(" });
    }
}));
app.listen(4000);
