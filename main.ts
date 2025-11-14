enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const Gap = SpriteKind.create()
}
let mySprite: Sprite = null
let gap = 0
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -100
    animation.setAction(mySprite, ActionKind.Walking)
    mySprite.startEffect(effects.rings, 300)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Gap, function (sprite, otherSprite) {
    if (otherSprite.right - sprite.left < 2) {
        info.changeScoreBy(1)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
game.onUpdate(function () {
    if (mySprite.vy > 0) {
        animation.setAction(mySprite, ActionKind.Walking)
    }
    if (mySprite.bottom > 120 || mySprite.top < 0) {
        game.over(false)
    }
})
game.onUpdateInterval(1500, function () {
    gap = randint(0, 3)
})
