import { RegistrationForm } from "@/components/RegistrationForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Punishment Attendance Tracker
        </h1>
        
        <Tabs defaultValue="student" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="student">Student</TabsTrigger>
            <TabsTrigger value="staff">Staff</TabsTrigger>
          </TabsList>
          <TabsContent value="student">
            <RegistrationForm role="student" />
          </TabsContent>
          <TabsContent value="staff">
            <RegistrationForm role="staff" />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;