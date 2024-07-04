import Calender from "../components/calender";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bestill",
};
export default function Component() {
  return (
    <div className="h-full max-w-3xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Bestill time her</h1>

        <p className="text-muted-foreground">
          Velg dato og tid det passer deg, og bestill time under.
        </p>
      </div>
      <div className="bg-gray-900 text-white p-8 rounded-lg shadow-md mt-8 md:mt-0">
        <ul className="space-y-4">
          <li className="flex justify-between">
            <span>Hårklipp</span>
            <span>fra 300,-</span>
          </li>
          <li className="flex justify-between">
            <span>Barneklipp</span>
            <span>fra 300,-</span>
          </li>
          <li className="flex justify-between">
            <span>Skinfade med taper</span>
            <span>fra 350,-</span>
          </li>
          <li className="flex justify-between">
            <span>Skjegg</span>
            <span>fra 200,-</span>
          </li>
          <li className="flex justify-between">
            <span>Hårvask</span>
            <span>fra 150,-</span>
          </li>
        </ul>
      </div>

      <div className="bg-muted rounded-lg p-6">
        <div className="bg-background rounded-md">
          <Calender url="https://calendly.com/okbenzowelish/30min" />
        </div>
      </div>
    </div>
  );
}
