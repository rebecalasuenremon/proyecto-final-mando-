input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(0)
})
radio.setGroup(185)
basic.forever(function () {
    if (input.rotation(Rotation.Roll) > 75) {
        radio.sendNumber(2)
    }
    if (input.rotation(Rotation.Roll) < -75) {
        radio.sendNumber(3)
    }
})
