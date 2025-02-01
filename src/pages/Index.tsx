import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UserCircle, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full mx-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          Punishment Attendance Tracker
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Student Card */}
          <Card className="backdrop-blur-lg bg-white/10 border-white/20 shadow-xl">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <UserCircle className="w-6 h-6" />
                Student Portal
              </CardTitle>
              <CardDescription className="text-gray-300">
                Access your punishment records and attendance
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Link to="/login/student">
                <Button className="w-full bg-white text-black hover:bg-gray-100">
                  Login as Student
                </Button>
              </Link>
              <Link to="/register/student">
                <Button variant="outline" className="w-full border-white text-white hover:bg-white/20">
                  Register as Student
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Staff Card */}
          <Card className="backdrop-blur-lg bg-white/10 border-white/20 shadow-xl">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Users className="w-6 h-6" />
                Staff Portal
              </CardTitle>
              <CardDescription className="text-gray-300">
                Manage student punishments and records
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Link to="/login/staff">
                <Button className="w-full bg-white text-black hover:bg-gray-100">
                  Login as Staff
                </Button>
              </Link>
              <Link to="/register/staff">
                <Button variant="outline" className="w-full border-white text-white hover:bg-white/20">
                  Register as Staff
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;