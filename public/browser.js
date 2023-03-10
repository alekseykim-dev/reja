// const { response } = require("./app");

console.log("FrontEnd Js ishga tushdi");

function itemTemplate(item) {
  return `<li class=" text-white list-group-item list-group-item-info d-flex align-items-center justify-content-between" style="background: #000000d0;">
    <span class="item-text">${item.reja}</span>
    <div>
      <button 
        data-id="${item._id}" 
        class="edit-me btn btn-secondary btn-sm mr-1">
        Edit
      </button>
      <button data-id="${item._id}" class="delete-me btn btn-success btn-sm">Completed</button>
    </div>
  </li>`;
}

let createField = document.getElementById("create-field");
document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault();
  axios
    .post("/create-item", { reja: createField.value })
    .then((response) => {
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
        createField.value = '';
        createField.focus();
    })
    .catch((err) => {
        console.log('Please, try again!')
    });
});

document.addEventListener("click", function (e) {
  //delete operation
  console.log(e.target);
  if (e.target.classList.contains("delete-me")) {
    if (confirm("Are you sure?")) {
      axios
        .post("/delete-item", { id: e.target.getAttribute("data-id") })
        .then((response) => {
          console.log(response.data);
          e.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
          console.log("Please, try again!");
        });
    }
  }
  // edit operation
  if (e.target.classList.contains("edit-me")) {
    // alert("siz edit tugmasini bosdingiz");
    let userInput = prompt(
      'Input text',
      e.target.parentElement.parentElement.querySelector(".item-text").innerText
    );
    if (userInput) {
      axios.post('/edit-item', { id: e.target.getAttribute("data-id"), new_input: userInput,}).then(response =>{
        console.log(response.data)
        e.target.parentElement.parentElement.querySelector('.item-text').innerHTML = userInput;
      }).catch(err => {
        console.log('Please, try again!')
      })
    }
  }
});


document.getElementById("clean-all").addEventListener("click", function () {
  if (confirm("Are you sure?")) {
    axios.post("/delete-all", { delete_all: true }).then((response) => {
      alert(response.data.state);
      document.location.reload();
    });
  }
});

let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

const url = "https://api.quotable.io/random";

let getQuote = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      quote.innerText = item.content;
      author.innerText = item.author;
    })
    .catch((err) => console.log("ERROR", err));
};

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);