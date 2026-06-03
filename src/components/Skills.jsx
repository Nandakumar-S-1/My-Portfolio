import React from 'react';
import { useReveal } from '../hooks/useReveal';
import TechIcon from './TechIcon';

const Skills = () => {
    const ref = useReveal();

    const categories = [
        {
            label: 'Frontend',
            items: ['JavaScript', 'TypeScript', 'React', 'Redux', 'HTML', 'Vite'],
        },
        {
            label: 'Backend',
            items: ['Node.js', 'Express', 'JWT', 'Redis', 'Socket.io'],
        },
        {
            label: 'Databases',
            items: ['MongoDB', 'PostgreSQL', 'Prisma'],
        },
        {
            label: 'Tools & Other',
            items: ['Git & GitHub', 'Docker', 'Clean Architecture', 'SOLID'],
        },
    ];

    return (
        <section id="skills" ref={ref} style={{ borderTop: '1px solid var(--border)' }}>
            <div className="reveal">
                <p className="section-label">Skills</p>
                <h2 className="section-title">
                    <span className="animated-underline">What I work with</span>
                </h2>
                <div className="divider" />
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '3rem', maxWidth: '420px' }}>
                    450+ LeetCode problems · Strong fundamentals in data structures and algorithms.
                </p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                overflow: 'hidden',
            }}>
                {categories.map((cat, i) => (
                    <div
                        key={cat.label}
                        className={`card reveal reveal-delay-${i + 1}`}
                        style={{
                            padding: '1.75rem',
                            borderRadius: 0,
                            border: '1px solid rgba(108,99,255,0.12)',
                            borderRight: i < categories.length - 1 ? '1px solid var(--border)' : 'none',
                        }}
                    >
                        <p style={{
                            fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.14em',
                            textTransform: 'uppercase', color: 'var(--accent-2)', marginBottom: '1.25rem',
                            opacity: 0.75,
                        }}>
                            {cat.label}
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                            {cat.items.map(item => (
                                <div key={item} style={{
                                    display: 'flex', alignItems: 'center', gap: '0.6rem',
                                }}>
                                    <TechIcon name={item} size={16} />
                                    <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                                        {item === 'HTML' ? 'HTML / CSS' : item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
