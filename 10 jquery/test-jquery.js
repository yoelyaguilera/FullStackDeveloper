$(() => {
    console.log("Document ready!")
    $("#send-btn").on("click", () => {
        let nombre = $("#name").val();
        let comentario = $("#comentario").val();
        if (nombre || comentario != "") {
            $("#container").append('<p class="sent-text">' + nombre + " " + comentario + '</p>');
            $("#name").val("");
            $("#comentario").val("");
        }
    })
})

