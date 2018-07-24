"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Fighter {
    constructor(name = 'fighter', power = 10, health = 1000) {
        this.name = name;
        this.power = power;
        this.health = health;
    }
    setDamage(damage) {
        this.health = this.health - damage;
        // Making sure that dead will stay dead
        if (this.health < 0) {
            this.health = 0;
        }
        console.log(`${this.name} health: ${this.health}`);
    }
    hit(enemy, point) {
        let damage = point * this.power;
        enemy.setDamage(damage);
    }
    knockout(enemy) {
        console.log(`${enemy.name} is in knockout`);
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('Time is over');
            }, 500);
        });
    }
}
exports.default = Fighter;
//# sourceMappingURL=fighter.js.map