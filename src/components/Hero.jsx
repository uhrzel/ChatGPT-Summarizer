import { logo } from '../assets';
import React from 'react';
const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => window.open('https://github.com/uhrzel')}
          className="black_btn"
        >
          github
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Article with <br className='max-md:hidden' />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with summarize, an open-source article summarrizer that transforms lengthy
      </h2>
    </header>
  );
};

export default Hero;
