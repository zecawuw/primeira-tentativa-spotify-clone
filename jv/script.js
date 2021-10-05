var tocarMusicar1 = document.getElementById("musica");
var tocarMusicar2 = document.getElementById("musica1");


function play() {
  tocarMusicar1.play();
  tocarMusicar2.play();


  let sairPlay = document.getElementById("botao-play");
  sairPlay.style.display = "none";

  let aparecerPause = document.getElementById('botao-pause');
  aparecerPause.style.display= "flex";

  
  let aparecericonMusic2 = document.getElementById('icon-music2');
  aparecericonMusic2.style.display= "inline-block";

  let aparecericonMusic1 = document.getElementById('icon-music1');
  aparecericonMusic1.style.display= "none";


  let li = document.getElementById('play-li');
  li.style.backgroundColor= "rgba(0, 0, 0, 0.2)", li.style.width = '900px';

}

function pause() {
  tocarMusicar1.pause();
  tocarMusicar2.pause();
  


  let sairPause = document.getElementById("botao-pause");
  sairPause.style.display = "none";

  let aparecerPlay = document.getElementById('botao-play');
  aparecerPlay.style.display= "flex";

  let aparecericonMusic2 = document.getElementById('icon-music1');
  aparecericonMusic2.style.display= "inline-block";

  let aparecericonMusic1 = document.getElementById('icon-music2');
  aparecericonMusic1.style.display= "none";


  let li = document.getElementById('play-li');
  li.style.backgroundColor= "transparent", li.style.width = '900px';

  let li1 = document.getElementById('play-li1');
  li1.style.backgroundColor= "transparent", li.style.width = '900px';


}

function play2() {
  tocarMusicar1.play();

  let sairPlay = document.getElementById("botao-play");
  sairPlay.style.display = "none";

  let aparecerPause = document.getElementById('botao-pause');
  aparecerPause.style.display= "flex";

  let aparecericonMusic2 = document.getElementById('icon-music2');
  aparecericonMusic2.style.display= "inline-block", aparecericonMusic2.style.position = "relative", aparecericonMusic2.style.top = "25px";

  let aparecericonMusic1 = document.getElementById('icon-music1');
  aparecericonMusic2.style.display= "inline-block";

  let li = document.getElementById('play-li');
  aparecericonMusic1.style.display= "none";
  li.style.backgroundColor= "rgba(0, 0, 0, 0.2)", li.style.width = '900px';

  let capa = document.getElementById('capa-sidoka-nao-me-sinto-mal-mais');
  capa.style.display = 'flex';

}

function play3() {
  tocarMusicar2.play();

  let sairPlay = document.getElementById("botao-play");
  sairPlay.style.display = "none";

  let aparecerPause = document.getElementById('botao-pause');
  aparecerPause.style.display= "flex";

  let aparecericonMusic2 = document.getElementById('icon-music22');
  aparecericonMusic2.style.display= "inline-block", aparecericonMusic2.style.position = "relative", aparecericonMusic2.style.top = "25px";

  let aparecericonMusic1 = document.getElementById('icon-music11');
  aparecericonMusic2.style.display= "inline-block";

  let li = document.getElementById('play-li1');
  aparecericonMusic1.style.display= "none";
  li.style.backgroundColor= "rgba(0, 0, 0, 0.2)", li.style.width = '900px';

  let capa = document.getElementById('a-historia-de-johnny');
  capa.style.display = 'flex';


}

function inserirNovaMusica(){
    let foi1 = document.getElementById('musica-nova1').value;
    let foi2 = document.getElementById('musica-nova2').value;
    let foi3 = document.getElementById('musica-nova3').value;

    let musicasH1 = document.getElementById("musicas-h3");
    musicasH1.innerHTML = foi1;

    let musicasH2 = document.getElementById("musicas-p");
    musicasH2.innerHTML = foi2;

    let musicasH3 = document.getElementById("musica-nova3");
    musicasH3.innerHTML = foi3;

    


    let foiText = document.getElementById("novas-musicas-h1");
    foiText.style.display = "block"

    function inserirNovaMusica2() {
      
    let foi1 = document.getElementById('musica-nova1');
    let foi2 = document.getElementById('musica-nova2');
    let foi3 = document.getElementById('musica-nova3');
    
    foi1.style.border = "5px solid #57b55d";
    foi2.style.border = "5px solid #57b55d";
    foi3.style.border = "5px solid #57b55d";
    }


    inserirNovaMusica2();

}
