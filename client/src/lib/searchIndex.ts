// Search index for the CCA-LT website
// Contains all searchable content organized by page and topic

export interface SearchResult {
  id: string;
  title: string;
  excerpt: string;
  page: string;
  pageTitle: string;
  url: string;
  category: string;
}

export const searchIndex: SearchResult[] = [
  // Home page
  {
    id: "home-1",
    title: "Liver Transplantation for Cholangiocarcinoma",
    excerpt: "A comprehensive review of current evidence, clinical protocols, and future directions in transplant oncology for cholangiocarcinoma (CCA).",
    page: "Home",
    pageTitle: "Home",
    url: "/",
    category: "Overview",
  },
  {
    id: "home-2",
    title: "Cholangiocarcinoma Definition",
    excerpt: "Cholangiocarcinoma (CCA) is a biologically heterogeneous group of biliary tract malignancies arising from the epithelial lining of the intrahepatic and extrahepatic bile ducts.",
    page: "Home",
    pageTitle: "Home",
    url: "/",
    category: "Definition",
  },

  // Perihilar CCA
  {
    id: "perihilar-1",
    title: "Perihilar Cholangiocarcinoma",
    excerpt: "pCCA is the most common type of cholangiocarcinoma, accounting for 50-60% of all CCA cases. It arises from the hepatic duct bifurcation and extends along the bile ducts.",
    page: "Perihilar CCA",
    pageTitle: "Perihilar Cholangiocarcinoma",
    url: "/perihilar",
    category: "Disease Type",
  },
  {
    id: "perihilar-2",
    title: "pCCA Epidemiology",
    excerpt: "Perihilar cholangiocarcinoma typically presents in the 6th-7th decade of life with a male predominance. Risk factors include primary sclerosing cholangitis, hepatolithiasis, and cirrhosis.",
    page: "Perihilar CCA",
    pageTitle: "Perihilar Cholangiocarcinoma",
    url: "/perihilar",
    category: "Epidemiology",
  },
  {
    id: "perihilar-3",
    title: "Bismuth-Corlette Classification",
    excerpt: "The Bismuth-Corlette classification system categorizes pCCA based on the extent of involvement of the hepatic duct bifurcation, ranging from Type I to Type V.",
    page: "Perihilar CCA",
    pageTitle: "Perihilar Cholangiocarcinoma",
    url: "/perihilar",
    category: "Staging",
  },
  {
    id: "perihilar-4",
    title: "Mayo Protocol",
    excerpt: "The Mayo Clinic protocol for pCCA transplantation includes external-beam radiation therapy, intraluminal brachytherapy, maintenance chemotherapy, and mandatory staging operation.",
    page: "Perihilar CCA",
    pageTitle: "Perihilar Cholangiocarcinoma",
    url: "/perihilar",
    category: "Treatment",
  },
  {
    id: "perihilar-5",
    title: "pCCA Survival Outcomes",
    excerpt: "Protocol-based liver transplantation achieves 5-year overall survival of 65-70% for pCCA, representing a significant improvement over historical surgical resection outcomes.",
    page: "Perihilar CCA",
    pageTitle: "Perihilar Cholangiocarcinoma",
    url: "/perihilar",
    category: "Outcomes",
  },

  // Intrahepatic CCA
  {
    id: "icca-1",
    title: "Intrahepatic Cholangiocarcinoma",
    excerpt: "iCCA arises from the bile ducts within the liver parenchyma, accounting for 10-20% of all cholangiocarcinomas. It represents an emerging frontier in transplant oncology.",
    page: "Intrahepatic CCA",
    pageTitle: "Intrahepatic Cholangiocarcinoma",
    url: "/intrahepatic",
    category: "Disease Type",
  },
  {
    id: "icca-2",
    title: "iCCA Phenotypes",
    excerpt: "iCCA exists in two biologically favorable phenotypes: very-early iCCA (≤2 cm) in cirrhotic livers and locally advanced, liver-confined iCCA with durable tumor control.",
    page: "Intrahepatic CCA",
    pageTitle: "Intrahepatic Cholangiocarcinoma",
    url: "/intrahepatic",
    category: "Classification",
  },
  {
    id: "icca-3",
    title: "Test-of-Time Principle",
    excerpt: "The test-of-time principle involves observing tumor behavior during neoadjuvant therapy to identify patients with favorable biology who are suitable for transplantation.",
    page: "Intrahepatic CCA",
    pageTitle: "Intrahepatic Cholangiocarcinoma",
    url: "/intrahepatic",
    category: "Selection",
  },
  {
    id: "icca-4",
    title: "TESLA Trial",
    excerpt: "The TESLA trial (Transplantation for Extrahepatic and Liver-confined Cholangiocarcinoma with Systemic and Local Ablative Therapy) demonstrates improved outcomes for selected iCCA patients.",
    page: "Intrahepatic CCA",
    pageTitle: "Intrahepatic Cholangiocarcinoma",
    url: "/intrahepatic",
    category: "Clinical Trials",
  },
  {
    id: "icca-5",
    title: "SYS-TARE Framework",
    excerpt: "The SYS-TARE intention-to-treat framework combines systemic chemotherapy with transarterial radioembolization for locally advanced iCCA.",
    page: "Intrahepatic CCA",
    pageTitle: "Intrahepatic Cholangiocarcinoma",
    url: "/intrahepatic",
    category: "Clinical Trials",
  },
  {
    id: "icca-6",
    title: "iCCA Survival Outcomes",
    excerpt: "Modern data support liver transplantation for selected iCCA patients with 5-year overall survival of 58%, comparable to or exceeding outcomes for advanced HCC.",
    page: "Intrahepatic CCA",
    pageTitle: "Intrahepatic Cholangiocarcinoma",
    url: "/intrahepatic",
    category: "Outcomes",
  },

  // Clinical Outcomes
  {
    id: "outcomes-1",
    title: "Overall Survival After Transplantation",
    excerpt: "pCCA achieves 68% 5-year OS, iCCA achieves 58% 5-year OS, compared to HCC reference standard of 75% 5-year OS within Milan criteria.",
    page: "Clinical Outcomes",
    pageTitle: "Clinical Outcomes and Survival Analysis",
    url: "/outcomes",
    category: "Survival",
  },
  {
    id: "outcomes-2",
    title: "Recurrence-Free Survival",
    excerpt: "5-year recurrence-free survival is 75% for pCCA and 62% for iCCA, demonstrating the efficacy of protocol-based approaches in preventing disease recurrence.",
    page: "Clinical Outcomes",
    pageTitle: "Clinical Outcomes and Survival Analysis",
    url: "/outcomes",
    category: "Survival",
  },
  {
    id: "outcomes-3",
    title: "Prognostic Factors",
    excerpt: "Favorable factors include completion of neoadjuvant therapy, absence of lymph node metastases, CA19-9 normalization, and favorable molecular profile.",
    page: "Clinical Outcomes",
    pageTitle: "Clinical Outcomes and Survival Analysis",
    url: "/outcomes",
    category: "Prognostication",
  },
  {
    id: "outcomes-4",
    title: "Adverse Prognostic Factors",
    excerpt: "Adverse factors include regional lymph node metastases, peritoneal carcinomatosis, persistently elevated CA19-9, aggressive molecular profile, and progressive disease.",
    page: "Clinical Outcomes",
    pageTitle: "Clinical Outcomes and Survival Analysis",
    url: "/outcomes",
    category: "Prognostication",
  },

  // SURE-LT Protocol
  {
    id: "surelt-1",
    title: "SURE-LT Protocol",
    excerpt: "The SURE-LT (Salvage Unresectable Resectable Explant Liver Transplantation) concept is an innovative technical approach developed by the Oslo group for locally advanced unresectable pCCA.",
    page: "SURE-LT Protocol",
    pageTitle: "The SURE-LT Protocol: Innovation from the Oslo Group",
    url: "/sure-lt",
    category: "Protocol",
  },
  {
    id: "surelt-2",
    title: "SURE-LT Surgical Rationale",
    excerpt: "SURE-LT combines aggressive surgical resection with en bloc vascular reconstruction and hepatic resection to achieve R0 resection in locally advanced pCCA.",
    page: "SURE-LT Protocol",
    pageTitle: "The SURE-LT Protocol: Innovation from the Oslo Group",
    url: "/sure-lt",
    category: "Surgical Technique",
  },
  {
    id: "surelt-3",
    title: "SURE-LT Patient Selection",
    excerpt: "SURE-LT candidates include patients with locally advanced pCCA who have completed neoadjuvant therapy without evidence of distant metastases or unresectable vascular involvement.",
    page: "SURE-LT Protocol",
    pageTitle: "The SURE-LT Protocol: Innovation from the Oslo Group",
    url: "/sure-lt",
    category: "Selection",
  },
  {
    id: "surelt-4",
    title: "SURE-LT Vascular Reconstruction",
    excerpt: "SURE-LT involves en bloc resection of invaded vascular structures with reconstruction using interposition grafts, including aorto-hepatic conduits and portal vein grafts.",
    page: "SURE-LT Protocol",
    pageTitle: "The SURE-LT Protocol: Innovation from the Oslo Group",
    url: "/sure-lt",
    category: "Surgical Technique",
  },
  {
    id: "surelt-5",
    title: "SURE-LT Outcomes",
    excerpt: "Early outcomes from the SURE-LT protocol demonstrate excellent R0 resection rates (98%) and promising disease-free survival in carefully selected patients.",
    page: "SURE-LT Protocol",
    pageTitle: "The SURE-LT Protocol: Innovation from the Oslo Group",
    url: "/sure-lt",
    category: "Outcomes",
  },
  {
    id: "surelt-6",
    title: "Oslo Group",
    excerpt: "The Oslo group, including Sheraz Yaqub, Tor Magnus Smedman, Svein Dueland, and Pål-Dag Line, has pioneered innovative approaches to CCA transplantation.",
    page: "SURE-LT Protocol",
    pageTitle: "The SURE-LT Protocol: Innovation from the Oslo Group",
    url: "/sure-lt",
    category: "Authors",
  },

  // Oslo Trials
  {
    id: "oslo-1",
    title: "Oslo Trials Program",
    excerpt: "A comprehensive transplant-oncology program establishing standardized, scalable liver transplantation protocols for biliary tract cancers through three coordinated clinical trials.",
    page: "Oslo Trials",
    pageTitle: "The Oslo Trials: TESLA 1, TESLA 2, and SURE-LT",
    url: "/oslo-trials",
    category: "Clinical Trials",
  },
  {
    id: "oslo-2",
    title: "TESLA 1 Trial",
    excerpt: "Intrahepatic cholangiocarcinoma trial using SYS-TARE framework with goal of 50% 5-year survival through liver transplantation.",
    page: "Oslo Trials",
    pageTitle: "The Oslo Trials: TESLA 1, TESLA 2, and SURE-LT",
    url: "/oslo-trials",
    category: "Clinical Trials",
  },
  {
    id: "oslo-3",
    title: "TESLA 2 Trial",
    excerpt: "Perihilar cholangiocarcinoma trial using modified Mayo protocol with stereotactic body radiation therapy instead of brachytherapy.",
    page: "Oslo Trials",
    pageTitle: "The Oslo Trials: TESLA 1, TESLA 2, and SURE-LT",
    url: "/oslo-trials",
    category: "Clinical Trials",
  },
  {
    id: "oslo-4",
    title: "SURE-LT Trial",
    excerpt: "Salvage Unresectable Resectable Explant Liver Transplantation for locally advanced pCCA with vascular involvement.",
    page: "Oslo Trials",
    pageTitle: "The Oslo Trials: TESLA 1, TESLA 2, and SURE-LT",
    url: "/oslo-trials",
    category: "Clinical Trials",
  },

  // Clinical Trials Registry
  {
    id: "trials-1",
    title: "Clinical Trials Registry",
    excerpt: "Comprehensive registry of active clinical trials recruiting patients for liver transplantation in cholangiocarcinoma with direct links to ClinicalTrials.gov.",
    page: "Clinical Trials Registry",
    pageTitle: "Clinical Trials Registry",
    url: "/trials-registry",
    category: "Clinical Trials",
  },
  {
    id: "trials-2",
    title: "iCCA Trials",
    excerpt: "Five active trials recruiting patients with unresectable intrahepatic cholangiocarcinoma, including TESLA 1, iCOLA, LIRICA, and trials from Toronto and Rutgers.",
    page: "Clinical Trials Registry",
    pageTitle: "Clinical Trials Registry",
    url: "/trials-registry",
    category: "Clinical Trials",
  },
  {
    id: "trials-3",
    title: "pCCA Trials",
    excerpt: "Five active trials recruiting patients with non-resectable perihilar cholangiocarcinoma, including pCOLA, TESLA 2, SURE-LT, and trials from Spain and Italy.",
    page: "Clinical Trials Registry",
    pageTitle: "Clinical Trials Registry",
    url: "/trials-registry",
    category: "Clinical Trials",
  },
  {
    id: "trials-4",
    title: "ClinicalTrials.gov Links",
    excerpt: "Direct links to all trials on ClinicalTrials.gov with NCT numbers for easy access to detailed trial information and enrollment procedures.",
    page: "Clinical Trials Registry",
    pageTitle: "Clinical Trials Registry",
    url: "/trials-registry",
    category: "Clinical Trials",
  },

  // Future Directions
  {
    id: "future-1",
    title: "Molecular Profiling",
    excerpt: "Comprehensive molecular profiling of tumor characteristics enables more accurate prediction of treatment response and post-transplant outcomes.",
    page: "Future Directions",
    pageTitle: "Future Directions",
    url: "/future",
    category: "Molecular Medicine",
  },
  {
    id: "future-2",
    title: "FGFR2 Fusions",
    excerpt: "FGFR2 fusions are enriched in iCCA and have targeted therapies available. Patients with FGFR2 fusions may benefit from targeted therapy in the neoadjuvant setting.",
    page: "Future Directions",
    pageTitle: "Future Directions",
    url: "/future",
    category: "Molecular Markers",
  },
  {
    id: "future-3",
    title: "IDH1 Mutations",
    excerpt: "IDH1 mutations are enriched in iCCA and associated with a distinct epigenetic landscape. IDH1 inhibitors are now available and may improve outcomes.",
    page: "Future Directions",
    pageTitle: "Future Directions",
    url: "/future",
    category: "Molecular Markers",
  },
  {
    id: "future-4",
    title: "Circulating Tumor DNA",
    excerpt: "ctDNA analysis represents a powerful emerging tool for CCA management, enabling non-invasive detection of tumor-derived DNA fragments in the bloodstream.",
    page: "Future Directions",
    pageTitle: "Future Directions",
    url: "/future",
    category: "Biomarkers",
  },
  {
    id: "future-5",
    title: "Liver-Directed Therapies",
    excerpt: "Emerging modalities including hepatic artery infusion, transarterial radioembolization, and stereotactic body radiation therapy expand treatment options for patients awaiting transplantation.",
    page: "Future Directions",
    pageTitle: "Future Directions",
    url: "/future",
    category: "Therapies",
  },
  {
    id: "future-6",
    title: "Immunotherapy",
    excerpt: "Integration of immune checkpoint inhibitors into CCA management and optimization of immunosuppression in transplant recipients represent critical frontiers.",
    page: "Future Directions",
    pageTitle: "Future Directions",
    url: "/future",
    category: "Immunotherapy",
  },

  // References
  {
    id: "ref-1",
    title: "Cholangiocarcinoma Lancet Review",
    excerpt: "Razumilava, N. & Gores, G. J. Cholangiocarcinoma. Lancet 383, 2168-2179 (2014).",
    page: "References",
    pageTitle: "References and Citations",
    url: "/references",
    category: "Epidemiology",
  },
  {
    id: "ref-2",
    title: "TOPAZ-1 Trial",
    excerpt: "Oh, D. Y. et al. Durvalumab or placebo plus gemcitabine and cisplatin in participants with advanced biliary tract cancer (TOPAZ-1). Lancet Gastroenterol Hepatol 9, 694-704 (2024).",
    page: "References",
    pageTitle: "References and Citations",
    url: "/references",
    category: "Immunotherapy",
  },
  {
    id: "ref-3",
    title: "Mayo Protocol Study",
    excerpt: "Darwish Murad, S. et al. Efficacy of neoadjuvant chemoradiation, followed by liver transplantation, for perihilar cholangiocarcinoma at 12 US centers. Gastroenterology 143, 88-98 (2012).",
    page: "References",
    pageTitle: "References and Citations",
    url: "/references",
    category: "pCCA",
  },
  {
    id: "ref-4",
    title: "TESLA Trial",
    excerpt: "Yaqub, S. et al. Liver transplantation for locally advanced non-resectable intrahepatic cholangiocarcinoma treated with neoadjuvant therapy: early results from the TESLA trial. Br J Surg 112 (2025).",
    page: "References",
    pageTitle: "References and Citations",
    url: "/references",
    category: "iCCA",
  },
  {
    id: "ref-5",
    title: "SURE-LT Concept",
    excerpt: "Line, P. D. et al. A Novel Transplant Approach for Locally Advanced Unresectable Perihilar Cholangiocarcinoma: The SURE-LT Concept. Ann Surg (2025).",
    page: "References",
    pageTitle: "References and Citations",
    url: "/references",
    category: "SURE-LT",
  },
  {
    id: "ref-6",
    title: "Very Early iCCA",
    excerpt: "Sapisochin, G. et al. Liver transplantation for very early intrahepatic cholangiocarcinoma: International retrospective study supporting a prospective assessment. Hepatology 64, 1178-1188 (2016).",
    page: "References",
    pageTitle: "References and Citations",
    url: "/references",
    category: "iCCA",
  },
  {
    id: "ref-7",
    title: "ESMO Guidelines",
    excerpt: "Vogel, A. et al. Biliary tract cancer: ESMO Clinical Practice Guideline for diagnosis, treatment and follow-up. Ann Oncol 34, 127-140 (2023).",
    page: "References",
    pageTitle: "References and Citations",
    url: "/references",
    category: "Guidelines",
  },
  {
    id: "ref-8",
    title: "Hepatic Artery Infusion",
    excerpt: "Cercek, A. et al. Assessment of Hepatic Arterial Infusion of Floxuridine in Combination With Systemic Gemcitabine and Oxaliplatin in Patients With Unresectable Intrahepatic Cholangiocarcinoma. JAMA Oncol 6, 60-67 (2020).",
    page: "References",
    pageTitle: "References and Citations",
    url: "/references",
    category: "Therapies",
  },
  {
    id: "ref-9",
    title: "Molecular Profiling",
    excerpt: "Lowery, M. A. et al. Comprehensive Molecular Profiling of Intrahepatic and Extrahepatic Cholangiocarcinomas: Potential Targets for Intervention. Clin Cancer Res 24, 4154-4161 (2018).",
    page: "References",
    pageTitle: "References and Citations",
    url: "/references",
    category: "Molecular",
  },
  // About Oslo Group
  {
    id: "about-1",
    title: "Transplant Oncology Group",
    excerpt: "The Transplant Oncology Group at Oslo University Hospital leads research and clinical innovation in transplant-based treatment for advanced cholangiocarcinoma.",
    page: "About",
    pageTitle: "About the Oslo Group",
    url: "/about",
    category: "Institution",
  },
  {
    id: "about-2",
    title: "Tor Magnus Smedman",
    excerpt: "Dr. Smedman leads the Transplant Oncology Group as Principal Investigator for TESLA 1, TESLA 2, and SURE-LT trials.",
    page: "About",
    pageTitle: "About the Oslo Group",
    url: "/about",
    category: "Team Members",
  },
  {
    id: "about-3",
    title: "Sheraz Yaqub",
    excerpt: "Dr. Yaqub is a hepatobiliary surgeon and co-investigator leading clinical implementation of transplant oncology protocols.",
    page: "About",
    pageTitle: "About the Oslo Group",
    url: "/about",
    category: "Team Members",
  },
  {
    id: "about-4",
    title: "Research Mission",
    excerpt: "The group's mission is to establish transplant oncology as a curative treatment paradigm for carefully selected patients with non-resectable cholangiocarcinoma.",
    page: "About",
    pageTitle: "About the Oslo Group",
    url: "/about",
    category: "Mission",
  },
  {
    id: "about-5",
    title: "TESLA 1 Trial Publication",
    excerpt: "Yaqub et al. Liver transplantation for locally advanced non-resectable intrahepatic cholangiocarcinoma treated with neoadjuvant therapy: Early results from the TESLA trial. British Journal of Surgery (2025).",
    page: "About",
    pageTitle: "About the Oslo Group",
    url: "/about",
    category: "Publications",
  },
  {
    id: "about-6",
    title: "SURE-LT Protocol Publication",
    excerpt: "Smedman et al. En bloc resection of the liver and pancreas with a non-touch technique followed by liver transplantation for non-resectable hilar cholangiocarcinoma. Transplantation (2024-2025).",
    page: "About",
    pageTitle: "About the Oslo Group",
    url: "/about",
    category: "Publications",
  },
  {
    id: "about-7",
    title: "Lunsford Landmark Study",
    excerpt: "Lunsford et al. Liver transplantation for locally advanced intrahepatic cholangiocarcinoma treated with neoadjuvant therapy: A prospective case series. The Lancet Gastroenterology & Hepatology 3, 496-507 (2018).",
    page: "About",
    pageTitle: "About the Oslo Group",
    url: "/about",
    category: "Publications",
  },
];

export function searchContent(query: string): SearchResult[] {
  if (!query.trim()) {
    return [];
  }

  const lowerQuery = query.toLowerCase();

  return searchIndex.filter((result) => {
    const titleMatch = result.title.toLowerCase().includes(lowerQuery);
    const excerptMatch = result.excerpt.toLowerCase().includes(lowerQuery);
    const categoryMatch = result.category.toLowerCase().includes(lowerQuery);

    return titleMatch || excerptMatch || categoryMatch;
  });
}

export function getSearchSuggestions(query: string): string[] {
  if (!query.trim()) {
    return [];
  }

  const lowerQuery = query.toLowerCase();
  const suggestions = new Set<string>();

  searchIndex.forEach((result) => {
    if (result.title.toLowerCase().includes(lowerQuery)) {
      suggestions.add(result.title);
    }
    if (result.category.toLowerCase().includes(lowerQuery)) {
      suggestions.add(result.category);
    }
  });

  return Array.from(suggestions).slice(0, 5);
}

// Note: About Oslo Group entries were added to searchIndex array above
