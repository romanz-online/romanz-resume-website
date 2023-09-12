function onCaptchaSuccess(token) {
    $("#resume-container").html("<embed src='Zinoviev-Resume.pdf' type='application/pdf' width='100%' height='100%'>");
    $("#resume-control").remove();
}