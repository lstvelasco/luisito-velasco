import ProjectCard from "./ProjectCard";
import CSSS from "../assets/images/csss.png";
import MSCHSAAI from "../assets/images/mschsaai.png";
import MSCHSAAIGALLERY from "../assets/images/mschsaai-gallery.png";
import checkqr from "../assets/images/checkqr.png";
import echo from "../assets/images/echo.png";
import portfolio from "../assets/images/portfolio.png";
import mscalumniportal from "../assets/images/msclumniportal.png";

const Projects = () => {
  return (
    <section id="projects" className="hero bg-base-200 min-h-screen">
      <div className="hero-content min-w-12 flex-col gap-16">
        <h1 className="text-3xl lg:text-5xl font-bold font-sans">PROJECTS</h1>
        <div className="flex flex-wrap justify-center gap-10">
          <ProjectCard
            projectName="Customer Satisfaction Survey System"
            description="The Customer Satisfaction Survey System is a collaborative project designed for Marinduque State University to streamline the feedback collection process. This system replaces manual feedback methods with a more efficient approach by generating unique QR codes for each department. Users can simply scan the QR code to access and complete the survey, making it easier to gather and analyze feedback."
            imageUrl={CSSS}
            projectTechs={["PHP", "JavaScript", "Bootstrap"]}
            role={["Full Stack", "Collaboration"]}
            link="https://marsu.csss.com.ph/landing-page"
          />
          <ProjectCard
            projectName="Marinduque State College High School Alumni Association Inc. Website"
            description="The Marinduque State College High School Alumni Association Inc. website serves as a central hub for alumni to stay connected and informed. This platform provides comprehensive information about upcoming events, including homecoming celebrations, and features profiles of the association's officers. The site is designed to facilitate communication and engagement among alumni, fostering a stronger sense of community and keeping everyone updated on important events and announcements."
            imageUrl={MSCHSAAI}
            projectTechs={["PHP", "JavaScript", "Bootstrap"]}
            role={["Full Stack", "Collaboration"]}
            link="https://hs.mscalumni.com"
          />
          <ProjectCard
            projectName="Marinduque State College High School Alumni Association Inc. Gallery"
            description="The Gallery for the Marinduque State College High School Alumni Association Inc. is a vibrant showcase of memorable moments from various alumni events, including homecomings and other significant gatherings. This section of the website features an array of photos and videos, providing alumni with a visual history of past events and celebrations. It serves as a digital album where users can relive special moments and share their experiences with fellow alumni."
            imageUrl={MSCHSAAIGALLERY}
            projectTechs={["PHP", "JavaScript", "Bootstrap"]}
            role={["Full Stack", "Collaboration"]}
            link="https://hs.mscalumni.com/gallery"
          />
          <ProjectCard
            projectName="Marinduque State College Alumni Portal"
            description="The Marinduque State College Alumni Portal serves as a gateway to various alumni websites associated with the college. This portal provides a unified entry point for alumni to access different departmental or batch-specific websites, ensuring easy navigation and centralized access to resources. It simplifies the process for alumni to stay connected with their respective communities within the college."
            imageUrl={mscalumniportal}
            projectTechs={["PHP", "JavaScript", "CSS"]}
            role={["Front-end", "Solo"]}
            link="https://www.mscalumni.com"
          />
          <ProjectCard
            projectName="CheckQr - Attendance Checker Web Application"
            description="CheckQr simplifies and secures attendance tracking at events. It generates unique QR codes for each attendee, specific to various sessions like check-ins and check-outs.

Attendees can either:
Self-Check-In: Scan their unique QR code through their account.
Traditional Method: Have an attendance officer manually input their ID or scan a QR code version of the ID.

Attendance officers can manage sessions, including opening/closing periods and activating/deactivating QR codes. The system also includes user interaction features, allowing users to send private messages and search for other users within the platform. The system also features comprehensive reporting, providing detailed insights and reducing wait times by allowing independent check-ins and offering a clear view of attendance data."
            imageUrl={checkqr}
            projectTechs={[
              "Laravel",
              "PHP",
              "JavaScript",
              "TailwindCSS",
              "Flowbite",
            ]}
            role={["Full Stack", "Solo"]}
            link="https://checkqr.rf.gd"
          />
          <ProjectCard
            projectName="Echo - Announcement Web Application"
            description="Echo is an announcement platform that allows users to post and interact with announcements. Users can comment publicly on announcements or send private messages for inquiries. Announcements can be validated by an admin; only validated announcements are reflected on a shared calendar viewable by all users. Additionally, users can search for and connect with other users within the app."
            imageUrl={echo}
            projectTechs={[
              "Laravel",
              "PHP",
              "JavaScript",
              "TailwindCSS",
              "Flowbite",
            ]}
            role={["Full Stack", "Solo", "Personal"]}
            link="https://marsu.echo.infinityfreeapp.com"
          />
          <ProjectCard
            projectName="Portfolio"
            description="My portfolio is a comprehensive showcase of my work and skills as a web developer and programmer. It features a curated collection of projects, including detailed descriptions, technology stacks, and the impact of each project. Designed with a focus on user experience and modern web design principles, this portfolio highlights my expertise and provides insight into my development process and capabilities."
            imageUrl={portfolio}
            projectTechs={[
              "React",
              "Laravel",
              "Livewire",
              "TypeScript",
              "TailwindCSS",
              "DaisyUI",
            ]}
            role={["Full Stack", "Solo", "Personal"]}
            link="https://luisitovelasco.netlify.app"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
