import { RegistrationForm } from "@/components/RegistrationForm";
import { useParams, Navigate } from "react-router-dom";

const Register = () => {
  const { role } = useParams<{ role: string }>();

  if (!role || (role !== "student" && role !== "staff")) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-white mb-8">
          {role === "student" ? "Student Registration" : "Staff Registration"}
        </h1>
        <RegistrationForm role={role as "student" | "staff"} />
      </div>
    </div>
  );
};

export default Register;