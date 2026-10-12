import profile from "../config/profile.js";
import usePageMeta from "../hooks/usePageMeta.js";
import SectionTitle from "../components/SectionTitle.jsx";

const interests = ["Front-End Development", "Modern Web Technologies", "UI/UX Design", "Problem Solving"];
const attributes = ["Curious and eager to learn", "Creative thinker", "Self-motivated", "Interested in exploring new technologies", "Focused on continuous improvement"];

export default function About() {
  usePageMeta("About", "Learn about Abdelrahman Ashraf: education, interests, development philosophy and career goals.");
  return (
    <section className="section page-top">
      <div className="container">
        <SectionTitle as="h1" title="About me" text="An aspiring front-end developer focused on clean, usable interfaces." />
        <div className="row g-5 align-items-start">
          <div className="col-lg-4">
            <div className="panel about-card">
              <img src={profile.image} alt={`${profile.name}, profile`} loading="lazy" width="400" height="400" />
              <h2 className="panel-title">{profile.name}</h2>
              <p className="mb-1">{profile.title}</p>
              <p className="muted mb-0">Information Technology student, October Technological University, Egypt.</p>
            </div>
          </div>
          <div className="col-lg-8">
            <h2 className="h4">Background</h2>
            <p>I am an aspiring Front-End Developer with a strong interest in building modern, responsive and user-friendly web applications. I enjoy turning ideas and designs into working digital experiences, with a focus on clean code, responsive layouts and intuitive interfaces.</p>
            <p>I'm continuously developing my skills in modern web technologies, particularly React.js and JavaScript.</p>
            <h2 className="h4 mt-5">Development philosophy</h2>
            <p>Good development is not only about writing code. It's about creating meaningful user experiences through clean architecture, maintainable code and thoughtful design. I value continuous learning, practical experience and building projects that solve real-world problems.</p>
            <h2 className="h4 mt-5">Career goals</h2>
            <p>I want to grow as a professional Front-End Developer, work on challenging projects, collaborate with talented people and keep improving my technical and problem-solving skills.</p>
          </div>
        </div>
        <div className="row g-4 mt-4">
          <div className="col-md-6">
            <div className="panel h-100"><h2 className="panel-title">Technical interests</h2>
              <ul className="tag-list">{interests.map((i) => <li key={i}>{i}</li>)}</ul></div>
          </div>
          <div className="col-md-6">
            <div className="panel h-100"><h2 className="panel-title">How I work</h2>
              <ul className="check-list">{attributes.map((a) => <li key={a}>{a}</li>)}</ul></div>
          </div>
        </div>
      </div>
    </section>
  );
}
