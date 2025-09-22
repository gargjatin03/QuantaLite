function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-center">
      {/* Heading */}
      <h1 className="text-4xl font-extrabold mb-6">About 
        <span className="text-blue-500 dark:text-blue-400 hover:text-green-500"> QuantaLite</span> 
      </h1>

      {/* Intro */}
      <p className="text-lg text-gray-700 dark:text-gray-600 leading-relaxed mb-10">
        QuantaLite is your personal mental wellness companion 🌱.  
        Built entirely with <span className="font-semibold">React, TailwindCSS, and JavaScript</span>, 
        this platform helps you track moods, journal your feelings, meditate, and explore wellness resources – 
        all without any hesitation.
      </p>

      {/* Features Section */}
      <div className="grid md:grid-cols-2 gap-8 text-left">
        <div className="bg-gray-300 dark:bg-gray-800 p-6 rounded-lg shadow hover:bg-green-700 transition-all hover:scale-110 duration-400">
          <h2 className="text-xl text-gray-300 font-bold mb-3">📝 Relaxation Music</h2>
          <p className="text-gray-300">
            Write down your thoughts, reflect on your day, and let our mood analysis 
            suggest personalized meditation and music to uplift your mind.
          </p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow hover:bg-green-700 transition-all hover:scale-110 duration-400">
          <h2 className="text-xl font-bold mb-3 text-gray-300">📊 Mood Tracking</h2>
          <p className="text-gray-300">
            Track your emotions with simple inputs and interactive charts. 
            Over time, see patterns and gain self-awareness.
          </p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow hover:bg-green-700 transition-all hover:scale-110 duration-400">
          <h2 className="text-xl font-bold mb-3 text-gray-300">🌿 Meditation & Yoga</h2>
          <p className="text-gray-300">
            Explore guided breathing exercises, meditation practices, and yoga 
            routines like Sun Salutations to refresh your body and mind.
          </p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow hover:bg-green-700 transition-all hover:scale-110 duration-400">
          <h2 className="text-xl font-bold mb-3 text-gray-300">📚 Resources</h2>
          <p className="text-gray-300">
            Access helpful tools, articles, and playlists to support your journey 
            toward mindfulness, positivity, and emotional balance.
          </p>
        </div>
      </div>

      {/* Closing Note */}
      <div className="mt-12 bg-blue-500 dark:bg-blue-700 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-white">💡 Our Mission</h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          We believe mental wellness should be accessible to everyone.  
          QuantaLite is designed as a **lightweight, offline-first, and free-to-use** tool 
          to help you nurture mindfulness and emotional resilience.  
        </p>
      </div>
    </div>
  );
}

export default About;