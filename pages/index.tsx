import React from "react";

import SEO from "../components/util/SEO";
import Navigation from "../components/layout/navigation";

export default function Index() {
  return (
  <>
    <SEO
      title="Home"
      description="Avedith is a developer portfolio and resume site."
      keywords={[
        "avedith",
        "solidity",
        "developer",
        "blockchain",
        "ethereum",
        "portfolio",
        "resume",
      ]} 
    />
    <Navigation />
  </>
  );
}