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

    console.log(":)");
}

function readInput() {
    let cmdElem = document.getElementById("command");
    let command = cmdElem.value;
    let lp = document.getElementById("linePrefix");

    lp.hidden = true;
    cmdElem.disabled = true;

    let args = command.split(" ");

    inputHandler(args);
    cmdElem.value = "";
    lp.hidden = false;
    cmdElem.disabled = false;
    cmdElem.focus();
}

function inputHandler(args) {
    switch (args[0]) {
        case 'help':
            updateText(`possible commands:
            
            help
            projects
            about`);
            break;
        case 'projects':
            updateText(`a collection of projects can be found here:
            ..a$https://github.com/o2i6$github`);
            break;
        case 'about':
            updateText(`>about (website)
            
            this website was built as an experiment, and attempts to loosely emulate a terminal. while a lot of the code has been lost due to unfortunate circumstances, I've reprogrammed a small part back to retain its core functionality.
            
            >about (me)
            
            second-year computer science student at the University of Wisconsin-Madison. exploring frontend and gawking at fast_InvSqrt in my free time.
            
            contact me here:
            ..a$mailto:arbitrary152@gmail.com$arbitrary152@gmail.com
            ..a$https://twitter.com/arbitrary152_$twitter @arbitrary152_
            ..a$https://github.com/o2i6$github @o2i6
            `);
            break;
    }
}

function updateText(text) {
    let textLines = text.split(/\r?\n/);
    let res = document.getElementById("resultID");
    let em;

    res.textContent = "";
    res.appendChild(document.createElement('br'));

    textLines.forEach(function(line) {
        em = document.createElement("cmd");
        res.appendChild(em);

        if (line.trim().startsWith('..')) {
            let a = line.trim().substring(2).split('$');
            switch (a[0]) {
                case 'a':
                    let link = document.createElement('a');
                    link.href = a[1];
                    if (a.length === 2) {
                        link.textContent = a[1];
                    }
                    else {
                        link.textContent = a[2];
                    }

                    em.appendChild(link);
            }
        }
        else {
            em.textContent += line;
            em.appendChild(document.createElement('br'));
        }
    });
}

