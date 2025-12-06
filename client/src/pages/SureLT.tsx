import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function SureLT() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white border-b border-gray-200 shadow-sm z-50">
        <div className="container flex items-center justify-between py-4">
          <h1 className="text-2xl font-bold text-foreground">CCA-LT</h1>
          <div className="flex gap-8">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/perihilar" className="nav-link">Perihilar CCA</Link>
            <Link href="/intrahepatic" className="nav-link">Intrahepatic CCA</Link>
            <Link href="/sure-lt" className="nav-link active">SURE-LT Protocol</Link>
            <Link href="/future" className="nav-link">Future Directions</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="container py-12">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            SURE-LT Protocol
          </h1>
          <p className="text-xl text-secondary leading-relaxed">
            An innovative surgical and oncological approach developed by the Oslo group to enhance outcomes in liver transplantation for cholangiocarcinoma. SURE-LT represents a paradigm shift in technical precision and patient selection.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-background py-16">
        <div className="container max-w-4xl">
          {/* Overview */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Protocol Overview
            </h2>
            <p className="text-lg text-secondary leading-relaxed mb-6">
              The <strong>SURE-LT protocol</strong> (Surgical Unresectable Recurrent Early Liver Transplantation) represents a cutting-edge technical innovation developed by the Transplant Oncology Research Group at Oslo University Hospital. This protocol integrates advanced surgical techniques, rigorous patient selection, and evidence-based oncological principles to maximize post-transplant outcomes for CCA patients.
            </p>
            <p className="text-lg text-secondary leading-relaxed mb-6">
              The protocol emphasizes the importance of technical precision in transplant surgery, careful patient selection based on tumor biology, and integration of multimodal therapy to optimize long-term survival and minimize recurrence.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-teal-50 border border-teal-200 rounded-lg p-8 mb-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Key Innovation</h3>
              <p className="text-lg text-foreground leading-relaxed">
                The SURE-LT protocol combines surgical excellence with oncological rigor, ensuring that only patients with favorable tumor biology and adequate performance status proceed to transplantation, while employing advanced technical strategies to minimize operative morbidity and maximize long-term outcomes.
              </p>
            </div>
          </div>

          <div className="section-divider"></div>

          {/* Core Principles */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Core Principles of SURE-LT
            </h2>
            <p className="text-lg text-secondary leading-relaxed mb-6">
              The SURE-LT protocol is built on several foundational principles that distinguish it from conventional transplant approaches:
            </p>

            <div className="space-y-6">
              <div className="medical-card">
                <h3 className="text-2xl font-bold text-accent mb-3">1. Surgical Precision</h3>
                <p className="text-secondary leading-relaxed">
                  The protocol emphasizes meticulous surgical technique, including careful dissection of the hepatoduodenal ligament, complete lymph node assessment, and precise vascular reconstruction when needed. This attention to technical detail minimizes operative morbidity and reduces the risk of oncological compromise.
                </p>
              </div>

              <div className="medical-card">
                <h3 className="text-2xl font-bold text-accent mb-3">2. Biology-First Selection</h3>
                <p className="text-secondary leading-relaxed">
                  Rather than relying solely on tumor size or stage, the SURE-LT protocol prioritizes assessment of tumor biology through molecular profiling, biomarker analysis, and response to neoadjuvant therapy. This approach ensures that only patients with favorable biological characteristics proceed to transplantation.
                </p>
              </div>

              <div className="medical-card">
                <h3 className="text-2xl font-bold text-accent mb-3">3. Rigorous Staging</h3>
                <p className="text-secondary leading-relaxed">
                  Comprehensive staging including cross-sectional imaging, endoscopic evaluation, staging laparoscopy, and biomarker assessment ensures that extrahepatic disease is excluded before transplantation. This staging rigor is essential for identifying candidates likely to achieve durable post-transplant survival.
                </p>
              </div>

              <div className="medical-card">
                <h3 className="text-2xl font-bold text-accent mb-3">4. Multidisciplinary Decision-Making</h3>
                <p className="text-secondary leading-relaxed">
                  The protocol mandates involvement of a multidisciplinary team including hepatobiliary surgeons, transplant surgeons, medical oncologists, interventional radiologists, and pathologists. This collaborative approach ensures comprehensive evaluation and optimal decision-making for each patient.
                </p>
              </div>

              <div className="medical-card">
                <h3 className="text-2xl font-bold text-accent mb-3">5. Neoadjuvant Integration</h3>
                <p className="text-secondary leading-relaxed">
                  The protocol incorporates standardized neoadjuvant strategies including chemoradiation for pCCA and systemic ± liver-directed therapy for iCCA. Neoadjuvant therapy serves both to downstage disease and to identify patients with aggressive biology who are unsuitable for transplantation.
                </p>
              </div>
            </div>
          </div>

          <div className="section-divider"></div>

          {/* Technical Innovations */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Technical Innovations
            </h2>
            <p className="text-lg text-secondary leading-relaxed mb-6">
              The SURE-LT protocol incorporates several technical innovations that enhance surgical precision and oncological outcomes:
            </p>

            <h3 className="text-2xl font-bold text-foreground mb-4">Advanced Imaging and Intraoperative Assessment</h3>
            <p className="text-lg text-secondary leading-relaxed mb-6">
              The protocol utilizes advanced preoperative imaging including multiphasic CT/MRI and intraoperative techniques such as ultrasound and intraoperative cholangiography to ensure complete tumor removal and accurate assessment of vascular involvement.
            </p>

            <h3 className="text-2xl font-bold text-foreground mb-4">Lymph Node Assessment</h3>
            <p className="text-lg text-secondary leading-relaxed mb-6">
              Systematic sampling and assessment of regional lymph nodes, particularly station 12 (hepatoduodenal ligament), is a key component of the protocol. Complete lymph node dissection and histopathological examination ensure accurate staging and identification of patients with nodal metastases who are unsuitable for transplantation.
            </p>

            <h3 className="text-2xl font-bold text-foreground mb-4">Vascular Reconstruction</h3>
            <p className="text-lg text-secondary leading-relaxed mb-6">
              When vascular encasement is present, the protocol permits vascular reconstruction (portal vein or hepatic artery) in carefully selected cases. This technical capability expands the pool of potentially transplantable patients while maintaining oncological integrity.
            </p>

            <h3 className="text-2xl font-bold text-foreground mb-4">Peritoneal and Hepatic Surface Assessment</h3>
            <p className="text-lg text-secondary leading-relaxed mb-6">
              Comprehensive assessment of the peritoneum and hepatic surface during staging laparoscopy ensures that peritoneal carcinomatosis is excluded. This is particularly important as peritoneal involvement is often not detected on cross-sectional imaging.
            </p>
          </div>

          <div className="section-divider"></div>

          {/* Patient Selection */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Patient Selection Criteria
            </h2>
            <p className="text-lg text-secondary leading-relaxed mb-6">
              The SURE-LT protocol defines specific inclusion and exclusion criteria to identify candidates most likely to benefit from transplantation:
            </p>

            <h3 className="text-2xl font-bold text-foreground mb-4">Inclusion Criteria</h3>
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <ul className="space-y-3 text-secondary">
                <li className="flex items-start">
                  <span className="text-accent font-bold mr-3">✓</span>
                  <span>Histologically or cytologically confirmed CCA (or meeting strict clinical/radiographic criteria)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent font-bold mr-3">✓</span>
                  <span>Excellent performance status (ECOG 0–1)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent font-bold mr-3">✓</span>
                  <span>Liver-confined disease without extrahepatic metastases</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent font-bold mr-3">✓</span>
                  <span>Completion of appropriate neoadjuvant therapy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent font-bold mr-3">✓</span>
                  <span>Favorable tumor biology (as assessed by molecular profiling and response to therapy)</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-4">Exclusion Criteria</h3>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
              <ul className="space-y-3 text-secondary">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-3">✗</span>
                  <span>Macrovascular invasion (unless resectable and reconstructed)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-3">✗</span>
                  <span>Extrahepatic metastases</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-3">✗</span>
                  <span>Positive lymph nodes in or beyond hepatoduodenal ligament</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-3">✗</span>
                  <span>Peritoneal carcinomatosis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-3">✗</span>
                  <span>Poor performance status or inability to tolerate neoadjuvant therapy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-3">✗</span>
                  <span>Prior transperitoneal biopsy or percutaneous drainage (in pCCA)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="section-divider"></div>

          {/* Outcomes */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Expected Outcomes with SURE-LT
            </h2>
            <p className="text-lg text-secondary leading-relaxed mb-6">
              The SURE-LT protocol, through its emphasis on surgical precision, rigorous patient selection, and evidence-based oncological principles, aims to achieve superior outcomes compared to conventional transplant approaches:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="medical-card">
                <h3 className="text-2xl font-bold text-accent mb-3">Improved Survival</h3>
                <p className="text-secondary">
                  By selecting only patients with favorable tumor biology and employing meticulous surgical technique, the protocol aims to achieve 5-year survival rates exceeding 70% in pCCA and approaching HCC outcomes in iCCA.
                </p>
              </div>
              <div className="medical-card">
                <h3 className="text-2xl font-bold text-accent mb-3">Reduced Recurrence</h3>
                <p className="text-secondary">
                  Comprehensive staging, biology-first selection, and technical precision minimize the risk of both early and late recurrence, resulting in durable long-term outcomes.
                </p>
              </div>
              <div className="medical-card">
                <h3 className="text-2xl font-bold text-accent mb-3">Lower Morbidity</h3>
                <p className="text-secondary">
                  Careful surgical planning and technical precision reduce operative morbidity and improve postoperative recovery, allowing patients to tolerate adjuvant therapy if needed.
                </p>
              </div>
              <div className="medical-card">
                <h3 className="text-2xl font-bold text-accent mb-3">Expanded Candidacy</h3>
                <p className="text-secondary">
                  By permitting vascular reconstruction in selected cases and employing advanced staging techniques, the protocol expands the pool of potentially transplantable patients.
                </p>
              </div>
            </div>
          </div>

          <div className="section-divider"></div>

          {/* Future Directions */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Evolution and Future Refinements
            </h2>
            <p className="text-lg text-secondary leading-relaxed mb-6">
              The SURE-LT protocol continues to evolve as new evidence emerges and technologies advance. Future refinements will likely include:
            </p>

            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-accent pl-6 py-4">
                <p className="font-bold text-foreground mb-2">Integration of Advanced Molecular Profiling</p>
                <p className="text-secondary">
                  Incorporation of circulating tumor DNA (ctDNA) analysis and comprehensive genomic profiling to further refine patient selection and predict treatment response.
                </p>
              </div>
              <div className="bg-blue-50 border-l-4 border-accent pl-6 py-4">
                <p className="font-bold text-foreground mb-2">Personalized Neoadjuvant Strategies</p>
                <p className="text-secondary">
                  Development of biomarker-driven neoadjuvant regimens tailored to individual tumor characteristics and molecular profiles.
                </p>
              </div>
              <div className="bg-blue-50 border-l-4 border-accent pl-6 py-4">
                <p className="font-bold text-foreground mb-2">Advanced Imaging Techniques</p>
                <p className="text-secondary">
                  Utilization of emerging imaging modalities such as functional MRI, PET-CT, and radiomics to improve preoperative assessment and intraoperative guidance.
                </p>
              </div>
              <div className="bg-blue-50 border-l-4 border-accent pl-6 py-4">
                <p className="font-bold text-foreground mb-2">Adjuvant Immunotherapy</p>
                <p className="text-secondary">
                  Integration of novel immunotherapeutic approaches in the perioperative period to enhance anti-tumor immunity and reduce recurrence.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="section-divider"></div>
          <div className="flex gap-4 justify-between">
            <Link href="/intrahepatic">
              <Button variant="outline">← Back to iCCA</Button>
            </Link>
            <Link href="/future">
              <Button className="bg-accent text-white hover:bg-teal-700">
                Next: Future Directions →
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
