import { useState } from "react";

function Meditation() {
  const exercises = [
    {
      name: "Breathing 4-7-8",
      instruction: "Inhale for 4s, Hold for 7s, Exhale for 8s. Repeat 4 cycles.",
      video: "https://www.youtube.com/embed/Uxbdx-SeOOo", // guided breathing
    },
    {
      name: "Box Breathing",
      instruction: "Inhale 4s → Hold 4s → Exhale 4s → Hold 4s. Repeat 4–6 times.",
      video: "https://www.youtube.com/embed/tEmt1Znux58", // Navy SEAL box breathing
    },
    {
      name: "Mindfulness Meditation",
      instruction: "Sit comfortably, close your eyes, and bring awareness to your breath. Let thoughts pass without judgment.",
      video: "https://www.youtube.com/embed/inpok4MKVLM", // Headspace mindfulness
    },
    {
      name: "Body Scan Meditation",
      instruction: "Lie down, close your eyes, and mentally scan your body from head to toe, releasing tension as you go.",
      video: "https://www.youtube.com/embed/ihwcw_ofuME", // 10-min body scan
    },
    {
      name: "Walking Meditation",
      instruction: "Walk slowly and mindfully. Focus on the sensation of your feet touching the ground and your breath in rhythm with your steps.",
      video: "https://www.youtube.com/embed/QdO1vZJgUu0", // guided walking meditation
    },
    {
      name: "Progressive Muscle Relaxation",
      instruction: "Starting from your toes up to your head, tense each muscle group for 5 seconds, then release. Notice the difference between tension and relaxation.",
      video: "https://www.youtube.com/embed/86HUcX8ZtAk", // progressive muscle relaxation
    },

    {
      name: "Sun Salutation (Surya Namaskar)",
      instruction: "A series of 12 yoga poses performed in a flow. Helps energize the body, improve flexibility, and calm the mind. Perform slowly with mindful breathing.",
      video: "https://www.youtube.com/embed/bWJ2VBTt344", // guided sun salutation practice
    },

  ];

  const [selected, setSelected] = useState(exercises[0]);

  return (
    <div className="max-w-3xl mx-auto p-6 text-center">
      <h2 className="text-3xl font-bold mb-6 hover:text-green-500">Meditation & Motivation 🌿</h2>

      <select
        value={selected.name}
        onChange={(e) =>
          setSelected(exercises.find((ex) => ex.name === e.target.value))
        }
        className="mb-6 p-3 border rounded-lg text-gray-500 dark:text-gray-300 dark:bg-gray-800"
      >
        {exercises.map((ex, i) => (
          <option key={i} value={ex.name}>
            {ex.name}
          </option>
        ))}
      </select>

      <div className="p-5 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-3">{selected.name}</h3>
        <p className="mb-4 text-lg">{selected.instruction}</p>

        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src={selected.video}
            title={selected.name}
            className="w-full h-64 rounded-lg"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Meditation;