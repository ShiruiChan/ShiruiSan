import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/shared/profile";

export function Footer() {
  return (
    <footer className="border-t py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center gap-4 justify-between">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          <a
            className="p-2 rounded-lg hover:bg-muted"
            href={profile.contacts.github}
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            className="p-2 rounded-lg hover:bg-muted"
            href={profile.contacts.linkedin}
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            className="p-2 rounded-lg hover:bg-muted"
            href={`mailto:${profile.contacts.email}`}
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
