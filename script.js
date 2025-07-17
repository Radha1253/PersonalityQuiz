// Efficient weighted scoring system
const FORMULA_WEIGHTS = {
  primary: 0.7,
  secondary: 0.4,
  tertiary: 0.3
};

// Complete formula metadata
const FORMULAS = {
  euler_identity: { name: "Euler's Identity", category: "pure" },
  lagrange_theorem: { name: "Lagrange's Theorem", category: "algebra" },
  modular_forms: { name: "Modular Forms", category: "number_theory" },
  relativity_theory: { name: "Relativity Theory", category: "physics" },
  navier_stokes: { name: "Navier-Stokes Equations", category: "dynamics" },
  knot_theory: { name: "Knot Theory", category: "topology" },
  markov_chain: { name: "Markov Chain", category: "probability" },
  liouville_theorem: { name: "Liouville's Theorem", category: "analysis" },
  banach_tarski: { name: "Banach-Tarski Paradox", category: "geometry" },
  chaos_theory: { name: "Chaos Theory", category: "dynamics" },
  green_theorem: { name: "Green's Theorem", category: "calculus" },
  fourier_transform: { name: "Fourier Transform", category: "analysis" },
  fermats_last_theorem: { name: "Fermat's Last Theorem", category: "number_theory" },
  riemann_zeta: { name: "Riemann Zeta Function", category: "analysis" },
  ramsey_theory: { name: "Ramsey Theory", category: "combinatorics" },
  binomial_theorem: { name: "Binomial Theorem", category: "algebra" },
  category_theory: { name: "Category Theory", category: "abstract" },
  hilbert_space: { name: "Hilbert Space", category: "analysis" },
  galois_theory: { name: "Galois Theory", category: "algebra" },
  matrix_determinant: { name: "Matrix Determinant", category: "linear_algebra" },
  noethers_theorem: { name: "Noether's Theorem", category: "physics" },
  godel_incompleteness: { name: "Godel's Incompleteness Theorems", category: "logic" },
  measure_theory: { name: "Measure Theory", category: "analysis" },
  entropy_theory: { name: "Entropy Theory", category: "information" },
  fourier_analysis: { name: "Fourier Analysis", category: "analysis" },
  set_theory: { name: "Set Theory", category: "foundations" },
  riemann_hypothesis: { name: "Riemann Hypothesis", category: "number_theory" },
  lambda_calculus: { name: "Lambda Calculus", category: "computation" },
  non_euclidean_geometry: { name: "Non-Euclidean Geometry", category: "geometry" },
  ultrafilters: { name: "Ultrafilters", category: "topology" },
  homotopy_type_theory: { name: "Homotopy Type Theory", category: "topology" },
  euler_characteristic: { name: "Euler Characteristic", category: "topology" },
  constructivism_math: { name: "Constructivism in Mathematics", category: "foundations" },
  turing_machine: { name: "Turing Machine", category: "computation" },
  group_theory: { name: "Group Theory", category: "algebra" },
  symmetry_groups: { name: "Symmetry Groups", category: "algebra" },
  axiomatic_systems: { name: "Axiomatic Systems", category: "logic" },
  undecidability: { name: "Undecidability", category: "logic" },
  real_analysis: { name: "Real Analysis", category: "analysis" },
  proof_theory: { name: "Proof Theory", category: "logic" },
  graph_theory: { name: "Graph Theory", category: "discrete" },
  topological_spaces: { name: "Topological Spaces", category: "topology" },
  metric_space: { name: "Metric Space", category: "topology" },
  non_standard_analysis: { name: "Non-Standard Analysis", category: "analysis" },
  banach_space: { name: "Banach Space", category: "analysis" },
  modular_arithmetic: { name: "Modular Arithmetic", category: "number_theory" },
  combinatorics: { name: "Combinatorics", category: "discrete" },
  formal_logic: { name: "Formal Logic", category: "logic" },
  information_theory: { name: "Information Theory", category: "information" },
  game_theory: { name: "Game Theory", category: "applied" },
  model_theory: { name: "Model Theory", category: "logic" },
  recursion_theory: { name: "Recursion Theory", category: "computation" },
  ergodic_theory: { name: "Ergodic Theory", category: "dynamics" },
  nonstandard_analysis: { name: "Non-Standard Analysis", category: "analysis" },
  topology: { name: "Topology", category: "topology" },
  constructive_mathematics: { name: "Constructive Mathematics", category: "foundations" },
  laplace_demon: { name: "Laplace's Demon", category: "philosophy" },
  riemann_hyp: { name: "Riemann Hypothesis", category: "number_theory" }
};

// All questions with fixed encoding
const questions = [
  {
    q: "You're making breakfast. How's that going?",
    a: [
      { t: "The toast is timed, the eggs are perfectly flipped, and the plate is warm", f: ["euler_identity", "lagrange_theorem"] },
      { t: "You somehow made a breakfast burrito and a metaphor", f: ["modular_forms", "relativity_theory"] },
      { t: "You forgot you were making breakfast until the fire alarm went off", f: ["navier_stokes", "knot_theory"] },
      { t: "You're drinking coffee and calling that 'breakfast'", f: ["markov_chain", "liouville_theorem"] },
      { t: "You made pancakes shaped like fractals for no reason", f: ["knot_theory", "banach_tarski"] }
    ]
  },
  {
    q: "You open a mystery package on your doorstep. It contains:",
    a: [
      { t: "A planner with your exact weekly goals already filled out", f: ["lagrange_theorem", "chaos_theory"] },
      { t: "A compass, a candle, and an oddly specific note that says 'trust the angle'", f: ["green_theorem", "fourier_transform"] },
      { t: "Three puzzle pieces, a crumpled receipt, and a key labeled 'not yet'", f: ["fermats_last_theorem", "riemann_zeta"] },
      { t: "A t-shirt that says 'I survived another group project'", f: ["ramsey_theory", "binomial_theorem"] },
      { t: "A glowing rock. No explanation", f: ["banach_tarski", "category_theory"] }
    ]
  },
  {
    q: "You're stranded on a desert island. First move?",
    a: [
      { t: "Inventory the supplies. We're building a plan.", f: ["lagrange_theorem", "chaos_theory"] },
      { t: "Try to map the island - even without a pencil", f: ["green_theorem", "hilbert_space"] },
      { t: "Talk to a coconut like it's a person", f: ["knot_theory", "banach_tarski"] },
      { t: "Build a signal fire. Then a hammock.", f: ["markov_chain", "liouville_theorem"] },
      { t: "Somehow make a raft out of vines and confidence", f: ["galois_theory", "ramsey_theory"] }
    ]
  },
  {
    q: "You're handed a blank notebook. What's the first thing you do?",
    a: [
      { t: "Label it, decorate it, and assign it a purpose.", f: ["chaos_theory", "matrix_determinant"] },
      { t: "Open to a random page in the middle and write something cryptic.", f: ["modular_forms", "category_theory"] },
      { t: "Keep it blank for six months because it feels too nice.", f: ["hilbert_space", "noethers_theorem"] },
      { t: "Fill the first page with a to-do list and half-finished ideas.", f: ["ramsey_theory", "binomial_theorem"] },
      { t: "Doodle an angry goose in the corner. No context.", f: ["banach_tarski", "knot_theory"] }
    ]
  },
  {
    q: "How do you approach cleaning your room?",
    a: [
      { t: "One section at a time. Logical. Efficient. Reward after.", f: ["chaos_theory", "lagrange_theorem"] },
      { t: "Put on music and get emotionally overwhelmed halfway through.", f: ["fourier_transform", "riemann_zeta"] },
      { t: "Clean one thing, then fall into a memory spiral.", f: ["liouville_theorem", "noethers_theorem"] },
      { t: "Throw everything into a 'miscellaneous' basket and move on.", f: ["category_theory", "banach_tarski"] },
      { t: "Clean nothing, rearrange everything.", f: ["knot_theory", "modular_forms"] }
    ]
  },
  {
    q: "You're in a museum. What are you doing?",
    a: [
      { t: "Reading every plaque like it's your final exam", f: ["chaos_theory", "godel_incompleteness"] },
      { t: "Talking to a friend about how wild it is that humans made this", f: ["category_theory", "banach_tarski"] },
      { t: "Standing silently in front of one thing for way too long", f: ["measure_theory", "hilbert_space"] },
      { t: "Making weird analogies between the art and your life", f: ["modular_forms", "knot_theory"] },
      { t: "Taking blurry photos you'll never delete", f: ["entropy_theory", "chaos_theory"] }
    ]
  },
  {
    q: "You're late. What happened?",
    a: [
      { t: "I left exactly on time and forgot how traffic works", f: ["godel_incompleteness", "markov_chain"] },
      { t: "I was early but then spiraled and somehow became late", f: ["fourier_analysis", "liouville_theorem"] },
      { t: "I got distracted by an existential thought in the shower", f: ["set_theory", "riemann_hypothesis"] },
      { t: "My alarm betrayed me and I will never forgive it", f: ["lambda_calculus", "godel_incompleteness"] },
      { t: "I wasn't late. Everyone else was early.", f: ["non_euclidean_geometry", "ultrafilters"] }
    ]
  },
  {
    q: "Pick the quote that speaks to you most:",
    a: [
      { t: "Pure mathematics is, in its way, the poetry of logical ideas.", f: ["category_theory", "noethers_theorem"] },
      { t: "The essence of mathematics is not to make simple things complicated, but to make complicated things simple.", f: ["homotopy_type_theory", "euler_characteristic"] },
      { t: "It is not knowledge, but the act of learning... that grants the greatest enjoyment.", f: ["constructivism_math", "turing_machine"] },
      { t: "Mathematics knows no races or geographic boundaries...", f: ["group_theory", "symmetry_groups"] },
      { t: "Obvious is the most dangerous word in mathematics.", f: ["axiomatic_systems", "undecidability"] }
    ]
  },
  {
    q: "What kind of math student are you?",
    a: [
      { t: "The one who finishes early and double-checks everything", f: ["real_analysis", "proof_theory"] },
      { t: "The one who explains it to everyone else", f: ["category_theory", "graph_theory"] },
      { t: "The one who gets it... three hours after class", f: ["topological_spaces", "metric_space"] },
      { t: "The one who did the homework in their own made-up method", f: ["lambda_calculus", "non_standard_analysis"] },
      { t: "The one who said 'I hate math' and then secretly loved it", f: ["banach_space", "modular_arithmetic"] }
    ]
  },
  {
    q: "What's your idea of a perfect conversation?",
    a: [
      { t: "Efficient, insightful, and gets something done", f: ["category_theory", "graph_theory"] },
      { t: "Bouncing ideas until one of you says, 'Wait - that's brilliant'", f: ["combinatorics", "galois_theory"] },
      { t: "Quiet, meaningful, no pressure to perform", f: ["hilbert_space", "noethers_theorem"] },
      { t: "Full of odd tangents that somehow make a full circle", f: ["modular_forms", "knot_theory"] },
      { t: "One where you both end up questioning reality a little", f: ["banach_tarski", "set_theory"] }
    ]
  },
  {
    q: "When someone gives you a compliment, how do you usually react?",
    a: [
      { t: "Say 'thank you' and note it politely", f: ["formal_logic", "proof_theory"] },
      { t: "Try to return the compliment immediately", f: ["information_theory", "game_theory"] },
      { t: "Awkward silence followed by deflection", f: ["model_theory", "set_theory"] },
      { t: "Pretend to brush it off but remember it forever", f: ["recursion_theory", "godel_incompleteness"] },
      { t: "Loud joke to hide how much it meant", f: ["ergodic_theory", "chaos_theory"] }
    ]
  },
  {
    q: "Pick a fictional trope you relate to:",
    a: [
      { t: "The quietly brilliant strategist", f: ["graph_theory", "game_theory"] },
      { t: "The misunderstood genius", f: ["galois_theory", "modular_forms"] },
      { t: "The chaotic inventor who always pulls it off", f: ["chaos_theory", "nonstandard_analysis"] },
      { t: "The calm presence who says one sentence that changes everything", f: ["noethers_theorem", "hilbert_space"] },
      { t: "The wildcard who derails the plan", f: ["banach_tarski", "knot_theory"] }
    ]
  },
  {
    q: "You're tasked with explaining something complicated to a 5-year-old. What's your approach?",
    a: [
      { t: "Use props. Diagrams. Possibly a puppet.", f: ["topology", "graph_theory"] },
      { t: "Make a silly story that somehow makes perfect sense", f: ["category_theory", "combinatorics"] },
      { t: "Say nothing for a while and then give a perfect metaphor", f: ["model_theory", "lambda_calculus"] },
      { t: "Ask them questions until they explain it to themselves", f: ["turing_machine", "constructive_mathematics"] },
      { t: "Accidentally make it more confusing but funnier", f: ["nonstandard_analysis", "knot_theory"] }
    ]
  },
  {
    q: "What's your 'flaw' that secretly helps you?",
    a: [
      { t: "You obsess over details", f: ["proof_theory", "formal_logic"] },
      { t: "You overthink... until you over-understand", f: ["real_analysis", "recursion_theory"] },
      { t: "You procrastinate, but always pull through", f: ["markov_chain", "chaos_theory"] },
      { t: "You question everything, including yourself", f: ["godel_incompleteness", "set_theory"] },
      { t: "You try weird things that randomly work", f: ["non_euclidean_geometry", "banach_tarski"] }
    ]
  },
  {
    q: "What's your ideal role in a team?",
    a: [
      { t: "The planner - timelines, roles, structure", f: ["lagrange_theorem", "fourier_transform"] },
      { t: "The idea generator - connecting all the dots", f: ["category_theory", "modular_forms"] },
      { t: "The quiet engine - getting things done behind the scenes", f: ["fourier_transform", "hilbert_space"] },
      { t: "The adapter - you go where you're needed", f: ["galois_theory", "liouville_theorem"] },
      { t: "The chaos buffer - you keep it interesting, but steady", f: ["knot_theory", "ergodic_theory"] }
    ]
  },
  {
    q: "When solving a math problem, what's your instinctive move?",
    a: [
      { t: "Define every variable before even touching the numbers", f: ["chaos_theory", "godel_incompleteness"] },
      { t: "Visualize it - graphs, sketches, arrows, everything", f: ["graph_theory", "fourier_transform"] },
      { t: "Look for shortcuts or patterns that others might miss", f: ["galois_theory", "laplace_demon"] },
      { t: "Break it into tiny pieces until it's manageable", f: ["recursion_theory", "recursion_theory"] },
      { t: "Try something completely unorthodox just to see what happens", f: ["banach_tarski", "recursion_theory"] }
    ]
  },
  {
    q: "What do you find yourself overanalyzing?",
    a: [
      { t: "Instructions that were already clear", f: ["chaos_theory", "godel_incompleteness"] },
      { t: "People's word choices in texts", f: ["model_theory", "galois_theory"] },
      { t: "Situations where you said too much or too little", f: ["information_theory", "set_theory"] },
      { t: "Moments that happened years ago", f: ["recursion_theory", "noethers_theorem"] },
      { t: "Literally everything, but only after midnight", f: ["godel_incompleteness", "ergodic_theory"] }
    ]
  },
  {
    q: "What do you believe most people misunderstand about you?",
    a: [
      { t: "That you're rigid - you're just thorough", f: ["laplace_demon", "laplace_demon"] },
      { t: "That you're unfocused - you're exploring", f: ["category_theory", "modular_forms"] },
      { t: "That you're quiet - you're processing", f: ["hilbert_space", "lambda_calculus"] },
      { t: "That you're unserious - you're just playful", f: ["banach_tarski", "knot_theory"] },
      { t: "That you're all over the place - there's a method, trust it", f: ["chaos_theory", "recursion_theory"] }
    ]
  },
  {
    q: "Pick your favorite kind of math 'satisfaction' moment:",
    a: [
      { t: "Getting the exact same result two completely different ways", f: ["recursion_theory", "category_theory"] },
      { t: "Realizing you don't need to calculate - just think", f: ["laplace_demon", "model_theory"] },
      { t: "The moment the mess simplifies", f: ["fourier_transform", "real_analysis"] },
      { t: "Drawing the perfect graph on the first try", f: ["riemann_hyp", "riemann_hyp"] },
      { t: "Solving the final line and yelling 'Yes!' (even if you're alone)", f: ["galois_theory", "riemann_zeta"] }
    ]
  },
  {
    q: "If your life had a background soundtrack, it would be:",
    a: [
      { t: "Orchestral, elegant, building to resolution", f: ["euler_identity", "hilbert_space"] },
      { t: "Moody jazz that speeds up when you're thinking", f: ["fourier_analysis", "ergodic_theory"] },
      { t: "Indie folk with weird time signatures", f: ["category_theory", "modular_forms"] },
      { t: "Lo-fi beats but the bass line is doing something suspicious", f: ["markov_chain", "knot_theory"] },
      { t: "Experimental noise that somehow turns into a banger", f: ["banach_tarski", "chaos_theory"] }
    ]
  }
];

// Efficient weighted scoring system
class EfficientQuizScorer {
  constructor() {
    this.scores = new Map();
    this.answers = [];
    this.cache = new Map();
  }

  addAnswer(qIndex, aIndex) {
    const answer = questions[qIndex].a[aIndex];
    this.answers.push({ qIndex, aIndex, text: answer.t });
    
    // Weight assignment based on position
    answer.f.forEach((formulaId, index) => {
      const weight = index === 0 ? FORMULA_WEIGHTS.primary : FORMULA_WEIGHTS.secondary;
      this.scores.set(formulaId, (this.scores.get(formulaId) || 0) + weight);
    });
  }

  getTopFormulas(n = 3) {
    const cacheKey = `top_${n}`;
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    const sorted = Array.from(this.scores.entries())
      .sort(([,a], [,b]) => b - a)
      .slice(0, n)
      .map(([id, score]) => ({
        id,
        name: FORMULAS[id]?.name || id,
        category: FORMULAS[id]?.category || 'unknown',
        score,
        percentage: this.getPercentage(score)
      }));
    
    this.cache.set(cacheKey, sorted);
    return sorted;
  }

  getPercentage(score) {
    const total = Array.from(this.scores.values()).reduce((a, b) => a + b, 0);
    return total > 0 ? Math.round((score / total) * 100) : 0;
  }

  getCategoryBreakdown() {
    const categoryScores = new Map();
    
    for (const [formulaId, score] of this.scores.entries()) {
      const category = FORMULAS[formulaId]?.category || 'unknown';
      categoryScores.set(category, (categoryScores.get(category) || 0) + score);
    }
    
    return Array.from(categoryScores.entries())
      .sort(([,a], [,b]) => b - a)
      .map(([category, score]) => ({
        category,
        percentage: this.getPercentage(score)
      }));
  }

  reset() {
    this.scores.clear();
    this.answers = [];
    this.cache.clear();
  }
}

// Fixed QuizUI class
class QuizUI {
  constructor() {
    this.questionEl = document.getElementById("question");
    this.answersEl = document.getElementById("answer-buttons");
    this.nextBtn = document.getElementById("next-btn");
    
    this.buttonPool = [];
    this.createButtonPool(5);
    
    this.scorer = new EfficientQuizScorer();
    this.currentIndex = 0;
    this.selectedAnswer = null;
    
    this.init();
  }

  createButtonPool(size) {
    for (let i = 0; i < size; i++) {
      const btn = document.createElement("button");
      btn.className = "btn";
      btn.style.display = "none";
      this.buttonPool.push(btn);
    }
  }

  init() {
    // Fix: Use arrow function to preserve context
    this.nextBtn.addEventListener("click", () => this.handleNext());
    this.start();
  }

  start() {
    this.currentIndex = 0;
    this.selectedAnswer = null;
    this.scorer.reset();
    this.nextBtn.textContent = "Next";
    this.nextBtn.style.display = "none";
    this.showQuestion();
  }

  showQuestion() {
    const question = questions[this.currentIndex];
    const questionNo = this.currentIndex + 1;
    const progress = Math.round((questionNo / questions.length) * 100);
    
    // Update question with progress
    this.questionEl.innerHTML = `
      <div class="progress-bar">
        <div class="progress-fill" style="width: ${progress}%"></div>
      </div>
      <h3>Question ${questionNo} of ${questions.length}</h3>
      <p>${question.q}</p>
    `;
    
    // Clear and update answer buttons
    this.answersEl.innerHTML = '';
    question.a.forEach((answer, index) => {
      const btn = this.buttonPool[index];
      btn.textContent = answer.t;
      btn.style.display = "block";
      btn.classList.remove("selected");
      
      // Fix: Remove old listeners before adding new ones
      const newBtn = btn.cloneNode(true);
      newBtn.onclick = () => this.selectAnswer(index);
      this.buttonPool[index] = newBtn;
      this.answersEl.appendChild(newBtn);
    });
    
    // Hide unused buttons
    for (let i = question.a.length; i < this.buttonPool.length; i++) {
      this.buttonPool[i].style.display = "none";
    }
    
    this.selectedAnswer = null;
    this.nextBtn.style.display = "none";
  }

  selectAnswer(index) {
    this.selectedAnswer = index;
    
    // Update button states
    Array.from(this.answersEl.children).forEach((btn, i) => {
      btn.classList.toggle("selected", i === index);
    });
    
    this.nextBtn.style.display = "block";
  }

  handleNext() {
    if (this.selectedAnswer !== null) {
      this.scorer.addAnswer(this.currentIndex, this.selectedAnswer);
    }
    
    this.currentIndex++;
    
    if (this.currentIndex < questions.length) {
      this.showQuestion();
    } else {
      this.showResults();
    }
  }

  showResults() {
    const topFormulas = this.scorer.getTopFormulas(3);
    const winner = topFormulas[0];
    const categories = this.scorer.getCategoryBreakdown();
    
    const resultsHTML = `
      <div class="results">
        <h2>Your Mathematical Formula Match:</h2>
        <h1>${winner.name}</h1>
        <p class="score">Match strength: ${winner.percentage}%</p>
        
        <div class="top-formulas">
          <h3>Your Top 3 Formulas:</h3>
          ${topFormulas.map((f, i) => `
            <div class="formula-result">
              <span class="rank">${i + 1}.</span>
              <span class="name">${f.name}</span>
              <div class="percentage-bar">
                <div class="percentage-fill" style="width: ${f.percentage}%"></div>
              </div>
              <span class="percentage">${f.percentage}%</span>
            </div>
          `).join('')}
        </div>
        
        <div class="category-breakdown">
          <h3>Your Mathematical Interests:</h3>
          ${categories.slice(0, 3).map(c => `
            <div class="category-item">
              <span class="category-name">${c.category.replace('_', ' ')}</span>
              <span class="category-percentage">${c.percentage}%</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    
    this.questionEl.innerHTML = resultsHTML;
    this.answersEl.innerHTML = '';
    
    this.nextBtn.textContent = "Restart Quiz";
    this.nextBtn.style.display = "block";
    
    // Fix: Reset the handler for restart
    this.nextBtn.onclick = () => {
      this.init();
    };
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new QuizUI());
} else {
  new QuizUI();
}

// Add styles
  
