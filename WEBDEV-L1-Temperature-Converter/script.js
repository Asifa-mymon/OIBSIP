document.getElementById('convertBtn').addEventListener('click', function () {
    const tempInput = document.getElementById('tempInput').value;
    const unitSelect = document.getElementById('unitSelect').value;
    const errorMessage = document.getElementById('errorMessage');
    const resultArea = document.getElementById('resultArea');
    const outputs = document.getElementById('outputs');

    // 1. Input Check
    if (tempInput === '') {
        errorMessage.style.display = 'block';
        resultArea.style.display = 'none';
        return;
    } else {
        errorMessage.style.display = 'none';
    }

    const val = parseFloat(tempInput);
    let c = 0, f = 0, k = 0;

    // 2. Calculations
    if (unitSelect === 'Celsius') {
        c = val;
        f = (c * 9 / 5) + 32;
        k = c + 273.15;
    } else if (unitSelect === 'Fahrenheit') {
        f = val;
        c = (f - 32) * 5 / 9;
        k = c + 273.15;
    } else if (unitSelect === 'Kelvin') {
        k = val;
        c = k - 273.15;
        f = (c * 9 / 5) + 32;
    }

    // 3. Absolute Zero Check
    if (c < -273.15) {
        outputs.innerHTML = "<p style='color: #dc2626; font-size: 14px;'>Error: Below Absolute Zero (-273.15°C)!</p>";
        resultArea.style.display = 'block';
        return;
    }

    // 4. Building Clean Output Text
    let txt = "";
    if (unitSelect !== 'Celsius') {
        txt += "<p><span>Celsius:</span> <span>" + c.toFixed(2) + " °C</span></p>";
    }
    if (unitSelect !== 'Fahrenheit') {
        txt += "<p><span>Fahrenheit:</span> <span>" + f.toFixed(2) + " °F</span></p>";
    }
    if (unitSelect !== 'Kelvin') {
        txt += "<p><span>Kelvin:</span> <span>" + k.toFixed(2) + " K</span></p>";
    }

    outputs.innerHTML = txt;
    resultArea.style.display = 'block';
});