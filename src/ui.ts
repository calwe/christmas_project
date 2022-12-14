import p5 from "p5";
import { Player } from "./player";

const dmgThreshold = 200;

export class UI {
    p: p5;
    player1: Player;
    player2: Player;

    constructor(p: p5, player1: Player, player2: Player) {
        this.p = p;
        this.player1 = player1;
        this.player2 = player2;
    }

    render() {
        this.p.textAlign(this.p.CENTER);
        this.p.textSize(32);
        this.p.colorMode(this.p.HSB, 360);

        this.p.fill(UI.healthColor(this.player1.damageTaken));
        this.p.ellipse(this.p.width - 60, 60, 80);
        this.p.fill(255);
        this.p.text("1", this.p.width - 60, 70);

        this.p.fill(UI.healthColor(this.player2.damageTaken));
        this.p.ellipse(this.p.width - 160, 60, 80);
        this.p.fill(255);
        this.p.text("2", this.p.width - 160, 70);

        this.p.colorMode(this.p.RGB);
    }

    static healthColor(damageTaken: number): [number, number, number] {
        let H = ((1 - damageTaken / dmgThreshold) * 120);
        let S = 350;
        let B = 350;
        if (damageTaken > dmgThreshold)
            B = Math.max(350 - (damageTaken - dmgThreshold) * 2, 120);

        return [H, S, B];
    }
}
