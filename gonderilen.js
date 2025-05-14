const urlParams = new URLSearchParams(window.location.search);
const ad = urlParams.get('ad');
const mesaj = urlParams.get('mesaj');

const mesajTablosu = document.getElementById("mesaj-tablosu");
if (ad && mesaj && mesajTablosu) {
  const yeniSatir = mesajTablosu.insertRow();
  const hucreAd = yeniSatir.insertCell(0);
  const hucreMesaj = yeniSatir.insertCell(1);

  hucreAd.textContent = ad;
  hucreMesaj.textContent = mesaj;
}
