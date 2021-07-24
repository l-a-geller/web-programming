let svg = document.querySelector('svg');
let textBlock = document.getElementById('textBlock');

svg.addEventListener("click", (event) => {
    let r = document.getElementById("form:R_hidden").value;
    let x = Number((event.offsetX - 225)/150 * r/2).toFixed(5);
    let y = Number(-(event.offsetY - 225)/150 * r/2).toFixed(5);

    document.getElementById("svgForm:inputXHidden").value = x;
    document.getElementById("svgForm:inputXHidden").click();
    document.getElementById("svgForm:inputYHidden").value = y;
    document.getElementById("svgForm:inputYHidden").click();
    document.getElementById("svgForm:hidden_refresh_table").click();

    makeDraw(x, y, r/2, "svg");
});

function validate(x, y, r) {
    textBlock.innerText = "";
    if (x<-3 || x>3) {
        textBlock.innerText = "X должен быть в пределах: [-3;3]\n";
    }
    if (y<=-3 || y>=5) {
        textBlock.innerText += "Y должен быть в пределах: (-3;5)\n";
    }
    if (r<1 || r>4) {
        textBlock.innerText += "R должен быть в пределах: [1;4]\n";
    }
    return textBlock.innerText === "";
}

function hitsFigure(x, y, r) {
    return (x * x + y * y <= r / 2.0 * r / 2.0 && x >= 0.0 && y >= 0.0 ||
        y > -x - r / 2 && x <= 0.0 && y <= 0.0 ||
        x >= 0.0 && y <= 0.0 && x <= r && y >= -r / 2);
}

function makeDraw(x, y, r, key) {
    if (validate(x, y, r)) {
        textBlock.style.border = "none";
        nav.innerHTML = "";
        if (key === "form") {
            let hits = hitsFigure(x, y, r);
            x = x*150/r + 225;
            y = 225 - y * 150/r;
            if (hits) {
                svg.innerHTML += "<circle r=\"4\" class=" + r + " cx=" +  x + " cy=" + y + " fill=green " + " </circle>";
            } else {
                svg.innerHTML += "<circle r=\"4\" class=" + r + " cx=" +  x + " cy=" + y + " fill=red " + " </circle>";
            }
        }else {
            if (hitsFigure(x, y, r)){
                svg.innerHTML += "<circle r=\"4\" class=" + r + " cx=" +  event.offsetX + " cy=" + event.offsetY + " fill=green " + " </circle>";
            }else{
                svg.innerHTML += "<circle r=\"4\" class=" + r + " cx=" +  event.offsetX + " cy=" + event.offsetY + " fill=red " + " </circle>";
            }
        }
    } else {
        textBlock.style.border = "5px solid  rgba(84, 57, 32, 0.7)";
    }
}

function checkR(){
    let r = document.getElementById("form:R_hidden").value;
    let circles = document.getElementsByTagName("circle");
    for (let i=0; i<circles.length; i++){
        if (!circles[i].classList.contains(r/2)) circles[i].style.visibility = 'hidden';
        else circles[i].style.visibility = 'visible';
    }
}

function createPoint(){
    let y = document.getElementById("form:inputY").value;
    if(!isFinite(y)){
        textBlock.innerText = "Y должен быть строкой";
    }else {
        let afterDot = (y.toString().includes('.')) ? (y.toString().split('.').pop().length) : (0);
        if( afterDot<8 ){
            let r = Number(document.getElementById("form:R_hidden").value);
            let x = Number(document.getElementById("form:inputX_hidden").value);
            makeDraw(x/2, y, r/2, "form");
        }else {
            textBlock.innerText = "Не вводите, пожалуйста, больше 7 цифр после запятой";
        }
    }
}

document.addEventListener("DOMContentLoaded", function (event) {

    drawSavedPoints();
    let nav = document.getElementById("nav");
    let clearButton = document.getElementById("form:clearPoints");

    clearButton.addEventListener('click', function(event){
        nav.innerHTML = "";
        let circles = document.querySelectorAll("circle");
        for (let i=0; i<circles.length; i++){
            circles[i].parentNode.removeChild(circles[i]);
        }
    });

});

function drawSavedPoints() {
    let points = getPointsByRows();
    if (null == points) return;
    for (let i in points) {
        if (points[i][0] !== undefined && !isNaN(points[i][0]) && points[i][2] !== 0){
            let x = Number(points[i][0]);
            let y = Number(points[i][1]);
            let r = Number(points[i][2]);
            makeDraw(x, y, r, "form");
        }
    }
}

function getPointsByRows() {
    let data = [];
    let rows = document.querySelectorAll(".tableWrapper table tbody tr");
    for (let i = 0; i < rows.length; i++) {
        data[i] = [];
        let elements = rows[i].children;
        for (let j=1; j<4; j++) {
            data[i].push(elements.item(j).innerHTML);
        }
    }
    return data;
}
