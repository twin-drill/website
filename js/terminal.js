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
    // TODO figure out how to actually get newlines to work
    document.getElementById("history").textContent += "\r\nSession terminated.\r\n" + LINE;
}

function readInput() {
    let command = document.getElementById("command").value;

    // args[0] is command; args[1:] are parameters
    let args = command.split(" ");

    // for now
    console.log("parsed");
    console.log(command);
    document.getElementById("command").disabled = false;
    document.getElementById("command").focus();
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
                case "option1" : option1 = true; break;
            }
        }
        if (args[i].startsWith("-")) {
            // setCommand
            let newargs = [];
            while (!args[i].startsWith("-")) {
                // newargs append arg
            }
        }
    }
}

// regex split of a multiline string
// var result = Regex.Split(text, "\r\n|\r|\n");
// to be used in update() for refreshing text displayed in window (limit to n lines at a time)