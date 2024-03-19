'use strict';


let output = document.querySelector('.output');
const inputHour = document.querySelector('.hour');
const inputMinute = document.querySelector('.minute');
const setAlarm = document.querySelector('.set-alarm');
let setOutput = document.querySelector('.set-output');

const now = new Date();
let hour = now.getHours();
let minute = now.getMinutes();

window.addEventListener('load', function(){

    output.innerText = `${hour}:${minute}`;
    
});


setAlarm.addEvenListenter('click', function() {
    const alarmTime = new Date();
    let alarmHour = alarmTime.setHours(inputHour);
    let alarmMinute = alarmTime.setMinutes(inputMinute);
    setOutput.innerText = `${alarmHour}:${alarmMinute}`;
    if (now.getHours() === alarmTime.getHours() && now.getMinutes() === alarmTime.getMinutes()) {
        alert('Alarm!');
        clearInterval();
    }
    setInterval(updateClock, 1000);

});
