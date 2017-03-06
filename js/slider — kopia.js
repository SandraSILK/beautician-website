
var numer = Math.floor(Math.random()*3)+1;  //zmienna globalna, floor zaokrągla w dół, random - losuje od 0 do 3, ale na koncu dodajemy 1 wiec od 1 do 3

function zmienSlajd()  {

	numer++; if (numer>3)numer=1; //number++ zmieniaj slajdy na kolejne, if do 3, a później zacznij od 1 
	var textList = ["laser", "maska", "masaż"] 

	var plik = "<img src=\"js/slajdy/slajd" + numer + ".jpg\" />" ;
	//for  (var i = text.length[i]; i>0; i++);
		text = textList[numer-1]; 

/*	if(numer == 1)
	{
		var text = "laser"
	} 
	else if(numer == 2)
	{
		 var text = "maska"
	} else { 
		var text = "masaż"}; */

	document.getElementById("slajder").innerHTML = plik;
	document.getElementById("napis").innerHTML = text;

	setTimeout("zmienSlajd()",5000);
}

