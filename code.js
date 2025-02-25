async function getCepInfo() {
var cep = document.querySelector("#cep");

if (!(cep.value.length == 8)) {
    alert("Invalid CEP")
    return;
    }

var reply = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`);
var data = await reply.json();

if (data.erro) {
    alert("CEP Not Found!");
    return;
}

console.log(data.logradouro);
console.log(data.bairro);
console.log(data.localidade);
console.log(data.estado);

var cep = document.querySelector("#rua").innerHTML = data.logradouro;
var cep = document.querySelector("#bairro").innerHTML = data.bairro;
var cep = document.querySelector("#cidade").innerHTML = data.localidade;
var cep = document.querySelector("#estado").innerHTML = data.estado;

}

function clearCep() {
    document.querySelector("#cep").value = ""
}
