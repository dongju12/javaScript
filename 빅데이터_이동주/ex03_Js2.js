function add() {
    let num = Number(document.getElementById("txt").innerHTML.split(' ')[2])
    document.getElementById("txt").innerHTML = "like! ♥ " + (num+1);
}

function sub() {
    let num = Number(document.getElementById("txt").innerHTML.split(' ')[2])
    if(num>0){
        document.getElementById("txt").innerHTML = "like! ♥ " + (num-1);

    }
}


