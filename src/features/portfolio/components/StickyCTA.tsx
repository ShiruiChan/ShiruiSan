import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BadgeCheck } from "lucide-react";
import { profile } from "@/shared/profile";
import { useAnalytics } from "@/hooks/useAnalytics";

export function StickyCTA() {
  const { track } = useAnalytics();

  return (
    <div className="sticky bottom-3 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <Card className="shadow-lg border-primary/30">
          <CardContent className="py-4 flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
            <div className="flex items-center gap-3 text-sm">
              <BadgeCheck className="w-5 h-5 text-primary" />
              <span>Free 20‑min consult · No obligation</span>
            </div>
            <Button
              asChild
              className="gap-2"
              onClick={() =>
                track("cta_consult_click", { placement: "sticky" })
              }
            >
              <a href={profile.calendly} target="_blank" rel="noreferrer">
                Book now
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
