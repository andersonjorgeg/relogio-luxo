---

# ⌚ Chronos Luxo - Noir Edition

Uma **Landing Page** de alto padrão desenvolvida para marcas de luxo que buscam sofisticação e minimalismo. O projeto utiliza uma arquitetura moderna de **Custom Elements** (Web Components) que permite uma evolução gradual e organizada do código.

> "O verdadeiro luxo não grita, ele sussurra." — A Coleção Noir é o silêncio dourado no caos do tempo.

---

## 💎 Proposta do Projeto

O objetivo deste projeto é fornecer uma vitrine elegante e performática. Graças ao uso de componentes modulares, a página pode ser facilmente expandida ou modificada, funcionando como um "esqueleto" robusto para marcas que prezam pela exclusividade.

### Destaques da Interface:

* **Noir Design:** Interface escura com acentos em ouro (`#dba21f`) e prata.
* **Tipografia Curada:** Combinação das fontes *Playfair Display* (serifa clássica) e *Manrope* (moderna/minimalista).
* **Modo SPA:** Troca de seções sem recarregar a página, garantindo fluidez.
* **Responsividade:** Design adaptável para qualquer tamanho de tela.

---

## 🛠️ Arquitetura e Tecnologias

O projeto foi construído para ser leve e independente de bibliotecas externas complexas.

* **Web Components (Nativo):** Cada parte da página (Hero, Galeria, Newsletter) é um componente JavaScript encapsulado, facilitando a manutenção.
* **Tailwind CSS:** Utilizado via CDN para estilização rápida e utilitária.
* **Vanilla JavaScript:** Toda a lógica de navegação e componentes é feita com JS puro.
* **Google Fonts & Material Symbols:** Iconografia e tipografia integradas diretamente via Google APIs.

---

## 📂 Estrutura Modular

Como você vai mudar o código aos poucos, a estrutura está dividida em blocos lógicos:

1. **Header (`chronos-header`):** Menu dinâmico com suporte a mobile.
2. **Hero (`chronos-hero`):** Abertura de impacto com tratamento visual Noir.
3. **Statement (`chronos-brand-statement`):** Citação institucional da marca.
4. **Showcase (`chronos-product-showcase`):** Destaque visual de um produto principal.
5. **Gallery (`chronos-gallery`):** Integração visual de lifestyle.
6. **Testimonials (`chronos-testimonials`):** Carrossel interativo de depoimentos.

---

## 🚀 Como Customizar

O projeto é amigável para modificações graduais. Para adicionar uma nova seção:

1. Crie uma nova classe estendendo `ChronosComponent`.
2. Defina o conteúdo no método `render()`.
3. Registre o componente (opcional) ou chame-o dentro do `chronos-home`.

**Dica:** Para alterar as cores globais, basta editar a propriedade `extend.colors` dentro do `tailwind.config` no cabeçalho do arquivo.

---

## 📝 Próximas Implementações (Roadmap)

* [ ] Substituir imagens de placeholder por fotografias reais de alta resolução.
* [ ] Implementar animações de *fade-in* conforme o usuário faz o scroll.
* [ ] Criar uma seção de "Atelier" para detalhar o processo de fabricação.

---

*Este projeto é um estudo de design e arquitetura front-end.* 🥂

---

Como você pretende mudar o código gradualmente, **você gostaria que eu criasse um "esqueleto" de uma nova seção (como uma seção de 'História da Marca' ou 'Materiais') para você apenas preencher depois?**