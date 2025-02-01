import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UserCircle, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-4">
      <div className="max-w-4xl w-full mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Punishment Attendance Tracker
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Student Card */}
          <Card className="backdrop-blur-xl bg-white/70 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl">
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center gap-2">
                <UserCircle className="w-6 h-6" />
                Student Portal
              </CardTitle>
              <CardDescription className="text-gray-600">
                Access your punishment records and attendance
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Link to="/login/student">
                <Button className="w-full bg-gray-900 text-white hover:bg-gray-800 rounded-lg">
                  Login as Student
                </Button>
              </Link>
              <Link to="/register/student">
                <Button variant="outline" className="w-full border-gray-200 text-gray-900 hover:bg-gray-50 rounded-lg">
                  Register as Student
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Staff Card */}
          <Card className="backdrop-blur-xl bg-white/70 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl">
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center gap-2">
                <Users className="w-6 h-6" />
                Staff Portal
              </CardTitle>
              <CardDescription className="text-gray-600">
                Manage student punishments and records
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Link to="/login/staff">
                <Button className="w-full bg-gray-900 text-white hover:bg-gray-800 rounded-lg">
                  Login as Staff
                </Button>
              </Link>
              <Link to="/register/staff">
                <Button variant="outline" className="w-full border-gray-200 text-gray-900 hover:bg-gray-50 rounded-lg">
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