
let p = 0

//Pause Menu
document.addEventListener(`keydown`, function(e) {
    switch (e.code) {
        case `KeyP`:
            switch (p) {
                case 1:
                    console.log(`Pause menu gone`)
                    pauseArea.remove()
                    p = 0
                    break;
                default:
                    console.log(`P pressed`)
                    pause()
                    p = 1
                    break;
            }
            break;
    }
})
