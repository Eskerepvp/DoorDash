
document.getElementById("gamesButton").addEventListener("click", injectGames);

document.getElementById("bypassButton").addEventListener("click", injectBypass);

document.getElementById("consoleButton").addEventListener("click", injectConsole);

document.getElementById("backArrowButton").addEventListener("click", goBack);


// button functions

function injectGames() {
  document.body.innerHTML = '<body> <style> body {  background-color:#161923; color:white; font-family: "Lucida Console", "Courier New", monospace; }  .gameButton { border: none; color: white; font-size: 18px; transition-duration: 0.4s; cursor: pointer; border-radius: 25px; height: 25px; width: 25px; border-radius: 50%; display: inline-block; } .button1 { background-color: #161923;  color: white;  border: 2px solid #161923; } .button1:hover { background-color: #52525e; color: white; } .bbaDiv { text-align: left; } .gamesDiv { text-align: center; } </style> <div class="bbaDiv"> <button class="gameButton button1" id="backArrowButton" onclick="goBack()"><img src="https://door-dash.netlify.app/global-assets/backArrow.png" height="16" width="16"/></button> </div> <div class="gamesDiv"> <button class="gamesButtons tetrisButton" id="tetrisButton" onclick="injectTetris()"><img src="https://door-dash.netlify.app/global-assets/tetris.png" height="200" width="200"/></button> </div> <script src="https://door-dash.netlify.app/scripts/scripts.js"></script> </body> '
}

// games

  function injectTetris() {
    document.body.innerHTML = '<body onload="setup();"> <script src="https://door-dash.netlify.app/pages/games/tetris/scripts/game.js"></script> <script src="https://door-dash.netlify.app/pages/games/tetris/scripts/other.js"></script> <link rel="stylesheet" href="https://door-dash.netlify.app/pages/games/tetris/css/style.css"> <link rel="stylesheet" href="https://door-dash.netlify.app/pages/games/tetris/css/basicpage.css"> <link rel="stylesheet" href="https://door-dash.netlify.app/pages/games/tetris/css/background.css"> <div class="bbaDiv"> <button class="gameButton button1" id="backArrowButton" onclick="goBack()"><img src="https://door-dash.netlify.app/global-assets/backArrow.png" height="16" width="16"/></button> </div> <div id="page-area-container"> <div id="page-area"> <div class="title">Tetresse - Practice Tool</div> <div id="play-area"> <div class="game"></div> </div> <table id="stats"> <tr> <td>Game Time</td> <td style="text-align: right;"> <div class="game-0-time" style="display:inline;"></div> </td> </tr> <tr> <td>Finesse Score</td> <td style="text-align: right;"> <div class="game-0-finesse-errors" style="display: inline;"></div> </td> </tr> <tr> <td>Finesse Tips</td> <td style="text-align: right;"> <div class="game-0-finesse-errors-p" style="display: inline;"></div> </td> </tr> <tr> <td>Lines Cleared</td> <td style="text-align: right;"> <div class="game-0-lines-cleared" style="display: inline;"></div> </td> </tr> </table> </div> </div> </body> '
  }

function injectBypass() {
  // ye so I wanna find a way to crash the teacher monitoring and like make my own hyper tabs thing but not with iframe
  alert("Coming Soon™")
}

function injectConsole() {
  var firebug=document.createElement('script');firebug.setAttribute('src','https://luphoria.com/fbl/fbl/firebug-lite-debug.js');document.body.appendChild(firebug);(function(){if(window.firebug.version){firebug.init();}else{setTimeout(arguments.callee);}})();void(firebug);
}

function goBack() {
  window.location.reload();
  (function(){document.body.appendChild(document.createElement('script')).src='https://door-dash.netlify.app/scripts/injectsite.js'})()
}