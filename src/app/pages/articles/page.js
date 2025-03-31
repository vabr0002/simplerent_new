// This is a simple React component rendering a placeholder for a selected article view
export default function selectedArticle() {
  return (
    <div>
      {/* Title Section */}
      <div className="flex justify-center mt-10 mb-6">
        <h1 className="text-h1">Den valgte artikel</h1> {/* Danish for "The selected article" */}
      </div>

      {/* Placeholder Text */}
      <p className="flex justify-center">Blah Blah Blah</p> {/* Placeholder content */}
    </div>
  );
}