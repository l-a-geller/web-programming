let svg = document.querySelector("svg");
let mainForm = document.querySelector("form");
let clearButton = document.getElementById("clearButton");
let textCloud = document.getElementById("textCloud");
let answerBody = document.getElementById("answerBody");

function hitsFigure(x, y, r) {
    return (x * x + y * y) <= r/2 * r/2 && x <= 0 && y <= 0 ||
        y > (x - r) && x >= 0 && y <= 0 ||
        x <= 0 && y >= 0 && x >= -r && y <= r;
}

function drawPoint(x, y) {
    svg.innerHTML += "<circle r=\"4\" cx=" + x + " cy=" + y + " fill=#f2c8aa class='point'></circle>";
}

function clearPoints() {
    let points = document.getElementsByClassName('point');
    while(points[0]) {
        points[0].parentNode.removeChild(points[0]);
    }
}

function sendPoint(xChecked, y, r){

    let requestBody = "", x;
    for (let i=0; i<xChecked.length; i++){
        x = xChecked[i];
        requestBody += "&x" + i + "=" + encodeURIComponent(x);
    }
    requestBody += "&y=" + encodeURIComponent(y);
    requestBody += "&r=" + encodeURIComponent(r);

    fetch("", {
        method: 'POST',
        body: requestBody,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
    })
    .then(response => response.text())
    .then(res => {
        answerBody.innerHTML = res;
    });
}

svg.addEventListener("click", (event) => {
    let rSelected = document.querySelectorAll("#wrapperR input:checked");
    if (rSelected.length === 0) {
        textCloud.innerText = "Семпай, а где R??\n ヽ( ﾟ〇ﾟ)ﾉ";
    } else {

        let x = (event.offsetX - 225)/150 * rSelected[0].value;
        let y = -(event.offsetY - 225)/150 * rSelected[0].value;
        let r = rSelected[0].value;

        let xArr = new Array(1);
        xArr[0] = x;
        sendPoint(xArr, y, r);

        if ( hitsFigure(x, y, r) ) {
            textCloud.innerText = "О да! Семпай, \nвы попали в фигуру\n (♡‿♡)";
        } else {
            textCloud.innerText = "Как жаль,\n вы не попали \nв фигуру\n(╥﹏╥) "
        }

        drawPoint(event.offsetX, event.offsetY);
    }
});

mainForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let xChecked = document.querySelectorAll("#wrapperX input:checked");
    if (xChecked.length === 0) {
        textCloud.innerText = "Выбери пожалуйста X, сладкий\n(◕‿◕)♡";
    } else {
        let yField = document.querySelector("#wrapperY input");
        let y = yField.value;
        let afterDot = (y.toString().includes('.')) ? (y.toString().split('.').pop().length) : (0);
        if (isFinite(y) && afterDot > 10) {
            textCloud.innerText = "Семпай, не вводи мне больше 11 \nцифр после запятой, умоляю!! \n(♡-_-♡)";
        } else {
            if (isFinite(y)) {
                if (y > -3 && y < 5){
                    if (y !== "") {
                        y = Number(y).toFixed(10);
                        let rSelected = document.querySelectorAll("#wrapperR input:checked");
                        if (rSelected.length === 0){
                            textCloud.innerText = "Семпай, а где R??\n ヽ( ﾟ〇ﾟ)ﾉ";
                        }else{
                            let r = rSelected[0].value;
                            let xCount = 0;
                            let x;
                            for (let i=0; i<xChecked.length; i++){
                                x = xChecked[i].value;
                                r = Number(r);
                                if ( hitsFigure(x, y, r) ){
                                    ++xCount;
                                }
                            }

                            if (xCount === 0){
                                textCloud.innerText = "Как жаль,\n вы ни разу не попали \nв фигуру(╥﹏╥) ";
                            } else {
                                textCloud.innerText = "О да! Семпай, \nвы попали в фигуру " + xCount + " раз\n (♡‿♡)";
                            }

                            let xArr = [xChecked.length];
                            for (let i=0; i<xChecked.length; i++){
                                x = xChecked[i].value;
                                xArr[i] = x;
                                drawPoint( (x*150/r + 225), (-y*150/r + 225) );
                            }
                            sendPoint(xArr, y, r);
                        }
                    } else {
                        textCloud.innerText = "Серьезно, ничего??!! (◣_◢)\n Я разочарована. \nПроверь свой Y и возвращайся";
                    }
                } else {
                    textCloud.innerText = "Прошу, введите Y заново,\n только не очень большой\n и не слишком маленький (✧∀✧)\nжелательно (-3;5)";
                }
            } else {
                textCloud.innerText = "Семпай, прости, но я приму только числа. Другим ты меня не удивишь (*^ω^)\n❤"
            }
        }
    }
});

clearButton.addEventListener('click', event => {
    event.preventDefault();
    fetch("", {
        method: 'HEAD',

    }).then(() => {
        answerBody.innerHTML = "";
        textCloud.innerText = "Хорошо, семпай, \nзабудем все что было между нами. \nВ таблице теперь так же пусто, как и в моем сердце ｡ﾟ･ (>﹏<) ･ﾟ｡";
        clearPoints();
    });
})

let tyankaParts = document.getElementsByClassName("erotic");
tyankaParts[0].addEventListener("click", function() {
    fetch("?key=show", {
        method: 'GET',
    }).then(response => response.text())
        .then(res => {
            if (res !== "") answerBody.innerHTML = res; //если полученная таблица не пустая, то записываем ее
            else textCloud.innerText = "Мы только начали общаться, \nв таблице еще ничего нет.\nヾ(・ω・)";
            let rows = document.querySelectorAll("#answerBody tr");
            for (let i=0; i<rows.length; i++){
                let tds = rows[i].children;
                svg.innerHTML += "<circle r=\"4\" cx=" + (tds[0].innerText*150/tds[2].innerText + 225) + " cy=" + (-tds[1].innerText*150/tds[2].innerText + 225) + " fill=#f2c8aa></circle>";
            }
        });
});
tyankaParts[1].addEventListener("click", function() {
    let titsAudio = document.querySelector("#tits");
    titsAudio.play();
    textCloud.innerText = "Аккуратнее, еще немного и я\n не смогу правильно посчитать \n(„ಡωಡ„)";
});
tyankaParts[2].addEventListener("click", function() {
    let leftJopaAudio = document.querySelector("#leftJopa");
    leftJopaAudio.play();
    textCloud.innerText = "Прошу, прекратите, я не могу \nсосредоточиться на задаче, \nдумаю только о Вас  \n(*¯ ³¯*)♡";
});
tyankaParts[3].addEventListener("click", function() {
    let rightJopaAudio = document.querySelector("#rightJopa");
    rightJopaAudio.play();
    textCloud.innerText = "Ах!! Семпай, что вы делаете? \nЯ думала мы здесь лабу сдаем... \n(¬_¬'')";
});
