var os = require('os');
function formTime() {
    var uptime = os.uptime().toFixed(0);
    var sec = (uptime % 60);
    var min = 0;
    var hour = 0;
    if (uptime < 3600) {
        min = (uptime - sec) / 60;
        console.log('Uptime:', min, 'min', sec, 'sec');
    } else {
        min = ((uptime - sec) % 3600)/60;
        hour = (uptime - sec - (60 * min))/3600;
        console.log('Uptime:', hour, 'hour', min, 'min', sec, 'sec');
    }
}
exports.print = formTime;