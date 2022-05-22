var player = document.createElement('div')

var pWidth = Math.floor(aWidth/20)
var pX = Math.floor(aWidth/2)
var pDown = `fall`

function pDesign(w, h, c) {
    player.style.width = w
    player.style.height = h
    player.style.backgroundColor = c
}    
pDesign(`${pWidth}px`, `${pWidth}px`, `#000`)

function pPosition() {
    playArea.append(player)
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