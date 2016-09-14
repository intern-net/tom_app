
// article sound infomation

var articleSounds = {g_all:[
  {
    title:"オカルト系の記事 www",
    wavSrc: "all-0.wav",
    srcURL: "https://www.favclip.com"
  },
  {
    title:"ひとつめアーティクル LoGiRL",
    wavSrc: "all-1.wav",
    srcURL: "https://logirl.favclip.com"
  },
  {
    title:"ふたつ目のアーティクル BITE",
    wavSrc: "all-2.wav",
    srcURL: "https://bite.favclip.com"
  }
  ],
    g_entame:[
    {
      title:"えんため１こめ bite",
      wavSrc: "entame-0.m4a",
      srcURL: "https://bite.favclip.com"
    },
    {
      title:"エンタメ ２つめ owarai",
      wavSrc: "entame-1.m4a",
      srcURL: "https://owarai.favclip.com"
    }
  ]
};

var v = $("#articleSound")[0];
function pauseSound() {
  v.pause();
}
function playSound(){
  v.play();
  setTitle( sndArr[soundArticleIndex].title );

}
function stopSound(){
  v.stop();
}

function audioPlay(tgt){
  document.getElementById(tgt).play();
}

var playBtnState = 1;
$("#play").on("click", function(){
    if( playBtnState == 1){
      btnPlay();
    }else{
      btnPause();
    }
});

function btnPlay(){
  console.log("now Play");
  $("#play").attr('src', './images/stop.png');
  playBtnState = 0;
  playSound();
};

function btnPause(){
  console.log("now Pause");
  $("#play").attr('src', './images/Start.jpg');
  playBtnState = 1;
  pauseSound();
};

$("#next").on("click", function(){
  nextArticle();
  pauseSound();
  setSound();
  playSound();
});

function nextArticle(){
  soundArticleIndex += 1;
}


var sndArr;
var soundArticleIndex = 0;
$(".g_btn").on("click", function(){
  sndArr = articleSounds[this.id];
  setGenre( this.id );
  soundArticleIndex = 0;
  btnPause();
  setSound();
});

function setSound(){
  var sndInfo = sndArr[soundArticleIndex];
  $("#articleSound").attr("src", "bucketSound/" + sndInfo.wavSrc);
}

function setTitle(strTitle){
  $("#articleTitle").text(strTitle);
}

function setGenre(strGenr){
  $("#genreTitle").text(strGenr);
}
