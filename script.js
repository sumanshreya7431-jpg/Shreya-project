/* =========================
   SDG GOALS (DROPDOWN CARDS)
========================= */

const sdgs = [

    {
        title: "No Poverty",
        emoji: "🏠",
        color: "#E5243B",
        tagline: "End poverty in all its forms, everywhere",
        about: "Poverty means not having enough money or resources for food, shelter, clothing and safety. This goal aims to make sure every person can live with dignity and have a fair chance to grow.",
        points: [
            "Give families access to basic services like water, health and schooling",
            "Protect people during hard times such as floods, droughts or job loss",
            "Create equal opportunities to earn a fair living"
        ],
        fact: "This goal is first on the list because ending poverty makes it easier to achieve almost every other goal.",
        action: "Donate clothes, books or toys you no longer use, and support local small businesses."
    },

    {
        title: "Zero Hunger",
        emoji: "🌾",
        color: "#DDA63A",
        tagline: "Food and good nutrition for everyone",
        about: "Everyone deserves enough safe and healthy food. This goal focuses on ending hunger, improving nutrition and helping farmers grow food in ways that do not harm the Earth.",
        points: [
            "Support small farmers with better seeds, tools and fair prices",
            "Use farming methods that protect soil and water",
            "Reduce food loss between the farm and the plate"
        ],
        fact: "A large amount of the food produced in the world is wasted, even while many people go hungry.",
        action: "Take only what you can eat, finish your meals and share extra food with others."
    },

    {
        title: "Good Health",
        emoji: "💪",
        color: "#4C9F38",
        tagline: "Healthy lives and well-being at every age",
        about: "Good health is more than not being sick. It includes a healthy body and a healthy mind. This goal works to make healthcare, medicines and vaccines available to everyone.",
        points: [
            "Prevent diseases through vaccination and hygiene",
            "Provide quality healthcare to people everywhere",
            "Care for mental health as much as physical health"
        ],
        fact: "Clean air, clean water and healthy food all play a big part in keeping people well.",
        action: "Play outdoors, sleep well, eat balanced meals and wash your hands regularly."
    },

    {
        title: "Quality Education",
        emoji: "📚",
        color: "#C5192D",
        tagline: "Inclusive and fair learning for all",
        about: "Education opens doors to better jobs and better choices. This goal aims to give every child and adult the chance to learn, no matter where they live or who they are.",
        points: [
            "Make sure all children can finish school",
            "Train more skilled and caring teachers",
            "Build safe, welcoming and well-equipped schools"
        ],
        fact: "Educated people are better able to protect the environment and help their communities.",
        action: "Help a friend with a lesson, share your books and never stop being curious."
    },

    {
        title: "Gender Equality",
        emoji: "⚖️",
        color: "#FF3A21",
        tagline: "Equal rights and chances for girls and boys",
        about: "Girls, women, boys and men should all be treated fairly and have the same opportunities. This goal works to end discrimination and give everyone a voice.",
        points: [
            "Equal access to education and jobs",
            "Protection from unfair treatment and violence",
            "Equal voice in decisions at home, school and work"
        ],
        fact: "When girls and women have equal opportunities, whole families and communities become stronger.",
        action: "Treat everyone with respect, and speak up when someone is treated unfairly."
    },

    {
        title: "Clean Water",
        emoji: "🚰",
        color: "#26BDE2",
        tagline: "Safe water and sanitation for everyone",
        about: "Clean drinking water and proper toilets keep people healthy. This goal makes sure everyone has safe water and that rivers, lakes and groundwater are protected.",
        points: [
            "Provide safe drinking water to every home",
            "Build clean and safe sanitation facilities",
            "Stop pollution and protect water sources"
        ],
        fact: "Only a small part of the water on Earth is fresh and usable, so every drop is precious.",
        action: "Close taps tightly, fix leaks, take shorter showers and never pollute water bodies."
    },

    {
        title: "Clean Energy",
        emoji: "☀️",
        color: "#FCC30B",
        tagline: "Affordable and clean energy for all",
        about: "Energy powers our homes, schools and hospitals. This goal encourages renewable energy from the Sun, wind and water, which does not run out and causes far less pollution.",
        points: [
            "Use more solar, wind and hydro power",
            "Make electricity affordable and reliable",
            "Improve energy efficiency in homes and industries"
        ],
        fact: "Sunlight is a free and renewable source of energy that can be used again and again.",
        action: "Switch off lights and fans when not in use, and use energy-saving bulbs."
    },

    {
        title: "Decent Work",
        emoji: "💼",
        color: "#A21942",
        tagline: "Good jobs and a growing economy",
        about: "Everyone should have the chance to do safe, fair and meaningful work. This goal supports economic growth that creates jobs without harming people or nature.",
        points: [
            "Create safe jobs with fair pay",
            "Stop child labour and forced work",
            "Support young people and new businesses"
        ],
        fact: "Growth is truly healthy only when it is fair to workers and kind to the environment.",
        action: "Respect all kinds of work and buy from businesses that treat people fairly."
    },

    {
        title: "Innovation",
        emoji: "🏗️",
        color: "#FD6925",
        tagline: "Industry, innovation and strong infrastructure",
        about: "Roads, bridges, internet and clean factories help communities grow. This goal encourages smart new ideas and technology that are good for people and the planet.",
        points: [
            "Build strong and sustainable infrastructure",
            "Support research and new inventions",
            "Bring internet and technology to everyone"
        ],
        fact: "Many of today's best green solutions, like solar panels and electric vehicles, began as simple ideas.",
        action: "Be creative, ask questions and try to invent a small solution to a problem around you."
    },

    {
        title: "Reduced Inequalities",
        emoji: "🤝",
        color: "#DD1367",
        tagline: "Fairness within and between countries",
        about: "People should not be left behind because of where they were born, their income, ability, religion or background. This goal works to close the gaps between people.",
        points: [
            "Include everyone in education, work and community life",
            "Remove unfair rules and discrimination",
            "Help people with disabilities take part fully"
        ],
        fact: "Fairer societies tend to be safer, healthier and happier for everyone.",
        action: "Be kind, include new classmates and help people who need support."
    },

    {
        title: "Sustainable Cities",
        emoji: "🏙️",
        color: "#FD9D24",
        tagline: "Safe, green and inclusive cities",
        about: "More and more people live in cities. This goal makes cities cleaner, safer and more comfortable with good housing, public transport, parks and waste management.",
        points: [
            "Provide safe and affordable housing",
            "Improve public transport and reduce traffic",
            "Create more green spaces and cut air pollution"
        ],
        fact: "Trees and parks in a city keep the air cleaner and help lower the heat.",
        action: "Use public transport, walk or cycle for short trips and keep your neighbourhood clean."
    },

    {
        title: "Responsible Consumption",
        emoji: "♻️",
        color: "#BF8B2E",
        tagline: "Use less, waste less, reuse more",
        about: "We cannot keep using resources faster than nature can renew them. This goal encourages smart buying, less waste and more reusing and recycling.",
        points: [
            "Reduce waste through the 3 Rs: Reduce, Reuse, Recycle",
            "Waste less food and packaging",
            "Make products that last longer"
        ],
        fact: "Reusing and repairing things saves the energy and materials needed to make new ones.",
        action: "Carry a cloth bag, use a refillable bottle and separate dry and wet waste."
    },

    {
        title: "Climate Action",
        emoji: "🌡️",
        color: "#3F7E44",
        tagline: "Take urgent action against climate change",
        about: "Greenhouse gases like carbon dioxide are warming our planet, causing extreme weather and rising seas. This goal asks everyone to cut pollution and prepare for climate change.",
        points: [
            "Reduce greenhouse gas emissions",
            "Help communities adapt to floods, heatwaves and storms",
            "Teach people about climate change"
        ],
        fact: "Planting and protecting trees helps absorb carbon dioxide from the air.",
        action: "Plant a tree, save electricity and choose walking, cycling or sharing rides."
    },

    {
        title: "Life Below Water",
        emoji: "🐠",
        color: "#0A97D9",
        tagline: "Protect oceans, seas and marine life",
        about: "Oceans give us food, oxygen and a stable climate. This goal protects sea life from pollution, plastic waste and overfishing.",
        points: [
            "Reduce plastic and chemical pollution in the sea",
            "Fish in ways that do not harm marine life",
            "Protect coral reefs and coastal areas"
        ],
        fact: "Much of the plastic in the ocean comes from waste on land that is not handled properly.",
        action: "Avoid single-use plastic and never throw waste into rivers, lakes or beaches."
    },

    {
        title: "Life on Land",
        emoji: "🌳",
        color: "#56C02B",
        tagline: "Protect forests, soil and wildlife",
        about: "Forests, mountains and grasslands are home to countless plants and animals. This goal protects them, stops land from turning into desert and saves species from extinction.",
        points: [
            "Protect forests and plant more trees",
            "Stop illegal hunting and trade in wildlife",
            "Restore damaged land and soil"
        ],
        fact: "Forests give us clean air, shelter wildlife and help control the climate.",
        action: "Plant a sapling, respect wildlife and use paper carefully."
    },

    {
        title: "Peace & Justice",
        emoji: "🕊️",
        color: "#00689D",
        tagline: "Peaceful, fair and trusted institutions",
        about: "Everyone has the right to feel safe and to be treated fairly. This goal promotes peace, honest governments and justice that is open to all.",
        points: [
            "Reduce violence and conflict",
            "Provide fair and equal access to justice",
            "Build honest and open institutions"
        ],
        fact: "Peaceful communities are better able to work together on every other global goal.",
        action: "Solve problems calmly, stand up against bullying and always be honest."
    },

    {
        title: "Partnerships",
        emoji: "🌐",
        color: "#19486A",
        tagline: "Work together to reach the goals",
        about: "No single person or country can achieve these goals alone. This goal brings together governments, businesses, schools and people to share knowledge, technology and resources.",
        points: [
            "Share knowledge and technology between countries",
            "Support countries that need extra help",
            "Bring governments, companies and citizens together"
        ],
        fact: "The 17 goals were adopted by all United Nations member countries in 2015, to be worked on together by 2030.",
        action: "Team up with friends, family and classmates for clean-up drives and awareness projects."
    }

];


const sdgGrid = document.getElementById("sdgGrid");

function buildSDGs() {

    if (!sdgGrid) return;

    sdgs.forEach((goal, i) => {

        const number = i + 1;

        const card = document.createElement("article");
        card.className = "sdg";
        card.style.setProperty("--c", goal.color);

        card.innerHTML = `
            <button class="sdg-head"
                    id="sdg-btn-${number}"
                    aria-expanded="false"
                    aria-controls="sdg-panel-${number}">

                <span class="sdg-num">${number}</span>
                <span class="sdg-title">${goal.title}</span>
                <span class="sdg-emoji" aria-hidden="true">${goal.emoji}</span>
                <span class="sdg-chevron" aria-hidden="true"></span>

            </button>

            <div class="sdg-panel"
                 id="sdg-panel-${number}"
                 role="region"
                 aria-labelledby="sdg-btn-${number}">

                <div class="sdg-panel-inner">
                    <div class="sdg-body">

                        <span class="sdg-tagline">${goal.tagline}</span>

                        <p class="sdg-desc">${goal.about}</p>

                        <h4>🎯 Key Targets</h4>
                        <ul class="sdg-list">
                            ${goal.points.map(p => `<li>${p}</li>`).join("")}
                        </ul>

                        <div class="sdg-fact">
                            <b>💡 Did you know?</b>
                            ${goal.fact}
                        </div>

                        <div class="sdg-action">
                            <b>🌱 What can I do?</b>
                            ${goal.action}
                        </div>

                    </div>
                </div>
            </div>
        `;

        sdgGrid.appendChild(card);

    });

}


/* Close every card */
function closeAllSDGs() {

    document.querySelectorAll(".sdg.open").forEach(card => {

        card.classList.remove("open");

        card.querySelector(".sdg-head")
            .setAttribute("aria-expanded", "false");

    });

}


/* Click: open the clicked goal, close all the others */
function toggleSDG(card) {

    const wasOpen = card.classList.contains("open");

    closeAllSDGs();

    if (!wasOpen) {

        card.classList.add("open");

        card.querySelector(".sdg-head")
            .setAttribute("aria-expanded", "true");

        /* keep the opened card in view (below the sticky header) */
        setTimeout(() => {
            card.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }, 420);

    }

}


if (sdgGrid) {

    buildSDGs();

    sdgGrid.addEventListener("click", function (e) {

        const head = e.target.closest(".sdg-head");

        if (head) toggleSDG(head.closest(".sdg"));

    });

    /* Esc key closes the open card */
    document.addEventListener("keydown", function (e) {

        if (e.key === "Escape") closeAllSDGs();

    });

}


/* =========================
   QUIZ
========================= */

const questions = [

    {
        question: "Which source of energy is renewable?",
        options: [
            "🛢️ Petroleum",
            "⛏️ Coal",
            "☀️ Solar Energy",
            "🔥 Natural Gas"
        ],
        answer: 2
    },

    {
        question: "Which action helps save water?",
        options: [
            "🚰 Leaving the tap open",
            "💧 Fixing leaking taps",
            "🚿 Wasting water",
            "🌊 Throwing waste in rivers"
        ],
        answer: 1
    },

    {
        question: "What are the 3 Rs?",
        options: [
            "Read, Run, Rest",
            "Reduce, Reuse, Recycle",
            "Repair, Run, Remove",
            "Reuse, Run, Read"
        ],
        answer: 1
    },

    {
        question: "Which is an eco-friendly method of transport?",
        options: [
            "🚲 Bicycle",
            "🚗 Petrol Car",
            "🏍️ Petrol Bike",
            "🚙 Diesel SUV"
        ],
        answer: 0
    },

    {
        question: "Which gas contributes to the greenhouse effect?",
        options: [
            "Oxygen",
            "Nitrogen",
            "Carbon Dioxide",
            "Helium"
        ],
        answer: 2
    }

];


let currentQuestion = 0;


function loadQuestion() {

    let q = questions[currentQuestion];

    document.getElementById("question").innerText = q.question;

    let buttons = document.querySelectorAll(
        ".quiz-box button:not(.next)"
    );

    buttons.forEach((button,index) => {

        button.innerText = q.options[index];

        button.onclick = function() {

            if(index === q.answer) {

                document.getElementById("result").innerText =
                    "🎉 Correct! Excellent work!";

            } else {

                document.getElementById("result").innerText =
                    "❌ That's not correct. Try the next one!";

            }

        };

    });

}


function nextQuestion() {

    currentQuestion++;

    document.getElementById("result").innerText = "";

    if(currentQuestion >= questions.length) {

        currentQuestion = 0;

        document.getElementById("result").innerText =
            "🌱 Quiz completed! Starting again!";

    }

    loadQuestion();

}


loadQuestion();


/* =========================
   ECO SCORE
========================= */

function calculateScore() {

    let choices =
        document.querySelectorAll(".eco");

    let score = 0;

    choices.forEach(choice => {

        if(choice.checked) {

            score += 20;

        }

    });


    let message;

    if(score === 100) {

        message =
            "🌟 AMAZING! You are a Sustainability Champion!";

    }

    else if(score >= 60) {

        message =
            "🌱 Great job! Keep going!";

    }

    else if(score >= 20) {

        message =
            "🌿 Good start! You can do even better!";

    }

    else {

        message =
            "🌍 Start with one small green action today!";

    }


    document.getElementById("ecoResult").innerHTML =
        "Your Eco Score: " + score + "/100<br><br>" + message;

}


/* =========================
   GREEN PLEDGE
========================= */

function pledge() {

    document.getElementById("pledgeMessage").innerText =
        "🎉 Thank you! Shreya, Shruti & Shanvi are Green Champions! 🌱";

}
