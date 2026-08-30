export default function LogoMarquee() {
  const techs = [
    { icon: "devicon-flutter-plain colored", name: "Flutter" },
    { icon: "devicon-laravel-original colored", name: "Laravel" },
    { icon: "devicon-react-original colored", name: "React" },
    { icon: "devicon-vuejs-plain colored", name: "Vue" },
    { icon: "devicon-nodejs-plain colored", name: "Node.js" },
    { icon: "devicon-python-plain colored", name: "Python" },
    { icon: "devicon-django-plain colored", name: "Django" },
    { icon: "devicon-docker-plain colored", name: "Docker" },
    { icon: "devicon-mysql-plain colored", name: "MySQL" },
    { icon: "devicon-postgresql-plain colored", name: "PostgreSQL" },
    { icon: "devicon-firebase-plain colored", name: "Firebase" },
    { icon: "devicon-supabase-plain colored", name: "Supabase" },
    { icon: "devicon-openapi-plain colored", name: "OpenAI" },
    { icon: "devicon-linux-plain colored", name: "Linux" },
    { icon: "devicon-amazonwebservices-plain-wordmark colored", name: "AWS" },
    { icon: "devicon-azure-plain colored", name: "Azure" },
    { icon: "devicon-googlecloud-plain colored", name: "Google Cloud" },
  ];

  const TechItem = ({ tech }) => (
    <span className="tech-logo">
      <i className={tech.icon}></i> {tech.name}
    </span>
  );

  return (
    <section className="logo-marquee-section">
      <div className="marquee-container">
        <div className="marquee-track">
          <div className="marquee-content">
            {techs.map((tech, i) => (
              <TechItem key={`a-${i}`} tech={tech} />
            ))}
          </div>
          <div className="marquee-content" aria-hidden="true">
            {techs.map((tech, i) => (
              <TechItem key={`b-${i}`} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
