import p5, { Vector } from "p5";
import { Controls } from "./controls";
import { Weapon } from "./weapon";

const gravity = new Vector(0, 1);
const friction = 0.25; // 0 to 1
const jumpForce = 15;
const maxJumps = 3;
const speedScalar = 0.5;

export class Player {
    p: p5;
    direction: number;
    pos: Vector;
    vel: Vector;
    controls: Controls;
    speed: number;
    jumpCount: number;
    color: string;
    damageTaken: number;
    public enemy: Player;
    weapon: Weapon;

    constructor(p: p5, speed: number, player: number, color: string) {
        this.p = p;
        this.pos = p.createVector(player === 1 ? 100 : p.width - 100, 100);
        this.vel = p.createVector(0, 0);
        this.direction = player === 1 ? -1 : 1;
        this.controls = new Controls(player);
        this.speed = speed * speedScalar;
        this.jumpCount = 0;
        this.color = color;
        this.damageTaken = 0;
    }

    giveWeapon(weapon: Weapon) {
        this.weapon = weapon;
    }

    setEnemy(enemy: Player) {
        this.enemy = enemy;
    }

    // TODO: change to proper collision detection
    isGrounded() {
        return this.pos.y >= 400;
    }

    render() {
        this.p.push();

        this.p.translate(this.pos.x, this.pos.y);
        this.p.scale(this.direction, 1);
        if (this.p.keyIsDown(this.controls.left)) {
            this.direction = 1;
        }
        if (this.p.keyIsDown(this.controls.right)) {
            this.direction = -1;
        }

        this.p.fill(this.color);
        this.p.rectMode(this.p.CENTER);
        this.p.rect(0, 0, 40, 80);
        if (this.weapon)
            this.weapon.render();

        this.p.pop();
    }

    tick() {
        this.vel.add(gravity);
        this.vel.x *= 1 - (friction * (this.isGrounded() ? 1 : 0.5));
        this.pos.add(this.vel);

        this.pos.y = this.p.min(this.pos.y, 400);

        if (this.isGrounded()) {
            this.vel.y = 0;
            this.jumpCount = 0;
        }

        if (this.p.keyIsDown(this.controls.left)) {
            this.vel.x -= this.speed * (this.isGrounded() ? 1 : 0.5);
        }
        if (this.p.keyIsDown(this.controls.right)) {
            this.vel.x += this.speed * (this.isGrounded() ? 1 : 0.5);
        }
    }

    keyPressed() {
        if (this.p.keyCode === this.controls.up) {
            if (this.jumpCount < maxJumps) {
                this.vel.y = -jumpForce;
                this.vel.x *= 0.3;
                this.jumpCount++;
            }
        }

        if (this.p.keyCode === this.controls.lightAttack) {
            this.weapon.lightAttack();
        }
        if (this.p.keyCode === this.controls.heavyAttack) {
            this.weapon.heavyAttack();
        }
    }

    takeDamage(damage: number) {
        this.damageTaken += damage;
    }

    knockback(value: number, min: number) {
        const a = 0.003;
        const b = 0.1;
        const c = 3;

        let diffVector = this.pos.copy().sub(this.enemy.pos);
        diffVector.normalize();

        // knockback is calculated using a quadratic function as this that knockback
        // gets exponentially stronger the more damage is taken
        this.vel.add(diffVector.mult((a * this.damageTaken * this.damageTaken) + (b * value * this.damageTaken) + c + min));
    }
}
