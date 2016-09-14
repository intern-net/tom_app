firebase.initializeApp({
    authDomain: 'favst-dojo.firebaseapp.com',
    databaseURL: 'https://favst-dojo.firebaseio.com'
});
var allArticleSearch = {"IT":[], "all":[], "entertainment":[], "fashion":[], "gourmet":[], "hobby":[], "news":[], "sports":[]};
var db = firebase.database();
var storage = firebase.storage();

// console.log('Genres');
// db.ref('/voices').once('value', function(snapshot) {
//     console.log(snapshot.val());
//     console.log('=====================================================================');
// });

db.ref('/voices').once('value', function (snapshot) {
  // get all date
    var allData = snapshot.val();
    var genreList = Object.keys(allData);
    // get key and make list
    genreList.forEach(function(g_name){
    var obj = allData[g_name];
    // 先頭から取り出す>>g_nameへ

    var curArr = allArticleSearch[g_name]
    Object.keys(obj).forEach(function (id) {
      var tmpArticle = {};
        var val = obj[id];
        storage.refFromURL(val.voiceURL).getDownloadURL().then(function (voiceURL) {
        // 保持する配列
        tmpArticle['id'] = id;
        tmpArticle['title'] = val.title;
        tmpArticle['linkUrl'] = val.linkURL;
        tmpArticle['voiceUrl'] = voiceURL;
        curArr.push(tmpArticle);
        // コンソール
        // console.log('ID:', id);
        // console.log('Title:', val.title);
        // console.log('LinkURL:', val.linkURL);
        // console.log('VoiceURL:', voiceURL);
        // console.log('=====================================================================');
        });
    });
});
});
