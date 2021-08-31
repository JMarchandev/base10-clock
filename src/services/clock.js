import moment from 'moment';

export const getBase10HoursToString = () => {
    console.log('request base 10');
    // console.log("ENTRY BASE 24 =>", moment().hours() + ':' + moment().minutes() + ':' + moment().seconds());

    let hours = (moment().hours() / 24) * 10;
    let minutes = (moment().minutes() / 60) * 100;
    let seconds = (moment().seconds() / 60) * 100;

    // console.log("ENTRY BASE 20 =>", hours + ':' + minutes + ':' + seconds);

    if (!!(hours % 1)) {
        // console.log("SUPP HOURS =>", hours % 1);
        minutes += hours % 1
        hours = Math.floor(hours)
        if (hours.toString().length === 1) {
            hours = `0${hours}`
        }
    }
    if (!!(minutes % 1)) {
        // console.log("SUPP minutes =>", minutes % 1);
        seconds += minutes % 1
        minutes = Math.floor(minutes)
        if (minutes.toString().length === 1) {
            minutes = `0${minutes}`
        }
    }
    if (!!(seconds % 1)) {
        // console.log("SUPP SECONDS =>", base10seconds % 1);
        seconds = Math.round(seconds)
        if (seconds.toString().length === 1) {
            seconds = `0${seconds}`
        }
    }

    // console.log("OUTPUT BASE 20 =>", hours + ':' + minutes + ':' + base10seconds);

    return `${hours}:${minutes}:${seconds}`
}

export const getBase12Hours = () => {
    // console.log('request base 12');
    moment.locale('fr');
    return moment().format("HH:mm:ss", { trim: false })
}