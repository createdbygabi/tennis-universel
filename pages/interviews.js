import InterviewCard from "../components/InterviewCard";

export default function Interviews() {
  const allInterviews = [
    {
      id: 1,
      guest: "Rafael Nadal",
      date: "Dec 15, 2024",
      description:
        "Exclusive conversation about his career, training methods, and future plans in tennis.",
      isLive: true,
      instagramUrl: "https://instagram.com/tennisuniversel",
      image:
        "https://images.unsplash.com/photo-1622279457488639-0a8ddf5febb8?w=800&q=80",
    },
    {
      id: 2,
      guest: "Novak Djokovic",
      date: "Dec 10, 2024",
      description:
        "Deep dive into his mental preparation and championship mindset that led to his success.",
      duration: "45 min",
      instagramUrl: "https://instagram.com/tennisuniversel",
      image:
        "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80",
    },
    {
      id: 3,
      guest: "Iga Świątek",
      date: "Dec 5, 2024",
      description:
        "World number one shares insights on her training routine and goals for the upcoming season.",
      duration: "38 min",
      instagramUrl: "https://instagram.com/tennisuniversel",
      image:
        "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=800&q=80",
    },
    {
      id: 4,
      guest: "Carlos Alcaraz",
      date: "Nov 28, 2024",
      description:
        "Young champion talks about his rapid rise and future ambitions.",
      duration: "42 min",
      instagramUrl: "https://instagram.com/tennisuniversel",
    },
    {
      id: 5,
      guest: "Coco Gauff",
      date: "Nov 20, 2024",
      description:
        "Rising star discusses her journey and aspirations in professional tennis.",
      duration: "35 min",
      instagramUrl: "https://instagram.com/tennisuniversel",
    },
    {
      id: 6,
      guest: "Serena Williams",
      date: "Nov 15, 2024",
      description:
        "Legendary player reflects on her incredible career and legacy in tennis.",
      duration: "55 min",
      instagramUrl: "https://instagram.com/tennisuniversel",
    },
    {
      id: 7,
      guest: "Daniil Medvedev",
      date: "Nov 10, 2024",
      description:
        "Discussing his unique playing style and tournament strategies.",
      duration: "40 min",
      instagramUrl: "https://instagram.com/tennisuniversel",
    },
    {
      id: 8,
      guest: "Aryna Sabalenka",
      date: "Nov 5, 2024",
      description:
        "Power player talks about strength training and mental toughness.",
      duration: "35 min",
      instagramUrl: "https://instagram.com/tennisuniversel",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 block">
            Toutes les interviews
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Interviews exclusives
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explorez notre collection complète de conversations exclusives avec
            des professionnels du tennis
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allInterviews.map((interview) => (
            <InterviewCard key={interview.id} interview={interview} />
          ))}
        </div>
      </div>
    </div>
  );
}
