var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")

}

function setup() {

	createCanvas(800, 700);

	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	redBox_bot = Bodies.rectangle(width/2, 650, 200, 20 , {isStatic:true} );
	World.add(world, redBox_bot);

	redBox_left = Bodies.rectangle(310, 610, 20, 100 , {isStatic:true} );
	World.add(world, redBox_left);

	redBox_rig = Bodies.rectangle(490, 610, 20,100 , {isStatic:true} );
	World.add(world, redBox_bot);	
	

	Engine.run(engine);
  
}

function draw() {

  rectMode(CENTER);

  background(0);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  pos = redBox_bot.position;
  pos2 = redBox_left.position;
  pos3 = redBox_rig.position

  fill("red");
  stroke(0);
  rect(pos.x , pos.y , 200 , 20);
  rect(pos2.x , pos2.y , 20 , 100);
  rect(pos3.x , pos3.y , 20 , 100);
 
  if(keyDown("down")) {

	Body.setStatic(packageBody,false)

  }

  drawSprites();
 
}

// function keyPressed() {
//  if (keyCode === DOWN_ARROW) {
//     // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

   
//   }
// }



