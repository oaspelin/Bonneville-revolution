var Question1 = {Kysymys:"Mitä “Triumph” tarkoittaa suomeksi?", A:"Voittoa", B:"Vauhtia", C:"Elämystä", D:"Vapautta", vaikeusaste:1, kuva:"images/ajaja.jpg"};

var Question2 = {Kysymys:"Missä maassa Triumphin moottoripyörät on perinteisesti valmistettu? ", A:"Iso-Britanniassa", B:"Ranskassa", C:"Saksassa", D:"Yhdysvalloissa", vaikeusaste:1, kuva: "images/factory1.jpg"};

var Question3 = {Kysymys:"Mikä on kautta aikain ollut Triumphin legendaarisin moottoripyörämalli?", A:"Bonneville", B:"Tiger", C:"Thunderbird", D:"Rocket", vaikeusaste:1, kuva: "images/bonneville_bobber.jpg"};

var Question4 = {Kysymys:"Mikä on Bonneville Revolutionin maailmaa mullistavin uusi ominaisuus?", A:"Se osaa itse ajaa itseään", B:"Se osaa lentää.", C:"Se ei tarvitse polttoainetta.", D:"Se osaa puhua.", vaikeusaste:1, kuva: "images/bonneville_black.jpg"};

var Question5 = {Kysymys:"Minkä avulla Bonneville Revolution tietää oman sijaintinsa?", A:"GPS-satelliitin avulla", B:"Kännykän avulla", C:"Internetin avulla", D:"Käyttäjän syöttämän tiedon avulla", vaikeusaste:1, kuva: "images/nainen_kaarteessa.jpg"};

var Question6 = {Kysymys:"Triumphin ensimmäinen tehdas aloitti toimintansa vuonna 1887. Alkuperäinen tuote ei kuitenkaan ollut moottoripyörä, vaan", A:"Polkupyörä.", B:"Auto.", C:"Ompelukone.", D:"Höyryveturi.", vaikeusaste:2, kuva: "images/vintage_racer.jpg"};

var Question7 = {Kysymys:"Kenen julkkiksen nimellä on valmistettu erityisversiota Bonnevillestä?", A:"Steve McQueenin", B:"Marlon Brandon", C:"James Deanin", D:"Bob Dylanin", vaikeusaste:2, kuva: "images/steve_mcqueen.jpg"};

var Question8 = {Kysymys:"Montako ihmistä tarvitaan ajamaan Bonneville Revolution moottoripyörää?", A:"Ei yhtään", B:"yksi", C:"kaksi", D:"seitsemän", vaikeusaste:2, kuva: "images/rannalla.jpg"};

var Question9 = {Kysymys:"Kuinka suuri moottori Bonneville Revolution moottoripyörässä on? ", A:"900cc", B:"800cc", C:"850cc", D:"1000cc", vaikeusaste:2, kuva: "images/engine.jpg"};

var Question10 = {Kysymys:"Mihin nimi Bonneville juontaa juurensa?", A:"Se on tunnettu moottoripyöräkilpa-ajopaikka Yhdysvalloissa.", B:"Se tarkoittaa ranskaksi gepardi", C:"Se tarkoittaa latinaksi nopeasti kulkevaa.", D:"Bonneville oli roomalainen myyttinen sotasankari", vaikeusaste: 2, kuva: "images/saltlake.jpg"};

var Question11 = {Kysymys:"Mistä materiaalista Bonneville Revolutionin runko on valmistettu?", A:"Hiilikuidusta", B:"Titaanista", C:"Teräksestä", D:"Alumiinista", vaikeusaste:2, kuva: "images/bonneville1.jpg"};

var Question12 = {Kysymys:"Kuinka monta hevosvoimaa oli ensimmäisessä oikeassa Triumph moottoripyörässä?", A:"kolme", B:"yksi", C:"kaksi", D:"viisi", vaikeusaste:3, kuva: "images/Tuunausmopo.jpg"};

var Question13 = {Kysymys:"Triumphin moottoripyörät kootaan Englannissa Hincleyssä, mutta osat valmistetaan enimmäkseen", A:"Thaimaassa", B:"Kiinassa", C:"Saksassa", D:"Japanissa", vaikeusaste:3, kuva: "images/factory2.jpg"};

var Question14 = {Kysymys:"Kuinka monta ihmistä voi ajaa Bonneville Revolution parvessa turvallisesti?", A:"16", B:"3", C:"6", D:"10", vaikeusaste:3, kuva: "images/mopojengi.jpg"};

var Question15 = {Kysymys:"Mihin tekniikoihin perustuu Bonneville Revolutionin ohjauksesta huolehtiva parviäly?", A:"Ultraääni ja GPS", B:"Infrapuna ja 5G", C:"Laser ja RS8", D:"Röntgensäteet ja SCK", vaikeusaste:3, kuva: "images/niitylla.jpg"};

var Question16 = {Kysymys:"Moni tunnettu supertähti esiintyi Triumphin mainoksissa 1950-luvulla. Kuka seuraavista henkilöistä ei ole esiintynyt Triumphin mainoksissa?", A:"Sean Connery", B:"Elvis Presley", C:"Steve McQueen", D:"James Dean", vaikeusaste:3, kuva: "images/hipster.jpg"};

function getQuestions(){
	var Questions=[Question1, Question2, Question3, Question4, Question5, Question6, Question7, Question8, Question9, Question10, Question11, Question12, Question13, Question14, Question15, Question16];
	return Questions;
}
function generateQuestions(){
	
	var returnarray=getQuestions();
	console.log(returnarray.length);
	//removes one random easy question from the array
	var random=getRandomNumber(0,3);
	returnarray.splice(random,1);
	var elementsremoved=1;
	
	//removes two random moderate questions from the array
	for(i=0; i<2;i++){
		random=getRandomNumber(4,9-elementsremoved);
		returnarray.splice(random,1);
		elementsremoved++;
	}


	//removes one random hard quesstion from the array
	random=getRandomNumber(9,13);
	returnarray.splice(random,1);

	//shuffles the array
	returnarray=shuffle(returnarray);

	return returnarray;
}

//shuffles the array between two indexes (Fisher- Yates shuffle)
function shuffle(array) {
   
    var counter = array.length, temp, index;

    while (counter > 0) {
        index = Math.floor(Math.random() * counter);
        counter--;
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}


//returns random number between min and max
function getRandomNumber(min,max){
	return Math.round(Math.random() * (max - min)+min);
}

/*
function addElements(array1,array2){
	for(i=0;i<array2.length-1;i++){
		array1.push(array2[i]);
	}
	return array1;
}*/