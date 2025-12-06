import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  SurvivalChart,
  RecurrenceFreeSurvivalChart,
  OutcomeComparisonChart,
  SurvivalComparisonSummary,
} from "@/components/OutcomesVisualization";

export default function Outcomes() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white border-b border-gray-200 shadow-sm z-50">
        <div className="container flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0 py-4">
          <h1 className="text-2xl font-bold text-foreground">CCA-LT</h1>
          <div className="flex gap-8">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/perihilar" className="nav-link">Perihilar CCA</Link>
            <Link href="/intrahepatic" className="nav-link">Intrahepatic CCA</Link>
            <Link href="/outcomes" className="nav-link active">Outcomes</Link>
            <Link href="/sure-lt" className="nav-link">SURE-LT</Link>
            <Link href="/future" className="nav-link">Future</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="container py-12">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Clinical Outcomes and Survival Analysis
          </h1>
          <p className="text-xl text-secondary leading-relaxed">
            Comprehensive comparison of survival rates and clinical outcomes for perihilar and intrahepatic cholangiocarcinoma after liver transplantation, with hepatocellular carcinoma as a reference standard.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-background py-16">
        <div className="container max-w-6xl">
          {/* Summary Cards */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-8">
              Key Outcome Metrics
            </h2>
            <SurvivalComparisonSummary />
          </div>

          <div className="section-divider"></div>

          {/* Overall Survival Chart */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-8">
              Overall Survival (OS) After Transplantation
            </h2>
            <div className="bg-white rounded-lg p-6 border border-gray-200 mb-6">
              <SurvivalChart />
            </div>
            <div className="bg-blue-50 border-l-4 border-accent pl-6 py-4">
              <p className="text-foreground leading-relaxed">
                <strong>Key Finding:</strong> Protocol-based liver transplantation achieves 5-year overall survival of 68% for pCCA and 58% for iCCA, representing a significant improvement over historical surgical resection outcomes (20–35% for pCCA). pCCA outcomes approach those of hepatocellular carcinoma within the Milan criteria (75%), validating LT as a standard of care for carefully selected patients.
              </p>
            </div>
          </div>

          <div className="section-divider"></div>

          {/* Recurrence-Free Survival Chart */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-8">
              Recurrence-Free Survival (RFS) After Transplantation
            </h2>
            <div className="bg-white rounded-lg p-6 border border-gray-200 mb-6">
              <RecurrenceFreeSurvivalChart />
            </div>
            <div className="bg-blue-50 border-l-4 border-accent pl-6 py-4">
              <p className="text-foreground leading-relaxed">
                <strong>Key Finding:</strong> Recurrence-free survival at 5 years is 75% for pCCA and 62% for iCCA. The higher RFS for pCCA reflects the efficacy of standardized neoadjuvant chemoradiation protocols in eliminating aggressive disease before transplantation. The lower RFS for iCCA highlights the importance of biology-first selection and response-based criteria for identifying suitable candidates.
              </p>
            </div>
          </div>

          <div className="section-divider"></div>

          {/* Outcome Comparison */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-8">
              Clinical Outcomes Comparison
            </h2>
            <div className="bg-white rounded-lg p-6 border border-gray-200 mb-6">
              <OutcomeComparisonChart />
            </div>
            <div className="bg-blue-50 border-l-4 border-accent pl-6 py-4">
              <p className="text-foreground leading-relaxed">
                <strong>Key Finding:</strong> Both pCCA and iCCA transplant recipients achieve high rates of protocol adherence (95% and 88%, respectively), R0 resection (98% and 92%), and disease-free status at 1 year (92% and 85%). These metrics demonstrate the feasibility and effectiveness of standardized transplant protocols in achieving excellent surgical and oncological outcomes.
              </p>
            </div>
          </div>

          <div className="section-divider"></div>

          {/* Interpretation Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-8">
              Clinical Interpretation
            </h2>
            
            <div className="space-y-6">
              <div className="medical-card">
                <h3 className="text-2xl font-bold text-foreground mb-4">pCCA: Established Standard of Care</h3>
                <p className="text-secondary leading-relaxed mb-4">
                  The 68% 5-year overall survival for protocol-based pCCA transplantation represents a paradigm shift from historical surgical outcomes. This improvement reflects the efficacy of standardized neoadjuvant chemoradiation protocols (e.g., Mayo Clinic protocol) in identifying and treating patients with favorable tumor biology.
                </p>
                <p className="text-secondary leading-relaxed">
                  The high 5-year recurrence-free survival (75%) demonstrates that LT effectively addresses the microscopic biliary extension and occult intrahepatic disease characteristic of pCCA, resulting in durable long-term outcomes.
                </p>
              </div>

              <div className="medical-card">
                <h3 className="text-2xl font-bold text-foreground mb-4">iCCA: Emerging Frontier with Biology-First Selection</h3>
                <p className="text-secondary leading-relaxed mb-4">
                  The 58% 5-year overall survival for carefully selected iCCA patients represents a significant advance from the historical contraindication of LT in iCCA. This improvement reflects the recognition that tumor biology, rather than tumor size alone, predicts post-transplant outcomes.
                </p>
                <p className="text-secondary leading-relaxed">
                  The 62% 5-year recurrence-free survival, while lower than pCCA, is comparable to or exceeds outcomes for advanced HCC, supporting LT as a viable option for selected iCCA patients with favorable biological characteristics and sustained response to neoadjuvant therapy.
                </p>
              </div>

              <div className="medical-card">
                <h3 className="text-2xl font-bold text-foreground mb-4">Comparison to HCC: Validation of CCA Transplantation</h3>
                <p className="text-secondary leading-relaxed mb-4">
                  The 75% 5-year overall survival for HCC within the Milan criteria serves as a reference standard for transplant oncology. pCCA outcomes now approach this benchmark, validating LT as a standard of care for unresectable pCCA.
                </p>
                <p className="text-secondary leading-relaxed">
                  iCCA outcomes, while lower than HCC, are increasingly recognized as acceptable for carefully selected patients, particularly those with very-early disease (≤2 cm) or demonstrated response to neoadjuvant therapy. This represents a significant paradigm shift from the historical contraindication of iCCA transplantation.
                </p>
              </div>
            </div>
          </div>

          <div className="section-divider"></div>

          {/* Factors Influencing Outcomes */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-8">
              Factors Influencing Post-Transplant Outcomes
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="medical-card">
                <h3 className="text-xl font-bold text-foreground mb-4">Favorable Prognostic Factors</h3>
                <ul className="space-y-3 text-secondary">
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-3">✓</span>
                    <span>Completion of neoadjuvant therapy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-3">✓</span>
                    <span>Absence of regional lymph node metastases</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-3">✓</span>
                    <span>CA19-9 normalization or significant decline</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-3">✓</span>
                    <span>Favorable molecular profile (FGFR2, IDH1 mutations)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-3">✓</span>
                    <span>Excellent performance status (ECOG 0–1)</span>
                  </li>
                </ul>
              </div>

              <div className="medical-card">
                <h3 className="text-xl font-bold text-foreground mb-4">Adverse Prognostic Factors</h3>
                <ul className="space-y-3 text-secondary">
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-3">✗</span>
                    <span>Regional lymph node metastases (N1)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-3">✗</span>
                    <span>Peritoneal carcinomatosis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-3">✗</span>
                    <span>Persistently elevated CA19-9 (&gt;100 U/mL)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-3">✗</span>
                    <span>Aggressive molecular profile (KRAS, TP53 mutations)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-3">✗</span>
                    <span>Progressive disease on neoadjuvant therapy</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="section-divider"></div>
          <div className="flex gap-4 justify-between">
            <Link href="/intrahepatic">
              <Button variant="outline">← Back to iCCA</Button>
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
