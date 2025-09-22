import { Link } from "react-router-dom";

function Home() {
  const features = [
      { title: "Mood Tracker", desc: "Log your daily mood and see trends.", link: "/mood-tracker" },
    { title: "Music", desc: "Write your thoughts and track your emotions.", link: "/journal" },
    { title: "Meditation", desc: "Follow guided meditation exercises.", link: "/meditation" },
    { title: "Contact Us", desc: "Go through with the following contacts to connect with us.", link: "/resources"}
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Hero Section */}
      <section className="text-center py-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to <span className="text-blue-600 dark:text-blue-400 hover:text-green-500">QuantaLite</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-500 mb-6">
          Your personal mental wellness companion. Journal, track moods, meditate, and grow.
        </p>
        <Link
          to="/journal"
          className="bg-blue-600 dark:bg-blue-400 text-white dark:text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-green-500 transition-colors"
        >
          Get Started
        </Link>
      </section>

      {/* Features Section */}
      <section className=" grid  md:grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
        {features.map((f, i) => (
          <Link key={i} to={f.link} className="p-8 rounded-lg shadow-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-green-700 transition-all hover:scale-110 duration-400 ">
            <h3 className="text-xl font-bold mb-2">{f.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{f.desc}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}

export default Home;