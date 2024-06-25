import Calender from "../components/calender";
export default function Component() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Bestill time her</h1>

        <p className="text-muted-foreground">
          Velg dato og tid det passer deg, og bestill time under.
        </p>
      </div>
      <div className="bg-gray-900 text-white p-8 rounded-lg shadow-md mt-8 md:mt-0">
        <ul className="space-y-4">
          <li className="flex justify-between">
            <span>Klassisk hårklipp</span>
            <span>fra 550,-</span>
          </li>
          <li className="flex justify-between">
            <span>Barbering med kniv</span>
            <span>fra 450,-</span>
          </li>
          <li className="flex justify-between">
            <span>Skjeggtrimming</span>
            <span>fra 500,-</span>
          </li>
          <li className="flex justify-between">
            <span>Barneklipp</span>
            <span>fra 450,-</span>
          </li>
          <li className="flex justify-between">
            <span>Senior hårklipp</span>
            <span>fra 400,-</span>
          </li>
        </ul>
      </div>

      <div className="bg-muted rounded-lg p-6">
        <div className="bg-background rounded-md">
          <Calender url="https://calendly.com/pokesilas/bestill-time?month=2024-06" />
        </div>
      </div>
    </div>
  );
}
