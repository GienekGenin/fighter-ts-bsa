import Fighter from './fighter';

export interface ImprovedFighterInterface {
    doubleHit: (enemy: Fighter, point: number) => void;
}

export default class ImprovedFighter extends Fighter implements ImprovedFighterInterface {
    constructor(name = 'ImprovedFighter', power = 10, health = 1000) {
        super(name, power, health);
    }

    doubleHit(enemy: Fighter, point: number) {
        console.log(`${enemy.name} пропускает сочную двоечку от ${this.name}`);
        let doublePoint: number = point * 2;
        super.hit(enemy, doublePoint);
    }
}