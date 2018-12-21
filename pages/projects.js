import GradientSection from "../components/gradientSection";
import ProjectList from "../components/projects/projectList";

const Projects = () => (
  <div>
    <GradientSection
      title="Our Work"
      subHeadline="In today&#39;s world, we are capable of changing the lives of those
                halfway across the country. While tech has enabled us to have a
                larger reach, we also understand that we have a responsibility
                to build tools that are more than just pet projects. We strive
                to deliver incredible value to the nonprofits we are fortunate
                enough to work with and look forward to seeing our products
                continue to be used for years to come."
    />
    <ProjectList />
  </div>
);

export default Projects;