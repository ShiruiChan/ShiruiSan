// Секция блога

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { blog } from "@/shared/data";

export function BlogSection() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {blog.map((post) => (
        <Card key={post.title}>
          <CardHeader>
            <CardTitle className="text-lg">{post.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              {new Date(post.date).toLocaleDateString()}
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="link" className="px-0">
              <a href={post.link} target="_blank" rel="noreferrer">
                Read →
              </a>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
