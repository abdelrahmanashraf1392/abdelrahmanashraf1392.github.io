import { useState } from "react";
import profile from "../config/profile.js";
import usePageMeta from "../hooks/usePageMeta.js";
import SectionTitle from "../components/SectionTitle.jsx";
import Icon from "../components/Icons.jsx";

const empty = { name: "", email: "", subject: "", message: "" };

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = "Enter your full name.";
  if (!v.email.trim()) e.email = "Enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = "Enter a valid email, like name@example.com.";
  if (!v.subject.trim()) e.subject = "Enter a subject.";
  if (v.message.trim().length < 10) e.message = "Write a message of at least 10 characters.";
  return e;
}

export default function Contact() {
  usePageMeta("Contact", "Get in touch with Abdelrahman Ashraf by email, LinkedIn or GitHub.");
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const onChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

  // No backend: a valid form opens the visitor's email app with the message filled in.
  const onSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return setSent(false);
    const body = `${values.message}\n\nFrom: ${values.name} (${values.email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    setValues(empty);
  };

  const field = (name, label, props = {}) => (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">{label}</label>
      {props.rows ? (
        <textarea id={name} name={name} value={values[name]} onChange={onChange} className={`form-control ${errors[name] ? "is-invalid" : ""}`} aria-invalid={!!errors[name]} aria-describedby={errors[name] ? `${name}-error` : undefined} {...props} />
      ) : (
        <input id={name} name={name} value={values[name]} onChange={onChange} className={`form-control ${errors[name] ? "is-invalid" : ""}`} aria-invalid={!!errors[name]} aria-describedby={errors[name] ? `${name}-error` : undefined} {...props} />
      )}
      {errors[name] && <div id={`${name}-error`} className="invalid-feedback d-block">{errors[name]}</div>}
    </div>
  );

  return (
    <section className="section page-top">
      <div className="container">
        <SectionTitle as="h1" title="Contact" text="Recruiters, clients and developers are all welcome to reach out." />
        <div className="row g-5">
          <div className="col-lg-7">
            <form className="panel" onSubmit={onSubmit} noValidate>
              {field("name", "Full name", { type: "text", autoComplete: "name" })}
              {field("email", "Email address", { type: "email", autoComplete: "email" })}
              {field("subject", "Subject", { type: "text" })}
              {field("message", "Message", { rows: 5 })}
              <button type="submit" className="btn-app btn-app--primary"><Icon name="mail" /><span>Send message</span></button>
              <p className="muted small mt-3 mb-0">This form opens your email app with the message ready to send. Nothing is stored on this site.</p>
              <div role="status" aria-live="polite">
                {sent && <p className="form-success">Your email app should open now. Send the draft to complete your message.</p>}
              </div>
            </form>
          </div>
          <div className="col-lg-5">
            <div className="panel mb-4">
              <h2 className="panel-title">Contact details</h2>
              <ul className="contact-list">
                <li><Icon name="mail" /><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
                <li><Icon name="linkedin" /><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn profile</a></li>
                <li><Icon name="github" /><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub profile</a></li>
              </ul>
            </div>
            <div className="cta cta-sm">
              <h2 className="h4">Let's build something good.</h2>
              <p className="mb-0">I'm open to junior front-end roles, internships and collaborations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
