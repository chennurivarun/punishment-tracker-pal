import { LoginForm } from "@/components/LoginForm";
import { useParams, Navigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Login = () => {
  const { role } = useParams<{ role: "student" | "staff" }>();

  if (!role || (role !== "student" && role !== "staff")) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          {role === "student" ? "Student Login" : "Staff Login"}
        </h1>
        <LoginForm role={role} />
        <p className="mt-6 text-center text-gray-600">
          Don't have an account?{" "}
          <Link to={`/register/${role}`} className="text-gray-900 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;