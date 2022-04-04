input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendNumber(4)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(0)
})
music.playMelody("A F E F D G E F ", 120)
basic.showString("Hola")
radio.setGroup(185)
basic.forever(function () {
    if (input.rotation(Rotation.Roll) > 75) {
        radio.sendNumber(2)
    }
    if (input.rotation(Rotation.Roll) < -75) {
        radio.sendNumber(3)
    }
})
