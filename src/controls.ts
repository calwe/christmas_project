export class Controls {
    left: number;
    right: number;
    up: number;
    heavyAttack: number;
    lightAttack: number;

    constructor(player: number) {
        // CONTROLS
        // Player 1:
        //   Movement: WASD
        //   Light Attack: Q
        //   Heavy Attack: E
        // Player 2:
        //   Movement: IJKL
        //   Light Attack: O
        //   Heavy Attack: U
        this.left = player === 1 ? 65 : 74;
        this.right = player === 1 ? 68 : 76;
        this.up = player === 1 ? 87 : 73;
        this.heavyAttack = player === 1 ? 69 : 85;
        this.lightAttack = player === 1 ? 81 : 79;
    }
}
