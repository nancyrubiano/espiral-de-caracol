basic.showIcon(IconNames.Happy)
let Luz = 0
let Temp = 0
let Sonido = 0
let Aceleración = 0
let Magnetica = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . # . .
            . . . . .
            `)
    } else if (input.buttonIsPressed(Button.AB)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # . .
            . . . . .
            `)
    } else if (input.pinIsPressed(TouchPin.P0)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # . .
            . # # . .
            . . . . .
            `)
    } else if (input.pinIsPressed(TouchPin.P1)) {
        basic.showLeds(`
            . . . . .
            . # . . .
            . # # . .
            . # # . .
            . . . . .
            `)
    } else if (input.pinIsPressed(TouchPin.P2)) {
        basic.showLeds(`
            . . . . .
            . # # . .
            . # # . .
            . # # . .
            . . . . .
            `)
    } else if (input.isGesture(Gesture.Shake)) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # . .
            . # # . .
            . . . . .
            `)
    } else if (input.isGesture(Gesture.LogoUp)) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # . .
            . . . . .
            `)
    } else if (input.isGesture(Gesture.LogoDown)) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (input.isGesture(Gesture.ScreenUp)) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . # .
            `)
    } else if (input.isGesture(Gesture.ScreenDown)) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . # # .
            `)
    } else if (input.isGesture(Gesture.ScreenDown)) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
    } else if (input.isGesture(Gesture.TiltLeft)) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            # # # # .
            `)
    } else if (input.isGesture(Gesture.TiltRight)) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            # # # # .
            # # # # .
            `)
    } else if (input.isGesture(Gesture.FreeFall)) {
        basic.showLeds(`
            . . . . .
            . # # # .
            # # # # .
            # # # # .
            # # # # .
            `)
    } else if (input.isGesture(Gesture.ThreeG)) {
        basic.showLeds(`
            . . . . .
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            `)
    } else if (input.isGesture(Gesture.Shake)) {
        basic.showLeds(`
            # . . . .
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            `)
    } else if (input.isGesture(Gesture.SixG)) {
        basic.showLeds(`
            # # . . .
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            `)
    } else if (input.isGesture(Gesture.EightG)) {
        basic.showLeds(`
            # # # . .
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            `)
    } else if (input.logoIsPressed()) {
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            `)
    } else if (Luz == input.lightLevel()) {
        basic.showLeds(`
            # # # # #
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            `)
    } else if (Temp == input.temperature()) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # .
            # # # # .
            # # # # .
            `)
    } else if (Sonido == input.soundLevel()) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # .
            # # # # .
            `)
    } else if (Aceleración == input.acceleration(Dimension.X)) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # .
            `)
    } else if (Magnetica == input.magneticForce(Dimension.X)) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    game.gameOver()
})
