var coords_p = document.querySelector(".coords");
var canvas = document.querySelector("#canvas");

canvas.addEventListener('mousemove', function(event) {
    coords_p.innerHTML = "x: " + event.clientX + " y: " + event.clientY;
});

canvas.addEventListener('mouseout', function(event) {
    coords_p.innerHTML = "";
});

var input_name = document.querySelector("#input-name");
var output = document.querySelector("#output-message");

input_name.addEventListener('input', function(event) {
    var name = input_name.value;

    output.innerHTML = "Valid name: " + name;

    if(name.length < 5) {
        output.innerHTML = "This name is too short (it must contain at least 5 letters).<br>" + (5 - name.length) + " to go."
    }
});

input_name.addEventListener('keyup', function(event) {
    var key = event.key;
    if(key === '!') {
        output.innerHTML = "This is a forbidden!";
        var name_input_value = event.target.value

        event.target.value = name_input_value.substring(0, name_input_value.length - 1);
    }
});

var colorPicker = document.querySelector("#color-picker");

colorPicker.addEventListener('change', function() {
    var color = colorPicker.value;
    console.log("Color hex: " + color);
    document.body.style.backgroundColor = color;
});
