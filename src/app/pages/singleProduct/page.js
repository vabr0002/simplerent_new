import SingleProduct from "@/components/singleProduct/SingleProduct";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 bg-white ">
        <div className="flex flex-col items-center ">
          <SingleProduct />
        </div>
      </div>
    </div>
  );
}
