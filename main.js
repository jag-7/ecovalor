// Sistema de Internacionalização
const translations = {
    pt: {
        // Logo
        logo: "EcoValor",
        
        // Navegação
        nav_home: "Início",
        nav_how: "Como Funciona",
        nav_materials: "Materiais",
        nav_contact: "Contato",
        
        // Botões
        btn_login: "Entrar",
        btn_register: "Cadastrar",
        btn_start: "PARTICIPE AGORA - É GRÁTIS",
        btn_learn: "SAIBA MAIS",
        
        // Hero Section
        hero_title: "Transforme Resíduos em Valor para a Sua Comunidade",
        hero_sub: "Recicle, ganhe créditos e ajude Angola a ser mais limpa e sustentável. Cada garrafa, cada papel, cada lata vale dinheiro na sua conta.",
        
        // Estatísticas
        stats_disclaimer: "📋 Projeto em desenvolvimento - Estes são nossos objetivos para os próximos 2 anos",
        stat_families_label: "Famílias Beneficiadas",
        stat_tonnes_label: "Toneladas de Resíduos",
        stat_credits_label: "Kz em Créditos",
        stat_centers_label: "Centros em Luanda",
        
        // Sobre o Projeto
        about_title: "Construindo o Futuro Sustentável de Angola",
        about_subtitle: "O EcoValor é um projeto em desenvolvimento que visa criar um sistema de recompensas para reciclagem em Luanda, beneficiando tanto o meio ambiente quanto as comunidades locais.",
        about_mission_title: "Missão",
        about_mission_desc: "Transformar resíduos em valor real para as comunidades de Luanda, criando um sistema sustentável de reciclagem com recompensas tangíveis.",
        about_vision_title: "Visão",
        about_vision_desc: "Ser a principal plataforma de reciclagem em Angola, conectando comunidades, empresas e governo em um ecossistema sustentável.",
        about_values_title: "Valores",
        about_values_desc: "Sustentabilidade, transparência, inclusão social e inovação tecnológica para o desenvolvimento de Angola.",
        
        // Status
        status_title: "Status do Desenvolvimento",
        status_research_title: "Pesquisa de Mercado",
        status_research_desc: "Análise das necessidades e oportunidades em Luanda",
        status_partners_title: "Parcerias",
        status_partners_desc: "Buscando parceiros locais e internacionais",
        status_dev_title: "Desenvolvimento",
        status_dev_desc: "Planejamento da plataforma digital",
        
        // Benefícios
        benefits_title: "Transforme Resíduos em Oportunidades Reais",
        benefits_subtitle: "Descubra como participar do EcoValor pode mudar sua vida e a de sua comunidade",
        benefit1_title: "Ganhe Dinheiro Real",
        benefit1_desc: "Transforme garrafas, papel e metal em créditos que podem ser trocados por dinheiro, saldo de telemóvel e produtos essenciais.",
        benefit2_title: "Ajude o Meio Ambiente",
        benefit2_desc: "Contribua para a redução do lixo em Luanda e participe da construção de uma cidade mais limpa e sustentável.",
        benefit3_title: "Inspire Sua Comunidade",
        benefit3_desc: "Seja um exemplo e ajude a conscientizar vizinhos, amigos e família sobre a importância da reciclagem.",
        benefit4_title: "Acesse Benefícios Exclusivos",
        benefit4_desc: "Descontos em combustível, produtos de primeira necessidade e serviços essenciais para sua família.",
        
        // Como Funciona
        how_title: "Reciclar Nunca Foi Tão Fácil e Recompensador",
        step1_title: "CADASTRE-SE",
        step1_desc: "Registe-se gratuitamente",
        step1_detail1: "Download da app EcoValor ou acesse via web",
        step1_detail2: "Cadastro rápido com número de telefone",
        step1_detail3: "Receba seu QR Code personalizado",
        step1_detail4: "Tempo: 2 minutos",
        step2_title: "ENTREGUE RESÍDUOS",
        step2_desc: "Leve seus materiais aos centros",
        step2_detail1: "Plástico, papel, vidro e metal limpos",
        step2_detail2: "Apresente seu QR Code",
        step2_detail3: "Nossa equipe pesa e classifica",
        step2_detail4: "Localização: 8 centros em Luanda",
        step3_title: "GANHE CRÉDITOS",
        step3_desc: "Cada material tem seu valor",
        step3_detail1: "Plástico: 50 créditos/kg",
        step3_detail2: "Papel: 30 créditos/kg",
        step3_detail3: "Vidro: 40 créditos/kg",
        step3_detail4: "Metal: 80 créditos/kg",
        step3_detail5: "Conversão: 100 créditos = 100 Kz",
        step4_title: "TROQUE POR BENEFÍCIOS",
        step4_desc: "Use seus créditos como preferir",
        step4_detail1: "Saldo para telemóvel (Unitel, Africel)",
        step4_detail2: "Compras no No Kero e Candando",
        step4_detail3: "Internet TV Cabo",
        step4_detail4: "Dinheiro via PayPay",
        step4_detail5: "Disponível: 24h por dia",
        
        // Registro
        register_title: "Junte-se ao Desenvolvimento",
        register_sub: "Ajude-nos a construir esta solução para Luanda! Cadastre seu interesse e receba atualizações sobre o progresso do projeto.",
        register_interest_title: "Lista de Interesse",
        register_interest_desc: "Cadastre-se para receber notícias sobre o lançamento e participar do piloto.",
        register_partner_title: "Seja um Parceiro",
        register_partner_desc: "Tem um local ou quer apoiar o projeto? Entre em contato conosco.",
        
        // Formulário
        form_email: "Seu e-mail",
        form_name: "Seu nome",
        form_select_neighborhood: "Selecione seu bairro",
        form_centro: "Centro de Luanda",
        form_talatona: "Talatona",
        form_kilamba: "Kilamba",
        form_outro: "Outro",
        btn_register_interest: "Cadastrar Interesse",
        btn_contact_us: "Falar Conosco",
        
        // Materiais
        materials_title: "Transforme Estes Materiais em Dinheiro",
        material_plastic_title: "PLÁSTICO - 50 Créditos/kg",
        material_paper_title: "PAPEL - 30 Créditos/kg",
        material_glass_title: "VIDRO - 40 Créditos/kg",
        material_metal_title: "METAL - 80 Créditos/kg",
        material_what_accept: "O que aceitar:",
        material_how_prepare: "Como preparar:",
        material_plastic_accept1: "Garrafas PET (água, refrigerante, sumo)",
        material_plastic_accept2: "Embalagens de produtos de limpeza",
        material_plastic_accept3: "Sacolas plásticas limpas",
        material_plastic_accept4: "Tampas de garrafas",
        material_plastic_accept5: "Embalagens de iogurte e manteiga",
        material_plastic_prepare1: "Retire rótulos quando possível",
        material_plastic_prepare2: "Lave rapidamente com água",
        material_plastic_prepare3: "Retire tampas metálicas",
        material_plastic_prepare4: "Seque ao sol antes de entregar",
        material_paper_accept1: "Jornais e revistas",
        material_paper_accept2: "Papelão limpo",
        material_paper_accept3: "Folhas de caderno e livros",
        material_paper_accept4: "Embalagens de papel",
        material_paper_accept5: "Caixas de cereais (sem plástico)",
        material_paper_prepare1: "Retire grampos e clipes",
        material_paper_prepare2: "Não misture com papel higiênico",
        material_paper_prepare3: "Mantenha seco e limpo",
        material_paper_prepare4: "Dobre para ocupar menos espaço",
        material_glass_accept1: "Garrafas de bebidas",
        material_glass_accept2: "Frascos de conservas",
        material_glass_accept3: "Vidros de perfume (vazios)",
        material_glass_accept4: "Potes de geleia",
        material_glass_accept5: "Copos e taças quebrados",
        material_glass_prepare1: "Retire tampas e rótulos",
        material_glass_prepare2: "Lave com água e sabão",
        material_glass_prepare3: "Embale com cuidado",
        material_glass_prepare4: "Separe por cor quando possível",
        material_metal_accept1: "Latas de refrigerante",
        material_metal_accept2: "Latas de conserva",
        material_metal_accept3: "Tampas metálicas",
        material_metal_accept4: "Fios de cobre",
        material_metal_accept5: "Alumínio em geral",
        material_metal_prepare1: "Lave e seque completamente",
        material_metal_prepare2: "Retire rótulos de papel",
        material_metal_prepare3: "Amasse latas para economizar espaço",
        material_metal_prepare4: "Separe ferro de alumínio",
        
        // Centros
        points_title: "Encontre o Centro Mais Próximo",
        points_sub: "LUANDA - 8 CENTROS PLANEJADOS",
        map_development_title: "Mapa em Desenvolvimento",
        map_development_desc: "Estamos mapeando os melhores locais em Luanda para instalar nossos centros. Em breve você poderá ver todos os centros disponíveis aqui.",
        center1_name: "Centro Maianga",
        center1_address: "Rua Amílcar Cabral, 234 - Maianga • ",
        center1_schedule: "Segunda a Sábado, 7h às 17h",
        center1_specialty: "Especialidade: Todos os materiais + Educação ambiental",
        center2_name: "Centro Sambizanga",
        center2_address: "Av. 21 de Janeiro, 156 - Sambizanga • ",
        center2_schedule: "Segunda a Sexta, 8h às 16h",
        center2_specialty: "Especialidade: Plástico e papel",
        center3_name: "Centro Rangel",
        center3_address: "Rua da Missão, 67 - Rangel • ",
        center3_schedule: "Terça a Sábado, 7h30 às 17h30",
        center3_specialty: "Especialidade: Vidro e metal",
        center4_name: "Centro Cazenga",
        center4_address: "Rua dos Coqueiros, 89 - Cazenga • ",
        center4_schedule: "Segunda a Sábado, 8h às 16h",
        center4_specialty: "Especialidade: Todos os materiais",
        status_planned: "Planejado",
        
        // Depoimentos
        testimonials_title: "Histórias de Transformação",
        testimonials_sub: "Exemplos de como o EcoValor pode impactar a vida das pessoas em Luanda",
        testimonial1_name: "Exemplo: Maria Santos, 34 anos - Sambizanga",
        testimonial1_text: "\"Comecei a juntar garrafas plásticas da vizinhança. No primeiro mês, consegui 45.000 Kz em créditos. Agora pago a internet dos meus filhos e ainda sobra para comprar no No Kero. O EcoValor mudou nossa vida!\"",
        testimonial1_impact_title: "Impacto de Maria:",
        testimonial1_impact1: "3 meses participando",
        testimonial1_impact2: "156 kg de plástico entregues",
        testimonial1_impact3: "187.000 Kz em créditos ganhos",
        testimonial1_impact4: "8 vizinhos mobilizados",
        testimonial2_name: "Exemplo: João Miguel, 28 anos - Viana",
        testimonial2_text: "\"Trabalho como catador independente. Antes vendia direto às recicladoras por pouco dinheiro. Com o EcoValor, ganho 40% mais e ainda recebo na hora via PayPay. Além disso, meus filhos aprenderam sobre meio ambiente!\"",
        testimonial2_impact_title: "Impacto de João:",
        testimonial2_impact1: "6 meses participando",
        testimonial2_impact2: "890 kg de materiais diversos",
        testimonial2_impact3: "425.000 Kz em créditos ganhos",
        testimonial2_impact4: "Renda mensal aumentou 40%",
        example_tag: "Exemplo de impacto futuro",
        
        // Contato
        contact_title: "Fale Connosco",
        contact_phone_title: "Central de Atendimento",
        contact_email_title: "E-mail",
        contact_address_title: "Endereço Corporativo",
        contact_hours_title: "Horário de Atendimento",
        contact_hours_weekdays: "Segunda a Sexta: 8h às 17h",
        contact_hours_saturday: "Sábado: 8h às 12h",
        contact_hours_whatsapp: "Plantão WhatsApp: 24h todos os dias",
        social_title: "Redes Sociais",
        
        // Footer
        footer_contact: "Contato:",
        footer_status: "Status: Fase de pesquisa e validação",
        footer_copyright: "© 2025 EcoValor Angola. Projeto em desenvolvimento para Luanda, Angola."
    },
    
    en: {
        // Logo
        logo: "EcoValor",
        
        // Navigation
        nav_home: "Home",
        nav_how: "How It Works",
        nav_materials: "Materials",
        nav_contact: "Contact",
        
        // Buttons
        btn_login: "Login",
        btn_register: "Register",
        btn_start: "JOIN NOW - IT'S FREE",
        btn_learn: "LEARN MORE",
        
        // Hero Section
        hero_title: "Transform Waste into Value for Your Community",
        hero_sub: "Recycle, earn credits and help Angola become cleaner and more sustainable. Every bottle, every paper, every can is worth money in your account.",
        
        // Statistics
        stats_disclaimer: "📋 Project under development - These are our objectives for the next 2 years",
        stat_families_label: "Benefited Families",
        stat_tonnes_label: "Tons of Waste",
        stat_credits_label: "Kz in Credits",
        stat_centers_label: "Centers in Luanda",
        
        // About Project
        about_title: "Building Angola's Sustainable Future",
        about_subtitle: "EcoValor is a project under development that aims to create a rewards system for recycling in Luanda, benefiting both the environment and local communities.",
        about_mission_title: "Mission",
        about_mission_desc: "Transform waste into real value for Luanda communities, creating a sustainable recycling system with tangible rewards.",
        about_vision_title: "Vision",
        about_vision_desc: "To be Angola's leading recycling platform, connecting communities, businesses and government in a sustainable ecosystem.",
        about_values_title: "Values",
        about_values_desc: "Sustainability, transparency, social inclusion and technological innovation for Angola's development.",
        
        // Status
        status_title: "Development Status",
        status_research_title: "Market Research",
        status_research_desc: "Analysis of needs and opportunities in Luanda",
        status_partners_title: "Partnerships",
        status_partners_desc: "Seeking local and international partners",
        status_dev_title: "Development",
        status_dev_desc: "Digital platform planning",
        
        // Benefits
        benefits_title: "Transform Waste into Real Opportunities",
        benefits_subtitle: "Discover how participating in EcoValor can change your life and your community",
        benefit1_title: "Earn Real Money",
        benefit1_desc: "Transform bottles, paper and metal into credits that can be exchanged for money, mobile credit and essential products.",
        benefit2_title: "Help the Environment",
        benefit2_desc: "Contribute to reducing waste in Luanda and participate in building a cleaner and more sustainable city.",
        benefit3_title: "Inspire Your Community",
        benefit3_desc: "Be an example and help raise awareness among neighbors, friends and family about the importance of recycling.",
        benefit4_title: "Access Exclusive Benefits",
        benefit4_desc: "Discounts on fuel, essential products and essential services for your family.",
        
        // How It Works
        how_title: "Recycling Has Never Been So Easy and Rewarding",
        step1_title: "REGISTER",
        step1_desc: "Register for free",
        step1_detail1: "Download the EcoValor app or access via web",
        step1_detail2: "Quick registration with phone number",
        step1_detail3: "Receive your personalized QR code",
        step1_detail4: "Time: 2 minutes",
        step2_title: "DELIVER WASTE",
        step2_desc: "Take your materials to the centers",
        step2_detail1: "Clean plastic, paper, glass and metal",
        step2_detail2: "Present your QR code",
        step2_detail3: "Our team weighs and sorts",
        step2_detail4: "Location: 8 centers in Luanda",
        step3_title: "EARN CREDITS",
        step3_desc: "Each material has its value",
        step3_detail1: "Plastic: 50 credits/kg",
        step3_detail2: "Paper: 30 credits/kg",
        step3_detail3: "Glass: 40 credits/kg",
        step3_detail4: "Metal: 80 credits/kg",
        step3_detail5: "Conversion: 100 credits = 100 Kz",
        step4_title: "EXCHANGE FOR BENEFITS",
        step4_desc: "Use your credits as you prefer",
        step4_detail1: "Mobile credit (Unitel, Africel)",
        step4_detail2: "Purchases at No Kero and Candando",
        step4_detail3: "Internet TV Cable",
        step4_detail4: "Money via PayPay",
        step4_detail5: "Available 24/7",
        
        // Materials
        materials_title: "Transform These Materials into Money",
        material_plastic_title: "PLASTIC - 50 Credits/kg",
        material_paper_title: "PAPER - 30 Credits/kg",
        material_glass_title: "GLASS - 40 Credits/kg",
        material_metal_title: "METAL - 80 Credits/kg",
        material_what_accept: "What to accept:",
        material_how_prepare: "How to prepare:",
        material_plastic_accept1: "PET bottles (water, soda, juice)",
        material_plastic_accept2: "Cleaning product packaging",
        material_plastic_accept3: "Clean plastic bags",
        material_plastic_accept4: "Bottle caps",
        material_plastic_accept5: "Yogurt and butter packaging",
        material_plastic_prepare1: "Remove labels when possible",
        material_plastic_prepare2: "Rinse quickly with water",
        material_plastic_prepare3: "Remove metal caps",
        material_plastic_prepare4: "Dry in the sun before delivering",
        material_paper_accept1: "Newspapers and magazines",
        material_paper_accept2: "Clean cardboard",
        material_paper_accept3: "Notebooks and books",
        material_paper_accept4: "Paper packaging",
        material_paper_accept5: "Cereal boxes (without plastic)",
        material_paper_prepare1: "Remove clips and staples",
        material_paper_prepare2: "Do not mix with toilet paper",
        material_paper_prepare3: "Keep dry and clean",
        material_paper_prepare4: "Fold to save space",
        material_glass_accept1: "Drinking bottles",
        material_glass_accept2: "Preserved jars",
        material_glass_accept3: "Empty perfume bottles",
        material_glass_accept4: "Jelly jars",
        material_glass_accept5: "Broken glasses and cups",
        material_glass_prepare1: "Remove caps and labels",
        material_glass_prepare2: "Wash with water and soap",
        material_glass_prepare3: "Pack carefully",
        material_glass_prepare4: "Separate by color when possible",
        material_metal_accept1: "Soda cans",
        material_metal_accept2: "Preserved cans",
        material_metal_accept3: "Metal caps",
        material_metal_accept4: "Copper wires",
        material_metal_accept5: "Aluminum in general",
        material_metal_prepare1: "Wash and dry thoroughly",
        material_metal_prepare2: "Remove paper labels",
        material_metal_prepare3: "Crush cans to save space",
        material_metal_prepare4: "Separate iron from aluminum",
        
        // Centers
        points_title: "Find the Nearest Center",
        points_sub: "LUANDA - 8 PLANNED CENTERS",
        map_development_title: "Map in Development",
        map_development_desc: "We are mapping the best locations in Luanda to install our centers. Soon you will be able to see all available centers here.",
        center1_name: "Maianga Center",
        center1_address: "Rua Amílcar Cabral, 234 - Maianga • ",
        center1_schedule: "Monday to Saturday, 7am to 5pm",
        center1_specialty: "Specialty: All materials + Environmental Education",
        center2_name: "Sambizanga Center",
        center2_address: "Av. 21 de Janeiro, 156 - Sambizanga • ",
        center2_schedule: "Monday to Friday, 8am to 4pm",
        center2_specialty: "Specialty: Plastic and Paper",
        center3_name: "Rangel Center",
        center3_address: "Rua da Missão, 67 - Rangel • ",
        center3_schedule: "Tuesday to Saturday, 7:30am to 5:30pm",
        center3_specialty: "Specialty: Glass and Metal",
        center4_name: "Cazenga Center",
        center4_address: "Rua dos Coqueiros, 89 - Cazenga • ",
        center4_schedule: "Monday to Saturday, 8am to 4pm",
        center4_specialty: "Specialty: All materials",
        status_planned: "Planned",
        
        // Testimonials
        testimonials_title: "Transformation Stories",
        testimonials_sub: "Examples of how EcoValor can impact people's lives in Luanda",
        testimonial1_name: "Example: Maria Santos, 34 years old - Sambizanga",
        testimonial1_text: "\"I started collecting plastic bottles from the neighborhood. In the first month, I earned 45,000 Kz in credits. Now I pay for my children's internet and still have money left to buy at No Kero. EcoValor changed our lives!\"",
        testimonial1_impact_title: "Maria's Impact:",
        testimonial1_impact1: "3 months participating",
        testimonial1_impact2: "156 kg of plastic delivered",
        testimonial1_impact3: "187,000 Kz in credits earned",
        testimonial1_impact4: "8 neighbors mobilized",
        testimonial2_name: "Example: João Miguel, 28 years old - Viana",
        testimonial2_text: "\"I work as an independent collector. Before I sold directly to recyclers for little money. With EcoValor, I earn 40% more and still receive payment immediately via PayPay. Plus, my children learned about the environment!\"",
        testimonial2_impact_title: "João's Impact:",
        testimonial2_impact1: "6 months participating",
        testimonial2_impact2: "890 kg of various materials",
        testimonial2_impact3: "425,000 Kz in credits earned",
        testimonial2_impact4: "Monthly income increased 40%",
        example_tag: "Future impact example",
        
        // Register
        register_title: "Join the Development",
        register_sub: "Help us build this solution for Luanda! Register your interest and receive updates on project progress.",
        register_interest_title: "Interest List",
        register_interest_desc: "Register to receive news about the launch and participate in the pilot.",
        register_partner_title: "Be a Partner",
        register_partner_desc: "Do you have a location or want to support the project? Contact us.",
        
        // Form
        form_email: "Your email",
        form_name: "Your name",
        form_select_neighborhood: "Select your neighborhood",
        form_centro: "Luanda Center",
        form_talatona: "Talatona",
        form_kilamba: "Kilamba",
        form_outro: "Other",
        btn_register_interest: "Register Interest",
        btn_contact_us: "Contact Us",
        
        // Contact
        contact_title: "Contact Us",
        contact_phone_title: "Customer Service",
        contact_email_title: "Email",
        contact_address_title: "Corporate Address",
        contact_hours_title: "Service Hours",
        contact_hours_weekdays: "Monday to Friday: 8am to 5pm",
        contact_hours_saturday: "Saturday: 8am to 12pm",
        contact_hours_whatsapp: "WhatsApp Hotline: 24h every day",
        social_title: "Social Media",
        
        // Footer
        footer_contact: "Contact:",
        footer_status: "Status: Research and validation phase",
        footer_copyright: "© 2025 EcoValor Angola. Project under development for Luanda, Angola."
    }
};

// Função para mudar o idioma
function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Traduzir placeholders
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    // Atualizar botões de idioma
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`#lang-${lang}`).classList.add('active');
    
    // Salvar preferência
    localStorage.setItem('language', lang);
}

// Inicializar idioma
document.addEventListener('DOMContentLoaded', function() {
    // Carregar idioma salvo ou usar português como padrão
    const savedLang = localStorage.getItem('language') || 'pt';
    changeLanguage(savedLang);
    
    // Event listeners para botões de idioma
    document.getElementById('lang-pt').addEventListener('click', () => changeLanguage('pt'));
    document.getElementById('lang-en').addEventListener('click', () => changeLanguage('en'));
});

// Menu mobile
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            const isExpanded = navLinks.classList.contains('active');
            mobileMenuBtn.setAttribute('aria-expanded', isExpanded);
        });
    }
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}); 