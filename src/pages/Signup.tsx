import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { userApi } from "@/api/user-api";
import { SuperAdminLogin } from "@/pages/SuperAdminLogin";
import { CreateUserData } from "@/types/user";

const Signup = () => {
  const [isSuperAdminAuthenticated, setIsSuperAdminAuthenticated] = useState(false);
  const [userData, setUserData] = useState<CreateUserData>({
    fullName: "",
    email: "",
    password: "",
    role: "admin",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await userApi.createUser(userData);
      toast({ title: "Success", description: "User created successfully" });
      navigate('/dashboard');
    } catch (error) {
      toast({ title: "Error", description: "Failed to create user", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isSuperAdminAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
          <SuperAdminLogin onSuccess={() => setIsSuperAdminAuthenticated(true)} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <div className="text-center space-y-2 mb-8">
          <h1 className="text-3xl font-bold">Create New User</h1>
          <p className="text-gray-600">Create a new admin/employee account</p>
        </div>

        <form onSubmit={handleCreateUser} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Full Name</label>
            <Input
              type="text"
              value={userData.fullName}
              onChange={(e) => setUserData({ ...userData, fullName: e.target.value })}
              required
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <Input
              type="email"
              value={userData.email}
              onChange={(e) => setUserData({ ...userData, email: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Password</label>
            <Input
              type="password"
              value={userData.password}
              onChange={(e) => setUserData({ ...userData, password: e.target.value })}
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90"
            disabled={isLoading}
          >
            {isLoading ? "Creating User..." : "Create User"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Signup;