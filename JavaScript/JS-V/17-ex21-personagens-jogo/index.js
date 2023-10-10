const Mage = require("./Mage")
const Thief = require("./Thief")
const Warrior = require("./Warrior")

const arthurM = new Mage('Arthur', 90, 4, 2, 14)
const beatriceT = new Thief('Beatrice', 140, 22, 8)
const cainW = new Warrior('Cain', 200, 14, 12, 4)

console.table({ arthurM, beatriceT, cainW })

cainW.switchStance()
arthurM.attack(cainW)
beatriceT.attack(arthurM)

console.table({ arthurM, beatriceT, cainW })

cainW.attack(arthurM)
arthurM.heal(arthurM)
beatriceT.attack(cainW)

console.table({ arthurM, beatriceT, cainW })