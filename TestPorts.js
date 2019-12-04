var serialport = require('serialport');
// https://serialport.io/

console.log("Hello again");

// list serial ports:
serialport.list(function (err, ports) {
  ports.forEach(function(port) {
    console.log(port.comName);
    // console.log(port['manufacturer']);
    // console.log(port['pnpId']);
    // console.log(port['locationId']);
    console.log(port.manufacturer);
  });
});