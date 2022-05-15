//Stage Play Area
const playArea = document.createElement(`div`)
const aWidth = Math.floor(innerWidth/1.02)
const aHeight = Math.floor(innerHeight/1.02)
const aLeft = Math.floor(innerWidth/95)
const aRight = Math.floor(aLeft + aWidth)
const aBottom = Math.floor(innerHeight/95)

playArea.style.width = `${aWidth}px`
playArea.style.height = `${aHeight}px`
playArea.style.position = `fixed`
playArea.style.left = `${aLeft}px`
playArea.style.bottom = `${aBottom}px`
playArea.style.backgroundColor = `#0004`
document.body.append(playArea)

//Stage Platforms
var platform = document.createElement(`div`)
playArea.append(platform)

var sWidth
var sHeight
var sX
var sY

function newPlatform(w, h, c, x, y) {
    function sDesign() {
        sWidth = Math.floor(w)
        sHeight = Math.floor(h)
        platform.style.width = `${sWidth}px`
        platform.style.height = `${sHeight}px`
        platform.style.backgroundColor = c
        return sWidth, sHeight
    }
    sDesign()
    
    function sPosition() {
        sX = Math.floor(x)
        sY = Math.floor(y)
        platform.style.position = `fixed`
        platform.style.left = `${sX}px`
        platform.style.bottom = `${sY}px`
        return sX, sY
    }
    sPosition()
    
}
newPlatform(innerWidth/1.05, innerHeight/15, `#ff0`, innerWidth/45, innerHeight/5)