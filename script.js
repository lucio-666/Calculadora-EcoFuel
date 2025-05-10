document.getElementById("fuelForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const d = parseFloat(document.getElementById("distance").value);
    const e85C = parseFloat(document.getElementById("e85Cons").value);
    const e85P = parseFloat(document.getElementById("e85Price").value);
    const gasC = parseFloat(document.getElementById("gasCons").value);
    const gasP = parseFloat(document.getElementById("gasPrice").value);
    const gnvC = parseFloat(document.getElementById("gnvCons").value);
    const gnvP = parseFloat(document.getElementById("gnvPrice").value);

    const e85Cost = (d / e85C) * e85P;
    const gasCost = (d / gasC) * gasP;
    const gnvCost = (d / gnvC) * gnvP;

    let best = Math.min(e85Cost, gasCost, gnvCost);
    let msg = "";

    if (best === e85Cost) {
        msg = "Melhor opção: E85";
    } else if (best === gasCost) {
        msg = "Melhor opção: Gasolina";
    } else {
        msg = "Melhor opção: GNV";
    }

    const result = `
        <h2>Resultado:</h2>
        <p>Custo com E85: R$ ${e85Cost.toFixed(2)}</p>
        <p>Custo com Gasolina: R$ ${gasCost.toFixed(2)}</p>
        <p>Custo com GNV: R$ ${gnvCost.toFixed(2)}</p>
        <h3>${msg}</h3>
        <p>Economia máxima: R$ ${(Math.max(e85Cost, gasCost, gnvCost) - best).toFixed(2)}</p>
    `;

    document.getElementById("result").innerHTML = result;
});
