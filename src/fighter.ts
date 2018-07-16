export interface FighterInterface {
    name: string;
    power: number;
    health: number;
}

export default class Fighter implements FighterInterface {
    name: string;
    power: number;
    health: number;

    constructor(name = 'fighter', power = 10, health = 1000) {
        this.name = name;
        this.power = power;
        this.health = health;
    }

    setDamage(damage: number) {
        this.health = this.health - damage;
        // Making sure that dead will stay dead
        if (this.health < 0) {
            this.health = 0;
        }
        console.log(`${this.name} health: ${this.health}`);
    }

    hit(enemy: any, point: number) {
        let damage = point * this.power;
        enemy.setDamage(damage);
    }

    knockout(enemy: any) {
        console.log(`${enemy.name} is in knockout`);
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('time is over');
            }, 500);
        });
    }
}