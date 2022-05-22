
var l = 0
var m = 0
var r = 0
var z = 0

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

//Pause and Complete Menu
function redo() {
    pDown = `fall`
    p = 0
}

function pauseContinue() {
    redo()
    pY += 1
}

document.addEventListener(`keydown`, function(e) {
    switch (e.code) {
        case `KeyP`:
            switch (p) {
                case 1:
                    pauseContinue()
                    pauseArea.remove()
                    break;
                default:
                    pDown = null
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
        case `Enter`:
            for (z; z < pID.length; z++)
            switch (sN) {
                case 1:
                    switch (pID[z]) {
                        case pID[3]:
                            switch (pID[3].id) {
                                case `continue`:
                                    pauseContinue()
                                    pauseArea.remove()
                                    break;
                                case `next`:
                                    clearStage()
                                    console.log(sN)
                                    stage(sN + 1)
                                    pDown = `fall`
                                    c = 0 
                                    break;
                            }
                            break;
                        case pID[4]:
                            redo()
                            stage(1)
                            break;
                        case pID[5]:
                            break;
                        case pID[6]:
                            break;
                    }
                    break;
                case 2:
                 switch (pID[z]) {
                    case pID[2]:
                    console.log(sN)
                        switch (pID[2].id) {
                            case `continue`:
                                pauseContinue()
                                pauseArea.remove()
                                break;
                            case `next`:
                                clearStage()
                                console.log(sN)
                                stage(sN + 1)
                                pDown = `fall`
                                c = 0   
                                break;
                        }
                        break;
                    case pID[4]:
                            pauseArea.remove()
                            cArea.remove()
                            clearStage()
                            stage(sN)
                            p = 0
                            c = 0
                        break;
                }
                    break;
                case 3:
                    break;
                case 4:
                    break;
            }
           
            break;
    }
})

function click(e, eA) {
    document.getElementById(e).addEventListener(`click`, function() {
        switch (e) {
            case `continue`:
                pauseContinue()
                eA.remove()
                break;
            case `next`:
                clearStage()
                stage(sN + 1)
                pDown = `fall`
                c = 0
                break;
            case `retry`:
                switch (sN) {
                    case 1:
                        stage(1)
                        pDown = `fall`
                        p = 0
                        c = 0
                        break;
                    case 2:
                        stage(2)
                        pDown = `fall`
                        p = 0
                        c = 0
                        break;
                }
                break;
            case `ss`:
                break;
            case `mm`:
                break;
        }
    })
}
