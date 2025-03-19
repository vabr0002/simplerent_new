import SingleProduct from "@/components/singleProduct/SingleProduct";

export default function SingleProductPage({ params }) {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 bg-white">
        <div className="flex flex-col items-center">
          <SingleProduct id={params.id} /> {/* Pass the ID to the component */}
        </div>
      </div>
    </div>
  );
}