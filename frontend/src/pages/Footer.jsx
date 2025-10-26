import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo or Name */}
        <div className="text-2xl font-semibold">
          <span className="text-[#fdd700]">Kamil.KAT</span>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-8 text-sm">
          <a href="#home" className="hover:text-[#fdd700] duration-200">Home</a>
          <a href="#projects" className="hover:text-[#fdd700] duration-200">Projects</a>
          <a href="#about" className="hover:text-[#fdd700] duration-200">About</a>
          <a href="#contact" className="hover:text-[#fdd700] duration-200">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 text-xl">
          <a href="https://github.com/kamilakhtartanoli" target="_blank" rel="noreferrer">
            <FaGithub className="hover:text-[#fdd700] transition duration-200" />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-kamil-41a148326/" target="_blank" rel="noreferrer">
            <FaLinkedin className="hover:text-[#fdd700] transition duration-200" />
          </a>
          <a href="mailto:akhtartanoli23@gmail.com">
            <FaEnvelope className="hover:text-[#fdd700] transition duration-200" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
