namespace SpriteKind {
    export const spawn = SpriteKind.create()
}
function hero_ () {
    mySprite = sprites.create(img`
. . . . 1 1 1 1 1 e . . . . . . 
. . . 1 1 1 1 d 1 1 e . . . . . 
. . e 1 1 1 1 1 1 1 e . . . . . 
. . e 1 1 1 1 1 1 1 e . . . . . 
. . e 1 1 1 1 1 e f f . . . . . 
. . e e 2 2 e f f f f . . . . . 
. e e e f e 2 b f f f f f f . . 
e e 2 2 d f 2 e f f f f f f f . 
e e 2 2 d f e c f f f f f f f f 
b 1 1 d e e c 4 f f f f f f f f 
. f f e e e e 4 f f f f f f f . 
. . f f d d e 4 f f f f f f . . 
. . f f d d e c f f c d . . . . 
. . . f f f f . . . . . . . . . 
. . f f f e e e . . . . . . . . 
. . f f f f e e e . . . . . . . 
`, SpriteKind.Player)
}
scene.onHitTile(SpriteKind.Player, 13, function (sprite) {
    mySprite.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f f f . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f f f . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f f f . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f f f . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f f f . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f f f . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`)
    game.over(true)
})
/**
 * game over when sprite reaches the end
 */
scene.onHitTile(SpriteKind.Player, 11, function (sprite) {
    game.over(true)
})
scene.onHitTile(SpriteKind.Player, 14, function (sprite) {
    game.over(false)
})
function tile () {
    scene.setTile(7, img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
6 6 7 6 7 6 7 6 6 e 6 7 7 6 7 7 
e e 6 7 7 6 7 e e e 7 6 e 6 7 6 
e e e e e e 6 e e e e e e e 6 e 
e e e e e e e e e e e e e e e e 
e b b e c e e e e e c e e e e e 
e b b e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e b e e e e e e e c e 
e e e e e e e e e e e e e e e e 
e e b e e e e e e e e b b e e e 
e e e e e e e e e e e b b e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e c e e e e e e e e 
e e e e e e e e e e e e e e c e 
`, true)
    scene.setTile(14, img`
9 9 9 9 9 2 9 9 9 9 9 9 2 9 9 9 
2 9 9 9 2 2 2 9 9 9 9 2 2 2 9 2 
2 2 9 2 2 2 2 2 2 9 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, true)
    scene.setTile(11, img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 f f 9 9 9 9 9 9 9 
9 9 9 9 9 9 f 2 2 f 9 9 9 9 9 9 
9 9 9 9 9 f 2 2 2 2 f 9 9 9 9 9 
9 9 9 9 f 2 2 2 2 2 2 f 9 9 9 9 
9 9 9 f 2 2 2 2 2 2 2 2 f 9 9 9 
9 9 9 f 2 2 2 2 2 2 2 2 f 9 9 9 
9 9 9 f 2 2 2 2 2 2 2 2 f 9 9 9 
9 9 9 f 2 2 2 2 2 2 2 2 f 9 9 9 
9 9 9 f 2 2 2 2 2 2 2 2 f 9 9 9 
9 9 9 9 f 2 2 2 2 2 2 f 9 9 9 9 
9 9 9 9 9 f 2 2 2 2 f 9 9 9 9 9 
9 9 9 9 9 9 f 2 2 f 9 9 9 9 9 9 
9 9 9 9 9 9 9 f f 9 9 9 9 9 9 9 
`, true)
    scene.setTile(12, img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`, false)
}
/**
 * score up by 1 when coin is collected
 */
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.starField, 100)
    info.changeScoreBy(1)
})
scene.onHitTile(SpriteKind.Player, 5, function (sprite) {
    mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . f f f f f f f f f f f f . . 
. . f f f f f f f f f f f f . . 
. . f f f f f f f f f f f f . . 
. . f f f f f f f f f f f f . . 
. . f f f f f f f f f f f f . . 
. . f f f f f f f f f f f f . . 
. . f f f f f f f f f f f f . . 
. . f f f f f f f f f f f f . . 
. . f f f f f f f f f f f f . . 
. . f f f f f f f f f f f f . . 
. . f f f f f f f f f f f f . . 
. . f f f f f f f f f f f f . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    scene.setTile(5, img`
e e e e e e e e e e e e e e e e 
e f f e e e e e e e e e e f f e 
e f f e e e e e e e e e e f f e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e f f e e e e e e e e e e f f e 
e f f e e e e e e e e e e f f e 
e e e e e e e e e e e e e e e e 
`, false)
})
scene.onHitTile(SpriteKind.Player, 10, function (sprite) {
    mySprite.setPosition(25, 460)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f f f . . . . . . 
. . . . . . . f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, mySprite, 500, 0)
})
function enemy () {
    for (let value33 of scene.getTilesByType(12)) {
        spawn2 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . d d d d d . . . . . . . . . . 
. . . . . . . . d d d d d d d d . . . . . . . . 
. . . . . . . d d d d d d d d d d . . . . . . . 
. . . . . . . d d d d d d d d d d . . . . . . . 
. . . . . . d d d d d d d d d d d . . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . d d d d d d d d d d d d d . . . . . . 
. . . . d d d d d d d d d d d d d d d . . . . . 
. . . . d d d d d d d d d d d d d d d . . . . . 
. . . . d d d d d d d d d d d d d d d . . . . . 
. . . . d d d d d d d d d d d d d d d . . . . . 
. . . . . d d d d d d d d d d d d d . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.spawn)
        value33.place(spawn2)
    }
}
scene.onHitTile(SpriteKind.Player, 2, function (sprite) {
    mySprite.setPosition(25, 23)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    let enemy1: Sprite = null
    if (mySprite.y < enemy1.y) {
        otherSprite.destroy(effects.disintegrate, 100)
    } else {
        otherSprite.destroy(effects.disintegrate, 100)
        mySprite.destroy(effects.disintegrate, 100)
        info.changeLifeBy(-1)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.spawn, function (sprite, otherSprite) {
    otherSprite.destroy()
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -150
    }
})
/**
 * life points
 */
/**
 * sprite( main character)
 */
/**
 * mape title
 */
/**
 * map of everything and their locations
 */
/**
 * background color
 */
/**
 * sprites position in the game when it starts
 */
/**
 * speed of movement
 */
/**
 * sets coin to food so sprite can collect
 */
let projectile: Sprite = null
let spawn2: Sprite = null
let coin: Sprite = null
let mySprite: Sprite = null
hero_()
enemy()
tile()
game.showLongText("arrow keys to move", DialogLayout.Bottom)
info.setLife(24)
scene.setTileMap(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . 9 . 9 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 9 . . . . . . c . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . 5 . . . . . 9 . c . . . 9 . . 7 7 7 7 7 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . 9 . . . 7 . . . 7 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . c . . 7 . . . . . . . . . . . 9 9 9 9 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 7 7 7 . . . . . . . . . 7 7 . . . . c c . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 7 7 7 . . . 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . . . 7 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . 7 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
`)
scene.setTileMap(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 7 7 . 7 7 . 7 . 7 7 7 . 7 7 . 7 7 7 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . 7 7 . 7 . 7 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b . 
. . . . . 7 . . . . . . 9 . . . . . . c . . . . . 9 . . . . . . . 9 9 . . . . . . . . . . 9 9 9 . . . . . . . . . . b . 
. . 5 . . 7 . . 9 . . . . . 9 . . 7 7 7 7 7 . . 7 7 7 . . . . . . . . . . . 9 . 7 9 9 9 7 . 9 . . . . . . . . 7 . . 7 . 
. . . . 7 . 9 . . . 7 . . . 7 . . . . . . . . . . . . . . . . . . . . c . . . . . 7 . 7 . . . . . . . . 7 . . . . . . . 
. . . c . . 7 . . . . . . . . . . . . 9 9 . . . c . . 9 . . 7 . 7 . . 7 . . 7 . . . 7 . . . . . . 7 . . . . . . . . . . 
. 7 7 7 . . . . . . . c . . . . . . . c c . . . 7 . . 7 . . . . . . . . . . . . . . . . . . 7 . . . . . . . 7 . c . 7 . 
. . . . 7 7 . . . . . 7 . . 7 . . . 7 7 7 7 . . . . . . . . . . . . . . . . . . . . . . . c . . . . . . c . . . 7 . . . 
. . . . . . 7 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 . 7 . . 7 . 7 . . . . . . . 
. . . . . . . . . 7 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
`)
scene.setBackgroundColor(9)
mySprite.setPosition(27, 120)
scene.cameraFollowSprite(mySprite)
// to enable flying, set the vy value to 0 or less
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 200
scene.setTile(7, img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
6 6 7 6 7 6 7 6 6 e 6 7 7 6 7 7 
e e 6 7 7 6 7 e e e 7 6 e 6 7 6 
e e e e e e 6 e e e e e e e 6 e 
e e e e e e e e e e e e e e e e 
e b b e c e e e e e c e e e e e 
e b b e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e b e e e e e e e c e 
e e e e e e e e e e e e e e e e 
e e b e e e e e e e e b b e e e 
e e e e e e e e e e e b b e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e c e e e e e e e e 
e e e e e e e e e e e e e e c e 
`, true)
scene.setTile(12, img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`, false)
for (let value23 of scene.getTilesByType(9)) {
    coin = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f 5 5 5 5 f f . . . . 
. . . f f 5 5 5 5 5 5 f f . . . 
. . . f 5 5 5 5 5 5 5 5 f . . . 
. . f 5 5 5 5 5 5 5 5 5 5 f . . 
. . f 5 5 5 5 5 5 5 5 5 5 f . . 
. . f 5 5 5 5 5 5 5 5 5 5 f . . 
. . f 5 5 5 5 5 5 5 5 5 5 f . . 
. . f 5 5 5 5 5 5 5 5 5 5 f . . 
. . . f 5 5 5 5 5 5 5 5 f . . . 
. . . f f 5 5 5 5 5 5 f f . . . 
. . . . f f 5 5 5 5 f f . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
    value23.place(coin)
}
// gravity
mySprite.ay = 350
for (let value33 of scene.getTilesByType(12)) {
    spawn2 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . d d d d d . . . . . . . . . . 
. . . . . . . . d d d d d d d d . . . . . . . . 
. . . . . . . d d d d d d d d d d . . . . . . . 
. . . . . . . d d d d d d d d d d . . . . . . . 
. . . . . . d d d d d d d d d d d . . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . d d d d d d d d d d d d d . . . . . . 
. . . . d d d d d d d d d d d d d d d . . . . . 
. . . . d d d d d d d d d d d d d d d . . . . . 
. . . . d d d d d d d d d d d d d d d . . . . . 
. . . . d d d d d d d d d d d d d d d . . . . . 
. . . . . d d d d d d d d d d d d d . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.spawn)
    value33.place(spawn2)
}
