console.log("FrontEnd Js ishga tushdi");

function itemTemplate(item) {
  return `<li class=" bg-light text-dark list-group-item list-group-item-info d-flex align-items-center justify-content-between">
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
            e.target.parentElement.parentElement.remove()
        })
        .catch((err) => {
            console.log('Please, try again!')

        });
    }
  }

  if (e.target.classList.contains("edit-me")) {
    alert("siz edit tugmasini bosdingiz");
  }
});