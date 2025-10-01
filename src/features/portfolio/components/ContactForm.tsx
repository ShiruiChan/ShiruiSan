import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "@/shared/profile";

export function ContactForm({
  t,
}: {
  t: {
    title: string;
    name: string;
    email: string;
    message: string;
    send: string;
  };
}) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <Input placeholder={t.name} />
            <Input placeholder={t.email} type="email" />
            <Textarea placeholder={t.message} className="min-h-[120px]" />
            <Button className="gap-2">
              {t.send} <Mail className="w-4 h-4" />
            </Button>
          </div>
          <div className="space-y-4 text-sm text-muted-foreground">
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" /> {profile.contacts.email}
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />{" "}
              {profile.contacts.phone}
            </p>
            <p className="flex items-center gap-2">
              <Github className="w-4 h-4 text-primary" />{" "}
              <a
                className="hover:underline"
                href={profile.contacts.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Linkedin className="w-4 h-4 text-primary" />{" "}
              <a
                className="hover:underline"
                href={profile.contacts.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
