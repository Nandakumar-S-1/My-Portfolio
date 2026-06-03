import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal';

const Projects = () => {
    const ref = useReveal();

    const projects = [
        {
            number: '01',
            title: 'RentEase — Backend',
            description: 'Backend service built with TypeScript, Express and PostgreSQL following Clean Architecture & SOLID principles. Includes JWT auth, Redis caching and Prisma ORM.',
            tech: ['TypeScript', 'Express', 'PostgreSQL', 'Prisma', 'Redis', 'JWT'],
            link: 'https://github.com/Nandakumar-S-1/RentEase-Server',
        },
        {
            number: '02',
            title: 'RentEase — Frontend',
            description: 'React client for the RentEase rental platform. Handles property listings, booking flows and user dashboards with type-safe state management.',
            tech: ['React', 'TypeScript', 'Redux', 'Vite'],
            link: 'https://github.com/Nandakumar-S-1/RentEase-Client',
        },
        {
            number: '03',
            title: 'CyberCrate',
            description: 'E-commerce platform for gaming equipment — product catalog, cart, checkout flow with Razorpay integration and a full admin dashboard.',
            tech: ['React', 'Node.js', 'MongoDB', 'Razorpay'],
            link: 'https://github.com/Nandakumar-S-1/CyberCrate',
        },
        {
            number: '04',
            title: 'Chat App — Backend',
            description: 'Realtime chat backend with JWT authentication, REST APIs and live messaging events via WebSockets.',
            tech: ['Node.js', 'Express', 'Socket.io', 'JWT'],
            link: 'https://github.com/Nandakumar-S-1/Chat-App-Backend',
        },
    ];

    return (
        <section id="projects" ref={ref} style={{ borderTop: '1px solid var(--border)' }}>
            <div className="reveal">
                <p className="section-label">Projects</p>
                <h2 className="section-title">
                    <span className="animated-underline">Things I've built</span>
                </h2>
                <div className="divider" />
            </div>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                overflow: 'hidden',
            }}>
                {projects.map((project, i) => (
                    <ProjectRow
                        key={i}
                        project={project}
                        isLast={i === projects.length - 1}
                        delay={Math.min(i + 1, 4)}
                    />
                ))}
            </div>
        </section>
    );
};

const ProjectRow = ({ project, isLast, delay }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`reveal reveal-delay-${delay}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                display: 'grid',
                gridTemplateColumns: '3.5rem 1fr auto',
                gap: '2rem',
                alignItems: 'center',
                padding: '1.75rem 2rem',
                background: hovered
                    ? 'linear-gradient(90deg, rgba(108,99,255,0.06) 0%, var(--bg-hover) 100%)'
                    : 'var(--bg-card)',
                borderBottom: isLast ? 'none' : '1px solid var(--border)',
                borderLeft: hovered ? '2px solid rgba(108,99,255,0.5)' : '2px solid transparent',
                transition: 'all 0.25s ease',
                color: 'inherit',
            }}
        >
            <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', fontWeight: 500 }}>
                {project.number}
            </span>

            <div>
                <h3 style={{
                    fontSize: '0.975rem', fontWeight: 600,
                    color: 'var(--text)', marginBottom: '0.3rem', letterSpacing: '-0.01em',
                }}>
                    {project.title}
                </h3>
                <p style={{
                    fontSize: '0.845rem', color: 'var(--text-muted)',
                    marginBottom: '0.75rem', lineHeight: 1.65, maxWidth: '560px',
                }}>
                    {project.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                    {project.tech.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
            </div>

            <span style={{
                fontSize: '1rem',
                color: hovered ? 'var(--text-muted)' : 'var(--text-dim)',
                transform: hovered ? 'translate(2px, -2px)' : 'translate(0, 0)',
                transition: 'color 0.2s ease, transform 0.2s ease',
                display: 'inline-block',
            }}>
                ↗
            </span>
        </a>
    );
};

export default Projects;
