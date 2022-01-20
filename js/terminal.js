/*
This should parse entered text from the terminal and redirect/output resources
possibly catch 404s, idk

add a 'session closed' at the end of previously cached linefeed possibly
 */

const LINE = "o2i6@localhost:~$ ";
const cookies = document.cookie;

window.onload = function() {
    document.getElementById("command").addEventListener("keypress",
        function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("command").disabled = true;
            readInput();
        }
    }, false);
}

// Old terminal emulation code, TODO branch this maybe?
function updateHistory() {
    // TODO make cookie storage framework
    // TODO figure out what I want with scrolling
    updateTextOld("Session terminated.");
}

function updateTextOld(text) {
    let textLines = text.split(/\r?\n/);
    let elem = document.createElement("cmd");
    let hist = document.getElementById("history");
    let em;
    hist.appendChild(elem);

    textLines.forEach(function(line) {
        em = document.createElement("cmd.line");
        elem.appendChild(em);
        em.textContent += line;
        elem.appendChild(document.createElement("br"));

    });
}
///////////////////////////////////////////////////////////////

function readInput() {
    let cmdElem = document.getElementById("command");
    let command = cmdElem.value;
    let lp = document.getElementById("linePrefix");

    lp.hidden = true;
    cmdElem.disabled = true;

    // args[0] is command; args[1:] are parameters
    let args = command.split(" ");

    inputHandler(args);
    cmdElem.value = ""; //is there a better way idk
    lp.hidden = false;
    cmdElem.disabled = false;
    cmdElem.focus();
}

function inputHandler(args) {
    // for now
    updateText("parsed: " + args[0]);
}

function updateText(text) {
    let textLines = text.split(/\r?\n/);
    let res = document.getElementById("resultID");
    let em;

    res.textContent = "";

    textLines.forEach(function(line) {
        for (let i = 0; i < 100; ++i) // testing scrolling
        {
            em = document.createElement("cmd");
            res.appendChild(em);
            em.textContent += line;
            //res.appendChild(document.createElement("br"));  don't need apparently?
        }
    });
}


// argparse example
// - prefix for arguments with parameters
// -- prefix for boolean-esque options
function argparse(args) {
    let option1 = false;
    let option2 = false;
    for (let i = 0; i < args.length; ++i) {
        if (args[i].startsWith("--")) {
            switch (args[i]) {
                case "--option1" : option1 = true; break;
            }
        }
        if (args[i].startsWith("-")) {
            // setCommand
            ++i;
            let newargs = [];
            while (!args[i].startsWith("-")) {
                // newargs append arg
            }
            //call function with newargs
        }
    }
}

