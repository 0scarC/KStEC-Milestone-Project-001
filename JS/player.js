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

    function pHorizontalMove() {
        player.style.left = `${pX}px`
        switch (pMove) {
            case `right`:
                pX = pX + 1
                break;
            case `left`:
                pX = pX - 1
                break;
        }
    } 

    function pDownMove() {
        player.style.bottom = `${pY}px`
        switch (pY) {
            case pY = sY + sHeight:
                pY = pY
                break;
            default:
                pY = pY - 1
                break;
        }
    }
    setInterval(pDownMove, 100)
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
    
    document.addEventListener(`keyup`, function(e) {
        pMove = null
    })
}
pPosition()
