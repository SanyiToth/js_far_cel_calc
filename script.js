let f = null;
let c = null;
let n = null;
while (n == null) {
    let u = window.prompt("Ez egy °C /°F váltó program. Add meg milyen mértékegységről szeretnél átszámolni?(c/f)");
    if (u == "c") {
        c = Number.parseInt(window.prompt("Add meg hány °C szeretnél átváltani!"));
        f = (c * 1.8) + 32;
        window.alert(c + "°C ---" + f + "°F-nak felel meg!");
        n++;
    } else if (u == "f") {
        f = Number.parseInt(window.prompt("Add meg hány °F szeretnél átváltani!"));
        c = Math.round((f - 32) / 1.8);
        window.alert(c + "°F ---" + f + "°C-nak felel meg!");
        n++;
    } else {
        window.alert("Hibás értéket adtál meg. Kezd előröl!")
    }
}