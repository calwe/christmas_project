export class Controls {
    left: number;
    right: number;
    up: number;
    dodge: number;

    constructor(player: number) {
        this.left = player === 1 ? 65 : 74;
        this.right = player === 1 ? 68 : 76;
        this.up = player === 1 ? 87 : 73;
        this.dodge = player === 1 ? 16 : 47;
    }
}
