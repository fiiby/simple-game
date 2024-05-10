function character(name,power, life) {
    this.name = name;
    this.power = power;
    this.life = life;
}
character.prototype.attack = function(opponent) {
    //console.log(this);
    //console.log(opponent);

    opponent.life -= this.power;
    console.log(opponent.life);

}
character.prototype.status = function() {
    console.log(`name: ${this.name}`);
    console.log(`power: ${this.power}`);
    console.log(`life: ${this.life}` );

}

character.prototype.addLife = function(){
    if(this.life < 100) {
        this.life +=10;
    }

        // in case life added become more than 100 condition:
      if(this.life > 100) {
        this.life = 100;
      }
    //     return(life);
    // }
}

let naruto =new character('naruto',10,100);
let sasaki =  new character('sasaki', 10 ,100);

sasaki.attack(naruto);
sasaki.attack(naruto);

console.log(naruto);

naruto.addLife();

naruto.status();

// naruto.attack(saski);
// naruto.attack(saski);
// naruto.attack(saski);
// naruto.attack(saski);
