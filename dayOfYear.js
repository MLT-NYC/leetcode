const dayOfYear = function (date) {
    const monthMap = {
        1: 31,
        2: 28,
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31
    };

    const day = parseInt(date.split('-')[2], 10);
    const month = parseInt(date.split('-')[1], 10);
    const year = parseInt(date.split('-')[0], 10);

    let days = 0;
    for (let i = 1; i < month; i++) {
        days += monthMap[i];
    }

    if (month > 2 && year % 4 === 0 && year % 100 != 0) {
        days += 1;
    } else if (month > 2 && year % 400 === 0) {
        days += 1;
    }

    return days + day;
};

// const date = "2019-01-09";
// console.log(dayOfYear(date));