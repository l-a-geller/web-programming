<!DOCTYPE html>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <link rel="stylesheet" href="styles.css">
    <title>web2</title>
</head>
<body>
<header><span>Аноним Анонимный, Анонимус Программатор</span><span>Некая группа, Какой-то вариант</span></header>
<div id="mainWrapper">
    <div id="svgWrapper">
        <svg width="450" height="450">
            <polygon points="375,225 225,225 225,375"
                     fill="rgb(138, 202, 207)" fill-opacity="0.3" stroke="rgb(138, 202, 207)"></polygon> <!-- треугольник на графике-->


            <polygon points="225,225 75,225 75,75, 225,75"
                     fill="rgb(138, 202, 207)" fill-opacity="0.3" stroke="rgb(138, 202, 207)"></polygon> <!-- прямоугольник на графике-->


            <path d="M 150 225 A 75 75, 90, 0, 0, 225 300 L 225 225 Z"
                  fill="rgb(138, 202, 207)" fill-opacity="0.3" stroke="rgb(138, 202, 207)"></path> <!-- сектор круга на графике-->


            <line class="axis" x1="0" x2="450" y1="225" y2="225" stroke="rgb(177, 227, 221)" stroke-width="2"></line> <!--оси-->
            <line class="axis" x1="225" x2="225" y1="0" y2="450" stroke="rgb(177, 227, 221)" stroke-width="2"></line>


            <polygon points="225,0 219,16 231,16" stroke="rgb(177, 227, 221)" stroke-width="2" fill="rgb(26, 66, 62)"></polygon> <!-- стрелочки для осей-->
            <polygon points="450,225 434,231 434,219" stroke="rgb(177, 227, 221)" stroke-width="2" fill="rgb(26, 66, 62)"></polygon>


            <line class="core-line" x1="300" x2="300" y1="230" y2="220" stroke="rgb(177, 227, 221)" stroke-width="2"></line> <!-- шкала деления-->
            <line class="core-line" x1="375" x2="375" y1="230" y2="220" stroke="rgb(177, 227, 221)" stroke-width="2"></line>

            <line class="core-line" x1="75" x2="75" y1="230" y2="220" stroke="rgb(177, 227, 221)" stroke-width="2"></line>
            <line class="core-line" x1="150" x2="150" y1="230" y2="220" stroke="rgb(177, 227, 221)" stroke-width="2"></line>

            <line class="core-line" x1="220" x2="230" y1="150" y2="150" stroke="rgb(177, 227, 221)" stroke-width="2"></line>
            <line class="core-line" x1="220" x2="230" y1="75" y2="75" stroke="rgb(177, 227, 221)" stroke-width="2"></line>

            <line class="core-line" x1="220" x2="230" y1="300" y2="300" stroke="rgb(177, 227, 221)" stroke-width="2"></line>
            <line class="core-line" x1="220" x2="230" y1="375" y2="375" stroke="rgb(177, 227, 221)" stroke-width="2"></line>


            <text class="core-text" x="290" y="215">R/2</text> <!--подписи к шкале деления-->
            <text class="core-text" x="370" y="215">R</text>

            <text class="core-text" x="65" y="215" >-R</text>
            <text class="core-text" x="135" y="215">-R/2</text>

            <text class="core-text" x="235" y="155">R/2</text>
            <text class="core-text" x="235" y="80">R</text>

            <text class="core-text" x="235" y="305">-R/2</text>
            <text class="core-text" x="235" y="379">-R</text>

        </svg>
    </div>

    <div id="answer">

        <div id="textCloudWrapper">
            <p id="textCloud">Нажмите на мою голову, чтоб увидеть таблицу ^_^</p>
        </div>

        <audio id="tits" src="sound/sound.m4a"></audio>
        <audio id="leftJopa" src="sound/sound1.m4a"></audio>
        <audio id="rightJopa" src="sound/sound2.m4a"></audio>

        <div id="controlButtonWrapper">
            <button class="erotic" id="tyankaHead"></button>
            <button class="erotic" id="titsControl"></button>
            <button class="erotic" id="leftJopaControl"></button>
            <button class="erotic" id="rightJopaControl"></button>
        </div>

    </div>

    <div id="formWrapper">
        <form method="post" action="">
            <h3>Выберите X:</h3>
            <div id="wrapperX">
                <input id="x1" type="checkbox" name="X" value="3"><label for="x1">3</label>
                <input id="x2" type="checkbox" name="X" value="0"><label for="x2">0</label>
                <input id="x3" type="checkbox" name="X" value="-3"><label for="x3" class="xMinus">-3</label>
                <input id="x4" type="checkbox" name="X" value="4"><label for="x4">4</label>
                <input id="x5" type="checkbox" name="X" value="1"><label for="x5">1</label>
                <input id="x6" type="checkbox" name="X" value="-2"><label for="x6" class="xMinus">-2</label>
                <input id="x7" type="checkbox" name="X" value="5"><label for="x7">5</label>
                <input id="x8" type="checkbox" name="X" value="2"><label for="x8">2</label>
                <input id="x9" type="checkbox" name="X" value="-1"><label for="x9" class="xMinus">-1</label>
            </div>
            <div id="wrapperY">
                <input type="text" name="Y" placeholder="Введите Y:"/>
            </div>
            <h3>Выберите R:</h3>
            <div id="wrapperR">
                <input id="r1" type="radio" name="R" value="1"><label class="radio" for="r1">1.0</label>
                <input id="r2" type="radio" name="R" value="1.5"><label class="radio" for="r2">1.5</label>
                <input id="r3" type="radio" name="R" value="2"><label class="radio" for="r3">2.0</label>
                <input id="r4" type="radio" name="R" value="2.5"><label class="radio" for="r4">2.5</label>
                <input id="r5" type="radio" name="R" value="3"><label class="radio" for="r5">3.0</label>
            </div>
            <div id="sendClearWrapper">
                <button>Отправить</button>
                <button id="clearButton">Очистить</button>
            </div>

        </form>
    </div>
</div>
<table>
    <tr>
        <th>X</th>
        <th>Y</th>
        <th>R</th>
        <th>Результат</th>
        <th>Время обращения</th>
        <th>Время выполнения</th>
    </tr>
    <tbody id="answerBody"></tbody>
</table>
</body>
<script src="script.js"></script>
</html>
