export default function SectionTitle({ title, text, as: Tag = "h2" }) {
  return (
    <div className="section-title">
      <Tag>{title}</Tag>
      {text && <p>{text}</p>}
    </div>
  );
}
