// ===== MENU DATA =====
// Add your menu items here with image paths
const menuItems = [
    { 
        id: 1, 
        name: 'Classic Hummus', 
        price: 'RS 500', 
        desc: 'Creamy chickpeas with tahini and olive oil', 
        tag: 'Vegetarian', 
        category: 'starters', 
        image: 'images/hummus.jpg' 
    },
    { 
        id: 2, 
        name: 'Crispy Falafel', 
        price: 'RS 750', 
        desc: 'Golden patties with tahini sauce', 
        tag: 'Vegetarian', 
        category: 'starters', 
        image: 'images/falafel.jpg' 
    },
    { 
        id: 3, 
        name: 'Shawarma Platter', 
        price: 'RS 1000', 
        desc: 'Marinated chicken with garlic toum', 
        tag: 'Chef\'s Choice', 
        category: 'mains', 
        image: 'images/shawarma.jpg' 
    },
    { 
        id: 4, 
        name: 'Lamb Kabsa', 
        price: 'RS 1200', 
        desc: 'Fragrant rice with tender lamb', 
        tag: 'Signature', 
        category: 'mains', 
        image: 'images/kabsa.jpg' 
    },
    { 
        id: 5, 
        name: 'Mixed Grill', 
        price: 'RS 1500', 
        desc: 'Assortment of grilled meats', 
        tag: 'For Two', 
        category: 'mains', 
        image: 'images/grill.jpg' 
    },
    { 
        id: 6, 
        name: 'Pistachio Baklava', 
        price: 'RS 900', 
        desc: 'Layered pastry with honey syrup', 
        tag: 'Sweet', 
        category: 'desserts', 
        image: 'images/baklava.jpg' 
    },
    { 
        id: 7, 
        name: 'Kunafa Nabulsi', 
        price: 'RS 1000', 
        desc: 'Sweet cheese with rose water syrup', 
        tag: 'Warm', 
        category: 'desserts', 
        image: 'images/kunafa.jpg' 
    },
];

// ===== LOADER =====
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loader').classList.add('hidden');
    }, 1000);
});

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== MOBILE MENU TOGGLE =====
function toggleMenu() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
}

// ===== SCROLL TO SECTION =====
function scrollToSection(id) {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// ===== FILTER MENU =====
function filterMenu(category, btn) {
    // Update active tab
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Filter and render items
    const filteredItems = category === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);
    
    renderMenu(filteredItems);
}

// ===== RENDER MENU =====
function renderMenu(items) {
    const menuGrid = document.getElementById('menuGrid');
    menuGrid.innerHTML = items.map(item => `
        <div class="menu-card">
            <div class="menu-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="menu-info">
                <div class="menu-header">
                    <h3>${item.name}</h3>
                    <span class="menu-price">${item.price}</span>
                </div>
                <p class="menu-desc">${item.desc}</p>
                <span class="menu-tag">${item.tag}</span>
            </div>
        </div>
    `).join('');
}

// ===== INITIAL RENDER =====
renderMenu(menuItems);
