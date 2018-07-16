import Fighter from './fighter';

export default class ImprovedFighter extends Fighter {
    constructor(name = 'ImprovedFighter', power = 10, health = 1000) {
        super(name, power, health);
    }

    doubleHit(enemy: any, point: number) {
        console.log(`${enemy.name} пропускает сочную двоечку от ${this.name}`);
        let doublePoint = point * 2;
        super.hit(enemy, doublePoint);
    }
}