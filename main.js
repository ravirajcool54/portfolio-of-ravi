

      document.addEventListener("DOMContentLoaded", () => {
        const hamburger = document.getElementById("hamburger");
        const navList = document.getElementById("nav-list");
      
        hamburger.addEventListener("click", () => {
          navList.classList.toggle("active");
      
          // Ensure the hamburger icon is hidden when the nav list is active
          if (navList.classList.contains("active")) {
            hamburger.style.display = "none"; // Hide hamburger button when menu is open
          } else {
            hamburger.style.display = "block"; // Show hamburger button when menu is closed
          }
        });
      
        // Optional: Close the nav list when clicking outside of it
        document.addEventListener("click", (e) => {
          if (!navList.contains(e.target) && !hamburger.contains(e.target)) {
            navList.classList.remove("active");
            hamburger.style.display = "block"; // Show hamburger button again
          }
        });
      });
      

      // const navlist = document.getElementById('nav-list');
      // const hamburger = document.getElementById('hamburger');


      // hamburger.addEventListener('click', ()=>{
        
      //   navlist.classList.toggle('nav-list-active')

      // });
