import React from "react";
import { motion } from "framer-motion";
import { SiMysql } from "react-icons/si";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react"; 
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { FaPython, FaDatabase, FaBrain, FaHtml5, FaCss3, FaJs, FaReact, FaPhp } from "react-icons/fa";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen relative">
      
    {/* Navbar */}
    <nav className="bg-gray-900 text-white py-4 px-6 fixed w-full top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="#" className="text-3xl font-extrabold text-blue-400">Portfolio</a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-lg">
            <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
            <li><a href="#skills" className="hover:text-blue-400 transition">Skills</a></li>
            <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
            <li><a href="#certificates" className="hover:text-blue-400 transition">Certificates</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
          </ul>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 text-lg bg-black shadow-md py-4 absolute top-16 left-0 w-full">
          <li><a href="#home" className="hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#skills" className="hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#certificates" className="hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>Certificates</a></li>
          <li><a href="#contact" className="hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      )}
      </nav>


      {/* Home Section */}
      {/* Home Section */}
{/* Home Section */}
{/* Home Section - Prevent Overlap with Navbar */}
<section id="home" className="min-h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left px-6 sm:px-10 md:px-20 pt-20">

  {/* Left Side - Text Content */}
  <div className="flex flex-col items-center md:items-start md:w-1/2">
    {/* Animated Intro Text */}
    <motion.h1 
  className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white mt-4 text-center"
  style={{ wordBreak: "break-word", whiteSpace: "nowrap", maxWidth: "100%" }}
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
>
  Hi, I'm <span className="text-blue-400">Nitin Kakumanu</span>
</motion.h1>




    {/* Description */}
    <motion.p 
      className="text-gray-300 text-sm sm:text-lg md:text-xl mt-4 px-2 sm:px-8 max-w-3xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
     I'm Nitin, a passionate Web Developer, AI Enthusiast, and Data Science Explorer. I love crafting dynamic, intelligent, and user-friendly applications that merge innovation with functionality.
    </motion.p>

    {/* Social Media Icons */}
    <motion.div 
      className="mt-6 flex space-x-4 sm:space-x-6"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.8 }}
    >
      <a href="https://github.com/Nitin-kakumanu" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-white hover:text-gray-400 transition" size={30} />
      </a>
      <a href="https://www.linkedin.com/in/nitin-kakumanu-92b88a27b?" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-blue-400 hover:text-blue-300 transition" size={30} />
      </a>
      <a href="mailto:nitinkakumanu04@gmail.com">
        <FaEnvelope className="text-red-400 hover:text-red-300 transition" size={30} />
      </a>
    </motion.div>
  </div>

  {/* Right Side - Profile Image (Desktop & Tablet View) */}
  <motion.div 
    className="md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0"
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
  >
    <img 
      src="/nitin2.jpeg" 
      alt="Profile" 
      className="w-72 h-72 md:w-96 md:h-96 rounded-lg shadow-lg object-cover border-4 border-gray-500 hover:scale-105 transition"
    />
  </motion.div>

</section>




      {/* Skills Section */}
      <section id="skills" className="py-20 text-center px-8">
        <h2 className="text-4xl font-bold mb-6">My Skills</h2>
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {[ 
            { Icon: FaHtml5, color: "text-orange-500", name: "HTML" },
            { Icon: FaCss3, color: "text-blue-500", name: "CSS" },
            { Icon: FaJs, color: "text-yellow-500", name: "JavaScript" },
            { Icon: FaReact, color: "text-cyan-400", name: "React" },
            { Icon: FaPhp, color: "text-purple-500", name: "PHP" },
            { Icon: FaPython, color: "text-blue-400", name: "Python" },
            { Icon: SiMysql, color: "text-blue-600", name: "SQL" },
            { Icon: FaBrain, color: "text-green-500", name: "ML" }
          ].map(({ Icon, color, name }, index) => (
            <motion.div key={index} className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-110 transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Icon className={`text-5xl ${color}`} />
              <p className="text-gray-300 mt-2 text-lg">{name}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 text-center px-8 bg-gray-900 text-white">
  {/* Animated Title */}
  <motion.h2 
    className="text-5xl font-extrabold mb-12 text-blue-400"
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    Certificates
  </motion.h2>

  <motion.div 
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
    initial="hidden"
    whileInView="visible"
    transition={{ staggerChildren: 0.2 }}
    viewport={{ once: true }}
  >
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
      <motion.div 
        key={index} 
        className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-blue-500 transform hover:scale-105 transition overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold text-blue-300">{cert.title}</h3>
        <p className="text-gray-400 mt-2">{cert.details}</p>
        <p className="text-blue-300 mt-3 font-semibold"><strong>Issued by:</strong> {cert.issuedBy}</p>
      </motion.div>
    ))}
  </motion.div>
</section>



      {/* Projects Section */}
      <section id="projects" className="py-20 text-center px-8 bg-gray-900 text-white">
  {/* Animated Title */}
  <motion.h2 
    className="text-5xl font-extrabold mb-12 text-blue-400"
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    My Projects
  </motion.h2>

  {/* Animated Project Cards */}
  <motion.div 
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
    initial="hidden"
    whileInView="visible"
    transition={{ staggerChildren: 0.2 }}
    viewport={{ once: true }}
  >
    {[
      {
        image: "https://media.istockphoto.com/id/489647803/photo/message.jpg?s=1024x1024&w=is&k=20&c=UCB2NYicDqiTgKrpwqSR6-sZiY33K83FbfK9kSe5Gqo=",
        title: "Spam News Detection Tool",
        description: "An AI-powered tool that classifies news as real or fake using NLP and machine learning.",
        skills: "Python, NLP, Machine Learning",
        link: "https://github.com/spam-news-detection",
        deployedLink: "https://spam-news-detection.vercel.app"
      },
      {
        image: "https://plus.unsplash.com/premium_photo-1664300897489-fd98eee64faf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Library Management System",
        description: "A system for admins to manage books, track loans, and organize digital resources.",
        skills: "PHP, MySQL, HTML, CSS",
        link: "https://github.com/library-management",
        deployedLink: "https://library-management.example.com"
      },
      {
        image: "https://plus.unsplash.com/premium_photo-1661775221909-11fc3c0c0891?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Job Description Portal",
        description: "A job listing platform where companies can post job openings and candidates can apply.",
        skills: "React, Node.js, PHP, Tableau",
        link: "https://github.com/job-portal",
        deployedLink: "https://job-portal.example.com"
      },
      {
        image: "https://images.unsplash.com/photo-1649734926695-1b1664e98842?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFtYXpvbiUyMGxvZ298ZW58MHx8MHx8fDA%3D",
        title: "Amazon Clone",
        description: "A fully functional e-commerce website replicating Amazon with user authentication and cart system.",
        skills: "React, Tailwind CSS",
        link: "https://github.com/amazon-clone",
        deployedLink: "https://amazon-clone.example.com"
      },
      {
        image: "https://media.istockphoto.com/id/864811534/photo/human-resources-crm-and-recruitment-business-concept-copy-space.jpg?s=1024x1024&w=is&k=20&c=-npxDEXyKiNsAp1opvY8bwcwQdP_-VSEo1MpN_oJk-Q=",
        title: "Job Searching Portal",
        description: "A web-based platform that helps users find jobs based on their skills and preferences.",
        skills: "React, Firebase, Express.js, Tailwind CSS",
        link: "https://github.com/job-searching-portal",
        deployedLink: "https://job-searching-portal.example.com"
      },
      {
        image: "https://plus.unsplash.com/premium_photo-1664299072583-584882c00a5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJhdWQlMjBkZXRlY3Rpb258ZW58MHx8MHx8fDA%3D",
        title: "Fraud Detection Tool",
        description: "A machine learning-based system that detects fraudulent transactions in real-time.",
        skills: "Python, TensorFlow, Scikit-Learn, Flask",
        link: "https://github.com/fraud-detection-tool",
        deployedLink: "https://fraud-detection-tool.example.com"
      }
    ].map((project, index) => (
      <motion.div 
        key={index} 
        className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition overflow-hidden border border-gray-700 hover:border-blue-500"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Image Animation */}
        <motion.img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-44 object-cover rounded-lg shadow-md hover:scale-105 transition"
          whileHover={{ scale: 1.05 }}
        />
        
        <h3 className="text-2xl font-semibold mt-4 text-blue-300">{project.title}</h3>
        <p className="text-gray-400 mt-2">{project.description}</p>
        <p className="text-gray-300 mt-2"><strong>Skills:</strong> {project.skills}</p>
        <div className="mt-4 flex justify-center gap-4">
          <a href={project.link} target="_blank" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition shadow-md">GitHub</a>
          <a href={project.deployedLink} target="_blank" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition shadow-md">Live Demo</a>
        </div>
      </motion.div>
    ))}
  </motion.div>
</section>


{/* Contact Section */}
<section id="contact" className="py-20 flex flex-col items-center text-center px-8">
  {/* Contact Box Wrapper */}
  <motion.div 
    className="bg-gray-900 border border-gray-700 rounded-lg p-8 shadow-lg max-w-lg w-full transform transition hover:shadow-xl hover:border-gray-500"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    {/* Animated Title */}
    <motion.h2 
      className="text-4xl font-bold text-white"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      Contact Me
    </motion.h2>

    {/* Animated Description */}
    <motion.p 
      className="text-gray-400 mt-3 text-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      Let's collaborate! Reach out via email or phone.
    </motion.p>

    {/* Contact Details with Animation */}
    <motion.div 
      className="mt-6 space-y-4"
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true }}
    >
      <motion.p 
        className="text-lg flex items-center justify-center space-x-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <FaEnvelope className="text-blue-400 text-2xl hover:scale-110 transition transform" />
        <a href="mailto:nitinkakumanu04@gmail.com" className="text-blue-400 hover:text-blue-300 transition">
          nitinkakumanu04@gmail.com
        </a>
      </motion.p>

      <motion.p 
        className="text-lg flex items-center justify-center space-x-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        <FaPhone className="text-green-400 text-2xl hover:scale-110 transition transform" />
        <span className="text-gray-300 hover:text-white transition">{"+91 9392014754"}</span>
      </motion.p>
    </motion.div>

    {/* Call-to-Action Button */}
    <motion.button
      onClick={() => window.location.href = "mailto:nitinkakumanu04@gmail.com"}
      className="mt-6 bg-green-500 px-6 py-3 rounded-lg text-white font-semibold hover:bg-green-600 hover:scale-105 transition transform shadow-lg"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      viewport={{ once: true }}
    >
      Contact Me
    </motion.button>
  </motion.div>
</section>



    </div>
  );
}