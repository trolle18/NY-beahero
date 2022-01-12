      /* When clicked, hide/show dropdown content */
  function langSwitch() {
    document.getElementById("langDropdown").classList.toggle("show-lang");
  }

  /* Close  dropdown if clicked outside */
  window.onclick = function(event) {
    if (!event.target.matches('.langbtn')) {
      var dropdowns = document.getElementsByClassName("language-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show-lang')) {
          openDropdown.classList.remove('show-lang');
        }
      }
    }
  }
    
    /* Define language reload anchors */
        var dataReload = document.querySelectorAll("[data-reload]");
        var hi = document.querySelector("#hi");
        var lang = document.querySelector("#lang");


        var coaching = document.querySelector("#coaching");
        var about = document.querySelector("#about");
        var contact = document.querySelector("#contact");

        var bcoaching = document.querySelector("#bcoaching");
        var babout = document.querySelector("#babout");
        var bcontact = document.querySelector("#bcontact");

        var headertext = document.querySelector("#headertext");


    /* Language translation */
        var language = {
            eng: {
                welcome: "Welcome!",
                lang: "Language",

                coaching: "Coaching",
                about: "About",
                contact: "Contact",

                headertext: "Enabling people to live their dreams through coaching"
                
            },


            da: {
                welcome: "Velkommen!",
                lang: "Sprog",

                coaching: "Coaching",
                about: "Om",
                contact: "Kontakt",

                headertext: "Gør det muligt for folk at udleve deres drømme gennem coaching"

            }
        };

    /* Define language via window hash */
        if (window.location.hash) {
            if (window.location.hash === "#da") {
                hi.textContent = language.da.welcome;
                lang.textContent = language.da.lang;

                coaching.textContent = language.da.coaching;
                about.textContent = language.da.about;
                contact.textContent = language.da.contact;

                bcoaching.textContent = language.da.coaching;
                babout.textContent = language.da.about;
                bcontact.textContent = language.da.contact;

                headertext.textContent = language.da.headertext;

            }
        }

    /* Define language reload onclick iliteration */
        for (i = 0; i < dataReload.length; i++) {
            console.log(dataReload[i])
            dataReload[i].onclick = function () {
                reloadPage()
            };
        }

        function reloadPage() {
            setTimeout(function () {
                location.reload();
            }, 100);
        }



// ----------------------------------------------- //

/* ---- NAV ---- */
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

/* Testemonials slideshow */
  var slideIndex = 1;
  showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



/*---- ABOUT ----*/

/* Timeline */
function handler(entries) {
  for (const entry of entries) {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("transition");
    } else {
      entry.target.classList.remove("transition");        
    }
  }
}

const observer = new
IntersectionObserver(handler, {
  threshold: 0.3,
});

const timelineElements =
document.querySelectorAll(".timeline li");


for (const element of timelineElements) {
  element.classList.add("fade-scale-in");
  observer.observe(element);
}


