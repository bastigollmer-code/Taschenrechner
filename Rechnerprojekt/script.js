



function ergebniss(operation) {
    const feld = document.getElementById("ergebnissspalte");

    const text = feld.textContent.trim();

    if (text.length >= 23) return;

    const neuerText = text + operation;

    
    const farben = ["rgb(100, 173, 245)", " rgb(188, 201, 211)"];

    feld.innerHTML = "";

    for (let i = 0; i < neuerText.length; i++) {
        const span = document.createElement("span");
        span.textContent = neuerText[i];
        span.style.color = farben[i % 2];
        feld.appendChild(span);
    }

    const laenge = neuerText.length;

    if (laenge <= 7) {
        feld.style.fontSize = "100px";
    } else if (laenge <= 12) {
        feld.style.fontSize = "60px";
    } else {
        feld.style.fontSize = "30px";
    }
}



function rechnen() {
    const feld = document.getElementById("ergebnissspalte");

    let ausdruck = feld.textContent;

    
    ausdruck = ausdruck.replace(/,/g, ".");
    ausdruck = ausdruck.replace(/:/g, "/");

    try {
        const result = eval(ausdruck);

        if (!isFinite(result)) {
            throw new Error();
        }

        if (result.toString().length > 170) {
            feld.textContent = "Error";
            feld.style.fontSize = "100px";
            return;
        }

       const gerundet = Number(result.toFixed(3));

        
       feld.textContent = gerundet.toString().replace(/\./g, ",");
        const laenge = feld.textContent.length;

        if (laenge <= 7) {
            feld.style.fontSize = "100px";
        } else if (laenge <= 9) {
            feld.style.fontSize = "65px";
        } else if (laenge <= 13) {
            feld.style.fontSize = "45px";
        } else if (laenge <= 20) {
            feld.style.fontSize = "25px";
        } else {
            feld.style.fontSize = "20px";
        }
    } catch (e) {
        feld.textContent = "Error";
        feld.style.fontSize = "100px";
    }
}




   function löschen() {
    document.getElementById("ergebnissspalte").innerHTML = "";
}
 





