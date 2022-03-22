window.addEventListener("keydown",my_keydown);
var canvas = new fabric.Canvas('myCanvas');
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img)
    {
        block_image_object = Img;
        block_image_object.scaleToWidth(150);
        block_image_object.scaleToHeight(140);
        block_image_object.set({
            top:block_y,
            left:block_x
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

if(keyPressed == '82')
{
	new_image('rr1.png');
	console.log("r");
}

if(keyPressed == '66')
    {
        new_image('br.png');
        console.log("b");
    }

	if(keyPressed == '71')
    {
        new_image('gr.png');
        console.log("g");
    }

	if(keyPressed == '80')
    {
        new_image('pr.png');
        console.log("p");
    }

	if(keyPressed == '89')
    {
        new_image('yr.png');
        console.log("y");
    }
	
}

