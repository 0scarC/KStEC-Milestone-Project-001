//Design and Position
function design(e, w, h, c, tC, x, y, n) {
    e.style.width = `${w}px`
    e.style.height = `${h}px`
    e.style.backgroundColor = c
    e.style.color = tC
    e.className = n
    e.style.position = `fixed`
    e.style.left = `${x}px`
    e.style.bottom = `${y}px`
}

//Text
function text(e, t, s) {
    e.innerHTML = t
    e.style.fontSize = `${s}px`
}

//Stage Play Area
var playArea = document.createElement(`div`)
var c = 0
var p = 0
var i = 0

const aWidth = Math.floor(innerWidth/1.02)
const aHeight = Math.floor(innerHeight/1.02)
const aX = Math.floor(innerWidth/95)
const aY = Math.floor(innerHeight/95)

function stageArea(c) {
    design(playArea, aWidth, aHeight, c, ``, aX, aY, `playArea`)
    document.body.append(playArea)
    c = 0
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
const sI = []

function newPlatform(w, h, c, x, y) {
    var platform = document.createElement(`div`)

    function sDesign() {
        sWidth = Math.floor(w)
        sHeight = Math.floor(h)
        platform.style.width = `${sWidth}px`
        platform.style.height = `${sHeight}px`
        platform.style.backgroundColor = c
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
    sI.push(i)
    i++
    playArea.append(platform)
}

//Menus
var cArea = document.createElement(`div`)
var cMenu = document.createElement(`div`)
var cTitle = document.createElement(`h3`)
var cList = document.createElement(`ul`)
var cL1 = document.createElement(`li`)
var cL2 = document.createElement(`li`)
var cL3 = document.createElement(`li`)
var cL4 = document.createElement(`li`)

var pauseArea = document.createElement(`div`)
var pauseMenu = document.createElement(`div`)
var pauseTitle = document.createElement(`h3`)
var pauseList = document.createElement(`ul`)
var pauseL1 = document.createElement(`li`)
var pauseL2 = document.createElement(`li`)
var pauseL3 = document.createElement(`li`)
var pauseL4 = document.createElement(`li`)

function menu(e, c, menu, title, t1, list, li1, i1, li2, li3, li4) {
    design(e, aWidth, aHeight, c, ``, aX, aY, `menu`)
    
    design(menu, aWidth/2, aHeight/2, `#000`, `fff`, aWidth/3.84, aHeight/3)
    text(title, t1, aHeight/20)
    text(li1, i1, aHeight/25)
    text(li2, `<a href="../index.html">Retry</ a>`, aHeight/25)
    text(li3, `<a href="../index.html">Stage Selection</a>`, aHeight/25)
    text(li4, `<a href="../index.html">Main Menu</a>`, aHeight/25)

    list.append(li1)
    list.append(li2)
    list.append(li3)
    list.append(li4)
    menu.append(title)
    menu.append(list)
    e.append(menu)
    document.body.append(e)
}

function complete() {
    menu(cArea, `#ff06`, cMenu, cTitle, `<strong>STAGE<br>COMPLETE</strong>`, cList, cL1, `<a href="../index.html">Next Stage</a>`,cL2, cL3, cL4)
}

function pause() {
    menu(pauseArea, `#0006`, pauseMenu, pauseTitle, `<br><strong>PAUSED</strong>`, pauseList, pauseL1, `<a href="../index.html">Continue</a>`,pauseL2, pauseL3, pauseL4)
}

//Stages
var end

function stage01() {
    stageArea(`#fff`)
    newPlatform(aWidth/1.25, aHeight/15, `#000`, aX, aHeight/25 + 1)
    newPlatform(aWidth/4, aHeight/5, `#0f0`, aWidth * 0.375, aHeight/3)
    end = newPlatform(aWidth/6, aHeight/15, `#f0f`, aWidth/6 * 5 , aHeight/25)
}

function stage02() {
    stageArea(`#fff`)
    newPlatform(aWidth, aHeight/15, `#f00`, aX, aHeight/35)
    newPlatform(aWidth/3, aHeight/15, `#00f`, aWidth/10, aHeight/3+1)
    newPlatform(aWidth/3, aHeight/15, `#00f`, aWidth/10 * 6, aHeight/3)
}

stage01()

var t = 0
function stageT() {
    switch (t) {
        case 0:
        case 2:
            playArea.remove()
            player.remove()
            stage01()
            playArea.append(player)
            t = 1
            break;
        case 1:
            playArea.remove()
            player.remove()
            stage02()
            playArea.append(player)
            t = 2   
    }
}