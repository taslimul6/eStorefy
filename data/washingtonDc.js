/** City research, source provenance and editable page content. */
const dataset = {
  metadata: {
    schemaVersion: "2.0.0",
    title: "Washington Shopify agency research dataset",
    researchedAt: "2026-10-03",
    city: "Washington",
    stateCode: "DC",
    countryCode: "US",
    agencyCount: 12,
    localOrMetroCount: 4,
    remoteServingCount: 8,
    selectionMethod:
      "Mixed public-source research: Shopify Partner Directory, Clutch city/category pages, and the existing NYC research dataset where applicable.",
    importantNote:
      "Local/metro listings and remote-serving agencies are explicitly separated. Inclusion is not an endorsement or ranking.",
    generatedContentPolicy:
      "AI-generated descriptions/services/FAQs are labeled. Customer review text and client projects are not fabricated.",
    recommendedPublishCheck:
      "Recheck time-sensitive ratings, tiers, pricing, addresses and contact details before publishing.",
  },
  agencies: [
    {
      id: "shopfab",
      name: "ShopFab",
      website: null,
      logoUrl: "https://placehold.co/160x80?text=ShopFab",
      logoType: "generated_placeholder",
      shortDescription:
        "Shopify/ecommerce provider included in the Washington agency research dataset.",
      shortDescriptionSourceType: "ai_generated_editorial",
      longDescription:
        "ShopFab has public evidence connecting it to the Washington, DC market. Public directory evidence positions the company around Shopify or ecommerce work.\n\nFor directory visitors, the most relevant capabilities are Shopify development, E-commerce development, Ongoing support, SEO & discoverability. The agency record is structured to help merchants compare potential partners without turning directory placement into an endorsement. Where the source provides a Shopify Partner Directory profile, the dataset treats that as stronger evidence of Shopify specialization. Where the source is a third-party directory such as Clutch, the record is marked accordingly and the location relationship is kept separate from a verified office claim.\n\nA typical engagement may involve discovery, store architecture, design or theme implementation, migration planning, integration work, quality assurance and post-launch optimization. The exact scope, price, timeline and platform fit should still be confirmed directly with the agency because public directory information can change and service descriptions are often broader than a specific proposal.\n\nThis description is an AI-generated editorial summary built from the public evidence stored in the record. It is intended for your agency directory and should not be presented as a direct quotation from the company. Before publishing time-sensitive details such as partner tiers, ratings, pricing or addresses, recheck the linked source. That keeps the page useful for SEO and comparison while clearly separating sourced facts from generated explanatory copy.",
      longDescriptionSourceType: "ai_generated_editorial_from_public_evidence",
      location: {
        targetCity: "Washington",
        stateCode: "DC",
        country: "United States",
        relationship: "local_or_metro_listing",
        listedLocation: "Arlington, VA",
        physicalOfficeIndependentlyVerified: false,
        verificationStatus: "listed_on_city_shopify_directory",
        evidenceUrl: "https://clutch.co/developers/shopify/washington-dc",
        countryCode: "US",
        notes:
          "Public sources associate this agency with the Washington market. A physical office has not been independently verified.",
        primaryLocationAsListed: "Arlington, VA",
      },
      shopify: {
        partnerStatusSourceType: "clutch_city_directory",
      },
      services: [
        "Shopify development",
        "E-commerce development",
        "Ongoing support",
        "SEO & discoverability",
        "Shopify store design & development",
      ],
      whatTheyDo: [
        {
          name: "Shopify development",
          description:
            "Shopify development is listed or inferred from the agency's public Shopify/ecommerce positioning.",
          sourceType: "public_source_summary",
        },
        {
          name: "E-commerce development",
          description:
            "E-commerce development is listed or inferred from the agency's public Shopify/ecommerce positioning.",
          sourceType: "public_source_summary",
        },
        {
          name: "Ongoing support",
          description:
            "Providing post-launch maintenance, troubleshooting, enhancements and ecommerce operations support.",
          sourceType: "ai_generated_editorial",
        },
        {
          name: "SEO & discoverability",
          description:
            "Improving technical and on-page ecommerce SEO foundations, content structure and store discoverability.",
          sourceType: "ai_generated_editorial",
        },
        {
          name: "Shopify store design & development",
          description:
            "Designing and building responsive Shopify storefronts with a focus on usability, merchandising and maintainable theme architecture.",
          sourceType: "ai_generated_editorial",
        },
      ],
      portfolio: [],
      portfolioStatus: "source_supported_entries_only; no fabricated client projects",
      reviews: [],
      reviewsStatus:
        "aggregate_or_public_source_only; no fabricated customer review text",
      faqs: [
        {
          question: "Does ShopFab work with Shopify?",
          answer:
            "ShopFab appears in public Shopify/ecommerce research used for this dataset. Check the linked source for the latest specialization and partner status.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "Is ShopFab based in Washington?",
          answer:
            "This record has a public local/metro listing for Washington, DC. Review the location relationship field before presenting the company as physically local.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "What Shopify services can ShopFab provide?",
          answer:
            "The record highlights store development, theme work, migration, optimization and integrations where supported by public positioning or editorial categorization.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "Does ShopFab work with Shopify Plus?",
          answer:
            "Shopify Plus capability is only treated as confirmed when the public source explicitly indicates it. Otherwise, ask the agency directly.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "How much does ShopFab charge?",
          answer:
            "Pricing varies by scope. Use any published price only as a directory snapshot and request a current quote from ShopFab.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "Can ShopFab migrate a store to Shopify?",
          answer:
            "Migration is a common ecommerce service, but availability for a specific platform and catalog size should be confirmed directly.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "Does ShopFab offer ongoing Shopify support?",
          answer:
            "Ongoing support may include maintenance, troubleshooting and optimization. Confirm retainers, response times and support boundaries with the agency.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "How should I evaluate ShopFab?",
          answer:
            "Compare relevant Shopify experience, portfolio evidence, technical fit, communication, pricing model and verified reviews rather than relying on a single directory metric.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "Are the reviews for ShopFab verified by this directory?",
          answer:
            "No. This dataset links to public third-party sources and does not independently verify reviewer identity or project outcomes.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "How current is this ShopFab profile?",
          answer:
            "The research snapshot is dated 2026-10-03. Partner tiers, ratings, staff, services and contact details can change, so important facts should be rechecked before publication.",
          sourceType: "ai_generated_editorial",
        },
      ],
      sources: [
        {
          url: "https://clutch.co/developers/shopify/washington-dc",
          type: "clutch_city_directory",
          observedAt: "2026-10-03",
          supports: ["agency listing", "location relationship"],
        },
      ],
      contentProvenance: {
        publicFacts:
          "Sourced from linked public directories or the user-supplied NYC research dataset.",
        generatedEditorial: [
          "longDescription",
          "service descriptions where not explicitly sourced",
          "faqs",
        ],
        notFabricated: [
          "customer review text",
          "client names",
          "partner tier",
          "physical office address",
        ],
      },
      description:
        "Shopify/ecommerce provider included in the Washington agency research dataset.",
      entityType: "agency",
      industries: [],
      languages: [],
      technologies: [],
      contact: {
        email: null,
        phone: null,
        contactPage: null,
        otherEmails: [],
      },
      pricing: {
        projectMinimum: null,
        selectedServices: null,
        hourlyRate: null,
      },
      ratings: [],
      dataQuality: {
        observedAt: "2026-10-03",
        notes: [],
      },
      editorialNote:
        "Descriptions, service explanations and FAQs include editorial summaries. Confirm inferred capabilities with the agency; they are not direct company statements.",
      heroHeadline: "Shopify expertise for Washington businesses.",
    },
    {
      id: "45rpm",
      name: "45RPM",
      website: null,
      logoUrl: "https://placehold.co/160x80?text=45RPM",
      logoType: "generated_placeholder",
      shortDescription:
        "Shopify/ecommerce provider included in the Washington agency research dataset.",
      shortDescriptionSourceType: "ai_generated_editorial",
      longDescription:
        "45RPM has public evidence connecting it to the Washington, DC market. Public directory evidence positions the company around Shopify or ecommerce work.\n\nFor directory visitors, the most relevant capabilities are Shopify development, E-commerce development, Theme customization, Store migration. The agency record is structured to help merchants compare potential partners without turning directory placement into an endorsement. Where the source provides a Shopify Partner Directory profile, the dataset treats that as stronger evidence of Shopify specialization. Where the source is a third-party directory such as Clutch, the record is marked accordingly and the location relationship is kept separate from a verified office claim.\n\nA typical engagement may involve discovery, store architecture, design or theme implementation, migration planning, integration work, quality assurance and post-launch optimization. The exact scope, price, timeline and platform fit should still be confirmed directly with the agency because public directory information can change and service descriptions are often broader than a specific proposal.\n\nThis description is an AI-generated editorial summary built from the public evidence stored in the record. It is intended for your agency directory and should not be presented as a direct quotation from the company. Before publishing time-sensitive details such as partner tiers, ratings, pricing or addresses, recheck the linked source. That keeps the page useful for SEO and comparison while clearly separating sourced facts from generated explanatory copy.",
      longDescriptionSourceType: "ai_generated_editorial_from_public_evidence",
      location: {
        targetCity: "Washington",
        stateCode: "DC",
        country: "United States",
        relationship: "local_or_metro_listing",
        listedLocation: "Takoma Park, MD",
        physicalOfficeIndependentlyVerified: false,
        verificationStatus: "listed_on_city_shopify_directory",
        evidenceUrl: "https://clutch.co/developers/shopify/washington-dc",
        countryCode: "US",
        notes:
          "Public sources associate this agency with the Washington market. A physical office has not been independently verified.",
        primaryLocationAsListed: "Takoma Park, MD",
      },
      shopify: {
        partnerStatusSourceType: "clutch_city_directory",
      },
      services: [
        "Shopify development",
        "E-commerce development",
        "Theme customization",
        "Store migration",
        "Conversion optimization",
      ],
      whatTheyDo: [
        {
          name: "Shopify development",
          description:
            "Shopify development is listed or inferred from the agency's public Shopify/ecommerce positioning.",
          sourceType: "public_source_summary",
        },
        {
          name: "E-commerce development",
          description:
            "E-commerce development is listed or inferred from the agency's public Shopify/ecommerce positioning.",
          sourceType: "public_source_summary",
        },
        {
          name: "Theme customization",
          description:
            "Adapting Shopify themes, sections and Liquid templates to match brand requirements and improve storefront flexibility.",
          sourceType: "ai_generated_editorial",
        },
        {
          name: "Store migration",
          description:
            "Planning and executing moves from another commerce platform to Shopify while preserving products, customers and essential store data where supported.",
          sourceType: "ai_generated_editorial",
        },
        {
          name: "Conversion optimization",
          description:
            "Reviewing shopping journeys, product pages, carts and merchandising patterns to identify opportunities that may improve conversion performance.",
          sourceType: "ai_generated_editorial",
        },
      ],
      portfolio: [],
      portfolioStatus: "source_supported_entries_only; no fabricated client projects",
      reviews: [],
      reviewsStatus:
        "aggregate_or_public_source_only; no fabricated customer review text",
      faqs: [
        {
          question: "Does 45RPM work with Shopify?",
          answer:
            "45RPM appears in public Shopify/ecommerce research used for this dataset. Check the linked source for the latest specialization and partner status.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "Is 45RPM based in Washington?",
          answer:
            "This record has a public local/metro listing for Washington, DC. Review the location relationship field before presenting the company as physically local.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "What Shopify services can 45RPM provide?",
          answer:
            "The record highlights store development, theme work, migration, optimization and integrations where supported by public positioning or editorial categorization.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "Does 45RPM work with Shopify Plus?",
          answer:
            "Shopify Plus capability is only treated as confirmed when the public source explicitly indicates it. Otherwise, ask the agency directly.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "How much does 45RPM charge?",
          answer:
            "Pricing varies by scope. Use any published price only as a directory snapshot and request a current quote from 45RPM.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "Can 45RPM migrate a store to Shopify?",
          answer:
            "Migration is a common ecommerce service, but availability for a specific platform and catalog size should be confirmed directly.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "Does 45RPM offer ongoing Shopify support?",
          answer:
            "Ongoing support may include maintenance, troubleshooting and optimization. Confirm retainers, response times and support boundaries with the agency.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "How should I evaluate 45RPM?",
          answer:
            "Compare relevant Shopify experience, portfolio evidence, technical fit, communication, pricing model and verified reviews rather than relying on a single directory metric.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "Are the reviews for 45RPM verified by this directory?",
          answer:
            "No. This dataset links to public third-party sources and does not independently verify reviewer identity or project outcomes.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "How current is this 45RPM profile?",
          answer:
            "The research snapshot is dated 2026-10-03. Partner tiers, ratings, staff, services and contact details can change, so important facts should be rechecked before publication.",
          sourceType: "ai_generated_editorial",
        },
      ],
      sources: [
        {
          url: "https://clutch.co/developers/shopify/washington-dc",
          type: "clutch_city_directory",
          observedAt: "2026-10-03",
          supports: ["agency listing", "location relationship"],
        },
      ],
      contentProvenance: {
        publicFacts:
          "Sourced from linked public directories or the user-supplied NYC research dataset.",
        generatedEditorial: [
          "longDescription",
          "service descriptions where not explicitly sourced",
          "faqs",
        ],
        notFabricated: [
          "customer review text",
          "client names",
          "partner tier",
          "physical office address",
        ],
      },
      description:
        "Shopify/ecommerce provider included in the Washington agency research dataset.",
      entityType: "agency",
      industries: [],
      languages: [],
      technologies: [],
      contact: {
        email: null,
        phone: null,
        contactPage: null,
        otherEmails: [],
      },
      pricing: {
        projectMinimum: null,
        selectedServices: null,
        hourlyRate: null,
      },
      ratings: [],
      dataQuality: {
        observedAt: "2026-10-03",
        notes: [],
      },
      editorialNote:
        "Descriptions, service explanations and FAQs include editorial summaries. Confirm inferred capabilities with the agency; they are not direct company statements.",
      heroHeadline: "Shopify expertise for Washington businesses.",
    },
    {
      id: "webandcrafts",
      name: "Webandcrafts",
      website: null,
      logoUrl: "https://placehold.co/160x80?text=Webandcrafts",
      logoType: "generated_placeholder",
      shortDescription:
        "Shopify/ecommerce provider included in the Washington agency research dataset.",
      shortDescriptionSourceType: "ai_generated_editorial",
      longDescription:
        "Webandcrafts has public evidence connecting it to the Washington, DC market. Public directory evidence positions the company around Shopify or ecommerce work.\n\nFor directory visitors, the most relevant capabilities are Shopify development, E-commerce development, Shopify store design & development, Theme customization. The agency record is structured to help merchants compare potential partners without turning directory placement into an endorsement. Where the source provides a Shopify Partner Directory profile, the dataset treats that as stronger evidence of Shopify specialization. Where the source is a third-party directory such as Clutch, the record is marked accordingly and the location relationship is kept separate from a verified office claim.\n\nA typical engagement may involve discovery, store architecture, design or theme implementation, migration planning, integration work, quality assurance and post-launch optimization. The exact scope, price, timeline and platform fit should still be confirmed directly with the agency because public directory information can change and service descriptions are often broader than a specific proposal.\n\nThis description is an AI-generated editorial summary built from the public evidence stored in the record. It is intended for your agency directory and should not be presented as a direct quotation from the company. Before publishing time-sensitive details such as partner tiers, ratings, pricing or addresses, recheck the linked source. That keeps the page useful for SEO and comparison while clearly separating sourced facts from generated explanatory copy.",
      longDescriptionSourceType: "ai_generated_editorial_from_public_evidence",
      location: {
        targetCity: "Washington",
        stateCode: "DC",
        country: "United States",
        relationship: "local_or_metro_listing",
        listedLocation: "Washington, DC",
        physicalOfficeIndependentlyVerified: false,
        verificationStatus: "listed_on_city_shopify_directory",
        evidenceUrl: "https://clutch.co/developers/shopify/washington-dc",
        countryCode: "US",
        notes:
          "Public sources associate this agency with the Washington market. A physical office has not been independently verified.",
        primaryLocationAsListed: "Washington, DC",
      },
      shopify: {
        partnerStatusSourceType: "clutch_city_directory",
      },
      services: [
        "Shopify development",
        "E-commerce development",
        "Shopify store design & development",
        "Theme customization",
        "Store migration",
      ],
      whatTheyDo: [
        {
          name: "Shopify development",
          description:
            "Shopify development is listed or inferred from the agency's public Shopify/ecommerce positioning.",
          sourceType: "public_source_summary",
        },
        {
          name: "E-commerce development",
          description:
            "E-commerce development is listed or inferred from the agency's public Shopify/ecommerce positioning.",
          sourceType: "public_source_summary",
        },
        {
          name: "Shopify store design & development",
          description:
            "Designing and building responsive Shopify storefronts with a focus on usability, merchandising and maintainable theme architecture.",
          sourceType: "ai_generated_editorial",
        },
        {
          name: "Theme customization",
          description:
            "Adapting Shopify themes, sections and Liquid templates to match brand requirements and improve storefront flexibility.",
          sourceType: "ai_generated_editorial",
        },
        {
          name: "Store migration",
          description:
            "Planning and executing moves from another commerce platform to Shopify while preserving products, customers and essential store data where supported.",
          sourceType: "ai_generated_editorial",
        },
      ],
      portfolio: [],
      portfolioStatus: "source_supported_entries_only; no fabricated client projects",
      reviews: [],
      reviewsStatus:
        "aggregate_or_public_source_only; no fabricated customer review text",
      faqs: [
        {
          question: "Does Webandcrafts work with Shopify?",
          answer:
            "Webandcrafts appears in public Shopify/ecommerce research used for this dataset. Check the linked source for the latest specialization and partner status.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "Is Webandcrafts based in Washington?",
          answer:
            "This record has a public local/metro listing for Washington, DC. Review the location relationship field before presenting the company as physically local.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "What Shopify services can Webandcrafts provide?",
          answer:
            "The record highlights store development, theme work, migration, optimization and integrations where supported by public positioning or editorial categorization.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "Does Webandcrafts work with Shopify Plus?",
          answer:
            "Shopify Plus capability is only treated as confirmed when the public source explicitly indicates it. Otherwise, ask the agency directly.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "How much does Webandcrafts charge?",
          answer:
            "Pricing varies by scope. Use any published price only as a directory snapshot and request a current quote from Webandcrafts.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "Can Webandcrafts migrate a store to Shopify?",
          answer:
            "Migration is a common ecommerce service, but availability for a specific platform and catalog size should be confirmed directly.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "Does Webandcrafts offer ongoing Shopify support?",
          answer:
            "Ongoing support may include maintenance, troubleshooting and optimization. Confirm retainers, response times and support boundaries with the agency.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "How should I evaluate Webandcrafts?",
          answer:
            "Compare relevant Shopify experience, portfolio evidence, technical fit, communication, pricing model and verified reviews rather than relying on a single directory metric.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "Are the reviews for Webandcrafts verified by this directory?",
          answer:
            "No. This dataset links to public third-party sources and does not independently verify reviewer identity or project outcomes.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "How current is this Webandcrafts profile?",
          answer:
            "The research snapshot is dated 2026-10-03. Partner tiers, ratings, staff, services and contact details can change, so important facts should be rechecked before publication.",
          sourceType: "ai_generated_editorial",
        },
      ],
      sources: [
        {
          url: "https://clutch.co/developers/shopify/washington-dc",
          type: "clutch_city_directory",
          observedAt: "2026-10-03",
          supports: ["agency listing", "location relationship"],
        },
      ],
      contentProvenance: {
        publicFacts:
          "Sourced from linked public directories or the user-supplied NYC research dataset.",
        generatedEditorial: [
          "longDescription",
          "service descriptions where not explicitly sourced",
          "faqs",
        ],
        notFabricated: [
          "customer review text",
          "client names",
          "partner tier",
          "physical office address",
        ],
      },
      description:
        "Shopify/ecommerce provider included in the Washington agency research dataset.",
      entityType: "agency",
      industries: [],
      languages: [],
      technologies: [],
      contact: {
        email: null,
        phone: null,
        contactPage: null,
        otherEmails: [],
      },
      pricing: {
        projectMinimum: null,
        selectedServices: null,
        hourlyRate: null,
      },
      ratings: [],
      dataQuality: {
        observedAt: "2026-10-03",
        notes: [],
      },
      editorialNote:
        "Descriptions, service explanations and FAQs include editorial summaries. Confirm inferred capabilities with the agency; they are not direct company statements.",
      heroHeadline: "Shopify expertise for Washington businesses.",
    },
    {
      id: "wagento-creative-llc",
      name: "Wagento Creative LLC",
      website: null,
      logoUrl: "https://placehold.co/160x80?text=Wagento%20Creative%20LLC",
      logoType: "generated_placeholder",
      shortDescription:
        "Shopify/ecommerce provider included in the Washington agency research dataset.",
      shortDescriptionSourceType: "ai_generated_editorial",
      longDescription:
        "Wagento Creative LLC has public evidence connecting it to the Washington, DC market. Public directory evidence positions the company around Shopify or ecommerce work.\n\nFor directory visitors, the most relevant capabilities are Shopify development, E-commerce development, Store migration, Conversion optimization. The agency record is structured to help merchants compare potential partners without turning directory placement into an endorsement. Where the source provides a Shopify Partner Directory profile, the dataset treats that as stronger evidence of Shopify specialization. Where the source is a third-party directory such as Clutch, the record is marked accordingly and the location relationship is kept separate from a verified office claim.\n\nA typical engagement may involve discovery, store architecture, design or theme implementation, migration planning, integration work, quality assurance and post-launch optimization. The exact scope, price, timeline and platform fit should still be confirmed directly with the agency because public directory information can change and service descriptions are often broader than a specific proposal.\n\nThis description is an AI-generated editorial summary built from the public evidence stored in the record. It is intended for your agency directory and should not be presented as a direct quotation from the company. Before publishing time-sensitive details such as partner tiers, ratings, pricing or addresses, recheck the linked source. That keeps the page useful for SEO and comparison while clearly separating sourced facts from generated explanatory copy.",
      longDescriptionSourceType: "ai_generated_editorial_from_public_evidence",
      location: {
        targetCity: "Washington",
        stateCode: "DC",
        country: "United States",
        relationship: "local_or_metro_listing",
        listedLocation: "McLean, VA",
        physicalOfficeIndependentlyVerified: false,
        verificationStatus: "listed_on_city_shopify_directory",
        evidenceUrl: "https://clutch.co/developers/shopify/washington-dc",
        countryCode: "US",
        notes:
          "Public sources associate this agency with the Washington market. A physical office has not been independently verified.",
        primaryLocationAsListed: "McLean, VA",
      },
      shopify: {
        partnerStatusSourceType: "clutch_city_directory",
      },
      services: [
        "Shopify development",
        "E-commerce development",
        "Store migration",
        "Conversion optimization",
        "Custom integrations",
      ],
      whatTheyDo: [
        {
          name: "Shopify development",
          description:
            "Shopify development is listed or inferred from the agency's public Shopify/ecommerce positioning.",
          sourceType: "public_source_summary",
        },
        {
          name: "E-commerce development",
          description:
            "E-commerce development is listed or inferred from the agency's public Shopify/ecommerce positioning.",
          sourceType: "public_source_summary",
        },
        {
          name: "Store migration",
          description:
            "Planning and executing moves from another commerce platform to Shopify while preserving products, customers and essential store data where supported.",
          sourceType: "ai_generated_editorial",
        },
        {
          name: "Conversion optimization",
          description:
            "Reviewing shopping journeys, product pages, carts and merchandising patterns to identify opportunities that may improve conversion performance.",
          sourceType: "ai_generated_editorial",
        },
        {
          name: "Custom integrations",
          description:
            "Connecting Shopify with apps, ERPs, CRMs, fulfillment tools, analytics platforms and other business systems when the project requires it.",
          sourceType: "ai_generated_editorial",
        },
      ],
      portfolio: [],
      portfolioStatus: "source_supported_entries_only; no fabricated client projects",
      reviews: [],
      reviewsStatus:
        "aggregate_or_public_source_only; no fabricated customer review text",
      faqs: [
        {
          question: "Does Wagento Creative LLC work with Shopify?",
          answer:
            "Wagento Creative LLC appears in public Shopify/ecommerce research used for this dataset. Check the linked source for the latest specialization and partner status.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "Is Wagento Creative LLC based in Washington?",
          answer:
            "This record has a public local/metro listing for Washington, DC. Review the location relationship field before presenting the company as physically local.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "What Shopify services can Wagento Creative LLC provide?",
          answer:
            "The record highlights store development, theme work, migration, optimization and integrations where supported by public positioning or editorial categorization.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "Does Wagento Creative LLC work with Shopify Plus?",
          answer:
            "Shopify Plus capability is only treated as confirmed when the public source explicitly indicates it. Otherwise, ask the agency directly.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "How much does Wagento Creative LLC charge?",
          answer:
            "Pricing varies by scope. Use any published price only as a directory snapshot and request a current quote from Wagento Creative LLC.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "Can Wagento Creative LLC migrate a store to Shopify?",
          answer:
            "Migration is a common ecommerce service, but availability for a specific platform and catalog size should be confirmed directly.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "Does Wagento Creative LLC offer ongoing Shopify support?",
          answer:
            "Ongoing support may include maintenance, troubleshooting and optimization. Confirm retainers, response times and support boundaries with the agency.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "How should I evaluate Wagento Creative LLC?",
          answer:
            "Compare relevant Shopify experience, portfolio evidence, technical fit, communication, pricing model and verified reviews rather than relying on a single directory metric.",
          sourceType: "ai_generated_editorial",
        },
        {
          question:
            "Are the reviews for Wagento Creative LLC verified by this directory?",
          answer:
            "No. This dataset links to public third-party sources and does not independently verify reviewer identity or project outcomes.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "How current is this Wagento Creative LLC profile?",
          answer:
            "The research snapshot is dated 2026-10-03. Partner tiers, ratings, staff, services and contact details can change, so important facts should be rechecked before publication.",
          sourceType: "ai_generated_editorial",
        },
      ],
      sources: [
        {
          url: "https://clutch.co/developers/shopify/washington-dc",
          type: "clutch_city_directory",
          observedAt: "2026-10-03",
          supports: ["agency listing", "location relationship"],
        },
      ],
      contentProvenance: {
        publicFacts:
          "Sourced from linked public directories or the user-supplied NYC research dataset.",
        generatedEditorial: [
          "longDescription",
          "service descriptions where not explicitly sourced",
          "faqs",
        ],
        notFabricated: [
          "customer review text",
          "client names",
          "partner tier",
          "physical office address",
        ],
      },
      description:
        "Shopify/ecommerce provider included in the Washington agency research dataset.",
      entityType: "agency",
      industries: [],
      languages: [],
      technologies: [],
      contact: {
        email: null,
        phone: null,
        contactPage: null,
        otherEmails: [],
      },
      pricing: {
        projectMinimum: null,
        selectedServices: null,
        hourlyRate: null,
      },
      ratings: [],
      dataQuality: {
        observedAt: "2026-10-03",
        notes: [],
      },
      editorialNote:
        "Descriptions, service explanations and FAQs include editorial summaries. Confirm inferred capabilities with the agency; they are not direct company statements.",
      heroHeadline: "Shopify expertise for Washington businesses.",
    },
    {
      id: "split-development-shopify-plus-agency",
      name: "SPLIT Development - Shopify Plus Agency",
      website: null,
      logoUrl: "https://placehold.co/160x80?text=SPLIT%20Development%20-%20Shop",
      logoType: "generated_placeholder",
      shortDescription:
        "Shopify and Shopify Plus development agency focused on custom storefronts and ecommerce delivery.",
      shortDescriptionSourceType: "public_source_paraphrase",
      longDescription:
        "SPLIT Development - Shopify Plus Agency is included as a Shopify-focused provider that can be considered by businesses in Washington, DC; this dataset does not claim a physical office in the city. Shopify and Shopify Plus development agency focused on custom storefronts and ecommerce delivery.\n\nFor directory visitors, the most relevant capabilities are Shopify development, Shopify Plus, Web design, E-commerce development. The agency record is structured to help merchants compare potential partners without turning directory placement into an endorsement. Where the source provides a Shopify Partner Directory profile, the dataset treats that as stronger evidence of Shopify specialization. Where the source is a third-party directory such as Clutch, the record is marked accordingly and the location relationship is kept separate from a verified office claim.\n\nA typical engagement may involve discovery, store architecture, design or theme implementation, migration planning, integration work, quality assurance and post-launch optimization. The exact scope, price, timeline and platform fit should still be confirmed directly with the agency because public directory information can change and service descriptions are often broader than a specific proposal.\n\nThis description is an AI-generated editorial summary built from the public evidence stored in the record. It is intended for your agency directory and should not be presented as a direct quotation from the company. Before publishing time-sensitive details such as partner tiers, ratings, pricing or addresses, recheck the linked source. That keeps the page useful for SEO and comparison while clearly separating sourced facts from generated explanatory copy.",
      longDescriptionSourceType: "ai_generated_editorial_from_public_evidence",
      location: {
        targetCity: "Washington",
        stateCode: "DC",
        country: "United States",
        relationship: "remote_serves_city",
        listedLocation: null,
        physicalOfficeIndependentlyVerified: false,
        verificationStatus: "shopify-focused provider; city office not claimed",
        evidenceUrl: "https://clutch.co/developers/shopify",
        countryCode: "US",
        streetAddress: null,
        borough: null,
        postalCode: null,
        notes:
          "Included as a remote option for Washington. This listing does not confirm an office in Washington; confirm service availability and working hours directly.",
        primaryLocationAsListed: null,
      },
      shopify: {
        partnerStatusSourceType: "clutch_directory",
      },
      services: [
        "Shopify development",
        "Shopify Plus",
        "Web design",
        "E-commerce development",
        "SEO & discoverability",
      ],
      whatTheyDo: [
        {
          name: "Shopify development",
          description:
            "Shopify development is listed or inferred from the agency's public Shopify/ecommerce positioning.",
          sourceType: "public_source_summary",
        },
        {
          name: "Shopify Plus",
          description:
            "Shopify Plus is listed or inferred from the agency's public Shopify/ecommerce positioning.",
          sourceType: "public_source_summary",
        },
        {
          name: "Web design",
          description:
            "Web design is listed or inferred from the agency's public Shopify/ecommerce positioning.",
          sourceType: "public_source_summary",
        },
        {
          name: "E-commerce development",
          description:
            "E-commerce development is listed or inferred from the agency's public Shopify/ecommerce positioning.",
          sourceType: "public_source_summary",
        },
        {
          name: "SEO & discoverability",
          description:
            "Improving technical and on-page ecommerce SEO foundations, content structure and store discoverability.",
          sourceType: "ai_generated_editorial",
        },
      ],
      portfolio: [],
      portfolioStatus: "source_supported_entries_only; no fabricated client projects",
      reviews: [
        {
          source: "Clutch",
          rating: 5.0,
          reviewCount: 65,
          reviewText: null,
          reviewSummary:
            "Public source showed a 5.0/5 aggregate rating across 65 reviews.",
          summaryType: "paraphrased_aggregate",
          sourceUrl: "https://clutch.co/developers/shopify",
        },
      ],
      reviewsStatus:
        "aggregate_or_public_source_only; no fabricated customer review text",
      faqs: [
        {
          question: "Does SPLIT Development - Shopify Plus Agency work with Shopify?",
          answer:
            "SPLIT Development - Shopify Plus Agency appears in public Shopify/ecommerce research used for this dataset. Check the linked source for the latest specialization and partner status.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "Is SPLIT Development - Shopify Plus Agency based in Washington?",
          answer:
            "This record is included as a remote-serving option; a local office is not claimed for Washington, DC. Review the location relationship field before presenting the company as physically local.",
          sourceType: "ai_generated_editorial",
        },
        {
          question:
            "What Shopify services can SPLIT Development - Shopify Plus Agency provide?",
          answer:
            "The record highlights store development, theme work, migration, optimization and integrations where supported by public positioning or editorial categorization.",
          sourceType: "ai_generated_editorial",
        },
        {
          question:
            "Does SPLIT Development - Shopify Plus Agency work with Shopify Plus?",
          answer:
            "Shopify Plus capability is only treated as confirmed when the public source explicitly indicates it. Otherwise, ask the agency directly.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "How much does SPLIT Development - Shopify Plus Agency charge?",
          answer:
            "Pricing varies by scope. Use any published price only as a directory snapshot and request a current quote from SPLIT Development - Shopify Plus Agency.",
          sourceType: "ai_generated_editorial",
        },
        {
          question:
            "Can SPLIT Development - Shopify Plus Agency migrate a store to Shopify?",
          answer:
            "Migration is a common ecommerce service, but availability for a specific platform and catalog size should be confirmed directly.",
          sourceType: "ai_generated_editorial",
        },
        {
          question:
            "Does SPLIT Development - Shopify Plus Agency offer ongoing Shopify support?",
          answer:
            "Ongoing support may include maintenance, troubleshooting and optimization. Confirm retainers, response times and support boundaries with the agency.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "How should I evaluate SPLIT Development - Shopify Plus Agency?",
          answer:
            "Compare relevant Shopify experience, portfolio evidence, technical fit, communication, pricing model and verified reviews rather than relying on a single directory metric.",
          sourceType: "ai_generated_editorial",
        },
        {
          question:
            "Are the reviews for SPLIT Development - Shopify Plus Agency verified by this directory?",
          answer:
            "No. This dataset links to public third-party sources and does not independently verify reviewer identity or project outcomes.",
          sourceType: "ai_generated_editorial",
        },
        {
          question:
            "How current is this SPLIT Development - Shopify Plus Agency profile?",
          answer:
            "The research snapshot is dated 2026-10-03. Partner tiers, ratings, staff, services and contact details can change, so important facts should be rechecked before publication.",
          sourceType: "ai_generated_editorial",
        },
      ],
      sources: [
        {
          url: "https://clutch.co/developers/shopify",
          type: "clutch_directory",
          observedAt: "2026-10-03",
          supports: ["agency listing", "location relationship"],
        },
      ],
      contentProvenance: {
        publicFacts:
          "Sourced from linked public directories or the user-supplied NYC research dataset.",
        generatedEditorial: [
          "longDescription",
          "service descriptions where not explicitly sourced",
          "faqs",
        ],
        notFabricated: [
          "customer review text",
          "client names",
          "partner tier",
          "physical office address",
        ],
      },
      description:
        "Shopify and Shopify Plus development agency focused on custom storefronts and ecommerce delivery.",
      entityType: "agency",
      industries: [],
      languages: [],
      technologies: [],
      contact: {
        email: null,
        phone: null,
        contactPage: null,
        otherEmails: [],
      },
      pricing: {
        projectMinimum: null,
        selectedServices: null,
        hourlyRate: null,
      },
      ratings: [
        {
          platform: "Clutch",
          value: 5.0,
          scale: 5,
          reviewCount: 65,
          sourceUrl: "https://clutch.co/developers/shopify",
          observedAt: "2026-10-03",
        },
      ],
      dataQuality: {
        observedAt: "2026-10-03",
        notes: [],
      },
      editorialNote:
        "Descriptions, service explanations and FAQs include editorial summaries. Confirm inferred capabilities with the agency; they are not direct company statements.",
      heroHeadline: "Shopify expertise for Washington businesses.",
    },
    {
      id: "fj-solutions",
      name: "FJ Solutions",
      website: null,
      logoUrl: "https://placehold.co/160x80?text=FJ%20Solutions",
      logoType: "generated_placeholder",
      shortDescription:
        "E-commerce development provider with Shopify and BigCommerce capabilities.",
      shortDescriptionSourceType: "public_source_paraphrase",
      longDescription:
        "FJ Solutions is included as a Shopify-focused provider that can be considered by businesses in Washington, DC; this dataset does not claim a physical office in the city. E-commerce development provider with Shopify and BigCommerce capabilities.\n\nFor directory visitors, the most relevant capabilities are E-commerce development, Shopify, Email marketing, SEO. The agency record is structured to help merchants compare potential partners without turning directory placement into an endorsement. Where the source provides a Shopify Partner Directory profile, the dataset treats that as stronger evidence of Shopify specialization. Where the source is a third-party directory such as Clutch, the record is marked accordingly and the location relationship is kept separate from a verified office claim.\n\nA typical engagement may involve discovery, store architecture, design or theme implementation, migration planning, integration work, quality assurance and post-launch optimization. The exact scope, price, timeline and platform fit should still be confirmed directly with the agency because public directory information can change and service descriptions are often broader than a specific proposal.\n\nThis description is an AI-generated editorial summary built from the public evidence stored in the record. It is intended for your agency directory and should not be presented as a direct quotation from the company. Before publishing time-sensitive details such as partner tiers, ratings, pricing or addresses, recheck the linked source. That keeps the page useful for SEO and comparison while clearly separating sourced facts from generated explanatory copy.",
      longDescriptionSourceType: "ai_generated_editorial_from_public_evidence",
      location: {
        targetCity: "Washington",
        stateCode: "DC",
        country: "United States",
        relationship: "remote_serves_city",
        listedLocation: null,
        physicalOfficeIndependentlyVerified: false,
        verificationStatus: "national/remote service option; city office not claimed",
        evidenceUrl: "https://clutch.co/developers/ecommerce",
        countryCode: "US",
        streetAddress: null,
        borough: null,
        postalCode: null,
        notes:
          "Included as a remote option for Washington. This listing does not confirm an office in Washington; confirm service availability and working hours directly.",
        primaryLocationAsListed: null,
      },
      shopify: {
        partnerStatusSourceType: "clutch_directory",
      },
      services: [
        "E-commerce development",
        "Shopify",
        "Email marketing",
        "SEO",
        "Web design",
      ],
      whatTheyDo: [
        {
          name: "E-commerce development",
          description:
            "E-commerce development is listed or inferred from the agency's public Shopify/ecommerce positioning.",
          sourceType: "public_source_summary",
        },
        {
          name: "Shopify",
          description:
            "Shopify is listed or inferred from the agency's public Shopify/ecommerce positioning.",
          sourceType: "public_source_summary",
        },
        {
          name: "Email marketing",
          description:
            "Email marketing is listed or inferred from the agency's public Shopify/ecommerce positioning.",
          sourceType: "public_source_summary",
        },
        {
          name: "SEO",
          description:
            "SEO is listed or inferred from the agency's public Shopify/ecommerce positioning.",
          sourceType: "public_source_summary",
        },
        {
          name: "Web design",
          description:
            "Web design is listed or inferred from the agency's public Shopify/ecommerce positioning.",
          sourceType: "public_source_summary",
        },
      ],
      portfolio: [],
      portfolioStatus: "source_supported_entries_only; no fabricated client projects",
      reviews: [
        {
          source: "Clutch",
          rating: 4.9,
          reviewCount: 39,
          reviewText: null,
          reviewSummary:
            "Public source showed a 4.9/5 aggregate rating across 39 reviews.",
          summaryType: "paraphrased_aggregate",
          sourceUrl: "https://clutch.co/developers/ecommerce",
        },
      ],
      reviewsStatus:
        "aggregate_or_public_source_only; no fabricated customer review text",
      faqs: [
        {
          question: "Does FJ Solutions work with Shopify?",
          answer:
            "FJ Solutions appears in public Shopify/ecommerce research used for this dataset. Check the linked source for the latest specialization and partner status.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "Is FJ Solutions based in Washington?",
          answer:
            "This record is included as a remote-serving option; a local office is not claimed for Washington, DC. Review the location relationship field before presenting the company as physically local.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "What Shopify services can FJ Solutions provide?",
          answer:
            "The record highlights store development, theme work, migration, optimization and integrations where supported by public positioning or editorial categorization.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "Does FJ Solutions work with Shopify Plus?",
          answer:
            "Shopify Plus capability is only treated as confirmed when the public source explicitly indicates it. Otherwise, ask the agency directly.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "How much does FJ Solutions charge?",
          answer:
            "Pricing varies by scope. Use any published price only as a directory snapshot and request a current quote from FJ Solutions.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "Can FJ Solutions migrate a store to Shopify?",
          answer:
            "Migration is a common ecommerce service, but availability for a specific platform and catalog size should be confirmed directly.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "Does FJ Solutions offer ongoing Shopify support?",
          answer:
            "Ongoing support may include maintenance, troubleshooting and optimization. Confirm retainers, response times and support boundaries with the agency.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "How should I evaluate FJ Solutions?",
          answer:
            "Compare relevant Shopify experience, portfolio evidence, technical fit, communication, pricing model and verified reviews rather than relying on a single directory metric.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "Are the reviews for FJ Solutions verified by this directory?",
          answer:
            "No. This dataset links to public third-party sources and does not independently verify reviewer identity or project outcomes.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "How current is this FJ Solutions profile?",
          answer:
            "The research snapshot is dated 2026-10-03. Partner tiers, ratings, staff, services and contact details can change, so important facts should be rechecked before publication.",
          sourceType: "ai_generated_editorial",
        },
      ],
      sources: [
        {
          url: "https://clutch.co/developers/ecommerce",
          type: "clutch_directory",
          observedAt: "2026-10-03",
          supports: ["agency listing", "location relationship"],
        },
      ],
      contentProvenance: {
        publicFacts:
          "Sourced from linked public directories or the user-supplied NYC research dataset.",
        generatedEditorial: [
          "longDescription",
          "service descriptions where not explicitly sourced",
          "faqs",
        ],
        notFabricated: [
          "customer review text",
          "client names",
          "partner tier",
          "physical office address",
        ],
      },
      description:
        "E-commerce development provider with Shopify and BigCommerce capabilities.",
      entityType: "agency",
      industries: [],
      languages: [],
      technologies: [],
      contact: {
        email: null,
        phone: null,
        contactPage: null,
        otherEmails: [],
      },
      pricing: {
        projectMinimum: null,
        selectedServices: null,
        hourlyRate: null,
      },
      ratings: [
        {
          platform: "Clutch",
          value: 4.9,
          scale: 5,
          reviewCount: 39,
          sourceUrl: "https://clutch.co/developers/ecommerce",
          observedAt: "2026-10-03",
        },
      ],
      dataQuality: {
        observedAt: "2026-10-03",
        notes: [],
      },
      editorialNote:
        "Descriptions, service explanations and FAQs include editorial summaries. Confirm inferred capabilities with the agency; they are not direct company statements.",
      heroHeadline: "Shopify expertise for Washington businesses.",
    },
    {
      id: "superco",
      name: "Superco",
      website: null,
      logoUrl: "https://placehold.co/160x80?text=Superco",
      logoType: "generated_placeholder",
      shortDescription: "Shopify-focused ecommerce development and UX/UI provider.",
      shortDescriptionSourceType: "public_source_paraphrase",
      longDescription:
        "Superco is included as a Shopify-focused provider that can be considered by businesses in Washington, DC; this dataset does not claim a physical office in the city. Shopify-focused ecommerce development and UX/UI provider.\n\nFor directory visitors, the most relevant capabilities are Shopify development, UX/UI design, Online store development, Shopify store design & development. The agency record is structured to help merchants compare potential partners without turning directory placement into an endorsement. Where the source provides a Shopify Partner Directory profile, the dataset treats that as stronger evidence of Shopify specialization. Where the source is a third-party directory such as Clutch, the record is marked accordingly and the location relationship is kept separate from a verified office claim.\n\nA typical engagement may involve discovery, store architecture, design or theme implementation, migration planning, integration work, quality assurance and post-launch optimization. The exact scope, price, timeline and platform fit should still be confirmed directly with the agency because public directory information can change and service descriptions are often broader than a specific proposal.\n\nThis description is an AI-generated editorial summary built from the public evidence stored in the record. It is intended for your agency directory and should not be presented as a direct quotation from the company. Before publishing time-sensitive details such as partner tiers, ratings, pricing or addresses, recheck the linked source. That keeps the page useful for SEO and comparison while clearly separating sourced facts from generated explanatory copy.",
      longDescriptionSourceType: "ai_generated_editorial_from_public_evidence",
      location: {
        targetCity: "Washington",
        stateCode: "DC",
        country: "United States",
        relationship: "remote_serves_city",
        listedLocation: null,
        physicalOfficeIndependentlyVerified: false,
        verificationStatus: "shopify-focused provider; city office not claimed",
        evidenceUrl: "https://clutch.co/developers/shopify",
        countryCode: "US",
        streetAddress: null,
        borough: null,
        postalCode: null,
        notes:
          "Included as a remote option for Washington. This listing does not confirm an office in Washington; confirm service availability and working hours directly.",
        primaryLocationAsListed: null,
      },
      shopify: {
        partnerStatusSourceType: "clutch_directory",
      },
      services: [
        "Shopify development",
        "UX/UI design",
        "Online store development",
        "Shopify store design & development",
        "Theme customization",
      ],
      whatTheyDo: [
        {
          name: "Shopify development",
          description:
            "Shopify development is listed or inferred from the agency's public Shopify/ecommerce positioning.",
          sourceType: "public_source_summary",
        },
        {
          name: "UX/UI design",
          description:
            "UX/UI design is listed or inferred from the agency's public Shopify/ecommerce positioning.",
          sourceType: "public_source_summary",
        },
        {
          name: "Online store development",
          description:
            "Online store development is listed or inferred from the agency's public Shopify/ecommerce positioning.",
          sourceType: "public_source_summary",
        },
        {
          name: "Shopify store design & development",
          description:
            "Designing and building responsive Shopify storefronts with a focus on usability, merchandising and maintainable theme architecture.",
          sourceType: "ai_generated_editorial",
        },
        {
          name: "Theme customization",
          description:
            "Adapting Shopify themes, sections and Liquid templates to match brand requirements and improve storefront flexibility.",
          sourceType: "ai_generated_editorial",
        },
      ],
      portfolio: [],
      portfolioStatus: "source_supported_entries_only; no fabricated client projects",
      reviews: [
        {
          source: "Clutch",
          rating: 4.9,
          reviewCount: 58,
          reviewText: null,
          reviewSummary:
            "Public source showed a 4.9/5 aggregate rating across 58 reviews.",
          summaryType: "paraphrased_aggregate",
          sourceUrl: "https://clutch.co/developers/shopify",
        },
      ],
      reviewsStatus:
        "aggregate_or_public_source_only; no fabricated customer review text",
      faqs: [
        {
          question: "Does Superco work with Shopify?",
          answer:
            "Superco appears in public Shopify/ecommerce research used for this dataset. Check the linked source for the latest specialization and partner status.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "Is Superco based in Washington?",
          answer:
            "This record is included as a remote-serving option; a local office is not claimed for Washington, DC. Review the location relationship field before presenting the company as physically local.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "What Shopify services can Superco provide?",
          answer:
            "The record highlights store development, theme work, migration, optimization and integrations where supported by public positioning or editorial categorization.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "Does Superco work with Shopify Plus?",
          answer:
            "Shopify Plus capability is only treated as confirmed when the public source explicitly indicates it. Otherwise, ask the agency directly.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "How much does Superco charge?",
          answer:
            "Pricing varies by scope. Use any published price only as a directory snapshot and request a current quote from Superco.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "Can Superco migrate a store to Shopify?",
          answer:
            "Migration is a common ecommerce service, but availability for a specific platform and catalog size should be confirmed directly.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "Does Superco offer ongoing Shopify support?",
          answer:
            "Ongoing support may include maintenance, troubleshooting and optimization. Confirm retainers, response times and support boundaries with the agency.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "How should I evaluate Superco?",
          answer:
            "Compare relevant Shopify experience, portfolio evidence, technical fit, communication, pricing model and verified reviews rather than relying on a single directory metric.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "Are the reviews for Superco verified by this directory?",
          answer:
            "No. This dataset links to public third-party sources and does not independently verify reviewer identity or project outcomes.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "How current is this Superco profile?",
          answer:
            "The research snapshot is dated 2026-10-03. Partner tiers, ratings, staff, services and contact details can change, so important facts should be rechecked before publication.",
          sourceType: "ai_generated_editorial",
        },
      ],
      sources: [
        {
          url: "https://clutch.co/developers/shopify",
          type: "clutch_directory",
          observedAt: "2026-10-03",
          supports: ["agency listing", "location relationship"],
        },
      ],
      contentProvenance: {
        publicFacts:
          "Sourced from linked public directories or the user-supplied NYC research dataset.",
        generatedEditorial: [
          "longDescription",
          "service descriptions where not explicitly sourced",
          "faqs",
        ],
        notFabricated: [
          "customer review text",
          "client names",
          "partner tier",
          "physical office address",
        ],
      },
      description: "Shopify-focused ecommerce development and UX/UI provider.",
      entityType: "agency",
      industries: [],
      languages: [],
      technologies: [],
      contact: {
        email: null,
        phone: null,
        contactPage: null,
        otherEmails: [],
      },
      pricing: {
        projectMinimum: null,
        selectedServices: null,
        hourlyRate: null,
      },
      ratings: [
        {
          platform: "Clutch",
          value: 4.9,
          scale: 5,
          reviewCount: 58,
          sourceUrl: "https://clutch.co/developers/shopify",
          observedAt: "2026-10-03",
        },
      ],
      dataQuality: {
        observedAt: "2026-10-03",
        notes: [],
      },
      editorialNote:
        "Descriptions, service explanations and FAQs include editorial summaries. Confirm inferred capabilities with the agency; they are not direct company statements.",
      heroHeadline: "Shopify expertise for Washington businesses.",
    },
    {
      id: "bryt-designs",
      name: "Bryt Designs",
      website: null,
      logoUrl: "https://placehold.co/160x80?text=Bryt%20Designs",
      logoType: "generated_placeholder",
      shortDescription:
        "Shopify ecommerce development company creating custom, scalable storefronts.",
      shortDescriptionSourceType: "public_source_paraphrase",
      longDescription:
        "Bryt Designs is included as a Shopify-focused provider that can be considered by businesses in Washington, DC; this dataset does not claim a physical office in the city. Shopify ecommerce development company creating custom, scalable storefronts.\n\nFor directory visitors, the most relevant capabilities are Shopify development, E-commerce design, Custom storefronts, Store migration. The agency record is structured to help merchants compare potential partners without turning directory placement into an endorsement. Where the source provides a Shopify Partner Directory profile, the dataset treats that as stronger evidence of Shopify specialization. Where the source is a third-party directory such as Clutch, the record is marked accordingly and the location relationship is kept separate from a verified office claim.\n\nA typical engagement may involve discovery, store architecture, design or theme implementation, migration planning, integration work, quality assurance and post-launch optimization. The exact scope, price, timeline and platform fit should still be confirmed directly with the agency because public directory information can change and service descriptions are often broader than a specific proposal.\n\nThis description is an AI-generated editorial summary built from the public evidence stored in the record. It is intended for your agency directory and should not be presented as a direct quotation from the company. Before publishing time-sensitive details such as partner tiers, ratings, pricing or addresses, recheck the linked source. That keeps the page useful for SEO and comparison while clearly separating sourced facts from generated explanatory copy.",
      longDescriptionSourceType: "ai_generated_editorial_from_public_evidence",
      location: {
        targetCity: "Washington",
        stateCode: "DC",
        country: "United States",
        relationship: "remote_serves_city",
        listedLocation: null,
        physicalOfficeIndependentlyVerified: false,
        verificationStatus: "shopify-focused provider; city office not claimed",
        evidenceUrl: "https://clutch.co/developers/shopify",
        countryCode: "US",
        streetAddress: null,
        borough: null,
        postalCode: null,
        notes:
          "Included as a remote option for Washington. This listing does not confirm an office in Washington; confirm service availability and working hours directly.",
        primaryLocationAsListed: null,
      },
      shopify: {
        partnerStatusSourceType: "clutch_directory",
      },
      services: [
        "Shopify development",
        "E-commerce design",
        "Custom storefronts",
        "Store migration",
        "Conversion optimization",
      ],
      whatTheyDo: [
        {
          name: "Shopify development",
          description:
            "Shopify development is listed or inferred from the agency's public Shopify/ecommerce positioning.",
          sourceType: "public_source_summary",
        },
        {
          name: "E-commerce design",
          description:
            "E-commerce design is listed or inferred from the agency's public Shopify/ecommerce positioning.",
          sourceType: "public_source_summary",
        },
        {
          name: "Custom storefronts",
          description:
            "Custom storefronts is listed or inferred from the agency's public Shopify/ecommerce positioning.",
          sourceType: "public_source_summary",
        },
        {
          name: "Store migration",
          description:
            "Planning and executing moves from another commerce platform to Shopify while preserving products, customers and essential store data where supported.",
          sourceType: "ai_generated_editorial",
        },
        {
          name: "Conversion optimization",
          description:
            "Reviewing shopping journeys, product pages, carts and merchandising patterns to identify opportunities that may improve conversion performance.",
          sourceType: "ai_generated_editorial",
        },
      ],
      portfolio: [],
      portfolioStatus: "source_supported_entries_only; no fabricated client projects",
      reviews: [
        {
          source: "Clutch",
          rating: 4.9,
          reviewCount: 19,
          reviewText: null,
          reviewSummary:
            "Public source showed a 4.9/5 aggregate rating across 19 reviews.",
          summaryType: "paraphrased_aggregate",
          sourceUrl: "https://clutch.co/developers/shopify",
        },
      ],
      reviewsStatus:
        "aggregate_or_public_source_only; no fabricated customer review text",
      faqs: [
        {
          question: "Does Bryt Designs work with Shopify?",
          answer:
            "Bryt Designs appears in public Shopify/ecommerce research used for this dataset. Check the linked source for the latest specialization and partner status.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "Is Bryt Designs based in Washington?",
          answer:
            "This record is included as a remote-serving option; a local office is not claimed for Washington, DC. Review the location relationship field before presenting the company as physically local.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "What Shopify services can Bryt Designs provide?",
          answer:
            "The record highlights store development, theme work, migration, optimization and integrations where supported by public positioning or editorial categorization.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "Does Bryt Designs work with Shopify Plus?",
          answer:
            "Shopify Plus capability is only treated as confirmed when the public source explicitly indicates it. Otherwise, ask the agency directly.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "How much does Bryt Designs charge?",
          answer:
            "Pricing varies by scope. Use any published price only as a directory snapshot and request a current quote from Bryt Designs.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "Can Bryt Designs migrate a store to Shopify?",
          answer:
            "Migration is a common ecommerce service, but availability for a specific platform and catalog size should be confirmed directly.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "Does Bryt Designs offer ongoing Shopify support?",
          answer:
            "Ongoing support may include maintenance, troubleshooting and optimization. Confirm retainers, response times and support boundaries with the agency.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "How should I evaluate Bryt Designs?",
          answer:
            "Compare relevant Shopify experience, portfolio evidence, technical fit, communication, pricing model and verified reviews rather than relying on a single directory metric.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "Are the reviews for Bryt Designs verified by this directory?",
          answer:
            "No. This dataset links to public third-party sources and does not independently verify reviewer identity or project outcomes.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "How current is this Bryt Designs profile?",
          answer:
            "The research snapshot is dated 2026-10-03. Partner tiers, ratings, staff, services and contact details can change, so important facts should be rechecked before publication.",
          sourceType: "ai_generated_editorial",
        },
      ],
      sources: [
        {
          url: "https://clutch.co/developers/shopify",
          type: "clutch_directory",
          observedAt: "2026-10-03",
          supports: ["agency listing", "location relationship"],
        },
      ],
      contentProvenance: {
        publicFacts:
          "Sourced from linked public directories or the user-supplied NYC research dataset.",
        generatedEditorial: [
          "longDescription",
          "service descriptions where not explicitly sourced",
          "faqs",
        ],
        notFabricated: [
          "customer review text",
          "client names",
          "partner tier",
          "physical office address",
        ],
      },
      description:
        "Shopify ecommerce development company creating custom, scalable storefronts.",
      entityType: "agency",
      industries: [],
      languages: [],
      technologies: [],
      contact: {
        email: null,
        phone: null,
        contactPage: null,
        otherEmails: [],
      },
      pricing: {
        projectMinimum: null,
        selectedServices: null,
        hourlyRate: null,
      },
      ratings: [
        {
          platform: "Clutch",
          value: 4.9,
          scale: 5,
          reviewCount: 19,
          sourceUrl: "https://clutch.co/developers/shopify",
          observedAt: "2026-10-03",
        },
      ],
      dataQuality: {
        observedAt: "2026-10-03",
        notes: [],
      },
      editorialNote:
        "Descriptions, service explanations and FAQs include editorial summaries. Confirm inferred capabilities with the agency; they are not direct company statements.",
      heroHeadline: "Shopify expertise for Washington businesses.",
    },
    {
      id: "codup",
      name: "Codup",
      website: "https://codup.co",
      logoUrl: "https://www.google.com/s2/favicons?sz=128&domain_url=https://codup.co",
      logoType: "favicon_proxy",
      shortDescription:
        "Ecommerce development company offering Shopify builds, migrations, integrations and custom development.",
      shortDescriptionSourceType: "public_source_paraphrase",
      longDescription:
        "Codup is included as a Shopify-focused provider that can be considered by businesses in Washington, DC; this dataset does not claim a physical office in the city. Ecommerce development company offering Shopify builds, migrations, integrations and custom development.\n\nFor directory visitors, the most relevant capabilities are Store build or redesign, Store migration, Theme customization, POS setup and migration. The agency record is structured to help merchants compare potential partners without turning directory placement into an endorsement. Where the source provides a Shopify Partner Directory profile, the dataset treats that as stronger evidence of Shopify specialization. Where the source is a third-party directory such as Clutch, the record is marked accordingly and the location relationship is kept separate from a verified office claim.\n\nA typical engagement may involve discovery, store architecture, design or theme implementation, migration planning, integration work, quality assurance and post-launch optimization. The exact scope, price, timeline and platform fit should still be confirmed directly with the agency because public directory information can change and service descriptions are often broader than a specific proposal.\n\nThis description is an AI-generated editorial summary built from the public evidence stored in the record. It is intended for your agency directory and should not be presented as a direct quotation from the company. Before publishing time-sensitive details such as partner tiers, ratings, pricing or addresses, recheck the linked source. That keeps the page useful for SEO and comparison while clearly separating sourced facts from generated explanatory copy.",
      longDescriptionSourceType: "ai_generated_editorial_from_public_evidence",
      location: {
        targetCity: "Washington",
        stateCode: "DC",
        country: "United States",
        relationship: "remote_serves_city",
        listedLocation: null,
        physicalOfficeIndependentlyVerified: false,
        verificationStatus: "Shopify partner; city office not claimed",
        evidenceUrl: "https://www.shopify.com/partners/directory/partner/codup",
        countryCode: "US",
        streetAddress: null,
        borough: null,
        postalCode: null,
        notes:
          "Included as a remote option for Washington. This listing does not confirm an office in Washington; confirm service availability and working hours directly.",
        primaryLocationAsListed: null,
      },
      shopify: {
        partnerDirectoryUrl: "https://www.shopify.com/partners/directory/partner/codup",
        partnerStatusSourceType: "shopify_partner_directory",
      },
      services: [
        "Store build or redesign",
        "Store migration",
        "Theme customization",
        "POS setup and migration",
        "Ongoing support",
      ],
      whatTheyDo: [
        {
          name: "Store build or redesign",
          description:
            "Store build or redesign is listed or inferred from the agency's public Shopify/ecommerce positioning.",
          sourceType: "public_source_summary",
        },
        {
          name: "Store migration",
          description:
            "Store migration is listed or inferred from the agency's public Shopify/ecommerce positioning.",
          sourceType: "public_source_summary",
        },
        {
          name: "Theme customization",
          description:
            "Theme customization is listed or inferred from the agency's public Shopify/ecommerce positioning.",
          sourceType: "public_source_summary",
        },
        {
          name: "POS setup and migration",
          description:
            "POS setup and migration is listed or inferred from the agency's public Shopify/ecommerce positioning.",
          sourceType: "public_source_summary",
        },
        {
          name: "Ongoing support",
          description:
            "Providing post-launch maintenance, troubleshooting, enhancements and ecommerce operations support.",
          sourceType: "ai_generated_editorial",
        },
      ],
      portfolio: [],
      portfolioStatus: "source_supported_entries_only; no fabricated client projects",
      reviews: [
        {
          source: "Shopify Partner Directory",
          rating: 5.0,
          reviewCount: 3,
          reviewText: null,
          reviewSummary:
            "Public source showed a 5.0/5 aggregate rating across 3 reviews.",
          summaryType: "paraphrased_aggregate",
          sourceUrl: "https://www.shopify.com/partners/directory/partner/codup",
        },
      ],
      reviewsStatus:
        "aggregate_or_public_source_only; no fabricated customer review text",
      faqs: [
        {
          question: "Does Codup work with Shopify?",
          answer:
            "Codup appears in public Shopify/ecommerce research used for this dataset. Check the linked source for the latest specialization and partner status.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "Is Codup based in Washington?",
          answer:
            "This record is included as a remote-serving option; a local office is not claimed for Washington, DC. Review the location relationship field before presenting the company as physically local.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "What Shopify services can Codup provide?",
          answer:
            "The record highlights store development, theme work, migration, optimization and integrations where supported by public positioning or editorial categorization.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "Does Codup work with Shopify Plus?",
          answer:
            "Shopify Plus capability is only treated as confirmed when the public source explicitly indicates it. Otherwise, ask the agency directly.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "How much does Codup charge?",
          answer:
            "Pricing varies by scope. Use any published price only as a directory snapshot and request a current quote from Codup.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "Can Codup migrate a store to Shopify?",
          answer:
            "Migration is a common ecommerce service, but availability for a specific platform and catalog size should be confirmed directly.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "Does Codup offer ongoing Shopify support?",
          answer:
            "Ongoing support may include maintenance, troubleshooting and optimization. Confirm retainers, response times and support boundaries with the agency.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "How should I evaluate Codup?",
          answer:
            "Compare relevant Shopify experience, portfolio evidence, technical fit, communication, pricing model and verified reviews rather than relying on a single directory metric.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "Are the reviews for Codup verified by this directory?",
          answer:
            "No. This dataset links to public third-party sources and does not independently verify reviewer identity or project outcomes.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "How current is this Codup profile?",
          answer:
            "The research snapshot is dated 2026-10-03. Partner tiers, ratings, staff, services and contact details can change, so important facts should be rechecked before publication.",
          sourceType: "ai_generated_editorial",
        },
      ],
      sources: [
        {
          url: "https://www.shopify.com/partners/directory/partner/codup",
          type: "shopify_partner_directory",
          observedAt: "2026-10-03",
          supports: ["agency listing", "location relationship"],
        },
      ],
      contentProvenance: {
        publicFacts:
          "Sourced from linked public directories or the user-supplied NYC research dataset.",
        generatedEditorial: [
          "longDescription",
          "service descriptions where not explicitly sourced",
          "faqs",
        ],
        notFabricated: [
          "customer review text",
          "client names",
          "partner tier",
          "physical office address",
        ],
      },
      description:
        "Ecommerce development company offering Shopify builds, migrations, integrations and custom development.",
      entityType: "agency",
      industries: [],
      languages: [],
      technologies: [],
      contact: {
        email: null,
        phone: null,
        contactPage: null,
        otherEmails: [],
      },
      pricing: {
        projectMinimum: null,
        selectedServices: null,
        hourlyRate: null,
      },
      ratings: [
        {
          platform: "Shopify Partner Directory",
          value: 5.0,
          scale: 5,
          reviewCount: 3,
          sourceUrl: "https://www.shopify.com/partners/directory/partner/codup",
          observedAt: "2026-10-03",
        },
      ],
      dataQuality: {
        observedAt: "2026-10-03",
        notes: [],
      },
      editorialNote:
        "Descriptions, service explanations and FAQs include editorial summaries. Confirm inferred capabilities with the agency; they are not direct company statements.",
      heroHeadline: "Shopify expertise for Washington businesses.",
    },
    {
      id: "storm-brain",
      name: "Storm Brain",
      aliases: [],
      entityType: "agency",
      website: null,
      description:
        "Digital agency with Shopify ecommerce development, web design and optimization capabilities.",
      descriptionSourceUrls: [
        "https://www.shopify.com/partners/directory/partner/storm-brian",
      ],
      categories: [
        "Shopify agency",
        "Development",
        "Design and branding",
        "Marketing",
        "Optimization and analytics",
        "Headless commerce",
      ],
      categoryMethod: "Editorial grouping of published services",
      location: {
        city: "New York City",
        citySlug: "new-york-city",
        borough: null,
        state: "New York",
        stateCode: "DC",
        country: "United States",
        countryCode: "US",
        streetAddress: null,
        postalCode: null,
        relationship: "remote_serves_city",
        primaryLocationAsListed: "Carlsbad, United States",
        physicalOfficeIndependentlyVerified: false,
        evidenceUrl: "https://clutch.co/developers/shopify",
        notes:
          "Included as a remote option for Washington. This listing does not confirm an office in Washington; confirm service availability and working hours directly.",
        targetCity: "Washington",
        listedLocation: null,
        verificationStatus: "shopify-focused provider; city office not claimed",
      },
      otherOfficeLocations: [],
      contact: {
        email: "hello@stormbrain.com",
        phone: "+1 866-778-6279",
        contactPage: null,
        otherEmails: [],
        otherPhones: [],
        sourceUrl: "https://www.shopify.com/partners/directory/partner/storm-brian",
      },
      foundedYear: null,
      experience: null,
      teamSize: {
        range: "50–249",
        scope: "Company-wide directory estimate",
        sourceUrl: "https://clutch.co/developers/shopify/new-york",
      },
      shopify: {
        partnerDirectoryUrl:
          "https://www.shopify.com/partners/directory/partner/storm-brian",
        partnerTier: "Plus",
        partnerSince: null,
        partnerSincePrecision: null,
        tierStatus: "listed_by_shopify",
        partnerStatusSourceType: "clutch_directory",
      },
      platforms: ["Shopify", "Shopify Plus"],
      services: [
        "Shopify",
        "Web design",
        "Web development",
        "SEO",
        "Conversion optimization",
      ],
      industries: [
        "Consumer packaged goods",
        "Food and drink",
        "Beauty",
        "Toys and games",
      ],
      technologies: [],
      languages: ["English"],
      languagesListComplete: true,
      supportedMarkets: [],
      supportedMarketsListComplete: null,
      ratings: [
        {
          platform: "Shopify Partner Directory",
          value: null,
          scale: 5,
          reviewCount: 0,
          status: "no_reviews_on_this_platform",
          sourceUrl: "https://www.shopify.com/partners/directory/partner/storm-brian",
          observedAt: "2026-10-03",
        },
        {
          platform: "Clutch",
          value: 5,
          scale: 5,
          reviewCount: 126,
          status: "published_rating",
          scope: "Agency-wide reviews; not necessarily Shopify-only",
          sourceUrl: "https://clutch.co/developers/shopify/new-york",
          observedAt: "2026-10-03",
        },
      ],
      ratingStatus: "published_rating_available",
      pricing: {
        projectMinimum: {
          amount: 10000,
          currency: "USD",
          scope: "Clutch agency-wide minimum; not a Shopify-specific quote",
          sourceUrl: "https://clutch.co/developers/shopify/new-york",
        },
        selectedServices: null,
        hourlyRate: {
          minimum: 150,
          maximum: 199,
          currency: "USD",
          unit: "hour",
          sourceUrl: "https://clutch.co/developers/shopify/new-york",
        },
        status: "contact_for_pricing",
        servicePrices: [],
        note: "Published amounts are directory snapshots, not binding quotes. A low selected-service starting price must not be advertised as the cost of an entire Shopify website.",
      },
      portfolio: [
        {
          client: "Ancestral Supplements",
          evidenceType: "Agency-reported work or client",
          sourceUrl: "https://www.shopify.com/partners/directory/partner/storm-brian",
          projectUrl: null,
        },
        {
          client: "Ammunition Whiskey & Wine",
          evidenceType: "Agency-reported work or client",
          sourceUrl: "https://www.shopify.com/partners/directory/partner/storm-brian",
          projectUrl: null,
        },
        {
          client: "Howler Head",
          evidenceType: "Agency-reported work or client",
          sourceUrl: "https://www.shopify.com/partners/directory/partner/storm-brian",
          projectUrl: null,
        },
        {
          client: "UNITE Hair",
          evidenceType: "Agency-reported work or client",
          sourceUrl: "https://www.shopify.com/partners/directory/partner/storm-brian",
          projectUrl: null,
        },
        {
          client: "iam8bit",
          evidenceType: "Agency-reported work or client",
          sourceUrl: "https://www.shopify.com/partners/directory/partner/storm-brian",
          projectUrl: null,
        },
        {
          client: "JAKKS Pacific",
          evidenceType: "Agency-reported work or client",
          sourceUrl: "https://www.shopify.com/partners/directory/partner/storm-brian",
          projectUrl: null,
        },
      ],
      portfolioNotes: null,
      socialProfiles: [],
      logoUrl: "https://placehold.co/160x80?text=Storm%20Brain",
      sources: [
        {
          url: "https://www.shopify.com/partners/directory/partner/storm-brian",
          type: "shopify_partner_directory",
          supports: [
            "name",
            "website",
            "description",
            "contact",
            "location.primaryLocationAsListed",
            "shopify",
            "services",
            "industries",
            "languages",
            "ratings",
            "pricing.selectedServices",
            "pricing.servicePrices",
            "portfolio",
          ],
          observedAt: "2026-10-03",
        },
        {
          url: "https://stormbrain.com/location/new-york-digital-marketing-agency/",
          type: "official_website",
          supports: ["location"],
          observedAt: "2026-10-03",
        },
        {
          url: "https://stormbrain.com/sub-service/websites/shopify-development/",
          type: "official_website",
          supports: ["services"],
          observedAt: "2026-10-03",
        },
        {
          url: "https://clutch.co/developers/shopify/new-york",
          type: "review_directory",
          supports: [
            "ratings",
            "pricing.projectMinimum",
            "pricing.hourlyRate",
            "teamSize",
          ],
          observedAt: "2026-10-03",
        },
        {
          url: "https://clutch.co/developers/shopify",
          type: "clutch_directory",
          observedAt: "2026-10-03",
          supports: ["agency listing", "location relationship"],
        },
      ],
      dataQuality: {
        observedAt: "2026-10-03",
        collectionMethod: "Public search results and retrieved page text",
        independentlyAudited: false,
        unknownValues:
          "null means not confirmed; an empty array means no entries captured, not that none exist",
        notes: [
          "Shopify lists Carlsbad as primary location; NYC is an additional office.",
        ],
      },
      logoType: "generated_placeholder",
      shortDescription:
        "Digital agency with Shopify ecommerce development, web design and optimization capabilities.",
      shortDescriptionSourceType: "public_source_paraphrase",
      longDescription:
        "Storm Brain is included as a Shopify-focused provider that can be considered by businesses in Washington, DC; this dataset does not claim a physical office in the city. Digital agency with Shopify ecommerce development, web design and optimization capabilities.\n\nFor directory visitors, the most relevant capabilities are Shopify, Web design, Web development, SEO. The agency record is structured to help merchants compare potential partners without turning directory placement into an endorsement. Where the source provides a Shopify Partner Directory profile, the dataset treats that as stronger evidence of Shopify specialization. Where the source is a third-party directory such as Clutch, the record is marked accordingly and the location relationship is kept separate from a verified office claim.\n\nA typical engagement may involve discovery, store architecture, design or theme implementation, migration planning, integration work, quality assurance and post-launch optimization. The exact scope, price, timeline and platform fit should still be confirmed directly with the agency because public directory information can change and service descriptions are often broader than a specific proposal.\n\nThis description is an AI-generated editorial summary built from the public evidence stored in the record. It is intended for your agency directory and should not be presented as a direct quotation from the company. Before publishing time-sensitive details such as partner tiers, ratings, pricing or addresses, recheck the linked source. That keeps the page useful for SEO and comparison while clearly separating sourced facts from generated explanatory copy.",
      longDescriptionSourceType: "ai_generated_editorial_from_public_evidence",
      whatTheyDo: [
        {
          name: "Shopify",
          description:
            "Shopify is listed or inferred from the agency's public Shopify/ecommerce positioning.",
          sourceType: "public_source_summary",
        },
        {
          name: "Web design",
          description:
            "Web design is listed or inferred from the agency's public Shopify/ecommerce positioning.",
          sourceType: "public_source_summary",
        },
        {
          name: "Web development",
          description:
            "Web development is listed or inferred from the agency's public Shopify/ecommerce positioning.",
          sourceType: "public_source_summary",
        },
        {
          name: "SEO",
          description:
            "SEO is listed or inferred from the agency's public Shopify/ecommerce positioning.",
          sourceType: "public_source_summary",
        },
        {
          name: "Conversion optimization",
          description:
            "Conversion optimization is listed or inferred from the agency's public Shopify/ecommerce positioning.",
          sourceType: "public_source_summary",
        },
      ],
      portfolioStatus: "source_supported_entries_only; no fabricated client projects",
      reviews: [
        {
          source: "Clutch",
          rating: 5.0,
          reviewCount: 126,
          reviewText: null,
          reviewSummary:
            "Public source showed a 5.0/5 aggregate rating across 126 reviews.",
          summaryType: "paraphrased_aggregate",
          sourceUrl: "https://clutch.co/developers/shopify",
        },
      ],
      reviewsStatus:
        "aggregate_or_public_source_only; no fabricated customer review text",
      faqs: [
        {
          question: "Does Storm Brain work with Shopify?",
          answer:
            "Storm Brain appears in public Shopify/ecommerce research used for this dataset. Check the linked source for the latest specialization and partner status.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "Is Storm Brain based in Washington?",
          answer:
            "This record is included as a remote-serving option; a local office is not claimed for Washington, DC. Review the location relationship field before presenting the company as physically local.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "What Shopify services can Storm Brain provide?",
          answer:
            "The record highlights store development, theme work, migration, optimization and integrations where supported by public positioning or editorial categorization.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "Does Storm Brain work with Shopify Plus?",
          answer:
            "Shopify Plus capability is only treated as confirmed when the public source explicitly indicates it. Otherwise, ask the agency directly.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "How much does Storm Brain charge?",
          answer:
            "Pricing varies by scope. Use any published price only as a directory snapshot and request a current quote from Storm Brain.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "Can Storm Brain migrate a store to Shopify?",
          answer:
            "Migration is a common ecommerce service, but availability for a specific platform and catalog size should be confirmed directly.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "Does Storm Brain offer ongoing Shopify support?",
          answer:
            "Ongoing support may include maintenance, troubleshooting and optimization. Confirm retainers, response times and support boundaries with the agency.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "How should I evaluate Storm Brain?",
          answer:
            "Compare relevant Shopify experience, portfolio evidence, technical fit, communication, pricing model and verified reviews rather than relying on a single directory metric.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "Are the reviews for Storm Brain verified by this directory?",
          answer:
            "No. This dataset links to public third-party sources and does not independently verify reviewer identity or project outcomes.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "How current is this Storm Brain profile?",
          answer:
            "The research snapshot is dated 2026-10-03. Partner tiers, ratings, staff, services and contact details can change, so important facts should be rechecked before publication.",
          sourceType: "ai_generated_editorial",
        },
      ],
      contentProvenance: {
        publicFacts:
          "Sourced from linked public directories or the user-supplied NYC research dataset.",
        generatedEditorial: [
          "longDescription",
          "service descriptions where not explicitly sourced",
          "faqs",
        ],
        notFabricated: [
          "customer review text",
          "client names",
          "partner tier",
          "physical office address",
        ],
      },
      editorialNote:
        "Descriptions, service explanations and FAQs include editorial summaries. Confirm inferred capabilities with the agency; they are not direct company statements.",
      heroHeadline: "Shopify expertise for Washington businesses.",
    },
    {
      id: "uncap",
      name: "Uncap",
      website: null,
      logoUrl: "https://placehold.co/160x80?text=Uncap",
      logoType: "generated_placeholder",
      shortDescription:
        "Shopify-focused ecommerce development company with migration and custom solution experience.",
      shortDescriptionSourceType: "public_source_paraphrase",
      longDescription:
        "Uncap is included as a Shopify-focused provider that can be considered by businesses in Washington, DC; this dataset does not claim a physical office in the city. Shopify-focused ecommerce development company with migration and custom solution experience.\n\nFor directory visitors, the most relevant capabilities are Shopify development, Store migration, Custom ecommerce solutions, Conversion optimization. The agency record is structured to help merchants compare potential partners without turning directory placement into an endorsement. Where the source provides a Shopify Partner Directory profile, the dataset treats that as stronger evidence of Shopify specialization. Where the source is a third-party directory such as Clutch, the record is marked accordingly and the location relationship is kept separate from a verified office claim.\n\nA typical engagement may involve discovery, store architecture, design or theme implementation, migration planning, integration work, quality assurance and post-launch optimization. The exact scope, price, timeline and platform fit should still be confirmed directly with the agency because public directory information can change and service descriptions are often broader than a specific proposal.\n\nThis description is an AI-generated editorial summary built from the public evidence stored in the record. It is intended for your agency directory and should not be presented as a direct quotation from the company. Before publishing time-sensitive details such as partner tiers, ratings, pricing or addresses, recheck the linked source. That keeps the page useful for SEO and comparison while clearly separating sourced facts from generated explanatory copy.",
      longDescriptionSourceType: "ai_generated_editorial_from_public_evidence",
      location: {
        targetCity: "Washington",
        stateCode: "DC",
        country: "United States",
        relationship: "remote_serves_city",
        listedLocation: null,
        physicalOfficeIndependentlyVerified: false,
        verificationStatus: "shopify-focused provider; city office not claimed",
        evidenceUrl: "https://clutch.co/developers/shopify",
        countryCode: "US",
        streetAddress: null,
        borough: null,
        postalCode: null,
        notes:
          "Included as a remote option for Washington. This listing does not confirm an office in Washington; confirm service availability and working hours directly.",
        primaryLocationAsListed: null,
      },
      shopify: {
        partnerStatusSourceType: "clutch_directory",
      },
      services: [
        "Shopify development",
        "Store migration",
        "Custom ecommerce solutions",
        "Conversion optimization",
        "Custom integrations",
      ],
      whatTheyDo: [
        {
          name: "Shopify development",
          description:
            "Shopify development is listed or inferred from the agency's public Shopify/ecommerce positioning.",
          sourceType: "public_source_summary",
        },
        {
          name: "Store migration",
          description:
            "Store migration is listed or inferred from the agency's public Shopify/ecommerce positioning.",
          sourceType: "public_source_summary",
        },
        {
          name: "Custom ecommerce solutions",
          description:
            "Custom ecommerce solutions is listed or inferred from the agency's public Shopify/ecommerce positioning.",
          sourceType: "public_source_summary",
        },
        {
          name: "Conversion optimization",
          description:
            "Reviewing shopping journeys, product pages, carts and merchandising patterns to identify opportunities that may improve conversion performance.",
          sourceType: "ai_generated_editorial",
        },
        {
          name: "Custom integrations",
          description:
            "Connecting Shopify with apps, ERPs, CRMs, fulfillment tools, analytics platforms and other business systems when the project requires it.",
          sourceType: "ai_generated_editorial",
        },
      ],
      portfolio: [],
      portfolioStatus: "source_supported_entries_only; no fabricated client projects",
      reviews: [
        {
          source: "Clutch",
          rating: 5.0,
          reviewCount: 75,
          reviewText: null,
          reviewSummary:
            "Public source showed a 5.0/5 aggregate rating across 75 reviews.",
          summaryType: "paraphrased_aggregate",
          sourceUrl: "https://clutch.co/developers/shopify",
        },
      ],
      reviewsStatus:
        "aggregate_or_public_source_only; no fabricated customer review text",
      faqs: [
        {
          question: "Does Uncap work with Shopify?",
          answer:
            "Uncap appears in public Shopify/ecommerce research used for this dataset. Check the linked source for the latest specialization and partner status.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "Is Uncap based in Washington?",
          answer:
            "This record is included as a remote-serving option; a local office is not claimed for Washington, DC. Review the location relationship field before presenting the company as physically local.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "What Shopify services can Uncap provide?",
          answer:
            "The record highlights store development, theme work, migration, optimization and integrations where supported by public positioning or editorial categorization.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "Does Uncap work with Shopify Plus?",
          answer:
            "Shopify Plus capability is only treated as confirmed when the public source explicitly indicates it. Otherwise, ask the agency directly.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "How much does Uncap charge?",
          answer:
            "Pricing varies by scope. Use any published price only as a directory snapshot and request a current quote from Uncap.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "Can Uncap migrate a store to Shopify?",
          answer:
            "Migration is a common ecommerce service, but availability for a specific platform and catalog size should be confirmed directly.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "Does Uncap offer ongoing Shopify support?",
          answer:
            "Ongoing support may include maintenance, troubleshooting and optimization. Confirm retainers, response times and support boundaries with the agency.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "How should I evaluate Uncap?",
          answer:
            "Compare relevant Shopify experience, portfolio evidence, technical fit, communication, pricing model and verified reviews rather than relying on a single directory metric.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "Are the reviews for Uncap verified by this directory?",
          answer:
            "No. This dataset links to public third-party sources and does not independently verify reviewer identity or project outcomes.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "How current is this Uncap profile?",
          answer:
            "The research snapshot is dated 2026-10-03. Partner tiers, ratings, staff, services and contact details can change, so important facts should be rechecked before publication.",
          sourceType: "ai_generated_editorial",
        },
      ],
      sources: [
        {
          url: "https://clutch.co/developers/shopify",
          type: "clutch_directory",
          observedAt: "2026-10-03",
          supports: ["agency listing", "location relationship"],
        },
      ],
      contentProvenance: {
        publicFacts:
          "Sourced from linked public directories or the user-supplied NYC research dataset.",
        generatedEditorial: [
          "longDescription",
          "service descriptions where not explicitly sourced",
          "faqs",
        ],
        notFabricated: [
          "customer review text",
          "client names",
          "partner tier",
          "physical office address",
        ],
      },
      description:
        "Shopify-focused ecommerce development company with migration and custom solution experience.",
      entityType: "agency",
      industries: [],
      languages: [],
      technologies: [],
      contact: {
        email: null,
        phone: null,
        contactPage: null,
        otherEmails: [],
      },
      pricing: {
        projectMinimum: null,
        selectedServices: null,
        hourlyRate: null,
      },
      ratings: [
        {
          platform: "Clutch",
          value: 5.0,
          scale: 5,
          reviewCount: 75,
          sourceUrl: "https://clutch.co/developers/shopify",
          observedAt: "2026-10-03",
        },
      ],
      dataQuality: {
        observedAt: "2026-10-03",
        notes: [],
      },
      editorialNote:
        "Descriptions, service explanations and FAQs include editorial summaries. Confirm inferred capabilities with the agency; they are not direct company statements.",
      heroHeadline: "Shopify expertise for Washington businesses.",
    },
    {
      id: "arctic-grey",
      name: "Arctic Grey",
      aliases: [],
      entityType: "agency",
      website: "https://www.arcticgrey.com",
      description:
        "Shopify development partner offering store builds, migrations, theme changes, integrations and ongoing improvements.",
      descriptionSourceUrls: [
        "https://www.shopify.com/partners/directory/partner/arcticgreyinc",
      ],
      categories: [
        "Shopify agency",
        "Development",
        "Design and branding",
        "Marketing",
        "Optimization and analytics",
      ],
      categoryMethod: "Editorial grouping of published services",
      location: {
        city: "New York City",
        citySlug: "new-york-city",
        borough: null,
        state: "New York",
        stateCode: "DC",
        country: "United States",
        countryCode: "US",
        streetAddress: null,
        postalCode: null,
        relationship: "remote_serves_city",
        primaryLocationAsListed: "New York, United States",
        physicalOfficeIndependentlyVerified: false,
        evidenceUrl: "https://www.shopify.com/partners/directory/partner/arcticgreyinc",
        notes:
          "Included as a remote option for Washington. This listing does not confirm an office in Washington; confirm service availability and working hours directly.",
        targetCity: "Washington",
        listedLocation: null,
        verificationStatus: "Shopify partner; city office not claimed",
      },
      otherOfficeLocations: [],
      contact: {
        email: "support@arcticgrey.com",
        phone: "+1 650-288-0533",
        contactPage: null,
        otherEmails: [],
        otherPhones: [],
        sourceUrl: "https://www.shopify.com/partners/directory/partner/arcticgreyinc",
      },
      foundedYear: null,
      experience: null,
      teamSize: null,
      shopify: {
        partnerDirectoryUrl:
          "https://www.shopify.com/partners/directory/partner/arcticgreyinc",
        partnerTier: "Platinum",
        partnerSince: "2013-04",
        partnerSincePrecision: "month",
        tierStatus: "listed_by_shopify",
        partnerStatusSourceType: "shopify_partner_directory",
      },
      platforms: ["Shopify"],
      services: [
        "Store design and development",
        "Store migration",
        "Theme customization",
        "Custom apps and integrations",
        "SEO",
      ],
      industries: ["Fashion", "Food and drink", "Beauty", "Jewelry"],
      technologies: [],
      languages: ["English"],
      languagesListComplete: true,
      supportedMarkets: ["United States", "Canada"],
      supportedMarketsListComplete: true,
      ratings: [
        {
          platform: "Shopify Partner Directory",
          value: 5,
          scale: 5,
          reviewCount: 185,
          status: "published_rating",
          sourceUrl: "https://www.shopify.com/partners/directory/partner/arcticgreyinc",
          observedAt: "2026-10-03",
        },
      ],
      ratingStatus: "published_rating_available",
      pricing: {
        projectMinimum: null,
        selectedServices: {
          minimum: 199,
          maximum: null,
          currency: "USD",
          currencyBasis: "USA-English Shopify directory dollar display; confirm in quote",
          billingBasis: "selected services, not a full-store project minimum",
          sourceUrl: "https://www.shopify.com/partners/directory/partner/arcticgreyinc",
        },
        hourlyRate: null,
        status: "published_selected_service_prices",
        servicePrices: [],
        note: "Published amounts are directory snapshots, not binding quotes. A low selected-service starting price must not be advertised as the cost of an entire Shopify website.",
      },
      portfolio: [
        {
          client: "EBY",
          evidenceType: "Agency-reported work or client",
          sourceUrl: "https://www.shopify.com/partners/directory/partner/arcticgreyinc",
          projectUrl: null,
        },
        {
          client: "The Cashmere Sale",
          evidenceType: "Agency-reported work or client",
          sourceUrl: "https://www.shopify.com/partners/directory/partner/arcticgreyinc",
          projectUrl: null,
        },
        {
          client: "BarkBox",
          evidenceType: "Agency-reported work or client",
          sourceUrl: "https://www.shopify.com/partners/directory/partner/arcticgreyinc",
          projectUrl: null,
        },
        {
          client: "Olaplex",
          evidenceType: "Agency-reported work or client",
          sourceUrl: "https://www.shopify.com/partners/directory/partner/arcticgreyinc",
          projectUrl: null,
        },
        {
          client: "Harvard University",
          evidenceType: "Agency-reported work or client",
          sourceUrl: "https://www.shopify.com/partners/directory/partner/arcticgreyinc",
          projectUrl: null,
        },
        {
          client: "Lids",
          evidenceType: "Agency-reported work or client",
          sourceUrl: "https://www.shopify.com/partners/directory/partner/arcticgreyinc",
          projectUrl: null,
        },
      ],
      portfolioNotes: null,
      socialProfiles: [],
      logoUrl:
        "https://www.google.com/s2/favicons?sz=128&domain_url=https://www.arcticgrey.com",
      sources: [
        {
          url: "https://www.shopify.com/partners/directory/partner/arcticgreyinc",
          type: "shopify_partner_directory",
          supports: [
            "name",
            "website",
            "description",
            "contact",
            "location.primaryLocationAsListed",
            "shopify",
            "services",
            "industries",
            "languages",
            "ratings",
            "pricing.selectedServices",
            "pricing.servicePrices",
            "portfolio",
          ],
          observedAt: "2026-10-03",
        },
      ],
      dataQuality: {
        observedAt: "2026-10-03",
        collectionMethod: "Public search results and retrieved page text",
        independentlyAudited: false,
        unknownValues:
          "null means not confirmed; an empty array means no entries captured, not that none exist",
        notes: [],
      },
      logoType: "favicon_proxy",
      shortDescription:
        "Shopify development partner offering store builds, migrations, theme changes, integrations and ongoing improvements.",
      shortDescriptionSourceType: "public_source_paraphrase",
      longDescription:
        "Arctic Grey is included as a Shopify-focused provider that can be considered by businesses in Washington, DC; this dataset does not claim a physical office in the city. Shopify development partner offering store builds, migrations, theme changes, integrations and ongoing improvements. The public Shopify profile identifies the partner tier as Platinum.\n\nFor directory visitors, the most relevant capabilities are Store design and development, Store migration, Theme customization, Custom apps and integrations. The agency record is structured to help merchants compare potential partners without turning directory placement into an endorsement. Where the source provides a Shopify Partner Directory profile, the dataset treats that as stronger evidence of Shopify specialization. Where the source is a third-party directory such as Clutch, the record is marked accordingly and the location relationship is kept separate from a verified office claim.\n\nA typical engagement may involve discovery, store architecture, design or theme implementation, migration planning, integration work, quality assurance and post-launch optimization. The exact scope, price, timeline and platform fit should still be confirmed directly with the agency because public directory information can change and service descriptions are often broader than a specific proposal.\n\nThis description is an AI-generated editorial summary built from the public evidence stored in the record. It is intended for your agency directory and should not be presented as a direct quotation from the company. Before publishing time-sensitive details such as partner tiers, ratings, pricing or addresses, recheck the linked source. That keeps the page useful for SEO and comparison while clearly separating sourced facts from generated explanatory copy.",
      longDescriptionSourceType: "ai_generated_editorial_from_public_evidence",
      whatTheyDo: [
        {
          name: "Store design and development",
          description:
            "Store design and development is listed or inferred from the agency's public Shopify/ecommerce positioning.",
          sourceType: "public_source_summary",
        },
        {
          name: "Store migration",
          description:
            "Store migration is listed or inferred from the agency's public Shopify/ecommerce positioning.",
          sourceType: "public_source_summary",
        },
        {
          name: "Theme customization",
          description:
            "Theme customization is listed or inferred from the agency's public Shopify/ecommerce positioning.",
          sourceType: "public_source_summary",
        },
        {
          name: "Custom apps and integrations",
          description:
            "Custom apps and integrations is listed or inferred from the agency's public Shopify/ecommerce positioning.",
          sourceType: "public_source_summary",
        },
        {
          name: "SEO",
          description:
            "SEO is listed or inferred from the agency's public Shopify/ecommerce positioning.",
          sourceType: "public_source_summary",
        },
      ],
      portfolioStatus: "source_supported_entries_only; no fabricated client projects",
      reviews: [
        {
          source: "Shopify Partner Directory",
          rating: 5.0,
          reviewCount: 185,
          reviewText: null,
          reviewSummary:
            "Public source showed a 5.0/5 aggregate rating across 185 reviews.",
          summaryType: "paraphrased_aggregate",
          sourceUrl: "https://www.shopify.com/partners/directory/partner/arcticgreyinc",
        },
      ],
      reviewsStatus:
        "aggregate_or_public_source_only; no fabricated customer review text",
      faqs: [
        {
          question: "Does Arctic Grey work with Shopify?",
          answer:
            "Arctic Grey appears in public Shopify/ecommerce research used for this dataset. Check the linked source for the latest specialization and partner status.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "Is Arctic Grey based in Washington?",
          answer:
            "This record is included as a remote-serving option; a local office is not claimed for Washington, DC. Review the location relationship field before presenting the company as physically local.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "What Shopify services can Arctic Grey provide?",
          answer:
            "The record highlights store development, theme work, migration, optimization and integrations where supported by public positioning or editorial categorization.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "Does Arctic Grey work with Shopify Plus?",
          answer:
            "Shopify Plus capability is only treated as confirmed when the public source explicitly indicates it. Otherwise, ask the agency directly.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "How much does Arctic Grey charge?",
          answer:
            "Pricing varies by scope. Use any published price only as a directory snapshot and request a current quote from Arctic Grey.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "Can Arctic Grey migrate a store to Shopify?",
          answer:
            "Migration is a common ecommerce service, but availability for a specific platform and catalog size should be confirmed directly.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "Does Arctic Grey offer ongoing Shopify support?",
          answer:
            "Ongoing support may include maintenance, troubleshooting and optimization. Confirm retainers, response times and support boundaries with the agency.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "How should I evaluate Arctic Grey?",
          answer:
            "Compare relevant Shopify experience, portfolio evidence, technical fit, communication, pricing model and verified reviews rather than relying on a single directory metric.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "Are the reviews for Arctic Grey verified by this directory?",
          answer:
            "No. This dataset links to public third-party sources and does not independently verify reviewer identity or project outcomes.",
          sourceType: "ai_generated_editorial",
        },
        {
          question: "How current is this Arctic Grey profile?",
          answer:
            "The research snapshot is dated 2026-10-03. Partner tiers, ratings, staff, services and contact details can change, so important facts should be rechecked before publication.",
          sourceType: "ai_generated_editorial",
        },
      ],
      contentProvenance: {
        publicFacts:
          "Sourced from linked public directories or the user-supplied NYC research dataset.",
        generatedEditorial: [
          "longDescription",
          "service descriptions where not explicitly sourced",
          "faqs",
        ],
        notFabricated: [
          "customer review text",
          "client names",
          "partner tier",
          "physical office address",
        ],
      },
      editorialNote:
        "Descriptions, service explanations and FAQs include editorial summaries. Confirm inferred capabilities with the agency; they are not direct company statements.",
      heroHeadline: "Shopify expertise for Washington businesses.",
    },
  ],
};
export default dataset;
