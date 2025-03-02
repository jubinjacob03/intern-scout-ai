import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { authApi } from "@/api/auth-api";

export const SuperAdminLogin = ({ onSuccess }: { onSuccess: () => void }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await authApi.login(credentials);
      
      if (response.data.data.user.role !== 'super-admin') {
        throw new Error('Access denied');
      }

      localStorage.setItem('superAdminToken', response.data.data.token);
      onSuccess();
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Invalid super admin credentials",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-semibold">Super Admin Verification</h2>
        <p className="text-gray-600">Please authenticate as super admin</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium">Email</label>
          <Input
            type="email"
            value={credentials.email}
            onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">Password</label>
          <Input
            type="password"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            required
          />
        </div>

        <Button className="w-full" disabled={isLoading}>
          {isLoading ? "Verifying..." : "Authenticate"}
        </Button>
      </form>
    </div>
  );
};