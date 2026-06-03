import React, { useState, useEffect } from 'react';

const Hero = () => {
    const [imgLoaded, setImgLoaded] = useState(false);
    const [imgError, setImgError] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setVisible(true), 100);
        return () => clearTimeout(t);
    }, []);

    const fade = (delay = 0) => ({
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms,
                     transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
    });

    return (
        <section id="home" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            padding: '0 2rem',
            maxWidth: '1100px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 1,
        }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 400px',
                gap: '5rem',
                alignItems: 'center',
                width: '100%',
            }}>

                {/* ── Text ── */}
                <div>
                    {/* Status badge */}
                    <div style={{
                        ...fade(0),
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.3rem 0.9rem',
                        borderRadius: '999px',
                        border: '1px solid rgba(108,99,255,0.25)',
                        background: 'rgba(108,99,255,0.08)',
                        marginBottom: '1.75rem',
                    }}>
                        <span style={{
                            width: '7px', height: '7px', borderRadius: '50%',
                            background: '#22c55e',
                            boxShadow: '0 0 6px rgba(34,197,94,0.8)',
                            animation: 'pulse-dot 2s infinite',
                        }} />
                        <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.08em' }}>
                            Open to opportunities
                        </span>
                    </div>

                    <h1 style={{
                        ...fade(120),
                        fontSize: 'clamp(3rem, 5.5vw, 4.5rem)',
                        fontWeight: 700,
                        letterSpacing: '-0.04em',
                        lineHeight: 1.06,
                        marginBottom: '0.4rem',
                    }}>
                        Nandakumar
                    </h1>
                    <h1 style={{
                        ...fade(200),
                        fontSize: 'clamp(3rem, 5.5vw, 4.5rem)',
                        fontWeight: 700,
                        letterSpacing: '-0.04em',
                        lineHeight: 1.06,
                        marginBottom: '1.75rem',
                    }}>
                        <span className="gradient-text">S</span>
                    </h1>

                    <p style={{
                        ...fade(300),
                        fontSize: '1rem',
                        color: 'var(--text-muted)',
                        maxWidth: '460px',
                        lineHeight: 1.85,
                        marginBottom: '2.75rem',
                    }}>
                        Full Stack Developer building production-ready apps with TypeScript,
                        Node.js and React. 450+ LeetCode problems. Passionate about clean
                        architecture.
                    </p>

                    <div style={{ ...fade(400), display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                        <a href="#projects" className="btn btn-primary">View Projects →</a>
                        <a href="#contact" className="btn btn-outline">Get in touch</a>
                    </div>

                    {/* Social row */}
                    <div style={{
                        ...fade(520),
                        display: 'flex',
                        gap: '1rem',
                        marginTop: '4rem',
                        paddingTop: '2rem',
                        borderTop: '1px solid var(--border)',
                        flexWrap: 'wrap',
                    }}>
                        {[
                            { label: 'GitHub',    href: 'https://github.com/Nandakumar-S-1' },
                            { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/nandakumar-s-a0b3ba326/' },
                            { label: 'LeetCode',  href: 'https://leetcode.com/u/NandaKumar__S/' },
                            { label: 'Instagram', href: 'https://www.instagram.com/_nandakumar__/' },
                            { label: 'Email',     href: 'mailto:nandakumars5352@gmail.com' },
                        ].map(s => <SocialLink key={s.label} {...s} />)}
                    </div>
                </div>

                {/* ── Photo ── */}
                <div style={{ ...fade(180), position: 'relative', flexShrink: 0 }}>
                    {/* Glow ring behind photo */}
                    <div style={{
                        position: 'absolute',
                        inset: '-2px',
                        borderRadius: '22px',
                        background: 'linear-gradient(135deg, rgba(108,99,255,0.5) 0%, rgba(167,139,250,0.2) 50%, rgba(245,158,11,0.15) 100%)',
                        zIndex: -1,
                        filter: 'blur(12px)',
                        opacity: 0.7,
                    }} />

                    {/* Decorative corner dots */}
                    {[
                        { top: '-10px', left: '-10px' },
                        { top: '-10px', right: '-10px' },
                        { bottom: '-10px', left: '-10px' },
                        { bottom: '-10px', right: '-10px' },
                    ].map((pos, i) => (
                        <div key={i} style={{
                            position: 'absolute', ...pos,
                            width: '6px', height: '6px',
                            borderRadius: '50%',
                            background: 'var(--accent)',
                            opacity: 0.6,
                        }} />
                    ))}

                    <div style={{
                        width: '100%',
                        aspectRatio: '4 / 5',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        border: '1px solid rgba(108,99,255,0.25)',
                        background: 'var(--bg-card)',
                        position: 'relative',
                    }}>
                        {!imgError && (
                            <img
                                src="/images/Screenshot 2026-04-27 115621.png"
                                alt="Nandakumar S"
                                onLoad={() => setImgLoaded(true)}
                                onError={() => setImgError(true)}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    objectPosition: 'top center',
                                    display: imgLoaded ? 'block' : 'none',
                                }}
                            />
                        )}
                        {(!imgLoaded || imgError) && (
                            <div style={{
                                width: '100%', height: '100%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: 'var(--text-dim)',
                            }}>
                                <span style={{ fontSize: '0.85rem' }}>NS</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div style={{
                ...fade(700),
                position: 'absolute',
                bottom: '2.5rem',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.4rem',
                color: 'var(--text-dim)',
            }}>
                <span style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>scroll</span>
                <div style={{
                    width: '1px', height: '40px',
                    background: 'linear-gradient(to bottom, var(--text-dim), transparent)',
                    animation: 'scroll-line 1.8s ease-in-out infinite',
                }} />
            </div>

            {/* Keyframe animations */}
            <style>{`
                @keyframes pulse-dot {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.4; }
                }
                @keyframes scroll-line {
                    0% { opacity: 0; transform: scaleY(0); transform-origin: top; }
                    50% { opacity: 1; transform: scaleY(1); transform-origin: top; }
                    100% { opacity: 0; transform: scaleY(1); transform-origin: bottom; }
                }
            `}</style>
        </section>
    );
};

const SocialLink = ({ label, href }) => {
    const [hovered, setHovered] = useState(false);
    return (
        <a
            href={href}
            target={label !== 'Email' ? '_blank' : undefined}
            rel="noopener noreferrer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                fontSize: '0.78rem',
                color: hovered ? 'var(--accent-2)' : 'var(--text-dim)',
                letterSpacing: '0.06em',
                transition: 'color 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
            }}
        >
            {label}
            <span style={{
                opacity: hovered ? 1 : 0,
                transform: hovered ? 'translate(1px,-1px)' : 'translate(0,0)',
                transition: 'all 0.2s ease',
                fontSize: '0.7rem',
            }}>↗</span>
        </a>
    );
};

export default Hero;
