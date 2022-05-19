//Stage Play Area

var playArea
const aWidth = Math.floor(innerWidth/1.02)
const aHeight = Math.floor(innerHeight/1.02)
const aX = Math.floor(innerWidth/95)
const aY = Math.floor(innerHeight/95)

function stageArea(c) {
    playArea = document.createElement(`div`)
    document.body.append(playArea)

    function aDesign() {
        playArea.style.width = `${aWidth}px`
        playArea.style.height = `${aHeight}px`
        playArea.style.backgroundColor = c
    }
    aDesign()

    function sPosition() {
        playArea.style.position = `fixed`
        playArea.style.left = `${aX}px`
        playArea.style.bottom = `${aY}px`
    }
    sPosition()
}

//Stage Platforms

var sWidth
var sHeight
var sX
var sY

const sLeft = []
const sRight = []
const sUp = []
const sDown = []



function newPlatform(w, h, c, x, y, t) {
    var platform = document.createElement(`div`)
    playArea.append(platform)

    function sDesign() {
        sWidth = Math.floor(w)
        sHeight = Math.floor(h)
        platform.style.width = `${sWidth}px`
        platform.style.height = `${sHeight}px`
        platform.style.backgroundColor = c
        platform.innerHTML = t
    }
    sDesign()
    
    function sPosition() {
        sX = Math.floor(x)
        sY = Math.floor(y)
        platform.style.position = `fixed`
        platform.style.left = `${sX}px`
        platform.style.bottom = `${sY}px`
    }
    sPosition()

    sLeft.push(sX)
    sRight.push(sX + sWidth)
    sUp.push(sY + sHeight)
    sDown.push(sY)
}

//Stages

const start = document.createElement(`p`).innerHTML = `START`
const end = document.createElement(`p`).innerHTML = `END`

function stage01() {
    stageArea(`#fff`)
    newPlatform(aWidth, aHeight/15, `#f008`, aX, aHeight/25,``)
    var startPlat = newPlatform(aWidth/4, aHeight/15, `#ff0`, aX * 2.25, aHeight/25, `<strong>START</strong>`)
    newPlatform(aWidth/4, aHeight/15, `#f0f`, aWidth/4 * 3 , aHeight/25, `<strong>END</strong>`)
}
stage01()


function stage02() {
    stageArea(`#f004`)
    newPlatform(aWidth, aHeight/15, `#f00`, aX, aHeight/25)
    newPlatform(aWidth/3, aHeight/15, `#00f`, aWidth/10, aHeight/3)
    newPlatform(aWidth/3, aHeight/15, `#00f`, aWidth/10 * 6, aHeight/3)
}

let a = 0
function stageTimer() {
    switch (a) {
        case 0:
            a = 1
            stage01()
            break;
        case 1:
            playArea.remove()
            a = 2
            stage02()
            break;
        case 2:
            playArea.remove()
            a = 1
            stage01()
            break;
    }
}
// setInterval(stageTimer, 1000)