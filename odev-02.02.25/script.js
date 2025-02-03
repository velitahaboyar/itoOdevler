//telefon numarası yerine id verdim
//isimleri ödeve bakmak için girdigim ders tekrarından rastgele sectim. Telefon numarası yerine id verdim.

const sinifData = [
  { id: 1, isim: "Taha", soyisim: "Boyar", vize: 70, final: 70 },
  { id: 2, isim: "Zeynep Hüsna", soyisim: "Haznedar", vize: 83, final: 77 },
  { id: 3, isim: "Ahmet", soyisim: "Selçuk", vize: 80, final: 80 },
  { id: 4, isim: "Esma Nur", soyisim: "Gedikbaş", vize: 85, final: 75 },
  { id: 5, isim: "Ercan", soyisim: "Öztürk", vize: 97, final: 100 },
  { id: 6, isim: "Aslıhan", soyisim: "İkiel", vize: 82, final: 78 },
  { id: 7, isim: "Caner", soyisim: "Gönder", vize: 85, final: 75 },
];

//------------while ile ekrana bastırma

// let x = 0;
// while (x < sinifData.length) {
//   console.log(
//     `ID: ${sinifData[x].id}, İsim: ${sinifData[x].isim}, Soyisim: ${sinifData[x].soyisim}, Vize: ${sinifData[x].vize}, Final: ${sinifData[x].final}`
//   );
//   x++;
// }

//------------for ile ekrana bastırma

// for (let x = 0; x < sinifData.length; x++) {
//   console.log(
//     `ID: ${sinifData[x].id}, İsim: ${sinifData[x].isim}, Soyisim: ${sinifData[x].soyisim}, Vize: ${sinifData[x].vize}, Final: ${sinifData[x].final}`
//   );
// }

//-------------do while ile ekrana bastırma

// let x = 0;
// do {
// 	console.log(
// 		`ID: ${sinifData[x].id}, İsim: ${sinifData[x].isim}, Soyisim: ${sinifData[x].soyisim}, Vize: ${sinifData[x].vize}, Final: ${sinifData[x].final}`
// 		);
// 	x++;
// }
// while (x < sinifData.length)

//----------------for in ile yazdırma

// for (x in sinifData) {
//   console.log(
//     `ID: ${sinifData[x].id}, İsim: ${sinifData[x].isim}, Soyisim: ${sinifData[x].soyisim}, Vize: ${sinifData[x].vize}, Final: ${sinifData[x].final}`
//   );
// }

//-----------------------------------------------------------------Dosyaya yazdırma--------------------------------

// const fs = require("fs");

// const jsonData = JSON.stringify(sinifData, null ,5);

// fs.writeFile("sinif-data.json", jsonData, (err) => {
//   if (err) {
//     console.error("dosyaya yazma basarisiz:", err);
//   } else {
//     console.log("data dosyaya yazdırıldı");
//   }
// });

//fs modülünü import ediyoruz. bu modül dosya sistemi (file system) ile calısmamizi sagliyor

//fs.writeFile bizden string istedigi için datamızı JSON.stringify kullanarak JSON string'e çeviriyoruz

//json yerine txt formatında da kaydedebiliyoruz istersek.

//eger dosyaya yazma işlemi basarısız olursa konsoldaki hata mesajını "dosyaya yazma basarısız: " diyerek gösteriyor, başarılıysa "data dosyaya yazdırıldı" ibaresi yazdırılıyor.

//kaynak: https://www.restack.io/p/building-personal-ai-assistants-answer-node-js-write-json-array-to-file-cat-ai
