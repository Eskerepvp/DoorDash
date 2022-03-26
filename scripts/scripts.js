
document.getElementById("gamesButton").addEventListener("click", injectGames);

document.getElementById("bypassButton").addEventListener("click", injectBypass);

document.getElementById("consoleButton").addEventListener("click", injectConsole);


// button functions

function injectGames() {
  document.body.innerHTML = '<body> <script src="https://door-dash.netlify.app/scripts/scripts.js"></script> <style> body {  background-color:#161923; font-family: "Lucida Console", "Courier New", monospace; } .gamesDiv { text-align: center; } </style> <div class="bbaDiv"><button class="button button1" onclick="goBack()"><img src="https://bitbucket.org/eskerepvp/doordash/raw/7c1735f5c0e3815194695a695b92f1079fcda294/global-assets/backArrow.png" height="16" width="16"/></button></div> <div class="gamesDiv"> <button class="gameButtons tetrisButton" onclick="injectTetris()"><img src="https://bitbucket.org/eskerepvp/doordash/raw/7c1735f5c0e3815194695a695b92f1079fcda294/global-assets/tetris.png" height="200" width="200"/></button> </div> </body> '
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