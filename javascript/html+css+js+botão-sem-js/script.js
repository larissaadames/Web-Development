function alerta(){
    alert("puta alerta foda")
}

function mudarCor(){
    const letras = "0123456789ABCDEF";
    let cor = "#";
    for (let i = 0; i < 6; i++){
        cor += letras[Math.floor(Math.random()* 16)];
    }
    return cor;
}

document.getElementById("btnn").addEventListener("click", function(){
    document.getElementById("titulo").style.color = mudarCor();
});