scene.setBackgroundImage(assets.image`D t - o`)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 4 4 4 4 . . . . . . 
    . . . . 4 4 4 4 4 4 4 4 . . . . 
    . . . 4 f 4 4 4 4 4 f 4 4 . . . 
    . . 4 4 4 f 4 4 4 f 4 4 4 4 . . 
    . . 4 4 4 4 f f f 4 4 4 4 4 . . 
    . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
    . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
    . f f f f f f f f f f f f f f . 
    . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
    . . 4 4 4 4 f f f 4 4 4 4 4 . . 
    . . 4 4 4 f 4 4 4 f 4 4 4 4 . . 
    . . . 4 f 4 4 4 4 4 f 4 4 . . . 
    . . . . 4 4 4 4 4 4 4 4 . . . . 
    . . . . . . 4 4 4 4 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(67, 101)
let Gender = game.askForString("Male or Female or others?")
let Position = game.askForString("Center, forward or guard?")
if (Gender == "male") {
    if (Gender == "male" && Position == "center") {
        mySprite.sayText("Jordan 1")
    } else if (Gender == "male" && Position == "forward") {
        mySprite.sayText("Jordan 1")
    } else if (Gender == "male" && Position == "guard") {
        mySprite.sayText("Jordan 1")
    } else {
        mySprite.sayText("No recommendation.")
    }
} else if (Gender == "female") {
    if (Gender == "female" && Position == "center") {
        mySprite.sayText("Jordan 1")
    } else if (Gender == "female" && Position == "forward") {
        mySprite.sayText("Jordan 1")
    } else if (Gender == "female" && Position == "guard") {
        mySprite.sayText("Jordan 1")
    } else {
        mySprite.sayText("No recommendation.")
    }
} else if (Gender == "others") {
    if (Gender == "others" && Position == "center") {
        mySprite.sayText("Jordan 1")
    } else if (Gender == "others" && Position == "forward") {
        mySprite.sayText("Jordan 1")
    } else if (Gender == "others" && Position == "guard") {
        mySprite.sayText("Jordan 1")
    } else {
        mySprite.sayText("No recommendation.")
    }
} else {
    mySprite.sayText("Sorry, not enough information was given.")
}
