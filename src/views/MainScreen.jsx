import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import portfolioBg from "../assets/portfolio-bg.svg";
import profile from "../assets/faizan.jpg";
import { Link } from 'lucide-react'

const MainScreen = () => {
  const location = useLocation();

  return (
    <div
      className="min-h-screen font-lato font-normal bg-cover bg-center flex flex-col items-center text-white"
      style={{ backgroundImage: `url(${portfolioBg})` }}
    >
      <div className="w-full max-w-2xl px-4 ml-52 my-28 flex flex-col items-start">
        <div className="flex flex-col items-start mb-6">
          <div className="rounded-full overflow-hidden w-24 h-24 mb-4">
            <img
              src={profile}
              alt="Faizan Khan"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-2xl mb-4">hi, i'm Faizan Khan</h1>
        </div>

        <nav className="flex flex-wrap gap-4 mb-8 underline ">
          <a href="/about" className="hover:underline transition-transform duration-300 ease-in-out hover:-translate-y-1">about</a>
          <a href="/projects" className="hover:underline transition-transform duration-300 ease-in-out hover:-translate-y-1">projects</a>
          <a href="/talks" className="hover:underline transition-transform duration-300 ease-in-out hover:-translate-y-1">talks</a>
          <a href="/blogs" className="hover:underline transition-transform duration-300 ease-in-out hover:-translate-y-1">blogs</a>
          <a href="https://github.com/gfaizank" className="hover:underline transition-transform duration-300 ease-in-out hover:-translate-y-1">github</a>
          <a href="/hobbies" className="hover:underline transition-transform duration-300 ease-in-out hover:-translate-y-1">hobbies</a>
        </nav>

        {location.pathname === "/" ? (
          <p className="text-left w-[400px]">
            i'm a full stack engineer who loves to craft beautiful products on
            web. i'm currently working as a founding full stack engineer at
            @<span className="underline">stealth startup</span> in the AI space, where i handle all the frontend design, backend
            infra, platform and core features development. i've previously
            worked with amazing companies like @<span className="underline">inzint</span>, @<span className="underline">urban-space</span> & @<span className="underline">amazon</span>.
            i love to build projects and experiment with new stuff in tech.
            Currently, i'm exploring AI / LLMs, Kubernetes environment and
            advanced animations.
          </p>
        ) : (
          <Outlet />
        )}
      </div>

      <div className="fixed bottom-10 left-12">
        <Link color="white" size={24} />
      </div>
    </div>
  );
};

export default MainScreen;