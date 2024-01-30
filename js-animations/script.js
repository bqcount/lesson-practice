/*
class Box {
	constructor(y, speed, sprite) {
		self = this
		this.boxTop = y
		this.speed = speed
		this.sprite = sprite
		this.sprite.style.top = `${this.boxTop}px`
		this.timer = null
	}

	start() {
		this.timer = setInterval(() => {
			self.boxTop += self.speed
			self.sprite.style.top = `${self.boxTop}px`
			if (self.boxTop >= 600 - 100 - self.speed || self.boxTop <= 0) {
				self.stop()
			}
		}, 200)
	}

	stop() {
		clearInterval(this.timer)
	}

}

const sprite = document.getElementById("box")
const box = new Box(500, -10, sprite);

box.start()

*/

/*
class Box {
	constructor(y, speed, sprite) {
		self = this
		this.boxTop = y
		this.speed = speed
		this.sprite = sprite
		this.sprite.style.top = `${this.boxTop}px`
		this.timer = null
	}

	start() {
		this.timer = setInterval(() => {
			self.boxTop += self.speed
			self.sprite.style.top = `${self.boxTop}px`
			self.sprite.style.left = `${self.boxTop}px`
			let parentHeight = getComputedStyle(self.sprite.parentNode).height.replace("px", "")
			let currentHeight = getComputedStyle(self.sprite).height.replace("px", "")
			
			console.log()
			//console.log(self.sprite.style)
			if (self.boxTop >= parentHeight - currentHeight || self.boxTop <= 0) {
				self.stop()
			}
		}, 200)
	}

	stop() {
		clearInterval(this.timer)
	}

}

const sprite = document.getElementById("box")
const box = new Box(0, 1, sprite);

box.start()
*/
/*
function move(obj){
	let boxTop = 0
	let parentHeight = getComputedStyle(obj.element.parentNode).height.replace("px", "")
	let currentHeight = getComputedStyle(obj.element).height.replace("px", "")

	let timerId = setInterval(()=> {
		obj.element.style.top = `${boxTop}px`
		obj.element.style[obj.inicial] = `${boxTop}px`
		boxTop += obj.speed


		if (boxTop >= [parentHeight - currentHeight] /2) {
			//obj.element.style.top = `${parentHeight - currentHeight}px`
			//obj.element.style[obj.inicial] = `${parentHeight - currentHeight}px`
			clearInterval(timerId)
		}

		// Elementos se crucen y da igual que colisionen
		// if (boxTop >= parentHeight - currentHeight) {
		// 	obj.element.style.top = `${parentHeight - currentHeight}px`
		// 	obj.element.style[obj.inicial] = `${parentHeight - currentHeight}px`
		// 	clearInterval(timerId)
		// }
	}, 200)
}


const obj1 = {
	element: document.getElementById("box1"),
	inicial: "left",
	speed: 10
}

const obj2 = {
	element: document.getElementById("box2"),
	inicial: "right",
	speed: 15
}

// move(document.getElementById("box1"), "left", 10)
// move(document.getElementById("box2"), "right", 15)

move(obj1)
move(obj2)
*/

class Box {
	constructor(box, boxTop, speed){
		this.box = box
		this.boxTop = boxTop
		this.speed = speed
		this.direction = 'bottom'
	}

	start(){
		this.timerId = setInterval(() => {
			this.box.style.top = `${this.boxTop}px`
			if(this.direction === 'bottom'){
				this.boxTop += this.speed
			}

			if(this.direction === 'top'){
				this.boxTop -= this.speed
			}

			if(this.boxTop>=200){
				this.direction = 'top'
			}

			if(this.boxTop<=0){
				this.direction = 'bottom'
			}

		}, 200)
	}

	stop(){
		clearInterval(this.timerId)
	}
}

function changeButton(e){
	if(e.target.classList.contains("default")){
		e.target.classList.remove("default")
		e.target.classList.add("stop")
		e.target.textContent = "Stop"
		boxObj.start()
	}else if(e.target.classList.contains("stop")){
		e.target.classList.remove("stop")
		e.target.classList.add("start")
		e.target.textContent = "Start"
		boxObj.stop()
	}else{
		e.target.classList.add("stop")
		e.target.classList.remove("start")
		e.target.textContent = "Stop"
		boxObj.start()
	}
}

document.querySelector("button.default").onclick = changeButton

const box = document.querySelector("#box")
const boxObj = new Box(box, 0, 20)

