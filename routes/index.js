var express = require('express');
var commClient = require('../ComService');

var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hello', function (req, res) {
  res.send('Hello World!')
});

router.post('/', function (req, res) {
  res.send('Got a POST request')
});

router.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
});

router.post('/text', function (req, res) {
  var comPortClient = new commClient().getInstance();
  console.log('--------------------------');
  console.log('-- START send texr --');
  console.log(req.body);

  comPortClient.sendLine1(req.body['line1']);
//  console.log('Sent line 1');

  comPortClient.sendLine2(req.body['line2']);
//  console.log('Sent line 2');

  comPortClient.sendLine3(req.body['line3']);
//  console.log('Sent line 3');

  comPortClient.sendLine4(req.body['line4']);
//  console.log('Sent line 4');

  comPortClient.sendLine5(req.body['line5']);
//  console.log('Sent line 5');

//  myfunctions.sendLine1(req.body['line1']);
//  myfunctions.sendLine2(req.body['line2']);
  /*
  this was to simulate a 1-2 second serverside action because i couldn't get sleep to work :()
  var i=true;
  for(x=0;x<1000;x++) {
    for(y=0;y<100000;y++) {
      if(i == false) break;
    }
  }
*/

  res.send('Got a POST text request')
});

router.post('/score', function (req, res) {
  var comPortClient = new commClient().getInstance();
  console.log('--------------------------');
  console.log('-- START send score --');
  console.log(req.body);

  comPortClient.sendScoreLine1(req.body['batter1'], req.body['total'], req.body['batter2']);

  comPortClient.sendScoreLine2(req.body['runs1'], req.body['wickets'], req.body['runs2']);

  comPortClient.sendScoreLine3(req.body['bowler1'], req.body['lastWicket'], req.body['lastman']);

  comPortClient.sendScoreLine4(req.body['bowler2'], req.body['prevInnings'], req.body['RR']);

  comPortClient.sendScoreLine5(req.body['oversBowled'], req.body['DL'], req.body['oversRemaining']);
  console.log('-- END send score --');
  res.send('Score updated. hopefully')
});


module.exports = router;
