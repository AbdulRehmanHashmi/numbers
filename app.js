

var random = Math.ceil(Math.random()*6)
function matchNumber(val) {
    if(val = random){
        alert('You Won 6 Points')
    }
    else if(val  == random){
        alert('You Won 3 Points')
    }
    else{
        alert('Better Luck Next Time')
    }
}



