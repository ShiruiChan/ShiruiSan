import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { CaseMetric } from "@/shared/data";
export function CaseCard({ caseItem }: { caseItem: CaseMetric }) {
  const Img = caseItem.image ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={caseItem.image}
      alt={caseItem.title}
      className="w-full aspect-video object-cover rounded-xl mb-3"
    />
  ) : (
    <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 mb-3" />
  );
  const Wrap: React.FC<{ children: React.ReactNode }> = ({ children }) =>
    caseItem.link ? (
      <a
        href={caseItem.link}
        target="_blank"
        rel="noreferrer"
        className="block"
      >
        {children}
      </a>
    ) : (
      <>{children}</>
    );
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{caseItem.title}</span>
          <Badge variant="outline">{caseItem.metric}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Wrap>{Img}</Wrap>
        <p className="text-sm text-muted-foreground">{caseItem.summary}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {caseItem.results.map((r) => (
            <Badge key={r} variant="secondary">
              {r}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
