import { projects } from "../data/projects.js";
import usePageMeta from "../hooks/usePageMeta.js";
import SectionTitle from "../components/SectionTitle.jsx";
import ProjectCard from "../components/ProjectCard.jsx";

export default function Projects() {
  usePageMeta("Projects", "Projects by Abdelrahman Ashraf built with React, Vite, Bootstrap and modern JavaScript.");
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);
  const grid = (list) => (
    <div className="row g-4">
      {list.map((p) => <div className="col-md-6 col-lg-4" key={p.id}><ProjectCard project={p} /></div>)}
    </div>
  );
  return (
    <section className="section page-top">
      <div className="container">
        <SectionTitle as="h1" title="Projects" text="Things I've built while learning and training." />
        <h2 className="h4 mb-3">Featured</h2>
        {grid(featured)}
        {others.length > 0 && (<><h2 className="h4 mt-5 mb-3">More projects</h2>{grid(others)}</>)}
      </div>
    </section>
  );
}
