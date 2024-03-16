var config = require("../config");
var commands = [];


function cmd(info, func) {
    var data = info;
    data.function = func;
    if (!data.dontAddCommandList) data.dontAddCommandList = false;
    if (!info.desc) info.desc = 'No Info';
    if (!data.fromMe) data.fromMe = true;
    if (!info.category) data.category = 'misc';
    if (!info.filename) data.filename = "Not Provided";
    commands.push(data);
    return data;
}
module.exports = {
    cmd,
    AddCommand:cmd,
    Function:cmd,
    Module:cmd,
    commands,
};