document.addEventListener("DOMContentLoaded", function() {
    console.log("Website Loaded!");

    // Panggil fungsi buat orang melambai
    createWavingPerson();
});

function createWavingPerson() {
    let person = document.createElement("div");
    person.innerHTML = "👋😊"; // Emoji orang melambai
    person.style.position = "fixed";
    person.style.bottom = "20px"; // Jarak dari bawah
    person.style.right = "20px"; // Jarak dari kanan
    person.style.fontSize = "50px"; // Ukuran emoji
    person.style.zIndex = "1000"; // Supaya tidak tertutup elemen lain

    document.body.appendChild(person);

    // Animasi melambaikan tangan
    let waving = true;
    setInterval(() => {
        person.innerHTML = waving ? "✋😊" : "👋😊"; // Ganti emoji tiap 500ms
        waving = !waving;
    }, 500);
}
