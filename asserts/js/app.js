const bool = document.querySelector('.bool');
const daysLeft = document.querySelector('#days-left');
const hoursLeft = document.querySelector('#hours-left');
const timeLeft = document.querySelector('.time-left');
const header = document.querySelector('header');

const addZero = num => num < 10 ? `0${num}` : num;

const getDayOfTheYear = date => {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const day = Math.floor(diff / oneDay);
    return day;
};

const changeBool = str => {
    bool.innerHTML = str;
};

const changeHeaderColor = (fontcolor, shadow) => {
    header.style.color = fontcolor;
    header.style.boxShadow = shadow;
};

const getHoursLeftOutput = () => {
    const date = new Date();
    const now = date.toLocaleTimeString('pt-BR', { timeStyle: 'medium' })
    
    const [hoursNow, minsNow, secsNow] = now.split(':');
    const hoursLeft = 23 - hoursNow;
    const minsLeft = 59 - minsNow;
    const secsLeft = 59 - secsNow;

    return `${addZero(hoursLeft)}:${addZero(minsLeft)}:${addZero(secsLeft)}`;
};

const displayDayEvent = () => {
    changeHeaderColor('green', '0 0 75px green');
    changeBool('É');
    timeLeft.innerHTML = `<p>De um tapa no</p>
                          <p>Toni mais perto</p>
                          <p>de você!</p>`.fontcolor('green');
};

const getNationalYear = (month, day) => {
    const now = new Date();
    const returnValue = (month > now.getMonth() || (month === now.month && day > now.getDate())) ? now.getFullYear() + 1 : now.getFullYear();
    return returnValue;
};

const internationalDay = '19';
const internationalMonth = '11';

const getTimeUntilNationalDate = () => {
    const now = getDayOfTheYear(new Date());
    const day = getDayOfTheYear(new Date(`${internationalMonth}-${internationalDay}-${getNationalYear(internationalMonth, internationalDay)}`));
    const result = day - now - 1;

    if (result > 1) {
        daysLeft.innerHTML = `Faltam ${result} dias`;
    } else if (result === 1) {
        daysLeft.innerHTML = `Falta ${result} dia`;
    } else if (result === -1) {
        displayDayEvent();
        return;
    } else if (result < 0) {
        daysLeft.innerHTML = `Faltam ${result + 365} dias`;
    } else if (result === 0) {
        daysLeft.innerHTML = 'Falta apenas:';
    }

    changeBool('NÃO É');
    changeHeaderColor('red', '0 0 75px red');

    const hoursLeftOutPut = getHoursLeftOutput();
    hoursLeft.innerHTML = hoursLeftOutPut;

    clearInterval();
    setInterval(() => {
        getTimeUntilNationalDate();
    }, 500);
};

getTimeUntilNationalDate();
