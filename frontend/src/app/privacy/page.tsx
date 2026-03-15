export const metadata = {
  title: "Privacy Policy - Extractify",
  description:
    "Understand how Extractify collects, uses, stores, and protects your personal information.",
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-[24px] md:text-[28px] font-semibold text-text-secondary">{children}</h2>;
}

function BodyText({ children }: { children: React.ReactNode }) {
  return <p className="text-[14px] leading-[20px] text-text-muted">{children}</p>;
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-5 text-[14px] leading-[20px] text-text-muted">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function PrivacyPage() {
  return (
    <div className="bg-background">
      <div className="mx-auto max-w-[1312px] px-4 md:px-16 pt-12 md:pt-16 pb-20">
        <header className="mx-auto max-w-[680px] text-center">
          <h1 className="text-[34px] leading-[1.1] font-semibold text-text-secondary">Privacy Policy</h1>
          <p className="mt-3 text-[16px] leading-[22px] text-text-secondary">
            Understand the policies that guide how your information is stored, used, and safeguarded across our
            services.
          </p>
        </header>

        <div className="mt-10 md:mt-12 space-y-8">
          <section className="space-y-3">
            <SectionTitle>1. Introduction</SectionTitle>
            <BodyText>
              This Privacy Policy explains how we collect, use, store, and protect your personal information when you
              use our website, marketplace, AI tools, and all related services (&quot;Platform&quot;).
            </BodyText>
            <BodyText>By using the Platform, you agree to the practices described below.</BodyText>
          </section>

          <section className="space-y-3">
            <SectionTitle>2. Information We Collect</SectionTitle>
            <BodyText>We collect the following types of information:</BodyText>
            <BodyText>A. Personal Information</BodyText>
            <BulletList
              items={[
                "Name",
                "Email address",
                "Password",
                "Country/region",
                "Payment and billing details (for subscriptions or payouts)",
              ]}
            />
            <BodyText>B. Usage Data</BodyText>
            <BulletList
              items={[
                "Pages you visit",
                "Features you use",
                "Design assets you download, remix, or upload",
                "Interaction with AI tools",
                "Device type, browser, IP address",
              ]}
            />
            <BodyText>C. Uploaded and Generated Content</BodyText>
            <BulletList
              items={[
                "Assets you upload to the marketplace",
                "Designs created using AI or remix tools",
                "Prompts/instructions entered into AI chat panel",
                "Portfolio or profile details (if added)",
              ]}
            />
            <BodyText>D. Payment Information</BodyText>
            <BulletList items={["Processed securely through trusted third-party payment providers."]} />
            <BodyText>We do not store full card details.</BodyText>
          </section>

          <section className="space-y-3">
            <SectionTitle>3. How We Use Your Information</SectionTitle>
            <BodyText>We use your data to:</BodyText>
            <BulletList
              items={[
                "Provide access to the marketplace and AI tools",
                "Customize and improve your user experience",
                "Process payments and subscriptions",
                "Enable creator payouts for marketplace earnings",
                "Display your published assets to other users",
                "Improve AI models based on usage patterns",
                "Prevent fraud, misuse, or policy violations",
                "Send product updates, billing notifications, and support emails",
              ]}
            />
            <BodyText>We do not sell your personal information to third parties.</BodyText>
          </section>

          <section className="space-y-3">
            <SectionTitle>4. AI Data Usage</SectionTitle>
            <BodyText>
              When you use our AI features, we may use your prompts, edits, and design outputs to:
            </BodyText>
            <BulletList items={["Improve AI performance", "Offer better design suggestions", "Train models to understand user behavior"]} />
            <BodyText>
              We do not use your private files (e.g., client work PDFs, brand guidelines) for public model training
              without your consent.
            </BodyText>
          </section>

          <section className="space-y-3">
            <SectionTitle>5. Sharing of Information</SectionTitle>
            <BodyText>We only share your data with:</BodyText>
            <BodyText>A. Trusted Third Parties</BodyText>
            <BulletList
              items={[
                "Payment processors",
                "Cloud storage providers",
                "AI infrastructure providers",
                "Analytics tools",
                "Authentication services",
              ]}
            />
            <BodyText>B. Marketplace Users</BodyText>
            <BodyText>If you upload an asset to the marketplace:</BodyText>
            <BulletList
              items={[
                "Your name/profile may appear on your published asset.",
                "Usage statistics (downloads, remixes) may be visible.",
              ]}
            />
            <BodyText>We do not share personal contact information publicly.</BodyText>
          </section>

          <section className="space-y-3">
            <SectionTitle>6. How We Store and Protect Your Data</SectionTitle>
            <BodyText>We use industry-standard security practices, including:</BodyText>
            <BulletList
              items={[
                "Encrypted data storage",
                "Secure servers",
                "Access controls and monitoring",
                "Regular security audits",
                "SSL encryption for all data transfer",
              ]}
            />
            <BodyText>However, no method of transmission over the internet is 100% secure.</BodyText>
          </section>

          <section className="space-y-3">
            <SectionTitle>7. Cookies and Tracking Technologies</SectionTitle>
            <BodyText>We use cookies to:</BodyText>
            <BulletList
              items={[
                "Keep you logged in",
                "Save preferences",
                "Analyze how the platform is used",
                "Improve performance and personalization",
              ]}
            />
            <BodyText>Users may disable cookies in their browser settings.</BodyText>
          </section>
        </div>
      </div>
    </div>
  );
}
