// Create an array to store button colors

var busttonColor= ["red","green","yellow","blue"];

// create an array to store game patton

var gamePaton=[];

// create an array to store player selected color

var userClickedColor=[];

// create vaiable to store game level

var gameLevel=0;

// create vaiable to store game state

var gameState=false;

// Lisient to start game

$(document).keypress(function()
{
  if(!gameState)
  {
        gameState=true;

        // set game level to one
       
        nextPattern();
        // get random number

       

  }
});

// get the user clicked color

$(".btn").click(function()
{
    var userseleteedColor=$(this).attr("id");

    // add selected color to user color array

    userClickedColor.push(userseleteedColor);

    animateColor(userseleteedColor);

    PlaySounds(userseleteedColor);

    var lastelimentIndex=userClickedColor.length -1 ;

    if(userClickedColor[lastelimentIndex]===gamePaton[lastelimentIndex])
    {
        if(userClickedColor.length===gamePaton.length)
        {
            

            setTimeout(function(){
                userClickedColor=[];
                nextPattern();
            },1000);
        }
    }
    else
    {
          
       
            $("body").addClass("game-over");

            setTimeout(function()
            {
                    $("body").removeClass("game-over");
            },100)

            PlaySounds("wrong")

            $("h1").text("Game over, press any key to restart the game");
             resetGame();
    }
       
});

function PlaySounds(randomclor)
{
    var audion=new Audio("sounds/"+randomclor+".mp3");

    audion.play();
}

function animateColor(selectcolor)
{
    $("#"+selectcolor).addClass("selected-color");

    setTimeout(function()
    {
            $("#"+selectcolor).removeClass("selected-color");
    },100)
}
function nextPattern()
{
    gameLevel++;

    $("h1").text("Your level is "+gameLevel);

    var randomNumber= Math.floor( Math.random()*4);

    var randomColor = busttonColor[randomNumber];

    PlaySounds(randomColor);
   

    // animate selected color

    animateColor(randomColor);


    // add random color to the game patton

    gamePaton.push(randomColor);
}

function resetGame()
{
    gameState=false;
    gameLevel=0;
    userClickedColor=[];
    gamePaton=[];
}