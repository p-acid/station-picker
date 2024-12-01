import { Button } from "@/shared/ui/button";

export const HomePage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-2">
      <Button>@shadcn/ui default Button</Button>
      <Button variant="secondary">@shadcn/ui secondary Button</Button>
      <Button variant="ghost">@shadcn/ui ghost Button</Button>
      <Button variant="link">@shadcn/ui link Button</Button>
      <Button variant="outline">@shadcn/ui outline Button</Button>
      <Button variant="destructive">@shadcn/ui destructive Button</Button>
    </main>
  );
};
