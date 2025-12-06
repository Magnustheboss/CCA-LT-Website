import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function FutureDirections() {
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
            <Link href="/sure-lt" className="nav-link">SURE-LT</Link>
            <Link href="/future" className="nav-link active">Future Directions</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="container py-12">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Future Directions
          </h1>
          <p className="text-xl text-secondary leading-relaxed">
            The future of liver transplantation for cholangiocarcinoma is rapidly evolving. Emerging technologies, molecular profiling, and personalized medicine approaches are poised to transform patient selection, treatment strategies, and outcomes.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-background py-16">
        <div className="container max-w-4xl">
          {/* Molecular Profiling */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Molecular Profiling and Precision Medicine
            </h2>
            <p className="text-lg text-secondary leading-relaxed mb-6">
              The integration of comprehensive molecular profiling into transplant decision-making represents a paradigm shift toward precision medicine in CCA. Rather than relying solely on clinical and radiographic features, molecular analysis of tumor characteristics enables more accurate prediction of treatment response and post-transplant outcomes.
            </p>

            <h3 className="text-2xl font-bold text-foreground mb-4">Key Molecular Alterations</h3>
            <div className="space-y-4 mb-6">
              <div className="medical-card">
                <h4 className="text-xl font-bold text-foreground mb-3">FGFR2 Fusions</h4>
                <p className="text-secondary mb-3">
                  Enriched in iCCA, FGFR2 fusions are associated with a distinct molecular subtype and have targeted therapies available (FGFR inhibitors). Patients with FGFR2 fusions may benefit from targeted therapy in the neoadjuvant setting.
                </p>
                <p className="text-secondary text-sm">
                  <strong>Clinical Implication:</strong> Presence of FGFR2 fusions may predict response to targeted therapy and favorable post-transplant outcomes.
                </p>
              </div>

              <div className="medical-card">
                <h4 className="text-xl font-bold text-foreground mb-3">IDH1 Mutations</h4>
                <p className="text-secondary mb-3">
                  IDH1 mutations are enriched in iCCA and are associated with a distinct epigenetic landscape. IDH1 inhibitors are now available and may improve outcomes in patients with IDH1-mutant tumors.
                </p>
                <p className="text-secondary text-sm">
                  <strong>Clinical Implication:</strong> IDH1-mutant status should inform neoadjuvant therapy selection and may predict treatment response.
                </p>
              </div>

              <div className="medical-card">
                <h4 className="text-xl font-bold text-foreground mb-3">KRAS and TP53 Mutations</h4>
                <p className="text-secondary mb-3">
                  More common in pCCA, KRAS and TP53 mutations are associated with aggressive tumor biology and poorer post-transplant outcomes. These mutations represent potential targets for future therapeutic interventions.
                </p>
                <p className="text-secondary text-sm">
                  <strong>Clinical Implication:</strong> Presence of KRAS or TP53 mutations may warrant more intensive neoadjuvant therapy or exclusion from transplantation.
                </p>
              </div>

              <div className="medical-card">
                <h4 className="text-xl font-bold text-foreground mb-3">BAP1 and ARID1A Mutations</h4>
                <p className="text-secondary mb-3">
                  Increasingly recognized in iCCA, BAP1 and ARID1A mutations correlate with prognosis and may influence treatment selection. These mutations affect chromatin remodeling and DNA repair pathways.
                </p>
                <p className="text-secondary text-sm">
                  <strong>Clinical Implication:</strong> BAP1 and ARID1A status may predict immunotherapy response and guide adjuvant treatment decisions.
                </p>
              </div>
            </div>
          </div>

          <div className="section-divider"></div>

          {/* Circulating Tumor DNA */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Circulating Tumor DNA (ctDNA) as a Biomarker
            </h2>
            <p className="text-lg text-secondary leading-relaxed mb-6">
              Circulating tumor DNA (ctDNA) analysis represents a powerful emerging tool for CCA management. ctDNA can detect tumor-derived DNA fragments in the bloodstream, providing a non-invasive window into tumor biology and treatment response.
            </p>

            <h3 className="text-2xl font-bold text-foreground mb-4">Applications in the Transplant Pathway</h3>
            
            <h4 className="text-xl font-bold text-foreground mb-3">Pre-Transplant Selection</h4>
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-foreground mb-2">Molecular Profiling When Tissue is Insufficient</p>
                  <p className="text-secondary">
                    In cases where brush cytology or biopsy yields inadequate material, plasma ctDNA analysis can identify actionable mutations and prognostic markers, enabling treatment planning without repeat invasive procedures.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-foreground mb-2">Detection of Occult Metastatic Disease</p>
                  <p className="text-secondary">
                    Rising ctDNA levels during neoadjuvant therapy may indicate progression not yet visible on imaging, prompting earlier restaging or delisting before wasting precious donor organs.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-foreground mb-2">Response Monitoring</p>
                  <p className="text-secondary">
                    Serial ctDNA measurements can quantify treatment response more dynamically than imaging, particularly for iCCA patients undergoing systemic therapy plus liver-directed treatment. A decline or clearance of ctDNA suggests favorable biology, whereas persistent or rising levels may indicate aggressive disease unsuitable for transplantation.
                  </p>
                </div>
              </div>
            </div>

            <h4 className="text-xl font-bold text-foreground mb-3">Post-Transplant Surveillance</h4>
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-foreground mb-2">Early Recurrence Detection</p>
                  <p className="text-secondary">
                    ctDNA can detect molecular recurrence months before radiographic evidence, potentially enabling earlier intervention with systemic therapy or targeted agents. This early detection window may improve salvage therapy outcomes.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-foreground mb-2">Prognostic Stratification</p>
                  <p className="text-secondary">
                    Detectable ctDNA in the early post-transplant period is associated with higher recurrence risk and poorer survival. Patients with persistent ctDNA may benefit from intensified adjuvant therapy.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-foreground mb-2">Immunosuppression Optimization</p>
                  <p className="text-secondary">
                    ctDNA levels may inform immunosuppression intensity, with higher levels potentially warranting more aggressive immunotherapy to enhance anti-tumor immunity.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="section-divider"></div>

          {/* Liver-Directed Therapies */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Emerging Liver-Directed Therapies
            </h2>
            <p className="text-lg text-secondary leading-relaxed mb-6">
              Advances in liver-directed therapies are expanding treatment options for patients awaiting transplantation. These modalities serve both as bridging strategies to maintain disease control and as tools for assessing tumor biology.
            </p>

            <h3 className="text-2xl font-bold text-foreground mb-4">Key Modalities</h3>
            
            <div className="medical-card mb-6">
              <h4 className="text-xl font-bold text-foreground mb-3">Hepatic Artery Infusion (HAI) Pump Chemotherapy</h4>
              <p className="text-secondary leading-relaxed">
                HAI pump chemotherapy delivers high concentrations of chemotherapy directly to the tumor-bearing liver while minimizing systemic toxicity. This approach is increasingly used in the neoadjuvant setting for both pCCA and iCCA, with emerging data supporting improved response rates and post-transplant outcomes.
              </p>
            </div>

            <div className="medical-card mb-6">
              <h4 className="text-xl font-bold text-foreground mb-3">Transarterial Radioembolization (TARE)</h4>
              <p className="text-secondary leading-relaxed">
                TARE (yttrium-90 radioembolization) delivers targeted radiation directly to the tumor via the hepatic artery. This modality is particularly useful for locally advanced iCCA and can be combined with systemic therapy in the SYS-TARE framework.
              </p>
            </div>

            <div className="medical-card mb-6">
              <h4 className="text-xl font-bold text-foreground mb-3">Stereotactic Body Radiation Therapy (SBRT)</h4>
              <p className="text-secondary leading-relaxed">
                SBRT delivers high-dose radiation in few fractions with high precision. This approach is emerging as a bridge therapy for patients awaiting transplantation and may improve local tumor control.
              </p>
            </div>

            <div className="medical-card mb-6">
              <h4 className="text-xl font-bold text-foreground mb-3">Immunoembolization</h4>
              <p className="text-secondary leading-relaxed">
                Combining transarterial embolization with immunotherapy agents represents an emerging frontier. This approach aims to enhance anti-tumor immunity while delivering local tumor control.
              </p>
            </div>
          </div>

          <div className="section-divider"></div>

          {/* Immunotherapy */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Immunotherapy and Immunosuppression
            </h2>
            <p className="text-lg text-secondary leading-relaxed mb-6">
              The integration of immunotherapy into CCA management and the optimization of immunosuppression in transplant recipients represent critical frontiers in improving post-transplant outcomes.
            </p>

            <h3 className="text-2xl font-bold text-foreground mb-4">Neoadjuvant Immunotherapy</h3>
            <p className="text-lg text-secondary leading-relaxed mb-6">
              Emerging data support the use of immune checkpoint inhibitors (ICIs) in combination with chemotherapy or as monotherapy in the neoadjuvant setting. The TOPAZ-1 trial demonstrated improved outcomes with the addition of durvalumab to gemcitabine-cisplatin in advanced CCA, and this approach is increasingly incorporated into neoadjuvant regimens for transplant candidates.
            </p>

            <h3 className="text-2xl font-bold text-foreground mb-4">Immunosuppression Optimization</h3>
            <div className="bg-blue-50 border-l-4 border-accent pl-6 py-4 mb-6">
              <p className="text-foreground leading-relaxed">
                Balancing immunosuppression to prevent rejection while maintaining anti-tumor immunity represents a unique challenge in CCA transplantation. Future strategies may include selective immunosuppression that preserves tumor-specific immunity while preventing allograft rejection.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-4">Adjuvant Immunotherapy</h3>
            <p className="text-lg text-secondary leading-relaxed mb-6">
              The role of adjuvant immunotherapy in transplant recipients is an active area of investigation. Carefully designed trials are needed to determine whether post-transplant immunotherapy can improve recurrence-free and overall survival without compromising graft function.
            </p>
          </div>

          <div className="section-divider"></div>

          {/* Organ Allocation Ethics */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Organ Allocation Ethics and Policy
            </h2>
            <p className="text-lg text-secondary leading-relaxed mb-6">
              As outcomes for CCA transplantation improve and the indications expand, ethical considerations regarding organ allocation become increasingly important. The allocation of scarce donor livers between CCA and other indications (particularly HCC) requires careful consideration of outcomes, equity, and utilitarian principles.
            </p>

            <h3 className="text-2xl font-bold text-foreground mb-4">Key Ethical Considerations</h3>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="font-bold text-foreground mb-2">Outcome Equivalence</p>
                <p className="text-secondary">
                  As 5-year survival rates for protocol-based pCCA transplantation now approach or exceed those for HCC within the Milan criteria, the ethical justification for preferential allocation to HCC becomes less compelling.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="font-bold text-foreground mb-2">Equity and Access</p>
                <p className="text-secondary">
                  Ensuring equitable access to transplantation for CCA patients across different geographic regions and healthcare systems remains a challenge, particularly given the specialized expertise required for optimal outcomes.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="font-bold text-foreground mb-2">Living Donor Transplantation</p>
                <p className="text-secondary">
                  The role of living donor liver transplantation in CCA remains limited but may expand as outcomes improve and patient selection becomes more refined.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="font-bold text-foreground mb-2">Utility Maximization</p>
                <p className="text-secondary">
                  Allocation policies should aim to maximize long-term survival and quality-adjusted life years (QALYs) across all transplant candidates, requiring ongoing reassessment as evidence evolves.
                </p>
              </div>
            </div>
          </div>

          <div className="section-divider"></div>

          {/* Conclusion */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Conclusion: The Path Forward
            </h2>
            <p className="text-lg text-secondary leading-relaxed mb-6">
              The field of liver transplantation for cholangiocarcinoma is at an inflection point. The convergence of improved surgical techniques, refined patient selection based on tumor biology, emerging molecular profiling capabilities, and novel therapeutic approaches is poised to transform outcomes for CCA patients.
            </p>
            <p className="text-lg text-secondary leading-relaxed mb-6">
              The work of the Oslo group and other leading centers continues to push the boundaries of what is possible in transplant oncology. The SURE-LT protocol and similar innovations represent the next generation of evidence-based approaches to CCA transplantation.
            </p>
            <p className="text-lg text-secondary leading-relaxed mb-6">
              As we move forward, continued investment in clinical research, molecular characterization, and technical innovation will be essential to further improve outcomes and expand the pool of patients who can benefit from transplantation. The future of CCA transplantation is bright, and the best outcomes are yet to come.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-teal-50 border border-teal-200 rounded-lg p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Key Takeaways</h3>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start">
                  <span className="text-accent font-bold mr-3">→</span>
                  <span>Molecular profiling will increasingly guide patient selection and treatment planning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent font-bold mr-3">→</span>
                  <span>Circulating tumor DNA (ctDNA) will become a standard biomarker for monitoring and prognostication</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent font-bold mr-3">→</span>
                  <span>Liver-directed therapies will expand treatment options and improve bridging strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent font-bold mr-3">→</span>
                  <span>Immunotherapy integration will enhance both neoadjuvant and adjuvant treatment efficacy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent font-bold mr-3">→</span>
                  <span>Ethical frameworks will evolve to reflect improved CCA transplant outcomes</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Navigation */}
          <div className="section-divider"></div>
          <div className="flex gap-4 justify-between">
            <Link href="/sure-lt">
              <Button variant="outline">← Back to SURE-LT</Button>
            </Link>
            <Link href="/">
              <Button className="bg-accent text-white hover:bg-teal-700">
                Return to Home →
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
                Sheraz Yaqub, Tor Magnus Smedman, Svein Dueland, Pål-Dag Line
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Affiliations</h4>
              <p className="text-secondary text-sm">
                Oslo University Hospital, University of Oslo
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
