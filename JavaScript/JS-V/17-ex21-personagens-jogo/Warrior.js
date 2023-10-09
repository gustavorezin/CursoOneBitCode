class Warrior extends Character {
  constructor(name, lifePts, attackPts, defensePts, escudo, posicao) {
    super(name, lifePts, attackPts, defensePts);
    this.escudo = escudo;
    this.posicao = posicao;
  }

  attack(character) {
    if (this.posicao === "ATQ") {
      return super.atacar(character);
    }
  }

  mudarPosicao() {
    if (this.posicao === "DEF") {
      this.defesa += this.escudo;
    } else {
      this.defesa;
    }
  }
}
