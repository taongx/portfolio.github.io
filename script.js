document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar ul li a');
    const sections = document.querySelectorAll('.section');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Function to highlight active section
    function setActiveSection() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute('id');
            }
        });

        // Remove active class from all nav items
        navLinks.forEach(link => {
            link.parentElement.classList.remove('active');
            
            // Add active class to the corresponding nav item
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.parentElement.classList.add('active');
            }
        });
    }

    // Navbar Link Smooth Scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            // Smooth scroll
            targetSection.scrollIntoView({ behavior: 'smooth' });

            // Update active state
            navLinks.forEach(l => l.parentElement.classList.remove('active'));
            link.parentElement.classList.add('active');
        });
    });

    // Contact Form Submission
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nome = contactForm.querySelector('input[name="nome"]').value;
        const email = contactForm.querySelector('input[name="email"]').value;
        const mensagem = contactForm.querySelector('textarea[name="mensagem"]').value;

        if (nome && email && mensagem) {
            // In a real-world scenario, you'd send this data to a backend
            alert(`Mensagem enviada!\n\nNome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`);
            contactForm.reset();
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });

    // Add scroll event listeners
    window.addEventListener('scroll', setActiveSection);

    // Initial call to set active section on page load
    setActiveSection();
});