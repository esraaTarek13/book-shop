import type { ReactNode } from "react";
import TextLink from "../atoms/TextLink";
import BackgroundBanner from "../atoms/BackgroundBanner";
import Text from "../atoms/Text";

interface AuthTemplateProps {
  title?: string;
  subtitle?: string;
  children?: ReactNode;
  footerText?: string;
  footerLinkText?: string;
  footerLinkHref?: string;
}

export default function AuthTemplate({
  title,
  subtitle,
  children,
  footerText,
  footerLinkText,
  footerLinkHref,
}: AuthTemplateProps) {
  return (
    <section>
      <BackgroundBanner />

      <div className="custom-container w-full md:w-[50%]! py-10 md:py-15">
        <Text
          as="h1"
          size="lg"
          weight="semibold"
          color="accent"
          className="text-center"
        >
          {title}
        </Text>

        {subtitle && (
          <Text size="sm" color="muted" className="mt-2 md:mt-4 text-center">
            {subtitle}
          </Text>
        )}

        <div className="my-8 md:my-10">{children}</div>

        <Text size="base" className="text-center">
          {footerText}
          {footerLinkHref && (
            <TextLink href={footerLinkHref} className="text-text-accent">
              {footerLinkText}
            </TextLink>
          )}
        </Text>
      </div>
    </section>
  );
}
