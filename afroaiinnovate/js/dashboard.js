/* == SIDE NAVIGATION == */
document.addEventListener("DOMContentLoaded", function () {
    const menuBarIcon = document.querySelector(".menu-btn");
    const textDivs = document.querySelectorAll(".text");
    const sideNav = document.querySelector(".dash-side-nav");
    let isMenuOpen = true;

    menuBarIcon.addEventListener("click", function () {
        if (isMenuOpen) {
            textDivs.forEach((textDiv) => {
                textDiv.style.display = "none";
            });

            sideNav.style.width = "68px";
        } else {
            textDivs.forEach((textDiv) => {
                textDiv.style.display = "block"; // Show "text" divs again
            });

            sideNav.style.width = "300px"; // Restore the default width
        }

        isMenuOpen = !isMenuOpen; // Toggle the state
    });
});
/* == || SIDE NAVIGATION == */

/* == DASHBOARD NAV MENU TABS == */
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn-content");

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            // Remove the 'active' class from all buttons
            buttons.forEach((btn) => {
                btn.classList.remove("active");
            });

            // Add the 'active' class to the clicked button
            this.classList.add("active");

            // Hide all content sections
            const contentSections = document.querySelectorAll(".dash-content-displayed > div");
            contentSections.forEach((section) => {
                section.style.display = "none";
            });

            // Show the corresponding content section
            const buttonText = this.querySelector(".text span").textContent;
            const contentId = buttonText.toLowerCase() + "-content";
            const contentToShow = document.getElementById(contentId);

            if (contentToShow) {
                contentToShow.style.display = "block";
            }
        });
    });
});

/* == || DASHBOARD NAV MENU TABS == */