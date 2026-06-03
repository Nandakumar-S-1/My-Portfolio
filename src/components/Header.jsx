import React, { useEffect, useState } from 'react';

/* ── Inline SVG logo mark ── */
const Logo = () => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Nandakumar S logo">
        {/* Hexagon background */}
        <path
            d="M18 2L32.5 10V26L18 34L3.5 26V10L18 2Z"
            fill="url(#logoGrad)"
            stroke="rgba(108,99,255,0.4)"
            strokeWidth="0.75"
        />
        {/* N */}
        <text
            x="6.5" y="23"
            fontFamily="Inter, sans-serif"
            fontWeight="700"
            fontSize="12"
            fill="white"
            letterSpacing="-0.5"
        >N</text>
        {/* S */}
        <text
            x="19.5" y="23"
            fontFamily="Inter, sans-serif"
            fontWeight="700"
            fontSize="12"
            fill="rgba(167,139,250,1)"
            letterSpacing="-0.5"
        >S</text>
        <defs>
            <linearGradient id="logoGrad" x1="3.5" y1="2" x2="32.5" y2="34" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#1a1a2e" />
                <stop offset="100%" stopColor="#16162a" />
            </linearGradient>
        </defs>
    </svg>
);

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const navLinks = [
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <header style={{
            position: 'fixed',
            top: 0, left: 0, right: 0,
            zIndex: 1000,
            padding: '0.85rem 2.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: scrolled ? 'rgba(10,10,15,0.85)' : 'transparent',
            backdropFilter: scrolled ? 'blur(20px)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(108,99,255,0.12)' : '1px solid transparent',
            transition: 'all 0.35s ease',
        }}>
            <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Logo />
            </a>

            <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                {navLinks.map(link => (
                    <NavLink key={link.label} {...link} />
                ))}
                <a
                    href="/resume.pdf"
                    download
                    className="btn btn-outline"
                    style={{ padding: '0.45rem 1.1rem', fontSize: '0.82rem' }}
                >
                    Resume ↓
                </a>
            </nav>
        </header>
    );
};

const NavLink = ({ label, href }) => {
    const [hovered, setHovered] = useState(false);
    return (
        <a
            href={href}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                fontSize: '0.875rem',
                color: hovered ? 'var(--text)' : 'var(--text-muted)',
                fontWeight: 400,
                transition: 'color 0.2s ease',
                position: 'relative',
            }}
        >
            {label}
            {/* underline on hover */}
            <span style={{
                position: 'absolute',
                bottom: '-3px', left: 0,
                height: '1px',
                width: hovered ? '100%' : '0%',
                background: 'linear-gradient(90deg, var(--accent), var(--accent-2))',
                transition: 'width 0.25s ease',
                borderRadius: '1px',
            }} />
        </a>
    );
};

export default Header;
