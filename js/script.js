'use strict';

let rub = document.getElementById('rub');
console.log(rub);
let usd = document.getElementById('usd');
console.log(usd);

rub.addEventListener('input', () => {
    let request = new XMLHttpRequest();
    
    
    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    function letDat (){
        let data = JSON.parse(request.response);
        usd.value = rub.value / data.usd;
    }

    function err () {
        usd.value = 'что-то не так либо с запросом, либо с сервером';
    }

    request.addEventListener('readystatechange', function() {
        function res (){
            return new Promise(function(resolve, reject){
            if (request.readyState == 4 && request.status == 200) {
                    resolve();
                } else {
                    reject();
                }
        });
    }
        res()
            .then(letDat)
            .catch(err);
        
    });

});