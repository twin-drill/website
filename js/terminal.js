/*
This should parse entered text from the terminal and redirect/output resources
possibly catch 404s, idk

format of a baseline:
o2i6@localhost:~$<sp>
 */

const LINE = "o2i6@localhost:~$ ";

function enterToSubmit(evt) {
    evt.preventDefault();
    if (evt.keyCode == 13) { readInput(); }
}

function load() {
    document.getElementByID("command").addEventListener("keydown", enterToSubmit(Event));
}

function readInput() {
    let command = document.getElementById("command").value;

    // args[0] is command; args[1:] are parameters
    let args = command.split(" ");

    // for now
    console.log("parsed");
    console.log(command);

}