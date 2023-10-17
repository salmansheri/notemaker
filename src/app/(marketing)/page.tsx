import Footer from "@/components/ui/marketing/footer";
import Heading from "@/components/ui/marketing/heading";
import Heroes from "@/components/ui/marketing/heroes";

export default function MarketingPage() {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10 dark:bg-[#1F1F1F]">
        <Heading />
        <Heroes />
      </div>
      <Footer />
    </div>
  );
}
