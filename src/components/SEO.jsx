import React from "react";
import { Helmet } from "react-helmet";

export default function SEO({ title, url }) {
  return (
    <Helmet
      htmlAttributes={{
        lang: "en"
      }}
      title={`${title} `}
      meta={[
        {
          name: "google-site-verification",
          content: ""
        },
        { name: "description", content: "description" },
        {
          name: "robots",
          content: "noindex, nofollow"
        },
        {
          name: "googlebot",
          content: "noindex, nofollow"
        }
      ].concat([])}
    >
      <link rel="canonical" href={`${url && url}`} />
    </Helmet>
  );
}
