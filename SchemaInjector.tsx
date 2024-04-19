import { Schema } from "./types/YoastSchema";
import Script from "next/script";

interface SchemaInjectorProps {
  schema: Schema;
  mode?: "default" | "rewriteUrl";
  fromDomain?: string;
  toDomain?: string;
  scriptStrategy?: "beforeInteractive" | "afterInteractive";
}

export default function SchemaInjector({
  schema,
  mode = "default",
  fromDomain = "https://www.example.com",
  toDomain = "https://example.se",
  scriptStrategy = "beforeInteractive",
}: SchemaInjectorProps) {
  if (mode === "rewriteUrl") {
    schema["@graph"].forEach((graph) => {
      if (graph.url) {
        graph.url = graph.url.replace(fromDomain, toDomain);
      }
    });
  }

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
