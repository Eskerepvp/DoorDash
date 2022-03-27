
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
    document.head.innerHTML = '<title>TwitchTetris</title> <link href="https://fonts.googleapis.com/css?family=VT323" rel="stylesheet" type="text/css" /> <link href="https://door-dash.netlify.app/pages/games/tetris/styles.css" rel="stylesheet" type="text/css" /> <script src="https://door-dash.netlify.app/pages/games/tetris/cookie.js"></script> <script src="https://door-dash.netlify.app/pages/games/tetris/tetris_main.js"></script> <script> function onClickEvent(event){ if (Tetris.currentInstance) { Tetris.currentInstance.mouseClicked(event.layerX, event.layerY); } } </script> '
    document.body.innerHTML = '<table border="0" class="mainTable"> <tr> <td class="menuCell"> <div class="menu"> <img class="menuLogo" src="https://door-dash.netlify.app/pages/games/tetris/media/background/logo.png"></img> <br/><br/> <a href="https://door-dash.netlify.app/pages/games/tetris/index.html" class="bareLink"> <div class="menuItem selectedMenuItem">Play TwitchTetris</div> </a> <br/> <a href="https://tetris--deesk02.repl.co/controls.html" class="bareLink"> <div class="menuItem">Controls Options</div> </a> <br/> <a href="/" class="bareLink"> <div class="menuItem" style="background-color:#9933cc; color:#FFFF00;" onMouseOver="this.style.color='#FF0000'" onMouseOut="this.style.color='#FFFF00'">Zur Rossipotti Startseite</div> </a> <br/> </div>	   </div> <a href="https://door-dash.netlify.app/pages/games/tetris/about.html" class="bareLink"> <div class="menuItem">About TwitchTetris</div> </a> <br/> <a href="http://www.leighpauls.com" class="bareLink" target="_blank"> <div class="menuItem">About the Developer</div> </a> <br/> <div class="instructions"> <b> &gt TwitchTetris --help </b> <p>Use the keyboard controls to rotate and move the blocks as they fall</p> <p>Place the blocks to form horizontal lines, which will be removed and make all the blocks above fall down. If the blocks reach the top of the screen, the game is over!</p> <p>Clear multiple lines at a time, or clear lines in consective moves to earn more points.</p> </div> </div> </td> <td class="contentCell"> <div class="gamePanel"> <div class="gameElements"> <div class="ttyOutput scoreOutput" id="scoreDiv"></div> <div class="ttyOutput linesOutput" id="linesDiv"></div> <div class="ttyOutput levelOutput" id="levelDiv"></div> <div class="ttyOutput tickerOutput" id="tickerDiv"></div> <div class="gameEndOutputHidden" id="gameEndContainer"> <div style="padding:5px;" id="gameEndDiv"></div> </div> <canvas class="gameCanvas" id="gameCanvas" width="600" height="500" onclick="onClickEvent(event)" class="gameCanvas">Your browser does not natively support Html5, or the Canvas Tag. Using this browser is slowing the progress of the web. Please get a modern browser, such as Google Chrome or Mozzila FireFox</canvas> </div> <div class="controlsTitle"> <br/> <b>Controls:</b><br/> <table border="1" cellpadding="3" class="controlsTable"> <tr class="controlsTableHeader"> <td width="80">Move Block</td> <td width="80">Soft Drop</td> <td width="80">Rotate</td> <td width="80">Save Piece</td> <td width="80">Hard Drop</td> <td width="80">Pause</td> </tr> <tr> <td><span id="shiftLeft">Left</span>, <span id="shiftRight">Right</span></td> <td><span id="softDrop">Down</span></td> <td><span id="rotateLeft">Z</span>, <span id="rotateRight">X, Up</span></td> <td><span id="swap">C, Shift</span></td> <td><span id="hardDrop">Space</span></td> <td>Esc</td> </tr> </table> </div> <br/> <a href="https://door-dash.netlify.app/pages/games/tetris/controls.html" class="bareLink"> <div class="menuItem">Controls Options</div> </a> </div> </td> <td width="20"> </td> </tr> </table> '
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