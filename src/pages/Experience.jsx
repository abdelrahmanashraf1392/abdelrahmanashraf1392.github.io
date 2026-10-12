import { experience } from "../data/experience.js";
import usePageMeta from "../hooks/usePageMeta.js";
import SectionTitle from "../components/SectionTitle.jsx";

export default function Experience() {
  usePageMeta("Experience & Learning", "Training and academic background of Abdelrahman Ashraf, including the DEPI React front-end track.");
  return (
    <section className="section page-top">
      <div className="container">
        <SectionTitle as="h1" title="Experience & learning" text="Training and studies that shaped my front-end skills." />
        <ol className="timeline">
          {experience.map((e) => (
            <li key={e.id} className="timeline-item">
              <article className="panel">
                <p className="timeline-meta">{[e.type, e.period].filter(Boolean).join(" · ")}</p>
                <h2 className="h5">{e.title}</h2>
                {e.organization && <p className="muted">{e.organization}</p>}
                {e.status && <span className="status-pill">{e.status}</span>}
                <ul className="check-list mt-3">{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
