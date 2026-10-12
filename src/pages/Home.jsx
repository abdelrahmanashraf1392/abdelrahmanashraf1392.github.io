import { Link } from "react-router-dom";
import profile from "../config/profile.js";
import { projects } from "../data/projects.js";
import { skillCategories } from "../data/skills.js";
import usePageMeta from "../hooks/usePageMeta.js";
import Button from "../components/Button.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import Icon from "../components/Icons.jsx";

export default function Home() {
  usePageMeta("Home", "Abdelrahman Ashraf is a React Front-End Developer building modern, responsive and accessible web interfaces.");
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-bg" aria-hidden="true"><span className="orb orb-a" /><span className="orb orb-b" /></div>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <p className="hero-hello">Hi, I'm</p>
              <h1 id="hero-title">{profile.name}</h1>
              <p className="hero-role">{profile.title}</p>
              <p className="hero-intro">{profile.intro}</p>
              <div className="hero-actions">
                <Button to="/projects" icon="arrow">View My Projects</Button>
                <Button href={profile.cvPath} download={profile.cvFileName} icon="download" variant="outline">Download CV</Button>
              </div>
              <div className="hero-links">
                <a href={profile.github} target="_blank" rel="noopener noreferrer"><Icon name="github" /> GitHub</a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Icon name="linkedin" /> LinkedIn</a>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="hero-visual">
                <img src={profile.image} alt={`${profile.name}, profile`} width="400" height="400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle title="Featured projects" text="A selection of the interfaces I've built recently." />
          <div className="row g-4">
            {featured.map((p) => <div className="col-md-6 col-lg-4" key={p.id}><ProjectCard project={p} /></div>)}
          </div>
          <div className="text-center mt-5"><Button to="/projects" variant="outline" icon="arrow">See all projects</Button></div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionTitle title="Skills overview" text="The tools I use to turn designs into working interfaces." />
          <div className="row g-4">
            {skillCategories.map((c) => (
              <div className="col-md-6 col-lg-3" key={c.title}>
                <div className="panel h-100">
                  <h3 className="panel-title">{c.title}</h3>
                  <ul className="tag-list">{c.skills.map((s) => <li key={s.name}>{s.name}</li>)}</ul>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center mt-4"><Link className="text-link" to="/skills">Explore all skills</Link></p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta">
            <h2>Have a role or project in mind?</h2>
            <p>I'm open to junior front-end opportunities and collaborations. Send a message and I'll reply soon.</p>
            <Button to="/contact" variant="light" icon="mail">Get in touch</Button>
          </div>
        </div>
      </section>
    </>
  );
}
