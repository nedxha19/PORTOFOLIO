export default function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Nedit Xhaferi',
    url: 'https://portofolio-jtaooe617-neditxhaferis-projects.vercel.app',
    image: 'https://portofolio-jtaooe617-neditxhaferis-projects.vercel.app/images/Nedit (2).jpeg',
    description: 'Aspiring IT Professional specializing in web development with experience in IT support, database management, and customer service.',
    jobTitle: 'Junior Web Developer & IT Support Specialist',
    email: 'nedit@example.com',
    telephone: '+43-example',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Austria',
      addressCountry: 'AT',
    },
    sameAs: [
      'https://github.com/nedxha19',
      'https://www.linkedin.com/in/nedit-xhaferi/',
    ],
    knowsAbout: [
      'Web Development',
      'SvelteKit',
      'HTML',
      'CSS',
      'Tailwind CSS',
      'MySQL',
      'Oracle Database',
      'IT Support',
      'C Programming',
      'Networking',
    ],
    mainEntity: {
      '@type': 'WebPage',
      name: 'Nedit Xhaferi Portfolio',
      url: 'https://portofolio-jtaooe617-neditxhaferis-projects.vercel.app',
      description: 'Professional portfolio showcasing web development projects and IT expertise',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  );
}
