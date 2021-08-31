const buttonMenu  = document.querySelector(".main__burger"), 
      openMenu = document.querySelector(".card"),
      menuClouse = document.querySelector(".menu-clouse");

      buttonMenu.addEventListener("click", ()=> {
        openMenu.classList.add("lockMenu")
      });

      menuClouse.addEventListener("click", ()=> {
        openMenu.classList.remove("lockMenu")
      })