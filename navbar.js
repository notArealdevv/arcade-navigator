class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                nav {
                    background: rgba(17, 24, 39, 0.8);
                    backdrop-filter: blur(10px);
                    padding: 1rem 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    position: sticky;
                    top: 0;
                    z-index: 50;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                }
                .logo {
                    color: white;
                    font-weight: bold;
                    font-size: 1.5rem;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                .logo span {
                    color: #818cf8;
                }
                .nav-links {
                    display: flex;
                    gap: 2rem;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    align-items: center;
                }
                a {
                    color: white;
                    text-decoration: none;
                    transition: all 0.2s;
                    font-weight: 500;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                a:hover {
                    color: #818cf8;
                }
                .mobile-menu-btn {
                    display: none;
                    background: none;
                    border: none;
                    color: white;
                    cursor: pointer;
                }
                @media (max-width: 768px) {
                    .mobile-menu-btn {
                        display: block;
                    }
                    .nav-links {
                        display: none;
                    }
                }
            </style>
            <nav>
                <a href="/" class="logo">
                    ARcade <span>Navigator</span> 🎮
                </a>
                <button class="mobile-menu-btn">
                    <i data-feather="menu"></i>
                </button>
                <ul class="nav-links">
                    <li><a href="/"><i data-feather="home"></i> Home</a></li>
                    <li><a href="/ar.html"><i data-feather="compass"></i> AR Mode</a></li>
                    <li><a href="/map.html"><i data-feather="map"></i> Map View</a></li>
                    <li><a href="/download.html"><i data-feather="download"></i> Download</a></li>
                </ul>
            </nav>
        `;
        
        // Initialize mobile menu functionality
        const mobileBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
        const navLinks = this.shadowRoot.querySelector('.nav-links');
        
        mobileBtn.addEventListener('click', () => {
            const isHidden = navLinks.style.display === 'none' || !navLinks.style.display;
            navLinks.style.display = isHidden ? 'flex' : 'none';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.right = '0';
            navLinks.style.background = 'rgba(17, 24, 39, 0.95)';
            navLinks.style.padding = '1rem';
            navLinks.style.gap = '1rem';
            navLinks.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
        });
    }
}
customElements.define('custom-navbar', CustomNavbar);