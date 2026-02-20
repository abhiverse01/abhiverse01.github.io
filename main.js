// ========== Data Definitions ==========
const skillsData = [
    { name: 'Python', level: 95, category: 'dev', icon: 'code' },
    { name: 'Machine Learning', level: 92, category: 'ml', icon: 'brain' },
    { name: 'LLMs/NLP', level: 90, category: 'ml', icon: 'message' },
    { name: 'Deep Learning', level: 88, category: 'ml', icon: 'network' },
    { name: 'JavaScript', level: 75, category: 'dev', icon: 'js' },
    { name: 'Flask', level: 85, category: 'dev', icon: 'server' },
    { name: 'Docker', level: 82, category: 'cloud', icon: 'container' },
    { name: 'Kubernetes', level: 75, category: 'cloud', icon: 'cluster' },
    { name: 'Kafka', level: 72, category: 'cloud', icon: 'stream' },
    { name: 'SQL', level: 88, category: 'dev', icon: 'database' },
    { name: 'OpenCV', level: 82, category: 'ml', icon: 'eye' },
    { name: 'TensorFlow', level: 85, category: 'ml', icon: 'tensor' },
    { name: 'Git', level: 90, category: 'dev', icon: 'git' },
    { name: 'AWS/Cloud', level: 75, category: 'cloud', icon: 'cloud' },
    { name: 'System Design', level: 80, category: 'cloud', icon: 'architecture' },
    { name: 'Project Management', level: 88, category: 'dev', icon: 'pm' }
];

const projectsData = [
    {
        title: 'ActFormers Research',
        desc: 'Researching modifications to transformer architecture to predict actions rather than just tokens. Pioneering new approaches in action prediction.',
        tags: ['Transformers', 'Research', 'AI'],
        logo: 'AF',
        github: null,
        live: null,
        status: 'In Progress'
    },
    {
        title: 'CodeBeing',
        desc: 'Natural language to Python code generator using a fine-tuned Llama-2 7B model on GitHub datasets. Features React frontend and Vercel deployment.',
        tags: ['LLM', 'Llama-2', 'React'],
        logo: 'CB',
        github: 'https://github.com/abhiverse01/project-codebeing',
        live: 'https://projectcodebeing.vercel.app'
    },
    {
        title: 'The Coder\'s Handbook',
        desc: 'Comprehensive open-source repository compiling valuable resources, links, notes, and key collections from my developer journey. MIT Licensed.',
        tags: ['Documentation', 'Resources', 'Open Source'],
        logo: 'CH',
        github: 'https://github.com/abhiverse01/the-coders-handbook',
        live: null
    },
    {
        title: 'NeuNet Visualization',
        desc: 'Building an entire neural network from scratch using NumPy and mathematics. Educational project for understanding deep learning fundamentals.',
        tags: ['NumPy', 'Neural Networks', 'Math'],
        logo: 'NN',
        github: 'https://github.com/abhiverse01/NeuNet-Visualization',
        live: null
    },
    {
        title: 'Hate Speech Detection',
        desc: 'Multi-modal hate speech detection using deep learning. Combines BERT for text and ResNet-50 for image analysis.',
        tags: ['BERT', 'ResNet-50', 'Deep Learning'],
        logo: 'HD',
        github: 'https://github.com/abhiverse01/hatespeech-multimodal-detection',
        live: null
    },
    {
        title: 'Recommendation System',
        desc: 'Production-grade personalized recommendation engine deployed on Digital Ocean microservices architecture for scalability.',
        tags: ['RecSys', 'Microservices', 'Docker'],
        logo: 'RS',
        github: null,
        live: null,
        status: 'Production'
    },
    {
        title: 'Space-Sim',
        desc: 'Python project simulating gravitational interactions between celestial bodies (Sun, Earth, Moon) using the Pygame library.',
        tags: ['Python', 'PyGame', 'Physics'],
        logo: 'SS',
        github: 'https://github.com/abhiverse01/Space-Sim',
        live: null
    },
    {
        title: 'Llama2 CodeGen',
        desc: 'Notebook containing code scripts for fine-tuning Llama-2 LLM to create a Python code generator using a custom-built dataset.',
        tags: ['Fine-tuning', 'LLMs', 'Colab'],
        logo: 'LC',
        github: 'https://github.com/abhiverse01/Llama2-CodeGen',
        live: null
    },
    {
        title: 'TFX Iris Project',
        desc: 'Demonstrates TensorFlow Extended for creating scalable ML pipelines and automating CI/CD workflows with GitHub Actions.',
        tags: ['TFX', 'MLOps', 'CI/CD'],
        logo: 'TX',
        github: 'https://github.com/abhiverse01/tfx-iris-project',
        live: null
    },
    {
        title: 'AI Learning Journey',
        desc: 'Comprehensive compilation of Colab notebooks and resources for learning AI, ML, and neural networks.',
        tags: ['ML', 'Education', 'Jupyter'],
        logo: 'AJ',
        github: 'https://github.com/abhiverse01/AI-Learning-Journey',
        live: null
    },
    {
        title: 'How I Learned Python',
        desc: 'Collection of Python scripts and Colab notebooks documenting my Python learning journey.',
        tags: ['Python', 'Learning', 'Colab'],
        logo: 'PY',
        github: 'https://github.com/abhiverse01/how-I-learned-python',
        live: null
    },
    {
        title: 'Titanic Survival Prediction',
        desc: 'Uses three ML models (Logistic Regression, Random Forest, Neural Network) to predict passenger survival.',
        tags: ['Scikit-learn', 'Neural Networks', 'Kaggle'],
        logo: 'TI',
        github: 'https://github.com/abhiverse01/titanic_project',
        live: null
    }
];

const terminalCommands = {
    help: () => `Available commands:
  about       - Learn about me
  skills      - View my technical skills
  projects    - See my featured projects
  experience  - My professional journey
  contact     - Get my contact info
  games       - Games I've built
  research    - Current research work
  funfacts    - Fun facts about me
  github      - Open my GitHub
  linkedin    - Open my LinkedIn
  clear       - Clear terminal
  matrix      - Something cool
  tea      - tea break?
  joke        - Programmer joke`,
    
    about: () => `AbhiShek Shah - AI Engineer & Project Manager
  
Computer Engineer (TU, 2019)
NEC Registered (2025)
4+ years in ML/AI development
Currently at Inflancer Technology

From building games in Python to deploying 
LLMs in production - I love turning ideas 
into reality through code.`,
    
    skills: () => `Technical Expertise:
  
Languages:
  Python (95%) | JavaScript (75%) | SQL (88%)

ML/AI:
  Machine Learning (92%) | LLMs/NLP (90%)
  Deep Learning (88%) | OpenCV (82%)

Cloud/DevOps:
  Docker (82%) | Kubernetes (75%) | Kafka (72%)
  System Design (80%) | AWS (75%)

Tools:
  Git (90%) | Flask (85%) | TensorFlow (85%)`,
    
    projects: () => `Featured Projects:
  
1. ActFormers - Action-predicting transformers
2. CodeBeing - LLM Code Generator
3. The Coder's Handbook - Dev Resources
4. NeuNet Visualization - NN from scratch
5. Hate Speech Detection - Multi-modal DL
6. Space-Sim - Gravitational simulation
7. TFX Iris Project - MLOps pipelines

...and 20+ more on GitHub!`,
    
    experience: () => `Professional Journey:
  
2024-Present: AI Engineer & Team Lead
              Inflancer Technology
              
2024-Present: Project Manager
              Inflancer Technology
              
2019-2024: ML Researcher & Engineer
           ResearchGrad (Freelance)
           
2019-Present: Python/Game Developer
              Freelance
              
2023: ML Intern - Codsoft, Bangalore`,
    
    contact: () => `Get in touch:
  
Email: abhishek.aimarine@gmail.com
LinkedIn: linkedin.com/in/theabhishekshah
GitHub: github.com/abhiverse01
Portfolio: abhishekshah.vercel.app
  
Location: Kathmandu, Nepal
Phone: +977(981) 587-3277`,
    
    games: () => `Games I've Built:
  
Python Games (PyGame/Tkinter):
  - PySnake
  - Pong
  - BlackJack
  - Hangman
  - Space-Sim
  - Shop Calculator

Web Games (HTML/CSS/JS):
  - Interactive puzzles
  - Arcade-style games
  - Quiz applications

Check my 'shortforms' repo for more!`,
    
    research: () => `Current Research:
  
ActFormers
----------
Modifying transformer architecture to learn
and predict ACTIONS rather than just tokens.

Goal: Enable AI to understand and predict
sequential actions in real-world scenarios.

Status: Active development

Publications:
- Nepali Music Genre Classification
- Multi-modal Hate Speech Detection`,
    
    funfacts: () => `Fun Facts:
  
- I write tech articles on Medium reaching
  1K+ weekly readers
  
- Built my first game (PySnake) while
  learning Python
  
- I maintain open-source learning resources
  that have helped 100+ developers
  
- Can type 70+ WPM with 90% accuracy
  
- Once built a CNN that recognizes hand
  gestures for sign language`,
    
    github: () => 'OPEN:https://github.com/abhiverse01',
    
    linkedin: () => 'OPEN:https://www.linkedin.com/in/theabhishekshah/',
    
    matrix: () => `MATRIX MODE ACTIVATED
  
01001000 01100101 01101100 01101100 01101111
  
Wake up, Neo...
The Matrix has you...
Follow the white rabbit.
  
Just kidding! But wouldn't it be cool?
Type 'projects' to see real AI work.`,
    
    tea: () => `tea Stats:
  
Daily intake: 2-3 cups
Favorite: Tea
Best ideas: After tea #2
Debugging success rate: +40% with tea

"You can't buy happiness, but you can
 buy tea, and that's pretty close."
  
Want to grab tea? Type 'contact'!`,
    
    joke: () => {
        const jokes = [
            "Why do programmers prefer dark mode?\n\nBecause light attracts bugs!",
            "A SQL query walks into a bar,\nwalks up to two tables and asks...\n\n'Can I join you?'",
            "There are only 10 types of people:\nThose who understand binary\nand those who don't.",
            "Why did the AI break up with the dataset?\n\nThere was no chemistry, just tensors.",
            "I told my neural network a joke.\n\nIt didn't laugh, but it did adjust\nits weights to find it funnier.",
            "404: Motivation not found.\n\nPlease inject tea and try again.",
            "Why do ML engineers love gardening?\n\nBecause they're great at pruning!",
        ];
        return jokes[Math.floor(Math.random() * jokes.length)];
    },
    
    clear: () => 'CLEAR'
};

const roles = ['AI Engineer', 'Project Manager', 'ML Researcher', 'Python Developer', 'Tech Writer', 'Game Developer'];

// ========== DOM Elements ==========
let canvas, ctx, header, mobileMenuBtn, navLinks, mobileOverlay;
let skillsGrid, projectsGrid, terminalToggle, terminalModal, terminalInput, terminalOutput;
let typingContainer, skillCategoryBtns, navLinkElements;

// ========== Canvas Variables ==========
let width = 0;
let height = 0;
let mouseX = 0;
let mouseY = 0;
let particles = [];
let animationId = null;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ========== Initialization ==========
document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    canvas = document.getElementById('neural-canvas');
    ctx = canvas.getContext('2d');
    header = document.getElementById('header');
    mobileMenuBtn = document.getElementById('mobile-menu-btn');
    navLinks = document.getElementById('nav-links');
    mobileOverlay = document.getElementById('mobile-overlay');
    skillsGrid = document.getElementById('skills-grid');
    projectsGrid = document.getElementById('projects-grid');
    terminalToggle = document.getElementById('terminal-toggle');
    terminalModal = document.getElementById('terminal-modal');
    terminalInput = document.getElementById('terminal-input');
    terminalOutput = document.getElementById('terminal-output');
    typingContainer = document.getElementById('typing-container');
    skillCategoryBtns = document.querySelectorAll('.skill-category-btn');
    navLinkElements = document.querySelectorAll('.nav-link');

    // Initialize everything
    initCanvas();
    initEventListeners();
    renderSkills();
    renderProjects();
    typeEffect();
    initRevealObserver();
    initCounterObserver();
});

// ========== Canvas Setup ==========
function initCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    mouseX = width / 2;
    mouseY = height / 2;
    
    resizeCanvas();
    
    if (!prefersReducedMotion) {
        initParticles();
        animate();
    }
}

function resizeCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
}

window.addEventListener('resize', resizeCanvas);

// ========== Particle System ==========
class Particle {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.max(1, Math.random() * 2 + 1);
    }

    update() {
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;

        if (distance < maxDistance && distance > 0) {
            const force = (maxDistance - distance) / maxDistance;
            this.vx -= (dx / distance) * force * 0.02;
            this.vy -= (dy / distance) * force * 0.02;
        }

        this.x += this.vx;
        this.y += this.vy;

        this.vx *= 0.99;
        this.vy *= 0.99;

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
    }

    draw() {
        const radius = Math.max(0.5, this.radius);
        ctx.beginPath();
        ctx.arc(this.x, this.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 217, 181, 0.6)';
        ctx.fill();
    }
}

function initParticles() {
    particles = [];
    const particleCount = Math.min(80, Math.floor((width * height) / 15000));
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 120) {
                const opacity = Math.max(0, (1 - distance / 120) * 0.15);
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.strokeStyle = `rgba(0, 217, 181, ${opacity})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
        p.update();
        p.draw();
    });

    drawConnections();
    animationId = requestAnimationFrame(animate);
}

// ========== Event Listeners ==========
function initEventListeners() {
    // Mouse tracking
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Scroll effects
    window.addEventListener('scroll', handleScroll);

    // Mobile menu
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    mobileOverlay.addEventListener('click', closeMobileMenu);
    navLinkElements.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Skill category buttons
    skillCategoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            skillCategoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderSkills(btn.getAttribute('data-category'));
        });
    });

    // Terminal
    terminalToggle.addEventListener('click', toggleTerminal);
    terminalInput.addEventListener('keypress', handleTerminalInput);
    document.addEventListener('click', handleTerminalOutsideClick);

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', handleSmoothScroll);
    });
}

// ========== Scroll Handlers ==========
function handleScroll() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Update active nav link
    const sections = document.querySelectorAll('section[id]');
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinkElements.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// ========== Mobile Menu ==========
function toggleMobileMenu() {
    navLinks.classList.toggle('open');
    mobileOverlay.classList.toggle('open');
}

function closeMobileMenu() {
    navLinks.classList.remove('open');
    mobileOverlay.classList.remove('open');
}

// ========== Smooth Scroll ==========
function handleSmoothScroll(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ========== Reveal Observer ==========
function initRevealObserver() {
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 50);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));
}

// ========== Counter Observer ==========
function initCounterObserver() {
    const counters = document.querySelectorAll('.stat-value');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateCounter(entry.target, target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));
}

function animateCounter(element, target) {
    if (prefersReducedMotion) {
        element.textContent = target + '+';
        return;
    }
    
    let count = 0;
    const increment = target / 50;
    
    const updateCounter = () => {
        if (count < target) {
            count += increment;
            element.textContent = Math.ceil(count) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    };
    
    updateCounter();
}

// ========== Skills Rendering ==========
function renderSkills(category = 'all') {
    const filtered = category === 'all' 
        ? skillsData 
        : skillsData.filter(s => s.category === category);

    skillsGrid.innerHTML = filtered.map(skill => `
        <div class="skill-card">
            <svg class="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                ${getSkillIcon(skill.icon)}
            </svg>
            <div class="skill-name">${skill.name}</div>
            <div class="skill-level">
                <div class="skill-level-fill" style="width: 0%" data-width="${skill.level}%"></div>
            </div>
        </div>
    `).join('');

    // Animate skill bars
    setTimeout(() => {
        document.querySelectorAll('.skill-level-fill').forEach(bar => {
            bar.style.width = bar.getAttribute('data-width');
        });
    }, 100);
}

function getSkillIcon(type) {
    const icons = {
        code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
        brain: '<circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/>',
        message: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
        network: '<circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>',
        js: '<path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"/><path d="M12 12v4M8 12l4 4 4-4"/>',
        server: '<rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>',
        container: '<path d="M22 12L12 2 2 12l10 10 10-10z"/><path d="M12 2v20"/><path d="M2 12h20"/>',
        cluster: '<circle cx="12" cy="5" r="3"/><circle cx="5" cy="19" r="3"/><circle cx="19" cy="19" r="3"/><line x1="12" y1="8" x2="5" y2="16"/><line x1="12" y1="8" x2="19" y2="16"/>',
        stream: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
        database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>',
        eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
        tensor: '<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>',
        git: '<circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7"/><line x1="6" y1="9" x2="6" y2="21"/>',
        cloud: '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>',
        architecture: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>',
        pm: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/><line x1="12" y1="11" x2="12" y2="17"/><line x1="9" y1="14" x2="15" y2="14"/>'
    };
    return icons[type] || icons.code;
}

// ========== Projects Rendering ==========
function renderProjects() {
    projectsGrid.innerHTML = projectsData.map(project => `
        <div class="project-card reveal">
            <div class="project-image">
                <div class="project-image-pattern"></div>
                <div class="project-logo">${project.logo}</div>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-desc">${project.desc}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    ${project.status ? `<span class="tag" style="background: rgba(39, 202, 64, 0.2); color: #27ca40;">${project.status}</span>` : ''}
                </div>
                <div class="project-links">
                    ${project.github ? `
                        <a href="${project.github}" target="_blank" class="project-link">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                            </svg>
                            GitHub
                        </a>
                    ` : ''}
                    ${project.live ? `
                        <a href="${project.live}" target="_blank" class="project-link">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10"/>
                                <line x1="2" y1="12" x2="22" y2="12"/>
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                            </svg>
                            Live Demo
                        </a>
                    ` : ''}
                    ${!project.github && !project.live ? `
                        <span class="project-link" style="opacity: 0.6; cursor: default;">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                            </svg>
                            Private / In Progress
                        </span>
                    ` : ''}
                </div>
            </div>
        </div>
    `).join('');

    // Re-initialize reveal observer for new elements
    initRevealObserver();
}

// ========== Typing Effect ==========
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    if (!typingContainer) return;
    
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typingContainer.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingContainer.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentRole.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 500;
    }

    if (!prefersReducedMotion) {
        setTimeout(typeEffect, typeSpeed);
    }
}

// ========== Terminal ==========
function toggleTerminal() {
    terminalModal.classList.toggle('open');
    if (terminalModal.classList.contains('open')) {
        terminalInput.focus();
    }
}

function handleTerminalInput(e) {
    if (e.key === 'Enter') {
        const command = terminalInput.value.toLowerCase().trim();
        
        const outputLine = document.createElement('div');
        outputLine.className = 'terminal-line';
        outputLine.innerHTML = `<span class="terminal-prompt">$</span> ${command}`;
        terminalOutput.appendChild(outputLine);

        if (command === 'clear') {
            terminalOutput.innerHTML = '';
        } else if (terminalCommands[command]) {
            const result = terminalCommands[command]();
            
            if (result.startsWith('OPEN:')) {
                const url = result.substring(5);
                window.open(url, '_blank');
                const confirmLine = document.createElement('div');
                confirmLine.className = 'terminal-line terminal-success';
                confirmLine.textContent = `Opening ${url}...`;
                terminalOutput.appendChild(confirmLine);
            } else {
                result.split('\n').forEach(line => {
                    const resultLine = document.createElement('div');
                    resultLine.className = 'terminal-line terminal-muted';
                    resultLine.textContent = line;
                    terminalOutput.appendChild(resultLine);
                });
            }
        } else {
            const errorLine = document.createElement('div');
            errorLine.className = 'terminal-line terminal-error';
            errorLine.textContent = `Command not found: ${command}. Type 'help' for available commands.`;
            terminalOutput.appendChild(errorLine);
        }

        terminalInput.value = '';
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }
}

function handleTerminalOutsideClick(e) {
    if (!terminalModal.contains(e.target) && !terminalToggle.contains(e.target)) {
        terminalModal.classList.remove('open');
    }
}
