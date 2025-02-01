import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-white mb-4">404 - Page Not Found</h1>
      <p className="text-gray-300 mb-8">The page you're looking for doesn't exist.</p>
      <Link to="/">
        <Button className="bg-white text-black hover:bg-gray-100">
          Return Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;