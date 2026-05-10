export function SeoHead() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Харлампьев Ренат",
    alternateName: "ShiruiSan",
    jobTitle: "Frontend Developer & UI/UX Designer",
    url: "https://shirui-san.vercel.app",
    sameAs: [
      "https://github.com/ShiruiChan",
      "https://t.me/ShiruiSan",
    ],
  };
  return (
    <>
      <title>ShiruiSan — сайты, лендинги и UI/UX под заявки</title>
      <meta
        name="description"
        content="Портфолио Рената Харлампьева: быстрые сайты, лендинги, редизайн и UI/UX с понятной структурой, адаптивом и SEO-основой."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
