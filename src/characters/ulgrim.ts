import p5 from "p5";
import { Player } from "../player";
import { Axe } from "../weapons/axe";

const speed = 6;

export class Ulgrim extends Player {
    constructor(p: p5, player: number) {
        super(p, speed, player, "#8b4513");
        this.giveWeapon(new Axe(p, this));
    }

    lightAttack() {
        console.log("Ulgrim light attack");
        this.enemy.takeDamage(10);
        this.enemy.knockback(0.01);
    }

    heavyAttack() {
        console.log("Ulgrim heavy attack");
        this.enemy.takeDamage(20);
        this.enemy.knockback(0.02);
    }
}
