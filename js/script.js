var niz = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var nizSredjen = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]; // ovaj niz sluzi za poredjenje
var brojNeslozenihPolja = niz.length;
var brojPoteza = 0;
var imeIgraca;

function napraviTablu() {
	for (var i = 0; i < niz.length; i++) {
		if (niz[i] != 0)	{
			$("#container").append('<div onclick="klik('+i+')" class="polje">'+niz[i]+'</div>');
		}	else {
			$("#container").append('<div class="polje-prazno">'+niz[i]+'</div>'); // samo vrednost 0 ima belu pozadinu
		}
	}
}

function izmesaj() {
	for (var i = niz.length - 1; i > 0; i--) {
		var nasumicniBroj = Math.floor(Math.random() * (i + 1));
		tmp = niz[i];
		niz[i] = niz[nasumicniBroj];
		niz[nasumicniBroj] = tmp;
	}
}

// cisti div kako bi mogao da prikaze novu tablu
function cisti() {
	container.innerHTML="";
}

// premesta polje u prazno polje
function klik(a) {
	if (niz[a-4] == 0) {
		priv = niz[a-4];
		niz[a-4] = niz[a];
		niz[a] = priv;
	}	else if (niz[a+4] == 0) {
		priv = niz[a+4];
		niz[a+4] = niz[a];
		niz[a] = priv;
	}	else if (niz[a-1] == 0) {
		priv = niz[a-1];
		niz[a-1] = niz[a];
		niz[a] = priv;
	}	else if (niz[a+1] == 0) {
		priv = niz[a+1];
		niz[a+1] = niz[a];
		niz[a] = priv;
	}
	brojPoteza = brojPoteza + 1;
	cisti();
	napraviTablu();
	provera();
	return(niz);
}

function unosImena() {
	imeIgraca = $("#ime").val();
	if (imeIgraca == "") {
		alert("Molimo unesite ime");
	} else {
		$("#prozor").css("display", "none");
		$("main").css("display", "flex");
		napraviTablu();
		return imeIgraca;
	}
}

// poruka koju igrica izbacuje kada su elementi niza poredjani po redu
function provera() {
	for (i = 0; i < niz.length; i++)	{
		if (niz[i] == nizSredjen[i])	{	
			brojNeslozenihPolja = brojNeslozenihPolja - 1;
			if (brojNeslozenihPolja == 0)	{
				$("main").css({
					"opacity" : "0.3",
					"pointer-events" : "none"
				});
				$("#prozor").css({
					"display" : "flex",
					"user-select" : "none",
					"cursor" : "pointer"
				});
				$("#prozor").html("Bravo " + imeIgraca + ", završili ste igru u " + brojPoteza + " poteza <br> (kliknite na ovaj prozor da generišete novu tablu)");
				$("#prozor").click(function() {
					$("#prozor").css("display", "none");
					$("main").css({
						"opacity" : "1",
						"pointer-events" : "auto",
						"cursor" : "pointer"
					});
					cisti();
					izmesaj();
					napraviTablu();
				});
			}
		}	else {
			brojNeslozenihPolja = niz.length;
		}
	}
}