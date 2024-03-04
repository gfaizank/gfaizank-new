import { ButtonSmall } from '../UI/Button';
import laonImg from '../../assets/laonImg.png';
import bettershotzImg from '../../assets/bettershotzImg.png';

const Projects = () => {
  return (
    <section id="projects" className="pt-16 pb-16 bg-[#fdf2e9]">
      <div className="px-2 mb-12 text-center md:mb-16">
        <h2>Projects</h2>
        <p className="max-w-2xl px-4 mx-auto text-lg text-gray-800 sm:px-10 md:text-xl md:max-w-3xl md:px-0">
          Here you will find some of the personal projects that I created from
          scratch based on my current skillset. Click on the live link to find
          out more about each project.
        </p>
      </div>

      <div className="container mx-auto max-w-7xl flex flex-col items-center justify-between space-y-6 px-2 mb-16 md:flex-row md:space-y-0 md:space-x-4 md:px-8 lg:px-20 xl:space-x-24 xl:px-24">
        <div className="pl-10 w-11/12 sm:w-3/4 md:w-3/5 lg:w-1/2 md:pl-0">
          <img src={laonImg} alt="Laon E-commerce" className="w-full" />
        </div>
        <div className="text-center md:w-1/2 md:text-left">
          <h3 className="mb-4">CrytoFizz</h3>
          <p className="max-w-lg mb-2 text-gray-800 md:text-lg">
            CrytoFizz is a Crypto tracking platform that targets consumers
            wanting to buy Cryptocurrenices at best prices. It is a Crypto app,
            making use of <span className="font-semibold">CoinGecko api</span>{' '}
            to show data with{' '}
            <span className="font-semibold">React charts</span> and tables in
            real time. Context API has been used for state management with
            Tailwind's unique plugin{' '}
            <span className="font-semibold">"tailwind scrollbar"</span> for
            better UX.
          </p>
          <p className="mb-8 text-gray-800 md:text-lg">
            <span className="text-lg font-semibold">Tools Used:</span> Reactjs,
            Context API, Tailwind Css, CoinGecko API, React Charts and Netlify.
          </p>

          <ButtonSmall link="https://crytofizz.netlify.app/" text="Live Link" />
        </div>
      </div>

      <div className="container mx-auto max-w-7xl flex flex-col-reverse items-center justify-between space-y-reverse space-y-6 px-2 md:flex-row md:space-y-0 md:space-x-4 md:px-8 lg:px-20 xl:space-x-24 xl:px-24">
        <div className="text-center md:w-1/2 md:text-left">
          <h3 className="mb-4">Video Calling Web App</h3>
          <p className="max-w-lg mb-2 text-gray-800 md:text-lg">
            I re-created the web app of{' '}
            <span>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://meet.google.com/"
                className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600 font-bold"
              >
                Google Meet
              </a>
            </span>{' '}
            because of the intriguing tech stacks used in it. It is a
            Professionally created video calling web app built to provide a 100%
            cross platform video communication utility with absolutely no local
            dependancies.
          </p>
          <p className="mb-8 text-gray-800 md:text-lg">
            <span className="text-lg font-semibold">Tools Used:</span> Nodejs,
            Expressjs, Reactjs, WebRTC, Socket.io
          </p>

          <ButtonSmall
            link="https://github.com/gfaizank/Video_Calling_Application"
            text="Code Link"
          />
        </div>
        <div className="pl-10 w-11/12 sm:w-3/4 md:w-3/5 lg:w-1/2 md:pl-0">
          <img src={bettershotzImg} alt="GoogleMeet" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
