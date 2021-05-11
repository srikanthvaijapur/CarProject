function problem2(inventory){
    const lc = inventory[inventory.length-1]
    return `"Last car is a ${lc.car_make} ${lc.car_model}`
}
module.exports = problem2