class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                footer {
                    background: rgba(17, 24, 39, 0.8);
                    backdrop-filter: blur(10px);
                    color: white;
                    padding: 3rem 2rem;
                    text-align: center;
                    margin-top: 4rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                }
                .footer-content {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 2rem;
                    text-align: left;
                }
                .footer-section h3 {
                    font-size: 1.2rem;
                    margin-bottom: 1rem;
                    color: #818cf8;
                }
                .footer-section ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                .footer-section li {
                    margin-bottom: 0.5rem;
                }
                .footer-section a {
                    color: #e5e7eb;
                    text-decoration: none;
                    transition: color 0.2s;
                }
                .footer-section a:hover {
                    color: #818cf8;
                }
                .social-links {
                    display: flex;
                    gap: 1rem;
                    margin-top: 1rem;
                }
                .social-links a {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.1);
                    transition: all 0.2s;
                }
                .social-links a:hover {
                    background: #818cf8;
                    transform: translateY(-2px);
                }
                .copyright {
                    margin-top: 2rem;
                    padding-top: 2rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    color: #9ca3af;
                    font-size: 0.9rem;
                }
                @media (max-width: 768px) {
                    .footer-content {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
            <footer>
                <div class="footer-content">
                    <div class="footer-section">
                        <h3>Navigation</h3>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/ar.html">AR Mode</a></li>
                            <li><a href="/map.html">Map View</a></li>
                            <li><a href="/download.html">Download</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h3>Features</h3>
                        <ul>
                            <li><a href="/features.html#walking">Walking Mode</a></li>
                            <li><a href="/features.html#biking">Biking Mode</a></li>
                            <li><a href="/features.html#driving">Driving Mode</a></li>
                            <li><a href="/features.html#voice">Voice Guidance</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h3>Company</h3>
                        <ul>
                            <li><a href="/about.html">About Us</a></li>
                            <li><a href="/blog.html">Blog</a></li>
                            <li><a href="/careers.html">Careers</a></li>
                            <li><a href="/contact.html">Contact</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h3>Connect</h3>
                        <div class="social-links">
                            <a href="#" aria-label="Twitter"><i data-feather="twitter"></i></a>
                            <a href="#" aria-label="Instagram"><i data-feather="instagram"></i></a>
                            <a href="#" aria-label="Facebook"><i data-feather="facebook"></i></a>
                            <a href="#" aria-label="GitHub"><i data-feather="github"></i></a>
                        </div>
                        <p style="margin-top: 1rem; font-size: 0.9rem;">
                            Subscribe to our newsletter for updates
                        </p>
                    </div>
                </div>
                <div class="copyright">
                    &copy; 2024 ARcade Navigator. All rights reserved.
                </div>
            </footer>
        `;
    }
}
customElements.define('custom-footer', CustomFooter);