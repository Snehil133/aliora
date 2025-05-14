// Initialize EmailJS
emailjs.init("FphFSXW3v-kSJCz8F"); // Replace with your EmailJS public key

document.getElementById("resume-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const form = e.target;

  const fileInput = form.user_resume;
  const file = fileInput.files[0];

  if (!file) {
    alert("Please upload your resume");
    return;
  }

  const reader = new FileReader();
  reader.onload = function () {
    const base64File = reader.result.split(",")[1]; // Remove base64 header

    const templateParams = {
      user_name: form.user_name.value,
      user_address: form.user_address.value,
      user_email: form.user_email.value,
      user_phone: form.user_phone.value,
      resume_file: base64File,
      resume_filename: file.name
    };

    emailjs.send("service_1n8wzmt", "template_pnlirrf", templateParams).then(
      () => {
        document.getElementById("status").innerText = "Email sent successfully!";
        form.reset();
      },
      (error) => {
        console.error(error);
        document.getElementById("status").innerText = "Failed to send email.";
      }
    );
  };

  reader.readAsDataURL(file); // Read file as base64
});
