const setup = (port, html, space) => {
    let timer = null;
    const socket = new WebSocket(`ws://localhost:${port}`);

    socket.onopen = function (e) {
        // alert("Connection established");
        // alert("Sending to server");
        timer = setTimeout(() => {
            socket.close();
            console.log("Connection timed out!!");
        }, 10000);
        console.log("Connection created!!");
    };

    socket.onmessage = function (event) {
        clearTimeout(timer);
        // alert(`[message] Data received from server: ${event.data}`);
        timer = setTimeout(() => {
            socket.close();
            console.log("Connection timed out!!");
        }, 10000);
        var tmpl = $.templates(`#${html}`);
        console.log(event.data);
        let obj = {
            data: event.data
        }
        var cont = tmpl.render(obj);
        $(`#${space}`).append(cont);
    };

    socket.onclose = function (event) {
        if (event.wasClean) {
            alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
        } else {
            alert('[close] Connection died');
        }
        clearTimeout(timer);
    };

    socket.onerror = function (error) {
        alert(`${error}`);
        socket.close();
    };
    return socket;
}

/////////////////////////////////////////////////////////////








$(document).ready(function () {

    $("#cityLoad").click(function () {
        let port = 3010;
        let html = "servicesCity";
        let space = "city_list_body";
        setup(port, html, space);
        console.log("city clicked");
    });
    $("#devLoad").click(function () {
        let port = 3011;
        let html = "servicesDev";
        let space = "dev_list_body";
        setup(port, html, space);
        console.log("dev clicked");
    });
    $("#kafkaLoad").click(function () {
        let port = 3012;
        let html = "servicesKafka";
        let space = "kafka_list_body";
        let so = setup(port, html, space);
        console.log("kafka clicked");
    });
});