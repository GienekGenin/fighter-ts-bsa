import Fighter from './fighter';
import ImprovedFighter from './improvedFighter';

export default async function fight(fighter: Fighter, improvedFighter: ImprovedFighter, ...point: number[]) {
    while (fighter.health > 0 || improvedFighter.health > 0) {

        for (let value of point) {
            if (improvedFighter.health <= 0 || fighter.health <= 0) {
                break;
            }
            fighter.hit(improvedFighter, value);
            // Fighter will use doubleHit only when he has HP lower than other player
            if (improvedFighter.health <= fighter.health) {
                improvedFighter.doubleHit(fighter, value);
            } else {
                improvedFighter.hit(fighter, value);
            }
        }
        if (improvedFighter.health <= 0 || fighter.health <= 0) {
            break;
        }
    }
    if (fighter.health > 0) {
        let result = await fighter.knockout(improvedFighter);
        console.log(result);
        console.log(`${fighter.name} has won! Black power! Health: ${fighter.health}`);
    } else {
        let result = await improvedFighter.knockout(fighter);
        console.log(result);
        console.log(`${improvedFighter.name} победил! Покоцан, а так в целом норм. Health: ${improvedFighter.health}`);
    }
}