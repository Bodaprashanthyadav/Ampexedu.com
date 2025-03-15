// header

fetch('Header.html')
         .then(res=>res.text())
         .then(data=>{
           document.getElementById('Header-placeholder').innerHTML=data
      
         })
         .catch(error=>console.log('Error in loading Header'+error))

  

// footer  

fetch("Footer.html")
.then(response => response.text())
.then(data => {
  document.getElementById("footer-placeholder").innerHTML = data;
})
.catch(error => console.error("Error loading footer:", error));


  //  hero-section-formdetals and model(popup from) details
  function formDataSubmit() {
    alert('Details Received Thank You! We Get Back to You Soon!')
}

// Menubar-header section
function menubar() {
    var x = document.getElementById('navlinks').classList.toggle('active')
    console.log(x)
    if (x == true) {
        document.getElementById('menuIcon').innerHTML = '✖'
    }
    else {
        document.getElementById('menuIcon').innerHTML = '☰'

    }

}
document.querySelectorAll('#navlinks a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navlinks').classList.remove('active')
        document.getElementById('menuIcon').innerHTML = '☰'
        console.log(y)
    });
});



// banner-section counter
// stats-list 
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".stats-value span");
    let started = false;

    function startCounter() {
        counters.forEach(counter => {
            const target = +counter.getAttribute("data-target");
            let count = 0;
            const increment = target / 120; // Adjust speed dynamically

            const updateCount = () => {
                if (count < target) {
                    count += increment;
                    counter.innerText = Math.ceil(count);
                    setTimeout(updateCount, 30);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    }

    function handleScroll() {
        const bannerSection = document.querySelector(".banner");
        const bannerPosition = bannerSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (bannerPosition < screenPosition && !started) {
            startCounter();
            started = true;
        }
    }

    window.addEventListener("scroll", handleScroll);
});

