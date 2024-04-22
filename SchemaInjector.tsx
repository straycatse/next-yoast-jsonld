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
  fromDomain,
  toDomain,
  scriptStrategy = "beforeInteractive",
}: SchemaInjectorProps) {
  if (mode === "rewriteUrl" && fromDomain && toDomain) {
    const searchRegexp = new RegExp(fromDomain, "g");
    const rewrittenSchema = JSON.parse(
      JSON.stringify(schema).replace(searchRegexp, toDomain)
    );

    console.log("Rewritten schema", rewrittenSchema);

    return (
      <Script
        id="json-ld-schema"
        type="application/ld+json"
        strategy={scriptStrategy}
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(rewrittenSchema),
        }}
      />
    );
    /*  schema["@graph"].forEach((graph) => {
      if (graph["@type"] === "ImageObject") {
        return;
      }
      if (graph.url) {
        const newUrl = graph.url.replace(fromDomain, toDomain);
        console.log("Replacing URL", graph.url, "with", newUrl);
        graph.url = newUrl;
      }
      if (graph["@id"]) {
        const newId = graph["@id"].replace(fromDomain, toDomain);
        console.log("Replacing @id", graph["@id"], "with", newId);
        graph["@id"] = newId;
      }
    }); */
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
