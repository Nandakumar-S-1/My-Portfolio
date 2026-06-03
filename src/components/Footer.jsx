import React from 'react';
import { useReveal } from '../hooks/useReveal';

/* ── SVG social icons ── */
const GitHubIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
);
const LinkedInIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
);
const GmailIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.910 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
    </svg>
);
const LeetCodeIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.483 0a1.374 1.374 0 00-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 00-1.209 2.104 5.35 5.35 0 00-.125.513 5.527 5.527 0 00.062 2.362 5.83 5.83 0 00.349 1.017 5.938 5.938 0 001.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 00-1.951-.003l-2.396 2.392a3.021 3.021 0 01-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 01.066-.523 2.545 2.545 0 01.619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 00-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0013.483 0zm-2.866 12.815a1.38 1.38 0 00-1.38 1.382 1.38 1.38 0 001.38 1.382H20.79a1.38 1.38 0 001.38-1.382 1.38 1.38 0 00-1.38-1.382z"/>
    </svg>
);
const InstagramIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
);

const socials = [
    { label: 'GitHub',    href: 'https://github.com/Nandakumar-S-1',                        icon: <GitHubIcon />,    value: 'github.com/Nandakumar-S-1' },
    { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/nandakumar-s-a0b3ba326/',       icon: <LinkedInIcon />,  value: 'linkedin.com/in/nandakumar-s' },
    { label: 'LeetCode',  href: 'https://leetcode.com/u/NandaKumar__S/',                     icon: <LeetCodeIcon />,  value: 'leetcode.com/NandaKumar__S' },
    { label: 'Instagram', href: 'https://www.instagram.com/_nandakumar__/',                  icon: <InstagramIcon />, value: 'instagram.com/_nandakumar__' },
    { label: 'Email',     href: 'mailto:nandakumars5352@gmail.com',                          icon: <GmailIcon />,     value: 'nandakumars5352@gmail.com' },
];

const Footer = () => {
    const ref = useReveal();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = encodeURIComponent(form.name.value || '');
        const email = encodeURIComponent(form.email.value || '');
        const message = encodeURIComponent(form.message.value || '');
        const mailto = `mailto:nandakumars5352@gmail.com?subject=${encodeURIComponent('Portfolio contact from ' + (form.name.value || ''))}&body=Name:%20${name}%0AEmail:%20${email}%0A%0A${message}`;
        window.location.href = mailto;
    };

    const inputStyle = {
        width: '100%',
        padding: '0.75rem 1rem',
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: '8px',
        color: 'var(--text)',
        fontSize: '0.875rem',
        fontFamily: 'inherit',
        outline: 'none',
        transition: 'border-color 0.2s ease',
    };

    return (
        <footer id="contact" ref={ref} style={{
            borderTop: '1px solid var(--border)',
            padding: '7rem 1.5rem 3rem',
            maxWidth: '1100px',
            margin: '0 auto',
        }}>
            <div className="reveal">
                <p className="section-label">Contact</p>
                <h2 className="section-title">
                    <span className="animated-underline">Let's work together</span>
                </h2>
                <div className="divider" />
                <p style={{ color: 'var(--text-muted)', marginBottom: '3.5rem', fontSize: '0.875rem' }}>
                    Open to new opportunities and collaborations. My inbox is always open.
                </p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '4rem',
                alignItems: 'start',
            }}>
                {/* Form */}
                <form className="reveal reveal-delay-1" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    <input
                        name="name"
                        placeholder="Your name"
                        style={inputStyle}
                        onFocus={e => e.target.style.borderColor = 'rgba(108,99,255,0.5)'}
                        onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                    <input
                        name="email"
                        type="email"
                        placeholder="Email address"
                        style={inputStyle}
                        onFocus={e => e.target.style.borderColor = 'rgba(108,99,255,0.5)'}
                        onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                    <textarea
                        name="message"
                        placeholder="Your message"
                        rows={5}
                        style={{ ...inputStyle, resize: 'vertical' }}
                        onFocus={e => e.target.style.borderColor = 'rgba(108,99,255,0.5)'}
                        onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                    <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start', marginTop: '0.25rem' }}>
                        Send message →
                    </button>
                </form>

                {/* Social links */}
                <div className="reveal reveal-delay-2" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {socials.map(link => (
                        <SocialCard key={link.label} {...link} />
                    ))}
                </div>
            </div>

            {/* Bottom bar */}
            <div style={{
                marginTop: '5rem',
                paddingTop: '2rem',
                borderTop: '1px solid var(--border)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>
                    © {new Date().getFullYear()} Nandakumar S
                </span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>
                    Built with React & Vite
                </span>
            </div>
        </footer>
    );
};

const SocialCard = ({ label, value, href, icon }) => {
    const [hovered, setHovered] = React.useState(false);
    return (
        <a
            href={href}
            target={label !== 'Email' ? '_blank' : undefined}
            rel="noopener noreferrer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                padding: '0.85rem 1.1rem',
                borderRadius: '10px',
                border: `1px solid ${hovered ? 'rgba(108,99,255,0.35)' : 'var(--border)'}`,
                background: hovered ? 'rgba(108,99,255,0.07)' : 'var(--bg-card)',
                transition: 'all 0.2s ease',
                color: 'inherit',
            }}
        >
            <span style={{
                color: hovered ? 'var(--accent-2)' : 'var(--text-dim)',
                transition: 'color 0.2s ease',
                display: 'flex',
                alignItems: 'center',
            }}>
                {icon}
            </span>
            <div>
                <p style={{ fontSize: '0.72rem', color: 'var(--text-dim)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.1rem' }}>
                    {label}
                </p>
                <p style={{
                    fontSize: '0.82rem',
                    color: hovered ? 'var(--text)' : 'var(--text-muted)',
                    transition: 'color 0.2s ease',
                }}>
                    {value}
                </p>
            </div>
            <span style={{
                marginLeft: 'auto',
                fontSize: '0.75rem',
                color: hovered ? 'var(--accent-2)' : 'var(--text-dim)',
                opacity: hovered ? 1 : 0,
                transform: hovered ? 'translate(1px,-1px)' : 'translate(0,0)',
                transition: 'all 0.2s ease',
            }}>↗</span>
        </a>
    );
};

export default Footer;
