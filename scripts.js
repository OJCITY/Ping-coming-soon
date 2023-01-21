const inputEmail = document.getElementById("email");
const submitbtn = document.getElementById("btn");
const form = document.getElementById("form");

submitbtn.addEventListener("click", (e) => {
  e.preventDefault();
  const regEx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (inputEmail.value.match(regEx)) {
    console.log(inputEmail.value);
    form.classList.remove("error");
  } else {
    console.log("Error");
    form.classList.add("error");
    form.classList.add("error");
  }
});
