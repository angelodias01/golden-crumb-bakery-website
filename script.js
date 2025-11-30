document.addEventListener('DOMContentLoaded', () => {
    
    /* --- MENU MOBILE --- */
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if(menuToggle && navLinks){
        // Abrir/Fechar ao clicar no ícone
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Alternar ícone (Opcional: muda de Barras para X)
            const icon = menuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });

        // Fechar menu ao clicar num link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            });
        });
    }

    /* --- SCROLL SUAVE (SMOOTH SCROLL) --- */
    // Funciona para links internos (#) mesmo vindo de outra página
    document.querySelectorAll('a[href^="#"], a[href^="index.html#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            
            // Extrai o ID do alvo (ex: #salgados)
            const href = this.getAttribute('href');
            // Se o link for "index.html#algo", pegamos só o "#algo"
            const targetId = href.includes('#') ? href.substring(href.indexOf('#')) : href;
            
            const targetSection = document.querySelector(targetId);
            
            // Só executa o scroll se a secção existir na página atual
            if (targetSection) {
                e.preventDefault(); // Impede o salto brusco
                
                const headerOffset = 80; // Altura do Header
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
            // Se não existir (ex: estamos na galeria e clicamos em #salgados),
            // o navegador segue o link normal para index.html#salgados
        });
    });

    /* --- LÓGICA DO CARROSSEL --- */
    const carousels = document.querySelectorAll('.carousel-wrapper');

    carousels.forEach(wrapper => {
        const track = wrapper.querySelector('.carousel-track');
        const prevBtn = wrapper.querySelector('.prev-btn');
        const nextBtn = wrapper.querySelector('.next-btn');

        // Só ativa se existirem os elementos
        if(track && prevBtn && nextBtn) {
            
            // Largura do cartão + gap (300px é aproximado, ajusta-se ao CSS)
            // Se quiser precisão exata, pode-se calcular dinamicamente
            const scrollAmount = 300; 

            nextBtn.addEventListener('click', () => {
                track.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            });

            prevBtn.addEventListener('click', () => {
                track.scrollBy({
                    left: -scrollAmount,
                    behavior: 'smooth'
                });
            });
        }
    });

});