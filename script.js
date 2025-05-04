// انتخاب المان‌های HTML
const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const resultDiv = document.getElementById('result');

// تبدیل سلسیوس به فارنهایت
document.getElementById('toFahrenheit').addEventListener('click', function() {
  const celsiusValue = parseFloat(celsiusInput.value);
  if (!isNaN(celsiusValue)) {
    const fahrenheitValue = (celsiusValue * 9/5) + 32;
    fahrenheitInput.value = fahrenheitValue.toFixed(2);
    resultDiv.textContent = `${celsiusValue}°C = ${fahrenheitValue.toFixed(2)}°F`;
  } else {
    resultDiv.textContent = 'لطفاً یک عدد معتبر وارد کنید.';
  }
});

// تبدیل فارنهایت به سلسیوس
document.getElementById('toCelsius').addEventListener('click', function() {
  const fahrenheitValue = parseFloat(fahrenheitInput.value);
  if (!isNaN(fahrenheitValue)) {
    const celsiusValue = (fahrenheitValue - 32) * 5/9;
    celsiusInput.value = celsiusValue.toFixed(2);
    resultDiv.textContent = `${fahrenheitValue}°F = ${celsiusValue.toFixed(2)}°C`;
  } else {
    resultDiv.textContent = 'لطفاً یک عدد معتبر وارد کنید.';
  }
});
