// 🔍 Live Search Suggestions
const searchInput = document.querySelector(".search-input");
const suggestionsBox = document.getElementById("suggestions");
const suggestionsList = [
  "sports bra for women",
  "speaker bluetooth wireless",
  "sports shoes for men running",
  "smartwatch for kids",
  "sofa set for living room",
  "samsung galaxy s24",
  "sony headphones wireless",
  "study table with chair"
];

searchInput.addEventListener("input", () => {
  const inputVal = searchInput.value.toLowerCase();
  const filtered = suggestionsList.filter(item => item.toLowerCase().includes(inputVal));
  suggestionsBox.innerHTML = "";
  if (inputVal && filtered.length > 0) {
    suggestionsBox.style.display = "block";
    filtered.forEach(item => {
      const div = document.createElement("div");
      div.classList.add("suggestion-item");
      div.innerText = item;
      div.onclick = () => {
        searchInput.value = item;
        suggestionsBox.style.display = "none";
      };
      suggestionsBox.appendChild(div);
    });
  } else {
    suggestionsBox.style.display = "none";
  }
});

// ☰ Toggle Dropdown Menu for All button
function toggleMenu() {
  const menu = document.getElementById("dropdownMenu");
  const panelAll = document.querySelector(".panel-all");
  if (menu.style.display === "block") {
    menu.style.display = "none";
    panelAll.setAttribute('aria-expanded', 'false');
  } else {
    menu.style.display = "block";
    panelAll.setAttribute('aria-expanded', 'true');
  }
}

// Click outside to close dropdown menu
window.addEventListener("click", function (e) {
  const menu = document.getElementById("dropdownMenu");
  const panelAll = document.querySelector(".panel-all");
  if (!e.target.closest(".panel-all")) {
    menu.style.display = "none";
    panelAll.setAttribute('aria-expanded', 'false');
  }
});
