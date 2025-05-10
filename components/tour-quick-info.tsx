import { Clock, Users, MapPin, CalendarDays } from "lucide-react";

interface QuickInfoProps {
  duration: string;
  maxGroupSize: number;
  difficulty: string;
  bestSeason: string;
}

export const TourQuickInfo = ({ duration, maxGroupSize, difficulty, bestSeason }: QuickInfoProps) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
    <InfoCard icon={<Clock size={18} />} label="Duration" value={duration} />
    <InfoCard icon={<Users size={18} />} label="Group Size" value={`Max ${maxGroupSize} people`} />
    <InfoCard icon={<MapPin size={18} />} label="Difficulty" value={difficulty} />
    <InfoCard icon={<CalendarDays size={18} />} label="Best Season" value={bestSeason} />
  </div>
);

const InfoCard = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="bg-slate-50 p-4 rounded-lg">
    <div className="flex items-center gap-2 text-teal-600 mb-2">
      {icon}
      <span className="font-medium">{label}</span>
    </div>
    <p>{value}</p>
  </div>
);