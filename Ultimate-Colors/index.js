const randomColor = function() {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

;
console.log(randomColor);
const body = document.querySelector('body');
const Start = document.querySelector('#start');
const Stop = document.querySelector('#stop');
let refrenceid;
const Changecolor = Start.addEventListener('click', function() {
        if (!refrenceid) {
            refrenceid = setInterval(function() {
                body.style.backgroundColor = randomColor();
            }, 1000);
        }
    }

);
Stop.addEventListener('click', function() {
        clearInterval(refrenceid);
        refrenceid = null;
        body.style.backgroundColor = '#212121';
    }

);