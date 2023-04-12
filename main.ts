basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    basic.clearScreen()
})
