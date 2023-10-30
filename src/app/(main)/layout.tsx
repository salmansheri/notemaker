import Navigation from "@/components/ui/navigation";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full flex dark:bg-[#1F1F1F]">
      <main className="flex-1 h-full overflow-y-auto">
        <Navigation />
        {children}
      </main>
    </div>
  );
}
