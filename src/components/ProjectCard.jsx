import profile from "../config/profile.js";
import Button from "./Button.jsx";

export default function ProjectCard({ project }) {
  const { name, description, tech, image, repo, demo } = project;
  return (
    <article className="project-card">
      <img src={image} alt={`${name} screenshot`} loading="lazy" width="640" height="400" />
      <div className="project-body">
        <h3>{name}</h3>
        <p>{description}</p>
        <ul className="tag-list" aria-label="Technologies used">
          {tech.map((t) => <li key={t}>{t}</li>)}
        </ul>
        <div className="project-actions">
          {demo && <Button href={demo} icon="external" variant="primary">Live Demo</Button>}
          <Button href={repo || profile.github} icon="github" variant="outline">GitHub</Button>
        </div>
      </div>
    </article>
  );
}
