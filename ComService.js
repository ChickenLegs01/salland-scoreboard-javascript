var serialPort = require('serialport');

class commService {
 
    constructor() {
        this.port;
        this.waitTill = new Date(new Date().getTime() + 2 * 1000);
    }

// @TODO get correct com port and post a welcome init() message to score board.

    init() {
        var com = "COM8";
        console.log("Initialize com port : " + com);
        this.port = new serialPort(com, {
            baudRate: 9600,
            dataBits: 8,
            stopBits: 1,
            parity: 'none',
          })

          console.log('Send init String');
          this.port.write('{?53|>U0001|+? }');

         this.port.on('data', function (data) {

           //console.log('Data rec:', data.toString());
           var lastChar = data.toString().slice(-1);

           if(lastChar == "}") {
              console.log("ACK received!!!"); 
           }
         });
    }

   
    sendLine(command) {
//        console.log("in Send Commnand: "+ command);
        this.port.write(command);
      console.log("command Sent!");
      var x,y,i=true;
      for(x=0;x<1000;x++) {
        for(y=0;y<10000;y++) {
          if(i == false) break;
        }
      }
    }


    sendLine1(text) {
        console.log("Line1: [" + text +"]");
        this.sendLine('{?-|>U0001|+L01|+P' + text + '}');
    }

    sendLine2(text) {
        console.log("Line2: [" + text +"]");
        this.sendLine('{?-|>U0002|+L01|+P' + text + '}');
    }

    sendLine3(text) {
        console.log("Line3: [" + text +"]");
        this.sendLine('{?-|>U0003|+L01|+P' + text + '}');
    }

    sendLine4(text) {
        console.log("Line4: [" + text +"]");
        this.sendLine('{?-|>U0004|+L01|+P' + text + '}');
    }


    sendLine5(text) {
        console.log("Line5: [" + text +"]");
        this.sendLine('{?-|>U0005|+L01|+P' + text + '}');
    }

    // not implementing the checksum protocal for the numbers as in java version. 
    // I can do without the aggivation and the testing. Just use the simple text version.
    // 
    // FORMAT_LINE1 = "%2d %3d %3d";
	// FORMAT_LINE2 = "%3d %2d %3d";
	// FORMAT_LINE3 = "%2d %3d %3d";
	// FORMAT_LINE4 = "%2d %3d %3d";
	// FORMAT_LINE5 = "%2d %3d %3d";

    sendScoreLine1(bat1, total, bat2) {
       // console.log("bat1: " + typeof bat1);
        var text = bat1.padStart(2) + " " + total.padStart(3) + " " + bat2.padStart(3); 
//        console.log("ScoreLine1: [" + text +"]");
        this.sendLine1(text);
    }

    // runs1, int wickets, int runs2
    sendScoreLine2(runs1, wickets, runs2) {
        var text = runs1.padStart(3) + " " + wickets.padStart(2) + " " + runs2.padStart(3);
//        console.log("ScoreLine2: [" + text +"]");
        this.sendLine2(text);
    }

    // int bowler1, int lastWicket, int lastman
    sendScoreLine3(bowler1, lastWicket, lastman) {
        var text = bowler1.toString().padStart(2) + " " + lastWicket.toString().padStart(3) + " " + lastman.toString().padStart(3);
//        console.log("ScoreLine3: [" + text +"]");
        this.sendLine3(text);
    }

    // int bowler2, int prevInn, int RR
    sendScoreLine4(bowler2, prevInn, rr) {
        var text = bowler2.toString().padStart(2) + " " + prevInn.toString().padStart(3) + " " + rr.toString().padStart(3);
//        console.log("ScoreLine4: [" + text +"]");
        this.sendLine4(text);
    }

    // int oversBowled, int DL, int oversRemain
    sendScoreLine5(oversBowled, dl, oversRemain) {
        var text = oversBowled.toString().padStart(2) + " " + dl.toString().padStart(3) + " " + oversRemain.toString().padStart(3);
//        console.log("ScoreLine5: [" + text +"]");
        this.sendLine5(text);
    }



}

// text line no control character {?-|>U000Z|+L01|+PXXXXXXXXX}  where Z is the line and XXXXXXXXX is the text.
// line 1 = {?-|>U0001|+L01|+PXXXXXXXXX}
// line 2 = {?-|>U0002|+L01|+PXXXXXXXXX}
// line 3 = {?-|>U0003|+L01|+PXXXXXXXXX}
// line 4 = {?-|>U0004|+L01|+PXXXXXXXXX}
// line 5 = {?-|>U0005|+L01|+PXXXXXXXXX}

class myComClient {

    constructor() {
        if (!myComClient.instance) {
            myComClient.instance = new commService();
        }
    }

    getInstance() {
        return myComClient.instance;
    }
}

module.exports = myComClient
