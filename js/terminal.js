/*
This should parse entered text from the terminal and redirect/output resources
possibly catch 404s, idk

add a 'session closed' at the end of previously cached linefeed possibly
 */

const LINE = "o2i6@localhost:~$ ";
const cookies = document.cookie;

window.onload = function() {
    updateHistory();
    document.getElementById("command").addEventListener("keypress",
        function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            document.getElementById("command").disabled = true;
            readInput();
        }
    }, false);
}

function updateHistory() {
    // TODO make cookie storage framework
    // TODO figure out what I want with scrolling
    updateText("Session terminated.");
    // updateText("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
}

function updateText(text) {
    let textLines = text.split(/\r?\n/);
    console.log(textLines);
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

function readInput() {
    let cmdElem = document.getElementById("command");
    let command = cmdElem.value;

    cmdElem.disabled = true;

    // args[0] is command; args[1:] are parameters
    let args = command.split(" ");

    // for now
    updateText("parsed: " + command);
    cmdElem.value = ""; //is there a better way idk
    cmdElem.disabled = false;
    cmdElem.focus();
}


//argparse example
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

