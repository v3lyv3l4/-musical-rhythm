music.setTempo(120)
basic.forever(function () {
    music.setVolume(127)
    music.playTone(988, music.beat(BeatFraction.Half))
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    music.setVolume(127)
    music.playTone(880, music.beat(BeatFraction.Half))
    basic.showLeds(`
        . . . . .
        . # . # .
        . # # # .
        . . # . .
        . . . . .
        `)
})
