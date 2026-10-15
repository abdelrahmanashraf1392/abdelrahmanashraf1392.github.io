// Add a project by copying an object. Set `repo` / `demo` to a URL when ready.
// If `repo` is null the GitHub button opens your GitHub profile; if `demo` is null the demo button is hidden.
export const projects = [
  {
    id: "shareek",
    name: "Shareek",
    description:
      "Student housing and roommate-matching platform, built as my DEPI graduation project. Students browse listings submitted by apartment owners. I led the front end and connected it to the backend API with Fetch.",
    tech: ["in progress", "React", "Vite", "Bootstrap", "JavaScript", "REST API"],
    image: "/project-placeholder.svg",
    repo: "https://github.com/abdelrahmanashraf1392/Shareek",
    demo: null,
    featured: true,
  },
  {
    id: "portfolio",
    name: "Personal Portfolio Website",
    description:
      "This portfolio: a responsive React site that presents my skills, projects and learning path, with its content kept in central data files.",
    tech: ["React", "React Router", "Bootstrap", "Vite"],
    image: "/Personal_Portfolio_Website.jpg",
    repo: "https://github.com/abdelrahmanashraf1392/abdelrahmanashraf1392.github.io",
    demo: "https://abdelrahmanashraf1392.github.io/",
    featured: true,
  },
  {
    id: "discover-the-world",
    name: "Discover The World",
    description:
      "A travel website that lets visitors browse multiple cities and destinations through clean, image-led pages.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    image: "/discover-the-world.png",
    repo: "https://github.com/abdelrahmanashraf1392/Discover_World",
    demo: "https://abdelrahmanashraf1392.github.io/Discover_World/",
    featured: true,
  },
];
