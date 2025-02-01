import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-8 text-lg">The page you're looking for doesn't exist.</p>
      <Link to="/">
        <Button className="bg-gray-900 text-white hover:bg-gray-800 gap-2">
          <Home className="w-4 h-4" />
          Return Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;