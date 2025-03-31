// Importing the main checkout component from the components folder
import CheckOutComponent from "@/components/checkOut/CheckOut";

// This is the page component for the checkout route
export default function CheckOutPage() {
  return (
    <div>
      {/* Renders the actual checkout UI */}
      <CheckOutComponent />
    </div>
  );
}