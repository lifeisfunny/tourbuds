cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "org.tourbuds.native.tourbuds",
        "file": "plugins/org.tourbuds.native/www/tourbuds.js",
        "pluginId": "org.tourbuds.native",
        "clobbers": [
            "cordova.plugins.tourbuds"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.2",
    "org.tourbuds.native": "0.0.0"
};
// BOTTOM OF METADATA
});