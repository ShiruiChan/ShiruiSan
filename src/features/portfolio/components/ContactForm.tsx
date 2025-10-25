import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Github,
  Mail,
  Send,
  Clock,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";
import { profile } from "@/shared/profile";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Badge } from "@/components/ui/badge";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email" })
    .max(255, { message: "Email must be less than 255 characters" }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(1000, { message: "Message must be less than 1000 characters" }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm({
  t,
}: {
  t: {
    title: string;
    subtitle: string;
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    success: string;
    error: string;
    availability: string;
    responseTime: string;
    or: string;
  };
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      // Simulate API call - replace with actual endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Here you would typically send to your backend or email service
      console.log("Form data:", data);
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-linear-to-r from-primary via-accent-foreground to-primary bg-clip-text text-transparent">
            {t.title}
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            {t.subtitle}
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="border-2 hover:border-primary/50 transition-all duration-300 shadow-[--shadow-soft] hover:shadow-[--shadow-hover] bg-linear-to-br from-card to-accent/5 overflow-hidden relative">
            {/* Decorative gradient blur */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />

            <CardContent className="pt-8 pb-8 px-6 sm:px-8">
              <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-12">
                {/* Form Section */}
                <div>
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-semibold">
                              {t.name}
                            </FormLabel>
                            <FormControl>
                              <motion.div
                                whileFocus={{ scale: 1.01 }}
                                transition={{
                                  type: "spring" as const,
                                  stiffness: 300,
                                }}
                              >
                                <Input
                                  placeholder={t.namePlaceholder}
                                  {...field}
                                  onFocus={() => setFocusedField("name")}
                                  onBlur={() => setFocusedField(null)}
                                  className={`h-12 border-2 transition-all ${
                                    focusedField === "name"
                                      ? "border-primary shadow-[0_0_0_3px_hsl(var(--primary)/0.1)]"
                                      : ""
                                  }`}
                                />
                              </motion.div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-semibold">
                              {t.email}
                            </FormLabel>
                            <FormControl>
                              <motion.div
                                whileFocus={{ scale: 1.01 }}
                                transition={{
                                  type: "spring" as const,
                                  stiffness: 300,
                                }}
                              >
                                <Input
                                  type="email"
                                  placeholder={t.emailPlaceholder}
                                  {...field}
                                  onFocus={() => setFocusedField("email")}
                                  onBlur={() => setFocusedField(null)}
                                  className={`h-12 border-2 transition-all ${
                                    focusedField === "email"
                                      ? "border-primary shadow-[0_0_0_3px_hsl(var(--primary)/0.1)]"
                                      : ""
                                  }`}
                                />
                              </motion.div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-semibold">
                              {t.message}
                            </FormLabel>
                            <FormControl>
                              <motion.div
                                whileFocus={{ scale: 1.01 }}
                                transition={{
                                  type: "spring" as const,
                                  stiffness: 300,
                                }}
                              >
                                <Textarea
                                  placeholder={t.messagePlaceholder}
                                  {...field}
                                  onFocus={() => setFocusedField("message")}
                                  onBlur={() => setFocusedField(null)}
                                  className={`min-h-[140px] border-2 transition-all resize-none ${
                                    focusedField === "message"
                                      ? "border-primary shadow-[0_0_0_3px_hsl(var(--primary)/0.1)]"
                                      : ""
                                  }`}
                                />
                              </motion.div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full h-12 text-base font-semibold gap-2 bg-primary hover:opacity-90 transition-all shadow-(--shadow-soft) hover:shadow-[--shadow-hover]"
                        >
                          {isSubmitting ? (
                            <>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{
                                  duration: 1,
                                  repeat: Infinity,
                                  ease: "linear",
                                }}
                              >
                                <Send className="w-4 h-4" />
                              </motion.div>
                              {t.sending}
                            </>
                          ) : (
                            <>
                              {t.send}
                              <Send className="w-4 h-4" />
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </form>
                  </Form>
                </div>

                {/* Contact Info Section */}
                <div className="space-y-6">
                  {/* Status Badge */}
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col gap-3"
                  >
                    <Badge
                      variant="secondary"
                      className="w-fit px-4 py-2 text-sm font-medium bg-linear-to-r from-green-500/10 to-emerald-500/10 text-green-700 dark:text-green-400 border-green-500/20"
                    >
                      <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"
                      />
                      {t.availability}
                    </Badge>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>
                        {t.responseTime}:{" "}
                        <strong className="text-foreground">
                          {profile.responseTime}
                        </strong>
                      </span>
                    </div>
                  </motion.div>

                  {/* Divider */}
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-border" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-card px-2 text-muted-foreground">
                        {t.or}
                      </span>
                    </div>
                  </div>

                  {/* Contact Links */}
                  <div className="space-y-3">
                    <motion.a
                      href={`mailto:${profile.contacts.email}`}
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors group"
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">
                          Email
                        </div>
                        <div className="text-sm font-medium group-hover:text-primary transition-colors">
                          {profile.contacts.email}
                        </div>
                      </div>
                    </motion.a>

                    <motion.a
                      href={profile.contacts.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors group"
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">
                          Telegram
                        </div>
                        <div className="text-sm font-medium group-hover:text-primary transition-colors">
                          @shiruisan
                        </div>
                      </div>
                    </motion.a>

                    <motion.a
                      href={profile.contacts.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors group"
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                        <Github className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">
                          GitHub
                        </div>
                        <div className="text-sm font-medium group-hover:text-primary transition-colors">
                          /shiruisan
                        </div>
                      </div>
                    </motion.a>
                  </div>

                  {/* Trust Badge */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="p-4 rounded-lg bg-linear-to-br from-accent/30 to-accent/10 border border-accent-foreground/10"
                  >
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div className="text-xs text-muted-foreground leading-relaxed">
                        <strong className="text-foreground">
                          Privacy first:
                        </strong>{" "}
                        Your information is never shared or sold. Used only to
                        respond to your inquiry.
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}
