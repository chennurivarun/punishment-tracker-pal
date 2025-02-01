import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Users, ClipboardList } from "lucide-react";

export default function StaffDashboard() {
  const user = JSON.parse(localStorage.getItem("currentUser") || "{}");

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Staff Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back, {user.name}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="backdrop-blur-xl bg-white/70 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl">
            <CardHeader className="flex flex-row items-center space-y-0 gap-4">
              <Users className="w-8 h-8 text-gray-900" />
              <div>
                <CardTitle>Total Students</CardTitle>
                <p className="text-sm text-gray-600">Registered students</p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
              <p className="text-sm text-gray-600">No students registered</p>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-xl bg-white/70 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl">
            <CardHeader className="flex flex-row items-center space-y-0 gap-4">
              <ClipboardList className="w-8 h-8 text-gray-900" />
              <div>
                <CardTitle>Active Punishments</CardTitle>
                <p className="text-sm text-gray-600">Current punishment records</p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
              <p className="text-sm text-gray-600">No active punishments</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}