import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function IntrahepaticCCA() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white border-b border-gray-200 shadow-sm z-50">
        <div className="container flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0 py-4">
          <h1 className="text-2xl font-bold text-foreground">CCA-LT</h1>
          <div className="flex gap-8">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/perihilar" className="nav-link">Perihilar CCA</Link>
            <Link href="/intrahepatic" className="nav-link active">Intrahepatic CCA</Link>
            <Link href="/sure-lt" className="nav-link">SURE-LT</Link>
            <Link href="/future" className="nav-link">Future</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="container py-12">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Intrahepatic Cholangiocarcinoma (iCCA)
          </h1>
          <p className="text-xl text-secondary leading-relaxed">
            An evolving frontier in transplant oncology. Historically contraindicated for LT, modern data now support LT as a viable curative option in carefully selected patients with favorable tumor biology.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-background py-16">
        <div className="container max-w-4xl">
          {/* Disease Definition */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Disease Definition and Epidemiology
            </h2>
            <p className="text-lg text-secondary leading-relaxed mb-6">
              Intrahepatic cholangiocarcinoma (iCCA) arises from the small bile ducts within the hepatic parenchyma and typically presents as a mass-forming lesion. It may mimic hepatocellular carcinoma radiologically, particularly when ≤2 cm in a cirrhotic liver.
            </p>
            <p className="text-lg text-secondary leading-relaxed mb-6">
              iCCA accounts for 20–30% of all CCA cases, with rising global incidence, particularly in Western countries, attributed to the increasing prevalence of cirrhosis, viral hepatitis, and metabolic dysfunction-associated steatotic liver disease (MASLD).
            </p>
            
            <h3 className="text-2xl font-bold text-foreground mb-4">Pattern of Spread</h3>
            <p className="text-lg text-secondary leading-relaxed mb-6">
              Unlike pCCA, iCCA spreads hematogenously and through intrahepatic vessels rather than via lymphatics in early disease stages. This distinct pattern of spread has important implications for transplant candidacy and outcome prediction.
            </p>
          </div>

          <div className="section-divider"></div>

          {/* Transplant-Eligible Phenotypes */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Transplant-Eligible Phenotypes
            </h2>
            <p className="text-lg text-secondary leading-relaxed mb-6">
              Historically, iCCA was contraindicated for LT due to high post-transplant recurrence. However, the recognition that <strong>tumor biology, rather than tumor size alone</strong>, predicts post-LT outcomes has prompted a reevaluation of LT candidacy. Two specific phenotypes have emerged as transplant-eligible:
            </p>

            <div className="space-y-6">
              <div className="medical-card">
                <h3 className="text-2xl font-bold text-accent mb-3">Phenotype 1: Very-Early iCCA</h3>
                <p className="text-foreground font-semibold mb-3">≤2 cm in Cirrhotic Livers</p>
                <p className="text-secondary leading-relaxed mb-4">
                  Very-early iCCA (≤2 cm) detected incidentally in cirrhotic livers is considered analogous to early HCC in behavior when diagnosed incidentally in explants. These tumors demonstrate outcomes paralleling early HCC, with favorable prognosis and low recurrence rates.
                </p>
                <p className="text-secondary leading-relaxed">
                  The biological similarity to early HCC makes this phenotype an ideal candidate for transplantation, particularly when discovered during surveillance or incidentally in explanted livers.
                </p>
              </div>

              <div className="medical-card">
                <h3 className="text-2xl font-bold text-accent mb-3">Phenotype 2: Response-Selected iCCA</h3>
                <p className="text-foreground font-semibold mb-3">Locally Advanced, Liver-Confined Disease</p>
                <p className="text-secondary leading-relaxed mb-4">
                  Selected cases of locally advanced, liver-confined iCCA demonstrating durable tumor control for ≥6–12 months on systemic and liver-directed therapy are now considered viable transplant candidates. This "test-of-time" approach allows aggressive tumors to declare themselves through progression.
                </p>
                <p className="text-secondary leading-relaxed">
                  Sustained response to therapy indicates favorable tumor biology and predicts superior post-transplant outcomes. Patients demonstrating disease stability or response over an extended period are more likely to achieve long-term survival after LT.
                </p>
              </div>
            </div>
          </div>

          <div className="section-divider"></div>

          {/* Test-of-Time Principle */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              The "Test-of-Time" Principle for iCCA
            </h2>
            <p className="text-lg text-secondary leading-relaxed mb-6">
              For iCCA, unlike pCCA, neoadjuvant chemoradiotherapy is not standardized. Instead, patients undergo systemic chemotherapy (typically gemcitabine–cisplatin ± durvalumab) with or without liver-directed therapy. Only those with disease stability or response for ≥6–12 months on serial imaging may be considered for LT within study protocols.
            </p>

            <h3 className="text-2xl font-bold text-foreground mb-4">How the Test-of-Time Works</h3>
            <div className="bg-blue-50 border-l-4 border-accent pl-6 py-4 mb-6">
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-foreground mb-2">1. Initial Systemic Therapy</p>
                  <p className="text-secondary">Patients initiate chemotherapy and/or liver-directed therapy (e.g., hepatic artery infusion pump, radioembolization).</p>
                </div>
                <div>
                  <p className="font-bold text-foreground mb-2">2. Serial Assessment</p>
                  <p className="text-secondary">Response is monitored through imaging and biomarkers over 6–12 months.</p>
                </div>
                <div>
                  <p className="font-bold text-foreground mb-2">3. Selection for LT</p>
                  <p className="text-secondary">Only patients demonstrating disease stability or response are considered for transplantation.</p>
                </div>
                <div>
                  <p className="font-bold text-foreground mb-2">4. Exclusion of Aggressive Disease</p>
                  <p className="text-secondary">Aggressive tumors progress during this interval and are excluded from transplantation, conserving organs for those likely to derive durable benefit.</p>
                </div>
              </div>
            </div>

            <p className="text-lg text-secondary leading-relaxed">
              This interval allows aggressive tumors to declare themselves via progression, thus eliminating poor candidates for LT and conserving organs for those likely to derive durable benefit.
            </p>
          </div>

          <div className="section-divider"></div>

          {/* Clinical Trials */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Emerging Multicenter Evidence
            </h2>
            <p className="text-lg text-secondary leading-relaxed mb-6">
              Emerging multicenter prospective data demonstrate that a biology-first selection paradigm can reliably identify candidates with long-term survival outcomes equivalent to those of hepatocellular carcinoma (HCC) transplantation in selected populations.
            </p>

            <h3 className="text-2xl font-bold text-foreground mb-4">Key Clinical Trials</h3>
            <div className="space-y-4">
              <div className="medical-card bg-blue-50 border-l-4 border-accent">
                <h3 className="text-xl font-bold text-foreground mb-2">TESLA Trial - Early Results (February 2025)</h3>
                <p className="text-secondary mb-3">
                  A prospective multicenter trial evaluating LT in selected iCCA patients, incorporating biology-first selection and response-based criteria for transplant candidacy.
                </p>
                <p className="text-secondary font-semibold mb-2">Early Results (n=5):</p>
                <ul className="text-secondary text-sm space-y-1 mb-3">
                  <li>All 5 patients alive at median 15-month follow-up</li>
                  <li>Perioperative mortality: 0%</li>
                  <li>R0 resection in all cases</li>
                  <li>Recurrence rate: 40% (2 of 5 patients)</li>
                  <li>KRAS mutations in 2, FGR2 rearrangement in 1 patient</li>
                </ul>
                <p className="text-secondary text-xs italic">
                  Yaqub S, et al. British Journal of Surgery. 2025;112(3):znaf054.
                </p>
              </div>
              <div className="medical-card bg-green-50 border-l-4 border-accent">
                <h3 className="text-xl font-bold text-foreground mb-2">Lunsford Trial - Landmark Study (2018)</h3>
                <p className="text-secondary mb-3">
                  Prospective case series from Houston Methodist establishing the efficacy of liver transplantation for locally advanced iCCA with neoadjuvant therapy response.
                </p>
                <p className="text-secondary font-semibold mb-2">Key Results (n=6 transplanted):</p>
                <ul className="text-secondary text-sm space-y-1 mb-3">
                  <li>1-year overall survival: 83.3% (5 of 6 patients)</li>
                  <li>Recurrence-free survival at 1 year: 50%</li>
                  <li>Median follow-up: 36 months (range 25-51)</li>
                  <li>Perioperative mortality: 0%</li>
                  <li>Recurrent disease: 50% (median 7.6 months)</li>
                </ul>
                <p className="text-secondary text-xs italic">
                  Lunsford KE, et al. Lancet Gastroenterology & Hepatology. 2018;3(5):337-348.
                </p>
              </div>
              <div className="medical-card">
                <h3 className="text-xl font-bold text-foreground mb-2">SYS-TARE Framework</h3>
                <p className="text-secondary">
                  An intention-to-treat framework combining systemic therapy and liver-directed therapy (TARE = transarterial radioembolization) with LT for selected iCCA patients, emphasizing response-based selection.
                </p>
              </div>
            </div>
          </div>

          <div className="section-divider"></div>

          {/* Molecular Context */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Molecular and Biological Context
            </h2>
            <p className="text-lg text-secondary leading-relaxed mb-6">
              CCA is a molecularly diverse malignancy. Understanding the molecular landscape is increasingly important for stratifying candidates for transplantation, particularly in iCCA where biologic selection is paramount.
            </p>

            <h3 className="text-2xl font-bold text-foreground mb-4">Key Molecular Alterations</h3>
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-foreground mb-2">Favorable Mutations (iCCA)</p>
                  <p className="text-secondary">FGFR2 fusions, IDH1 mutations, BRAF mutations, and NTRK fusions are enriched in iCCA and have targeted therapies available.</p>
                </div>
                <div>
                  <p className="font-bold text-foreground mb-2">Aggressive Mutations (pCCA)</p>
                  <p className="text-secondary">KRAS and TP53 mutations, more common in pCCA, are associated with aggressive biology and poorer post-transplant outcomes.</p>
                </div>
                <div>
                  <p className="font-bold text-foreground mb-2">Prognostic Markers (iCCA)</p>
                  <p className="text-secondary">BAP1 and ARID1A mutations are increasingly recognized in iCCA and correlate with prognosis.</p>
                </div>
              </div>
            </div>

            <p className="text-lg text-secondary leading-relaxed">
              Molecular profiling is increasingly used to stratify candidates for transplantation, particularly in iCCA where biologic selection is paramount. Presence of TP53 or KRAS mutations is associated with higher recurrence following LT.
            </p>
          </div>

          {/* Navigation */}
          <div className="section-divider"></div>
          <div className="flex gap-4 justify-between">
            <Link href="/perihilar">
              <Button variant="outline">← Back to pCCA</Button>
            </Link>
            <Link href="/sure-lt">
              <Button className="bg-accent text-white hover:bg-teal-700">
                Next: SURE-LT Protocol →
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
