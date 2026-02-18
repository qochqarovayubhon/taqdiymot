// Magic Button Effect
document.getElementById("magicBtn").addEventListener("click", () => {
  const stars = 50;
  for (let i = 0; i < stars; i++) {
    const star = document.createElement("div");
    star.innerText = "⭐";
    star.style.position = "fixed";
    star.style.top = Math.random() * window.innerHeight + "px";
    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.fontSize = Math.random() * 24 + 12 + "px";
    star.style.opacity = 0.8;
    star.style.transition = "transform 1s ease-out, opacity 1s ease-out";
    document.body.appendChild(star);

    setTimeout(() => {
      star.style.transform = `translateY(-200px) rotate(${Math.random() * 360}deg)`;
      star.style.opacity = 0;
    }, 50);

    setTimeout(() => star.remove(), 1500);
  }
});
document.getElementById("magicBtn").addEventListener("click", () => {
  const stars = 30; // mobil uchun kamroq
  for (let i = 0; i < stars; i++) {
    const star = document.createElement("div");
    star.innerText = "⭐";
    star.style.position = "fixed";
    star.style.top = Math.random() * window.innerHeight + "px";
    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.fontSize = Math.random() * 20 + 10 + "px";
    star.style.opacity = 0.8;
    star.style.transition = "transform 1s ease-out, opacity 1s ease-out";
    document.body.appendChild(star);

    setTimeout(() => {
      star.style.transform = `translateY(-150px) rotate(${Math.random() * 360}deg)`;
      star.style.opacity = 0;
    }, 50);

    setTimeout(() => star.remove(), 1200);
  }
});
let centers = [
  {
    name: "Najot Ta'lim",
    rating: 4,
    desc: "Najot Ta'lim – IT va soft skills o‘rgatadi.",
  },
  {
    name: "PDP Academy",
    rating: 5,
    desc: "PDP Academy – professional web dasturchilar tayyorlaydi.",
  },
  {
    name: "IT Park School",
    rating: 3,
    desc: "IT Park School – startaplar va coding bootcamp.",
  },
  {
    name: "Digital Camp",
    rating: 4,
    desc: "Digital Camp – raqamli marketing va IT o‘quv markazi.",
  },
  {
    name: "TechFuture",
    rating: 5,
    desc: "TechFuture – zamonaviy IT va AI kurslari.",
  },
  {
    name: "CodeMasters",
    rating: 4,
    desc: "CodeMasters – web va mobil app kurslari.",
  },
];

function displayCenters(data) {
  const list = document.getElementById("centerList");
  list.innerHTML = "";

  data.forEach((center, index) => {
    let stars = "";
    for (let i = 1; i <= 5; i++) {
      stars += `<span onclick="rate(${index},${i}); event.stopPropagation();" style="cursor:pointer; font-size:20px; color:gold">${i <= center.rating ? "★" : "☆"}</span>`;
    }

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${center.name}</h3>
      <div>${stars}</div>
      <p>Reyting: ${center.rating}/5</p>
    `;

    // Popup ochish
    card.addEventListener("click", () => {
      document.getElementById("popupTitle").innerText = center.name;
      document.getElementById("popupDesc").innerText = center.desc;
      document.getElementById("popupRating").innerText = center.rating;
      document.getElementById("popup").classList.remove("hidden");
    });

    list.appendChild(card);
  });
}

// Baholash
function rate(index, value) {
  centers[index].rating = value;
  displayCenters(centers);
}

// Popup yopish
document.getElementById("closePopup").addEventListener("click", () => {
  document.getElementById("popup").classList.add("hidden");
});

// Saralash va qidiruv (oldingi kod bilan bir xil)
displayCenters(centers);
