let secondsSheet = document.getElementsByClassName("timeSheet").item(5);
let tenSecondsSheet = document.getElementsByClassName("timeSheet").item(4);
let minutesSheet = document.getElementsByClassName("timeSheet").item(3);
let tenMinutesSheet = document.getElementsByClassName("timeSheet").item(2);
let hoursSheet = document.getElementsByClassName("timeSheet").item(1);
let tenHoursSheet = document.getElementsByClassName("timeSheet").item(0);

let dateParagraph = document.getElementById("date");

let startSeconds = new Date().getSeconds().toString().padStart(2, '0');
let startMinutes = new Date().getMinutes().toString().padStart(2, '0');
let startHours = new Date().getHours().toString().padStart(2, '0');

// записываем текущее время при загрузке
secondsSheet.firstChild.innerText = startSeconds[1];
tenSecondsSheet.firstChild.innerText = startSeconds[0];
minutesSheet.firstChild.innerText = startMinutes[1];
tenMinutesSheet.firstChild.innerText = startMinutes[0];
hoursSheet.firstChild.innerText = startHours[1];
tenHoursSheet.firstChild.innerText = startHours[0];

let now = new Date();
let month = now.toLocaleString('ru', {month:'long'});
let date = [now.getDate(), (month.charAt(month.length - 1) === "т") ? month+"а" : month.substring(0, month.length-1) + "я", now.getFullYear()].join(" ");
dateParagraph.innerText = date;

setInterval(function (){    // каждые 8 секунды

    let now = new Date();
    let dateSeconds = now.getSeconds().toString().padStart(2, '0');      // получаем секунды текущей даты в формате с двумя цифрами (9 -> 09)
    let dateMinutes = now.getMinutes().toString().padStart(2, '0');      // получаем минуты текущей даты в формате с двумя цифрами (9 -> 09)
    let dateHours = now.getHours().toString().padStart(2, '0');          // получаем часы текущей даты в формате с двумя цифрами (9 -> 09)


    let month = now.toLocaleString('ru', {month:'long'});
    let date = [now.getDate(), (month.charAt(month.length - 1) === "т") ? month+"а" : month.substring(0, month.length-1) + "я", now.getFullYear()].join(" ");
    dateParagraph.innerText = date;

    let tenSecondsChange = dateSeconds[0] !== tenSecondsSheet.firstChild.innerText;    // определяем, изменились ли десятки секунд
    let minutesChange = dateMinutes[1] !== minutesSheet.firstChild.innerText;          // определяем, изменились ли минуты
    let tenMinutesChange = dateMinutes[0] !== tenMinutesSheet.firstChild.innerText;    // определяем, изменились ли десятки минут
    let hoursChange = dateHours[1] !== hoursSheet.firstChild.innerText;                // определяем, изменились ли часав
    let tenHoursChange = dateHours[0] !== tenHoursSheet.firstChild.innerText;          // определяем, изменились ли десятки часов

    secondsSheet.classList.add("rotating");         // начинаем анимацию листка секунд
    if (tenSecondsChange){
        tenSecondsSheet.classList.add("rotating");  // начинаем анимацию листка десятков секунд
    }
    if (minutesChange){
        minutesSheet.classList.add("rotating");     // начинаем анимацию листка минут
    }
    if (tenMinutesChange){
        tenMinutesSheet.classList.add("rotating");  // начинаем анимацию листка десятков минут
    }
    if (hoursChange){
        hoursSheet.classList.add("rotating");       // начинаем анимацию листка часов
    }
    if (tenHoursChange){
        tenHoursSheet.classList.add("rotating");    // начинаем анимацию листка десятков часов
    }

    setTimeout(function () {        // спустя 2 секунды делаем следующее:
        secondsSheet.style.visibility = 'hidden';   // прячем листок для красивой смены цифры

        secondsSheet.firstChild.innerText = dateSeconds[1];        // помещаем в листок секунд значение
        rotateBack(secondsSheet);

        if ( tenSecondsChange ) {          // если десятки секунд изменились
            tenSecondsSheet.firstChild.innerText = dateSeconds[0]; // помещаем в листок десятков секунд значение
            rotateBack(tenSecondsSheet);
        }
        if ( minutesChange ) {             // если минуты изменились
            minutesSheet.firstChild.innerText = dateMinutes[1];    // помещаем в листок минут значение
            rotateBack(minutesSheet);
        }
        if ( tenMinutesChange ) {          // если десятки минут изменились
            tenMinutesSheet.firstChild.innerText = dateMinutes[0]; // помещаем в листок десятков минут значение
            rotateBack(tenMinutesSheet);
        }
        if ( hoursChange ) {               // если часы изменились
            hoursSheet.firstChild.innerText = dateHours[1];        // помещаем в листок часов значение
            rotateBack(hoursSheet);
        }
        if ( tenHoursChange ) {          // если десятки часов изменились
            tenHoursSheet.firstChild.innerText = dateHours[0];     // помещаем в листок десятков часов значение
            rotateBack(tenHoursSheet);
        }

    }, 2000);

    setTimeout(function () { // спустя 4 секунды делаем следующее:
        // приводим листок секунд (и остальные листки, если были изменены) в исходное состояние
        secondsSheet.classList.remove("rotateBack");
        secondsSheet.style.transform = 'rotateX(0deg)';
        if (tenSecondsChange){
            tenSecondsSheet.classList.remove("rotateBack");
            tenSecondsSheet.style.transform = 'rotateX(0deg)';
        }
        if (minutesChange){
            minutesSheet.classList.remove("rotateBack");
            minutesSheet.style.transform = 'rotateX(0deg)';
        }
        if (tenMinutesChange){
            tenMinutesSheet.classList.remove("rotateBack");
            tenMinutesSheet.style.transform = 'rotateX(0deg)';
        }
        if (hoursChange){
            hoursSheet.classList.remove("rotateBack");
            hoursSheet.style.transform = 'rotateX(0deg)';
        }
        if (tenHoursChange){
            tenHoursSheet.classList.remove("rotateBack");
            tenHoursSheet.style.transform = 'rotateX(0deg)';
        }

    }, 3900);
}, 8000);


function rotateBack(currentSheet){
    // останавливаем анимацию и запускаем возвращение листка в изначальное положение
    currentSheet.style.transform = 'rotateX(90deg)';
    currentSheet.classList.remove("rotating");
    currentSheet.classList.add("rotateBack");
    currentSheet.style.visibility = 'visible';
}
