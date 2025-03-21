import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { FaPython, FaDatabase, FaBrain, FaHtml5, FaCss3, FaJs, FaReact, FaPhp } from "react-icons/fa";

export default function App() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen relative">
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-800 shadow-md z-50">
        <div className="container mx-auto flex flex-wrap justify-center space-x-2 sm:space-x-6 py-4 px-4">
          {["home", "skills", "projects", "certificates", "contact"].map((item) => (
            <button
              key={item}
              className="uppercase tracking-wide hover:text-gray-400 transition"
              onClick={() => scrollToSection(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left px-8">
{/* Text Content */}
<div className="md:w-2/3 md:pr-8"> {/* Added padding to the right for spacing */}
  <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
    Hey, I'm <span className="text-blue-500">Kakumanu Nitin</span> 👋
  </h1>
  <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
       I'm a passionate <strong>developer</strong> with a strong background in 
            <strong> Data Science</strong> & <strong>Full-Stack Development</strong>.  
            I love building <strong>scalable applications</strong>, analyzing data, and learning new technologies!
          </p>

  {/* View Projects Button */}
  <button
    onClick={() => scrollToSection("projects")}
    className="mt-6 bg-blue-500 px-6 py-3 rounded-lg text-white font-semibold hover:bg-blue-600 transition"
  >
    View Projects
  </button>

  {/* Social Media Icons */}
  <div className="flex space-x-6 mt-6 justify-center md:justify-start">
    <a href="https://github.com/Nitin-kakumanu" target="_blank" rel="noopener noreferrer">
      <FaGithub className="text-3xl hover:text-gray-400 transition" />
    </a>
    <a href="https://www.linkedin.com/in/nitin-kakumanu-92b88a27b" target="_blank" rel="noopener noreferrer">
      <FaLinkedin className="text-3xl hover:text-gray-400 transition" />
    </a>
    <a href="mailto:nitinkakumanu04@gmail.com">
      <FaEnvelope className="text-3xl hover:text-gray-400 transition" />
    </a>
  </div>
</div>

{/* Profile Image (Moved to the Right) */}
{/* Profile Image (Moved to the Right) */}
<div className="md:w-1/3 flex justify-center md:justify-start mt-6 md:mt-0 relative z-10">
  <img 
    src="/nitin2.jpeg" 
    alt="Profile" 
    className="w-72 h-72 md:w-96 md:h-96 rounded-lg shadow-lg object-cover" 
  />
</div>


</section>



      {/* Skills Section */}
      <section id="skills" className="py-20 text-center px-8">
        <h2 className="text-4xl font-bold mb-6">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { icon: <FaHtml5 className="text-orange-500 text-5xl" />, name: "HTML" },
            { icon: <FaCss3 className="text-blue-500 text-5xl" />, name: "CSS" },
            { icon: <FaJs className="text-yellow-400 text-5xl" />, name: "JavaScript" },
            { icon: <FaReact className="text-blue-400 text-5xl" />, name: "React" },
            { icon: <FaPhp className="text-indigo-500 text-5xl" />, name: "PHP" },
            { icon: <FaPython className="text-yellow-400 text-5xl" />, name: "Python" },
            { icon: <FaDatabase className="text-blue-500 text-5xl" />, name: "SQL & Databases" },
            { icon: <FaBrain className="text-purple-400 text-5xl" />, name: "Machine Learning" },
          ].map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              {skill.icon}
              <p className="text-gray-300 mt-2 text-lg">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certificates Section */}
<section id="certificates" className="py-20 text-center px-8">
  <h2 className="text-4xl font-bold mb-6">Certificates</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
    {[
      { 
        title: "Web Development",
        details: "Certified in modern web technologies including React, JavaScript, and backend development.",
        issuedBy: "Intrainz" 
      },
      { 
        title: "AI & Machine Learning",
        details: "Completed training on AI models, deep learning, and data analysis.", 
        issuedBy: "Intrainz" 
      },
      { 
        title: "Data Analyst",
        details: "Certified in data visualization, SQL, and Python for data analysis.", 
        issuedBy: "NullClass" 
      },
      { 
        title: "Data Science", 
        details: "Completed a comprehensive course on data science and machine learning.", 
        issuedBy: "Scaler" 
      },
    ].map((cert, index) => (
      <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold">{cert.title}</h3>
        <p className="text-gray-400 mt-2">{cert.details}</p> {/* ✅ Now showing details */}
        <p className="text-blue-300 mt-2"><strong>Issued by:</strong> {cert.issuedBy}</p>
      </div>
    ))}
  </div>
</section>


      {/* Projects Section */}
<section id="projects" className="py-20 text-center px-8">
  <h2 className="text-4xl font-bold mb-6">Projects</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
    {[
      {
        image: "https://media.istockphoto.com/id/489647803/photo/message.jpg?s=1024x1024&w=is&k=20&c=UCB2NYicDqiTgKrpwqSR6-sZiY33K83FbfK9kSe5Gqo=",
        title: "Spam News Detection Tool",
        description: "An AI-powered tool that classifies news as real or fake using NLP and machine learning.",
        skills: "Python, NLP, Machine Learning",
        link: "https://github.com/spam-news-detection",
      },
      {
        image: "https://plus.unsplash.com/premium_photo-1664300897489-fd98eee64faf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Library Management System",
        description: "A system for admins to manage books, track loans, and organize digital resources.",
        skills: "PHP, MySQL, HTML, CSS",
        link: "https://github.com/library-management",
      },
      {
        image: "https://plus.unsplash.com/premium_photo-1661775221909-11fc3c0c0891?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8am9iJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D",
        title: "Job Description Portal",
        description: "A job listing platform where companies can post job openings and candidates can apply.",
        skills: "React, Node.js, PHP, Tableau",
        link: "https://github.com/job-portal",
      },
      {
        image: "https://images.unsplash.com/photo-1649734926695-1b1664e98842?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFtYXpvbiUyMGxvZ298ZW58MHx8MHx8fDA%3D",
        title: "Amazon Clone",
        description: "A fully functional e-commerce website replicating Amazon with user authentication and cart system.",
        skills: "React, Tailwind CSS",
        link: "https://github.com/amazon-clone",
      },
    ].map((project, index) => (
      <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded" />
        <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
        <p className="text-gray-400 mt-2">{project.description}</p>
        <p className="text-gray-300 mt-2"><strong>Skills:</strong> {project.skills}</p>
        <div className="mt-3">
          <a href={project.link} className="text-blue-400 hover:text-blue-300 transition">View on GitHub</a>
        </div>
      </div>
    ))}
  </div>
</section>
{/* Contact Section */}
<section id="contact" className="py-20 flex flex-col items-center text-center px-8">
  <h2 className="text-4xl font-bold">Contact Me</h2>
  <p className="text-gray-400 mt-3">
    Let's collaborate! Reach out via email or phone.
  </p>
  
  {/* Contact Details */}
  <div className="mt-4 space-y-3">
    <p className="text-lg">
      <FaEnvelope className="inline-block mr-2 text-blue-400" />
      <a href="mailto:nitinkakumanu04@gmail.com" className="text-blue-400">nitinkakumanu04@gmail.com</a>
    </p>
    <p className="text-lg">
      <FaPhone className="inline-block mr-2 text-blue-400" />
      <span className="text-gray-300">+91 9392014754</span>
    </p>
  </div>

  {/* Contact Me Button */}
  <button
    onClick={() => window.location.href = "mailto:nitinkakumanu04@gmail.com"}
    className="mt-6 bg-green-500 px-6 py-3 rounded-lg text-white font-semibold hover:bg-green-600 transition"
  >
    Contact Me
  </button>
</section>

    </div>
  );
}