const boolean_h1 = document.querySelector('h1 > span');
const clock_div = document.getElementById('clock');
const clock_p = document.querySelector('#clock_p');
const daysLeft_p = document.querySelector('#daysleft');

document.addEventListener("DOMContentLoaded", () => {
    setInterval(() => {
        if (1.5 * visualViewport.height > visualViewport.width) {
            clock_div.style.marginTop = "75%"
            clock_div.style.marginRight = "10px"
            clock_div.style.padding = "0"
        } else {
            clock_div.style.marginTop = "4%"
            clock_div.style.marginRight = "7%"
        }
    }, 100)
})

isItTheDay()

function isItTheDay() {
    const now = {
        'month': new Date().getMonth(),
        'day': new Date().getDate(),
    };
    
    const day = {
        'month': 10, // 10
        'day': 19, // 19
    };

    if (day['month'] === now['month'] && day['day'] === now['day']) {
        boolean_h1.innerHTML = 'É'.fontcolor('blue');
        document.querySelector('header').style.boxShadow = "0 0 75px blue";
    } else { 
        boolean_h1.innerHTML = 'NÃO É'.fontcolor('red');
        document.querySelector('header').style.boxShadow = "0 0 75px red";

        clock(willBeNegative(now, day));
    }
}

function willBeNegative(now, day) {
    return (now.month > day.month || now.month === day.month && now.day > day.day);
}

function clock(yearPlusOne) {

    setInterval(function() {
        let internationalDay;
        const intDate = '11-19'
        let now = Date.parse(new Date());
        if (yearPlusOne) {
            internationalDay = Date.parse(`${intDate}-${new Date().getFullYear()+1}`);
        } else {
            internationalDay = Date.parse(`${intDate}-${new Date().getFullYear()}`);
        }
        let distance = internationalDay - now;
        
        let interval = {
            'days': Math.floor(distance / (1000 * 60 * 60 * 24)),
            'hours': Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            'mins': Math.floor(distance % (1000 * 60 * 60) / (1000 * 60)),
            'secs': Math.floor(distance % (1000 * 60) / 1000),
        };

        daysLeft_p.innerHTML = `${interval.days.toString()} dias`;
        clock_p.innerHTML = `${addZeroOrNot(interval.hours.toString())}:${addZeroOrNot(interval.mins.toString())}:${addZeroOrNot(interval.secs.toString())}`;
    }, 1000);

}

function addZeroOrNot(hour) {
    if (hour.length !== 2)  {
        return '0' + hour;
    } else {
        return hour;
    }
}
