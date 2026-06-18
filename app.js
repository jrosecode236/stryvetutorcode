/* ─────────────────────────────────────────────
   STRYDE — App JavaScript
───────────────────────────────────────────── */

// ── TUTOR DATA ──────────────────────────────
const TUTORS = [
  {
    id: 1, name: "Maya Chen", subject: "Math", grade: "High School",
    rate: 45, rating: 4.9, reviews: 128, sessions: 312,
    response: "< 1 hr", verified: true,
    tags: ["Algebra", "Calculus", "Statistics"],
    subjects: ["Algebra I & II", "Pre-Calculus", "Calculus AB/BC", "Statistics", "SAT Math"],
    hobbies: ["Rock climbing", "Cooking ramen", "Solving puzzle games"],
    bio: "Stanford Math grad with 5 years of tutoring experience. I struggled with math in middle school until one teacher changed everything — that's why I do this. I specialize in making abstract concepts click through real-world examples. Former TA for Calc I & II at Stanford.",
    photos: [
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=70&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=400&q=70&fit=crop"
    ],
    color: "#5C6F8A"
  },
  {
    id: 2, name: "Jordan Rivers", subject: "Science", grade: "Middle School",
    rate: 38, rating: 4.8, reviews: 94, sessions: 205,
    response: "< 2 hrs", verified: true,
    tags: ["Biology", "Earth Science", "Lab Skills"],
    subjects: ["Biology", "Earth Science", "Environmental Science", "Lab Report Writing", "Scientific Method"],
    hobbies: ["Hiking & birdwatching", "Growing succulents", "Photography"],
    bio: "Biology major turned full-time tutor because I realized my real passion isn't research — it's watching students suddenly care about the world around them. My sessions are hands-on, experiment-driven, and always connected to something students can see in real life.",
    photos: [
      "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&q=70&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1532094349884-543559374545?w=400&q=70&fit=crop"
    ],
    color: "#4A6741"
  },
  {
    id: 3, name: "Priya Patel", subject: "English", grade: "High School",
    rate: 40, rating: 5.0, reviews: 76, sessions: 189,
    response: "< 30 min", verified: true,
    tags: ["Essay Writing", "AP Lit", "Grammar"],
    subjects: ["Essay Writing", "AP Literature", "AP Language", "Grammar", "College Application Essays", "Creative Writing"],
    hobbies: ["Writing short fiction", "Running half marathons", "Visiting bookshops"],
    bio: "Published author and former English teacher with 6 years in the classroom. I've helped over 200 students with college essays, AP Literature, and finding their voice on the page. Writing isn't just a skill — it's how we show the world who we are, and I take that seriously.",
    photos: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=70&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&q=70&fit=crop"
    ],
    color: "#8C6A3F"
  },
  {
    id: 4, name: "Marcus Webb", subject: "SAT/ACT", grade: "High School",
    rate: 65, rating: 4.9, reviews: 211, sessions: 480,
    response: "< 1 hr", verified: true,
    tags: ["SAT Math", "SAT Verbal", "ACT Science"],
    subjects: ["SAT Math", "SAT Reading & Writing", "ACT Math", "ACT Science", "ACT English", "PSAT"],
    hobbies: ["Playing chess", "Coaching youth basketball", "Listening to jazz"],
    bio: "I scored 1590 on the SAT and spent two years studying exactly how the test works — not to brag, but because I became obsessed with cracking its patterns. I've since helped 200+ students improve by an average of 180 points. I teach the real strategies, not the surface tricks.",
    photos: [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=70&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=70&fit=crop"
    ],
    color: "#3D5C7A"
  },
  {
    id: 5, name: "Sofia Ruiz", subject: "Languages", grade: "College",
    rate: 35, rating: 4.7, reviews: 59, sessions: 143,
    response: "< 3 hrs", verified: false,
    tags: ["Spanish", "French", "Pronunciation"],
    subjects: ["Conversational Spanish", "Spanish Grammar", "French B1/B2", "French Pronunciation", "Language for Travel"],
    hobbies: ["Traveling solo", "Cooking Latin food", "Playing guitar"],
    bio: "I grew up bilingual in Miami and fell in love with French during a semester abroad. Language learning is deeply personal — it shapes how you think. I focus on conversational fluency and real-world confidence, not just textbook grammar.",
    photos: [
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=70&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?w=400&q=70&fit=crop"
    ],
    color: "#7A5C3D"
  },
  {
    id: 6, name: "Tyler Kim", subject: "Coding", grade: "High School",
    rate: 55, rating: 4.8, reviews: 87, sessions: 201,
    response: "< 1 hr", verified: true,
    tags: ["Python", "JavaScript", "AP CS"],
    subjects: ["Python", "JavaScript", "AP Computer Science A", "Web Development", "Data Structures", "Intro to Coding"],
    hobbies: ["Building side projects", "Gaming", "Skateboarding"],
    bio: "CS student at UC Berkeley and full-stack dev who has shipped real products. I got into coding because I wanted to build things — and that energy is what I bring to every session. I teach practical coding: how to think like a programmer, debug like one, and build things you're actually proud of.",
    photos: [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=70&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=400&q=70&fit=crop"
    ],
    color: "#2E5C6E"
  },
  {
    id: 7, name: "Aaliyah Thompson", subject: "History", grade: "Middle School",
    rate: 30, rating: 4.6, reviews: 44, sessions: 98,
    response: "< 4 hrs", verified: true,
    tags: ["US History", "World History", "Civics"],
    subjects: ["US History", "World History", "Civics & Government", "Geography", "Document Analysis (DBQ)"],
    hobbies: ["Visiting museums", "Podcast junkie", "Community gardening"],
    bio: "I have a Masters in History Education and 4 years in middle school classrooms. The secret to history isn't memorizing dates — it's understanding why people made the decisions they did. I build that curiosity in every student I work with. My students average a full letter grade improvement within a month.",
    photos: [
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&q=70&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&q=70&fit=crop"
    ],
    color: "#6B4E71"
  },
  {
    id: 8, name: "David Park", subject: "Chemistry", grade: "High School",
    rate: 50, rating: 4.9, reviews: 102, sessions: 258,
    response: "< 1 hr", verified: true,
    tags: ["AP Chem", "Organic", "Lab Reports"],
    subjects: ["AP Chemistry", "Organic Chemistry", "General Chemistry", "Biochemistry", "Lab Report Writing"],
    hobbies: ["Brewing kombucha", "Trail running", "Reading sci-fi"],
    bio: "PhD candidate in Chemical Engineering at UCLA. I struggled with chemistry in high school — badly. That experience taught me exactly where students get lost, and I've spent years building the clearest possible explanations for every concept. Especially the ones professors gloss over.",
    photos: [
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=70&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1628863353691-0071c8c1874c?w=400&q=70&fit=crop"
    ],
    color: "#2E6E5C"
  },
  {
    id: 9, name: "Elena Vasquez", subject: "Math", grade: "Elementary",
    rate: 28, rating: 4.7, reviews: 66, sessions: 155,
    response: "< 2 hrs", verified: true,
    tags: ["Arithmetic", "Fractions", "Word Problems"],
    subjects: ["Arithmetic", "Fractions & Decimals", "Word Problems", "Multiplication & Division", "Early Algebra"],
    hobbies: ["Oil painting", "Reading to kids at the library", "Yoga"],
    bio: "Elementary education specialist with 8 years in the classroom and a deep belief that no child is 'bad at math' — they just haven't been shown the right door yet. I use games, visuals, and patient repetition to build real number sense. Parents often tell me their child actually looks forward to math now.",
    photos: [
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=70&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=70&fit=crop"
    ],
    color: "#6E5C2E"
  },
  {
    id: 10, name: "Nolan Brady", subject: "Science", grade: "High School",
    rate: 42, rating: 4.5, reviews: 38, sessions: 87,
    response: "< 5 hrs", verified: false,
    tags: ["Physics", "AP Physics", "Mechanics"],
    subjects: ["Physics", "AP Physics 1 & 2", "Mechanics", "Electricity & Magnetism", "Kinematics"],
    hobbies: ["Building model rockets", "Cycling", "3D printing"],
    bio: "I came to tutoring after realizing that the most important part of physics isn't the equations — it's the intuition behind them. I draw everything. Every force, every circuit, every wave. Students tell me my visual approach finally made things that seemed random start to feel logical.",
    photos: [
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=70&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=400&q=70&fit=crop"
    ],
    color: "#4A4A5A"
  },
  {
    id: 11, name: "Imani Foster", subject: "English", grade: "College",
    rate: 48, rating: 4.8, reviews: 55, sessions: 129,
    response: "< 2 hrs", verified: true,
    tags: ["Thesis Writing", "Research Papers", "MLA/APA"],
    subjects: ["Thesis Writing", "Research Papers", "MLA & APA Citation", "Argument Structure", "Literary Analysis"],
    hobbies: ["Writing poetry", "Visiting art galleries", "Cooking West African food"],
    bio: "PhD candidate in English Literature, specializing in postcolonial narrative. I help college students say what they actually mean on the page — which is harder than it sounds. Whether it's a thesis or a five-paragraph essay, I work on structure, clarity, and voice in equal measure.",
    photos: [
      "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=400&q=70&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&q=70&fit=crop"
    ],
    color: "#5C3D6E"
  },
  {
    id: 12, name: "Caleb Nguyen", subject: "Coding", grade: "Middle School",
    rate: 32, rating: 4.6, reviews: 29, sessions: 64,
    response: "< 3 hrs", verified: true,
    tags: ["Scratch", "Python Basics", "Game Dev"],
    subjects: ["Scratch", "Python Basics", "Game Development", "HTML & CSS Intro", "Computational Thinking"],
    hobbies: ["Playing Minecraft", "Making music with FL Studio", "Collecting sneakers"],
    bio: "I wrote my first game at age 11 and have never stopped building things. I tutor middle schoolers because that's exactly the age where coding goes from 'something adults do' to 'something I can do.' I meet every student where they are and make it feel like play — because when you're building something you made up, it kind of is.",
    photos: [
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=70&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=400&q=70&fit=crop"
    ],
    color: "#2E5C6E"
  }
];

// Make TUTORS accessible to module scripts
window.TUTORS = TUTORS;

let activeFilters = { subject: '', grade: '', maxRate: 120, minRating: 0, search: '' };

// ── STAR HELPERS ──────────────────────────────
function starsHtml(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

function initials(name) {
  return name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
}

// ── TUTOR GRID ────────────────────────────────
function renderTutors(list) {
  const grid = document.getElementById('tutorGrid');
  const empty = document.getElementById('emptyState');
  const count = document.getElementById('resultCount');
  if (!grid) return;

  count.textContent = `Showing ${list.length} tutor${list.length !== 1 ? 's' : ''}`;

  if (list.length === 0) {
    grid.innerHTML = '';
    empty.classList.remove('hidden');
    return;
  }
  empty.classList.add('hidden');

  grid.innerHTML = list.map(t => `
    <div class="tutor-card" onclick="openTutorModal(${t.id})">

      <!-- PHOTO HEADER -->
      <div class="tutor-card-photo">
        <img src="${t.photos[0]}" alt="${t.name}" loading="lazy"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
        <div class="tutor-card-photo-fallback" style="background:${t.color};display:none">${initials(t.name)}</div>
        ${t.verified ? '<span class="tutor-card-badge">✓ Verified</span>' : ''}
      </div>

      <!-- INFO -->
      <div class="tutor-card-body">
        <div class="tutor-card-name">${t.name}</div>
        <div class="tutor-card-sub">${t.subject} · ${t.grade}</div>

        <div class="tutor-card-rating">
          <span class="rating-stars">${'★'.repeat(Math.round(t.rating))}</span>
          <span class="rating-num">${t.rating.toFixed(1)}</span>
          <span class="rating-count">(${t.reviews})</span>
        </div>

        <p class="tutor-card-bio">${t.bio.slice(0, 110)}…</p>

        <div class="tutor-card-subjects">
          ${t.subjects.slice(0, 3).map(s => `<span class="meta-pill">${s}</span>`).join('')}
        </div>

        <div class="tutor-card-hobbies">
          <span class="hobbies-label">Outside class</span>
          ${t.hobbies.slice(0, 2).map(h => `<span class="hobby-pill">${h}</span>`).join('')}
        </div>

        <div class="tutor-card-footer">
          <div class="tutor-rate">$${t.rate}<span>/hr</span></div>
          <button class="btn-book" onclick="event.stopPropagation(); window.location='booking.html?tutor=${t.id}'">Book</button>
        </div>
      </div>
    </div>
  `).join('');
}

function applyFilters() {
  const subjectEl = document.getElementById('filter-subject');
  const gradeEl = document.getElementById('filter-grade');
  const rateEl = document.getElementById('filter-rate');
  const searchEl = document.getElementById('searchInput');

  if (subjectEl) activeFilters.subject = subjectEl.value;
  if (gradeEl) activeFilters.grade = gradeEl.value;
  if (rateEl) activeFilters.maxRate = parseInt(rateEl.value);
  if (searchEl) activeFilters.search = searchEl.value.toLowerCase().trim();

  const filtered = TUTORS.filter(t => {
    if (activeFilters.subject && t.subject !== activeFilters.subject) return false;
    if (activeFilters.grade && t.grade !== activeFilters.grade) return false;
    if (t.rate > activeFilters.maxRate) return false;
    if (t.rating < activeFilters.minRating) return false;
    if (activeFilters.search) {
      const haystack = `${t.name} ${t.subject} ${t.tags.join(' ')}`.toLowerCase();
      if (!haystack.includes(activeFilters.search)) return false;
    }
    return true;
  });

  renderTutors(filtered);
}

function resetFilters() {
  activeFilters = { subject: '', grade: '', maxRate: 120, minRating: 0, search: '' };
  const subjectEl = document.getElementById('filter-subject');
  const gradeEl = document.getElementById('filter-grade');
  const rateEl = document.getElementById('filter-rate');
  const searchEl = document.getElementById('searchInput');
  const rateLabel = document.getElementById('rate-label');
  if (subjectEl) subjectEl.value = '';
  if (gradeEl) gradeEl.value = '';
  if (rateEl) { rateEl.value = 120; }
  if (rateLabel) rateLabel.textContent = 'Any';
  if (searchEl) searchEl.value = '';
  document.querySelectorAll('.star-btn').forEach(b => b.classList.remove('active'));
  const allBtn = document.querySelector('.star-btn[data-min="0"]');
  if (allBtn) allBtn.classList.add('active');
  renderTutors(TUTORS);
}

function updateRateLabel(el) {
  const label = document.getElementById('rate-label');
  if (label) label.textContent = el.value >= 120 ? 'Any' : `$${el.value}`;
}

function setMinRating(val, btn) {
  activeFilters.minRating = val;
  document.querySelectorAll('.star-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  applyFilters();
}

function toggleFilterPanel() {
  const sidebar = document.getElementById('filterSidebar');
  if (sidebar) sidebar.classList.toggle('open');
}

// ── TUTOR MODAL ────────────────────────────────
function openTutorModal(id) {
  const t = TUTORS.find(x => x.id === id);
  if (!t) return;
  const overlay = document.getElementById('tutorModal');

  overlay.querySelector('.tutor-modal').innerHTML = `
    <button class="modal-close" onclick="closeTutorModal()">✕</button>

    <!-- PHOTO GALLERY -->
    <div class="modal-photos">
      <img src="${t.photos[0]}" alt="${t.name}" class="modal-photo-main"
        onerror="this.style.background='${t.color}';this.src=''" />
      <img src="${t.photos[1]}" alt="${t.name} context" class="modal-photo-side"
        onerror="this.parentElement.style.gridTemplateColumns='1fr'" />
    </div>

    <!-- HEADER -->
    <div class="modal-tutor-header">
      <div class="tutor-avatar-lg" style="background:${t.color}">${initials(t.name)}</div>
      <div>
        <h2>${t.name} ${t.verified ? '<span class="modal-verified">✓ Verified</span>' : ''}</h2>
        <p>${t.subject} · ${t.grade}</p>
        <div class="modal-rating">
          <span class="rating-stars" style="color:#B5893A;font-size:.9rem">${'★'.repeat(Math.round(t.rating))}</span>
          <span style="font-weight:700;font-size:.875rem;color:#131310">${t.rating.toFixed(1)}</span>
          <span style="font-size:.8rem;color:#A89F97">(${t.reviews} reviews)</span>
        </div>
      </div>
    </div>

    <!-- STATS -->
    <div class="modal-stat-row">
      <div class="modal-stat"><span class="mstat-label">Rate</span><span class="mstat-val">$${t.rate}/hr</span></div>
      <div class="modal-stat"><span class="mstat-label">Sessions</span><span class="mstat-val">${t.sessions}</span></div>
      <div class="modal-stat"><span class="mstat-label">Responds</span><span class="mstat-val">${t.response}</span></div>
    </div>

    <!-- BIO -->
    <div class="modal-section-label">About</div>
    <p class="modal-bio-text">${t.bio}</p>

    <!-- SUBJECTS -->
    <div class="modal-section-label">Subjects taught</div>
    <div class="modal-pills">
      ${t.subjects.map(s => `<span class="meta-pill">${s}</span>`).join('')}
    </div>

    <!-- HOBBIES -->
    <div class="modal-section-label">Outside the classroom</div>
    <div class="modal-pills">
      ${t.hobbies.map(h => `<span class="hobby-pill">${h}</span>`).join('')}
    </div>

    <a href="booking.html?tutor=${t.id}" class="btn btn-primary btn-full btn-lg" style="margin-top:20px;display:flex">Book a Session</a>
  `;

  overlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeTutorModal() {
  const overlay = document.getElementById('tutorModal');
  if (overlay) overlay.classList.add('hidden');
  document.body.style.overflow = '';
}

// Close modal on overlay click
document.addEventListener('click', e => {
  if (e.target.id === 'tutorModal') closeTutorModal();
  if (e.target.id === 'successModal') {
    document.getElementById('successModal').classList.add('hidden');
  }
});

// Escape key closes modals
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeTutorModal();
    const s = document.getElementById('successModal');
    if (s) s.classList.add('hidden');
  }
});

// ── SIGNUP ────────────────────────────────────
function selectRole(role, btn) {
  document.querySelectorAll('.role-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');

  const studentForm = document.getElementById('studentForm');
  const tutorForm = document.getElementById('tutorForm');

  if (role === 'student') {
    studentForm.classList.remove('hidden');
    tutorForm.classList.add('hidden');
  } else {
    tutorForm.classList.remove('hidden');
    studentForm.classList.add('hidden');
  }
}

function togglePassword(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;
  if (input.type === 'password') {
    input.type = 'text';
    btn.textContent = '🙈';
  } else {
    input.type = 'password';
    btn.textContent = '👁';
  }
}

function handleSignup(e, role) {
  e.preventDefault();
  const modal = document.getElementById('successModal');
  const title = document.getElementById('modal-title');
  const body = document.getElementById('modal-body');
  const cta = document.getElementById('modal-cta');

  if (role === 'student') {
    title.textContent = "You're in! 🎉";
    body.textContent = "Your student account is ready. Let's find your perfect tutor.";
    cta.textContent = "Browse Tutors";
    cta.href = "browse.html";
  } else {
    title.textContent = "Welcome, Tutor! 🎓";
    body.textContent = "Your tutor profile is under review. We'll notify you within 24 hours.";
    cta.textContent = "Back to Home";
    cta.href = "index.html";
  }

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

// ── INIT ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('tutorGrid')) {
    renderTutors(TUTORS);
  }
});
