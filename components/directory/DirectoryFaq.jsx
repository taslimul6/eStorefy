export default function DirectoryFaq({ city, count }) {
  const questions = city?.content.faqs.map(({ question, answer }) => [
    question,
    answer,
  ]) || [
    [
      "Who is listed in this directory?",
      `This collection contains ${count} researched agency profiles${city ? ` associated with ${city.fullName}` : " across the available city collections"}. Services, ratings and contact details are taken from public sources and may change.`,
    ],
    [
      "Does a city listing mean the agency is headquartered there?",
      city?.locationNote ||
        "No. A collection may include a listed primary location, a local office or a documented city association. Agency profiles disclose location evidence and any conflicts.",
    ],
    [
      "Are all agencies verified Shopify Partners?",
      "Partner tiers are displayed only when captured from Shopify's directory. Missing partner status means it was not confirmed in this research, not that the agency has no Shopify experience.",
    ],
    [
      "Are the starting prices full website quotes?",
      "No. Selected-service prices, full-project minimums and hourly rates are separate fields. A small service price must not be treated as a full-store budget. Ask for a scope-based quote.",
    ],
    [
      "How does the matchmaker work?",
      "It filters published services, city collections and known project minimums. It does not rank quality or guarantee availability. Agencies with unknown project minimums are excluded when a budget is selected.",
    ],
    [
      "Can agencies submit a listing?",
      "The Get listed form creates a downloadable listing request. Online submission and review require a publishing workflow and are not connected in this version.",
    ],
  ];
  return (
    <>
      <section className="faq" id="faq">
        <div className="eyebrow">Before you make your shortlist</div>
        <h2>Helpful answers.</h2>
        {questions.map(([question, answer]) => (
          <details key={question}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </section>
      <section className="method">
        <div>
          <strong>Clear expertise</strong>
          <p>
            Separate services, industry focus, team information and different pricing
            types.
          </p>
        </div>
        <div>
          <strong>Location with evidence</strong>
          <p>
            Headquarters, additional offices and directory-listed locations are disclosed
            separately.
          </p>
        </div>
        <div>
          <strong>Transparent listings</strong>
          <p>
            Source-linked ratings and no invented testimonials or performance results.
          </p>
        </div>
      </section>
      <section className="cta">
        <div>
          <h2>
            Your next chapter.
            <br />
            The right project partner.
          </h2>
          <p>Compare published expertise and start with a clearer brief.</p>
        </div>
        <a className="button lime" href="#directory">
          Explore agencies ↗
        </a>
      </section>
    </>
  );
}
