cordova.define("org.tourbuds.native.tourbuds", function(require, exports, module) {
var exec = require('cordova/exec');

exports.coolMethod = function(arg0, success, error) {
    exec(success, error, "tourbuds", "coolMethod", [arg0]);
};

});
