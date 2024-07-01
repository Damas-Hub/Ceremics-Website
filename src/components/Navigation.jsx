// import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';
// import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
// import { Link as ScrollLink } from "react-scroll";

// const Navigation = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const Links = [
//     { name: "Home", link: "home" },
//     { name: "About me", link: "about" },
//     { name: "Projects", link: "projects" },
//     { name: "Contact", link: "contact" },
//   ];

//   return (
//     <div className="w-full max-w-8xl">
//       <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
//         {/* Wrap the logo in a Link component */}
//         <ScrollLink
//           to="home"
//           smooth={true}
//           spy={true}
//           className="font-bold text-3xl cursor-pointer flex items-center gap-1"
//         >
//           <span className="text-primary hover:text-white">
//             <img src="/icons/hub.JPG" alt="Logo" className="w-15 h-12" />
//           </span>
//         </ScrollLink>

//         <div
//           onClick={toggleMobileMenu}
//           className="absolute right-3 top-4 cursor-pointer md:hidden w-10 h-5 text-white"
//         >
//           {isMobileMenuOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />}
//         </div>

//         <ul
//           className={`md:flex md:items-center md:pb-0 absolute md:static  md:z-auto z-10 left-0 w-full md:w-auto mt-4 md:mt-0 md:pl-0 pl-9 bg-slate-700 sm:bg-transparent transition-all duration-500 ease-in ${
//             isMobileMenuOpen ? "top-12" : "top-[-490px]"
//           }`}
//         >
//           {Links.map((link) => (
//             <li className="md:ml-8 md:my-0 my-5 font-semibold" key={link.name}>
//               <ScrollLink
//                 to={link.link}
//                 smooth={true}
//                 spy={true}
//                 className="text-tertiary hover:text-white duration-500 cursor-pointer"
//               >
//                 {link.name}
//               </ScrollLink>
//             </li>
//           ))}
//           <li className="md:ml-8 md:my-0 my-5 font-semibold">
//             <button
//               className="text-tertiary hover:text-white duration-500 cursor-pointer"
//               onClick={() => navigate('/blog')}
//             >
//               Blog
//             </button>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navigation;