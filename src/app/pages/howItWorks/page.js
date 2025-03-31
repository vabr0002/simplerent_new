// Importing the Accordion component from the components directory
import Accordion from "@/components/accordion/Accordion";

// Default export of the Home component
export default function Home() {
  return (
    <>
      {/* Section header - centered text with spacing from top and bottom */}
      <div className="flex justify-center mt-32 mb-10">
        <h1 className="text-h1">How it Works</h1>
      </div>

      {/* Render the Accordion component below the heading */}
      <Accordion />
    </>
  );
}