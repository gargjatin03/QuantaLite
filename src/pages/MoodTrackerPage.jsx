import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

function MoodTracker() {
  const navigate = useNavigate();
  const [mood, setMood] = useState("🙂");
  const [entries, setEntries] = useState([]);
  const [chartType, setChartType] = useState("line");

  const moodMap = { "😃": 4, "🙂": 3, "😔": 2, "😡": 1 };
  const moodColors = { "😃": "#22c55e", "🙂": "#a3e635", "😔": "#facc15", "😡": "#ef4444" };

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("moodTracker") || "[]");
    setEntries(saved);
  }, []);

  const saveMood = () => {
    const newEntry = { mood, date: new Date().toLocaleDateString() };
    const updated = [newEntry, ...entries];
    setEntries(updated);
    localStorage.setItem("moodTracker", JSON.stringify(updated));
  };

  // Clear moods with confirmation
  const clearAllMoods = () => {
    const confirmClear = window.confirm("Do you want to clear all mood entries?");
    if (confirmClear) {
      localStorage.removeItem("moodTracker");
      setEntries([]);
    }
  };

  const avgScore = entries.length
    ? (entries.reduce((sum, e) => sum + (moodMap[e.mood] || 3), 0) / entries.length).toFixed(2)
    : 0;

  const chartData = {
    labels: entries.map(e => e.date).reverse(),
    datasets: [
      {
        label: "Mood Score",
        data: entries.map(e => moodMap[e.mood] || 3).reverse(),
        fill: false,
        borderColor: "#3b82f6",
        backgroundColor: entries.map(e => moodColors[e.mood]).reverse(),
        pointBackgroundColor: entries.map(e => moodColors[e.mood]).reverse(),
        tension: 0.3,
        pointRadius: 6
      },
      {
        label: "Average Score",
        data: Array(entries.length).fill(avgScore).reverse(),
        borderColor: "#6b7280",
        borderDash: [5, 5],
        pointRadius: 0,
        fill: false
      }
    ]
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Mood Tracker</h2>

      <select value={mood} onChange={e => setMood(e.target.value)} className="mb-3 p-2 rounded w-full bg-gray-800 text-gray-300 border-2">
        <option value="😃">Happy 😃</option>
        <option value="🙂">Excited 🙂</option>
        <option value="😔">Sad 😔</option>
        <option value="😡">Angry 😡</option>
      </select>

      <button onClick={saveMood} className="bg-blue-500 text-white px-4 py-2 rounded mb-2 w-full hover:bg-blue-700">
        Save Mood
      </button>

      {/* Clear All Mood Button with confirmation */}
      <button onClick={clearAllMoods} className="bg-red-500 text-white px-4 py-2 rounded mb-4 w-full hover:bg-red-700">
        Clear All Moods
      </button>

      <div className="mb-4">
        <label className="mr-2 font-bold">Chart Type:</label>
        <select value={chartType} onChange={e => setChartType(e.target.value)} className="p-2 border rounded text-gray-600">
          <option value="line">Line</option>
          <option value="bar">Bar</option>
        </select>
      </div>

      {entries.length > 0 && (chartType === "line" ? <Line data={chartData} /> : <Bar data={chartData} />)}

      {entries.length > 0 && (
        <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded mt-4">
          <p className="font-bold text-gray-200">Your Average Mood Score: {avgScore}</p>
          <p>
            {avgScore >= 3 ? (
              <span className="text-green-600 dark:text-green-400">Good Mood 😊 Keep it up!</span>
            ) : (
              <span className="text-red-500 dark:text-red-400">
                Needs Improvement 😔 Try{" "}
                <span
                  className="underline cursor-pointer text-blue-600 dark:text-blue-400 hover:text-green-500"
                  onClick={() => navigate("/journal")}
                >
                  relaxation music
                </span>{" "}
                or{" "}
                <span
                  className="underline cursor-pointer text-blue-600 dark:text-blue-400 hover:text-green-500"
                  onClick={() => navigate("/meditation")}
                >
                  meditation
                </span>.
              </span>
            )}
          </p>
        </div>
      )}
    </div>
  );
}

export default MoodTracker;
