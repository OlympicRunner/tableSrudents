let listArray = ["Первый элемент", "Второй элемент", "Третий элемент"];
function createEl(Class, el) {
  let element = document.createElement(el);
  if (Array.isArray(Class)) {
    Class.forEach(item => element.classList.add(item))
  } else {
    element.classList.add(Class)
  }
  return element;
}

function createForm() {
  let form = createEl(["form", "form-container"], "form");
  let input = createEl("form__input", "input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "введите имя");
  let button = createEl("form__btn", "button");
  button.setAttribute("type", "button")
  button.textContent = "Записать";
  form.append(input)
  form.append(button)
  return [form, input, button];
}
let [form, input, button] = createForm();
document.querySelector("#app").append(form);
function drawItems(listArray, ul) {
  listArray.forEach((el, index) => {
    let li = createEl("list__item", "li");
    li.textContent = `${index}. ${el}`;
    ul.append(li);
  })
  return ul;
}
function createList(listArray) {
  let ul = createEl("list", "ul");
  return drawItems(listArray, ul);
}
function createListArray() {
  let ul = createEl("list", "ul");
  let li = createEl("mistake", "li")
  li.textContent = "Такого номера в списке задач нету"
  ul.append(li)
  return ul;
}

let ul = createList(listArray);

document.querySelector("#app").append(ul);
button.addEventListener("click", function() {
  listArray.push(input.value);
  console.log(listArray);
  ul.innerHTML = [];
  document.querySelector(".list").replaceWith(createList(listArray));
  input.value = "";
})

const search = document.querySelector(".search");
const searchNumber = document.querySelector(".search-number");
document.addEventListener("keyup", function(e) {
//   let val = e.target.value;
  
  if (e.target === search) {
    let array = listArray.filter(el => el.toLowerCase().includes(e.target.value.toLowerCase()) );
    document.querySelector(".list").replaceWith(createList(array));
  }
  
  if (e.target === searchNumber) {
    console.log("test")
    let array = listArray.filter((el, index) => index === parseInt(e.target.value));
    if (e.target.value != "" && array.length === 0) {
      document.querySelector(".list").replaceWith(createListArray());
    } else {
      document.querySelector(".list").replaceWith(createList(array.length != 0 ? array : listArray));
    }
    
  }
})