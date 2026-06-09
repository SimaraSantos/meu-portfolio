import { useState } from 'react';
import './App.css';
import fotoPerfil from './assets/fotosimara.jpg'; // ⬅️ ADICIONE ESTA LINHA AQUI



// Interface para estruturar os dados dos projetos
interface Projeto {
  titulo: string;
  descricao: string;
  tecnologias: string[];
  linkGitHub: string;
}

export default function App() {
  // Estado para um formulário de contato simples
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  // Seus projetos reais para listar na seção de portfólio
  const meusProjetos: Projeto[] = [
    {
      titulo: "Fintech Project (Live)",
      descricao: "Desenvolvimento prático e refatoração em tempo real do ecossistema da aplicação financeira.",
      tecnologias: ["Java", "Spring Boot", "SQL", "JDBC"],
      linkGitHub: "https://github.com/SimaraSantos/projeto-live-fintech"
    },
    {
      titulo: "Fintech com Herança",
      descricao: "Aplicação dos conceitos de Programação Orientada a Objetos (POO), explorando herança e polimorfismo no domínio financeiro da FIAP.",
      tecnologias: ["Java", "POO", "Encapsulamento"],
      linkGitHub: "https://github.com/SimaraSantos/projeto-fiap-fintech-heranca"
    },
    {
      titulo: "API de Produtos FIAP",
      descricao: "Desenvolvimento de uma API RESTful para cadastro, listagem e gerenciamento de produtos.",
      tecnologias: ["Java", "Spring Boot", "REST API", "JPA / Hibernate"],
      linkGitHub: "https://github.com/SimaraSantos/fiap-produtos-api"
    },
    {
      titulo: "Desafios Java FIAP",
      descricao: "Resolução de algoritmos, lógica de programação e desafios estruturais propostos durante a graduação.",
      tecnologias: ["Java", "Lógica de Programação", "Algoritmos"],
      linkGitHub: "https://github.com/SimaraSantos/desafios-java-fiap"
    },
    {
      titulo: "Challenge Sprint 2",
      descricao: "Entrega da segunda etapa do projeto integrador (Challenge) em parceria com empresas parceiras da FIAP.",
      tecnologias: ["Java", "Software Architecture", "Database"],
      linkGitHub: "https://github.com/SimaraSantos/Challenge-sprint-2"
    },
    {
      titulo: "CarePlus Challenge Project (Grupo 48)",
      descricao: "Projeto corporativo desenvolvido em equipe para a proposta de solução tecnológica voltada à saúde (CarePlus).",
      tecnologias: ["Java", "Spring Boot", "Enterprise Architecture", "SQL"],
      linkGitHub: "https://github.com/SimaraSantos/Grupo48_Projeto_Apresentacao_CarePlus_ChallengeProject"
    },
    {
      titulo: "Imersão Front-End & IA",
      descricao: "Projeto desenvolvido durante a Imersão Alura, aplicando conceitos modernos de Front-End integrados com Inteligência Artificial.",
      tecnologias: ["JavaScript", "HTML5", "CSS3", "AI Prompts"],
      linkGitHub: "https://github.com/SimaraSantos/imersao_front_ia"
    },
    {
      titulo: "Arquitetura com Context API",
      descricao: "Estudo aprofundado e implementação do hook useContext para gerenciamento de estado global no React.",
      tecnologias: ["React", "JavaScript", "Context API", "Hooks"],
      linkGitHub: "https://github.com/SimaraSantos/usecontext"
    },
    {
      titulo: "React Components Studio",
      descricao: "Laboratório de componentização avançada focado na criação de interfaces modulares e reutilizáveis.",
      tecnologias: ["React", "TypeScript", "CSS Modules"],
      linkGitHub: "https://github.com/SimaraSantos/REACT-COMPONET"
    },
    {
      titulo: "Gerenciamento de Props no React",
      descricao: "Projeto focado em entender o fluxo unidirecional de dados, passagem de propriedades e imutabilidade de estado.",
      tecnologias: ["React", "JavaScript", "Props"],
      linkGitHub: "https://github.com/SimaraSantos/props"
    },
    {
      titulo: "Alura Cats",
      descricao: "Aplicação interativa desenvolvida para exploração e listagem dinâmica utilizando manipulação de estado.",
      tecnologias: ["JavaScript", "React", "CSS3"],
      linkGitHub: "https://github.com/SimaraSantos/ALURA_CATS"
    },
    {
      titulo: "Netflix Clone Base",
      descricao: "Recriação da interface de usuário do serviço de streaming com foco em fidelidade de layout e responsividade.",
      tecnologias: ["HTML5", "CSS3", "Flexbox", "Grid"],
      linkGitHub: "https://github.com/SimaraSantos/projeto-netflix"
    },
    {
      titulo: "Fintech Bootstrap (Capítulo 9)",
      descricao: "Implementação da camada visual responsiva do projeto de finanças utilizando o ecossistema Bootstrap.",
      tecnologias: ["HTML5", "Bootstrap", "CSS3"],
      linkGitHub: "https://github.com/SimaraSantos/cap9fintechbootstrap"
    },
    {
      titulo: "Meu Projeto Bootstrap",
      descricao: "Estudos práticos de design responsivo, componentes utilitários e prototipagem rápida de layouts.",
      tecnologias: ["HTML5", "Bootstrap", "Design Responsivo"],
      linkGitHub: "https://github.com/SimaraSantos/meu-projeto-bootstrap"
    },
    {
      titulo: "Vite Core Project",
      descricao: "Configuração e estrutura base de um ambiente de desenvolvimento modernizado e ultra-rápido.",
      tecnologias: ["Vite", "JavaScript", "Web Build"],
      linkGitHub: "https://github.com/SimaraSantos/VITE-PROJECT"
    },
    {
      titulo: "React Fundamental Labs",
      descricao: "Repositório dedicado ao estudo do ecossistema React, ciclo de vida e renderização dinâmica.",
      tecnologias: ["React", "JavaScript"],
      linkGitHub: "https://github.com/SimaraSantos/react"
    },
    {
      titulo: "Catálogo Dinâmico de Produtos",
      descricao: "Aplicação web desenvolvida com Next.js 15 para listagem e gerenciamento dinâmico de produtos, com consumo de rotas de API internas, gestão de variáveis de ambiente na Vercel e otimização de imagens remotas (Unsplash).",
      tecnologias: ["Next.js", "TypeScript", "Vercel", "API Rest"],
      linkGitHub: "https://github.com/SimaraSantos/nextjs-consumo-api-mock-api"
    },
  ];

  const handleContato = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Mensagem enviada com sucesso de: ${email}`);
    setEmail('');
    setMensagem('');
  };

  return (
    <div className="portfolio-container">
      {/* 1. SEÇÃO HERO / APRESENTAÇÃO */}
      <header className="hero-section">
        <nav className="navbar">
          <span className="logo-text">simarasantos</span>
        </nav>

        <div className="hero-content">
          <div className="hero-text">
            <h1>Muito prazer! <br />Eu sou a <span>Simara Santos</span>.</h1>
            <p>
              Graduanda em <strong>Análise e Desenvolvimento de Sistemas pela FIAP</strong>.
              Trago uma sólida bagagem consolidada em planejamento, gestão e resolução de problemas complexos
              advindos da minha trajetória na Educação, aplicando essa maturidade analítica no desenvolvimento de software.
            </p>
            <a href="#contact" className="contact-btn-link">CONTACTE-ME</a>
          </div>
          <div className="hero-image-container">
            {/* Adicione sua foto na pasta assets depois */}
            <img src={fotoPerfil} alt="Simara Santos" className="hero-image" />

          </div>
        </div>
      </header>

      <hr className="divider" />

      {/* 2. SEÇÃO DE HABILIDADES (SKILLS) */}
      <section className="skills-section">
        <div className="skills-grid">
          <div className="skill-card">
            <h2>React</h2>
            <p>Desenvolvimento de SPAs e Hooks</p>
          </div>
          <div className="skill-card">
            <h2>TypeScript</h2>
            <p>Tipagem estática e código seguro</p>
          </div>
          <div className="skill-card">
            <h2>Java</h2>
            <p>Arquitetura Backend e Spring Boot</p>
          </div>
          <div className="skill-card">
            <h2>JavaScript</h2>
            <p>Manipulação de DOM e ES6+</p>
          </div>
          <div className="skill-card">
            <h2>SQL</h2>
            <p>Modelagem de Bancos de Dados</p>
          </div>
          <div className="skill-card">
            <h2>Vite</h2>
            <p>Ambientes de Build Ultra-rápidos</p>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* 3. SEÇÃO DE PROJETOS */}
      <section className="projects-section">
        <div className="projects-header">
          <h2>Projetos</h2>
          <a href="#contact" className="contact-btn-link">CONTACTE-ME</a>
        </div>

        <div className="projects-grid">
          {meusProjetos.map((projeto, index) => (
            <div key={index} className="project-card">
              <h3>{projeto.titulo}</h3>
              <p>{projeto.descricao}</p>
              <div className="project-techs">
                {projeto.tecnologias.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={projeto.linkGitHub} target="_blank" rel="noreferrer" className="view-project">
                Ver Código no GitHub
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SEÇÃO DE CONTATO & FOOTER */}
      <footer id="contact" className="contact-footer">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Contato</h2>
            <p>Adoraria ouvir sobre seus projetos e oportunidades. Por favor, preencha o formulário e retornarei o mais breve possível.</p>
          </div>

          <form onSubmit={handleContato} className="contact-form">
            <input
              type="email"
              placeholder="E-MAIL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              placeholder="MENSAGEM"
              rows={4}
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              required
            ></textarea>
            <button type="submit" className="send-btn">ENVIAR MENSAGEM</button>
          </form>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <span className="logo-text">simarasantos</span>
          <div className="footer-socials">
            <a href="https://github.com/SimaraSantos" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/simara-santos-silva-bb5732247/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}