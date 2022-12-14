import p5 from "p5";
import { Player } from "../player";
import { Weapon } from "../weapon";

export class Axe extends Weapon {
    constructor(p: p5, user: Player) {
        super(p, user);
    }

    render() {
        this.p.push();
        this.p.translate(-25, -10);
        this.p.rotate(65);

        // handle
        this.p.fill(100, 50, 0);
        this.p.rect(0, 0, 50, 10);

        // head
        this.p.fill(100);
        this.p.rect(-25, 7, 25, 25);


        this.p.pop();
    }
}
