// Example of how to use the simpler CardProject format
import CardProject from '../components/CardProject';

// Instead of complex project objects like:
// { id: 'project1', Img: 'url', Title: 'My Project', Description: 'Desc', Link: 'link' }

// You can now use simpler format with direct props:
const projects = [
  {
    img: "https://example.com/project1.jpg",
    title: "My Awesome Project",
    description: "The first character I made using the low poly character style I am still learning to develop this skill/style",
    link: "https://project-demo.com",
    id: "project1"
  },
  {
    img: "https://example.com/project2.jpg", 
    title: "Another Project",
    description: "Another project description",
    link: null,
    id: "project2"
  }
];

// Usage in your component:
function ProjectList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {projects.map((project, index) => (
        <div key={index}>
          <CardProject
            img={project.img}
            title={project.title} 
            description={project.description}
            link={project.link}
            id={project.id}
          />
        </div>
      ))}
    </div>
  );
}

// Or even simpler - pass props directly:
const simpleUsage = (
  <CardProject
    img="https://example.com/image.jpg"
    title="Simple Project"
    description="This is a simple project"
    link="https://example.com"
    id="simple1"
  />
);