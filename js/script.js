var tituloPagina = document.getElementById('titulo-pagina');
tituloPagina.textContent = "Stasiak Nutrição";

var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

for(var contador = 0; contador <= 4; contador++) {
  
  var tdPeso = pacientes[contador].querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = pacientes[contador].querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdGordura = pacientes[contador].querySelector(".info-gordura");
  var gordura = tdGordura.textContent;

  var tdImc = pacientes[contador].querySelector(".info-imc");
  var imc = tdImc.textContent;

  var pesoEhValido = true;
  var alturaEhValida = true;

  if (peso < 0 || peso > 600) {
    tdImc.textContent = "Peso inválido";
    pesoEhValido = false;
    pacientes[contador].classList.add("dados-invalidos")
  }

  if (altura < 0 || altura > 2.80) {
    tdImc.textContent = "Altura inválida!";
    alturaEhValida = false;
    pacientes[contador].classList.add("dados-invalidos")
  }

  if (pesoEhValido && alturaEhValida){
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  }
}

function calculaImc(peso, altura) {
  var imc = 0;

  imc = peso / (altura * altura);

  return imc.toFixed(2);
}

//var nome = document.getElementById('nome');
//nome.textContent = "Joana";

//var celulaPeso = document.getElementById('peso');
//var peso = celulaPeso.textContent;

//if (peso < 0 ) {
//  celulaPeso.textContent = "Peso inválido";
//}