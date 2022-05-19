// const player = document.createElement('div')
// playArea.append(player)

// var pWidth = Math.floor(aWidth/20)
// var pX = Math.floor(aWidth/2)
// var pY = Math.floor(aHeight/1.25)
// var pMove = null

// console.log(`Left: ${sLeft}`)
// console.log(`Right: ${sRight}`)
// console.log(`Up: ${sUp}`)
// console.log(`Down: ${sDown}`)


// function pDesign(w, h, c) {
//     player.style.width = w
//     player.style.height = h
//     player.style.backgroundColor = c
// }
// pDesign(`${pWidth}px`, `${pWidth}px`, `#000`)

// function pPosition() {
//     player.style.position = `fixed`
//     player.style.left = `${pX}px`
//     player.style.bottom = `${pY}px`
    
//     function pDownMove() {
//         switch (pY) {
//             case sUp[0]:
//                 switch (pX) {
//                     case sLeft[0] - pWidth:
//                     case sRight[0]:
//                         pY -= 1 
//                         break;
//                     default:
//                         pY = pY
//                         break;
//                 }
//                 break;
//             case sUp[1]:
//                 switch (pX) {
//                     case sLeft[1] - pWidth:
//                         case sRight[1]:
//                         pY -= 1 
//                         break;
//                     default:
//                         pY = pY
//                         break;
//                 }
//                 break;
//             default:
//                 pY -= 1
//                 break;
//         }
//         player.style.bottom = `${pY}px`
//     }
//     setInterval(pDownMove, 1)
    
//     function pHorizontalMove() {
//         switch (pMove) {
//             case `right`:
//                 switch (pX + pWidth) {
//                     case aRight:
//                         pX = pX
//                         break;
//                     case sLeft[0]:
//                         pX = pX
//                         break;
//                     case sLeft[1]:
//                         switch (pX + pWidth >= sLeft) {
//                             case true:
//                                 // switch (pY < sUp[1] && pY + pWidth > sDown[1]) {
//                                 //     case true:
//                                 //         console.log(`${pY} and ${sUp[1]}`)
//                                 //         console.log(`${pY + pWidth} and ${sDown[1]}`)
//                                 //         pX = pX
//                                 //         break;
//                                 //     default:
//                                 //         pX += 1
//                                 //         break;
//                                 //     }
//                                 // break;
//                                 pX = pX
//                                 break;
//                         }
//                     default:
//                         pX += 1
//                         break;
//                 }
//                 break;
//             case `left`:
//                 switch (pX) {
//                     case aLeft:
//                         pX = pX
//                         break;
//                     default:
//                         pX -= 1
//                         break;
//                 }
//                 break;
//         }
//         player.style.left = `${pX}px`
//     }
//     setInterval(pHorizontalMove, 1)    

//     document.addEventListener(`keydown`, function(e) {
//         switch (e.key) {
//             case `ArrowRight`:
//                 pMove = `right`
//                 break;
//             case `ArrowLeft`:
//                 pMove = `left`
//                 break;
//         }
//     })
    
//     document.addEventListener(`keyup`, function(e) {
//         switch (e.key) {
//             case `ArrowRight`:
//                 pMove = null
//                 break;
//             case `ArrowLeft`:
//                 pMove = null
//                 break;
//         }
//     })
// }
// pPosition()
