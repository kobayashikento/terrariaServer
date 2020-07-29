const fs = require('fs');

var daysCounter = 0;

function probPlayPiano() {
    //80% chance of playing the piano 
    if ((Math.floor(Math.random() * 10)) > 2) {
        return true;
    } else { return false; }
}

// takes in the count of days 0-6(7days) since day 3 and 6 are reset days and returns the acitivty number
// 0=all activities, 1=piano, 2=gym, 3=none
function createEvent() {
    if (daysCounter === 3) {
        daysCounter++;
        if (probPlayPiano()) {
            return 1;
        } else { return 3 }
    } else if (daysCounter === 6) {
        daysCounter = 0;
        if (probPlayPiano()) {
            return 1;
        } else { return 3 }
    } else {
        daysCounter++;
        if (probPlayPiano()) {
            return 0;
        } else { return 2 }
    }
}

function generateCalendar() {
    var data = [];
    var now = new Date();
    var d = new Date('2020-01-01')
    for (d ; d <= now; d.setDate(d.getDate() + 1)) {
        const dateTimeFormat = new Intl.DateTimeFormat("en", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          });
          const [
            { value: month },
            ,
            { value: day },
            ,
            { value: year },
          ] = dateTimeFormat.formatToParts(d);
        data.push({
            "day":`${year}-${month}-${day}`,
            "value": createEvent()
        })
    }
    return data;
}

const jsonString = JSON.stringify(generateCalendar())
fs.writeFileSync('../data/dashEvents.json', jsonString)



