var c = 0
var p = 0
var sN = 0

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
function text(m, e, t, s, mT, mB) {
    e.innerHTML = t
    e.style.fontSize = `${s}px`
    e.style.marginBlockStart = `${mT}px`
    e.style.marginBlockEnd = `${mB}px`
    m.append(e)
}

//Stage Play Area
const playArea = document.createElement(`div`)
const aWidth = 800
const aHeight = 600
const aX = Math.floor(innerWidth/100 * 3)
const aY = Math.floor(innerHeight/100 * 6)

function stageArea() {
    design(playArea, aWidth, aHeight, `#fff`, `#858585`, aX, aY, `playArea`)
    document.body.append(playArea)
}

//Stage Platforms
var sWidth, sHeight, sX, sY

const sLeft = []
const sRight = []
const sUp = []
const sDown = []
const sI = []

function newPlatform(w, h, c, x, y) {
    const platform = document.createElement(`div`)
    sWidth = Math.floor(w)
    sHeight = Math.floor(h)
    sX = Math.floor(x)
    sY = Math.floor(y)

    design(platform, sWidth, sHeight, c, ``, sX, sY, `platform`)

    sLeft.push(sX)
    sRight.push(sX + sWidth)
    sUp.push(sY + sHeight)
    sDown.push(sY)
    playArea.append(platform)
}

function finalPlatform(w, h, c, x, y) {
    const platform = document.createElement(`div`)
    var end = document.createElement(`p`)
    sWidth = Math.floor(w)
    sHeight = Math.floor(h)
    sX = Math.floor(x)
    sY = Math.floor(y)

    design(platform, sWidth, sHeight, c, `#d5ce0a`, sX, sY, `final`)
    text(platform, end, `END`, aHeight/20, 0, 0)

    sLeft.push(sX)
    sRight.push(sX + sWidth)
    sUp.push(sY + sHeight)
    sDown.push(sY)
    playArea.append(platform)
}

//Player
var pWidth, pY, pX
var pDown = `fall`
var pMove = null

function player() {
    const player = document.createElement('div')
    playArea.append(player)

    pWidth = Math.floor(aWidth/20)
    pY = Math.floor(aHeight/1.25)
    pX = Math.floor(aWidth/2)

    function pDesign(w, h, c) {
        player.style.width = w
        player.style.height = h
        player.style.backgroundColor = c
    }    
    pDesign(`${pWidth}px`, `${pWidth}px`, `#000`)

    function pPosition() {
        player.style.position = `fixed`
        player.style.left = `${pX}px`
        player.style.bottom = `${pY}px`
        
        function pDownMove() {
            switch (pDown) {
                case `fall`:
                    pY -= 1
                    break;
                default:
                    pY = pY
                    break;
            }
            switch (pY) {
                case aY - pWidth:
                    pY = innerHeight
                    break;
                default:
                    for (var i = 0; i < sUp.length; i++)
                        switch (pY) {
                            case sUp[sUp.length - 1]:
                                switch (true) {
                                    case pX < sRight[sRight.length - 1] && pX + pWidth >= sLeft[sLeft.length - 1]:
                                        pDown = null
                                        pY = pY - 1
                                        complete()
                                        c = 1
                                        break;
                                }
                                break;
                            case sUp[i]:
                                switch (true) {
                                    case pX < sRight[i] && pX + pWidth >= sLeft[i]:
                                        pDown = null
                                        break;
                                    default:
                                        pDown = `fall`
                                        break;
                                }
                                break;
                        }
                    break;
            }
            player.style.bottom = `${pY}px`
        }
        setInterval(pDownMove, 1)
        
        function pHorizontalMove() {
            switch (pMove) {
                case `right`:
                    switch (pX + pWidth) {
                        case aX + aWidth:
                            pX = pX
                            break;
                        default:
                            for (var i = 0; i < sUp.length; i++)
                            switch (true) {
                                case pX < sRight[i] && pX + pWidth > sLeft[i]:
                                    switch (true) {
                                        case pY < sUp[i] && pY + pWidth > sDown[i]:
                                            pMove = null
                                            break;
                                    }
                                    break;
                            }
                            pX += 1
                            break;
                    }
                    break;
                case `left`:
                    switch (pX) {
                        case aX:
                            pX = pX
                            break;
                        default:
                            for (var i = 0; i < sUp.length; i++)
                            switch (true) {
                                case pX + pWidth >= sLeft[i] && pX <= sRight[i]:
                                    switch (true) {
                                        case pY < sUp[i] && pY + pWidth > sDown[i]:
                                            pMove = null
                                            break;
                                    }
                                    break;
                            }
                            pX -= 1
                            break;
                    }
                    break;
                }
            player.style.left = `${pX}px`
        }
        setInterval(pHorizontalMove, 1)
    }
    pPosition()
}

//Menus
var cArea = document.createElement(`div`)
var cMenu = document.createElement(`div`)
var cTitle = document.createElement(`h3`)
var cB1 = document.createElement(`form`)

var pauseArea = document.createElement(`div`)
var pauseMenu = document.createElement(`div`)
var pauseTitle = document.createElement(`h3`)
var pauseB1 = document.createElement(`form`)

var pID

function menu(e, c, m, title, t1, mH, bBox, b) {
    design(e, aWidth, aHeight, c, ``, aX, aY, `menu`)
    
    design(m, aWidth/2, aHeight/2, `#000`, `#fff`, aWidth/3.84, aHeight/3)
    text(m, title, t1, aHeight/20, mH, 0)
    text(m, bBox, `<p tabindex="0" ` + b + `</p><p tabindex="0" id="retry">Retry</p><p tabindex="0" id="ss">Stage Selection</p><p tabindex="0" id="mm">Main Menu</p>`, aHeight/30, 0, 0)

    m.append(bBox)
    e.append(m)
    document.body.append(e)
}

function complete() {
    menu(cArea, `#ff06`, cMenu, cTitle, `<strong>STAGE<br>COMPLETE</strong>`, aHeight/30, cB1, `id="next">Next Stage`)
    click(`next`, cArea)
    click(`retry`, cArea)
    click(`ss`, cArea)
    click(`mm`, cArea)
    pID = document.getElementsByTagName(`p`)
    console.log(pID)
}

function pause() {  
    menu(pauseArea, `#0006`, pauseMenu, pauseTitle, `<br><strong>PAUSED</strong>`, aHeight/30, pauseB1, `id="continue">Continue`)
    click(`continue`, pauseArea)
    click(`retry`, pauseArea)
    click(`ss`, pauseArea)
    click(`mm`, pauseArea)
    pID = document.getElementsByTagName(`p`)
    console.log(pID)
}

//Stages
function clearStage() {
    while (playArea.hasChildNodes()) {
        playArea.removeChild(playArea.firstChild);
    }
}

function stage(s) {
    const sText = document.createElement(`p`)
    switch (s) {
        case 1:
            sN = 1
            clearStage()
            stageArea()
            text(playArea, sText, `<p>Move with the left (<--) and right (-->) arrow keys</p>`, aHeight/25, aHeight/2.5)
            sText.style.position = `fixed`
            sText.style.left = `${aWidth/4.3}px`
            newPlatform(aWidth/1.25, aHeight/15, `#162e77`, aX, aY + 1)
            finalPlatform(aWidth/6, aHeight/15, `#167735`, aWidth/1.17 , aY)
            player()
            break;
        case 2:
            sN = 2
            clearStage()
            stageArea()
            text(playArea, sText, `Down you go`, aHeight/25)
            sText.style.position = `fixed`
            sText.style.left = `${aWidth/2.2}px`
            newPlatform(aWidth/1.25, aHeight/5, `#162e77`, aX, aHeight/1.42)
            newPlatform(aWidth/1.25, aHeight/5, `#162e77`, aWidth/4.5, aHeight/2.5)
            newPlatform(aWidth/1.25, aHeight/5, `#162e77`, aX, aHeight/10)
            finalPlatform(aWidth/6, aHeight/15, `#167735`, aWidth/6 * 5.05, aY)
            player()
            break;
        case 3:
            sN = 3
            clearStage()
            stageArea()
            text(playArea, sText, `Sometimes you have to go down to go up`, aHeight/25, aHeight/2.5)
            sText.style.position = `fixed`
            sText.style.left = `${aWidth/3.3}px`
            newPlatform(aWidth/6, aHeight/15, `#162e77`, aX, aHeight/10)
            finalPlatform(aWidth/6, aHeight/15, `#167735`, aWidth/1.17, aHeight/1.25)
            player()
            break;
        case 4:
            sN = 4
            clearStage()
            stageArea()
            text(playArea, sText, `Become a master of controlled descent<br>Press 'P' to retry`, aHeight/25, aHeight/2.5)
            sText.style.position = `fixed`
            sText.style.left = `${aWidth/3.3}px`
            newPlatform(aWidth/2, aHeight/15, `#162e77`, aWidth/3.75, aHeight/1.25)
            newPlatform(aWidth, aHeight/15, `#162e77`, aX, aY)
            finalPlatform(aWidth/6, aHeight/15, `#167735`, aWidth/2.27, aHeight/4)
            player()
            break;
    }
}

var number = document.querySelector(`p`).getAttribute(`value`)
stage(number)