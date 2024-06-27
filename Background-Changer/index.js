const body = document.querySelector('body');
const buttons = document.querySelectorAll('.button')
buttons.forEach((b) => {
    b.addEventListener('click', (bt) => {
        // console.log(bt.target.id)
        switch (bt.target.id) {
            case "grey":
                body.style.backgroundColor = bt.target.id
            case "white":
                body.style.backgroundColor = bt.target.id
            case "blue":
                body.style.backgroundColor = bt.target.id
            case "yellow":
                body.style.backgroundColor = bt.target.id
            case "purple":
                body.style.backgroundColor = bt.target.id
        }
    })
})