const burger = document.getElementById("burger")
burger.addEventListener("click", () => {
  const menuDiv = document.getElementById("menu-div")
  burger.classList.toggle("burger-active")
  menuDiv.classList.toggle("menu-div-active")
})

window.onscroll = (x, y) => {
  // console.log(window.pageYOffset)
  const header = document.querySelector("header")
  const navMenu = header.offsetTop
  const client = document.querySelector(".client-sec")
  const clientContainer = document.querySelector("#client div")

  if (window.pageYOffset > navMenu) {
    header.classList.add("navMenu-active")
  } else {
    header.classList.remove("navMenu-active")
  }
  console.log(window.pageYOffset)
  console.log(client.offsetTop-350)
  if (window.pageYOffset >= client.offsetTop -550) {
    clientContainer.classList.remove("container")
    clientContainer.classList.add("client-active")
  } else {
    clientContainer.classList.remove("client-active")
    clientContainer.classList.add("container")
  }
}

