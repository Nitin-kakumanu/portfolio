// components/NavigationBar.jsx
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function NavigationBar() {
 const navLinks = [
   { name: "Home", path: "/" },
   { name: "Skills", path: "/skills" },
   { name: "Projects", path: "/projects" },
   { name: "Certificates", path: "/certificates" },
   { name: "Contact", path: "/contact" },
 ];

 return (
   <nav className="fixed top-0 left-0 w-full backdrop-blur-sm bg-orange-200/30 border-b border-orange-300/50 z-50">
     <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
       <motion.div 
         className="text-orange-600 text-2xl font-bold tracking-wider"
         animate={{ 
           textShadow: [
             "0 0 10px rgba(234, 88, 12, 0.3)",
             "0 0 20px rgba(234, 88, 12, 0.5)",
             "0 0 10px rgba(234, 88, 12, 0.3)"
           ]
         }}
         transition={{ duration: 3, repeat: Infinity }}
       >
         🐚 Nitin's Reef
       </motion.div>
       <div className="flex gap-6">
         {navLinks.map((link) => (
           <NavLink
             key={link.path}
             to={link.path}
             className={({ isActive }) =>
               `text-orange-700 hover:text-orange-900 transition duration-300 font-medium relative ${
                 isActive ? "border-b-2 border-orange-600" : ""
               }`
             }
           >
             <motion.span
               whileHover={{ 
                 scale: 1.05,
                 textShadow: "0 0 8px rgba(194, 65, 12, 0.6)"
               }}
             >
               {link.name}
             </motion.span>
           </NavLink>
         ))}
       </div>
     </div>
   </nav>
 );
}

export default NavigationBar;