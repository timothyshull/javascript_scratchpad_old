/*global window, ace, console, WebSocket, connect, message, $, document */
window.addEventListener("load", function () {
    "use strict";
    var editor = ace.edit("editor");

    console.dir($("#editor"));

    function connect() {
        var socket, text,
            host = "ws://localhost:8001";

        function send() {
            text = editor.getValue();

            if (text === "") {
                message('<p class="warning">Please enter a message');
                return;
            }
            try {
                socket.send(text);
                message('<p class="event">Sent: ' + text);

            } catch (exception) {
                message('<p class="warning">');
            }
            editor.setValue("");
        }

        function message(msg) {
            $('#chatLog').append(msg + '</p>');
        }

        try {
            socket = new WebSocket(host);

            message('<p class="event">Socket Status: ' + socket.readyState);

            socket.onopen = function () {
                message('<p class="event">Socket Status: ' + socket.readyState + ' (open)');
            };

            socket.onmessage = function (msg) {
                message('<p class="message">Received: ' + msg.data);
            };

            socket.onclose = function () {
                message('<p class="event">Socket Status: ' + socket.readyState + ' (Closed)');
            };

        } catch (exception) {
            message('<p>Error' + exception);
        }

        //$('#editor').keypress(function (event) {
        //    if (event.keyCode === '13') {
        //        send();
        //        console.log("pressed");
        //    }
        //});

        editor.commands.addCommand({
            name: 'myCommand',
            bindKey: {win: 'Enter',  mac: 'Enter'},
            exec: function(editor) {
                send();
            },
            readOnly: true // false if this command should not apply in readOnly mode
        });

        $('#disconnect').click(function () {
            socket.close();
        });
    }

    if (!(window.hasOwnProperty("WebSocket"))) {
        console.log("No websockets");
    } else {
        connect();
    }

});

//document.getElementById("parent-list").addEventListener("click", function (e) {
//    // e.target is the clicked element!
//    // If it was a list item
//    if (e.target && e.target.nodeName == "LI") {
//        // List item found!  Output the ID!
//        console.log("List item ", e.target.id.replace("post-"), " was clicked!");
//    }
//});

// wscat -l 8001