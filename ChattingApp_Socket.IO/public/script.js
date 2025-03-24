const socket = io();

$("#send-btn").click(() => {
    const msgText = $("#inp-msg").val();

    socket.emit("send_msg", {
        msg: msgText
    });

    $("#inp-msg").val("");
});

socket.on("received_msg", (data) => {
    $("#chat").append(`<li>${data.id} says ${data.msg}</li>`);
});
