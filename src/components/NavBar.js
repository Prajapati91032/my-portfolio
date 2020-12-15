import React from "react"
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";


export default function NavBar() {
    return (
        <header className="bg-gray-800">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact activeClassName="text-white-100" className="inflex-flex items-center py-6 px-3 mr-4 text-red-800 hover:text-green-300 text-4xl font-bold cursive tracking-widest">
                        Rahul
                    </NavLink>
                    <NavLink to="/post" className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-300" activeClassName="text-red-600">
                        Blog Post
                    </NavLink>
                    <NavLink to="/project" className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-300" activeClassName="text-red-600">
                        Projects
                    </NavLink>
                    <NavLink to="/about" className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-300" activeClassName="text-red-600">
                        About Me!
                    </NavLink>                    
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://github.com/Prajapati91032" className="mr-4" target="_blank" fgcolor="#fff" style={{ height: 35, width: 35 }} />
                    <SocialIcon url="https://www.youtube.com" className="mr-4" target="_blank" fgcolor="#fff" style={{ height: 35, width: 35 }} />
                    <SocialIcon url="https://www.linkedin.com/in/rahul-prajapati-3363801b5" className="mr-4" target="_blank" fgcolor="#fff" style={{ height: 35, width: 35 }} />                
                </div>
            </div>
        </header>
    )
}