function berechneArbeitsstundenMitAutomatischerPause(anfangszeit, endzeit) {
 
    let [anfang_stunden, anfang_minuten] = anfangszeit.split(":").map(Number);
    let [ende_stunden, ende_minuten] = endzeit.split(":").map(Number);

    let gesamtzeit_in_minuten = (ende_stunden * 60 + ende_minuten) - (anfang_stunden * 60 + anfang_minuten);

    if (gesamtzeit_in_minuten > 6 * 60) { 
        gesamtzeit_in_minuten -= 60; 
    }

    let arbeitsstunden = Math.floor(gesamtzeit_in_minuten / 60);
    let restminuten = gesamtzeit_in_minuten % 60;

    return { stunden: arbeitsstunden, minuten: restminuten };
}



function berechneArbeitszeitMitManuellerPause(anfangszeit, endzeit, pause_anfang, pause_ende) {

    let [anfang_stunden, anfang_minuten] = anfangszeit.split(":").map(Number);
    let [ende_stunden, ende_minuten] = endzeit.split(":").map(Number);

    let gesamtzeit_in_minuten = (ende_stunden * 60 + ende_minuten) - (anfang_stunden * 60 + anfang_minuten);

    if (pause_anfang && pause_ende) {
        let [pause_anfang_stunden, pause_anfang_minuten] = pause_anfang.split(":").map(Number);
        let [pause_ende_stunden, pause_ende_minuten] = pause_ende.split(":").map(Number);

        let pause_start_in_minuten = pause_anfang_stunden * 60 + pause_anfang_minuten;
        let pause_ende_in_minuten = pause_ende_stunden * 60 + pause_ende_minuten;
        let pausenzeit_in_minuten = pause_ende_in_minuten - pause_start_in_minuten;

        gesamtzeit_in_minuten -= pausenzeit_in_minuten;
    }

    let arbeitsstunden = Math.floor(gesamtzeit_in_minuten / 60);
    let restminuten = gesamtzeit_in_minuten % 60;

    return { stunden: arbeitsstunden, minuten: restminuten };
}



