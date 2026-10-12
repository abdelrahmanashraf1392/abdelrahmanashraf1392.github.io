import profile from "../config/profile.js";
import Icon from "./Icons.jsx";

export default function SocialLinks({ className = "" }) {
  const items = [
    { name: "github", label: "GitHub profile", href: profile.github },
    { name: "linkedin", label: "LinkedIn profile", href: profile.linkedin },
    { name: "mail", label: "Send an email", href: `mailto:${profile.email}` },
  ];
  return (
    <ul className={`social-links ${className}`}>
      {items.map(({ name, label, href }) => (
        <li key={name}>
          <a
            href={href}
            aria-label={label}
            {...(name !== "mail" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            <Icon name={name} size={20} />
          </a>
        </li>
      ))}
    </ul>
  );
}
