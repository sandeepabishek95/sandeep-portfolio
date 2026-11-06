/* ==========================================
   SANDEEP ABISHEK - PORTFOLIO JAVASCRIPT
   ========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const navigation = document.getElementById("navigation");

    // MOBILE NAVIGATION

    function closeMenu() {
        if (!menuToggle || !navigation) return;

        navigation.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    }

    if (menuToggle && navigation) {

        menuToggle.addEventListener("click", function () {

            const isOpen = navigation.classList.toggle("open");

            menuToggle.setAttribute("aria-expanded", String(isOpen));
            menuToggle.textContent = isOpen ? "✕" : "☰";

        });

        // Close menu after selecting a link

        navigation.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", closeMenu);

        });

        // Close menu when clicking outside

        document.addEventListener("click", function (event) {

            if (
                !navigation.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {
                closeMenu();
            }

        });

        // Close menu when switching to desktop width

        window.addEventListener("resize", function () {

            if (window.innerWidth > 650) {
                closeMenu();
            }

        });

    }

    // ACTIVE NAVIGATION LINK

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(".navigation a").forEach(function (link) {

        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }

    });

    // AUTOMATIC FOOTER YEAR

    const yearElement = document.getElementById("currentYear");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

});
