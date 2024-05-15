function emailSend() {
    var userName = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var query = document.getElementById('message').value;

    var messageBody = "Name: " + userName +
                      "\nPhone: " + phone +
                      "\nEmail: " + email +
                      "\nMessage: " + query;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "guruchillers@gmail.com",
        Password: "471FFC19975253F95C3293818BD922B4781C",
        To: 'gp9071112@gmail.com',
        From: "guruchillers@gmail.com",
        Subject: "Quote Request",
        Body: messageBody
    }).then(
        message => {
            if (message === 'OK') {
                alert("Email sent successfully!");
            } else {
                alert("Failed to send email.");
            }
        }
    );
}

function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}
