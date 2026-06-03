import React from 'react';

/* Simple inline SVG icons for common tech stacks */
const icons = {
    JavaScript: (
        <svg viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="4" fill="#F7DF1E"/><path d="M9 25.2l2.6-1.58c.5.9.96 1.66 2.06 1.66 1.05 0 1.72-.41 1.72-2.02V14h3.2v9.33c0 3.33-1.95 4.84-4.8 4.84-2.57 0-4.06-1.33-4.82-2.93M19.3 24.9l2.6-1.5c.68 1.12 1.57 1.94 3.13 1.94 1.32 0 2.16-.66 2.16-1.57 0-1.09-.87-1.48-2.32-2.12l-.8-.34c-2.3-.98-3.82-2.2-3.82-4.8 0-2.38 1.82-4.2 4.65-4.2 2.02 0 3.47.7 4.52 2.54l-2.47 1.59c-.55-.98-1.13-1.36-2.05-1.36-.93 0-1.52.59-1.52 1.36 0 .95.59 1.34 1.96 1.93l.8.34c2.7 1.16 4.24 2.34 4.24 5 0 2.86-2.25 4.43-5.27 4.43-2.96 0-4.87-1.4-5.8-3.23" fill="#000"/></svg>
    ),
    TypeScript: (
        <svg viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="4" fill="#3178C6"/><path d="M18.6 22.5v2.7c.44.22.96.39 1.57.5.6.12 1.24.17 1.9.17.65 0 1.27-.07 1.87-.2.6-.14 1.12-.36 1.57-.68.45-.32.8-.74 1.07-1.26.26-.52.39-1.16.39-1.9 0-.55-.08-1.03-.24-1.44a3.3 3.3 0 00-.7-1.09 5.1 5.1 0 00-1.1-.83 12.5 12.5 0 00-1.44-.67c-.39-.15-.73-.3-1.02-.44a4.2 4.2 0 01-.75-.44 1.9 1.9 0 01-.47-.5 1.2 1.2 0 01-.16-.63c0-.22.05-.42.15-.6.1-.17.24-.32.42-.44.18-.12.4-.2.65-.27.25-.06.53-.09.84-.09.22 0 .46.02.7.06.25.04.49.1.73.18.24.09.47.2.68.33.22.14.41.3.58.48V16.2a7.4 7.4 0 00-1.37-.37 9.3 9.3 0 00-1.63-.13c-.64 0-1.25.07-1.84.22-.58.15-1.1.38-1.54.7a3.4 3.4 0 00-1.05 1.2c-.26.49-.38 1.07-.38 1.74 0 .86.23 1.59.7 2.18.46.59 1.17 1.08 2.12 1.48.42.16.8.32 1.13.48.33.15.6.32.83.5.22.17.39.37.52.58.12.21.18.45.18.72 0 .22-.05.43-.14.62a1.3 1.3 0 01-.42.48c-.18.13-.4.23-.67.3-.27.07-.58.1-.93.1-.6 0-1.2-.12-1.77-.34a5.4 5.4 0 01-1.57-1M8 14.02h4.4V27h2.6V14.02H19V11.5H8v2.52" fill="#fff"/></svg>
    ),
    React: (
        <svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#20232A"/><ellipse cx="16" cy="16" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" fill="none"/><ellipse cx="16" cy="16" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 16 16)"/><ellipse cx="16" cy="16" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 16 16)"/><circle cx="16" cy="16" r="2" fill="#61DAFB"/></svg>
    ),
    Redux: (
        <svg viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#764ABC"/><path d="M21.1 18.7c.8-.1 1.4-.8 1.4-1.6 0-.9-.7-1.6-1.6-1.6h-.1c-.9 0-1.6.8-1.5 1.7 0 .4.2.8.4 1-.4.9-1.1 1.5-2 1.9-.7.3-1.3.4-2 .4V16c.9-.2 1.6-.9 1.6-1.9s-.7-1.7-1.6-1.7c-1 0-1.7.8-1.7 1.7 0 .9.5 1.6 1.4 1.8v4.3c-.9.2-1.4.8-1.4 1.8 0 1 .7 1.7 1.7 1.7s1.7-.8 1.7-1.7c0-.8-.5-1.5-1.4-1.8v-1.2c1 0 1.8-.2 2.6-.6 1.2-.5 2-1.3 2.5-2.4zm-4.3-5.8c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zm0 13.3c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9zm4.3-8c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z" fill="#fff"/></svg>
    ),
    'Node.js': (
        <svg viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#339933"/><path d="M16 6l9 5.2v10.4L16 27l-9-5.2V11.2L16 6z" fill="#333"/><path d="M16 8.5l6.8 3.9v7.8L16 24.2l-6.8-3.9v-7.8L16 8.5z" fill="#339933"/><path d="M16 12c.6 0 1 .5 1 1v4.5l2.5 1.5c.5.3.7 1 .4 1.5-.3.5-1 .7-1.5.4L15 19c-.3-.2-.5-.5-.5-.9V13c0-.6.4-1 1-1z" fill="#fff"/></svg>
    ),
    Express: (
        <svg viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#000"/><text x="4" y="22" fontFamily="sans-serif" fontWeight="700" fontSize="13" fill="#fff">ex</text></svg>
    ),
    MongoDB: (
        <svg viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#13AA52"/><path d="M16 5c0 0-6 7.5-6 13 0 3.3 2.7 6 6 6s6-2.7 6-6C22 12.5 16 5 16 5z" fill="#fff"/><path d="M16 5v19" stroke="#A8C6A8" strokeWidth="1"/></svg>
    ),
    PostgreSQL: (
        <svg viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#336791"/><text x="5" y="22" fontFamily="sans-serif" fontWeight="700" fontSize="11" fill="#fff">PG</text></svg>
    ),
    Redis: (
        <svg viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#DC382D"/><path d="M8 18l8 4 8-4-8-4-8 4z" fill="#fff" opacity=".9"/><path d="M8 14l8 4 8-4-8-4-8 4z" fill="#fff"/><path d="M8 22l8 4 8-4" stroke="#fff" strokeWidth="1.5" fill="none" opacity=".6"/></svg>
    ),
    JWT: (
        <svg viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#000"/><text x="3" y="21" fontFamily="sans-serif" fontWeight="800" fontSize="10" fill="#FB015B">JWT</text></svg>
    ),
    'Socket.io': (
        <svg viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#010101"/><circle cx="16" cy="16" r="8" stroke="#fff" strokeWidth="2" fill="none"/><path d="M16 8 C16 8 10 13 16 16 C22 19 16 24 16 24" stroke="#fff" strokeWidth="2" fill="none"/></svg>
    ),
    Prisma: (
        <svg viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#0C3249"/><path d="M10 24L16 6l8 14-14 4z" fill="#fff" opacity=".9"/><path d="M10 24l6-18" stroke="#5A67D8" strokeWidth="1.5"/></svg>
    ),
    Vite: (
        <svg viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#1a1a2e"/><path d="M26 7L15 27l-2-7L6 14l20-7z" fill="url(#vg)"/><path d="M15 27L13 20l5-3-3 10z" fill="#BD34FE" opacity=".8"/><defs><linearGradient id="vg" x1="6" y1="14" x2="26" y2="7"><stop stopColor="#41D1FF"/><stop offset="1" stopColor="#BD34FE"/></linearGradient></defs></svg>
    ),
    'Git & GitHub': (
        <svg viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#F05032"/><path d="M16 4C9.37 4 4 9.37 4 16c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.04c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12.02 12.02 0 0028 16c0-6.63-5.37-12-12-12z" fill="#fff"/></svg>
    ),
    HTML: (
        <svg viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="4" fill="#E34F26"/><path d="M7 5l1.8 20.4L16 28l7.2-2.6L25 5H7zm14.8 6.4H12l.3 2.8h9.1l-.9 9.6L16 25l-4.5-1.2-.3-3.4h2.7l.2 2 1.9.5 1.9-.5.2-2.4H11.4L10.6 12H21.6l-.8-2.4" fill="#fff"/></svg>
    ),
    Docker: (
        <svg viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#2496ED"/><path d="M17 13h3v3h-3zM13 13h3v3h-3zM9 13h3v3H9zM17 9h3v3h-3zM13 9h3v3h-3z" fill="#fff"/><path d="M26.5 15.5c-.4-.3-1.4-.4-2.1-.2-.1-.9-.6-1.6-1.5-2.1l-.5-.3-.3.5c-.4.6-.5 1.6-.1 2.3-.2.1-.6.2-1.1.2H4.5c-.1.9.1 2.4 1 3.3.8.9 2 1.3 3.5 1.3 3.4 0 5.9-1.5 7.1-4.3.5 0 1.4 0 1.8-.8h.1l.3-.6-.6-.3c-.3-.2-.4-.2-.4-.4h.4c.6 0 1.2-.1 1.6-.4l.5-.3-.2-.5z" fill="#fff"/></svg>
    ),
};

const TechIcon = ({ name, size = 18 }) => {
    const icon = icons[name];
    if (!icon) return null;
    return (
        <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: size,
            height: size,
            borderRadius: '3px',
            flexShrink: 0,
            overflow: 'hidden',
        }}>
            {React.cloneElement(icon, { width: size, height: size })}
        </span>
    );
};

export default TechIcon;
