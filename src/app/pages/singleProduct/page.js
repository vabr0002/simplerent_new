// Importing the SingleProduct component
import SingleProduct from "@/components/singleProduct/SingleProduct";

// Default Home page component
export default function Home() {
  return (
    // Page wrapper with white background and full viewport height
    <div className="bg-white min-h-screen">
      
      {/* Centered container for content */}
      <div className="container mx-auto px-4 bg-white">
        
        {/* Flex layout to center the SingleProduct component */}
        <div className="flex flex-col items-center">
          
          {/* Renders the single product detail view */}
          <SingleProduct />

        </div>
      </div>
    </div>
  );
}