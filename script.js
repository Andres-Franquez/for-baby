let currentPage = 1;

const totalPages = 7;


/* =========================
   GET ELEMENTS
========================= */

const pages = document.querySelectorAll(".page");

const currentPageDisplay =
    document.getElementById("currentPage");

const progressBar =
    document.getElementById("progressBar");

const finalText =
    document.getElementById("finalText");


/* =========================
   SHOW PAGE
========================= */

function showPage(pageNumber) {

    pages.forEach((page, index) => {

        page.classList.remove("active");

        if (index === pageNumber - 1) {

            page.classList.add("active");

        }

    });


    /* Update page number */

    currentPageDisplay.textContent =
        String(pageNumber).padStart(2, "0");


    /* Update progress */

    const progress =
        (pageNumber / totalPages) * 100;

    progressBar.style.width =
        progress + "%";


    /* Special animation for final page */

    if (pageNumber === totalPages) {

        typeFinalMessage();

    }

}


/* =========================
   NEXT PAGE
========================= */

function nextPage() {

    if (currentPage < totalPages) {

        currentPage++;

        showPage(currentPage);

    }

}


/* =========================
   PREVIOUS PAGE
========================= */

function previousPage() {

    if (currentPage > 1) {

        currentPage--;

        showPage(currentPage);

    }

}


/* =========================
   RESTART
========================= */

function restart() {

    currentPage = 1;

    showPage(currentPage);

}


/* =========================
   FINAL TYPING ANIMATION
========================= */

function typeFinalMessage() {

    const text =
        "After reviewing the evidence, there is only one conclusion.";

    finalText.textContent = "";

    let index = 0;


    const interval =
        setInterval(() => {

            finalText.textContent +=
                text[index];

            index++;

            if (index >= text.length) {

                clearInterval(interval);

            }

        }, 35);

}


/* =========================
   KEYBOARD CONTROLS
========================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "ArrowRight") {

            nextPage();

        }

        if (event.key === "ArrowLeft") {

            previousPage();

        }

    }
);


/* =========================
   INITIALIZE
========================= */

showPage(currentPage);

