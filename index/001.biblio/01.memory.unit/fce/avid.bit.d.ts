import { Request, Response } from "express";
export default interface AvidBit {
    nom: string;
    name?: string;
    detail?: string;
    isAlive?: boolean;
    req?: Request;
    res?: Response;
}
