export async function createPopup() {
  const data = await getPet(this);
  const popup = document.createElement("div");
  const popupClose = document.createElement("button");
  popupClose.innerHTML = `
  <span></span>
  <span></span>
  `;
  popupClose.classList.add("popup-close");

  popup.classList.add("popup");
  const popupBg = document.createElement("div");
  popupBg.classList.add("popup-bg");

  popup.innerHTML = `
    <img alt='puppy'  src="${data.img}">
    <div class='popup-block'>
        <h3 class="popup-header">${data.name}</h3>
        <h4 class="popup-subheader">
            <span>${data.type}</span> - <span>${data.breed}</span>
        </h4>
        <p class="popup-text">${data.description}</p>
        <ul class="popup-list">
            <li>Age: <span>${data.age}</span></li>
            <li>Inoculations: <span>${data.inoculations}</span></li>
            <li>Diseases: <span>${data.diseases
              .map((disease) => `<span>${disease}</span> `)
              .join("")}</span></li>
            <li>Parasites: <span>${data.parasites}</span></li>
        </ul>

    </div>
 
  `;

  popupBg.append(popup);
  popup.append(popupClose);
  document.body.append(popupBg);
  popupClose.addEventListener("click", deletePopup);
  document.body.style.overflow = "hidden";
}

function deletePopup() {
  document.body.style.overflow = "visible";
  document.querySelector(".popup-bg").remove();
}
async function getPet(obj) {
  const name = obj.children[1].textContent;

  const pets = await fetch("./assets/data/pets-info.json");
  const data = await pets.json();
  for (let pet of data) {
    if (pet.name === name) {
      return pet;
    }
  }
}
