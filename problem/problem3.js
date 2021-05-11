function problem3(inventory){
    let res = []
    for(let i = 0; i < inventory.length;i++){
        res.push(inventory[i].car_model)
    }
    return res.sort()
}

module.exports = problem3;