// header



fetch('Header.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('Header-placeholder').innerHTML = data

    })
    .catch(error => console.log('Error in loading Header' + error))



// footer  

fetch("footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer-placeholder").innerHTML = data;
    })
    .catch(error => console.error("Error loading footer:", error));


//  hero-section-formdetals and model(popup from) details
function formDataSubmit(event) {
    event.preventDefault()
    var formdata = new FormData(event.target)
    var formdetails = {}
    for (var [key, value] of formdata)
        formdetails[key] = value
    // console.log(form)
    fetch('http://localhost:5500/usersdetails', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },

        body: JSON.stringify(formdetails),

    })
        //response from server
        .then(res => res.json())
        .then(data => {
            console.log(data, "data submitted success")

            var alertbtn = document.getElementById('alert-btn')
            alertbtn.style.display = 'block'
            alertbtn.innerHTML = `${data.msg}`

            setTimeout(() => {
                alertbtn.style.display = 'none'
            }, 4000)
        })
        //error from server during submitting data
        .catch(err => {
            console.log(err, "failed to submit data")

            var alertbtn = document.getElementById('alert-btn')
            alertbtn.style.display = 'block'
            alertbtn.innerHTML = `${err.msg}`
            setTimeout(() => {
                alertbtn.style.display = 'none'
            }, 4000)
        })

    // reset form after submit
    document.getElementById('heroform').reset()

}
function modelformDataSubmit(event) {
    event.preventDefault()
    var formdata = new FormData(event.target)
    var formdetails = {}
    formdata.forEach((key, value) => {
        formdetails[value] = key
    })
    console.log(formdetails)
    fetch('http://localhost:5500/usersdetails', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },

        body: JSON.stringify(formdetails),

    })
        //response from server
        .then(res => res.json())
        .then(data => {
            console.log(data, "data submitted success")

            alert(`${data.msg}`)

        })
        //error from server during submitting data
        .catch(err => {
            console.log(err, "failed to submit data")

            alert(`${err.msg}`)
        })

    //resetting form after submit
    document.getElementById('heroform').reset()

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





