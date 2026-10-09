/* =========================================================
   AI DEVELOPER PORTFOLIO
   JAVASCRIPT ES6+
========================================================= */


/* =========================================================
   1. TYPING ANIMATION
========================================================= */

const typingText =
    document.getElementById("typingText");


const words = [

    "AI / ML Enthusiast",
    "Full Stack Developer",
    "Data Science Learner",
    "Creative Problem Solver",
    "Technology Explorer",
    "Computer Science Student",
    "AI & ML Enthusiast",
    "Python Developer",
    "Web Developer",
    "Future Software Engineer"

];


let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typingAnimation() {

    const currentWord =
        words[wordIndex];


    if (!deleting) {

        typingText.textContent =
            currentWord.substring(
                0,
                charIndex + 1
            );

        charIndex++;


        if (
            charIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typingAnimation,
                1400
            );

            return;

        }

    }

    else {

        typingText.textContent =
            currentWord.substring(
                0,
                charIndex - 1
            );

        charIndex--;


        if (charIndex === 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1)
                % words.length;

        }

    }


    setTimeout(
        typingAnimation,
        deleting ? 55 : 95
    );

}


typingAnimation();



/* =========================================================
   2. PROJECT DATABASE
========================================================= */

const projects = [

    {
        title: "ScholarAI",
        category: "ai",
        categoryName: "AI / ML",
        number: "01",
        description:
            "An AI-powered scholarship management system that helps students discover scholarships, check eligibility and receive personalized recommendations.",
        tags: [
            "Python",
            "AI",
            "FastAPI",
            "PostgreSQL"
        ]
    },


    {
        title: "House Price Prediction",
        category: "ai",
        categoryName: "AI / ML",
        number: "02",
        description:
            "A machine learning system that predicts house prices using data preprocessing, feature engineering and regression algorithms.",
        tags: [
            "Python",
            "Machine Learning",
            "Pandas",
            "Scikit-learn"
        ]
    },


    {
        title: "SMS Spam Classification",
        category: "data",
        categoryName: "DATA",
        number: "03",
        description:
            "An NLP-based machine learning project that classifies messages as spam or legitimate.",
        tags: [
            "Python",
            "NLP",
            "Naive Bayes",
            "SVM"
        ]
    },


    {
        title: "Internet Outage Prediction",
        category: "ai",
        categoryName: "AI / ML",
        number: "04",
        description:
            "An intelligent system designed to detect abnormal network behavior, predict outages and identify possible causes.",
        tags: [
            "Python",
            "AI",
            "NetworkX",
            "FastAPI"
        ]
    },


    {
        title: "AI Developer Portfolio",
        category: "web",
        categoryName: "WEB",
        number: "05",
        description:
            "A professional responsive portfolio created using semantic HTML5, modern CSS3, Bootstrap and JavaScript ES6+.",
        tags: [
            "HTML5",
            "CSS3",
            "Bootstrap",
            "JavaScript"
        ]
    },


    {
        title: "IoT Flood Monitoring",
        category: "iot",
        categoryName: "IOT",
        number: "06",
        description:
            "An IoT concept for monitoring environmental conditions and providing early warnings for flood situations.",
        tags: [
            "IoT",
            "Arduino",
            "Sensors",
            "Automation"
        ]
    }

];



/* =========================================================
   3. PROJECT DISPLAY
========================================================= */

const projectsContainer =
    document.getElementById(
        "projectsContainer"
    );


function displayProjects(
    selectedCategory = "all"
) {

    projectsContainer.innerHTML = "";


    const filteredProjects =
        selectedCategory === "all"

            ? projects

            : projects.filter(
                project =>
                    project.category ===
                    selectedCategory
            );


    filteredProjects.forEach(
        project => {

            const card = document.createElement(
                "div"
            );


            card.className =
                "col-md-6 col-lg-4";


            card.innerHTML = `

                <article class="project-card">

                    <div class="project-top">

                        <span class="project-number">
                            PROJECT ${project.number}
                        </span>

                        <span class="project-category">
                            ${project.categoryName}
                        </span>

                    </div>


                    <h3>
                        ${project.title}
                    </h3>


                    <p>
                        ${project.description}
                    </p>


                    <div class="project-tags">

                        ${project.tags
                            .map(
                                tag =>
                                `<span>${tag}</span>`
                            )
                            .join("")}

                    </div>


                    <a
                        href="#contact"
                        class="project-link">

                        Discuss Project →

                    </a>

                </article>

            `;


            projectsContainer.appendChild(
                card
            );

        }
    );

}


displayProjects();



/* =========================================================
   4. PROJECT FILTERING
========================================================= */

const filterButtons =
    document.querySelectorAll(
        ".filter"
    );


filterButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                filterButtons.forEach(
                    btn =>
                    btn.classList.remove(
                        "active"
                    )
                );


                button.classList.add(
                    "active"
                );


                displayProjects(
                    button.dataset.filter
                );

            }
        );

    }
);



/* =========================================================
   5. AI PROJECT EXPLORER
========================================================= */

const areaSelector =
    document.getElementById(
        "areaSelector"
    );


const exploreBtn =
    document.getElementById(
        "exploreBtn"
    );


const explorerResult =
    document.getElementById(
        "explorerResult"
    );


const recommendations = {

    ai: {

        title:
            "Artificial Intelligence",

        projects: [
            "ScholarAI",
            "House Price Prediction",
            "Internet Outage Prediction"
        ],

        description:
            "Explore projects involving machine learning, intelligent recommendation systems and predictive analytics."

    },


    web: {

        title:
            "Web Development",

        projects: [
            "AI Developer Portfolio"
        ],

        description:
            "Explore responsive websites and interactive applications built with HTML, CSS, Bootstrap and JavaScript."

    },


    data: {

        title:
            "Data Science",

        projects: [
            "SMS Spam Classification",
            "House Price Prediction"
        ],

        description:
            "Explore projects involving data preprocessing, analysis, visualization and machine learning."

    },


    iot: {

        title:
            "IoT & Robotics",

        projects: [
            "IoT Flood Monitoring"
        ],

        description:
            "Explore technology concepts combining sensors, hardware and intelligent automation."

    }

};


exploreBtn.addEventListener(
    "click",
    () => {

        const selected =
            areaSelector.value;


        if (!selected) {

            explorerResult.innerHTML = `

                <div class="explorer-placeholder">

                    <span>⚠</span>

                    <p>
                        Please select an area
                        before exploring.
                    </p>

                </div>

            `;

            return;

        }


        const result =
            recommendations[selected];


        explorerResult.innerHTML = `

            <div class="result-card">

                <div class="result-item">

                    <span>
                        AREA
                    </span>

                    <h4>
                        ${result.title}
                    </h4>

                    <p>
                        ${result.description}
                    </p>

                </div>


                ${result.projects
                    .map(
                        (project, index) => `

                        <div class="result-item">

                            <span>
                                PROJECT ${index + 1}
                            </span>

                            <h4>
                                ${project}
                            </h4>

                            <p>
                                Recommended project
                                based on your interest.
                            </p>

                        </div>

                    `
                    )
                    .join("")}

            </div>

        `;

    }
);



/* =========================================================
   6. CONTACT FORM VALIDATION
========================================================= */

const contactForm =
    document.getElementById(
        "contactForm"
    );


const nameInput =
    document.getElementById(
        "name"
    );


const emailInput =
    document.getElementById(
        "email"
    );


const messageInput =
    document.getElementById(
        "message"
    );


const nameError =
    document.getElementById(
        "nameError"
    );


const emailError =
    document.getElementById(
        "emailError"
    );


const messageError =
    document.getElementById(
        "messageError"
    );


const formSuccess =
    document.getElementById(
        "formSuccess"
    );


/* EMAIL REGEX */

const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



/* LIVE NAME VALIDATION */

nameInput.addEventListener(
    "input",
    () => {

        if (
            nameInput.value.trim().length >= 2
        ) {

            nameError.textContent =
                "✓";

            nameError.style.color =
                "#34d399";

        }

        else {

            nameError.textContent =
                "";

        }

    }
);



/* LIVE EMAIL VALIDATION */

emailInput.addEventListener(
    "input",
    () => {

        if (
            emailPattern.test(
                emailInput.value.trim()
            )
        ) {

            emailError.textContent =
                "✓ Valid email";

            emailError.style.color =
                "#34d399";

        }

        else {

            emailError.textContent =
                "Enter a valid email address.";

            emailError.style.color =
                "#ff718d";

        }

    }
);



/* FORM SUBMISSION */

contactForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        let valid = true;


        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";
        formSuccess.textContent = "";


        /* NAME */

        if (
            nameInput.value.trim().length < 2
        ) {

            nameError.textContent =
                "Please enter your name.";

            valid = false;

        }


        /* EMAIL */

        if (
            !emailPattern.test(
                emailInput.value.trim()
            )
        ) {

            emailError.textContent =
                "Please enter a valid email.";

            valid = false;

        }


        /* MESSAGE */

        if (
            messageInput.value.trim().length < 10
        ) {

            messageError.textContent =
                "Message must contain at least 10 characters.";

            valid = false;

        }


        /* SUCCESS */

        if (valid) {

            formSuccess.innerHTML =
                "✓ Message validated successfully!";

            formSuccess.style.color =
                "#34d399";


            contactForm.reset();

        }

    }
);



/* =========================================================
   7. DARK / LIGHT MODE
========================================================= */

const themeToggle =
    document.getElementById(
        "themeToggle"
    );


themeToggle.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "light"
        );


        const isLight =
            document.body.classList.contains(
                "light"
            );


        themeToggle.textContent =
            isLight
                ? "🌙"
                : "☀️";


        localStorage.setItem(
            "portfolioTheme",
            isLight
                ? "light"
                : "dark"
        );

    }
);


/* LOAD SAVED THEME */

if (
    localStorage.getItem(
        "portfolioTheme"
    ) === "light"
) {

    document.body.classList.add(
        "light"
    );

    themeToggle.textContent =
        "🌙";

}



/* =========================================================
   8. BACK TO TOP
========================================================= */

const backToTop =
    document.getElementById(
        "backToTop"
    );


window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 500
        ) {

            backToTop.classList.add(
                "show"
            );

        }

        else {

            backToTop.classList.remove(
                "show"
            );

        }

    }
);


backToTop.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);



/* =========================================================
   9. ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll(
        "section"
    );


const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );


window.addEventListener(
    "scroll",
    () => {

        let currentSection = "";


        sections.forEach(
            section => {

                const sectionTop =
                    section.offsetTop - 180;


                if (
                    window.scrollY >=
                    sectionTop
                ) {

                    currentSection =
                        section.id;

                }

            }
        );


        navLinks.forEach(
            link => {

                link.classList.remove(
                    "active"
                );


                if (
                    link.getAttribute(
                        "href"
                    ) ===
                    "#" + currentSection
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);



/* =========================================================
   10. MOBILE NAVIGATION
========================================================= */

const mobileLinks =
    document.querySelectorAll(
        ".navbar-nav .nav-link"
    );


const navbarMenu =
    document.getElementById(
        "mainNav"
    );


mobileLinks.forEach(
    link => {

        link.addEventListener(
            "click",
            () => {

                if (
                    navbarMenu.classList.contains(
                        "show"
                    )
                ) {

                    const menu =
                        bootstrap.Collapse
                        .getInstance(
                            navbarMenu
                        );


                    if (menu) {

                        menu.hide();

                    }

                }

            }
        );

    }
);



/* =========================================================
   11. SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".skill-box, .project-card, .achievement, .timeline-content, .profile-card"
    );


revealElements.forEach(
    element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(25px)";

        element.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

    }
);


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                    }

                }
            );

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(
    element =>
        revealObserver.observe(
            element
        )
    );