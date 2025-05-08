import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface TourTabsProps {
  about: string;
  itinerary: { day: number; title: string; description: string }[];
  cost: { price: string; includes: string[]; excludes: string[] };
}

export const TourTabs = ({ about, itinerary, cost }: TourTabsProps) => (
  <Tabs defaultValue="about" className="mt-6">
    <TabsList className="grid w-full grid-cols-3">
      <TabsTrigger value="about">About Tour</TabsTrigger>
      <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
      <TabsTrigger value="cost">Cost & Details</TabsTrigger>
    </TabsList>
    <TabsContent value="about" className="p-4 bg-white rounded-b-lg">
      <p className="text-gray-700 leading-relaxed">{about}</p>
    </TabsContent>
    <TabsContent value="itinerary" className="p-4 bg-white rounded-b-lg">
      <div className="space-y-4">
        {itinerary.map((day) => (
          <div key={day.day} className="border-b pb-4 last:border-0 last:pb-0">
            <h4 className="font-bold">
              Day {day.day}: {day.title}
            </h4>
            <p className="text-gray-700">{day.description}</p>
          </div>
        ))}
      </div>
    </TabsContent>
    <TabsContent value="cost" className="p-4 bg-white rounded-b-lg">
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold mb-2">Price</h3>
          <p className="text-lg text-teal-600 font-medium">{cost.price}</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Cost Includes</h3>
          <ul className="list-disc pl-5 space-y-1">
            {cost.includes.map((item, index) => (
              <li key={index} className="text-gray-700">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Cost Excludes</h3>
          <ul className="list-disc pl-5 space-y-1">
            {cost.excludes.map((item, index) => (
              <li key={index} className="text-gray-700">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </TabsContent>
  </Tabs>
);