// ========== Achievements Data ==========
const certificatesData = [
    // AI/ML
    { title: 'MongoDB Schema Design Optimisation', issuer: 'MongoDB', date: 'Jan 2026', id: '79c3f3d1-9d06-416e-a1dc-06052b0b8d1e', category: 'ml', link: null },
    { title: 'Building AI-Powered Search with MongoDB Vector Search', issuer: 'MongoDB', date: 'Dec 2025', id: 'ccad3bf6-d148-4f14-8a94-1b9da9381c07', category: 'ml', link: null },
    { title: 'Google AI Studio Bootcamp', issuer: 'Udemy', date: 'Jul 2025', id: 'UC-e2386788-1cc6-46ba-b087-c9ec99accacd', category: 'ml', link: null },
    { title: 'Introduction to LangGraph', issuer: 'LangChain', date: 'Mar 2025', id: 'n1ciudnbfg', category: 'ml', link: null },
    { title: 'An Even Easier Introduction to CUDA', issuer: 'NVIDIA', date: 'May 2024', id: null, category: 'ml', link: null },
    { title: 'Fine-Tuning LLM Models Course', issuer: 'freeCodeCamp', date: 'Feb 2024', id: null, category: 'ml', link: null },
    { title: 'Automated Machine Learning for Beginners', issuer: 'Udemy', date: 'Aug 2024', id: 'UC-79b3aaec-33b3-4fe8-bca4-6c8a13504284', category: 'ml', link: null },
    { title: 'ChatGPT Prompt Engineering for Developers', issuer: 'DeepLearning.AI', date: 'Jul 2024', id: '793b76ad-ec97-4cfc-ad52-eb3484a6b2cb', category: 'ml', link: null },
    { title: 'NLP Project-based Learning', issuer: 'Great Learning', date: 'Jul 2024', id: '49362', category: 'ml', link: null },
    { title: 'Fine-Tuning Large Language Models', issuer: 'DeepLearning.AI', date: 'Jun 2022', id: null, category: 'ml', link: null },
    { title: 'Introduction to On-Device AI', issuer: 'DeepLearning.AI', date: '2024', id: null, category: 'ml', link: null },
    { title: 'Artificial Intelligence Fundamentals', issuer: 'Great Learning', date: 'May 2024', id: '84191', category: 'ml', link: null },
    { title: 'Applied Machine Learning Algorithms', issuer: 'Great Learning', date: 'May 2024', id: '56698', category: 'ml', link: null },
    { title: 'Tensorflow with Python', issuer: 'Great Learning', date: 'May 2024', id: '56698', category: 'ml', link: null },
    { title: 'Introduction to Generative AI', issuer: 'Coursera', date: 'Oct 2023', id: '2RYNBVE7PTXH', category: 'ml', link: null },
    { title: 'Unlocking the power of ChatGPT in Data Science', issuer: 'Udemy', date: 'Nov 2023', id: 'UC-e261495f-ff30-4f2c-9a9e-d4b0312ecf67', category: 'ml', link: null },

    // Development
    { title: 'Computer Science Engineer', issuer: 'Nepal Engineering Council', date: 'Apr 2025', id: '90903', category: 'dev', link: null },
    { title: 'EdYoda Certificate for HTML5', issuer: 'Udemy', date: 'Nov 2024', id: 'UC-288961a2-6012-47d1-9626-2de4b3ae701d', category: 'dev', link: null },
    { title: 'Python GUI | Practical Projects', issuer: 'Udemy', date: 'Sep 2023', id: 'UC-10786951-f40b-4fe4-8843-4a5cec87a6cf', category: 'dev', link: null },
    { title: 'Python Programming - Basics to Advanced', issuer: 'Udemy', date: 'Sep 2023', id: 'UC-4dc55380-13e1-4120-adbc-e5a6baed124f', category: 'dev', link: null },
    { title: 'Introduction to Programming Using Python', issuer: 'HackerRank', date: 'Jul 2023', id: '99D47D1E0846', category: 'dev', link: null },
    { title: 'Django for Python and Data Science', issuer: 'Simplilearn', date: 'Jun 2024', id: '6734769', category: 'dev', link: null },
    { title: 'CS250: Python for Data Science', issuer: 'Saylor Academy', date: 'May 2024', id: '4096728099AS', category: 'dev', link: null },
    { title: 'PyScript Fundamentals 101', issuer: 'Udemy', date: 'Feb 2024', id: 'UC-59ba06cd-9bee-47b4-80cd-c07a67764cd2', category: 'dev', link: null },
    { title: 'Expert-Level Typing', issuer: 'Teaching.com', date: 'Aug 2023', id: '256049629-118126774', category: 'dev', link: null },
    { title: 'A Crash Course in Writing Well', issuer: 'Udemy', date: 'May 2024', id: 'UC-d8c56706-9879-4d50-933a-bdc45ce2521f', category: 'dev', link: null },
    
    // Cloud/DevOps
    { title: 'Developing Cloud-Native Apps w/ Microservices', issuer: 'Red Hat', date: 'Jan 2024', id: null, category: 'cloud', link: null },
    { title: 'Apache Kafka Basics', issuer: 'Great Learning', date: 'Jul 2024', id: '65313', category: 'cloud', link: null },
    { title: 'Exploring Docker', issuer: 'MindLuster', date: 'Nov 2023', id: '13907665933', category: 'cloud', link: null },
    { title: 'File and Folder Management using PowerShell', issuer: 'Udemy', date: 'May 2024', id: 'UC-53bcbab4-7ce6-4de3-b569-b5fac60bd35c', category: 'cloud', link: null },
    { title: 'Google Analytics Individual Qualification', issuer: 'Google', date: 'May 2024', id: 'Nd5MirS5SSe8OEA1bDZf6A', category: 'cloud', link: null },

    // Management
    { title: 'Master in Business Administration (MBA)', issuer: 'Udemy', date: 'Nov 2025', id: 'UC-b51ce91a-b100-4d2f-813b-09e0a1fd91ac', category: 'mgmt', link: null },
    { title: 'Project Management Methodologies: Agile, Scrum, PMP', issuer: 'Udemy', date: 'Sep 2025', id: 'UC-ad222cc4-b568-4ea7-a35d-a086677eb11f', category: 'mgmt', link: null },
    { title: 'CS302: Software Engineering', issuer: 'Saylor Academy', date: 'Jun 2024', id: '0252344638AS', category: 'mgmt', link: null },
    { title: 'PSYCH101: Introduction to Psychology', issuer: 'Saylor Academy', date: 'Aug 2024', id: '8173289785AS', category: 'mgmt', link: null },

    // Others / Experience
    { title: 'Machine Learning Intern', issuer: 'CodSoft', date: 'Oct 2023', id: 'aa7a224', category: 'ml', link: null },
    { title: 'Cohort Member', issuer: 'buildspace', date: 'Jun 2024', id: 'axSA1MHtvWgtyqyUAHJdlaYykU', category: 'ml', link: null },
    { title: 'Delta Hackathon', issuer: 'ACES', date: 'Jun 2023', id: null, category: 'mgmt', link: null },
    { title: 'AI/ML Mentorship Recognition', issuer: 'ACES', date: 'Jan 2024', id: null, category: 'mgmt', link: null },
];

// ========== DOM Elements ==========
const certGrid = document.getElementById('cert-grid');
const filterButtons = document.querySelectorAll('.filter-btn');

// ========== Initialization ==========
document.addEventListener('DOMContentLoaded', () => {
    renderCertificates('all');
    initFilterListeners();
    initMobileMenu(); //Re-initialise mobile menu for this page
});

// ========== Render Logic ==========
function renderCertificates(category) {
    const filtered = category === 'all' 
        ? certificatesData 
        : certificatesData.filter(cert => cert.category === category);

    certGrid.innerHTML = filtered.map(cert => `
        <div class="cert-card reveal visible">
            <div>
                <div class="cert-header">
                    <span class="cert-issuer">${cert.issuer}</span>
                    <span class="cert-date">${cert.date}</span>
                </div>
                <h3 class="cert-title">${cert.title}</h3>
                ${cert.id ? `<div class="cert-id">ID: ${cert.id}</div>` : ''}
            </div>
            <div class="cert-footer">
                ${cert.link ? `
                    <a href="${cert.link}" target="_blank" class="cert-link">
                        View Credential
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                            <polyline points="15 3 21 3 21 9"/>
                            <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                    </a>
                ` : `<span class="cert-link" style="opacity: 0.5; cursor: default;">Verified Credential</span>`}
            </div>
        </div>
    `).join('');
}

// ========== Filter Listeners ==========
function initFilterListeners() {
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderCertificates(btn.getAttribute('data-filter'));
        });
    });
}

// ========== Mobile Menu (Specific to new page) ==========
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');
    const mobileOverlay = document.getElementById('mobile-overlay');

    if(mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('open');
            mobileOverlay.classList.toggle('open');
        });
    }

    if(mobileOverlay) {
        mobileOverlay.addEventListener('click', () => {
            navLinks.classList.remove('open');
            mobileOverlay.classList.remove('open');
        });
    }
}
