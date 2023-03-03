const a = Number(prompt("Digite o salário: "));
const b = Number(prompt("Digite o reajuste: "));


let resultado = a + (a * (b/100));

document.write("Novo salário: R$" + resultado);