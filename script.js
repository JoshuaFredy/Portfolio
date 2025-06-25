document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out!');
    this.reset();
  });
  
  const scrollBtn = document.getElementById('scrollTopBtn');
  window.onscroll = () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
  };
  
  scrollBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  