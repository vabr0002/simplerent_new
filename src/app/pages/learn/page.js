// Importing the Articles component from the components directory
import Articles from "@/components/articles/Articles";

// Default export of the Home component
export default function Home() {
  return (
    // Main container with bottom margin
    <div className="mb-20">

      {/* Centered heading with custom top margin spacing */}
      <div className="flex justify-center m-top-spacing ">
        <h1 className="text-h1">Guides & Articles</h1>
      </div>

      {/* Render the Articles component below the heading */}
      <Articles />
    </div>
  );
}