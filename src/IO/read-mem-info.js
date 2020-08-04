/*var fs = require('fs');

module.exports = function(path) {
    var memInfo;
    fs.readFile(path, (err, data) => {
        if (err) {
            console.error(err);
        } else {
            memInfo = data;
            return memInfo.split('\n');
        }
    })
}*/


//---------------------------------

/*function readMemInfo(path) {
    var fso, f, line;
    var ForReading = 1;

    fso = new ActiveXObject('Scripting.FileSystemObject');
    f = fso.OpenTextFile(path, ForReading);
    return f.ReadAll().split("\n");
    /*var memInfos = f.ReadAll().split("\n");
    memInfos = splitColon(memInfos);
}

function splitColon(list) {
    let n = list.length;
    for (let i = 0; i < n; i++)
}*/
//export default readMemInfo;