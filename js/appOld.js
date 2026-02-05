// Classe base para simplificar a criação de componentes
class ChronosComponent extends HTMLElement {
    constructor() {
        super();
    }
    
    // Método auxiliar para renderizar HTML
    render(htmlContent) {
        this.innerHTML = htmlContent;
    }
}

// 1. Header Component
class ChronosHeader extends ChronosComponent {
    get navItems() {
        return [
            { label: 'Coleções', href: '#' },
            { label: 'Atelier', href: '#' },
            { label: 'Herança', href: '#' }
        ];
    }

    get styles() {
        return {
            // Adicionei a cor dourada (#D4AF37) e o efeito de linha animada
            link: `
                relative text-slate-600 dark:text-gray-400 
                hover:text-[#D4AF37] transition-colors duration-300 
                text-sm font-medium uppercase tracking-wider 
                after:content-[''] after:absolute after:w-0 after:h-[1px] 
                after:bg-[#D4AF37] after:left-0 after:-bottom-1 
                hover:after:w-full after:transition-all after:duration-300
            `
        };
    }

    connectedCallback() {
        this.render(`
        <header class="sticky top-0 z-50 w-full backdrop-blur-md bg-background-light/80 dark:bg-background-dark/80 border-b border-[#e5e2dc] dark:border-[#2a2a2a]">
            <div class="layout-container flex justify-center w-full">
                <div class="flex items-center justify-between w-full max-w-[1280px] px-6 py-4">
                    
                    <div class="flex items-center gap-2">
                        <div class="text-[#D4AF37]"><span class="material-symbols-outlined text-3xl">watch</span></div>
                        <h2 class="text-slate-900 dark:text-white text-xl font-bold tracking-widest uppercase font-display">Chronos Luxo</h2>
                    </div>

                    <nav class="hidden md:flex items-center gap-10">
                        ${this.navItems.map(item => `
                            <a class="${this.styles.link}" href="${item.href}">
                                ${item.label}
                            </a>
                        `).join('')}
                    </nav>

                    <div class="flex gap-4 items-center">
                        <button class="flex items-center justify-center text-slate-900 dark:text-white hover:text-[#D4AF37] transition-colors relative">
                            <span class="material-symbols-outlined">shopping_bag</span>
                            <span class="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#D4AF37] text-[10px] font-bold text-black">
                                2
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
        `);
    }
}

// 2. Hero Section
class ChronosHero extends ChronosComponent {
    connectedCallback() {
        this.render(`
        <div class="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
            <div class="absolute inset-0 z-0">
                <div class="w-full h-full bg-cover bg-center" style='background-image: linear-gradient(to right, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.7) 40%, rgba(10,10,10,0.2) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuC1QEVcABYbctZLHJ2Yztd3ajWf-NPvwZFOeE4k-jUhlQi6jihizseNgjIkRWV-n32xDST2aHDfOaOeHidtLg1rjfyHaMbFBwpbJtp48H92pMwyu1ayg55ZlhcRo7_mxNo8nCz0GN0CqQFReqTtAq1E24PhHNkgmh4Z6RrpQhb0H3pXwTdeB9pti135_hLuGECbB6vbk_Q1gNtUYPihG4V3AcYnB4iirgBYEMSm2RYs7DSbnCdb-aF3XjNsXGblbJ1vdj2BrKjIZRE");'></div>
            </div>
            <div class="relative z-10 w-full max-w-[1280px] px-6 flex flex-col items-start gap-8">
                <div class="space-y-2">
                    <span class="text-primary text-sm font-bold tracking-[0.2em] uppercase pl-1">Nova Coleção</span>
                    <h1 class="text-white text-5xl md:text-7xl lg:text-8xl font-serif italic leading-tight max-w-4xl">
                        Noir <span class="text-primary not-italic">&amp;</span> Gold
                    </h1>
                </div>
                <p class="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-lg border-l border-primary pl-6 py-2">
                    Redefinindo a elegância noturna com precisão suíça. Onde a sombra encontra o brilho eterno do ouro 24k.
                </p>
                <div class="pt-4">
                    <button class="group relative px-8 py-3 bg-transparent border border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300 ease-out overflow-hidden rounded-sm">
                        <span class="relative z-10 font-bold tracking-widest uppercase text-sm">Descobrir Edição Limitada</span>
                    </button>
                </div>
            </div>
        </div>
        `);
    }
}

// 3. Brand Statement
class ChronosBrandStatement extends ChronosComponent {
    connectedCallback() {
        this.render(`
        <section class="w-full py-20 md:py-32 bg-background-light dark:bg-background-dark">
            <div class="max-w-[960px] mx-auto px-6 text-center flex flex-col gap-8">
                <span class="material-symbols-outlined text-4xl text-primary animate-pulse">diamond</span>
                <h2 class="text-3xl md:text-5xl font-serif text-slate-900 dark:text-white leading-tight">
                    "O verdadeiro luxo não grita, ele sussurra. A coleção Noir é o silêncio dourado no caos do tempo."
                </h2>
                <div class="w-24 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
            </div>
        </section>
        `);
    }
}

// 4. Product Showcase
class ChronosProductShowcase extends ChronosComponent {
    connectedCallback() {
        this.render(`
        <section class="w-full py-16 bg-white dark:bg-surface-dark">
            <div class="max-w-[1280px] mx-auto px-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div class="relative aspect-[4/5] md:aspect-square overflow-hidden rounded-lg group">
                        <div class="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuC71SsWhwN6vGVJb-kjTTg3JMOeG6Q_AKgtxx_RrMgLcjT0sa4N7Uk5T4x75fXFMRVWTvkQDqY-ODKWKwqpEv3SsNq1sFH9hWt4YjwFSDbnoLYXiUj5rfxrCHS5r5yyzMnaL28vVjc8BWDhHdddq5ZZ1MbXUglHuFZTOhrypDcdCIsMaRZqXaTrzTc_xq_Z5_3V39KKS2u6H2HMFYSMuH-YYgcTguVsINPrANkYV3Am_80a74AElmPF79uSRfT9VrOcjjCq7WO-j-k");'></div>
                        <div class="absolute bottom-6 left-6 bg-black/80 backdrop-blur-sm px-4 py-2 border-l-2 border-primary">
                            <span class="text-primary text-xs uppercase tracking-widest">Modelo em destaque</span>
                            <p class="text-white font-serif text-lg">Chronos Phantom Gold</p>
                        </div>
                    </div>
                    <div class="flex flex-col gap-8 md:pl-10">
                        <h2 class="text-3xl md:text-4xl font-serif text-slate-900 dark:text-white">A Arte do Invisível</h2>
                        <p class="text-slate-600 dark:text-gray-400 leading-relaxed font-light">
                            Cada componente é revestido com nosso exclusivo tratamento DLC, proporcionando uma escuridão profunda que absorve a luz.
                        </p>
                        <div class="grid grid-cols-2 gap-8 py-4 border-t border-slate-200 dark:border-white/10 border-b">
                            <div><h4 class="text-primary font-bold text-2xl font-serif">42mm</h4><span class="text-xs uppercase text-slate-500">Caixa em Cerâmica</span></div>
                            <div><h4 class="text-primary font-bold text-2xl font-serif">72h</h4><span class="text-xs uppercase text-slate-500">Reserva de Marcha</span></div>
                        </div>
                        <div class="flex gap-4">
                            <button class="px-8 py-3 bg-primary text-black font-bold uppercase text-xs tracking-widest hover:bg-white transition-colors duration-300">Adicionar à Coleção</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `);
    }
}

// 5. Features
class ChronosFeatures extends ChronosComponent {
    connectedCallback() {
        this.render(`
        <section class="w-full py-24 bg-background-light dark:bg-background-dark">
            <div class="max-w-[1280px] mx-auto px-6">
                <div class="text-center mb-16">
                    <span class="text-primary text-xs font-bold tracking-[0.2em] uppercase">Excelência</span>
                    <h2 class="text-3xl md:text-4xl font-serif text-slate-900 dark:text-white mt-3">Artesanato Superior</h2>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <!-- Item 1 -->
                    <div class="group p-8 border border-transparent hover:border-primary/30 bg-white dark:bg-surface-dark transition-all duration-300 rounded-sm hover:-translate-y-1">
                        <div class="text-primary mb-6"><span class="material-symbols-outlined text-4xl font-light">all_inclusive</span></div>
                        <h3 class="text-xl font-serif text-slate-900 dark:text-white mb-3">Movimento Perpétuo</h3>
                        <p class="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">Calibre manufaturado internamente, garantindo precisão cronométrica.</p>
                    </div>
                    <!-- Item 2 -->
                    <div class="group p-8 border border-transparent hover:border-primary/30 bg-white dark:bg-surface-dark transition-all duration-300 rounded-sm hover:-translate-y-1">
                        <div class="text-primary mb-6"><span class="material-symbols-outlined text-4xl font-light">stars</span></div>
                        <h3 class="text-xl font-serif text-slate-900 dark:text-white mb-3">Ouro 24k Puro</h3>
                        <p class="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">Aplicação manual de ouro nos marcadores e ponteiros.</p>
                    </div>
                    <!-- Item 3 -->
                    <div class="group p-8 border border-transparent hover:border-primary/30 bg-white dark:bg-surface-dark transition-all duration-300 rounded-sm hover:-translate-y-1">
                        <div class="text-primary mb-6"><span class="material-symbols-outlined text-4xl font-light">verified_user</span></div>
                        <h3 class="text-xl font-serif text-slate-900 dark:text-white mb-3">Safira Anti-Reflexo</h3>
                        <p class="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">Cristal de safira abobadado com tratamento duplo anti-reflexo.</p>
                    </div>
                </div>
            </div>
        </section>
        `);
    }
}

// 6. Gallery
class ChronosGallery extends ChronosComponent {
    connectedCallback() {
        this.render(`
        <section class="w-full">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-auto md:h-[400px]">
                <div class="relative group overflow-hidden h-64 md:h-full">
                    <div class="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAvfdTKRtbUk7RVz8-RCXNfwLyfJQw_fEeCMZ4327psHNklBcV6X1lZjOGkVMCW4ctumA2r7Ffxxz_Ghv1UpDEPph2tQe2Q5if4V90orL5tuYFK3oqzOqnK86SQRoaGxwmNhyU1lD7D-eySGUbNPXkTgn35SAfe1AXXZx_vVvJ7Th03rqh-wXeK8ZBYUpyKm8GPRjrzf8wX5QyJGmaQ3Nq_CMYmn5CCRE6Rkxui42HyBAfOAufprBHz6Aaayt6rzwJO3YAbiqlzNuo");'></div>
                </div>
                <div class="relative group overflow-hidden h-64 md:h-full">
                    <div class="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAgvdUROaafMySfNRAWMux2fTEGa0ZKCyetOEZT-V04V_RP19mo_7tclTZN-69WZF6t4nL92mUzCNuk43o5wjdXPh6GPZqIl2B6FX2YLP76b1LjRC0_jQCVvlQ8ON0ErgTodTEB9HNoKGzXHEDe7zFrP7-0VH2tRtsP8VNrl-4jfhlRW9QB0z4-36pXDioCxxzFSg4Nvj5COv38w2OK73JtnFdUm1FYKLGBmPZRTEWvwQgr4-hGgjz4Hy3220rk3TX7S7InLcG7rgU");'></div>
                </div>
                <div class="relative group overflow-hidden h-64 md:h-full">
                    <div class="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style='background-image: url("https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80");'></div>
                </div>
                <div class="bg-primary flex flex-col items-center justify-center p-8 text-center h-64 md:h-full">
                    <h3 class="text-3xl font-serif text-black mb-4">Lifestyle</h3>
                    <p class="text-black/80 mb-6 text-sm">Siga nossa jornada visual e inspire-se com o estilo Chronos.</p>
                    <a class="inline-flex items-center gap-2 text-black font-bold uppercase tracking-widest text-xs border-b border-black pb-1 hover:opacity-70 transition-opacity" href="#">
                        Ver Instagram
                    </a>
                </div>
            </div>
        </section>
        `);
    }
}

// 7. Testimonials
class ChronosTestimonials extends ChronosComponent {
    connectedCallback() {
        const testimonials = [
            {
                name: "Alessandro V.",
                role: "Colecionador & CEO",
                quote: "A coleção Noir & Gold transcende a horologia. Não é apenas um instrumento para medir o tempo, é uma declaração de poder e sofisticação.",
                img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=120&h=120&q=80"
            },
            {
                name: "Helena S.",
                role: "Designer de Interiores",
                quote: "O equilíbrio entre o minimalismo moderno e a opulência clássica é raro. A Chronos capturou a essência da elegância atemporal.",
                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80"
            },
            {
                name: "Marcus T.",
                role: "Especialista em Relojoaria",
                quote: "A precisão mecânica aliada ao acabamento manual eleva esta peça ao patamar de obra de arte. É um investimento em legado.",
                img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80"
            }
        ];

        this.render(`
        <section class="w-full py-24 bg-background-light dark:bg-background-dark overflow-hidden">
            <div class="max-w-[960px] mx-auto px-6">
                
                <div class="text-center mb-16">
                    <h2 class="text-3xl md:text-4xl font-serif text-slate-900 dark:text-white">A Escolha dos Connoisseurs</h2>
                </div>

                <div class="relative overflow-hidden"> 
                    
                    <div id="carousel-track" class="flex transition-transform duration-700 ease-in-out">
                        ${testimonials.map(t => `
                        <div class="min-w-full w-full flex-shrink-0 px-2">
                            <div class="relative bg-white dark:bg-surface-dark p-10 md:p-16 rounded-sm shadow-xl border border-transparent dark:border-white/5">
                                <span class="absolute top-8 left-8 text-6xl font-serif text-primary/20">"</span>
                                <div class="relative z-10 flex flex-col items-center text-center gap-6">
                                    <p class="text-lg md:text-xl text-slate-700 dark:text-gray-300 font-light italic leading-relaxed">
                                        "${t.quote}"
                                    </p>
                                    <div class="flex flex-col items-center gap-2 mt-4">
                                        <div class="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden mb-2 shadow-sm ring-2 ring-primary/10">
                                            <img class="w-full h-full object-cover" src="${t.img}" alt="${t.name}"/>
                                        </div>
                                        <h4 class="text-primary font-bold uppercase tracking-wider text-sm">${t.name}</h4>
                                        <span class="text-xs text-slate-500 dark:text-gray-500">${t.role}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `).join('')}
                    </div>
                </div>

                <div class="flex justify-center gap-3 mt-10">
                    ${testimonials.map((_, i) => `
                    <button 
                        data-index="${i}" 
                        class="carousel-dot h-2 w-2 rounded-full transition-all duration-300 ${i === 0 ? 'bg-primary w-8' : 'bg-slate-300 dark:bg-slate-700'}"
                        aria-label="Ver depoimento ${i + 1}">
                    </button>
                    `).join('')}
                </div>
            </div>
        </section>
        `);

        this.initCarousel();
    }

    initCarousel() {
        const track = this.querySelector('#carousel-track');
        const dots = this.querySelectorAll('.carousel-dot');
        let currentIndex = 0;

        const updateCarousel = (index) => {
            // Move exatamente 100% da largura para cada slide
            track.style.transform = `translateX(-${index * 100}%)`;
            
            // Atualiza os pontos (indicador visual)
            dots.forEach((dot, i) => {
                const isActive = i === index;
                dot.classList.toggle('bg-primary', isActive);
                dot.classList.toggle('w-8', isActive);
                dot.classList.toggle('bg-slate-300', !isActive);
                dot.classList.toggle('dark:bg-slate-700', !isActive);
            });
            currentIndex = index;
        };

        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                updateCarousel(parseInt(dot.getAttribute('data-index')));
            });
        });

        // Troca automática a cada 6 segundos
        setInterval(() => {
            let nextIndex = (currentIndex + 1) % dots.length;
            updateCarousel(nextIndex);
        }, 6000);
    }
}

// 8. Newsletter
class ChronosNewsletter extends ChronosComponent {
    connectedCallback() {
        this.render(`
        <section class="w-full py-20 bg-primary/10 border-t border-b border-primary/20">
            <div class="max-w-2xl mx-auto px-6 text-center">
                <h2 class="text-3xl font-serif text-slate-900 dark:text-white mb-4">Inscreva-se no <span class="text-primary">Atelier</span></h2>
                <p class="text-slate-600 dark:text-gray-400 mb-8">Receba convites exclusivos para lançamentos privados e eventos de gala.</p>
                <form class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input class="flex-1 bg-white dark:bg-background-dark border border-slate-300 dark:border-white/20 px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-primary transition-colors" placeholder="Seu e-mail exclusivo" type="email"/>
                    <button class="bg-primary text-black px-8 py-3 font-bold uppercase tracking-widest text-xs hover:bg-primary-dark hover:text-white transition-colors" type="button">Cadastrar</button>
                </form>
            </div>
        </section>
        `);
    }
}

// 9. Footer
class ChronosFooter extends ChronosComponent {
    connectedCallback() {
        this.render(`
        <footer class="bg-background-light dark:bg-background-dark pt-16 pb-8 border-t border-[#e5e2dc] dark:border-[#2a2a2a]">
            <div class="max-w-[1280px] mx-auto px-6">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div class="col-span-1 md:col-span-1">
                        <div class="flex items-center gap-2 mb-6">
                            <span class="material-symbols-outlined text-primary text-2xl">watch</span>
                            <h2 class="text-slate-900 dark:text-white text-lg font-bold tracking-widest uppercase font-display">Chronos</h2>
                        </div>
                        <p class="text-slate-500 dark:text-gray-500 text-sm leading-relaxed">Relojoaria de alta precisão desde 1924.</p>
                    </div>
                    <div>
                        <h4 class="text-slate-900 dark:text-white font-bold uppercase tracking-wider text-xs mb-6">Coleções</h4>
                        <ul class="flex flex-col gap-3">
                            <li><a class="text-slate-500 dark:text-gray-500 hover:text-primary text-sm transition-colors" href="#">Noir &amp; Gold</a></li>
                            <li><a class="text-slate-500 dark:text-gray-500 hover:text-primary text-sm transition-colors" href="#">Deep Sea</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-slate-900 dark:text-white font-bold uppercase tracking-wider text-xs mb-6">Contato</h4>
                        <ul class="flex flex-col gap-3">
                            <li class="flex items-center gap-2 text-slate-500 dark:text-gray-500 text-sm"><span class="material-symbols-outlined text-base">location_on</span> Geneva, Switzerland</li>
                            <li class="flex items-center gap-2 text-slate-500 dark:text-gray-500 text-sm"><span class="material-symbols-outlined text-base">mail</span> concierge@chronos.lux</li>
                        </ul>
                    </div>
                </div>
                <div class="border-t border-slate-200 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p class="text-slate-400 dark:text-gray-600 text-xs">© 2024 Chronos Luxo.</p>
                </div>
            </div>
        </footer>
        `);
    }
}

// 10. Coleções
class ChronosCollections extends ChronosComponent {
    get collections() {
        return [
            {
                id: 1,
                name: "Noir Midnight",
                series: "Edição Limitada",
                image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
                description: "Onde o ônix encontra a precisão absoluta.",
                price: "R$ 12.500"
            },
            {
                id: 2,
                name: "Heritage Gold",
                series: "Clássicos Atemporais",
                image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=800&q=80",
                description: "Ouro 18k e couro italiano trabalhado à mão.",
                price: "R$ 18.900"
            },
            {
                id: 3,
                name: "Astral Blue",
                series: "Linha Executive",
                image: "https://images.unsplash.com/photo-1522338140262-f46f591261c8?auto=format&fit=crop&w=800&q=80",
                description: "Mostrador em azul safira profundo e aço cirúrgico.",
                price: "R$ 9.200"
            },
            {
                id: 4,
                name: "Titanium Pure",
                series: "Modern Sport",
                image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&w=800&q=80",
                description: "Leveza extrema com resistência de nível aeroespacial.",
                price: "R$ 15.400"
            }
        ];
    }

    connectedCallback() {
        this.render(`
        <section class="w-full py-20 bg-background-light dark:bg-background-dark">
            <div class="max-w-[1280px] mx-auto px-6">
                
                <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div class="max-w-2xl">
                        <span class="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Curadoria Exclusiva</span>
                        <h1 class="text-4xl md:text-5xl font-serif text-slate-900 dark:text-white mb-6">Nossas Coleções</h1>
                        <p class="text-slate-600 dark:text-gray-400 font-light leading-relaxed">
                            Explore a harmonia entre a engenharia de precisão e o design artístico. Cada peça da Chronos é uma celebração do tempo e um investimento em seu legado pessoal.
                        </p>
                    </div>
                    
                    <div class="flex gap-6 text-xs uppercase tracking-widest font-bold border-b border-slate-200 dark:border-white/10 pb-2">
                        <button class="text-[#D4AF37] border-b border-[#D4AF37] pb-2">Todos</button>
                        <button class="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors pb-2">Limitados</button>
                        <button class="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors pb-2">Clássicos</button>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    ${this.collections.map(item => this.renderProductCard(item)).join('')}
                </div>

            </div>
        </section>
        `);
    }

    renderProductCard(item) {
        return `
        <div class="group cursor-pointer">
            <div class="relative aspect-[3/4] overflow-hidden bg-slate-100 dark:bg-surface-dark mb-6">
                <img 
                    src="${item.image}" 
                    alt="${item.name}" 
                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button class="bg-white text-black px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-white transition-colors">
                        Ver Detalhes
                    </button>
                </div>
            </div>

            <div class="space-y-2">
                <div class="flex justify-between items-start">
                    <div>
                        <span class="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold">${item.series}</span>
                        <h3 class="text-lg font-medium text-slate-900 dark:text-white group-hover:text-[#D4AF37] transition-colors">
                            ${item.name}
                        </h3>
                    </div>
                    <span class="text-sm font-light text-slate-500 dark:text-gray-400">${item.price}</span>
                </div>
                <p class="text-sm text-slate-600 dark:text-gray-500 font-light line-clamp-2">
                    ${item.description}
                </p>
            </div>
        </div>
        `;
    }
}

// Registrar os componentes no navegador
customElements.define('chronos-header', ChronosHeader);
customElements.define('chronos-hero', ChronosHero);
customElements.define('chronos-brand-statement', ChronosBrandStatement);
customElements.define('chronos-product-showcase', ChronosProductShowcase);
customElements.define('chronos-features', ChronosFeatures);
customElements.define('chronos-gallery', ChronosGallery);
customElements.define('chronos-testimonials', ChronosTestimonials);
customElements.define('chronos-newsletter', ChronosNewsletter);
customElements.define('chronos-footer', ChronosFooter);
customElements.define('chronos-collections', ChronosCollections);