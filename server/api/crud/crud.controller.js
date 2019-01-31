const firebase = require('firebase');
const fs = require('fs');

let setFirebase = function(key, callback){
  /**
   * firebase 설정
   */
  let config = {
    apiKey: "AIzaSyCTasmR9mfQvGMN9LbMbb4ViQkwH41cmxU",
    authDomain: "alaska-service-provider.firebaseapp.com",
    databaseURL: "https://alaska-service-provider.firebaseio.com",
    projectId: "alaska-service-provider",
    storageBucket: "alaska-service-provider.appspot.com",
    messagingSenderId: "1048042695905"
  };

  /**
   * 서버구동이 완료 되면 db연결 시작
   */
  console.log('DB 연결 준비중.......');

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
  console.log('firebase initializing.......');

  console.log('fetchFirebaseData !!!!');
  firebase.database().ref('/provider/sp/'+key).once('value')
    .then((data)=>{
      /**
       * 전체 Database Object
       */
      console.log('success !!!!');
      // console.log(data.val());
      callback(data.val());
    })
    .catch((error)=>{console.log(error)})
};

/**
 * saveFile
 * Firebase 연결하여 DB에 있는 Data를 저장한다.
 */

exports.saveFile = (req, res) => {
  console.log('saveFile :::::');
  // 데이터 저장하기 구현
  var data = "데이터를 저장합니다 " + new Date();
  console.log(data);

  console.log(req.params.key);

  setFirebase(req.params.key, function (jsonObj) {

    var jsonString = JSON.stringify(jsonObj,null,"\t");

    fs.writeFile('../data/serviceProvider_'+req.params.key+'.json', jsonString, function (err) {
      if (err) throw err;
      console.log('Saved!');
      var path = '../data/serviceProvider_'+req.params.key+'.json';
      res.download(path);
    });

  });
};

/**
 * saveView
 * Dom을 연결하여 Data를 저장한다.
 */
exports.saveView = (req, res) => {
  // 데이터 저장하기 구현
  console.log('saveView :::::');
};
