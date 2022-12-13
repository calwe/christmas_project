import p5, { Vector } from "p5";
import { Controls } from "./controls";

const gravity = new Vector(0, 1);
const jumpForce = 15;
const maxJumps = 3;

export class Player {
    p: p5;
    pos: Vector;
    vel: Vector;
    controls: Controls;
    speed: number;
    jumpCount: number;
    color: string;

    constructor(p: p5, speed: number, player: number, color: string) {
        this.p = p;
        this.pos = p.createVector(player === 1 ? 100 : p.width - 100, 100);
        this.vel = p.createVector(0, 0);
        this.controls = new Controls(player);
        this.speed = speed;
        this.jumpCount = 0;
        this.color = color;
    }

    // TODO: change to proper collision detection
    isGrounded() {
        return this.pos.y >= 400;
    }

    render() {
        this.p.fill(this.color);
        this.p.rect(this.pos.x, this.pos.y, 40, 80);
    }

    tick() {
        this.vel.add(gravity);
        this.pos.add(this.vel);

        this.pos.y = this.p.min(this.pos.y, 400);

        if (this.isGrounded()) {
            this.vel.y = 0;
            this.jumpCount = 0;
        }

        this.vel.x = 0;
        if (this.p.keyIsDown(this.controls.left)) {
            this.vel.x = -this.speed;
        }
        if (this.p.keyIsDown(this.controls.right)) {
            this.vel.x = this.speed;
        }
    }

    keyPressed() {
        if (this.p.keyCode === this.controls.up) {
            console.log("test");
            if (this.jumpCount < maxJumps) {
                this.vel.y = -jumpForce;
                this.jumpCount++;
            }
        }
    }

    keyReleased() {
    }
}
