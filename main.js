canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_x = 10;
rover_y = 10;
rover_width = 120;
rover_height = 90;
rover_img = "car1.png";

car2_x = 10;
car2_y = 110;
car2_width = 120;
car2_height = 100;
car2_img = "car2.png"
background_img = "trackcar.jpg";

function add()
{
    background_img_tag = new Image();
    background_img_tag.onload = uploadBackground;
    background_img_tag.src = background_img;
    
    rover_image_tag = new Image();
    rover_image_tag.onload = uploadRover;
    rover_image_tag.src = rover_img;
    
    car2_tag = new Image();
    car2_tag.onload = uploadCar2;
    car2_tag.src = car2_img;

}

function uploadBackground()
{
    ctx.drawImage(background_img_tag, 0, 0, canvas.width, canvas.height);
}

function uploadRover()
{
   ctx.drawImage(rover_image_tag, rover_x, rover_y,rover_width, rover_height)
}
function uploadCar2()
{
    ctx.drawImage(car2_tag, car2_x, car2_y, car2_width, car2_height)
}
window.addEventListener("keydown", my_keydown)
function my_keydown(e)
{
    var keyPressed = e.keyCode;
    console.log(keyPressed)
     
    if(keyPressed == '37')
    {
        left()
        console.log("left")
    }
    if(keyPressed == '38')
    {
        up()
        console.log("up")
    }

    if(keyPressed == '39')
    {
        right()
        console.log("right")
    }
     
    if(keyPressed == '40')
    {
        down()
        console.log("down")
    }
    if(keyPressed == '65')
    {
        left1()
        console.log("a")
    }
    if(keyPressed == '68')
    {
        right1()
        console.log("d")
    }
    if(keyPressed == '87')
    {
        up1()
        console.log("w")
    }
    if(keyPressed == '83')
    {
        down1()
        console.log("s")
    }
}

function right()
{
    if(rover_x < 700)
    {
    rover_x = rover_x + 10;
    console.log(rover_x)
    uploadBackground()
    uploadRover()
    uploadCar2()
    }
}

function left()
{
    if(rover_x > 0)
    {
    rover_x = rover_x - 10;
    console.log(rover_x)
    uploadBackground()
    uploadRover()
    uploadCar2()
    }
}

function up()
{
    if(rover_y > 0)
    {
    rover_y = rover_y - 10;
    console.log(rover_y)
    uploadBackground()
    uploadRover()
    uploadCar2()
    }
}

function down()
{
    if(rover_y < 500)
    {
    rover_y = rover_y + 10;
    console.log(rover_y)
    uploadBackground()
    uploadRover()
    uploadCar2()
    }
}

function right1()
{
    if(car2_x < 700)
    {
    car2_x = car2_x + 10;
    console.log(car2_x)
    uploadBackground()
    uploadRover()
    uploadCar2()
    }
}

function left1()
{
    if(car2_x > 0)
    {
    car2_x = car2_x - 10;
    console.log(car2_x)
    uploadBackground()
    uploadRover()
    uploadCar2()
    }
}

function up1()
{
    if(car2_y > 0)
    {
    car2_y = car2_y - 10;
    console.log(car2_y)
    uploadBackground()
    uploadRover()
    uploadCar2()
    }
}

function down1()
{
    if(car2_y < 500)
    {
        car2_y = car2_y + 10;
    console.log(car2_y)
    uploadBackground()
    uploadRover()
    uploadCar2()
    }
}