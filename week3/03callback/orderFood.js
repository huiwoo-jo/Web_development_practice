function orderFood(callback) {
    setTimeout ( () => {
        const food = '갈비탕';
        callback(food);
    }, 3000);
};

function coolDownFood(food, callback) {
    setTimeout( () => {
        const cooldownedFood = `식은 ${food}`;
        callback(cooldownedFood);
    }, 2000);
}

function freezeFood(food, callback) {
    setTimeout( () => {
        const freezenFood = `냉동 ${food}`;
        callback(freezenFood);
    }, 5000);
}

orderFood( (food) => {
    console.log(food);
    coolDownFood(food, (cooldownedFood) => {
        console.log(cooldownedFood);
    })
    freezeFood(food, (coolDownFood) => {
        console.log(freezenFood);
    })
});
