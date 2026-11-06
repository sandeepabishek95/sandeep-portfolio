/* ==========================================
   SANDEEP ABISHEK - PORTFOLIO JAVASCRIPT
   ========================================== */

document.addEventListener("DOMContentLoaded", function () {

    // 1. MOBILE NAVIGATION
    const menuToggle = document.getElementById("menuToggle");
    const navigation = document.getElementById("navigation");

    if (menuToggle && navigation) {

        // Open and close mobile menu
        menuToggle.addEventListener("click", function () {

            const isOpen = navigation.classList.toggle("open");

            menuToggle.setAttribute("aria-expanded", isOpen);

            menuToggle.textContent = isOpen ? "✕" : "☰";

        });

        // Close menu when a link is selected
        const navLinks = navigation.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navigation.classList.remove("open");

                menuToggle.setAttribute("aria-expanded", "false");

                menuToggle.textContent = "☰";

            });

        });

    }

    // 2. HIGHLIGHT CURRENT PAGE
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    const allLinks = document.querySelectorAll(".navigation a");

    allLinks.forEach(function (link) {

        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }

    });

    // 3. CLOSE MENU WHEN CLICKING OUTSIDE
    document.addEventListener("click", function (event) {

        if (
            menuToggle &&
            navigation &&
            !navigation.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {

            navigation.classList.remove("open");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.textContent = "☰";

        }

    });

    // 4. FOOTER YEAR
    const yearElement = document.getElementById("currentYear");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

});
