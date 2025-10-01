import { Stat } from "./Stat";

export function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-3 gap-6">
        <Stat number="5+" label="Years shipping UI" />
        <Stat number=">40" label="Shipped features" />
        <Stat number="100%" label="Design-love & dev-speed" />
      </div>
    </div>
  );
}
