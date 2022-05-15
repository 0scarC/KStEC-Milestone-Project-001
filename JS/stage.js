
const playArea = document.createElement(`div`)
playArea.style.width = `${Math.floor(innerWidth/1.02)}px`
playArea.style.height = `${Math.floor(innerHeight/1.02)}px`
playArea.style.position = `fixed`
playArea.style.left = `${Math.floor(innerWidth/95)}px`
playArea.style.backgroundColor = `#0004`
document.body.append(playArea)

var platform = document.createElement(`div`)
playArea.append(platform)

var sWidth = Math.floor(innerWidth/1.05)
var sHeight = Math.floor(innerHeight/15)
var sX = innerWidth/45
var sY = innerHeight/5

function sDesign() {
    platform.style.width = `${sWidth}px`
    platform.style.height = `${sHeight}px`
    platform.style.backgroundColor = `#1a1afa`
}
sDesign()

function sPosition() {
    platform.style.position = `fixed`
    platform.style.left = `${sX}px`
    platform.style.bottom = `${sY}px`
}
sPosition()