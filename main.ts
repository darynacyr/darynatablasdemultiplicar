let variable2 = 0
let variable1 = 0
input.onPinPressed(TouchPin.P0, function () {
    variable2 = 5
    basic.showNumber(variable2)
    variable1 = randint(0, 10)
    basic.showNumber(variable1)
    basic.showNumber(variable2 * variable1)
})
input.onButtonPressed(Button.A, function () {
    variable2 = 3
    basic.showNumber(variable2)
    variable1 = randint(0, 10)
    basic.showNumber(variable1)
    basic.showNumber(variable2 * variable1)
})
input.onPinPressed(TouchPin.P2, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    variable2 = 4
    basic.showNumber(variable2)
    variable1 = randint(0, 10)
    basic.showNumber(variable1)
    basic.showNumber(variable2 * variable1)
})
input.onButtonPressed(Button.B, function () {
    variable2 = 2
    basic.showNumber(variable2)
    variable1 = randint(0, 10)
    basic.showNumber(variable1)
    basic.showNumber(variable2 * variable1)
})
input.onPinPressed(TouchPin.P1, function () {
    variable2 = 6
    basic.showNumber(variable2)
    variable2 = randint(0, 10)
    basic.showNumber(variable1)
    basic.showNumber(variable2 * variable1)
})
