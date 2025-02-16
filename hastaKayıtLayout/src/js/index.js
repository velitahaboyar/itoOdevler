function kaydet() {
  let isim = document.getElementById("isim");
  let soyisim = document.getElementById("soyisim");
  let adres = document.getElementById("adres");
  let telefon = document.getElementById("telefon");
  let tc = document.getElementById("tc");
  let dtarih = document.getElementById("dtarih");

  var user = {
    ad: isim.value,
    soyad: soyisim.value,
    adres: adres.value,
    dtarih: dtarih.value,
    tc: tc.value,
    telefon: telefon.value,
  };
  console.log(user);

  localStorage.setItem("user", JSON.stringify(user));
}

function getir() {
  let user = localStorage.getItem("user");
  if (user) {
    let userObj = JSON.parse(user);
    console.log(user);
    console.log(userObj);
    document.getElementById("isim").value = userObj.ad || "";
    document.getElementById("soyisim").value = userObj.soyad || "";
    document.getElementById("adres").value = userObj.adres || "";
    document.getElementById("dtarih").value = userObj.dtarih || "";
    document.getElementById("tc").value = userObj.tc || "";
    document.getElementById("telefon").value = userObj.telefon || "";
  } else {
    console.log("Kayıtlı kullanıcı bulunamadı.");
  }
}
