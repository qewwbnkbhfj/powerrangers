
/// Create canvas variable
var canvas= new fabric.Canvas("myCanvas");
block_y=1;
block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
   // to upload images
   fabric.Image.fromURL(get_image ,function(Img){
       block_image_object=Img;
       block_image_object.scaleToWidth(140);
       block_image_object.scaleToHeight(150);
     
         
     canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

   if(keyPressed == '82') // add appropriate keycode
   {
       // upload red ranger
       block_x=100;
       block_y=50;
       console.log("r key is pressed");
       new_image("rr.jpg");
   }
   if(keyPressed == '71')
   {
       block_x = 300;
       block_y=250;
       console.log("g key is pressed");
       new_image("gr.png");
       // upload green ranger
   }
   
   if(keyPressed == '89')
   {
       block_x =500;
       block_y=400;
       console.log("y key is pressed");
       new_image("yr.png");
       // upload yellow ranger
   }
   if(keyPressed == '80')
   {
       block_x = 650;
       block_y=500;
       console.log("p key is pressed");
       new_image("pr.png");
       // upload pink ranger
   }
   if(keyPressed == '66')
   {
       block_x = 750;
       block_y= 750;
       console.log("b key is pressed");
       new_image("br.png");
   // upload blue ranger
   }
   
}