const VolunteerExp = () => {
  return (
    <section id="volunteer" className="pt-10 pb-16">
      <div className="px-2 mb-12 text-center lg:mb-16">
        <h2>Volunteer Experience</h2>
        <p className="max-w-2xl px-4 mx-auto text-lg text-gray-800 sm:px-10 md:text-xl md:max-w-3xl md:px-0">
          Here you will find some voluntary work I engaged myself in order to
          build my skills and increase my experience level.
        </p>
      </div>

      <div className="container mx-auto max-w-7xl px-4 flex justify-around text-gray-800 sm:px-10 md:space-x-6 lg:space-x-0">
        <div className="hidden text-lg font-semibold md:block">
          <p>Jan 2024 - Present</p>
          <p>India | Remote</p>
        </div>
        <div>
          <h3>Open Source Contributor</h3>
          <p className="text-lg font-semibold italic md:mb-2">
            Across Organizations
          </p>
          <div className="font-semibold mb-2 md:hidden">
            <p>Jan 2024 - Present</p>
            <p>India | Remote</p>
          </div>
          <p className="max-w-2xl text-lg">
            • I helped building the landing page of{' '}
            <span className="font-semibold">Resonate-Website</span>, a part of{' '}
            <span className="font-semibold">AOSSIE</span> org. from the figma
            design provided.
          </p>
          <p className="text-lg mb-2">
            • Fixed a bug related to margin in the Logout dropdown in{' '}
            <span className="font-semibold">Horizon-UI</span>, the trendiest &
            innovative Open Source Admin Dashboard Template for Tailwind CSS &
            React!
          </p>
          <p className="text-lg mb-2">
            • Fixed a bug related to AOS not working for "projects" card for{' '}
            <span className="font-semibold">gdscsmit.github.io</span>, a{' '}
            <span className="font-semibold">Hacktoberfest </span>repository!
          </p>
          <p className="text-lg">
            <span className="font-semibold">Tools Used: </span>
            React, Tailwind CSS, Git, GitHub, AOS
          </p>
        </div>
      </div>
    </section>
  );
};

export default VolunteerExp;
