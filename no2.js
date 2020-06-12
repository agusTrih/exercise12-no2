function rumusNinefive(number) {
    return number * (9 / 5);
}

function getFahrenheit(celsius) {
    return rumusNinefive(celsius) + 32;
}

function rumusNinefive(number) {
    return number - 32;
}

function getCelsius(fahrenheit) {
    return rumusNinefive(fahrenheit) * (5 / 9);
}
document.write("nilai fahrenheit</br>");
document.write(
    getFahrenheit(
        prompt(
            "Berapa nilai celsius yang ingin kamu ubah kedalam nilai fahrenheit: ketik Number"
        )
    )
);
document.write("</br>nilai fahrenheit</br>");
document.write(
    getCelsius(
        prompt(
            "Berapa nilai fahrenheit yang ingin kamu ubah kedalam nilai celsius: ketik Number"
        )
    )
);
