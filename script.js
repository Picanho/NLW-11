const form = document.querySelector("#form-habits");
const nlwSetup = new NLWSetup(form);

const button = document.querySelector("header button");

button.addEventListener("click", add);
form.addEventListener("change", save);

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5);
  //const today = "01/01" dá pra usar essa linha de código pra testar com datas diferentes, pra ter certeza que tá funcionando mesmo
  const dayExists = nlwSetup.dayExists(today);

  if (dayExists) {
    alert("Impossível, dia já incluso ❌");
    return;
  }

  alert("Deu certo, dia adicionado ✔️");
  nlwSetup.addDay(today);
}

function save() {
  localStorage.setItem("NLWSetup-habits", JSON.stringify(nlwSetup.data));
}

const data = JSON.parse(localStorage.getItem("NLWSetup-habits")) || {};
nlwSetup.setData(data);
nlwSetup.load();