/* ++++++++++++++++++++ Generell funktionen ++++++++++++++++++++ */

function ladeTeile() {
	var kopf = 'HEADER <img src="bilder/1962 Ferrari 250 GTE_1098456-10242.jpg"></img>';
	var inhalt = 'INHALT';
	var seite = 'ASIDE';
	var fuss = 'FOOTER';
	document.getElementsByTagName('header')[0].innerHTML = kopf;
	document.getElementById('inhalt').innerHTML = inhalt;
	document.getElementsByTagName('aside')[0].innerHTML = seite;
	document.getElementsByTagName('footer')[0].innerHTML = fuss;
	
}

/* Wann das Bild nicht geladen ist, kommt einen fehler alarm */
function keinBild() {
	alert("Fehler! Mann kann nicht das Bild laden.");
}

/* Ein klein Willkommensnachricht*/
function Willkommensnachricht() {
	alert("Willkommen auf unserer Website. Viel Spaß.");
}

/* Wenn der nutzer die Größe des Browser-Fensters geändert habt, kommt ein alarm. */
function resizeAlarm() {
	alert("Sie haben die Größe des Browser-Fensters geändert!");
}

/* Diese funktion gibt einen schatten am Knopf */
function shadowButton(knopf) {
	knopf.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
}


/* Diese funktion löst den schatten am Knopf ab*/
function normalButton(knopf) {
	knopf.style.boxShadow = "none";
}

/* ++++++++++++++++++++ Kode für den Rechner ++++++++++++++++++++ */

/* Voll klarerBildschirm */
function klarerBildschirm() {
	calculator.smalldisplay.value = '';
	calculator.display.value = '';
}

/* Nur einstellig klarer. Diese funcktion operiert nur im Größen Bildschirm. */
function backSpace() {
	var val = calculator.display.value;	
	var newVal = val.substring(0, val.length-1);
	calculator.display.value = newVal;
}

/* Permutation - n! */
function permutation(currVal) {
	var val = currVal;
	var res = 1;
	for(var i = currVal; i > 1; i--) {
		val = val * (i-1);
	}
	calculator.display.value = val;
}

/* Wenn der wert nicht null ist, speichert es den wert und den operator am kleinen Bildschirm */
function operator(val, oper) {
	if (val !== '') {
		calculator.smalldisplay.value+= val;
		calculator.smalldisplay.value+= oper;
		calculator.display.value = '';
	}
	
}

/* 

Der wert im Groesse Bildschirm ist gespeichert am kleinen Bildschirm. 
Nach macht es die Berechnung mit der Werte und dem Operator (+, -, *, / oder %)

*/
function berechnen(val) {
	calculator.smalldisplay.value += val;
	calculator.display.value=eval(calculator.smalldisplay.value);
	calculator.smalldisplay.value = '';
}

/* ++++++++++++++++++++ Kode für Multiplikationstafel ++++++++++++++++++++ */

/* klarerBildschirm */
function clearit() {
	document.getElementById("ausgabe").innerHTML='';
}

/* Random wert */
function random() {
	var colorVal = "#" + (Math.random() * 0xFFFFFF<<0).toString(16);
	return colorVal;
}

/* Diese funktion lese beide gegeben daten. Dann ruft die "showNumbers" funktion */
function wertEingeben() {
	var anzahl = document.getElementById("anzahl").value;
	var multi = document.getElementById("multi").value;
	showNumbers(anzahl, multi);
	
}

/* Diese funktion, durch zwei "for" schleife, macht die Multiplikation mit anzahl und multi.
   Für jede Platz gibt es verschiedenen faerben mit "random" funktion.
*/
function showNumbers(anzahl, multi) {
	k = anzahl;
	while(k >= 1) {
		var zahl = multi;
		var alles = '<table id="multi">';
		for (i=1; i <= zahl; i++) {
			alles += '<tr>';
			for (j=1; j <= zahl; j++) {
				var color = random();
				alles += '<td style="background-color:' + color + '">' + i*j + '</td>';
			}
			alles += '</tr>';					
		}
		alles += '</table>';
		document.getElementById("ausgabe").innerHTML += alles;
		k--;
	}					
	
}	

/* ++++++++++++++++++++ Kode für die Regestrierung site ++++++++++++++++++++ */

/* Diese funktion füllt alle informationen in jeden "select" tag */
function daten() {

	
	var tag = '';
	for (var i = 1; i < 32; i++) {
		tag += '<option value="'+ i +'">'+ i + '</option>';
	}
	document.getElementsByName('Tag')[0].innerHTML = tag;
	
	
	var monat = '';
	for (var m = 1; m < 13; m++) {
		monat += '<option value="'+ m +'">'+ m + '</option>';
	}
	document.getElementsByName('Monat')[0].innerHTML = monat;
	
	var jahr = '';
	for (var j = 2007 ; j > 1945; j--) {
		jahr += '<option value="'+ j +'">'+ j + '</option>';
	}
	document.getElementsByName('Jahr')[0].innerHTML = jahr;
}

/* Diese function erfasst die daten von die Form. 
   Dann  schreibt diese informationen in der div tag mit der name 'ausgabe'*/
function informationen() {
	var eingabe = document.getElementsByTagName('input')[0].value;
	var eingabe2 = document.getElementsByTagName('input')[1].value;
	var monat = document.getElementsByName('Monat')[0].value;
	var tag = document.getElementsByName('Tag')[0].value;
	var jahr = document.getElementsByName('Jahr')[0].value;
	var anschrift = document.getElementsByTagName('input')[2].value;
	var hausnummer  = document.getElementsByTagName('input')[3].value;
	var postempfaenger  = document.getElementsByTagName('input')[4].value;
	var postleitzahl  = document.getElementsByTagName('input')[5].value;
	var ort = document.getElementsByTagName('input')[6].value;
	var bezirk = document.getElementsByTagName('input')[7].value;
	alert("Erfolg. Sie können alle informationen unten sehen.");
	
	/*document.getElementById('ausgabe').innerHTML = "Hallo, " + eingabe +" " + eingabe2 + ". <br />Der Geburtstag ist: " + tag + "-" + monat + "-" + jahr + "<br />" + 
												    "Ihre Adresse <br /> Anschrift: " + anschrift + " Hausnummer: " + hausnummer + " Postempfaenger: " + postempfaenger + " Postleitzahl: " + postleitzahl + " Ort: " + ort + " Bezirk: " + bezirk;*/
	/* Jetzt kommt alle information in eine liste*/												
	document.getElementById('collapse1').innerHTML = '<div class="panel-body">' + eingabe + ' ' + eingabe2 + '</div>';
	document.getElementById('collapse2').innerHTML = '<div class="panel-body">' + tag + '/' + monat + '/' + jahr + '</div>';
	document.getElementById('collapse3').innerHTML = '<div class="panel-body">' +
														'<ul class="list-group">' +
														 '<li class="list-group-item">Anschrift: ' + anschrift + '</li>' +
														  '<li class="list-group-item">Hausnummer: ' + hausnummer + '</li>' +
														  '<li class="list-group-item">Postempfaenger: ' + postempfaenger + '</li>' +
														  '<li class="list-group-item">Postleitzahl: ' + postleitzahl + '</li>' +
														  '<li class="list-group-item">Ort: ' + ort + '</li>' +
														  '<li class="list-group-item">Bezirk: ' + bezirk + '</li>' +
														'</ul>' +	
													  '</div>';
	
}


/* ++++++++++++++++++++ Kode für die CSS-Wechsler site ++++++++++++++++++++ */

/* Diese funktion erreicht den farben wert. Dann wechselt das Hintergrundbild vom Inhalt. */
function seiteFaerben() {
	var eingabe = document.getElementsByName('farben')[0].value;
	var wortFarbe = "";
	if (eingabe === 'Blue') {
		wortFarbe = "gold";
		document.getElementsByTagName('h2')[0].style.color = wortFarbe;
	}
	else if (eingabe == 'Green') {
		wortFarbe = "skyblue";
		document.getElementsByTagName('h2')[0].style.color = wortFarbe;
	}
	else if (eingabe == 'Orange') {
		wortFarbe = "brown";
		document.getElementsByTagName('h2')[0].style.color = wortFarbe;
	}
	else if (eingabe == 'Red') {
		wortFarbe = "orange";
		document.getElementsByTagName('h2')[0].style.color = wortFarbe;
	}
	
	
	document.getElementsByTagName('div')[0].style.backgroundColor = eingabe;
	
	/* Information rufen. */
	addInfo(eingabe, wortFarbe);
}

/* Diese funktion informiert die nutzer über die gewählt farbe. */
function addInfo(farbe, wortFarbe) {
	var currP = document.getElementsByTagName('p');
	/* Wenn es schon ein «p» element gibt, nür ist der Kind  ersetzt. */
	if (currP[0] != null) {
		var wort = " ";
		if (farbe == 'Blue') {
			wort = 'Blau';
		}
		else if (farbe == 'Green') {
			wort = 'Grün';
		}
		else if (farbe == 'Orange') {
			wort = 'Orange';
		}
		else if (farbe == 'Red') {
			wort = 'Rot';
		}
		
		var item = currP[0];
		
		var t = document.createTextNode("Sie haben die " + wort + " farbe gewählt.");
		item.replaceChild(t, item.childNodes[0]);
		//document.getElementById("inhalt").appendChild(para);
		document.getElementsByTagName('p')[0].style.color = wortFarbe;
	}
	else {
		/* Kein p Element. Dann kommt ein neuen. */
		var para = document.createElement("P");
		var wort = " ";
		if (farbe == 'Blue') {
			wort = 'Blau';
		}
		else if (farbe == 'Green') {
			wort = 'Grün';
		}
		else if (farbe == 'Orange') {
			wort = 'Orange';
		}
		else if (farbe == 'Red') {
			wort = 'Rot';
		}
		var t = document.createTextNode("Sie haben die " + wort + " farbe gewählt.");
		para.appendChild(t);
		document.getElementById("inhalt").appendChild(para);
		document.getElementsByTagName('p')[0].style.color = wortFarbe; 
	}
    
}

/* ++++++++++++++++++++ Kode für Registrierungsseite ++++++++++++++++++++ */


// Focus = Es wechselt das Hintergrundbild zu gelb
function focusFunction() {
    document.getElementsByName("vorname")[0].style.background = "yellow";
	document.getElementsByName("nachname")[0].style.background = "yellow";
	document.getElementsByName("anschrift")[0].style.background = "yellow";
	document.getElementsByName("hausnummer")[0].style.background = "yellow";
	document.getElementsByName("postempfaenger")[0].style.background = "yellow";
	document.getElementsByName("postleitzahl")[0].style.background = "yellow";
	document.getElementsByName("ort")[0].style.background = "yellow";
	document.getElementsByName("bezirk")[0].style.background = "yellow";
}

// No focus = Es wechselt das Hintergrundbild zu gold
function blurFunction() {
    document.getElementsByName("vorname")[0].style.background = "gold";
	document.getElementsByName("nachname")[0].style.background = "gold";
	document.getElementsByName("anschrift")[0].style.background = "gold";
	document.getElementsByName("hausnummer")[0].style.background = "gold";
	document.getElementsByName("postempfaenger")[0].style.background = "gold";
	document.getElementsByName("postleitzahl")[0].style.background = "gold";
	document.getElementsByName("ort")[0].style.background = "gold";
	document.getElementsByName("bezirk")[0].style.background = "gold";
}


/* Wenn alle gefüllt Daten ist gelöscht, kommt ein Alarm.*/
function resetAlarm() {
	alert("Alle danten waren gelöscht!");
}

