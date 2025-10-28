function corAleatoria() {
  const letras = "0123456789ABCDEF";
  let cor = "#";
  for (let i = 0; i < 6; i++) {
    cor += letras[Math.floor(Math.random() * 16)];
  }
  return cor;
}

document.getElementById("btn").addEventListener("click", function() {
  document.getElementById("titulo").style.color = corAleatoria();
});