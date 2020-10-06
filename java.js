"use strict";


let position=1300;
function Move()
	{
	position-=1;
	if(position<250)position=1300;
	document.getElementById("harry").style.left=position;
	window.setTimeout("Move();",10);

	}
let  iznos=0;
let broj=0;
let broj1=0;
let broj2=0;
let broj3=0;
function Dodaj(forma)
	{	
		iznos=iznos+5;
		broj=broj+1;
		forma.cena.value="Vas iznos je " +iznos+ " eura.";
		forma.izvestaj.value="Porucili ste " +broj+ " stapic/a.";
	}
	

function Dodaj1(forma)
	{	
		iznos=iznos+15;
		broj1=broj1+1;
		
		forma.cena.value="Vas iznos je " +iznos+ " eura.";
		forma.izvestaj1.value="Porucili ste " +broj1+ " kapa.";
	}
	
	function Dodaj2(forma)
	{	
		iznos=iznos+30;
		broj2=broj2+1;
		forma.cena.value="Vas iznos je " +iznos+ " eura.";
		forma.izvestaj2.value="Porucili ste " +broj2+ " set.";
	}
	
	function Dodaj3(forma)
	{	
		iznos=iznos+25;
		broj3=broj3+1;
		forma.cena.value="Vas iznos je " +iznos+ " eura.";
		forma.izvestaj3.value="Porucili ste " +broj3+ " plast.";
	}
	
	function uspesno()
	{	
		if(iznos>0)
		alert("Uspesno ste kupili Harry Potter predmete, ocekujte uskoro isporuku!")
		else alert("Niste dodali nista u korpu od predmeta!")
				
	}
	
	function brisanje(forma)
	{	
		 broj=0;
		 broj1=0;
		 broj2=0;
		 broj3=0;
		iznos=0;
		forma.cena.value="Vas iznos je " +iznos+ " eura.";
		forma.izvestaj.value="Porucili ste " +broj+ " stapica.";
		forma.izvestaj1.value="Porucili ste " +broj1+ " kapa.";
		forma.izvestaj2.value="Porucili ste " +broj2+ " seta.";
		forma.izvestaj3.value="Porucili ste " +broj3+ " plasta.";
	}
	
	
	
	function Sennd(forma){
		
		let mojaslika=forma.izbor.options[forma.izbor.selectedIndex].value;
		let ime=forma.ime.value;
		let godine=eval(forma.godiste.value);
		let poruka="";
		if(godine>20){poruka="Pravi carobnjak ";}
		else if(godine>12 && godine<20){poruka="Carobnjak tinejdzer ";}
		else {poruka="Mladi carobnjak "}
		let noviProzor;
		noviProzor=window.open("","","width=450,height=850");
		noviProzor.document.write('<HTML><HEAD><TITLE>Ispis vasih podataka</TITLE></HEAD>')
		noviProzor.document.write('<BODY background="121.jpg">')
		noviProzor.document.write('<img src="'+mojaslika+'">'+poruka+ime+" primljen je u skolu Hogworts! <br>Vas grb kuce je prikazan na slici."  )
		noviProzor.document.write('<BODY></HTML>')
	}
	
	function Salji(forma)
	{
		let kuca;
			let i=0;
		let kuce=new Array("Hufflepuff","Slytherin","Ravenclaw","Gryffindor");
		
			let vrednost=eval(forma.odabir.value);
			
			if(vrednost>=1 && vrednost<=10){alert("Pripadas kuci "+kuce[0]);}
			else if (vrednost>=11 && vrednost<=20){alert("Pripadas kuci "+kuce[1]);}
		else if (vrednost>=21 && vrednost<=30){alert("Pripadas kuci "+kuce[2]);}
					else if (vrednost>=31 && vrednost<=40){alert("Pripadas kuci "+kuce[3]);}
		
		else {alert("Uneli ste nevazeci broj.Unesite ponovo!")}
		
		}
		
	let pos=0;
	let direction=1;
	let obj;
	function Movve(){
		
		
		obj=document.getElementById("head1");
		pos+=direction;
		if(pos>=100 || pos<=-100 ){direction=0-direction;}
		obj.style.left=pos;
		window.setTimeout("Movve();",25);
		
	}
		
	
		let positionn=1300;
		let position2=500;
		let position3=800;
		let positionnnnn=1000;
function Igraj()
	{
	positionn-=1;
	if(positionn<250)positionn=1300;
	document.getElementById("dementor").style.left=positionn;
	window.setTimeout("Igraj();",10);

	}
	function Igraj2()
	{
	position2+=1;
	if(position2>1000)position2=500;
	document.getElementById("dementor2").style.left=position2;
	window.setTimeout("Igraj2();",10);

	}
	function Igraj3()
	{
	position3-=1;
	if(position3<0)position3=500;
	document.getElementById("dementor3").style.top=position3;
	window.setTimeout("Igraj3();",10);

	}
		function Igraj4()
	{
	positionnnnn-=1;
	if(positionnnnn<250)positionnnnn=1000;
	document.getElementById("dementor4").style.left=positionnnnn;
	window.setTimeout("Igraj4();",10);

	}
	let brojac=0;
	let element;
function Puf(){
	
	element=document.getElementById('dementor')
if (element.src.match("out"))
  {
  element.src="dementor.gif";
  }
else
  {
  element.src="ex.gif";
  }
  brojac=brojac+1;
	window.setTimeout("document.getElementById('dementor').style.display='none';", 1000)
	if(brojac==4)alert("Pobedili ste dementore");
}
	function Puff(){
	
	element=document.getElementById('dementor2')
if (element.src.match("out"))
  {
  element.src="dementor.gif";
  }
else
  {
  element.src="ex.gif";
  }brojac=brojac+1;
	window.setTimeout("document.getElementById('dementor2').style.display='none';", 1000)
	if(brojac==4)alert("Pobedili ste dementore");
}
function Pufff(){
	
	element=document.getElementById('dementor3')
if (element.src.match("out"))
  {
  element.src="dementor.gif";
  }
else
  {
  element.src="ex.gif";
  }brojac=brojac+1;
	window.setTimeout("document.getElementById('dementor3').style.display='none';", 1000);
	if(brojac==4)alert("Pobedili ste dementore");
}
	function Puffff(){
	
	element=document.getElementById('dementor4')
if (element.src.match("out"))
  {
  element.src="dementor.gif";
  }
else
  {
  element.src="ex.gif";
  }brojac=brojac+1;
	window.setTimeout("document.getElementById('dementor4').style.display='none';", 1000)
	if(brojac==4)alert("Pobedili ste dementore");
}
	