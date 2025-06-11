// animasi page 1
window.addEventListener("DOMContentLoaded", () => {
    const texts = document.querySelectorAll(".fade-text");
    texts.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("show");
      }, index * 600); // jeda antar teks
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, {
      threshold: 0.8 // bisa disesuaikan, ini artinya 80% elemen terlihat
    });

    // elemen-elemen yang mau diamati
    const elementsToAnimate = document.querySelectorAll(".fade-slide-down, .fade-slide-up");

    elementsToAnimate.forEach(el => observer.observe(el));
  });


  // page 5 
  





function copyValue() {
      const select = document.getElementById("mySelect");
      const value = select.value;

      // Buat elemen input sementara untuk copy
      const tempInput = document.createElement("input");
      tempInput.value = value;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);

      alert("Disalin: " + value);
    }
