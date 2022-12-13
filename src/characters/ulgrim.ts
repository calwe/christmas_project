import p5 from "p5";
import { Player } from "../player";

const speed = 6;

export class Ulgrim extends Player {
    constructor(p: p5, player: number) {
        super(p, speed, player, "#8b4513");
    }
}
