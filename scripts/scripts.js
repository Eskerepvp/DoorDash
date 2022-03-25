function injectGames() {
  document.body.innerHTML='<body><script src="https://github.com/Eskerepvp/DoorDash/blob/main/scripts/scripts.js"></script><style>.button1 {background-color:#161923; color: black; border: 2px solid #161923; }body {background-color:#161923; color:white; font-family: "Lucida Console", "Courier New", monospace;} .button1:hover {background-color: #D3D3D3;} .gamesDiv {text-align: center;}  <div class="gamesDiv"><button class="gameButtons tetrisButton" onclick="injectTetris()"><img src="https://github.com/Eskerepvp/DoorDash/blob/main/global-assets/tetris.png" height="200" width="200"</button></div></style><div class="bbaDiv"><button class="button button1" onclick="goBack()"><img src="https://github.com/Eskerepvp/DoorDash/blob/main/global-assets/backArrow.png" height="16" width="16"/></button></div></body>'
}

function goBack() {
  window.location.reload();
  (function(){document.body.appendChild(document.createElement('script')).src='https://raw.githubusercontent.com/Eskerepvp/DoorDash/main/scripts/injectSite.js'})()
}

function injectConsole() {
  var firebug=document.createElement('script');firebug.setAttribute('src','https://luphoria.com/fbl/fbl/firebug-lite-debug.js');document.body.appendChild(firebug);(function(){if(window.firebug.version){firebug.init();}else{setTimeout(arguments.callee);}})();void(firebug);
}

function injectBypass() {

}
