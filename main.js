document.getElementById("totalGorjeta").style.display = "none"; 


function calcGorjeta() {
  let totalConta = document.getElementById("bill").value; //input do valor da conta
  let taxDeSer = document.getElementById("service").value; //select da taxa de serviço
  let numPe = document.getElementById("numeroP").value; // número de pessoas

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

  document.getElementById("totalGorjeta").style.display = "block"; //div de todo o resultado
  document.getElementById("totalGeralConta").style.display = "block"; //valor do geral
  document.getElementById("TGCValor").innerHTML = total; //valor do geral
  document.getElementById("totalComGorjeta").style.display = "none";

  if (numP >= 2) {
    // esse if mostra o valor para cada pessoa
    let totalPS = total / numP;

    totalPS = Math.round(totalPS * 100) / 100;
    totalPS = totalPS.toFixed(2);

    document.getElementById("totalComGorjeta").style.display = "block";
    document.getElementById("gorje").innerHTML = totalPS;
  }
}

document.getElementById("buttonSB").onclick = function () {
  calcGorjeta();
};
