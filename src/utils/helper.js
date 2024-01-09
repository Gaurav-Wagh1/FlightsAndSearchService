const compareTiming = (dateTime1, dateTime2) => {
    const time1 = new Date(dateTime1).getTime();
    const time2 = new Date(dateTime2).getTime();
    return (time1 > time2);
}

module.exports = { compareTiming };