import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import { experience } from "@/shared/data";
// ы
export function ExperienceSection() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {experience.map((job, i) => (
        <motion.div
          key={job.company}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>
                  {job.role} · {job.company}
                </span>
                <Badge variant="outline">{job.period}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {job.points.map((pt) => (
                  <li key={pt} className="flex gap-2">
                    <Star className="w-4 h-4 text-primary shrink-0" /> {pt}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
