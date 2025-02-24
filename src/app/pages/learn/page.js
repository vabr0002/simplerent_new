import Articles from "@/components/articles/Articles";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center mt-10 mb-6">
        <h1 className="text-h1">Guides & Articles</h1>
      </div>
      <Articles />
    </div>
  );
}
