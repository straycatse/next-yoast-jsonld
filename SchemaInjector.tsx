import { Schema } from "./types/YoastSchema";
import Script from "next/script";

interface SchemaInjectorProps {
  schema: Schema;
  mode?: "default" | "rewriteUrl";
  scriptStrategy?: "beforeInteractive" | "afterInteractive";
}

export default function SchemaInjector({
  schema,
  mode = "default",
  scriptStrategy = "beforeInteractive",
}: SchemaInjectorProps) {
  return (
    <Script
      id="json-ld-schema"
      type="application/ld+json"
      strategy={scriptStrategy}
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
