// Yilni avtomatik chiqarish
document.getElementById("year").textContent = new Date().getFullYear();

// Tablar uchun kontent
const tabData = {
  about: `
    <h2>👋 Men haqimda</h2>
    <p>Salom! Men Ulug‘bek, 14 yoshdaman. Frontend dasturchiman. Toshkent shahrida yashayman.</p>
    <p>Hobbilarim: karate, baliq ovlash, stol tennisi.</p>
    <p><strong>Tillar:</strong> Uzbek, Ingliz, Rus</p>
  `,
  skills: `
    <h2>🛠 Skills</h2>
    <ul>
      <li>HTML: Hamma sahifalar uchun asos belgilash tili</li>
      <li>CSS: Chiroyli va responsiv dizaynlar ishlab chiqish</li>
      <li>Tailwind: CSS ni kutibxona orqali qulay ishlatish</li>
      <li>JavaScript: Interaktiv funksiyalar va ilovalar</li>
    </ul>
  `,
  projects: `
    <h2>🚀 Projects</h2>
    <ul>
      
      <li> Ob havo: <a class='linkProjects' target="_blank" href="https://idevbro.github.io/weatherApp/">Ob havo</a></li>
      <li>Currency Converter: <a class='linkProjects' target="_blank" href="https://ulugbekfrdev.github.io/convertion/">Valyuta ayraboshlash</a> </li>
      <li>Tasbeh: <a class='linkProjects' target="_blank" href="https://ulugbekfrdev.github.io/tasbix/">Tasbeh</a></li>
      <li> Todo List: <a class='linkProjects' target="_blank" href="https://ulugbekfrdev.github.io/TodoList/">Todo List</a></li>
      <li> Soat:<a class='linkProjects' target="_blank" href="https://ulugbekfrdev.github.io/watch/">Soat</a></li>
      
      
      <li>...</li>
    </ul>
  `,
  cert: `
    <h2>🎓 Sertifikatlar</h2>
    <p>MARS IT School - bitiruvchi sertifikati</p>
  `
};

// Tab bosilganda kontentni almashtirish
function setTab(tabName) {
  const container = document.getElementById("tab-content");
  container.innerHTML = tabData[tabName] || "<p>Bo‘lim topilmadi.</p>";
}

// Sahifa ochilganda default tabni ko'rsatish
window.onload = () => setTab('about');
