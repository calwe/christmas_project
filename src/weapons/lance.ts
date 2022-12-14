import p5 from "p5";
import { Player } from "../player";
import { Weapon } from "../weapon";

export class Lance extends Weapon {
    constructor(p: p5, user: Player) {
        super(p, user)
    }

    render() {
        this.p.push();
        this.p.translate(-25, -10);
        this.p.rotate(5);
        this.p.rect(0, 15, 150, 20);
        this.p.pop();
    }

    lightAttack() {
        this.user.vel.x += 20 * -this.user.direction;
        if (this.p.dist(this.user.pos.x, this.user.pos.y, this.user.enemy.pos.x, this.user.enemy.pos.y) < 100) {
            this.user.enemy.takeDamage(10);
            this.user.enemy.knockback(0.5, 30);
            console.log("light attack");
        }
    }
}
