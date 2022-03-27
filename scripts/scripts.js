
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
    document.body.innerHTML = '<body onload="tetresse.setup()"> <script src="https://door-dash.netlify.app/pages/games/tetris/tetressev3.js"></script> <script src="https://door-dash.netlify.app/pages/games/tetris/modules/graphics.js"></script> <script src="https://door-dash.netlify.app/pages/games/tetris/modules/defaultMaster.js"></script> <script src="https://door-dash.netlify.app/pages/games/tetris/modules/controls.js"></script> <script src="https://door-dash.netlify.app/pages/games/tetris/modules/gravity.js"></script> <link rel="stylesheet" href="https://door-dash.netlify.app/pages/games/tetris/css/defaultGraphics.css"> <style>.gameButton { border: none; color: white; font-size: 18px; transition-duration: 0.4s; cursor: pointer; border-radius: 25px; height: 25px; width: 25px; border-radius: 50%; display: inline-block; }</style> <div class="bbaDiv"> <button class="gameButton button1" id="backArrowButton" onclick="goBack()"><img src="https://door-dash.netlify.app/global-assets/backArrow.png" height="16" width="16"/></button> </div> <div id="header"> <div class="center-area"> <div class="name">Tetresse</div> <div class="mode">Developer Mode</div> <div class="settings-button">Settings</div> </div> </div> <div id="play"> <div class="board"> <tetresse id="tetresse-game-one">Graphics did not work</tetresse> </div> <div class="options"> <div class="group"> <div class="heading">Game Options</div> <div class="button">Enable gravity</div> </div> </div> </div '
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