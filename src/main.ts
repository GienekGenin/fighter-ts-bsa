import Fighter from './fighter';
import ImprovedFighter from './improvedFighter';
import fight from './fight';


// Creating 2 fighters
const fighter = new Fighter('Tyson', 25, 10000);
const improvedFighter = new ImprovedFighter('Кличко', 20, 10000);

// Starting fight
fight(fighter, improvedFighter, 25, 13, 45);