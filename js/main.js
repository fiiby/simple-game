//this code not working: 
//document.addEventListener('DOMContentLoaded', function() {
// function character(name,strength, health) {
//     this.name = name;
//     this.strength= strength;
//     this.health = health;

//     this.attackBtn = document.querySelector(`#${this.name}-attack `);
//     this.healthBtn = document.querySelector(`#${this.name}-make-health`);
//     this.progress = document.querySelector(`.${this.name}-health span`);


// }

// character.prototype.attack = function(opponent) {
 
//     opponent.health -= this.strength;
    

// }


// character.prototype.status = function() {
//     console.log(`Name: ${this.name}`);
//     console.log(`Strength: ${this.strength}`);
//     console.log(`Health: ${this.health}` );

// }

// character.prototype.makeHealth = function(){
//     if(this.health < 100) {
//         this.health +=10;
//         this.progress.style.width = `${opponent.health}%`;
//     }

//         // in case life added become more than 100 condition:
//       if(this.health > 100) {
//         this.health = 100;
//       }

//     // Update the life bar visually
//     // this.lifeBar.style.width = `${this.life}%`;
   
// }

// let naruto =new character('naruto',10,100);
// let sasaki =  new character('sasaki', 10 ,100);

// console.log(sasaki);

// naruto.attackBtn.addEventListener('click', function() {
//     naruto.attack(sasaki);
//     sasaki.status();
//     console.log("error");
// })

// sasaki.attackBtn.addEventListener('click', function() {
//     sasaki.attack(naruto);
//     naruto.status();
//     // console.log(`naruto life remain is ${naruto.status()}`);
// })

// naruto.healthBtn.addEventListener('click', function() {
//     naruto.makeHealth();
// })

// sasaki.healthBtn.addEventListener('click', function() {
//     sasaki.makeHealth();
// })

// });

///////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function() {
    function Character(name, strength, health) {
        this.name = name;
        this.strength= strength;
        this.health = health;

        this.attackBtn = document.querySelector(`#${this.name}-attack`);
        this.healthBtn = document.querySelector(`#${this.name}-make-health`);
        this.progress = document.querySelector(`.${this.name}-health span`);
    }

    Character.prototype.attack = function(opponent) {
        opponent.health -= this.strength;
    }

    Character.prototype.status = function() {
        console.log(`Name: ${this.name}`);
        console.log(`Strength: ${this.strength}`);
        console.log(`Health: ${this.health}` );
    }

    Character.prototype.makeHealth = function(){
        if(this.health < 100) {
            this.health +=10;
            this.progress.style.width = `${this.health}%`;
        }

        // Ensure health doesn't exceed 100
        if(this.health > 100) {
            this.health = 100;
        }
    }

    let naruto = new Character('naruto', 10, 100);
    let sasaki = new Character('sasaki', 10, 100);

    console.log(sasaki);

    naruto.attackBtn.addEventListener('click', function() {
        naruto.attack(sasaki);
        sasaki.status();
        console.log("error");
    })

    sasaki.attackBtn.addEventListener('click', function() {
        sasaki.attack(naruto);
        naruto.status();
    })

    naruto.healthBtn.addEventListener('click', function() {
        naruto.makeHealth();
    })

    sasaki.healthBtn.addEventListener('click', function() {
        sasaki.makeHealth();
    })

});
