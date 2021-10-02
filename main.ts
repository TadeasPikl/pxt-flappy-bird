function Whole_Wall_1 () {
    Wall_0 = game.createSprite(4, 0)
    Wall_3 = game.createSprite(4, 3)
    Wall_4 = game.createSprite(4, 4)
}
function Whole_Wall_3 () {
    Wall_2 = game.createSprite(4, 2)
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
input.onButtonPressed(Button.B, function () {
    bird.change(LedSpriteProperty.Y, -1)
})
function Reset_wall () {
    Wall_0 = game.createSprite(4, 0)
    Wall_1 = game.createSprite(4, 1)
    Wall_2 = game.createSprite(4, 2)
    Wall_3 = game.createSprite(4, 3)
    Wall_4 = game.createSprite(4, 4)
    Wall_0.delete()
    Wall_1.delete()
    Wall_2.delete()
    Wall_3.delete()
    Wall_4.delete()
}
function Whole_Wall_2 () {
    Wall_0 = game.createSprite(4, 0)
    Wall_1 = game.createSprite(4, 1)
    Wall_4 = game.createSprite(4, 4)
}
let Wall_3: game.LedSprite = null
let Wall_2: game.LedSprite = null
let Wall_1: game.LedSprite = null
let Wall_4: game.LedSprite = null
let Wall_0: game.LedSprite = null
let rng = 0
let bird: game.LedSprite = null
Reset_wall()
let current_score = 13
game.setScore(0)
let wall_time = 6
bird = game.createSprite(1, 2)
while (true) {
    wall_time += 1
    if (wall_time >= 7) {
        wall_time = 0
        rng = randint(1, 3)
        if (rng == 1) {
            Whole_Wall_1()
        } else {
            if (rng == 2) {
                Whole_Wall_2()
            } else {
                if (rng == 3) {
                    Whole_Wall_3()
                }
            }
        }
    } else {
        if (!(Wall_0.isDeleted()) || !(Wall_4.isDeleted())) {
            if (wall_time == 5) {
                current_score += 1
                Wall_0.delete()
                Wall_1.delete()
                Wall_2.delete()
                Wall_3.delete()
                Wall_4.delete()
            } else {
                Wall_Move()
            }
        }
    }
    if (bird.get(LedSpriteProperty.X) == Wall_0.get(LedSpriteProperty.X) && bird.get(LedSpriteProperty.Y) == Wall_0.get(LedSpriteProperty.Y) && !(Wall_0.isDeleted()) || bird.get(LedSpriteProperty.X) == Wall_1.get(LedSpriteProperty.X) && bird.get(LedSpriteProperty.Y) == Wall_1.get(LedSpriteProperty.Y) && !(Wall_1.isDeleted()) || (bird.get(LedSpriteProperty.X) == Wall_2.get(LedSpriteProperty.X) && bird.get(LedSpriteProperty.Y) == Wall_2.get(LedSpriteProperty.Y) && !(Wall_2.isDeleted()) || bird.get(LedSpriteProperty.X) == Wall_3.get(LedSpriteProperty.X) && bird.get(LedSpriteProperty.Y) == Wall_3.get(LedSpriteProperty.Y) && !(Wall_3.isDeleted()) || bird.get(LedSpriteProperty.X) == Wall_4.get(LedSpriteProperty.X) && bird.get(LedSpriteProperty.Y) == Wall_4.get(LedSpriteProperty.Y) && !(Wall_4.isDeleted()))) {
        game.setScore(current_score)
        game.gameOver()
    }
    bird.change(LedSpriteProperty.Y, 1)
    if (current_score >= 20) {
        basic.pause(280 - 3 * current_score)
    } else {
        if (current_score >= 14) {
            basic.pause(300)
        } else {
            if (current_score >= 7) {
                basic.pause(350)
            } else {
                basic.pause(700 - 50 * current_score)
            }
        }
    }
}
basic.forever(function () {
	
})
