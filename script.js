let dayHTML = document.querySelector('#day');
let hourHTML = document.querySelector('#hour');
let minuteHTML = document.querySelector('#minute');
let secondHTML = document.querySelector('#second');

function register() {
    alert("Inscrito com sucesso!")
}

let dateFuture = new Date()
dateFuture.setDate(dateFuture.getDate() + 10);
dateFuture.setHours(dateFuture.getHours() - 1);
dateFuture.setMinutes(dateFuture.getMinutes() - 1);


let insertCountdownValues = ({ days, hours, minutes, seconds }) => {
    dayHTML.textContent = days < 10 ? '0' + days : days;
    hourHTML.textContent = hours < 10 ? '0' + hours : hours;
    minuteHTML.textContent = minutes < 10 ? '0' + minutes : minutes;
    secondHTML.textContent = seconds < 10 ? '0' + seconds : seconds;
}

let updateCountdown = () => {
    let currentTime = new Date()
    let difference = dateFuture.getTime() - currentTime.getTime();

    let days = Math.floor(difference / 1000 / 60 / 60 / 24);
    let hours = Math.floor(difference / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(difference / 1000 / 60) % 60;
    let seconds = Math.floor(difference / 1000) % 60;

    insertCountdownValues({ days, hours, minutes, seconds })
}

setInterval(updateCountdown, 1000)

updateCountdown()
