function toggleButton(e) {
    var eles = document.getElementsByClassName("game-0-" + e.id);
    if (e.parentNode.id.indexOf("stats-selection") != -1) {
        e = e.selectedOptions[0];
        document.getElementById("stats-selection").selectedIndex = 0;
        if (eles.length != 0) {
            for (var i = 0; i < eles.length; i++) {
                eles[i].parentNode.parentNode.remove();
            }
            return;
        }
        var table = document.getElementById("stats");
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = e.innerHTML.replace(/(?:^(?:&nbsp;)+)|(?:(?:&nbsp;)+$)/g, '');
        var newEle = document.createElement("div");
        newEle.style.textAlign = "right";
        newEle.classList.add("game-0-" + e.id);
        cell2.appendChild(newEle);
        games[0].stats.reload();
    } else if (e.parentNode.id.indexOf("keybinds-area") != -1) {
        var entry = document.getElementById("keybinds-entry");
        entry.style.display = "block";
        entry.focus();
        entry.innerHTML = "-"
        var submit = document.getElementById("keybinds-submit")
        submit.style.display = "block";
    }
}

function recordKeyCode(element) {
    element.style.background = "#e3aeae";
    element.innerHTML = "-";
    document.getElementById("keybinds-submit").style.background = "#c4c4c4";
    var setKey = function(e) {
        e = e || window.event;
        var ele = document.getElementById("keybinds-entry");
        if (e != null) {
            ele.innerHTML = e.keyCode + "";
            ele.style.background = "#dadada";
            var submit = document.getElementById("keybinds-submit")
            submit.focus();
            submit.style.background = "#e3aeae";
            document.removeEventListener("keydown", setKey);
        } else {
            ele.innerHTML = "-";
            ele.style.background = "#e3aeae";
        }
    }
    addEvent(document, "keydown", setKey);
}

function submitKey(e) {
    var entry = document.getElementById("keybinds-entry");
    var submit = document.getElementById("keybinds-submit");
    var selected = document.getElementById("keybinds-selection");
    if (entry.innerHTML == "-") {
        submit.style.background = "#c4c4c4";
        recordKeyCode(entry);
    }
    selected.selectedIndex = 0;
    entry.style.display = "none";
    submit.style.display = "none";
    console.log("Added keyCode " + entry.innerHTML + " to action " + selected.value)
    games[0].settings.addKeyCode(selected.value, entry.innerHTML);
}
