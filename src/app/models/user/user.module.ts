import { Move } from "./move.module";

export class User {
    constructor(public name: string, public coins: number, public moves:Move[] ) {  
    }
}