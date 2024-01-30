/* const spotify ={ estopa: ['Voces de ultratumba', 'Estopa', 'Destrangis'], aitana: '13 razones' } function updateArtist(obj, artist, album){ if(Array.isArray(obj[artist])){ obj[artist].push(album) }else{ obj[artist] = album } return obj } function deleteArtist(obj, artist){ delete obj[artist] return obj } console.log(spotify); updateArtist(spotify, 'estopa', 'La calle es tuya') updateArtist(spotify, 'aitana', 'trailer') console.log(spotify); deleteArtist(spotify, 'aitana') console.log(spotify); */


const numbers = [1, 4, 15, 56, 2, 8, 9]
const cut = 7

function sumOfSelect(numbers, cut) {

    let sum = 0;

    numbers.forEach(function (item) {
        if (item >= cut) sum += item
    })
    return sum
}
let result = sumOfSelect(numbers, cut)
console.log(result)
// 88

const numbers2 = [1, 4, 15, 56, 2, 8, 9]

function keepEven(numbers) {

    const arr = [];

    for (n of numbers) {
        n % 2 === 0 && arr.push(n)
    }

    return arr
}
let result2 = keepEven(numbers2)
console.log(result2)
// [4, 56, 2, 8]


const oldCart = [
    ['tomato', 4.99, 2],
    ['milk', 2.99, 5],
    ['water', 1.49, 6]
]

function formattedCart(oldCart) {

    return oldCart.map((item) => ({
        name: item[0],
        price: item[1],
        amount: item[2]
    }))
}

let result3 = formattedCart(oldCart)
console.log(result3)


const cart = [
    { name: 'tomato', price: 4.99, amount: 2 },
    { name: 'milk', price: 2.99, amount: 5 },
    { name: 'water', price: 1.49, amount: 6 }
]

function productsCheaperThan(cart, limit) {
    return cart.filter((item) => item.price < limit)
}

let result4 = productsCheaperThan(cart, 3)
console.log(result4)

/*
[
    { name: 'milk', price: 2.99, amount: 5 },
    { name: 'water', price: 1.49, amount: 6 }
]
*/


function productsByAscOrder(cart) {
    return cart.sort((a,b) => {// a=4 b=2
        //if(a.price < b.price) return -1
        //if(a.price > b.price) return 1
        return a.price - b.price
    })
}

let result5 = productsByAscOrder(cart)
console.log(result5)
/*
[
	{name: 'water', price: 1.49, amount: 6},
	{name: 'milk', price: 2.99, amount: 5},
	{name: 'tomato', price: 4.99, amount: 2}
]
*/