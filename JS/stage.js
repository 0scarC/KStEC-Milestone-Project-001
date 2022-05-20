//Design
function design(n, w, h, c) {
    n.style.width = `${w}px`
    n.style.height = `${h}px`
    n.style.backgroundColor = c
}

//Position
function position(n, x, y) {
    n.style.position = `fixed`
    n.style.left = `${x}px`
    n.style.bottom = `${y}px`
}

//Text
function text(n, t, c) {
    n.innerHTML = t
    n.style.color = c
}

//Stage Play Area

var playArea = document.createElement(`div`)

const aWidth = Math.floor(innerWidth/1.02)
const aHeight = Math.floor(innerHeight/1.02)
const aX = Math.floor(innerWidth/95)
const aY = Math.floor(innerHeight/95)

function stageArea(c) {
    design(playArea, aWidth, aHeight, c)
    position(playArea, aX, aY)
    document.body.append(playArea)
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

function newPlatform(w, h, c, x, y, v) {
    var platform = document.createElement(`div`)
    
    function sDesign() {
        sWidth = Math.floor(w)
        sHeight = Math.floor(h)
        platform.style.width = `${sWidth}px`
        platform.style.height = `${sHeight}px`
        platform.style.backgroundColor = c
        platform.className = v
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
    
    playArea.append(platform)
}

//Menus

//Complete Menu
var pauseArea

function pause() {
    pauseArea = document.createElement(`div`)
    pauseArea.className = `pause`
    
    design(pauseArea, aWidth, aHeight, `#0006`)
    position(pauseArea, aX, aY)
    
    const pauseMenu = document.createElement(`div`)
    const pauseTitle = document.createElement(`h3`)
    const pauseList = document.createElement(`ul`)
    const pauseListItem1 = document.createElement(`li`)
    const pauseListItem2 = document.createElement(`li`)
    const pauseListItem3 = document.createElement(`li`)
    
    design(pauseMenu, aWidth/2, aHeight/2, `#000`)
    position(pauseMenu, aWidth/3.84, aHeight/3)
    text(pauseTitle, `<strong>PAUSED</strong>`, `#fff`)
    text(pauseListItem3, `<a href="../index.html">Continue</a>`)
    text(pauseListItem2, `<a href="../index.html">Restart</a>`)
    text(pauseListItem1, `<a href="../index.html">Stage Selection</a>`)

    pauseList.append(pauseListItem1)
    pauseList.append(pauseListItem2)
    pauseList.append(pauseListItem3)
    pauseMenu.append(pauseTitle)
    pauseMenu.append(pauseList)
    pauseArea.append(pauseMenu)
    document.body.append(pauseArea)
}


//Stages
var start
var end

function stage01() {
    stageArea(`#fff`)
    newPlatform(aWidth, aHeight/15, `#f008`, aX, aHeight/25,``)
    start = newPlatform(aWidth/4, aHeight/15, `#ff0`, aX * 2.25, aHeight/25, `goal`)
    end = newPlatform(aWidth/4, aHeight/15, `#f0f`, aWidth/4 * 3 , aHeight/25, `goal`)
}

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
            a = 2
            pause()
            break;
        // case 2:
        //     playArea.remove()
        //     a = 1
        //     stage01()
        //     break;
    }
}
setInterval(stageTimer, 1000)