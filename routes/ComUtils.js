// module.exports = {

//     sendLine1: function(line1) {
//         console.log("Line1: [" + line1 +"]");
//         module.exports.createLineNoControl(line1, "L1");
//     },

//     sendLine2: function(line2) {
//         console.log("Line2: [" + line2 + "]");
//     },

//     createLineNoControl: function(text, prefix) {
// 		var tmp=text;
// 		if(text.length == 0) {
// 			tmp="";
// 		} else if(text.length > 10) {
// 			tmp = text.substring(0, 9);
// 		} else {
// 			tmp = text;
// 		}
		
//         console.log("{?-" + prefix + tmp + "}");
//         return "{?-" + prefix + tmp + "}";
// 	}



// };