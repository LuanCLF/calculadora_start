document.querySelector("#totalGorjeta").style.display = "none"; 


function calcGorjeta() {
  let totalConta = document.querySelector("#bill").value; //input do valor da conta
  let taxDeSer = document.querySelector("#service").value; //select da taxa de serviço
  let numPe = document.querySelector("#numeroP").value; // número de pessoas

  let totalContaC = parseFloat(totalConta); 
  let totalContaN = Math.abs(totalContaC);
  let numP = Math.abs(numPe); //transformando tudo em valor abs

  if (totalConta === "" || taxDeSer == "N"|| isNaN(totalConta) || isNaN(numP)) {
    //esse if confere se tudo está de acordo
    alert("coloca o bglh direito ai mano");
    return;
  } else if (numP == 0 || numP === 1) {
    numP = 1;
    //esse else é só para o caso de alguém não marcar o num de pessoas para 1
  }
  let totalTaxa = totalContaN * taxDeSer;

  let total = totalTaxa + totalContaN;

  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);

  document.querySelector("#totalGorjeta").style.display = "block"; //div de todo o resultado
  document.querySelector("#totalGeralConta").style.display = "block"; //valor do geral
  document.querySelector("#TGCValor").innerHTML = total; //valor do geral
  document.querySelector("#totalComGorjeta").style.display = "none";

  if (numP >= 2) {
    // esse if mostra o valor para cada pessoa
    let totalPS = total / numP;

    totalPS = Math.round(totalPS * 100) / 100;
    totalPS = totalPS.toFixed(2);

    document.querySelector("#totalComGorjeta").style.display = "block";
    document.querySelector("#gorje").innerHTML = totalPS;
  }
}

document.querySelector("#buttonSB").onclick = function () {
  calcGorjeta();
};
