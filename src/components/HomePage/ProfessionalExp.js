const ProfessionalExp = () => {
  return (
    <section id="professional" className="pt-10 pb-16">
      <div className="px-2 mb-12 text-center lg:mb-16">
        <h2>Professional Experience</h2>
        <p className="max-w-2xl px-4 mx-auto text-lg text-gray-800 sm:px-10 md:text-xl md:max-w-3xl md:px-0">
          Here you will find some professional work I engaged myself in order to
          build my skills and increase my experience level.
        </p>
      </div>

      <div className="container mx-auto max-w-7xl px-4 mb-10 flex justify-around text-gray-800 sm:px-10 md:space-x-6 lg:space-x-0">
        <div className="hidden text-lg font-semibold md:block">
          <p>Jan 2024 - Present</p>
          <p>India | Remote</p>
        </div>
        <div>
          <h3>Software Developer-Full Stack</h3>
          <p className="text-lg font-semibold italic md:mb-2">Inzint</p>
          <div className="font-semibold mb-2 md:hidden">
            <p>Jan 2024 - Present</p>
            <p>India | Remote</p>
          </div>
          <p className="max-w-2xl text-lg mb-2">
            • Co-Led the development of{' '}
            <span className="font-semibold">Travelr - AI</span> project,
            integrating Next.js, Context & useReducer, Express and Firebase
            Cloud Functions for a robust travel planning application.
          </p>
          <p className="text-lg mb-2">
            • Integrated custom <span className="font-semibold">OpenAI</span>{' '}
            endpoint for itinerary generation and{' '}
            <span className="font-semibold">Travelpedia's API</span> for place
            suggestions. Also devised an algorithm to minimize OpenAI endpoint
            latency, ensuring quick itinerary suggestions.
          </p>
          <p className="text-lg mb-2">
            • Built a Native App name Accrepro for a potential client using <span className="font-semibold">React Native</span> and styled using Tailwind Css integrated via Native Wind. Redux Toolkit was used for state management.
          </p>
          <p className="text-lg mb-2">
            • Developed Inzint's in house <span className="font-semibold">CRM web app</span> using Reactjs, Tailwind CSS, Context API, Nodejs, Express, Typescript and MongoDB. Best Frontend Practices were used to minimise api calls by <span className="font-semibold">using custom hooks. React lazy loading and Reusable components</span> were also used for increased efficiency.
          </p>
          <p className="text-lg">
            <span className="font-semibold">Toolsets: </span>
            Nextjs, Reactjs Context API, Nodejs, Express, Javascript, AWS,
            Firebase Cloud Functions & Redis.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 mb-10 flex justify-around text-gray-800 sm:px-10 md:space-x-6 lg:space-x-0">
        <div className="hidden text-lg font-semibold md:block">
          <p>Mar 2023 - Dec 2023</p>
          <p>India | Remote</p>
        </div>
        <div>
          <h3>Full Stack Developer</h3>
          <p className="text-lg font-semibold italic md:mb-2">Urban Space</p>
          <div className="font-semibold mb-2 md:hidden">
            <p>Mar 2023 - Dec 2023</p>
            <p>India | Remote</p>
          </div>
          <p className="max-w-2xl text-lg mb-2">
            • Implemented best Frontend ecosystem design patterns for better
            code implementation.
          </p>
          <p className="max-w-2xl text-lg mb-2">
            • Built the recommendation system from scratch which powered, the
            Customer Home-Screen. It included building features based on
            different customer, device, and locale-based metrics which increased
            the conversion of the user from Homescreen to Cart by 2%.
          </p>
          <p className="max-w-2xl text-lg">
            <span className="font-semibold">Toolsets: </span>
            React.js, Next.js, Redux, Node.js, Express, Javascript, Frontend
            Design Patterns, Material UI and other Design Libraries.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 flex justify-around text-gray-800 sm:px-10 md:space-x-6 lg:space-x-0">
        <div className="hidden text-lg font-semibold md:block">
          <p>May 2022 - Jan 2023</p>
          <p>India | Hyderabad</p>
        </div>
        <div>
          <h3>Support Engineer</h3>
          <p className="text-lg font-semibold italic md:mb-2">Amazon</p>
          <div className="font-semibold mb-2 md:hidden">
            <p>May 2022 - Jan 2023</p>
            <p>India | Hyderabad</p>
          </div>
          <p className="max-w-2xl text-lg mb-2">
            • Designed and seamlessly integrated a user-centric chatbot
            utilizing React.js & Nodejs, adhering to microservices architecture
            and integrated it with Amazon Search.
          </p>
          <p className="text-lg mb-2">
            • Implemented Bundle Split due to which the main bundle delivery
            size came to around 33% of its initial size. This lead to an
            increase of 4% in the page loading time
          </p>
          {/* <p className="text-lg mb-2">
            • Assisting with the UI/UX planning of the company's website
          </p> */}
          <p className="text-lg">
            <span className="font-semibold">Toolsets: </span>
            Reactjs, Redux, Javascript, Nodejs, Bash, AWS, Data Analytics.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExp;
