import { Link } from "wouter";
import { SearchBar } from "@/components/SearchBar";
import { Users, Target, Award, Globe } from "lucide-react";

export default function AboutOslo() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white border-b border-gray-200 shadow-sm z-50">
        <div className="container flex flex-col md:flex-row items-start md:items-center justify-between py-4 gap-4 md:gap-0">
          <h1 className="text-2xl font-bold text-foreground">CCA-LT</h1>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center w-full md:w-auto">
            <div className="flex flex-wrap gap-2 md:gap-8">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/perihilar" className="nav-link">Perihilar CCA</Link>
              <Link href="/intrahepatic" className="nav-link">Intrahepatic CCA</Link>
              <Link href="/sure-lt" className="nav-link">SURE-LT</Link>
              <Link href="/future" className="nav-link">Future</Link>
            </div>
            <div className="w-full md:w-auto">
              <SearchBar />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="container py-12">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            About the Transplant Oncology Group
          </h1>
          <p className="text-xl text-secondary leading-relaxed max-w-3xl">
            Leading European research and clinical innovation in transplant oncology for cholangiocarcinoma at Oslo University Hospital
          </p>
        </div>
      </section>

      {/* Institutional Overview */}
      <section className="bg-background py-16">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">Institutional Mission</h2>
          
          <div className="bg-white rounded-lg border border-gray-200 p-8 mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6">Oslo University Hospital</h3>
            <p className="text-secondary leading-relaxed mb-4">
              The Transplant Oncology Group operates within Oslo University Hospital, one of Northern Europe's leading academic medical centers. Our institution combines world-class clinical expertise with cutting-edge translational research to advance the treatment of patients with advanced cholangiocarcinoma.
            </p>
            <p className="text-secondary leading-relaxed mb-4">
              The group's mission is to establish transplant oncology as a curative treatment paradigm for carefully selected patients with non-resectable cholangiocarcinoma, moving beyond traditional surgical limitations through rigorous patient selection, standardized neoadjuvant protocols, and comprehensive translational research integration.
            </p>
            <p className="text-secondary leading-relaxed">
              By combining systemic chemotherapy, liver-directed therapies, and liver transplantation with molecular profiling and biomarker-driven selection, we aim to transform outcomes for patients who would otherwise face palliative care alone.
            </p>
          </div>

          <div className="section-divider"></div>

          {/* Research Focus Areas */}
          <h2 className="text-3xl font-bold text-foreground mb-8 mt-12">Research Focus Areas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="medical-card">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-bold text-foreground">Transplant Oncology Protocols</h3>
              </div>
              <p className="text-secondary">
                Development and validation of standardized, scalable protocols for liver transplantation in non-resectable cholangiocarcinoma, including the TESLA 1, TESLA 2, and SURE-LT trials.
              </p>
            </div>

            <div className="medical-card">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-bold text-foreground">Molecular Profiling</h3>
              </div>
              <p className="text-secondary">
                Integration of circulating tumor DNA (ctDNA), genomic sequencing, and radiomics to identify patients with favorable tumor biology and predict transplant outcomes.
              </p>
            </div>

            <div className="medical-card">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-bold text-foreground">Neoadjuvant Therapy Innovation</h3>
              </div>
              <p className="text-secondary">
                Optimization of neoadjuvant regimens combining systemic chemotherapy (gemcitabine-cisplatin, FOLFOX) with liver-directed therapies (hepatic artery infusion, TARE, SBRT).
              </p>
            </div>

            <div className="medical-card">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-bold text-foreground">Patient-Centered Outcomes</h3>
              </div>
              <p className="text-secondary">
                Comprehensive assessment of quality of life, functional status, and long-term survival to ensure transplant oncology delivers meaningful clinical benefit.
              </p>
            </div>
          </div>

          <div className="section-divider"></div>

          {/* Key Team Members */}
          <h2 className="text-3xl font-bold text-foreground mb-8 mt-12">Key Team Members</h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Tor Magnus Smedman, MD, PhD</h3>
              <p className="text-accent font-semibold mb-4">Principal Investigator & Group Lead</p>
              <p className="text-secondary leading-relaxed mb-4">
                Dr. Smedman leads the Transplant Oncology Group with a focus on establishing transplant-based curative treatment for advanced cholangiocarcinoma. His research integrates clinical trial design, molecular profiling, and translational endpoints to advance the field of transplant oncology. Dr. Smedman is the principal investigator for TESLA 1, TESLA 2, and SURE-LT trials.
              </p>
              <p className="text-secondary text-sm italic">
                University of Oslo, Department of Clinical Medicine; Oslo University Hospital, Department of Transplantation Medicine
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Sheraz Yaqub, MD, PhD</h3>
              <p className="text-accent font-semibold mb-4">Co-Investigator & Clinical Lead</p>
              <p className="text-secondary leading-relaxed mb-4">
                Dr. Yaqub is a hepatobiliary surgeon and co-investigator leading clinical implementation of transplant oncology protocols. He oversees patient selection, surgical technique optimization, and post-transplant management. Dr. Yaqub's work on the TESLA 1 trial has produced the first published outcomes for liver transplantation in iCCA with neoadjuvant therapy.
              </p>
              <p className="text-secondary text-sm italic">
                Oslo University Hospital, Department of Hepatobiliary Surgery and Transplantation
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Svein Dueland, MD, PhD</h3>
              <p className="text-accent font-semibold mb-4">Co-Investigator & Medical Oncology Lead</p>
              <p className="text-secondary leading-relaxed mb-4">
                Dr. Dueland directs the neoadjuvant therapy component of transplant oncology protocols, optimizing systemic chemotherapy and liver-directed therapy combinations. His expertise in medical oncology and hepatic malignancies ensures evidence-based treatment sequencing and toxicity management.
              </p>
              <p className="text-secondary text-sm italic">
                Oslo University Hospital, Department of Oncology
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Pål-Dag Line, MD, PhD</h3>
              <p className="text-accent font-semibold mb-4">Co-Investigator & Translational Research Lead</p>
              <p className="text-secondary leading-relaxed mb-4">
                Dr. Line leads translational research initiatives including circulating tumor DNA profiling, radiomics analysis, and biomarker validation. His work establishes molecular criteria for patient selection and outcome prediction in transplant oncology.
              </p>
              <p className="text-secondary text-sm italic">
                University of Oslo, Department of Clinical Medicine; Oslo University Hospital
              </p>
            </div>
          </div>

          <div className="section-divider"></div>

          {/* Collaborative Network */}
          <h2 className="text-3xl font-bold text-foreground mb-8 mt-12">Collaborative Network</h2>
          
          <div className="bg-gradient-to-r from-teal-50 to-green-50 rounded-lg border border-gray-200 p-8 mb-12">
            <p className="text-secondary leading-relaxed mb-6">
              The Transplant Oncology Group collaborates with leading international centers to advance transplant-based treatment for cholangiocarcinoma. Our network includes hepatobiliary surgeons, transplant surgeons, medical oncologists, interventional radiologists, and pathologists committed to standardizing and scaling transplant oncology protocols.
            </p>
            <p className="text-secondary leading-relaxed mb-6">
              International collaborators participate in protocol development, patient selection refinement, and outcome validation. This collaborative approach ensures that transplant oncology protocols are evidence-based, reproducible, and accessible to patients across multiple healthcare systems.
            </p>
            <p className="text-secondary leading-relaxed">
              We actively engage with the transplant oncology community through conference presentations, peer-reviewed publications, and educational initiatives to disseminate best practices and advance the field globally.
            </p>
          </div>

          {/* Contact & Collaboration */}
          <h2 className="text-3xl font-bold text-foreground mb-8">Contact & Collaboration</h2>
          
          <div className="bg-white rounded-lg border border-gray-200 p-8 mb-12">
            <p className="text-secondary leading-relaxed mb-6">
              Healthcare professionals interested in referring patients for trial evaluation, collaborating on research, or learning more about transplant oncology protocols are encouraged to contact the group directly.
            </p>
            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-accent">
              <p className="text-secondary font-semibold mb-2">Transplant Oncology Group</p>
              <p className="text-secondary mb-2">Oslo University Hospital</p>
              <p className="text-secondary mb-4">Department of Transplantation Medicine</p>
              <p className="text-secondary mb-1">
                <span className="font-semibold">Website:</span>{" "}
                <a href="https://www.med.uio.no/klinmed/english/research/groups/transplant-oncology/" className="text-accent hover:underline">
                  Transplant Oncology Research Group
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="container max-w-4xl text-center text-secondary text-sm">
          <p>Website created by Tor Magnus Smedman, MD PhD, Transplant Oncology Group, Oslo University Hospital</p>
        </div>
      </footer>
    </div>
  );
}
