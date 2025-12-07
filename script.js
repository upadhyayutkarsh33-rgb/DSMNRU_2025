const subjectData = {
    // Subject: FEEE (Fundamental of Electrical and Electronics Engineering)
    'feee': {
        title: 'FEEE - Electrical Circuits & Devices',
        topics: [
            {
                name: 'DC Circuits & Theorems',
                notes: 'resources/feee/feee_dc_notes.pdf',
                pyq: 'resources/feee/feee_pyq_dc.pdf'
            },
            {
                name: 'Semiconductor Devices (Diodes, BJTs)',
                notes: 'resources/feee/feee_semiconductor_notes.pdf',
                pyq: 'resources/feee/feee_pyq_devices.pdf'
            }
        ]
    },
    // Subject: PPS (Programming for Problem Solving)
    'pps': {
        title: 'PPS - C Programming Essentials',
        topics: [
            {
                name: 'Basic Syntax, Loops, and Arrays',
                notes: 'resources/pps/pps_basics_notes.pdf',
                pyq: 'resources/pps/pps_pyq_basics.pdf'
            },
            {
                name: 'Pointers, Strings, and Structures',
                notes: 'resources/pps/pps_advanced_notes.pdf',
                pyq: 'resources/pps/pps_pyq_pointers.pdf'
            }
        ]
    },
    // Subject: WEB TECHNOLOGY
    'webtech': {
        title: 'Web Tech - Frontend Basics',
        topics: [
            {
                name: 'HTML5 Structure and Semantics',
                notes: 'resources/webtech/html_notes.pdf',
                pyq: 'resources/webtech/webtech_pyq_html.pdf'
            },
            {
                name: 'CSS Layouts (Flexbox & Grid)',
                notes: 'resources/webtech/css_notes.pdf',
                pyq: 'resources/webtech/webtech_pyq_css.pdf'
            }
        ]
    },
    // Subject: ENGINEERING MATHS
    'maths': {
        title: 'Engg Maths - Matrices & Differential Equations',
        topics: [
            {
                name: 'Eigenvalues and Eigenvectors',
                notes: 'resources/maths/maths_matrix_notes.pdf',
                pyq: 'resources/maths/maths_pyq_matrix.pdf'
            },
            {
                name: 'First-Order Differential Equations',
                notes: 'resources/maths/maths_diff_eq_notes.pdf',
                pyq: 'resources/maths/maths_pyq_diff_eq.pdf'
            }
        ]
    },
    // Subject: ENGINEERING PHYSICS
    'physics': {
        title: 'Engg Physics - Quantum & Optics',
        topics: [
            {
                name: 'Wave-Particle Duality & Uncertainty Principle',
                notes: 'resources/physics/physics_quantum_notes.pdf',
                pyq: 'resources/physics/physics_pyq_quantum.pdf'
            },
            {
                name: 'Interference and Diffraction',
                notes: 'resources/physics/physics_optics_notes.pdf',
                pyq: 'resources/physics/physics_pyq_optics.pdf'
            }
        ]
    },
    // Subject: EVS
    'evs': {
        title: 'EVS - Ecology and Pollution',
        topics: [
            {
                name: 'Natural Resources and Ecosystems',
                notes: 'resources/evs/evs_ecosystem_notes.pdf',
                pyq: 'resources/evs/evs_pyq_ecosystem.pdf'
            },
            {
                name: 'Air & Water Pollution Control',
                notes: 'resources/evs/evs_pollution_notes.pdf',
                pyq: 'resources/evs/evs_pyq_pollution.pdf'
            }
        ]
    }
};

const subjectGrid = document.getElementById('subject-cards');
const contentArea = document.getElementById('content-area');
const contentTitle = document.getElementById('content-title');
const topicContainer = document.getElementById('topic-container');
const backButton = document.getElementById('back-button');

// Function to generate the topic boxes dynamically
function renderTopics(subjectKey) {
    const data = subjectData[subjectKey];
    if (!data) return;

    contentTitle.textContent = data.title;
    topicContainer.innerHTML = ''; // Clear previous content

    data.topics.forEach(topic => {
        const topicBox = document.createElement('div');
        topicBox.className = 'topic-box';
        
        // Topic Title
        const h4 = document.createElement('h4');
        h4.textContent = topic.name;
        topicBox.appendChild(h4);

        // Notes Link
        const notesLink = document.createElement('a');
        notesLink.href = topic.notes;
        notesLink.target = '_blank';
        notesLink.className = 'resource-link';
        notesLink.innerHTML = '<i class="fas fa-file-alt"></i> Notes';
        topicBox.appendChild(notesLink);

        // PYQ Link
        const pyqLink = document.createElement('a');
        pyqLink.href = topic.pyq;
        pyqLink.target = '_blank';
        pyqLink.className = 'resource-link';
        pyqLink.innerHTML = '<i class="fas fa-star"></i> PYQ Paper';
        topicBox.appendChild(pyqLink);

        topicContainer.appendChild(topicBox);
    });

    // Hide grid and show content area
    subjectGrid.style.display = 'none';
    contentArea.style.display = 'block';
    backButton.style.display = 'inline-block';
    
    // Scroll to the content area
    contentArea.scrollIntoView({ behavior: 'smooth' });
}

// Function to handle card clicks
subjectGrid.addEventListener('click', (event) => {
    const card = event.target.closest('.card');
    if (card) {
        const subject = card.getAttribute('data-subject');
        renderTopics(subject);
    }
});

// Function to go back to the subject grid
backButton.addEventListener('click', () => {
    contentArea.style.display = 'none';
    subjectGrid.style.display = 'grid'; // Use grid for display
    backButton.style.display = 'none';
    contentTitle.textContent = 'Select a Subject to View Resources';
    
    // Scroll back to the top of the subjects
    subjectGrid.scrollIntoView({ behavior: 'smooth' });
});

// Initial state setup (if needed)
contentArea.style.display = 'none'; // Keep the content hidden initially