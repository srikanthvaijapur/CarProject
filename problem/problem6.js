function problem6(inventory){
    let cars = [];
        for(let i = 0 ; i < inventory.length;i++){
            if(inventory[i].car_make == 'BMW' || inventory[i].car_make == "Audi"){
                cars.push(inventory[i])
            }
        }
        return cars;
}

module.exports = problem6;