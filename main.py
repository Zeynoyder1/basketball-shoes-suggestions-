scene.set_background_image(assets.image("""
    D t - o
"""))
mySprite = sprites.create(img("""
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
    """),
    SpriteKind.player)
mySprite.set_position(67, 101)
Gender = game.ask_for_string("Male or Female or others?")
Position = game.ask_for_string("Center, forward or guard?")
if Gender == "male":
    if Gender == "male" and Position == "center":
        mySprite.say_text("Jordan 1")
    elif Gender == "male" and Position == "forward":
        mySprite.say_text("Jordan 1")
    elif Gender == "male" and Position == "guard":
        mySprite.say_text("Jordan 1")
    else:
        mySprite.say_text("No recommendation.")
elif Gender == "female":
    if Gender == "female" and Position == "center":
        mySprite.say_text("Jordan 1")
    elif Gender == "female" and Position == "forward":
        mySprite.say_text("Jordan 1")
    elif Gender == "female" and Position == "guard":
        mySprite.say_text("Jordan 1")
    else:
        mySprite.say_text("No recommendation.")
elif Gender == "others":
    if Gender == "others" and Position == "center":
        mySprite.say_text("Jordan 1")
    elif Gender == "others" and Position == "forward":
        mySprite.say_text("Jordan 1")
    elif Gender == "others" and Position == "guard":
        mySprite.say_text("Jordan 1")
    else:
        mySprite.say_text("No recommendation.")
else:
    mySprite.say_text("Sorry, not enough information was given.")