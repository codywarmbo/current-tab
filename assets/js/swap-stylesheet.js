var swapStyleSheet = function (sheet) {
    document.getElementById('pagestyle').setAttribute('href', sheet);
    storebackground(sheet);
}

var storebackground = function (swapstylesheet) {
    localStorage.setItem("sheetKey", swapstylesheet);
}

var loadbackground = function () {
    document.getElementById('pagestyle').setAttribute('href', localStorage.getItem('sheetKey'));
    if (localStorage.getItem("sheetKey") === null) {
        document.getElementById("pagestyle").setAttribute('href', 'assets/css/light.css');
    }
}

window.onload = loadbackground();