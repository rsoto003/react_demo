export function getRandomColor(){
    return `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`
}

export function genRandomPos(){
    return {
        top: `${randomNumber(100)}%`,
        left: `${randomNumber(100)}%`
    }
}

function randomNumber(max){
    return Math.floor(Math.random() * (max + 1));
}

