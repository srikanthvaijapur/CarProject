const problem4 = require("./problem4")

function problem5(inventory){
    let cars = []
    let years = problem4(inventory)
    for(let i = 0 ; i < years.length; i++){
        if(years[i]<2000){
            cars.push(inventory[i])
        }
    }
    return cars
}

module.exports = problem5;