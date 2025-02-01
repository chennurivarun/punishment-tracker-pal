import { LoginForm } from "@/components/LoginForm";
import { useParams } from "react-router-dom";

const Login = () => {
  const { role } = useParams<{ role: "student" | "staff" }>();

  if (!role || (role !== "student" && role !== "staff")) {
    return <div>Invalid role specified</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {role === "student" ? "Student Login" : "Staff Login"}
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <LoginForm role={role} />
      </div>
    </div>
  );
}

export default Login;