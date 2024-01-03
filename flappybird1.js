//board 
let board ;
let boardWidth = 360;
let boardHeight = 640;
let context ;


//bird 
let birdWidth = 34; //width/height ratio = 400/228 = 17/12
let birdHeight = 24;
let birdX = boardWidth/8;
let birdY = boardHeight/2;
let birdImg;


let bird = {
    x : birdX,
    y : birdY,
    width: birdWidth,
    height: birdHeight,

}

//variables for the pipes 
let pipeArray = [] //array because we need do have multiple pipes 
let pipeWidth  = 64 ; 
let pipeWeight = 512;
let pipeX = boardWidth;
let pipeY = 0 ;


let toppipeImg;
let bottompipeImg;


//physics which used in the game of bird 
let velocity  = -2; //pipes moving left speed 


window.onload = function(){
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d"); //used for drawing on the board 
    


    //draw a flappybrid 
   // context.fillStyle = "green";
   // context.fillRect(bird.x , bird.y , bird.width , bird.height);

    //load image 
    birdImg = new Image();
    birdImg.src = "./flappybird.png";
    birdImg.onload = function(){
    context.drawImage(birdImg , bird.x , bird.y , bird.width , bird.height);
    }
    toppipeImg= new Image();
    toppipeImg.src = "./toppipe.png";

    bottompipeImg = new Image();
    bottompipeImg.src = "./bottompipe.png";


    requestAnimationFrame(update);
    setInterval(placePipes , 1500);  //every 1.5 Seconds 


}
function update(){
    requestAnimationFrame(update);
    context.clearRect(0,0,board.width , board.height);

    //bird 
    context.drawImage(birdImg , bird.x , bird.y , bird.width , bird.hight );


    //pipes
    //basic logical code is here 
    for(let i = 0 ;  i <pipeArray.length ; i++){
        let pipe = pipeArray[i];
        pipe.X += velocityX;

        context.drawImage(pipe.img , pipe.x , pipe.y , pipe.width , pipe.height);


    }



}
function placePipes(){

    let randomPipeY = pipeY - pipeHeight/4 - Math.random()*(pipeHeight/2);//what is do ?
    let openingSpace  = board.height/4;



    let topPipe = {
        img : topPipeImg,
        x : pipeX,
        y : randomPipeY,
        width : pipeWidth ,
        height : pipeHeight,
        passed : false 


    }

    pipeArray.push(topPipe);

    let bottomPipe = {
        img : bottompipeImg,
        x : pipeX,
        y : randomPipeY + pipeHeinght + openingSpace,
        width : pipeWidth,
        height : pipeHeight,
        passed : false,
    
    



        

    }
    pipeArray.push(bottomPipe)
}