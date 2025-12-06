import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function PerihilarCCA() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white border-b border-gray-200 shadow-sm z-50">
        <div className="container flex items-center justify-between py-4">
          <h1 className="text-2xl font-bold text-foreground">CCA-LT</h1>
          <div className="flex gap-8">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/perihilar" className="nav-link active">Perihilar CCA</Link>
            <Link href="/intrahepatic" className="nav-link">Intrahepatic CCA</Link>
            <Link href="/sure-lt" className="nav-link">SURE-LT Protocol</Link>
            <Link href="/future" className="nav-link">Future Directions</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="container py-12">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Perihilar Cholangiocarcinoma (pCCA)
          </h1>
          <p className="text-xl text-secondary leading-relaxed">
            The most common and best-established indication for liver transplantation in cholangiocarcinoma. Protocol-based neoadjuvant treatment followed by LT has transformed outcomes for unresectable yet liver-confined disease.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-background py-16">
        <div className="container max-w-4xl">
          {/* Epidemiology */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Epidemiology and Risk Factors
            </h2>
            <p className="text-lg text-secondary leading-relaxed mb-6">
              Perihilar cholangiocarcinoma arises from the biliary epithelium at the junction of the right and left hepatic ducts and extends to the second-order branches of the intrahepatic bile ducts. It accounts for approximately 50–60% of all CCA cases and is characterized by early periductal infiltration, perineural invasion, and lymphatic spread.
            </p>
            <p className="text-lg text-secondary leading-relaxed mb-6">
              Due to its anatomical location, pCCA frequently presents with biliary obstruction and jaundice, and has a high rate of unresectability, with more than half of patients deemed inoperable at diagnosis.
            </p>
            
            <h3 className="text-2xl font-bold text-foreground mb-4">Key Risk Factors</h3>
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <ul className="space-y-3 text-secondary">
                <li className="flex items-start">
                  <span className="text-accent font-bold mr-3">•</span>
                  <span><strong>Primary sclerosing cholangitis (PSC):</strong> pCCA develops in up to 20% of PSC patients</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent font-bold mr-3">•</span>
                  <span><strong>Choledochal cysts and Caroli disease</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent font-bold mr-3">•</span>
                  <span><strong>Thorotrast exposure:</strong> Historical contrast agent</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent font-bold mr-3">•</span>
                  <span><strong>Biliary papillomatosis</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent font-bold mr-3">•</span>
                  <span><strong>Hepatolithiasis</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent font-bold mr-3">•</span>
                  <span><strong>Liver fluke infection:</strong> Clonorchis sinensis, Opisthorchis viverrini in endemic regions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent font-bold mr-3">•</span>
                  <span><strong>De novo sporadic cases</strong> in older adults without identifiable risk factors</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="section-divider"></div>

          {/* Clinical Presentation */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Clinical Presentation and Diagnosis
            </h2>
            <p className="text-lg text-secondary leading-relaxed mb-6">
              pCCA typically presents with painless jaundice, pruritus, dark urine, pale stools, and recurrent cholangitis. As many patients are asymptomatic until biliary obstruction occurs, diagnosis is often delayed.
            </p>
            
            <h3 className="text-2xl font-bold text-foreground mb-4">Bismuth-Corlette Classification</h3>
            <p className="text-lg text-secondary leading-relaxed mb-6">
              The Bismuth–Corlette classification describes the longitudinal extent of ductal involvement and remains clinically relevant for assessing surgical resectability and transplant candidacy:
            </p>
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-foreground mb-2">Type I</p>
                  <p className="text-secondary">Tumor below the confluence of the right and left hepatic ducts</p>
                </div>
                <div>
                  <p className="font-bold text-foreground mb-2">Type II</p>
                  <p className="text-secondary">Tumor involving the confluence</p>
                </div>
                <div>
                  <p className="font-bold text-foreground mb-2">Type IIIa/b</p>
                  <p className="text-secondary">Extending into either right (IIIa) or left (IIIb) secondary ducts</p>
                </div>
                <div>
                  <p className="font-bold text-foreground mb-2">Type IV</p>
                  <p className="text-secondary">Bilateral secondary duct involvement</p>
                </div>
              </div>
            </div>

            <p className="text-lg text-secondary leading-relaxed mb-6">
              <strong>Important note:</strong> The staging implications of pCCA for LT differ significantly from resection. LT overcomes longitudinal ductal extension but requires exclusion of nodal or peritoneal metastases due to high recurrence risk.
            </p>
          </div>

          <div className="section-divider"></div>

          {/* Why Transplant */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Why Liver Transplantation?
            </h2>
            <p className="text-lg text-secondary leading-relaxed mb-6">
              Surgical resection for pCCA yields disappointing outcomes, with 5-year survival of only 20–35% and perioperative mortality up to 10%. Many tumors are unresectable due to:
            </p>
            <div className="bg-blue-50 border-l-4 border-accent pl-6 py-4 mb-6">
              <ul className="space-y-2 text-foreground">
                <li className="flex items-start">
                  <span className="text-accent font-bold mr-3">•</span>
                  <span>Bilateral biliary duct involvement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent font-bold mr-3">•</span>
                  <span>Portal vein or hepatic artery encasement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent font-bold mr-3">•</span>
                  <span>Inadequate future liver remnant</span>
                </li>
              </ul>
            </div>

            <p className="text-lg text-secondary leading-relaxed mb-6">
              Liver transplantation overcomes these limitations by replacing the entire tumor-bearing liver, addressing microscopic biliary extension, occult intrahepatic disease, and underlying parenchymal dysfunction. Within a protocol-based neoadjuvant framework, LT achieves 5-year survival rates exceeding 60–70%, which surpasses historical outcomes with resection.
            </p>
          </div>

          <div className="section-divider"></div>

          {/* Neoadjuvant Protocol */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Neoadjuvant Chemoradiation Protocol
            </h2>
            <p className="text-lg text-secondary leading-relaxed mb-6">
              The success of LT for pCCA is predicated on a rigorous <strong>neoadjuvant chemoradiation protocol</strong>, most notably the Mayo Clinic protocol. This "test-of-time" strategy aims to:
            </p>
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-foreground mb-2 text-accent">1. Exclude Aggressive Tumor Biology</p>
                  <p className="text-secondary">By requiring a period of stability on treatment, aggressive tumors declare themselves through progression and are excluded from transplantation.</p>
                </div>
                <div>
                  <p className="font-bold text-foreground mb-2 text-accent">2. Downstage the Tumor</p>
                  <p className="text-secondary">Neoadjuvant therapy reduces tumor burden and improves the likelihood of achieving R0 resection at transplantation.</p>
                </div>
                <div>
                  <p className="font-bold text-foreground mb-2 text-accent">3. Sterilize the Surgical Field</p>
                  <p className="text-secondary">Chemoradiation reduces the risk of microscopic disease spillage and improves oncological outcomes.</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-4">Mandatory Staging Operation</h3>
            <p className="text-lg text-secondary leading-relaxed mb-6">
              A diagnostic laparoscopy or laparotomy is universally required before listing for transplantation to assess the hepatoduodenal lymph nodes, peritoneum, and liver surface. Any regional nodal metastasis (N1) or peritoneal involvement is an absolute exclusion criterion.
            </p>
          </div>

          <div className="section-divider"></div>

          {/* Outcomes */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Transplant Outcomes for pCCA
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="medical-card">
                <h3 className="text-2xl font-bold text-accent mb-3">60-70%</h3>
                <p className="text-foreground font-semibold mb-2">5-Year Survival</p>
                <p className="text-secondary">
                  Protocol-based LT achieves 5-year survival rates consistently exceeding 60–70% in strictly selected pCCA patients.
                </p>
              </div>
              <div className="medical-card">
                <h3 className="text-2xl font-bold text-accent mb-3">Milan Criteria</h3>
                <p className="text-foreground font-semibold mb-2">Comparable to HCC</p>
                <p className="text-secondary">
                  Outcomes approach or surpass those achieved for hepatocellular carcinoma within the Milan criteria.
                </p>
              </div>
            </div>

            <p className="text-lg text-secondary leading-relaxed">
              These superior outcomes have resulted in formal endorsement of LT for pCCA in multiple contemporary international guidelines, establishing it as a validated standard of care for unresectable, non-metastatic disease.
            </p>
          </div>

          {/* Navigation */}
          <div className="section-divider"></div>
          <div className="flex gap-4 justify-between">
            <Link href="/">
              <Button variant="outline">← Back to Home</Button>
            </Link>
            <Link href="/intrahepatic">
              <Button className="bg-accent text-white hover:bg-teal-700">
                Next: Intrahepatic CCA →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12 mt-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-foreground mb-4">About This Site</h4>
              <p className="text-secondary text-sm">
                This website synthesizes current evidence on liver transplantation for cholangiocarcinoma, emphasizing the work of the Oslo group and the SURE-LT protocol.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Key Authors</h4>
              <p className="text-secondary text-sm">
                Sheraz Yaqub, Tor Magnus Smedman, Svein Dueland, Julie Heimbach, Vincenzo Mazzaferro, Pål-Dag Line
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Affiliations</h4>
              <p className="text-secondary text-sm">
                Oslo University Hospital, University of Oslo, Mayo Clinic, Fondazione IRCCS Istituto Nazionale Tumori
              </p>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8">
            <p className="text-secondary text-sm text-center mb-3">
              © 2025 Liver Transplantation for Cholangiocarcinoma. Medical information for educational purposes.
            </p>
            <p className="text-secondary text-sm text-center">
              Website created by Tor Magnus Smedman, MD PhD, Transplant Oncology Group, Oslo University Hospital
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
