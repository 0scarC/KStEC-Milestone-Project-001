const player = document.createElement('div')
playArea.append(player)

var pWidth = Math.floor(innerWidth/17)
var pX = Math.floor(innerWidth/30)
var pY = Math.floor(innerHeight/2)
var pMove = null


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
        switch (pY) {
            case sY + sHeight:
                pY = pY
                break;
            default:
                pY -= 1
                break;
        }
        player.style.bottom = `${pY}px`
    }
    setInterval(pDownMove, 1)
    
    function pHorizontalMove() {
        switch (pMove) {
            case `right`:
                switch (pX + pWidth) {
                    case aRight:
                        pX = pX
                        break;
                    default:
                        pX += 1
                        break;
                }
                break;
            case `left`:
                switch (pX) {
                    case aLeft:
                        pX = pX
                        break;
                    default:
                        pX -= 1
                        break;
                }
                break;
        }
        player.style.left = `${pX}px`
    }
    setInterval(pHorizontalMove, 10)    

    document.addEventListener(`keydown`, function(e) {
        switch (e.key) {
            case `ArrowRight`:
                pMove = `right`
                break;
            case `ArrowLeft`:
                pMove = `left`
                break;
        }
    })
    
    document.addEventListener(`keyup`, function() {
        pMove = null
    })
}
pPosition()
