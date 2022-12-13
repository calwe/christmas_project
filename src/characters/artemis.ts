import p5 from "p5";
import { Player } from "../player";

const speed = 8;

export class Artemis extends Player {
    constructor(p: p5, player: number) {
        super(p, speed, player, "#483d8b");
    }
}
