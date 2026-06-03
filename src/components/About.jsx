import React from 'react';
import { useReveal } from '../hooks/useReveal';
import TechIcon from './TechIcon';

const About = () => {
    const ref = useReveal();

    const techStack = [
        'JavaScript', 'TypeScript', 'React', 'Redux',
        'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Prisma', 'Redis', 'JWT',
    ];

    const stats = [
        { value: '450+', label: 'LeetCode problems' },
        { value: '4', label: 'Projects shipped' },
        { value: '2+', label: 'Years coding' },
    ];

    return (
        <section id="about" ref={ref} style={{ borderTop: '1px solid var(--border)' }}>
            <div className="reveal">
                <p className="section-label">About</p>
                <h2 className="section-title">
                    <span className="animated-underline">Who I am</span>
                </h2>
                <div className="divider" />
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '4rem',
                alignItems: 'start',
            }}>
                {/* Bio */}
                <div className="reveal reveal-delay-1">
                    <p style={{ color: 'var(--text-muted)', lineHeight: 1.9, marginBottom: '1.25rem', fontSize: '0.95rem' }}>
                        I'm a Full Stack Web Developer focused on building production-ready applications
                        using JavaScript and TypeScript. I specialize in Node.js backends, React frontends,
                        and both relational and document databases.
                    </p>
                    <p style={{ color: 'var(--text-muted)', lineHeight: 1.9, fontSize: '0.95rem' }}>
                        I apply clean architecture and SOLID principles in every project I build,
                        and I enjoy solving hard algorithmic problems along the way.
                    </p>

                    {/* Stats */}
                    <div style={{
                        display: 'flex',
                        gap: '2rem',
                        marginTop: '2.5rem',
                        padding: '1.5rem',
                        borderRadius: 'var(--radius)',
                        border: '1px solid var(--border)',
                        background: 'var(--bg-card)',
                    }}>
                        {stats.map((s, i) => (
                            <div key={s.label} style={{
                                flex: 1,
                                textAlign: 'center',
                                borderRight: i < stats.length - 1 ? '1px solid var(--border)' : 'none',
                            }}>
                                <p className="gradient-text" style={{
                                    fontSize: '1.75rem',
                                    fontWeight: 700,
                                    letterSpacing: '-0.04em',
                                }}>
                                    {s.value}
                                </p>
                                <p style={{ fontSize: '0.72rem', color: 'var(--text-dim)', marginTop: '0.25rem' }}>
                                    {s.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stack + education */}
                <div className="reveal reveal-delay-2">
                    <p style={{
                        fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.14em',
                        color: 'var(--text-dim)', textTransform: 'uppercase', marginBottom: '0.85rem',
                    }}>
                        Tech Stack
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '2.5rem' }}>
                        {techStack.map(t => (
                            <span key={t} className="tech-pill">
                                <TechIcon name={t} size={14} />
                                {t}
                            </span>
                        ))}
                    </div>

                    <p style={{
                        fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.14em',
                        color: 'var(--text-dim)', textTransform: 'uppercase', marginBottom: '1rem',
                    }}>
                        Education
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                        {[
                            { title: 'Full Stack Development', org: 'MERN Stack Bootcamp', year: '2024' },
                            { title: 'Diploma in Computer Engineering', org: 'Polytechnic College', year: '2020' },
                        ].map(e => (
                            <div key={e.title} className="card" style={{
                                display: 'flex', justifyContent: 'space-between',
                                alignItems: 'flex-start', gap: '1rem',
                                padding: '1rem 1.25rem',
                            }}>
                                <div>
                                    <p style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text)' }}>{e.title}</p>
                                    <p style={{ fontSize: '0.78rem', color: 'var(--text-dim)', marginTop: '0.2rem' }}>{e.org}</p>
                                </div>
                                <span style={{
                                    fontSize: '0.72rem', color: 'var(--accent-2)',
                                    flexShrink: 0, padding: '0.2rem 0.5rem',
                                    border: '1px solid rgba(167,139,250,0.2)',
                                    borderRadius: '4px', background: 'rgba(167,139,250,0.06)',
                                }}>
                                    {e.year}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
