var body;
var documentElement;

var welcomeSection;
var introSection;
var skillsSection;
var timelineSection;
var flashcardSection;
var quizSection;
var endSection;


// WELCOME
var continueArrow;


// SLIDESHOW
// var slides;
// let currentSlide = 0;
// let slideInterval;

// function showSlide() {
//     $(slides[currentSlide]).removeClass("appear").addClass("disappear");

//     setTimeout(function () {
//         currentSlide = (currentSlide + 1) % 5;
//         $(slides[currentSlide]).removeClass("disappear").addClass("appear");
//     }, 100);
// }


// FLASHCARDS
var flashcards;


// SKILLS
var skillItems;
var skillsGridDescription;
const skillDescriptions = [
    "<b>C++</b><br>General Purpose Programming Language<br>Skill Level: Advanced",
    "<b>C</b><br>General Purpose Programming Language<br>Skill Level: Advanced",
    "<b>Django</b><br>Python Web Development Framework<br>Skill Level: Advanced",
    "<b>Git</b><br>Collection of Version Control Tools<br>Skill Level: Advanced",
    "<b>Java</b><br>General Purpose Programming Language<br>Skill Level: Advanced",
    "<b>JavaScript</b><br>Client-side Web Programming Language<br>Skill Level: Advanced",
    "<b>OpenCV</b><br>Computer Vision Library<br>Skill Level: Moderate",
    "<b>Python</b><br>General Purpose Programming Language<br>Skill Level: Advanced",
    "<b>PyTorch</b><br>Python Machine Learning Library<br>Skill Level: Moderate",
    "<b>Qt</b><br>GUI Development Framework<br>Skill Level: Advanced",
    "<b>Ruby on Rails</b><br>Web Development Framework<br>Skill Level: Moderate",
    "<b>Shell Script</b><br>Command-Line Scripting Language<br>Skill Level: Advanced",
    "<b>SQL</b><br>Database Query Language<br>Skill Level: Advanced",
    "<b>TensorFlow</b><br>Machine Learning Library<br>Skill Level: Moderate",
    "<b>Assembly</b><br>Low-Level Programming Language<br>Skill Level: Moderate"
]


// TIMELINE
const timelineTitles = [
    "University",
    "Internship at ICS Inc.",
    "User Management Plugin",
    "College TA",
    "Hired at ICS Inc.",
    "Neuromodulation Work",
    "Graduation",
    "Electric Grill Work",
    "Fluorescence Device Work",
    "Personal Website",
    "YOU ARE HERE"
]

const timelineDescriptions = [
    "I enrolled in Stonybrook University in 2017 as a Computer Science major. Really not much else to say about the event.",
    "I got my first internship at ICS Inc. for the duration of the summer of 2018. Most of my time was spent writing technical documentation of proprietary software.",
    "On a return internship at ICS Inc. in the winter of 2018, I wrote my first proprietary plugin— a rudimentary user management system, complete with users and password encryption, easily integratable into other projects. Made using Qt and SQLite.",
    "In 2019 I worked as a TA for one of my past Computer Science professors, teaching an introductory programming class using Java. Primary responsibilities included helping the students in and outside of office hours and grading their work.",
    "In 2021 I was officially hired as a software engineer at ICS Inc.",
    "My first assignment at ICS Inc. was to implement the system settings for a piece of neuromodulation software.<br><br><i>Def. Neuromodulation: the usage of electric shock therapy to relax and tense a patient's muscles, typically in the back.</i>",
    "I graduated from Stonybrook University with a Bachelor's Degree in Computer Science!<br><br>Some notable coursework included Computer Vision, Machine Learning and Deep Learning. Mostly used Java and Python.",
    "My first major assignment at ICS Inc. I was tasked to fix bugs on an electric grill with a Qt-based touchscreen interface. Over 1,000 bugs gave me a solid appreciation for organized bug-logging (e.g. Jira, GitHub).",
    "At ICS Inc., I rewrote the Qt-based codebasefor a fluorometer, making it overall more efficient but also more legible.<br><br><i>Def. Fluorometer: a device that shines various LEDs on a liquid substance to track contaminants.</i>",
    "This is a bit awkward.",
    "You're all caught up!<br><br>Click on another milestone to learn what I did there."
]

const TIMELINE_BACKGROUND_WIDTH = 4267;
var timelineBackground;
var timelinePieces;
var num_timelinePieces;
var currentTimelineIndex;

function moveTimeline(screenIndex) {
    // let timelineSectionWidth = (TIMELINE_BACKGROUND_WIDTH - documentElement.clientWidth) / num_timelinePieces;
    // let new_timelinePosition = Math.floor(screenIndex * timelineSectionWidth);

    // timelineBackground.css({
    //     "left": "-" + new_timelinePosition + "px",
    // });

    $(timelinePieces[currentTimelineIndex]).removeClass("animated");
    currentTimelineIndex = screenIndex;
    $(timelinePieces[currentTimelineIndex]).addClass("animated");
}

function changeTimelineText(screenIndex) {
    $("#timeline-info-title").html(timelineTitles[screenIndex]);
    $("#timeline-info-description").html(timelineDescriptions[screenIndex]);
}


// QUIZ
// const quizResultsSubheader = "<br><br><div style='width: 100%; text-align: center; font-size: 22px; font-weight: bold;'>Don't hesitate! Hire Roman now!</div>"

// const quizResultsDescriptions = [
//     "Although your test score is not the highest, it indicates a strong desire to assess your compatibility with Roman (a dedicated software engineer). Your willingness to engage in this evaluation process is a testament to your interest in potentially hiring Roman.<br><br>For the unsure employer, we have developed a customized assessment. Depending on your needs, Roman's role within your organization can vary. If you require a candidate with a strong technical background, Roman is equipped to deliver on those requirements and we recommend hiring him. Alternatively, if you seek a candidate with excellent communication and teamwork skills, Roman can also excel in those areas and we strongly recommend hiring him. <span style='color: red'><b>Rest assured, Roman is a valuable addition to any team.</b></span><br><br>In conclusion, the results of this assessment indicate that Roman is highly adaptable and well-suited for any role within your company.",
//     "Based on your performance in this assessment, you appear to be very suitable to hire Roman. His qualifications and skills align seamlessly with your needs.<br><br>Like a leaf plucked from the vine and sent down along a river, Roman will bring a harmonious spirit to your projects and artfully etch your vision into the world.<br><br>In summary, the assessment reveals a <span style='color: red'><b>100%</b></span> suitability match between Roman and your ideal engineer candidate. The algorithm recommends considering him to be a top candidate for your team.",
//     "Your assessment results are high enough to make Roman quit his current job right on the spot! You are exceptionally well-suited to have Roman on your team.<br><br>Roman's expertise and skills are highly regarded in the field, as both a front-end and back-end engineer, and having him work on your projects would skyrocket productivity.<br><br>Hiring Roman is strongly recommended. The compatibility between your team and Roman is rated at an impressive <span style='color: red'><b>10,000%</b></span>."
// ]

// const totalQuizPoints = 55;

// function calculateSum() {
//     var sum = 0;
//     $(".range").each(function () {
//         $(this).find("input[type='radio']:checked").each(function () {
//             sum += parseInt($(this).val());
//         });
//     });
//     return sum;
// }


// STARS
var starsDiv;
let numStars = 300;
let stars = [];
let blinkInterval = 1000;
const starEdgeMargin = 20;

let DO_STARS = true;

var random_number = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function generateStar() {
    // var star_rotation = (random_number(0, 1) === 1 ? 'move_left' : 'move_right');
    // var star_rotation = "move_right";
    var star_top = random_number(starEdgeMargin, documentElement.clientHeight - starEdgeMargin);
    var star_left = random_number(starEdgeMargin, documentElement.clientWidth - starEdgeMargin);
    var star_opacity = random_number(0.7, 1.0);
    var star_radius = random_number(1, 4);
    var star_duration = random_number(30, 50);

    let star = $("<div>").addClass("star");
    star.css({
        top: star_top + "px",
        left: star_left + "px",
        width: star_radius + "px",
        height: star_radius + "px",
        opacity: star_opacity,
        // animationName: star_rotation,
        animationDuration: star_duration + "s",
        boxShadow: "0 0 2px " + (star_radius - 2) + "px rgb(232, 243, 130, 0.15)"
    });
    starsDiv.append(star);
    return star;
}

function blink() {
    let starIndex = Math.floor((Math.random() * numStars));
    let selection = stars[starIndex];

    selection.addClass("blink");
    setTimeout(function () {
        selection.removeClass("blink");
    }, blinkInterval / 2);
};

function checkStarsVisible() {
    let new_z = (endSection[0].getBoundingClientRect().top <= window.innerHeight + 2) ? "1" : "-1";
    starsDiv.css("z-index", new_z);
}


// EMAIL
let isSendingEmail = false;

let scrollPosition = 0;

function closeEmailPopup() {
    $("#end-info-box").removeClass("popup").addClass("popup-collapse-animation");

    $("#info-box").css("z-index", "4");
    $("#email-box").css("opacity", "0");
    $("#email-popup-backdrop").css("opacity", "0");

    let animation_interval = setInterval(function () {
        $("#email-box").css("z-index", "-1");
        $("#email-popup-backdrop").css("z-index", "-1");
        $("#info-box").css("opacity", "1");
        clearInterval(animation_interval);
    }, 500);

    enableScrolling();
}

function disableSendButton() {
    $("#send-email-button").css({ "background": "linear-gradient(to top right, rgb(160, 160, 160), rgb(206, 206, 206))", "cursor": "auto" });
}

function enableSendButton() {
    $("#send-email-button").css({ "background": "linear-gradient(to top right, rgb(160, 107, 29), rgb(206, 139, 39))", "cursor": "pointer" });
}

function disableScrolling() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
    };
}

function enableScrolling() {
    window.onscroll = function () { };
}
















$(document).ready(function () {
    // get elements
    body = $("body");
    documentElement = document.documentElement;

    welcomeSection = $("#welcome-section");
    continueArrow = $("#continue-arrow");

    introSection = $("#intro-section");
    slides = $(".slide");

    skillsSection = $("#skills-section");
    skillItems = $(".skill-item");
    skillsGridDescription = $("#skills-grid-description");

    timelineSection = $("#timeline-section");
    timelinePieces = $(".timeline li > div");
    timelineBackground = $("#timeline-background");
    num_timelinePieces = timelinePieces.length;
    currentTimelineIndex = num_timelinePieces;

    flashcardSection = $("#flashcard-section");
    flashcards = $(".flashcard");

    quizSection = $("#quiz-section");

    endSection = $("#end-section");
    starsDiv = $("#stars");


    // smooth scrolling
    $("a").click(function () {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "")
            || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html,body").animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });


    // sections
    $("section").each(function (index) {
        if ($(this).attr("id") !== "welcome-section" && $(this).attr("id") !== "end-section")
            $(this).css({ "background-color": ((index % 2 === 0) ? "#eaecee" : "#f5f7f9") });
    });


    // welcome arrow
    $("#continue-arrow-container").hover(function () {
        continueArrow.addClass("triggered");
    }, function () {
        continueArrow.removeClass("triggered");
    });


    // slideshow
    // slideInterval = setInterval(showSlide, 5000);
    // slides.click(function () {
    //     clearInterval(slideInterval);
    //     showSlide();
    //     slideInterval = setInterval(showSlide, 5000);
    // });


    // skills
    skillsGridDescription.html("<i>Mouse over an icon to learn more!</i><br><br>");
    skillItems.mouseenter(function () {
        var index = $(this).data("value");
        skillsGridDescription.html(skillDescriptions[index]);
    });


    // timeline
    timelinePieces.click(function () {
        let dataVal = $(this).data("value");
        moveTimeline(dataVal);
        changeTimelineText(dataVal);
    });

    let new_timelinePieceHeight = 0;
    timelinePieces.each(function () {
        const singleHeight = $(this).height();

        if (new_timelinePieceHeight < singleHeight)
            new_timelinePieceHeight = singleHeight;
    });

    timelinePieces.css("height", new_timelinePieceHeight + "px");

    // $(window).resize(function () {
    //     moveTimeline(currentTimelineIndex);
    // });
    moveTimeline(timelinePieces.length - 1);


    // flashcards
    flashcards.click(function () {
        $(this).toggleClass("flipped");
    });


    // quiz
    // for (var i = 1; i <= 5; i++) {
    //     let rangeElement = $("<div>").addClass("range");
    //     for (var j = 1; j <= 11; j++) {
    //         let groupElement = $("<div>").addClass("range_input_group");

    //         let inputElement = $("<input>").addClass("range_input");
    //         inputElement.attr("type", "radio");
    //         inputElement.attr("value", j);
    //         inputElement.attr("name", "range" + i);

    //         let iconElement = $("<div>").addClass("range_icon");
    //         iconElement.attr("name", "range" + i);

    //         if (j === 6) {
    //             inputElement.addClass("selected");
    //             inputElement.prop("checked", true);

    //             iconElement.addClass("selected");
    //         }

    //         groupElement.append(inputElement);
    //         groupElement.append(iconElement);

    //         rangeElement.append(groupElement);
    //     }
    //     $(".range").eq(i - 1).replaceWith(rangeElement);
    // }

    // $("input[type='radio']").click(function () {
    //     var groupName = $(this).attr("name");

    //     $("input[type='radio'][name='" + groupName + "']").not(this).prop("selected", true).removeClass("selected");
    //     $("div[name='" + groupName + "']").not(this).prop("selected", true).removeClass("selected");

    //     $(this).addClass("selected");
    //     $(this).closest(".range_input_group").find(".range_icon").addClass("selected");
    // });

    // $("#submit-test-results").click(function () {
    //     let percentage = calculateSum() / totalQuizPoints;
    //     let result = 0;
    //     if (percentage > 0.66)
    //         result = 2;
    //     else if (percentage > 0.33)
    //         result = 1;

    //     let final_percent_text = "100%";
    //     if (result === 2)
    //         final_percent_text = "10,000%";

    //     let final_score_text = "B-";
    //     if (percentage > 0.6)
    //         final_score_text = "A+";
    //     else if (percentage > 0.4)
    //         final_score_text = "A";
    //     else if (percentage > 0.3)
    //         final_score_text = "A-";
    //     else if (percentage > 0.2)
    //         final_score_text = "B+";
    //     else if (percentage > 0.1)
    //         final_score_text = "B";

    //     $("#quiz-result-box-suitability-value").html(final_percent_text);
    //     $("#quiz-result-box-score-value").html(final_score_text);

    //     $("#quiz-result-box").css("display", "block");
    //     $("#quiz-result-box-description").html(quizResultsDescriptions[result] + quizResultsSubheader);

    //     if (result === 0) {
    //         quizSection.css("height", "1500px");
    //         $("#quiz-result-box").css("height", "540px");
    //     }
    //     else if (result === 1) {
    //         quizSection.css("height", "1380px");
    //         $("#quiz-result-box").css("height", "420px");
    //     }
    //     else {
    //         quizSection.css("height", "1360px");
    //         $("#quiz-result-box").css("height", "400px");
    //     }
    // });


    // stars
    if (DO_STARS) {
        for (var i = 0; i < numStars; i++)
            stars[i] = generateStar();

        setInterval(blink, blinkInterval / numStars);
    }

    $(window).on("scroll", checkStarsVisible);
    checkStarsVisible();


    // email
    $("#contact-me-button").click(function () {
        $("#end-info-box").removeClass("popup-collapse-animation");
        $("#end-info-box").addClass("popup", "popup-expand-animation");
        $("#email-popup-backdrop").css({
            "z-index": "2",
            "opacity": "1"
        });

        $("#email-box").css("z-index", "4");

        $("#info-box").css("opacity", "0");

        window.scrollTo(0, document.body.scrollHeight);

        let animation_interval = setInterval(function () {
            $("#info-box").css("z-index", "-1");
            $("#email-box").css("opacity", "1");
            clearInterval(animation_interval);
        }, 500);

        disableScrolling();
    });

    $("#cancel-email-button").click(function () {
        closeEmailPopup();
    });

    const emailForm = document.getElementById("email-form");
    emailForm.addEventListener('submit', function (e) {
        e.preventDefault();

        if (isSendingEmail)
            return;

        const subject = document.getElementById('email-form-subject').value;
        const content = document.getElementById('email-form-content').value;
        const sender = document.getElementById('email-form-sender').value;

        isSendingEmail = true;
        disableSendButton();

        fetch("/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ subject, content, sender })
        });

        $("#email-box-sent-text").css("display", "block");

        let closeInterval = setInterval(function () {
            closeEmailPopup();
            clearInterval(closeInterval);
        }, 1500);
        let resetInterval = setInterval(function () {
            $("#email-form")[0].reset();

            $("#email-box-sent-text").css("display", "none");

            isSendingEmail = false;

            enableSendButton();

            clearInterval(resetInterval);
        }, 2000);
    });
});