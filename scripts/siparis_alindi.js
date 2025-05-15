
const urlParams = new URLSearchParams(window.location.search);
const isim = urlParams.get('isim');

if (isim) {
  const tablo = document.getElementById("siparis-tablosu");
  const satir = tablo.insertRow();
  const hucre1 = satir.insertCell(0);
  const hucre2 = satir.insertCell(1);

  hucre1.textContent = isim;
  hucre2.textContent = "Sipariş hazırlanıyor ☕";
}
