var niz=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var niz1=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]; // ovaj sluzi za poredjenje
var br=niz.length;

function izmesaj() {
	for(var i = niz.length - 1; i > 0; i--)	{
			var j = Math.floor(Math.random() * (i + 1));
			tmp = niz[i];
			niz[i] = niz[j];
			niz[j] = tmp;
	}
}

function gen() {	
	var brojac=0;
	var container=document.getElementById("container");
	for (var i=0; i<niz.length; i++) {	
		if(niz[i]!=0)	{
				container.innerHTML+='<div onclick="premesti('+i+')" class="polja">'+niz[i]+'</div>';
			}	else {
				container.innerHTML+='<div onclick="premesti('+i+')" class="prazno-polje">'+niz[i]+'</div>'; // samo vrednost 0 ima belu pozadinu
			}
	}
}

// cisti div kako bi mogao da prikaze novu tablu
function cisti() {
	container.innerHTML=''; 
}

// premesta polje u prazno polje
function premesti(a) {
	if(niz[a-4]==0)	{
			priv=niz[a-4];
			niz[a-4]=niz[a];
			niz[a]=priv;
		}	else if(niz[a+4]==0) {
			priv=niz[a+4];
			niz[a+4]=niz[a];
			niz[a]=priv;
		}	else if(niz[a-1]==0) {
			priv=niz[a-1];
			niz[a-1]=niz[a];
			niz[a]=priv;
		}	else if(niz[a+1]==0) {
			priv=niz[a+1];
			niz[a+1]=niz[a];
			niz[a]=priv;
		}
	cisti();
	gen();
	provera();
	return(niz);
}

// poruka koju igrica izbacuje kada su elementi niza poredjani po redu
function provera() {
	for(i=0;i<niz.length;i++)	{
		if(niz[i]==niz1[i])	{	
			br=br-1;
			if(br==0)	{
				alert("USPELI STE! BRAVO!");
			}
		}	else {
			br=niz.length;
		}
	}
}