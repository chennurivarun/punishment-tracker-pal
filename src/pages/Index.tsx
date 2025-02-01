import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UserCircle, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Index = () => {
  const showCredentials = (role: "student" | "staff") => {
    const credentials = role === "student" 
      ? { id: "12345678", role: "Student" }
      : { id: "87654321", role: "Staff" };
    
    toast(`${credentials.role} Login ID: ${credentials.id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Punishment Attendance Tracker
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            A comprehensive system for managing student punishments and attendance records
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Student Card */}
          <Card className="backdrop-blur-xl bg-white/70 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl">
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center gap-2 text-2xl">
                <UserCircle className="w-8 h-8" />
                Student Portal
              </CardTitle>
              <CardDescription className="text-gray-600 text-lg">
                Access your punishment records and attendance
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Link to="/login/student" className="block">
                <Button 
                  className="w-full bg-gray-900 text-white hover:bg-gray-800 rounded-lg h-12 text-lg"
                  onClick={() => showCredentials("student")}
                >
                  Login as Student
                </Button>
              </Link>
              <Link to="/register/student" className="block">
                <Button 
                  variant="outline" 
                  className="w-full border-gray-200 text-gray-900 hover:bg-gray-50 rounded-lg h-12 text-lg"
                >
                  Register as Student
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Staff Card */}
          <Card className="backdrop-blur-xl bg-white/70 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl">
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center gap-2 text-2xl">
                <Users className="w-8 h-8" />
                Staff Portal
              </CardTitle>
              <CardDescription className="text-gray-600 text-lg">
                Manage student punishments and records
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Link to="/login/staff" className="block">
                <Button 
                  className="w-full bg-gray-900 text-white hover:bg-gray-800 rounded-lg h-12 text-lg"
                  onClick={() => showCredentials("staff")}
                >
                  Login as Staff
                </Button>
              </Link>
              <Link to="/register/staff" className="block">
                <Button 
                  variant="outline" 
                  className="w-full border-gray-200 text-gray-900 hover:bg-gray-50 rounded-lg h-12 text-lg"
                >
                  Register as Staff
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center text-gray-600">
          <p>Use the demo credentials shown in the toast notifications to try out the system.</p>
        </div>
      </div>
    </div>
  );
};

export default Index;