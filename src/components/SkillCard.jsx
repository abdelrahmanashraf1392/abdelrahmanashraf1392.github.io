export default function SkillCard({ name, badge }) {
  return (
    <li className="skill-card">
      <span className="skill-badge" aria-hidden="true">{badge}</span>
      <span>{name}</span>
    </li>
  );
}
