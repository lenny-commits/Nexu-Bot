document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".changelog-card");

  cards.forEach(card => {
    const date = card.querySelector(".changelog-date"); // Nur Datum klickbar
    date.addEventListener("click", () => {
      // Alle anderen schließen
      cards.forEach(c => {
        if (c !== card) c.classList.remove("active");
      });

      // Diesen toggeln
      card.classList.toggle("active");
    });
  });
});

// hamburger sidebar
const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggle-btn');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active'); // öffnet oder schließt die Sidebar
});

document.addEventListener("DOMContentLoaded", () => {
    // Sidebar und Toggle Button holen
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('toggle-btn');

    // Wenn beide existieren, EventListener hinzufügen
    if (sidebar && toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            sidebar.classList.toggle('active'); // Sidebar öffnen oder schließen
        });
    }
});






