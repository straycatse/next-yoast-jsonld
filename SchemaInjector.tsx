import { Schema } from "/types/YoastSchema";
import Script from "next/script";

export default function SchemaInjector({ schema }: { schema: Schema }) {
  return (
    <Script
      id="json-ld-schema"
      type="application/ld+json"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
