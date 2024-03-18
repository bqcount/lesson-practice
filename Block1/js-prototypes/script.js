// function PersonOld(name, age, weight) {
//     this.name = name
//     this.age = age
//     this.weight = weight
//     this.relativeNames = ['Sara', 'Lucas', 'Tom']

//     this.showName = function () {
//         console.log(this.name)
//     }

// }

// const carlos = new PersonOld('Carlos', 34, 80)

// class Person {
//     constructor(name, age, weight) {
//         this.name = name
//         this.age = age
//         this.weight = weight
//         this.relativesNames = ['Sara', 'Lucas', 'Tom']
//     }

//     showName() {
//         console.log(this.name);
//     }

//     showRelatives(){
// 		this.relativesNames.forEach(function(relative) {
// 			console.log(relative)
// 		})
// 	} 


// }


// class Worker extends Person{
//     constructor(name, age, weight, position){
//         super(name, age, weight)
//         this.position = position
//     }
// }

// const carlos2 = new Person('Carlos', 34, 80)

// carlos2.showRelatives()

class Enemy{
    constructor(x = 10, y = 10, speed = 1){
        this.x = x
        this.y = y
        this.speed = speed
    }

    moveRight(){
        this.x += this.speed
    }

    moveleft(){
        this.x -= this.speed
    }

}

class Boss extends Enemy{
    constructor(x,y,speed){
        super(x,y,speed)
        this.lifes = 3
    }


    damage(){
        if(!this.isDead()) this.lifes--
        else console.log('The Boss is dead! Long life to the new Boss');
    }

    isDead(){
        return this.lifes === 0;
    }


    shoot(){
        console.log('Fire!!!');
    }


}


const enemies = []

for (let i = 0; i < 10; i++) {
    enemies.push(new Enemy())
}



