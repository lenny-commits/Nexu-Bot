// Spenden Slider aktualisieren
document.addEventListener("DOMContentLoaded", () => {
  const range = document.getElementById("donationRange");
  const value = document.getElementById("donationValue");
  const donateBtn = document.getElementById("donateBtn");

  if (range && value && donateBtn) {
    range.addEventListener("input", () => {
      value.textContent = range.value;
      // PayPal-Link dynamisch updaten
      donateBtn.href = `https://www.paypal.com/donate?business=DEINE_PAYPAL_ID&amount=${range.value}`;
    });
  }
});

