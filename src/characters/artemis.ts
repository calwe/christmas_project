import p5 from "p5";
import { Player } from "../player";
import { Lance } from "../weapons/lance";

const speed = 8;

export class Artemis extends Player {
    constructor(p: p5, player: number) {
        super(p, speed, player, "#483d8b");
        this.giveWeapon(new Lance(p, this));
    }

    lightAttack() {
        console.log("Artemis light attack");
    }

    heavyAttack() {
        console.log("Artemis heavy attack");
    }
}
