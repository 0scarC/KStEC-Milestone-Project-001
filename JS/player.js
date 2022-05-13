const player = document.createElement('div')
document.body.append(player)

var width = innerWidth/15
var x = innerWidth/30
var y = innerHeight/3
var move = null

function pLook() {
    player.style.width = `${width}px`
    player.style.height = `${width}px`
    player.style.backgroundColor = `#000`

}
pLook()

function pPosition() {
    player.style.position = `fixed`

    switch (x) {
        case 0:
        case innerWidth-width:
            x = x 
            break;
    }

    function pMove() {    
        switch (move) {
            case `right`:
                x = x + 1
                break;
            case `left`:
                x = x - 1
                break;
        }
        player.style.left = `${x}px`
        player.style.bottom = `${y}px`
    }
    setInterval(pMove, 1)

    document.addEventListener('keydown', function(e) {
        switch (e.key) {
            case `ArrowRight`:
                move = 'right'
                break;
            case `ArrowLeft`:
                move = `left`
                break;
        }
    })
    
    document.addEventListener('keyup', function(e) {
        move = null
    })
}
pPosition()
