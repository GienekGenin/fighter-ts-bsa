"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fighter_1 = require("./fighter");
class ImprovedFighter extends fighter_1.default {
    constructor(name = 'ImprovedFighter', power = 10, health = 1000) {
        super(name, power, health);
    }
    doubleHit(enemy, point) {
        console.log(`${enemy.name} пропускает сочную двоечку от ${this.name}`);
        let doublePoint = point * 2;
        super.hit(enemy, doublePoint);
    }
}
exports.default = ImprovedFighter;
//# sourceMappingURL=improvedFighter.js.map