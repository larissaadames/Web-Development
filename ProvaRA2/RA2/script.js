let botao = document.getElementById("botao")
let titulo = document.getElementById("titulo")
const foto = document.getElementById('foto');

contador = 0;


let teste = ["linear-gradient(to right, #ff6600, #ffcc00)", "linear-gradient(to right, #00ff3cff, #00c8ffff)", "linear-gradient(to right, #5900ffff, #d900ffff)" ]

botao.addEventListener("click", function(){
    contador++;
    alternado = true;
    botao.textContent = "Você me clicou!"
    titulo.textContent = "Vou gabaritar esse RA!"
    document.body.style.background = "linear-gradient(to right, #ff6600, #ffcc00)";
    foto.style.width = "400px";
    const imagens = ['img/img1.jfif', 'img/img2.jfif', 'img/img3.jfif'];
    foto.src = imagens[contador % imagens.length];
    document.body.style.background = teste[contador % teste.length];
})  