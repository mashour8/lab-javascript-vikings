// Soldier
class Soldier {
    constructor(health , strength){
        this.health = health
        this.strength = strength
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health , strength){
        super(health , strength)
        this.name = name
    }
    receiveDamage(damage){
        this.health -= damage
        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        }else{
            return `${this.name} has died in act of combat`
        }
    }
    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier{
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health -= damage
        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        }else{
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(viking){
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }
    vikingAttack(){
        const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        
        const viking = this.vikingArmy[randomViking]
        const saxon = this.saxonArmy[randomSaxon]

        const text = saxon.receiveDamage(viking.strength)
        if(saxon.health<= 0){
            this.saxonArmy.splice(randomSaxon,1)
        }
        return text
    }
    saxonAttack(){
        const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        
        const viking = this.vikingArmy[randomViking]
        const saxon = this.saxonArmy[randomSaxon]

        const text = viking.receiveDamage(saxon.strength)
        if(viking.health<= 0){
            this.vikingArmy.splice(randomSaxon,1)
        }
        return text
    }
    showStatus(){
        if(this.saxonArmy.length < 1){
            return "Vikings have won the war of the century!"
        }else if(this.vikingArmy.length < 1){
            return "Saxons have fought for their lives and survived another day..."
        }else{
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
