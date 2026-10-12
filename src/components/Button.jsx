import { Link } from "react-router-dom";
import Icon from "./Icons.jsx";

// Renders a router Link, an external anchor, or a download link depending on props.
export default function Button({ to, href, download, icon, variant = "primary", children, className = "", ...rest }) {
  const cls = `btn-app btn-app--${variant} ${className}`.trim();
  const content = (
    <>
      {icon && <Icon name={icon} />}
      <span>{children}</span>
    </>
  );
  if (to) return <Link to={to} className={cls} {...rest}>{content}</Link>;
  if (download) return <a href={href} download={download} className={cls} {...rest}>{content}</a>;
  const external = /^https?:/.test(href || "");
  return (
    <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...rest}>
      {content}
    </a>
  );
}
