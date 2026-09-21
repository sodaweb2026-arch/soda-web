const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const project = document.getElementById("project").value;
    const description = document.getElementById("description").value;

    const message =`
سلام 👋
من از طریق سایت SODA با شما تماس گرفتم.

👤 نام و نام خانوادگی:
${name}

📞 شماره تماس:
${phone}

💻 نوع پروژه:
${project}

📝 توضیحات پروژه:
${description} `;

    const telegramURL =
        "https://t.me/Setiltf?text=" + encodeURIComponent(message);

    window.open(telegramURL, "_blank");

});
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});