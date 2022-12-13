import p5 from 'p5';
import { Artemis } from './characters/artemis';
import { Player } from './player'
import { Ulgrim } from './characters/ulgrim';

let sketch = function (p: p5) {
    let player1: Player;
    let player2: Player;

    p.setup = function () {
        p.createCanvas(1600, 900);
        player1 = new Ulgrim(p, 1);
        player2 = new Artemis(p, 2);
    }

    p.draw = function () {
        // sky blue colour
        p.background(135, 206, 235);
        player1.tick();
        player1.render();
        player2.tick();
        player2.render();
    }

    p.keyPressed = function () {
        player1.keyPressed();
        player2.keyPressed();
    }

    p.keyReleased = function () {
        player1.keyReleased();
        player2.keyReleased();
    }
}


let outSketch = new p5(sketch);
