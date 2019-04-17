// Rover Object Goes Here
// ======================
var rover = { dir: 'N' };
var posX=0;
var posY=0;
var com;
var tl=[];
var travel =[];

// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.dir) {
    case "N":
      rover.dir="w";      
      break;
    case "W":
      rover.dir="S";
      break;
    case "S":
      rover.dir="E";
      break;
    case "E":
      rover.dir="N";
      break;
  }
  console.log("Rover direcrion is: " + rover.dir);
  return rover.dir;
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.dir) {
    case "N":
      rover.dir="E";      
      break;
    case "W":
      rover.dir="N";
      break;
    case "S":
      rover.dir="W";
      break;
    case "E":
      rover.dir="S";
      break;
  }
  console.log("Rover direcrion is: " + rover.dir);
  return rover.dir;
}

function moveForward(rover){
  console.log("moveForward was called")

  switch (rover.dir) {
    case "W":
      posX--;
      break;
    case "S":
      posY++;
      break;
    case "E":
      posX++;
      break;
    case "N":
      posY--;      
      break;
  
  }
  console.log("Rover position is: ["+ posX +","+posY+"]");
  return posX, posY;
}

  

function command(str){
  for(let i=0;i<str.length;i++){ 
    if(str[i]=="f"){
      console.log(str[i]);
      moveForward(rover);
      travel.push([rover.dir, posX, posY]);
      console.log();
    }
    else if(str[i] == "r"){
      console.log(str[i]);
      turnRight(rover);
      travel.push([rover.dir, posX, posY]);
      console.log(travel);
    }
    else if (str[i] == "l"){
      console.log(str[i]);
      turnLeft(rover);
      travel.push([rover.dir, posX, posY]);
      console.log(travel);
    }
    else{
      console.log("only r for turning right, l for turning left and f for moving forward")
    }    
  }
}
command('rffrfflfrff');