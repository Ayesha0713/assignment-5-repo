/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }












  let popup = document.getElementById("popup")

  function openPopup(){
    popup.classList.add(openPopup);
  }

  function closePopup(){
    popup.classList.remove(openPopup);
  }