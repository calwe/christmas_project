import p5 from 'p5';
import { Artemis } from './characters/artemis';
import { Player } from './player'
import { Ulgrim } from './characters/ulgrim';
import { UI } from './ui';

let sketch = function (p: p5) {
    let ui: UI;
    let player1: Player;
    let player2: Player;

    p.setup = function () {
        p.createCanvas(1600, 900);
        p.angleMode(p.DEGREES);

        player1 = new Ulgrim(p, 1);
        player2 = new Artemis(p, 2);
        player1.setEnemy(player2);
        player2.setEnemy(player1);
        ui = new UI(p, player1, player2);
    }

    p.draw = function () {
        // sky blue colour
        p.background(135, 206, 235);

        ui.render();

        player1.tick();
        player1.render();
        player2.tick();
        player2.render();
    }

    p.keyPressed = function () {
        player1.keyPressed();
        player2.keyPressed();
    }
}


let outSketch = new p5(sketch);
