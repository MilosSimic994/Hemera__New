const enterBtn = document.querySelector("#enter-btn");
const codeInput = document.getElementById("code");
const modal = document.querySelector(".modal");
const error = document.getElementById("error");

const checkCode = (e) => {
  e.preventDefault();
  console.log(code);

  if (code.value === "12345") {
    e.preventDefault();
    const container = document.querySelector(".modal__container");
    container.lastElementChild.classList.add("remove");
    container.innerHTML = `
    <a href="cenovnik.xlsx" class="price-link">Preuzmi cenovnik
    <img src="../assets/images/images/clipboard.png" class="price-list"/></a>
    `;
  } else {
    code.style.border = "2px solid red";
    error.innerHTML = `Pogresan unos! Ukoliko želite pristup našem cenovniku  <a href="contacts.html">kontaktirajte nas.</a>`;
  }
};

enterBtn.addEventListener("click", checkCode);
