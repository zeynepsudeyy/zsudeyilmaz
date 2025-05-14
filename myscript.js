
const urlParams = new URLSearchParams(window.location.search);
const isim = urlParams.get('isim');

if (isim) {
  document.getElementById('siparis-bilgisi').innerHTML = `
    <p><strong>Adınız:</strong> ${isim}</p>
    <p><strong>Siparişiniz yolda! Afiyet olsun aşkım 💖</strong></p>
  `;
}
