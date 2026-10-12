// Central place for personal info. Edit here and the whole site updates.
const profile = {
  name: "Abdelrahman Ashraf",
  title: "React Front-End Developer",
  tagline: "Clean interfaces, built one component at a time.",
  intro:
    "I build modern, interactive web interfaces that pair attractive design with smooth UX, using HTML, CSS, JavaScript and React.",
  email: "abdelrahmanashraf1392@gmail.com",
  github: "https://github.com/abdelrahmanashraf1392",
  linkedin: "https://www.linkedin.com/in/abdulrahman-ashraf-584534347",
  cvPath: "/Abdelrahman_Ashraf__CV.pdf", // put the real PDF in /public with this exact name
  cvFileName: "Abdelrahman_Ashraf_CV.pdf",
  image: "/img_profile.jpg", // replace with your photo in /public
  location: "Cairo, Egypt",
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/contact", label: "Contact" },
];

export const footerTagline =
  "Designing for clarity, coding for the long run. Fast, accessible and easy to use.";

export default profile;
