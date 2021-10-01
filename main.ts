function Whole_Wall_1 () {
    Wall_0 = game.createSprite(4, 0)
    Wall_3 = game.createSprite(4, 3)
    Wall_4 = game.createSprite(4, 4)
}
input.onButtonPressed(Button.A, function () {
    bird.change(LedSpriteProperty.Y, -1)
})
function Wall_Move () {
    Wall_0.change(LedSpriteProperty.X, -1)
    Wall_1.change(LedSpriteProperty.X, -1)
    Wall_2.change(LedSpriteProperty.X, -1)
    Wall_3.change(LedSpriteProperty.X, -1)
    Wall_4.change(LedSpriteProperty.X, -1)
}
let Wall_4: game.LedSprite = null
let Wall_3: game.LedSprite = null
let Wall_2: game.LedSprite = null
let Wall_1: game.LedSprite = null
let Wall_0: game.LedSprite = null
let rng = 0
let bird: game.LedSprite = null
let wall_time = 0
bird = game.createSprite(1, 2)
while (true) {
    wall_time += 1
    if (wall_time >= 7) {
        wall_time = 0
        rng = 0
        if (rng == 0) {
            Whole_Wall_1()
        }
    } else {
        if (Wall_0.isTouchingEdge()) {
            Wall_0.delete()
            Wall_1.delete()
            Wall_2.delete()
            Wall_3.delete()
            Wall_4.delete()
        } else {
            Wall_Move()
        }
    }
    bird.change(LedSpriteProperty.Y, 1)
    basic.pause(500)
}
basic.forever(function () {
	
})
