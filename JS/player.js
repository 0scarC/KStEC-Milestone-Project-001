const player = document.createElement('div')
document.body.append(player)

var pWidth = innerWidth/17
var pX = innerWidth/30
var pY = innerHeight/2
var pMove = null


function pDesign() {
    player.style.width = `${pWidth}px`
    player.style.height = `${pWidth}px`
    player.style.backgroundColor = `#000`
}
pDesign()

function pPosition() {
    player.style.position = `fixed`
    player.style.left = `${pX}px`
    player.style.bottom = `${pY}px`

    function pDownMove() {
        switch (pY) {
            case sY:
                pY = pY
                break;
            default:
                pY = pY - 1
                break;
        }
        player.style.bottom = `${pY}px`
    }
    setInterval(pDownMove, 5)
    
    function pHorizontalMove() {
        switch (pMove) {
            case `right`:
                pX += 1
                break;
            case `left`:
                pX -= 1
                break;
        }
        player.style.left = `${pX}px`
    }
    setInterval(pHorizontalMove, 1)    

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
