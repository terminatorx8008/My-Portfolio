(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function () {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        const card = document.querySelector('.header-content .left-header .flip-images');
        card.classList.toggle('flipped');

    })
})();
function sendEmail() {
    var name = document.querySelector("input[type='text']").value;
    var email = document.querySelector("input[type='email']").value;
    var subject = document.querySelector("#subject").value;
    var message = document.querySelector("#message").value;
    var recipient = "vasu.namdev.work@gmail.com"; // Replace with your email address

    Email.send({
        Host: "smtp.gmail.com",
        Username: email,
        Password: "your-email-password",
        To: recipient,
        From: email,
        Subject: subject,
        Body: message
    }).then(
        message => alert("Email sent successfully!")
    ).catch(
        error => alert("Failed to send email. Error: " + error)
    );
}