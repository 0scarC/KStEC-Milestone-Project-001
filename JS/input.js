
var l = 0
var r = 0

//Player Movement
document.addEventListener(`keydown`, function(e) {
    switch (e.code) {
        case `ArrowRight`:
            switch (p || c) {
                case 1:
                    pMove = null
                    break;
                default:
                    pMove = `right`
                    r = 1
                    break;
            }
            break;
        case `ArrowLeft`:
            switch (p || c) {
                case 1:
                    pMove = null
                    break;
                default:
                    pMove = `left`
                    l = 1
                    break;
            }
            break;
    }
})

document.addEventListener(`keyup`, function(e) {
    switch (e.code) {
        case `ArrowRight`:
            switch (l) {
                case 1:
                    pMove = `left`
                    break;
                case 0:
                    pMove = null
                    break;
            }
            r = 0
            break;
        case `ArrowLeft`:
            switch (r) {
                case 1:
                    pMove = `right`
                    break;
                case 0:
                    pMove = null
                    break;
            }
            l = 0
            break;
    }
})

//Pause Menu

document.addEventListener(`keydown`, function(e) {
    switch (e.code) {
        case `KeyP`:
            switch (p) {
                case 1:
                    pauseArea.remove()
                    p = 0
                    break;
                default:
                    pause()
                    p = 1
                    switch (c) {
                        case 1:
                            pauseArea.remove()
                            p = 0
                            break;
                    }
                    break;
            }
            break;
    }
})
