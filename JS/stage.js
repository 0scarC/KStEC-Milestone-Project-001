var c = 0
var p = 0
var i = 0
var s = 0

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
function text(m, e, t, s, l) {
    e.innerHTML = t
    e.style.fontSize = `${s}px`
    e.style.paddingTop = `${l}px`
    m.append(e)
}

//Stage Play Area
const playArea = document.createElement(`div`)

const aWidth = Math.floor(innerWidth/1.02)
const aHeight = Math.floor(innerHeight/1.02)
const aX = Math.floor(innerWidth/95)
const aY = Math.floor(innerHeight/95)

var sT1 = document.createElement(`p`)
var sT2 = document.createElement(`p`)
var sT3 = document.createElement(`p`)
var sT4 = document.createElement(`p`)

function stageArea() {
    design(playArea, aWidth, aHeight, `#fff`, `#858585`, aX, aY, `playArea`)
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
const sI = []

function newPlatform(w, h, c, x, y) {
    const platform = document.createElement(`div`)

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

var pauseArea = document.createElement(`div`)
var pauseMenu = document.createElement(`div`)
var pauseTitle = document.createElement(`h3`)
var pauseList = document.createElement(`ul`)
var pauseL1 = document.createElement(`li`)

function menu(e, c, m, title, t1, list, li1, i1) {
    design(e, aWidth, aHeight, c, ``, aX, aY, `menu`)
    
    design(m, aWidth/2, aHeight/2, `#000`, `#fff`, aWidth/3.84, aHeight/3)
    text(m, title, t1, aHeight/20)
    text(m, li1, i1, aHeight/25)

    list.append(li1)
    m.append(list)
    e.append(m)
    document.body.append(e)
}

function complete() {
    menu(cArea, `#ff06`, cMenu, cTitle, `<strong>STAGE<br>COMPLETE</strong>`, cList, cL1, `<a id="next" href="../index.html">Next Stage</a><br><a id="retry" href="../index.html">Retry</a><br><a id="ss" href="../index.html">Stage Selection</a><br><a id="mm" href="../index.html">Main Menu</a>`)
}

function pause() {
    menu(pauseArea, `#0006`, pauseMenu, pauseTitle, `<br><strong>PAUSED</strong>`, pauseList, pauseL1, `<a id="continue" href="../index.html">Continue</a><br><a id="retry" href="../index.html">Retry</a><br><a id="ss" href="../index.html">Stage Selection</a><br><a id="mm" href="../index.html">Main Menu</a>`)
}

//Stages
var end

function stage01() {
    s = 1
    stageArea()
    text(playArea, sT1, `Move with the left (<--) and right (-->) arrow keys`, aHeight/25, aHeight/3)
    newPlatform(aWidth/1.25, aHeight/15, `#000`, aX, aHeight/25 + 1)
    newPlatform(aWidth/6, aHeight/15, `#f0f`, aWidth/6 * 5.05 , aHeight/25)
}

function stage02() {
    s = 2
    stageArea()
    text(playArea, sT2, `Down you go`, aHeight/25)
    newPlatform(aWidth/3, aHeight/15, `#f00`, aX, aHeight/1.25)
    newPlatform(aWidth/3, aHeight/15, `#00f`, aWidth/10, aHeight/3+1)
    newPlatform(aWidth/3, aHeight/15, `#00f`, aWidth/10 * 6, aHeight/3)
}

stage01()