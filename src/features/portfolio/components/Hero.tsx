import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Download,
  Github,
  Globe,
  Linkedin,
  MapPin,
  Sparkles,
} from "lucide-react";
import { profile } from "@/shared/profile";
import { GridTexture } from "./GridTexture";
import { PlaceholderAvatar } from "./PlaceholderAvatar";

export function Hero({ t }: { t: any }) {
  return (
    <div className="relative overflow-hidden border-b">
      <div className="absolute inset-0 pointer-events-none">
        <GridTexture />
      </div>
      <div className="max-w-6xl mx-auto px-4 py-16 sm:py-24 relative">
        <div className="grid md:grid-cols-[auto,1fr] gap-8 items-center">
          {profile.avatar ? (
            <img
              src={profile.avatar}
              alt="Avatar"
              className="w-20 h-20 rounded-full ring-4 ring-primary/20 object-cover"
            />
          ) : (
            <PlaceholderAvatar />
          )}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-5xl font-semibold tracking-tight"
            >
              {t.hero.title}
            </motion.h1>
            <p className="mt-4 text-muted-foreground max-w-2xl">
              {profile.bio}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Button asChild className="gap-2">
                <a href="#projects">
                  <Sparkles className="w-4 h-4" /> {t.hero.ctaPrimary}
                </a>
              </Button>
              <Button asChild variant="secondary" className="gap-2">
                <a href={profile.resumeUrl}>
                  <Download className="w-4 h-4" /> {t.hero.ctaSecondary}
                </a>
              </Button>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> {profile.location}
              </div>
              <a
                className="flex items-center gap-2 hover:text-foreground"
                href={profile.contacts.website}
                target="_blank"
                rel="noreferrer"
              >
                <Globe className="w-4 h-4" /> Website
              </a>
              <a
                className="flex items-center gap-2 hover:text-foreground"
                href={profile.contacts.github}
                target="_blank"
                rel="noreferrer"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                className="flex items-center gap-2 hover:text-foreground"
                href={profile.contacts.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
