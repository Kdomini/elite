document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicializa o AOS (Animate On Scroll)
    AOS.init({
        duration: 1200, // duração da animação (em ms)
        easing: 'ease-in-out', // tipo de easing
        once: true, // Se as animações devem ocorrer apenas uma vez
        mirror: false, // Se as animações devem se repetir ao rolar para cima/baixo
    });

    // 2. Implementa Rolagem Suave (Smooth Scrolling)
    document.querySelectorAll('a.scroll-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Previne o comportamento padrão do link

            const targetId = this.getAttribute('href').substring(1); // Obtém o ID da seção
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Rola suavemente para a seção
                window.scrollTo({
                    top: targetElement.offsetTop - (document.querySelector('header').offsetHeight || 0), // Ajusta para a altura do cabeçalho fixo
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Efeito de Fundo para o Cabeçalho ao Rolar (Opcional, mas luxuoso)
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) { // Adiciona classe após rolar 50px
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
});