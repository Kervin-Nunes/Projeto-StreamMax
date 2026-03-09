document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const contactForm = document.querySelector('.contact form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    const submitBtn = this.querySelector('button');

    if (email && message) {
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;

        setTimeout(() => {
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            this.reset();
            submitBtn.textContent = 'Enviar';
            submitBtn.disabled = false;
        }, 1500);
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

document.querySelectorAll('.plan button').forEach(button => {
    button.addEventListener('click', function() {
        this.textContent = 'Processando...';
        this.disabled = true;

        setTimeout(() => {
            this.textContent = 'Assinar';
            this.disabled = false;
        }, 2000);
    });
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('section:not(.hero)').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

document.querySelectorAll('.plan button').forEach(button => {
    button.addEventListener('click', function() {
        this.textContent = 'Processando...';
        this.disabled = true;

        setTimeout(() => {
            this.textContent = 'Assinar';
            this.disabled = false;
        }, 2000);
    });
});

const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.feature, .plan').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s, transform 0.6s';
    observer.observe(el);
});