// src/components/SocialLinks.jsx
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const socials = [
    {
        icon: FaGithub,
        href: 'https://github.com/Ansh999',
        label: 'GitHub',
    },
    {
        icon: FaLinkedin,
        href: 'https://www.linkedin.com/in/ansh-pokhriyal-674178309/',
        label: 'LinkedIn',
    },
    {
        icon: MdEmail,
        href: 'mailto:anshpokhriyal@gmail.com',
        label: 'Email',
    },
]

export const SocialLinks = ({ className = '' }) => {
    return (
        <div className={`flex items-center gap-4 ${className}`}>
            <span className="text-xl  text-muted-foreground animate-fade-in">Follow me: </span>
            
            {socials.map(({ icon: Icon, href, label }, i) => (
                <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="group relative w-11 h-11 flex items-center justify-center rounded-full glass border border-white/10 hover:border-primary/50 transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${i * 100}ms` }}
                >
                    <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    <span className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/10 blur-md transition-all duration-300" />
                </a>
            ))}
        </div>
    )
}