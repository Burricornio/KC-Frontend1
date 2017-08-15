console.log('Entra');

var XHR;

if(window.XMLHttpRequest) {
    XHR = new XMLHttpRequest();
}

XHR.open("GET", "http://localhost:8000/api/tasks", true);

XHR.onreadystatechange = function () {
    if (XHR.readyState === 4 && XHR.status === 200) {
        console.log(XHR.responseText);
    }
}

XHR.send();