const platform = document.createElement(`div`)
document.body.append(platform)

var sWidth = innerWidth/1.05
var sHeight = innerHeight/15
var sX = innerWidth/45
var sY = innerHeight/5
var sTop = sY + sHeight


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