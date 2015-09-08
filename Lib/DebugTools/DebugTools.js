_ = require('lodash');

// Shamelessely grabbed from here, and edited to my liking
// http://stackoverflow.com/questions/22168033/a-function-to-print-prototype-chain-for-a-given-object
module.exports = {
    printPrototypeChain: function printPrototypeChain(obj) {
        // This conditional is used because I want it to call the getType method
        // as long as it exists, not just for the top-level object that contains it.
        if(!_.isNull(obj)) {
            var objectName = "Object";
            if('getType' in obj) {
                objectName = obj.getType();
            }
            console.log(Array(20)
                .join('-'));
            console.log(objectName + ' Methods');
            console.log(Array(20)
                .join('-'));
        }
        //---------------
        for(var key in obj) {
            if(obj.hasOwnProperty(key)) {
                console.log(key, ": ", obj[key]);
            }
        }

        if(obj) {
            if(_.isFunction(Object.getPrototypeOf)) {
                printPrototypeChain(Object.getPrototypeOf(obj));
            }
            else if(obj.__proto__) {
                printPrototypeChain(obj.__proto__);
            }
        }
    },
};
