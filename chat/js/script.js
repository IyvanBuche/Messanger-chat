let theme_btn = document.querySelector('.theme');
let main_cont = document.querySelector('.main-cont');
let chat_cont = document.querySelector('.chat-cont');
let theme_icon = theme_btn.children[0];
let theme = localStorage.getItem('theme');
let styles = document.querySelector('#style');

theme_btn.addEventListener('click', themeToggle);
function themeToggle(){
  if (theme == "light"){
    theme_icon.classList.toggle('bi-sun-fill');
    // console.log("dark theme");
    styles.href="css/main.css"
    console.log(theme);
    localStorage.setItem('theme', theme);
    theme = "dark";
  }else{
    // console.log("light theme");
    styles.href="css/light.css"
    console.log(theme);
    localStorage.setItem('theme', theme);
    theme = "light";
    
  }
}

themeToggle();
