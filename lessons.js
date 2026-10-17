(() => {
  'use strict';

  const lessons = [
    {
      id: 'free-energy',
      module: 'BS1030',
      title: 'When will a reaction proceed?',
      focus: 'Use free energy to reason about reaction direction',
      why: 'Thermodynamics tells us whether a reaction direction is favourable under particular conditions. It does not tell us how quickly the reaction happens.',
      idea: 'Use ΔG = ΔH − TΔS, with consistent units. A negative ΔG makes the forward direction thermodynamically favourable. Standard-state ΔG° and cellular ΔG are not interchangeable.',
      scenario: 'A reaction has ΔH = +18 kJ mol⁻¹ and ΔS = +80 J mol⁻¹ K⁻¹. At 310 K, decide whether the forward direction is favourable. Explain the role of temperature.',
      steps: [
        'Convert entropy to 0.080 kJ mol⁻¹ K⁻¹ so the units match ΔH.',
        'Calculate TΔS: 310 × 0.080 = 24.8 kJ mol⁻¹.',
        'Calculate ΔG: 18 − 24.8 ≈ −6.8 kJ mol⁻¹, so the forward direction is favourable at this temperature.',
        'The negative sign predicts direction, not speed; an enzyme changes reaction rate, not the equilibrium position.'
      ],
      tip: 'Show the unit conversion, state what the sign predicts, then distinguish favourability from reaction rate.',
      sources: ['BS1030(Protein structure 1).pdf']
    },
    {
      id: 'amino-acid-chemistry',
      module: 'BS1030',
      title: 'Predicting amino-acid behaviour',
      focus: 'Connect side-chain chemistry to pH and protein environment',
      why: 'A protein’s sequence places chemical groups into different environments. Their interactions help stabilise a fold and can change as pH changes.',
      idea: 'At physiological pH, amino-acid backbone groups are ionised. Side chains vary in charge and polarity. A group is more likely to gain or lose a proton as pH moves across its pKa, so charge predictions should use the group’s pKa.',
      scenario: 'A soluble protein contains lysine, leucine and histidine residues. Predict which residues are most likely to interact with water and which is especially sensitive to a pH change near its pKa.',
      steps: [
        'Classify lysine as basic and usually positively charged near physiological pH; leucine is nonpolar.',
        'Polar or charged side chains can interact favourably with water; nonpolar groups tend to avoid it.',
        'Histidine’s imidazole side chain can change protonation near its pKa, altering its charge and interactions.',
        'The behaviour of a whole protein reflects many residues and the local environment, not one residue in isolation.'
      ],
      tip: 'Name the ionisable group and compare pH with pKa before stating its charge.',
      sources: ['BS1030(Protein structure 2).pdf', 'BS1030(Protein Structure 4).pdf']
    },
    {
      id: 'protein-folding',
      module: 'BS1030',
      title: 'From sequence to protein function',
      focus: 'Trace how a sequence change may affect a larger structure',
      why: 'Protein function depends on a three-dimensional arrangement built from an amino-acid sequence. A chain of reasoning helps explain why a mutation can matter without assuming every change destroys function.',
      idea: 'Primary structure is the sequence; secondary structure describes local regular patterns; tertiary structure is one chain’s overall fold; quaternary structure assembles multiple chains. Hydrophobic effects, hydrogen bonds, ionic interactions and disulphide bonds all contribute to stability.',
      scenario: 'A cysteine in a folded protein is replaced by serine. Trace possible effects from sequence to structure and function, and state what evidence would be needed before claiming that function is lost.',
      steps: [
        'The substitution changes primary structure.',
        'If that cysteine formed a disulphide bridge, the replacement removes that possible covalent link.',
        'Changed interactions may affect local structure, the overall fold or assembly with other subunits.',
        'A functional effect is plausible but not certain; activity or structural measurements are needed to test it.'
      ],
      tip: 'Use the chain sequence → interaction → structure → function, and mark which links are predictions.',
      sources: ['BS1030(Protein structure 2).pdf', 'BS1030(Protein structure 3).pdf', 'BS1030(Protein Structure 5).pdf']
    },
    {
      id: 'haemoglobin',
      module: 'BS1030',
      title: 'Why haemoglobin responds to oxygen',
      focus: 'Relate subunit structure to oxygen delivery',
      why: 'Binding behaviour is easier to understand when the protein’s structure is connected to its physiological task: collecting oxygen in one environment and releasing it in another.',
      idea: 'Myoglobin is a single-chain oxygen-binding protein suited to storage in muscle. Haemoglobin has multiple subunits and cooperative, allosteric oxygen binding; ligands and conditions can shift its affinity. A mutation can alter protein behaviour without changing the overall role of every haemoglobin molecule.',
      scenario: 'Explain why a multi-subunit oxygen carrier can respond differently to changing oxygen concentration than a single-subunit storage protein. Identify one structural feature that enables this difference.',
      steps: [
        'A single myoglobin chain has one haem-binding site and does not show inter-subunit cooperativity.',
        'Haemoglobin’s subunits communicate, so binding at one site can alter affinity at others.',
        'Allosteric effectors and local conditions can shift the balance between haemoglobin states.',
        'Cooperativity supports loading and unloading across different oxygen conditions.'
      ],
      tip: 'Compare structure and physiological role together; do not describe cooperativity as a property of a single binding site.',
      sources: ['BS1030(Protein Structure 5).pdf']
    },
    {
      id: 'enzyme-kinetics',
      module: 'BS1030',
      title: 'Reading an enzyme response',
      focus: 'Infer what kinetic changes suggest about inhibition',
      why: 'Kinetic parameters describe how an enzyme responds to substrate. Comparing them helps distinguish mechanisms and predict how an inhibitor may affect a pathway.',
      idea: 'For a simple Michaelis–Menten enzyme, Km is the substrate concentration at half Vmax. A purely competitive inhibitor raises apparent Km without changing Vmax; a purely non-competitive inhibitor lowers Vmax without changing Km.',
      scenario: 'With inhibitor present, a rate curve reaches the same maximum as before but needs more substrate to reach half that rate. Explain the likely inhibition pattern and predict the effect of adding more substrate.',
      steps: [
        'The unchanged maximum points to unchanged Vmax.',
        'Needing more substrate to reach half-maximal rate means apparent Km has increased.',
        'That pattern is consistent with competitive inhibition in the simplified model.',
        'More substrate can outcompete a reversible active-site competitor; do not generalise this pattern to every inhibitor.'
      ],
      tip: 'State both parameter changes explicitly and name the model assumptions before identifying the pattern.',
      sources: ['BS1030(Protein Structure 6).pdf', 'BS1030(Protein Structure 7).pdf']
    },
    {
      id: 'dna-structure',
      module: 'BS1030',
      title: 'Reading DNA structure as information',
      focus: 'Connect base pairing, recognition and DNA topology',
      why: 'DNA stores a sequence and presents chemical features that proteins can recognise. Its topology also affects how it is organised and handled in cells.',
      idea: 'Complementary base pairing supports the double helix. Chemical features at base-pair edges are accessible in the major groove, while supercoiling changes the compactness and strain of DNA circles. Topoisomerases alter DNA topology.',
      scenario: 'A DNA-binding protein recognises one short sequence in a duplex, while a cell must compact a circular chromosome. Explain how the sequence can be read without separating the strands and how topology can change compaction.',
      steps: [
        'Paired bases expose distinguishable chemical patterns in the major groove.',
        'A protein can contact those patterns and recognise a sequence while DNA remains duplexed.',
        'Supercoiling changes how much space a DNA circle occupies.',
        'Topoisomerases change DNA linking and help manage topological strain.'
      ],
      tip: 'Keep sequence recognition (local base-pair chemistry) separate from topology (larger-scale coiling).',
      sources: ['BS1030_JS Lecture 1 - Tagged.pdf', 'BS1030_JS Lecture 2 - Tagged.pdf']
    },
    {
      id: 'dna-replication',
      module: 'BS1030',
      title: 'Reasoning through a replication fork',
      focus: 'Explain why one new strand is discontinuous',
      why: 'A replication fork coordinates several enzymes. Their directionality explains both continuous synthesis and the need to process short fragments.',
      idea: 'DNA polymerases extend from a 3′-OH and synthesise 5′→3′. Because template strands are antiparallel, one new strand is continuous and the other is made in Okazaki fragments that are processed and joined.',
      scenario: 'At a moving fork, one template is oriented so its new strand can grow toward the fork. Explain what happens on the other template and how the fragments become continuous DNA.',
      steps: [
        'DNA polymerase cannot start a chain from nothing; primase supplies a primer with a 3′-OH.',
        'Both new strands are extended 5′→3′, although parental templates run in opposite directions.',
        'The lagging strand is therefore made in short Okazaki fragments.',
        'Primer processing, gap filling and ligase sealing connect the fragments; topoisomerase helps manage strain ahead of the fork.'
      ],
      tip: 'Draw template directions first, then mark every new strand 5′→3′ before assigning enzyme roles.',
      sources: ['BS1030_JS Lecture 1 - Tagged.pdf', 'BS1030_JS Lecture 2 - Tagged.pdf', 'BS1030_JS Lecture 3 - Tagged.pdf']
    },
    {
      id: 'gene-expression',
      module: 'BS1030',
      title: 'From a promoter to a protein',
      focus: 'Follow information through transcription and translation',
      why: 'Gene expression is a sequence of linked steps. Separating transcriptional regulation from translation helps explain why cells can alter output without changing a coding sequence.',
      idea: 'RNA polymerase uses a DNA template to make RNA; promoter features and associated factors influence transcription initiation. Ribosomes read mRNA codons in a frame, while tRNAs deliver amino acids. RNA can also fold and perform functions of its own.',
      scenario: 'Two cells have the same coding region but different promoter strengths. Predict what could differ, what should remain unchanged, and how a one-nucleotide insertion early in a coding region could affect the protein.',
      steps: [
        'A weaker promoter may lead to fewer transcripts without changing the sequence copied from the gene.',
        'Protein abundance may also depend on RNA stability and translation, so promoter strength is not the only influence.',
        'The ribosome reads codons as consecutive triplets in a reading frame.',
        'An insertion not divisible by three shifts the downstream frame; a substitution may instead affect just one codon.'
      ],
      tip: 'Separate how much RNA is made from the sequence encoded; write codons in triplets before predicting a translation effect.',
      sources: ['BS1030(Transcription).pdf', 'BS1030(Translation).pdf']
    },
    {
      id: 'origins-classification',
      module: 'BS1040',
      title: 'Origins, evidence and classification',
      focus: 'Match a biological claim to the evidence it needs',
      why: 'A hypothesis about how life began and a classification of organisms answer different questions. Clear scientific reasoning separates observations from the historical explanations built from them.',
      idea: 'Origins-of-life models, including RNA-world proposals, are evaluated against chemical and geological evidence. Classification organises organisms and represents relationships; microbial classification uses molecular and genomic evidence alongside observed traits.',
      scenario: 'A microbe shares a cell feature with one group but its genome clusters with another. Explain how to report the evidence without treating a classification label as proof of how life first arose.',
      steps: [
        'State whether the question concerns origin, identity or evolutionary relationship.',
        'Describe the observation and the method that produced it.',
        'Compare independent lines of evidence, including genomic relationships and cell traits.',
        'Keep conclusions proportionate: classification supports a relationship claim, not a complete account of life’s origin.'
      ],
      tip: 'Use “evidence supports” for an inferred history, and keep hypotheses distinct from direct observations.',
      sources: ['BS1040 - Topic 1 - L1.pdf', 'BS1040 - Topic 1 - L2.pdf']
    },
    {
      id: 'microbial-methods',
      module: 'BS1040',
      title: 'Designing a fair microbial comparison',
      focus: 'Use controls to evaluate an explanation',
      why: 'Microbiology advanced when researchers could separate observation from explanation. A well-matched control helps test whether an apparent effect has the proposed cause.',
      idea: 'A comparison is informative when relevant conditions are controlled. In the swan-neck flask demonstration, air could enter while dust and microorganisms were trapped, helping distinguish spontaneous generation from contamination by existing microbes.',
      scenario: 'A culture grows after nutrient broth is exposed to a room. Plan a comparison that tests whether growth depends on microbial contamination while keeping the broth and treatment conditions comparable.',
      steps: [
        'Define the competing explanations and the observable outcome: microbial growth.',
        'Use matched broth that is sterilised and protected from microbial entry as a negative control.',
        'Keep broth, time and temperature the same; vary only access by microorganisms.',
        'Interpret growth only after checking that the control behaved as expected.'
      ],
      tip: 'Name the changed variable, the measured outcome and the role of the control.',
      sources: ['BS1040 - Topic 1 - L3.pdf']
    },
    {
      id: 'bacterial-cell-envelope',
      module: 'BS1040',
      title: 'Reasoning from a bacterial envelope',
      focus: 'Connect envelope layers to cell structure',
      why: 'Cell-envelope differences affect how bacteria interact with the environment and how experiments distinguish groups.',
      idea: 'Gram-positive bacteria have a thick peptidoglycan layer and no outer membrane. Gram-negative bacteria have thinner peptidoglycan plus an outer membrane. Capsules, flagella and pili have distinct functions.',
      scenario: 'An unknown bacterium retains a strong Gram stain and has no outer membrane in an electron micrograph. Explain which envelope model fits best, then name a surface structure that could help it move or attach.',
      steps: [
        'Use the outer-membrane observation to distinguish the two envelope arrangements.',
        'Thick peptidoglycan with no outer membrane fits the Gram-positive model.',
        'Flagella support motility; pili or fimbriae can support attachment and other interactions.',
        'Treat staining as one piece of evidence and report what imaging adds.'
      ],
      tip: 'Describe the layers before inferring a group; do not identify a cell from one surface feature alone.',
      sources: ['BS1040 - Topic 1 - L4.pdf']
    },
    {
      id: 'cell-compartments',
      module: 'BS1040',
      title: 'Predicting where a protein will go',
      focus: 'Follow a targeting signal through cell compartments',
      why: 'Compartments let cells perform different processes in distinct places. Protein-targeting signals connect a protein’s sequence to its eventual location and function.',
      idea: 'Organelles create specialised environments. Information in a protein’s sequence can act as a targeting signal; secreted proteins generally enter the endoplasmic-reticulum/Golgi pathway, while other signals direct proteins to specific organelles.',
      scenario: 'A newly made protein has a signal directing entry to the secretory pathway. Trace its route to the cell surface and predict what might happen if the signal were removed.',
      steps: [
        'The targeting signal is recognised as the protein is made or soon after.',
        'Entry to the endoplasmic reticulum starts the secretory route.',
        'Vesicle trafficking carries cargo through the Golgi and onward to its destination.',
        'Altering the signal can mislocalise the protein, so its location-dependent role may be disrupted.'
      ],
      tip: 'Write the compartments in order and distinguish the targeting signal from transport vesicles.',
      sources: ['BS1040 - Topic 2 - L1.pdf', 'BS1040 - Topic 2 - L2.pdf']
    },
    {
      id: 'cell-biology-tools',
      module: 'BS1040',
      title: 'Choose a method that answers the question',
      focus: 'Match cell-biology tools to the evidence needed',
      why: 'A method is useful only if its evidence addresses the question. Complementary methods can distinguish where a protein is from how much is present.',
      idea: 'Antibodies can detect specific proteins. Immunofluorescence can show where a target is in cells; a Western blot can compare protein signal by size and abundance. Microscopy and model systems answer related but different questions.',
      scenario: 'A protein signal rises in a tissue sample, and you suspect it has moved to the cell edge. Choose one method to test abundance and one to test location; explain what each result can and cannot establish.',
      steps: [
        'Use a Western blot to compare protein bands across samples, with appropriate loading controls.',
        'Use immunofluorescence or a validated fluorescent tag to inspect its distribution in cells.',
        'Check specificity and include suitable positive and negative controls.',
        'Do not infer movement from a change in total abundance alone.'
      ],
      tip: 'For each method, say what it measures, what control supports the interpretation and one limitation.',
      sources: ['BS1040 - Topic 2 - L3.pdf', 'BS1040 - Topic 2 - L4.pdf']
    },
    {
      id: 'cytoskeleton',
      module: 'BS1040',
      title: 'How cells reshape and move material',
      focus: 'Connect cytoskeletal filaments to cell behaviour',
      why: 'The cytoskeleton is dynamic: it supports cell shape while allowing cells and their internal cargo to move.',
      idea: 'Actin filaments contribute to the cell cortex and protrusive structures such as lamellipodia. Microtubules provide intracellular tracks, and motor proteins use ATP to move cargo along them.',
      scenario: 'A cell’s leading edge extends while a vesicle travels toward the cell interior. Propose which cytoskeletal systems could contribute to these two events and explain how you would test the proposal.',
      steps: [
        'Actin assembly near the cell surface can help extend the leading edge.',
        'Microtubules can provide tracks for vesicle transport through the cell.',
        'Motor proteins use ATP to move along cytoskeletal filaments.',
        'Image labelled filaments and vesicle movement, then perturb one component and compare with an appropriate control.'
      ],
      tip: 'Connect each structure to a specific role, then describe the observation that could test it.',
      sources: ['BS1040 - Topic 2 - L4.pdf']
    },
    {
      id: 'cell-cycle-switches',
      module: 'BS1040',
      title: 'A reversible switch in the cell cycle',
      focus: 'Connect protein regulation to cell-cycle events',
      why: 'Cell-cycle progression depends on coordinated changes in protein activity. Thinking in terms of switches helps explain how cells control when a process starts and stops.',
      idea: 'Cyclin levels help coordinate cell-cycle stages. Reversible modifications such as phosphorylation can change protein activity without changing its amount; mitosis and meiosis differ in their outcomes.',
      scenario: 'A cell accumulates a phosphorylated form of a regulator but cannot remove the phosphate. Predict why the signal may persist and explain why this alone does not tell you whether the regulator is active.',
      steps: [
        'Phosphorylation can alter a protein’s activity, interactions or location.',
        'A phosphatase normally provides a reversible route to remove that modification.',
        'If removal is blocked, the modified state may persist and disrupt downstream timing.',
        'The direction of the effect depends on what phosphorylation does to that specific protein.'
      ],
      tip: 'Do not assume phosphorylation always activates a protein; identify the target and effect.',
      sources: ['BS1040 - Topic 2 - L5.pdf']
    },
    {
      id: 'membrane-transport',
      module: 'BS1040',
      title: 'Predicting transport and cell-volume changes',
      focus: 'Choose a transport mechanism, then follow its consequences',
      why: 'Membranes maintain gradients and cell volume. Separate the driving force from membrane permeability to predict how a perturbation changes flux.',
      idea: 'Simple and facilitated diffusion are passive and follow an electrochemical gradient; facilitated transport can saturate. Primary active transport uses energy directly, while secondary transport couples movement to another gradient. Water moves passively; tonicity predicts sustained cell-volume change.',
      scenario: 'A cell swells in a solution. A transporter then exports solute, lowering intracellular osmolality. Explain how water movement and volume may respond, and distinguish the gradient’s role from a water channel’s role.',
      steps: [
        'Identify the effective osmotic difference across the membrane; water moves passively.',
        'Solute export can lower intracellular osmolality and change the water-driving force.',
        'Aquaporins alter water permeability and thus the rate of movement, not its direction set by the gradient.',
        'The response also depends on which solutes can cross and on the cell’s regulatory transporters.'
      ],
      tip: 'State the gradient, pathway and predicted direction separately; water transport is not active.',
      sources: ['BS1040 - Topic 3 - L2 - Tagged.pdf', 'BS1040 - Topic 3 - L3 - Tagged.pdf', 'BS1040 - Topic 3 - L4 - Tagged.pdf']
    },
    {
      id: 'referencing',
      module: 'Study skills',
      title: 'Make a scientific claim traceable',
      focus: 'Connect an in-text citation to a complete reference',
      why: 'A reader should be able to locate and check the evidence behind a scientific claim. Clear referencing separates your reasoning from the source you used.',
      idea: 'An author-date citation links a claim to a full reference-list entry. A reference list records works cited; a bibliography may also include works consulted. Include enough publication detail to locate a source.',
      scenario: 'You use a journal article to support a claim. Describe what belongs beside the claim and what information belongs in the reference list so another student can find the article.',
      steps: [
        'Place an author-and-year citation at the point where the sourced claim appears.',
        'Give the full entry with author, year, article title, journal, volume/issue and page range.',
        'Include a DOI when available; otherwise provide the relevant web address and access date when required by the guide.',
        'Check that every in-text citation has a matching reference-list entry.'
      ],
      tip: 'Cite the source for the claim, not only the lecture file where you first encountered it.',
      sources: ['University of Leicester Author-Date Harvard.pdf']
    }
  ];

  const storageKey = 'bio-study-teaching-v1';
  let savedState = loadState();
  let activeLesson = null;
  let activeAttempt = null;
  let lessonConfidence = '';
  let practiceConfidence = '';
  let lastPracticeOutcome = null;
  let storageMessage = '';

  function loadState() {
    try {
      const raw = localStorage.getItem(storageKey);
      if (!raw) return { attempts: [] };
      const parsed = JSON.parse(raw);
      if (!parsed || !Array.isArray(parsed.attempts)) throw new Error('Invalid teaching data.');
      return parsed;
    } catch {
      storageMessage = 'Saved teaching reflections could not be read. Lessons still work, but new notes may not persist.';
      return { attempts: [] };
    }
  }

  function saveState() {
    try {
      localStorage.setItem(storageKey, JSON.stringify(savedState));
      storageMessage = '';
      return true;
    } catch {
      storageMessage = 'This browser could not save the reflection. Your current lesson remains available until you leave it.';
      return false;
    }
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, character => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[character]);
  }

  function addStyles() {
    const style = document.createElement('style');
    style.textContent = `
      .learn-intro{background:var(--navy);color:white;border:1px solid #26365f;border-radius:20px;padding:clamp(22px,4vw,34px);margin-bottom:18px;box-shadow:0 8px 20px #11182724}
      .learn-intro h1{font-size:clamp(30px,5vw,44px);line-height:1.08;margin:6px 0 12px}
      .learn-intro p{max-width:740px;color:#dbeafe;margin:0}
      .learn-eyebrow{font-size:12px;letter-spacing:.1em;font-weight:900;color:#67e8f9;text-transform:uppercase}
      .lesson-groups{display:grid;gap:24px;margin:22px 0}
      .lesson-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
      .lesson-tile{background:var(--paper);border:1px solid var(--line);border-radius:14px;padding:17px;display:flex;flex-direction:column;align-items:flex-start;box-shadow:0 5px 14px #392f1f0a}
      .lesson-tile h3{margin:8px 0 5px}
      .lesson-tile p{margin:4px 0 14px;color:var(--muted)}
      .lesson-tile button{margin-top:auto}
      .lesson-tag{font-size:12px;font-weight:800;color:#155e75;background:#cffafe;border-radius:99px;padding:5px 8px}
      .lesson-paper{max-width:850px;margin:18px auto;background:var(--paper);border:1px solid var(--line);border-radius:18px;padding:clamp(18px,4vw,32px);box-shadow:0 8px 20px #392f1f0b}
      .lesson-paper h1{font-size:clamp(27px,4vw,38px);line-height:1.12;margin:8px 0}
      .lesson-focus{font-weight:700;color:#155e75;margin:0 0 20px}
      .lesson-concept{background:#eef8f5;border:1px solid #b9ddd2;padding:14px 16px;border-radius:8px;margin:14px 0}
      .lesson-scenario{background:#f8f5ed;border:1px solid var(--line);border-radius:12px;padding:16px;margin:18px 0}
      .lesson-paper label{display:block;font-weight:800;margin:14px 0 6px}
      .lesson-paper textarea{min-height:110px}
      .confidence-options{display:flex;gap:8px;flex-wrap:wrap;margin:8px 0}
      .confidence-options button[aria-pressed=true]{background:var(--amber);border-color:var(--amber);color:var(--ink);font-weight:900}
      .lesson-feedback{border-top:2px solid var(--cyan);margin-top:22px;padding-top:18px}
      .lesson-feedback h2{margin-top:4px}
      .lesson-walkthrough{padding-left:22px}
      .lesson-walkthrough li{padding:4px 0}
      .lesson-sources{border-top:1px solid var(--line);margin-top:18px;padding-top:12px;color:var(--muted);font-size:13px;overflow-wrap:anywhere}
      .lesson-status{min-height:22px;color:var(--muted);font-size:13px}
      .practice-confidence{border:1px solid var(--line);border-radius:10px;background:#f8f5ed;padding:12px;margin:0 0 14px}
      .practice-confidence p{margin:0 0 8px}
      .practice-confidence .confidence-options{margin-bottom:0}
      @media(max-width:700px){.lesson-grid{grid-template-columns:1fr}.lesson-paper{padding:18px}}
    `;
    document.head.appendChild(style);
  }

  function installNavigation() {
    const nav = document.querySelector('header nav');
    const footer = document.querySelector('footer');
    const learnMain = document.createElement('main');
    learnMain.id = 'learn';
    learnMain.hidden = true;
    learnMain.tabIndex = -1;
    document.getElementById('lectures').after(learnMain);

    for (const container of [nav, footer]) {
      const button = document.createElement('button');
      button.type = 'button';
      button.dataset.p = 'learn';
      button.innerHTML = container === nav ? 'Learn' : '↗<small>Learn</small>';
      button.addEventListener('click', () => window.show('learn'));
      if (container === nav) container.insertBefore(button, container.querySelector('[data-p="errors"]'));
      else container.insertBefore(button, container.querySelector('[aria-label]'));
    }
    footer.style.gridTemplateColumns = 'repeat(6,1fr)';

    const showOriginal = window.show;
    window.show = function (id) {
      showOriginal(id);
      if (id === 'learn') renderLessonIndex();
    };

    const homeOriginal = window.home;
    window.home = function () {
      homeOriginal();
      const main = document.getElementById('home');
      const callout = document.createElement('section');
      callout.className = 'panel';
      callout.innerHTML = '<div class="head"><div><h2>Learn by applying</h2><p class="muted">Work through guided biological decisions, explain your thinking, and compare it with a model walkthrough.</p></div><button class="primary" type="button" data-open-lessons>Browse lessons</button></div>';
      callout.querySelector('[data-open-lessons]').addEventListener('click', () => window.show('learn'));
      main.appendChild(callout);
    };
  }

  function renderLessonIndex() {
    const root = document.getElementById('learn');
    const groups = [
      { heading: 'BS1030 · Biochemistry and molecular biology', module: 'BS1030' },
      { heading: 'BS1040 · Microbiology and cell biology', module: 'BS1040' },
      { heading: 'Study skills', module: 'Study skills' }
    ];
    root.innerHTML = `
      <section class="learn-intro">
        <span class="learn-eyebrow">Guided lessons</span>
        <h1>Learn it by using it.</h1>
        <p>Work through a biological decision, explain your reasoning, then compare it with a model walkthrough. These short lessons complement—not replace—the separate practice and question tools.</p>
      </section>
      <p class="lesson-status" role="status">${escapeHtml(storageMessage)}</p>
      <div class="lesson-groups">
        ${groups.map(group => `
          <section aria-labelledby="lessons-${escapeHtml(group.module.replace(/\s/g, '-'))}">
            <h2 id="lessons-${escapeHtml(group.module.replace(/\s/g, '-'))}">${escapeHtml(group.heading)}</h2>
            <div class="lesson-grid">
              ${lessons.filter(lesson => lesson.module === group.module).map(lesson => `
                <article class="lesson-tile">
                  <span class="lesson-tag">${escapeHtml(lesson.module)}</span>
                  <h3>${escapeHtml(lesson.title)}</h3>
                  <p>${escapeHtml(lesson.focus)}</p>
                  <button class="secondary" type="button" data-lesson="${escapeHtml(lesson.id)}">Open walkthrough</button>
                </article>
              `).join('')}
            </div>
          </section>
        `).join('')}
      </div>
    `;
    root.querySelectorAll('[data-lesson]').forEach(button => {
      button.addEventListener('click', () => openLesson(button.dataset.lesson));
    });
    root.focus();
  }

  function openLesson(id) {
    activeLesson = lessons.find(lesson => lesson.id === id);
    if (!activeLesson) throw new Error(`Unknown guided lesson: ${id}`);
    activeAttempt = null;
    lessonConfidence = '';
    renderLesson();
  }

  function renderLesson() {
    const lesson = activeLesson;
    const root = document.getElementById('learn');
    root.innerHTML = `
      <p class="lesson-status">${escapeHtml(lesson.module)} · Guided lesson</p>
      <section class="lesson-paper">
        <button class="secondary" type="button" data-action="lesson-index">All lessons</button>
        <span class="lesson-tag">${escapeHtml(lesson.module)}</span>
        <h1 tabindex="-1" id="lesson-title">${escapeHtml(lesson.title)}</h1>
        <p class="lesson-focus">${escapeHtml(lesson.focus)}</p>
        <section><h2>Why it matters</h2><p>${escapeHtml(lesson.why)}</p></section>
        <section class="lesson-concept"><h2>Key idea</h2><p>${escapeHtml(lesson.idea)}</p></section>
        <section class="lesson-scenario">
          <h2>Try the decision</h2>
          <p>${escapeHtml(lesson.scenario)}</p>
          <p class="muted">Explain the idea in your own words for 15 seconds without notes. Then rate how sure you feel before checking the model answer.</p>
          <label for="lesson-answer">Your explanation</label>
          <textarea id="lesson-answer" placeholder="Describe the mechanism and what it predicts."></textarea>
          <label>How sure are you about your explanation?</label>
          <div class="confidence-options" role="group" aria-label="Rate your confidence before checking">
            ${['Low', 'Medium', 'High'].map(level => `<button class="secondary" type="button" data-lesson-confidence="${level}" aria-pressed="false">${level}</button>`).join('')}
          </div>
          <p class="lesson-status" id="lesson-confidence-status" aria-live="polite">Choose a confidence level before comparing with the model.</p>
          <button class="primary" type="button" data-action="reveal-lesson" disabled>Compare with model</button>
        </section>
        <div id="lesson-feedback" aria-live="polite"></div>
        <p class="lesson-sources"><strong>Lecture source${lesson.sources.length === 1 ? '' : 's'}:</strong> ${lesson.sources.map(escapeHtml).join('; ')}</p>
        <p class="lesson-status" id="lesson-storage-status" role="status">${escapeHtml(storageMessage)}</p>
      </section>
    `;
    root.querySelector('#lesson-title').focus();
  }

  function reflectionFor(level) {
    if (level === 'Low') return 'After reading the model, name the step you can now explain more confidently.';
    if (level === 'Medium') return 'Compare each link in the explanation. Which step makes you more or less certain?';
    return 'Check calibration, not just certainty: can you justify each step and say what evidence would change your conclusion?';
  }

  function revealLesson() {
    const response = document.getElementById('lesson-answer').value.trim();
    activeAttempt = {
      lessonId: activeLesson.id,
      confidence: lessonConfidence,
      response,
      reflection: '',
      createdAt: new Date().toISOString()
    };
    savedState.attempts.push(activeAttempt);
    savedState.attempts = savedState.attempts.slice(-500);
    saveState();
    document.getElementById('lesson-feedback').innerHTML = `
      <section class="lesson-feedback">
        <h2 id="model-walkthrough" tabindex="-1">Model walkthrough</h2>
        <p><strong>Model idea:</strong> ${escapeHtml(activeLesson.idea)}</p>
        <ol class="lesson-walkthrough">${activeLesson.steps.map(step => `<li>${escapeHtml(step)}</li>`).join('')}</ol>
        <p><strong>Exam tip:</strong> ${escapeHtml(activeLesson.tip)}</p>
        <p><strong>Confidence reflection:</strong> ${escapeHtml(reflectionFor(lessonConfidence))}</p>
        <label for="lesson-reflection">What will you keep or change in your explanation?</label>
        <textarea id="lesson-reflection" placeholder="Name one reasoning step to keep or revisit."></textarea>
        <button class="secondary" type="button" data-action="save-lesson-reflection">Save reflection</button>
        <span class="lesson-status" id="lesson-reflection-status" aria-live="polite"></span>
        <div class="actions"><button class="primary" type="button" data-action="lesson-index">Choose another lesson</button></div>
      </section>
    `;
    document.getElementById('model-walkthrough').focus();
    const status = document.getElementById('lesson-storage-status');
    if (status) status.textContent = storageMessage;
  }

  function saveLessonReflection() {
    if (!activeAttempt) return;
    activeAttempt.reflection = document.getElementById('lesson-reflection').value.trim();
    const status = document.getElementById('lesson-reflection-status');
    status.textContent = saveState() ? 'Reflection saved in this browser.' : storageMessage;
  }

  function installLessonActions() {
    document.getElementById('learn').addEventListener('click', event => {
      const button = event.target.closest('button');
      if (!button) return;
      if (button.dataset.lessonConfidence) {
        lessonConfidence = button.dataset.lessonConfidence;
        document.querySelectorAll('[data-lesson-confidence]').forEach(option => {
          option.setAttribute('aria-pressed', String(option.dataset.lessonConfidence === lessonConfidence));
        });
        document.getElementById('lesson-confidence-status').textContent = `${lessonConfidence} confidence selected. Compare your explanation with the walkthrough.`;
        document.querySelector('[data-action="reveal-lesson"]').disabled = false;
      }
      if (button.dataset.action === 'lesson-index') renderLessonIndex();
      if (button.dataset.action === 'reveal-lesson') revealLesson();
      if (button.dataset.action === 'save-lesson-reflection') saveLessonReflection();
    });
  }

  function addPracticeConfidence() {
    const card = document.querySelector('#study .card');
    const heading = card && card.querySelector('h1');
    if (!card || !heading) throw new Error('Could not add the confidence reflection to the current practice card.');
    const panel = document.createElement('section');
    panel.className = 'practice-confidence';
    panel.setAttribute('aria-label', 'Confidence reflection');
    panel.innerHTML = `
      <p><strong>Teach-back:</strong> explain the idea in your own words for 15 seconds without notes. Rate your confidence before answering.</p>
      <div class="confidence-options" role="group" aria-label="Rate confidence before answering">
        ${['Low', 'Medium', 'High'].map(level => `<button class="secondary" type="button" data-practice-confidence="${level}" aria-pressed="false">${level}</button>`).join('')}
      </div>
      <p class="lesson-status" data-practice-status aria-live="polite"></p>
    `;
    card.insertBefore(panel, heading);
    panel.querySelectorAll('[data-practice-confidence]').forEach(button => {
      button.addEventListener('click', () => {
        practiceConfidence = button.dataset.practiceConfidence;
        panel.querySelectorAll('[data-practice-confidence]').forEach(option => {
          option.setAttribute('aria-pressed', String(option === button));
        });
        panel.querySelector('[data-practice-status]').textContent = `${practiceConfidence} confidence selected. Answer or compare with the model.`;
      });
    });
  }

  function practiceReflection() {
    if (!practiceConfidence) return 'You skipped the confidence rating; use the model to identify one reasoning step to revisit.';
    if (!lastPracticeOutcome) return `After checking the model, use your ${practiceConfidence.toLowerCase()} confidence rating to identify the step that needs attention.`;
    if (lastPracticeOutcome.correct && practiceConfidence === 'Low') return 'Your answer was right despite low confidence. Identify the clue that supported it so confidence can catch up to your reasoning.';
    if (lastPracticeOutcome.correct && practiceConfidence === 'High') return 'Your confidence matched this answer. Check that you can explain the mechanism, not only recognise the result.';
    if (lastPracticeOutcome.correct) return 'Your answer was right. Notice which part of the reasoning still felt uncertain.';
    if (practiceConfidence === 'High') return 'High confidence did not match the model. Identify the assumption that led you there and compare it with the evidence.';
    return 'Use the mismatch to rebuild the explanation from its mechanism rather than memorising a phrase.';
  }

  function installPracticeReflection() {
    const launchOriginal = window.launch;
    const questionOriginal = window.question;
    const recordOriginal = window.record;
    const learningNoteOriginal = window.learningNote;

    window.launch = function (...args) {
      practiceConfidence = '';
      lastPracticeOutcome = null;
      return launchOriginal.apply(this, args);
    };

    window.question = function (...args) {
      practiceConfidence = '';
      lastPracticeOutcome = null;
      const result = questionOriginal.apply(this, args);
      addPracticeConfidence();
      return result;
    };

    window.record = function (question, correct) {
      const result = recordOriginal.apply(this, arguments);
      lastPracticeOutcome = { correct: Boolean(correct) };
      savedState.attempts.push({
        kind: 'practice',
        questionId: question.id,
        confidence: practiceConfidence || null,
        correct: Boolean(correct),
        createdAt: new Date().toISOString()
      });
      savedState.attempts = savedState.attempts.slice(-500);
      saveState();
      return result;
    };

    window.learningNote = function (question) {
      return [
        'Why it matters: connect the concept to the mechanism that produces an outcome.',
        `Key idea: ${learningNoteOriginal.call(this, question)}`,
        'Exam tip: explain the cue, mechanism and predicted result in that order.',
        `Confidence reflection: ${practiceReflection()}`
      ].join(' ');
    };
  }

  addStyles();
  installNavigation();
  installLessonActions();
  installPracticeReflection();
})();
