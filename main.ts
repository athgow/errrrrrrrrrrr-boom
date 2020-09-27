music.setVolume(255)
basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    if (maqueen.Ultrasonic(PingUnit.Centimeters) <= 10) {
        maqueen.motorStop(maqueen.Motors.All)
        music.playMelody("C D C D E F E D ", 120)
        basic.pause(1000)
    }
    basic.pause(200)
})
