"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fighter_1 = require("./fighter");
const improvedFighter_1 = require("./improvedFighter");
const fight_1 = require("./fight");
// Creating 2 fighters
const fighter = new fighter_1.default('Tyson', 25, 10000);
const improvedFighter = new improvedFighter_1.default('Кличко', 20, 10000);
// Starting fight
fight_1.default(fighter, improvedFighter, 25, 13, 45);
//# sourceMappingURL=main.js.map