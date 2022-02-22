  // Read more btn 
  function moreFunction() {
    var ellipsis = document.getElementById("ellipsis");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("moreBtn");
  
    if (ellipsis.style.display === "none") {
      ellipsis.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      ellipsis.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "block";
    }
  }



/* ---------- NAV --------- */
  /* Mobile menu */

  /* When clicked, hide/show dropdown content */
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  /* Close  dropdown if clicked outside */
  window.onclick = function(event) {
    if (!event.target.matches('.fa')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }




  // ---------- LANG SWITCH ---------- //
  //     /* When clicked, hide/show dropdown content */
  // function langSwitch() {
  //   document.getElementById("langDropdown").classList.toggle("show-lang");
  // }

  // /* Close  dropdown if clicked outside */
  // window.onclick = function(event) {
  //   if (!event.target.matches('.langbtn')) {
  //     var dropdowns = document.getElementsByClassName("language-content");
  //     var i;
  //     for (i = 0; i < dropdowns.length; i++) {
  //       var openDropdown = dropdowns[i];
  //       if (openDropdown.classList.contains('show-lang')) {
  //         openDropdown.classList.remove('show-lang');
  //       }
  //     }
  //   }
  // }
    
  //   /* Define language reload anchors */
  //       var dataReload = document.querySelectorAll("[data-reload]");
  //       var hi = document.querySelector("#hi");
  //       var lang = document.querySelector("#lang");


  //       var coaching = document.querySelector("#coaching");
  //       var about = document.querySelector("#about");
  //       var contact = document.querySelector("#contact");

  //       var bcoaching = document.querySelector("#bcoaching");
  //       var babout = document.querySelector("#babout");
  //       var bcontact = document.querySelector("#bcontact");

  //       var headertext = document.querySelector("#headertext");


  //   /* Language translation */
  //       var language = {
  //           eng: {
  //               welcome: "",
  //               lang: "Language",

  //               coaching: "Coaching",
  //               about: "About",
  //               contact: "Contact",

  //               headertext: "Enabling people to live their dreams through coaching"
                
  //           },


  //           da: {
  //               welcome: "",
  //               lang: "Sprog",

  //               coaching: "Coaching",
  //               about: "Om",
  //               contact: "Kontakt",

  //               headertext: "Gør det muligt for folk at udleve deres drømme gennem coaching"

  //           }
  //       };

  //   /* Define language via window hash */
  //       if (window.location.hash) {
  //           if (window.location.hash === "#da") {
  //               hi.textContent = language.da.welcome;
  //               lang.textContent = language.da.lang;

  //               coaching.textContent = language.da.coaching;
  //               about.textContent = language.da.about;
  //               contact.textContent = language.da.contact;

  //               bcoaching.textContent = language.da.coaching;
  //               babout.textContent = language.da.about;
  //               bcontact.textContent = language.da.contact;

  //               headertext.textContent = language.da.headertext;

  //           }
  //       }

  //   /* Define language reload onclick iliteration */
  //       for (i = 0; i < dataReload.length; i++) {
  //           console.log(dataReload[i])
  //           dataReload[i].onclick = function () {
  //               reloadPage()
  //           };
  //       }

  //       function reloadPage() {
  //           setTimeout(function () {
  //               location.reload();
  //           }, 100);
  //       }
