import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Punishment Attendance Tracker
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Student Card */}
          <Card>
            <CardHeader>
              <CardTitle>Student Portal</CardTitle>
              <CardDescription>Access your punishment records and attendance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Link to="/login/student">
                <Button className="w-full">Login as Student</Button>
              </Link>
              <Link to="/register/student">
                <Button variant="outline" className="w-full">Register as Student</Button>
              </Link>
            </CardContent>
          </Card>

          {/* Staff Card */}
          <Card>
            <CardHeader>
              <CardTitle>Staff Portal</CardTitle>
              <CardDescription>Manage student punishments and records</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Link to="/login/staff">
                <Button className="w-full">Login as Staff</Button>
              </Link>
              <Link to="/register/staff">
                <Button variant="outline" className="w-full">Register as Staff</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;