import { Character } from "./Character";

export class Thief extends Character {
  attack(targetCharacter) {
    targetCharacter.lifePts -=
      (this.attackPts - targetCharacter.defensePts) * 2;
  }
}
