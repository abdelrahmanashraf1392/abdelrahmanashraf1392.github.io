import { skillCategories } from "../data/skills.js";
import usePageMeta from "../hooks/usePageMeta.js";
import SectionTitle from "../components/SectionTitle.jsx";
import SkillCard from "../components/SkillCard.jsx";

export default function Skills() {
  usePageMeta("Skills", "Technical skills of Abdelrahman Ashraf: HTML5, CSS3, JavaScript, React.js, Bootstrap, Git and more.");
  return (
    <section className="section page-top">
      <div className="container">
        <SectionTitle as="h1" title="Skills" text="Technologies and tools I work with, grouped by purpose." />
        {skillCategories.map((c) => (
          <div className="skill-group" key={c.title}>
            <h2 className="h4">{c.title}</h2>
            <ul className="skill-grid">{c.skills.map((s) => <SkillCard key={s.name} {...s} />)}</ul>
          </div>
        ))}
      </div>
    </section>
  );
}
