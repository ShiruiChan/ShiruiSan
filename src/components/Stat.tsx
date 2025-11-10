import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
// ы
export function Stat({ number, label }: { number: string; label: string }) {
  return (
    <Card className="text-center">
      <CardHeader>
        <CardTitle className="text-4xl font-semibold">{number}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{label}</p>
      </CardContent>
    </Card>
  );
}
