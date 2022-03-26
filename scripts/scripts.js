
document.getElementById("gamesButton").addEventListener("click", injectGames);

document.getElementById("bypassButton").addEventListener("click", injectBypass);

document.getElementById("consoleButton").addEventListener("click", injectConsole);

document.getElementById("backArrowButton").addEventListener("click", goBack);


// button functions

function injectGames() {
  document.body.innerHTML = '<body> <style> body {  background-color:#161923; color:white; font-family: "Lucida Console", "Courier New", monospace; }  .gameButton { border: none; color: white; padding: 16px 32px; text-align: center; text-decoration: none; display: inline-block; font-size: 18px; margin: 4px 2px; transition-duration: 0.4s; cursor: pointer; border-radius: 25px; } .button1 { background-color: Black;  color: white;  border: 2px solid #008CBA; } .button1:hover { background-color: #008CBA; color: white; } .gamesDiv { text-align: center; } </style> <div class="bbaDiv"> <button class="gameButton button1" id="backArrowButton" onclick="goBack()"><img src="https://door-dash.netlify.app/global-assets/backArrow.png" height="16" width="16"/></button> </div> <div class="gamesDiv"> <button class="gamesButtons tetrisButton" id="tetrisButton"><img src="https://door-dash.netlify.app/global-assets/tetris.png" height="200" width="200"/></button> </div> <script src="https://door-dash.netlify.app/scripts/scripts.js"></script> </body>'
}

// games

  function injectTetris() {
    document.body.innerHTML = '<body onload="setup();"> <script src="https://door-dash.netlify.app/pages/games/tetris/scripts/game.js"></script> <link rel="stylesheet" href="https://door-dash.netlify.app/pages/games/tetris/css/style.css"> <link rel="stylesheet" href="https://door-dash.netlify.app/pages/games/tetris/css/basic%20page.css"> <link rel="stylesheet" href="https://door-dash.netlify.app/pages/games/tetris/css/background"> <div class="bbaDiv"> <button class="gameButton button1" id="backArrowButton" onclick="goBack()"><img src="https://door-dash.netlify.app/global-assets/backArrow.png" height="16" width="16"/></button> </div> <div id="page-area-container"> <div id="page-area"> <div class="title">Tetresse - Practice Tool</div> <div id="play-area"> <div class="game"></div> </div> <table id="stats"> <tr> <td>Game Time</td> <td style="text-align: right;"> <div class="game-0-time" style="display:inline;"></div> </td> </tr> <tr> <td>Finesse Score</td> <td style="text-align: right;"> <div class="game-0-finesse-errors" style="display: inline;"></div> </td> </tr> <tr> <td>Finesse Tips</td> <td style="text-align: right;"> <div class="game-0-finesse-errors-p" style="display: inline;"></div> </td> </tr> <tr> <td>Lines Cleared</td> <td style="text-align: right;"> <div class="game-0-lines-cleared" style="display: inline;"></div> </td> </tr> </table> </div> </div> <script type="text/javascript"> function toggleButton(e) { var eles = document.getElementsByClassName("game-0-" + e.id); if (e.parentNode.id.indexOf("stats-selection") != -1) { e = e.selectedOptions[0]; document.getElementById("stats-selection").selectedIndex = 0; if (eles.length != 0) { for (var i = 0; i < eles.length; i++) { eles[i].parentNode.parentNode.remove(); } return; } var table = document.getElementById("stats"); var row = table.insertRow(-1); var cell1 = row.insertCell(0); var cell2 = row.insertCell(1); cell1.innerHTML = e.innerHTML.replace(/(?:^(?:&nbsp;)+)|(?:(?:&nbsp;)+$)/g); var newEle = document.createElement("div"); newEle.style.textAlign = "right"; newEle.classList.add("game-0-" + e.id); cell2.appendChild(newEle); games[0].stats.reload(); } else if (e.parentNode.id.indexOf("keybinds-area") != -1) { var entry = document.getElementById("keybinds-entry"); entry.style.display = "block"; entry.focus(); entry.innerHTML = "-" var submit = document.getElementById("keybinds-submit") submit.style.display = "block"; } } function recordKeyCode(element) { element.style.background = "#e3aeae"; element.innerHTML = "-"; document.getElementById("keybinds-submit").style.background = "#c4c4c4"; var setKey = function(e) { e = e || window.event; var ele = document.getElementById("keybinds-entry"); if (e != null) { ele.innerHTML = e.keyCode + ""; ele.style.background = "#dadada"; var submit = document.getElementById("keybinds-submit") submit.focus(); submit.style.background = "#e3aeae"; document.removeEventListener("keydown", setKey); } else { ele.innerHTML = "-"; ele.style.background = "#e3aeae"; } } addEvent(document, "keydown", setKey); } function submitKey(e) { var entry = document.getElementById("keybinds-entry"); var submit = document.getElementById("keybinds-submit"); var selected = document.getElementById("keybinds-selection"); if (entry.innerHTML == "-") { submit.style.background = "#c4c4c4"; recordKeyCode(entry); } selected.selectedIndex = 0; entry.style.display = "none"; submit.style.display = "none"; console.log("Added keyCode " + entry.innerHTML + " to action " + selected.value) games[0].settings.addKeyCode(selected.value, entry.innerHTML); } </script> </body> '
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