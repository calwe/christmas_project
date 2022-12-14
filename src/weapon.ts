import p5 from "p5";
import { Player } from "./player";

export class Weapon {
    p: p5;
    user: Player;

    constructor(p: p5, user: Player) {
        this.p = p;
        this.user = user;
    }

    render() {
        this.p.fill(255);
        this.p.push();
        this.p.translate(-25, -10);
        this.p.rotate(45);
        this.p.rect(0, 0, 50, 10);
        this.p.pop();
    }

    tick() {}

    lightAttack() {
        throw new Error("Method not implemented.");
    }

    heavyAttack() {
        throw new Error("Method not implemented.");
    }
}
