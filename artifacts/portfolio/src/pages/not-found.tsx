import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-background text-foreground pt-24 pb-8">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold">404 Page Not Found</h1>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            This page isn't available. <a href={import.meta.env.BASE_URL} className="text-primary underline underline-offset-4">Return to the portfolio</a>.
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
