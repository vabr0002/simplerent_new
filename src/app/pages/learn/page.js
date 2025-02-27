import Articles from "@/components/articles/Articles";

export default function Home() {
  return (
    <div className="mb-20">
      <div className="flex justify-center mt-32 mb-10">
        <h1 className="text-h1">Guides & Articles</h1>
      </div>
      <Articles />
    </div>
  );
}
