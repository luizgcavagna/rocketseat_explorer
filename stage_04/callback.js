function greeting(name) {
  alert("Olá " + name);
}

function processUserInput(callback) {
  var name = prompt("Por favor insira seu nome.");
  callback(name);
}

//processUserInput(greeting);

function funcaoDeOrdemMaior (cb) {
    cb()
    console.log('Função de ordem maior invocada')
}

function meuCallback () {
    console.log('Callback invocado')
}

//funcaoDeOrdemMaior(meuCallback)