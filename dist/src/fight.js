"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function fight(fighter, improvedFighter, ...point) {
    return __awaiter(this, void 0, void 0, function* () {
        while (fighter.health > 0 || improvedFighter.health > 0) {
            for (let value of point) {
                if (improvedFighter.health <= 0 || fighter.health <= 0) {
                    break;
                }
                fighter.hit(improvedFighter, value);
                // Fighter will use doubleHit only when he has HP lower than other player
                if (improvedFighter.health <= fighter.health) {
                    improvedFighter.doubleHit(fighter, value);
                }
                else {
                    improvedFighter.hit(fighter, value);
                }
            }
            if (improvedFighter.health <= 0 || fighter.health <= 0) {
                break;
            }
        }
        if (fighter.health > 0) {
            let result = yield fighter.knockout(improvedFighter);
            console.log(result);
            console.log(`${fighter.name} has won! Black power! Health: ${fighter.health}`);
        }
        else {
            let result = yield improvedFighter.knockout(fighter);
            console.log(result);
            console.log(`${improvedFighter.name} победил! Покоцан, а так в целом норм. Health: ${improvedFighter.health}`);
        }
    });
}
exports.default = fight;
//# sourceMappingURL=fight.js.map