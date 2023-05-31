input.onButtonPressed(Button.A, function () {
    pocet_kol += 1
    basic.showNumber(pocet_kol)
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    for (let index = 0; index < pocet_kol; index++) {
        basic.showString("START")
        start = false
        basic.pause(randint(1000, 5000))
        start = true
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        while (start) {
            if (input.pinIsPressed(TouchPin.P1)) {
                basic.showString("P1")
                start = false
            } else {
                if (input.pinIsPressed(TouchPin.P2)) {
                    basic.showString("P2")
                    start = false
                }
            }
        }
        basic.pause(3000)
        basic.clearScreen()
    }
    basic.showString("END")
    if (P1 > P2) {
        basic.showString("P1 won!")
    }
    if (P1 < P2) {
        basic.showString("P2 won!")
    }
})
let start = false
let pocet_kol = 0
let P2 = 0
let P1 = 0
P1 = 0
P2 = 0
pocet_kol = 0
basic.showLeds(`
    . . # . .
    . # . . .
    # # # # #
    . # . . .
    . . # . .
    `)
