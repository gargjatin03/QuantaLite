import { useState } from "react";

function Journal() {
  const [entry, setEntry] = useState("");
  const [mood, setMood] = useState("");
  const [suggestions, setSuggestions] = useState(null);

  const moodMap = {
    happy: {
      meditation: "Gratitude Meditation",
      music: [
        "https://www.youtube.com/embed/ZToicYcHIOU",
        "https://www.youtube.com/embed/2OEL4P1Rz04",
        "https://www.youtube.com/embed/DH1U6GJ71YY",
        "https://www.youtube.com/embed/jfKfPfyJRdk",
        "https://www.youtube.com/embed/36m1o-tM05g"
      ],
      lastfm: [
        { artist: "Pharrell Williams", url: "https://www.last.fm/music/Pharrell+Williams" },
        { artist: "Coldplay", url: "https://www.last.fm/music/Coldplay" },
        { artist: "Imagine Dragons", url: "https://www.last.fm/music/Imagine+Dragons" },
        { artist: "Khalid", url: "https://www.last.fm/music/Khalid" },
        { artist: "Maroon 5", url: "https://www.last.fm/music/Maroon+5" }
      ]
    },
    sad: {
      meditation: "Loving-Kindness Meditation",
      music: [
        "https://www.youtube.com/embed/hlWiI4xVXKY",
        "https://www.youtube.com/embed/fLexgOxsZu0",
        "https://www.youtube.com/embed/2OEL4P1Rz04",
        "https://www.youtube.com/embed/lFcSrYw-ARY",
        "https://www.youtube.com/embed/IUN664s7N-c"
      ],
      lastfm: [
        { artist: "Adele", url: "https://www.last.fm/music/Adele" },
        { artist: "Billie Eilish", url: "https://www.last.fm/music/Billie+Eilish" },
        { artist: "Sam Smith", url: "https://www.last.fm/music/Sam+Smith" },
        { artist: "Lewis Capaldi", url: "https://www.last.fm/music/Lewis+Capaldi" },
        { artist: "Ed Sheeran", url: "https://www.last.fm/music/Ed+Sheeran" }
      ]
    },
    stressed: {
      meditation: "Breathing Meditation",
      music: [
        "https://www.youtube.com/embed/2OEL4P1Rz04",
        "https://www.youtube.com/embed/yQFQx4lJ6Rk",
        "https://www.youtube.com/embed/pHzAVDg4m1Q",
        "https://www.youtube.com/embed/CcsUYu0PVxY",
        "https://www.youtube.com/embed/1ZYbU82GVz4"
      ],
      lastfm: [
        { artist: "Lo-Fi Beats", url: "https://www.last.fm/music/Lo-Fi+Beats" },
        { artist: "Chillhop", url: "https://www.last.fm/music/Chillhop" },
        { artist: "Bon Iver", url: "https://www.last.fm/music/Bon+Iver" },
        { artist: "Sigur Rós", url: "https://www.last.fm/music/Sigur+R%C3%B3s" },
        { artist: "Explosions in the Sky", url: "https://www.last.fm/music/Explosions+in+the+Sky" }
      ]
    },
    angry: {
      meditation: "Mindful Awareness Meditation",
      music: [
        "https://www.youtube.com/embed/1ZYbU82GVz4",
        "https://www.youtube.com/embed/d-diB65scQU",
        "https://www.youtube.com/embed/DH1U6GJ71YY",
        "https://www.youtube.com/embed/OtOIv7VK0Hs",
        "https://www.youtube.com/embed/tgbNymZ7vqY"
      ],
      lastfm: [
        { artist: "Linkin Park", url: "https://www.last.fm/music/Linkin+Park" },
        { artist: "Eminem", url: "https://www.last.fm/music/Eminem" },
        { artist: "NF", url: "https://www.last.fm/music/NF" },
        { artist: "Twenty One Pilots", url: "https://www.last.fm/music/Twenty+One+Pilots" },
        { artist: "System of a Down", url: "https://www.last.fm/music/System+of+a+Down" }
      ]
    },
    default: {
      meditation: "Body Scan Meditation",
      music: [
        "https://www.youtube.com/embed/1ZYbU82GVz4",
        "https://www.youtube.com/embed/yQFQx4lJ6Rk",
        "https://www.youtube.com/embed/lFcSrYw-ARY",
        "https://www.youtube.com/embed/DH1U6GJ71YY",
        "https://www.youtube.com/embed/jfKfPfyJRdk"
      ],
      lastfm: [
        { artist: "Enya", url: "https://www.last.fm/music/Enya" },
        { artist: "Yiruma", url: "https://www.last.fm/music/Yiruma" },
        { artist: "Hans Zimmer", url: "https://www.last.fm/music/Hans+Zimmer" },
        { artist: "Max Richter", url: "https://www.last.fm/music/Max+Richter" },
        { artist: "Ólafur Arnalds", url: "https://www.last.fm/music/%C3%93lafur+Arnalds" }
      ]
    }
  };

  const analyzeMood = () => {
    const text = entry.toLowerCase();

    if (text.includes("happy") || text.includes("excited") || text.includes("joy")) {
      setMood("Happy");
      setSuggestions(moodMap.happy);
    } else if (text.includes("sad") || text.includes("lonely") || text.includes("upset")) {
      setMood("Sad");
      setSuggestions(moodMap.sad);
    } else if (text.includes("stress") || text.includes("anxious") || text.includes("overwhelmed")) {
      setMood("Stressed");
      setSuggestions(moodMap.stressed);
    } else if (text.includes("angry") || text.includes("frustrated") || text.includes("mad")) {
      setMood("Angry");
      setSuggestions(moodMap.angry);
    } else {
      setMood("Neutral");
      setSuggestions(moodMap.default);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Relaxation Music</h1>

      <textarea
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        placeholder="Write about your day, feelings, or thoughts..."
        className="w-full h-24 p-4 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 dark:text-white"
      />

      <button
        onClick={analyzeMood}
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-green-700 transition"
      >
        Analyze Mood
      </button>

      {mood && suggestions && (
        <div className="mt-6 p-4 rounded-lg bg-gray-100 dark:bg-gray-700 shadow">
          <h2 className="text-xl font-semibold text-amber-50">Detected Mood: {mood}</h2>
          <p className="mt-2 text-red-200">🧘 Music Meditation: <span className="font-bold text-emerald-200">{suggestions.meditation}</span></p>

          {/* YouTube Music Embeds */}
          <h3 className="mt-4 font-semibold">🎵 Music for You:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 mt-3">
            {suggestions.music.map((url, idx) => (
              <iframe
                key={idx}
                src={url}
                title={`Music ${idx}`}
                className="w-full h-64 rounded-lg"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ))}
          </div>

          {/* Last.fm Artist Recommendations */}
          <h3 className="mt-8 text-xl font-semibold text-amber-100">🎤 Click if you only want to listen:</h3>
          <ul className="list-disc list-inside">
            {suggestions.lastfm.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline hover:text-amber-100"
                >
                  {item.artist}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Journal;