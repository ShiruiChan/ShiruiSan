export function SeoHead() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ваше Имя",
    jobTitle: "Senior Frontend & Conversion Engineer",
    url: "https://yourdomain.com",
    sameAs: [
      "https://github.com/ShiruiChan",
      "https://www.linkedin.com/in/yourname",
    ],
  };
  return (
    <>
      <title>Websites that sell — Ваше Имя</title>
      <meta
        name="description"
        content="Revenue-focused portfolio: fast, beautiful, measurable websites. Book a free consult."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
