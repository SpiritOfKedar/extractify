export const metadata = {
  title: "Terms and Conditions - Extractify",
  description:
    "Review the terms and conditions for using Extractify services, marketplace, and AI tools.",
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-[24px] md:text-[28px] font-semibold text-text-secondary">{children}</h2>;
}

function BodyText({ children }: { children: React.ReactNode }) {
  return <p className="text-[14px] leading-5 text-text-muted">{children}</p>;
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-5 text-[14px] leading-5 text-text-muted">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function TermsPage() {
  return (
    <div className="bg-background">
      <div className="mx-auto max-w-328 px-4 md:px-16 pt-12 md:pt-16 pb-20">
        <header className="mx-auto max-w-170 text-center">
          <h1 className="text-[34px] leading-[1.1] font-semibold text-text-secondary">Terms and Conditions</h1>
          <p className="mt-3 text-[16px] leading-5.5 text-text-secondary">
            We are committed to providing a transparent and safe experience. Please review these terms to understand
            your rights, responsibilities, and how our platform operates.
          </p>
        </header>

        <div className="mt-10 md:mt-12 space-y-8">
          <section className="space-y-3">
            <SectionTitle>1. Introduction</SectionTitle>
            <BodyText>
              Welcome to our platform (&quot;Service&quot;). These Terms and Conditions (&quot;Terms&quot;) outline the rules and
              guidelines for using our website, marketplace, AI tools, and all related features.
            </BodyText>
            <BodyText>
              By accessing or using our Service, you agree to follow these Terms. If you do not agree, please refrain
              from using the platform.
            </BodyText>
          </section>

          <section className="space-y-3">
            <SectionTitle>2. Eligibility</SectionTitle>
            <BodyText>To use our Service, you must:</BodyText>
            <BulletList
              items={[
                "Be at least 18 years old.",
                "Provide truthful account information.",
                "Have legal rights to upload or publish any designs or content.",
              ]}
            />
          </section>

          <section className="space-y-3">
            <SectionTitle>3. User Accounts</SectionTitle>
            <BodyText>When creating an account, you must:</BodyText>
            <BulletList
              items={[
                "Keep your login details confidential.",
                "Not impersonate another person.",
                "Not share your account access with others.",
                "Notify us immediately if you suspect unauthorized access.",
              ]}
            />
            <BodyText>
              We reserve the right to suspend or terminate accounts that violate these Terms.
            </BodyText>
          </section>

          <section className="space-y-3">
            <SectionTitle>4. Marketplace Assets and Licensing</SectionTitle>
            <BodyText>
              Our platform provides a marketplace where users can access pre-made graphic assets.
            </BodyText>
            <BodyText>
              When you download or remix an asset, you receive a license to use the design, not ownership of the
              original file.
            </BodyText>
            <BodyText>You agree to:</BodyText>
            <BulletList
              items={[
                "Use assets only for legal and permitted purposes.",
                "Not claim the marketplace's original unmodified assets as your own creation.",
                "Follow any additional license terms shown with individual assets.",
              ]}
            />
          </section>

          <section className="space-y-3">
            <SectionTitle>5. AI Customization and Remixing</SectionTitle>
            <BodyText>
              Our AI tool allows users to customize designs through prompts, instructions, or the &quot;Remix&quot; feature.
            </BodyText>
            <BodyText>By using Remix or AI tools, you understand and agree that:</BodyText>
            <BulletList
              items={[
                "AI-generated results are based on your instructions.",
                "Some results may require manual review or refinement.",
                "You are responsible for ensuring your final output complies with copyright and brand guidelines.",
                "AI-generated outputs are licensed to you for personal or commercial usage unless otherwise restricted.",
              ]}
            />
          </section>

          <section className="space-y-3">
            <SectionTitle>6. User-Generated Assets and Publishing Rules</SectionTitle>
            <BodyText>
              Graphic designers can upload or publish assets to the marketplace (either created manually or generated
              through our AI).
            </BodyText>
            <BodyText>By publishing an asset, you:</BodyText>
            <BulletList
              items={[
                "Confirm you own the rights to the design.",
                "Grant us a license to display, distribute, and sell the asset within the platform.",
                "Agree that your design can be used by other users according to the marketplace license.",
              ]}
            />
            <BodyText>Violation of asset ownership rules may result in immediate account removal.</BodyText>
          </section>

          <section className="space-y-3">
            <SectionTitle>7. Revenue Share for Creators</SectionTitle>
            <BodyText>
              Creators may earn revenue when other users download or remix their marketplace assets.
            </BodyText>
            <BodyText>The revenue-share model includes:</BodyText>
            <BulletList
              items={[
                "Payouts based on usage, downloads, or remix counts.",
                "A commission percentage retained by the platform per transaction.",
                "Monthly or scheduled payouts to creators via supported payment methods.",
              ]}
            />
            <BodyText>We reserve the right to update payout policies with notice.</BodyText>
          </section>

          <section className="space-y-3">
            <SectionTitle>8. Free vs. Premium Access</SectionTitle>
            <BodyText>Users may access certain features for free, including:</BodyText>
            <BulletList
              items={[
                "Limited marketplace browsing",
                "Basic downloads",
                "Basic AI edits",
                "Access to public inspiration feeds",
                "Viewing creator prompts (premium only-locked for free users)",
              ]}
            />
            <BodyText>Premium subscriptions unlock additional features, such as:</BodyText>
            <BulletList
              items={[
                "Advanced AI editing",
                "High-resolution exports",
                "Access to premium assets",
                "Viewing creator prompts and instructions",
                "Unlimited remixing",
                "Priority support",
                "Commercial-use licensing for all downloads",
              ]}
            />
            <BodyText>Premium benefits may change over time.</BodyText>
          </section>
        </div>
      </div>
    </div>
  );
}
