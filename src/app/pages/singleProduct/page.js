import SingleProduct from "@/components/singleProduct/SingleProduct";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center mt-10 mb-6">
        <h1 className="text-h1">Single Product</h1>
        <SingleProduct />
      </div>
    </div>
  );
}
