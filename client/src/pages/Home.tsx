import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { SearchBar } from "@/components/SearchBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white border-b border-gray-200 shadow-sm z-50">
        <div className="container flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0 py-4">
          <h1 className="text-2xl font-bold text-foreground">CCA-LT</h1>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center w-full md:w-auto">
            <div className="flex gap-8">
              <Link href="/" className="nav-link active">Home</Link>
              <Link href="/perihilar" className="nav-link">Perihilar CCA</Link>
              <Link href="/intrahepatic" className="nav-link">Intrahepatic CCA</Link>
              <Link href="/sure-lt" className="nav-link">SURE-LT</Link>
              <Link href="/future" className="nav-link">Future</Link>
              <Link href="/about" className="nav-link">About</Link>
            </div>
            <SearchBar />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="container py-16">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Liver Transplantation for Cholangiocarcinoma
            </h1>
            <p className="text-xl text-secondary mb-4 leading-relaxed">
              A comprehensive review of current evidence, clinical protocols, and future directions in transplant oncology for cholangiocarcinoma (CCA).
            </p>
            <p className="text-lg text-secondary mb-8 leading-relaxed">
              Over the last two decades, liver transplantation has emerged as a transformative treatment modality for carefully selected patients with cholangiocarcinoma, particularly perihilar cholangiocarcinoma (pCCA) treated within strict neoadjuvant protocols. This website synthesizes contemporary evidence and provides practical transplant pathways reflecting current best practice.
            </p>
            <div className="flex gap-4">
              <Link href="/perihilar">
                <Button className="bg-accent text-white hover:bg-teal-700">
                  Explore pCCA
                </Button>
              </Link>
              <Link href="/intrahepatic">
                <Button variant="outline">
                  Explore iCCA
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="bg-background py-16">
        <div className="container">
          <h2 className="text-4xl font-bold text-foreground mb-12">
            Current Evidence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="medical-card">
              <h3 className="text-2xl font-bold text-accent mb-3">60-70%</h3>
              <p className="text-foreground font-semibold mb-2">5-Year Survival (pCCA)</p>
              <p className="text-secondary">
                With protocol-based neoadjuvant chemoradiation, LT achieves 5-year survival rates exceeding 60–70% in strictly selected pCCA patients.
              </p>
            </div>
            <div className="medical-card">
              <h3 className="text-2xl font-bold text-accent mb-3">50-60%</h3>
              <p className="text-foreground font-semibold mb-2">pCCA Prevalence</p>
              <p className="text-secondary">
                Perihilar cholangiocarcinoma accounts for approximately 50–60% of all CCA cases and has the highest rate of unresectability at diagnosis.
              </p>
            </div>
            <div className="medical-card">
              <h3 className="text-2xl font-bold text-accent mb-3">20-35%</h3>
              <p className="text-foreground font-semibold mb-2">5-Year Survival (Resection)</p>
              <p className="text-secondary">
                Surgical resection alone for pCCA yields 5-year survival of only 20–35%, highlighting the advantage of transplantation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About CCA */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="container">
          <h2 className="text-4xl font-bold text-foreground mb-8">
            Understanding Cholangiocarcinoma
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">What is CCA?</h3>
              <p className="text-secondary leading-relaxed mb-4">
                Cholangiocarcinoma (CCA) is a biologically heterogeneous group of biliary tract malignancies arising from the epithelial lining of the intrahepatic and extrahepatic bile ducts. It accounts for approximately 3% of all gastrointestinal malignancies and represents the second most common primary hepatic cancer after hepatocellular carcinoma (HCC).
              </p>
              <p className="text-secondary leading-relaxed">
                CCA is subdivided into three anatomical types: intrahepatic (iCCA), perihilar (pCCA), and distal subtypes. Each presents distinct challenges for treatment and transplantation.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Why Transplantation?</h3>
              <p className="text-secondary leading-relaxed mb-4">
                Liver transplantation offers an oncologic field-change operation that replaces both the tumor-bearing liver and underlying diseased parenchyma, while also addressing occult biliary extension and microscopic intrahepatic disease.
              </p>
              <p className="text-secondary leading-relaxed">
                Unlike surgical resection alone, LT can overcome limitations of unresectability due to bilateral involvement, vascular encasement, or inadequate future liver remnant, resulting in superior long-term outcomes for selected patients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Oslo Group Emphasis */}
      <section className="bg-gradient-to-r from-blue-50 to-teal-50 py-16 border-t border-gray-200">
        <div className="container">
          <h2 className="text-4xl font-bold text-foreground mb-8">
            The Oslo Group's Contribution
          </h2>
          <div className="max-w-3xl">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              The <span className="highlight-accent">Transplant Oncology Research Group at Oslo University Hospital</span>, led by researchers including Sheraz Yaqub, Tor Magnus Smedman, Svein Dueland, and Pål-Dag Line, has been instrumental in advancing the field of transplant oncology for cholangiocarcinoma.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Their work has focused on refining neoadjuvant strategies, patient selection criteria, and developing innovative protocols such as the <span className="highlight-accent">SURE-LT protocol</span>, which represents a cutting-edge approach to surgical and oncological management in liver transplantation for CCA.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              The Oslo group's contributions have helped establish LT as a validated standard for protocol-based treatment of pCCA and continue to push the boundaries of what is possible in transplant oncology for iCCA.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation to Detailed Sections */}
      <section className="bg-background py-16 border-t border-gray-200">
        <div className="container">
          <h2 className="text-4xl font-bold text-foreground mb-12">
            Explore Key Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/perihilar" className="medical-card hover:shadow-lg cursor-pointer">
              <h3 className="text-2xl font-bold text-foreground mb-3">Perihilar Cholangiocarcinoma</h3>
              <p className="text-secondary mb-4">
                The most common and best-established indication for liver transplantation in CCA. Discover protocol-based neoadjuvant treatment and outcomes.
              </p>
              <span className="text-accent font-semibold">Learn more →</span>
            </Link>
            <Link href="/intrahepatic" className="medical-card hover:shadow-lg cursor-pointer">
              <h3 className="text-2xl font-bold text-foreground mb-3">Intrahepatic Cholangiocarcinoma</h3>
              <p className="text-secondary mb-4">
                An evolving frontier in transplant oncology. Explore biology-first selection and emerging trial-based approaches.
              </p>
              <span className="text-accent font-semibold">Learn more →</span>
            </Link>
            <Link href="/outcomes" className="medical-card hover:shadow-lg cursor-pointer">
              <h3 className="text-2xl font-bold text-foreground mb-3">Clinical Outcomes</h3>
              <p className="text-secondary mb-4">
                Data visualizations comparing survival rates and clinical outcomes for pCCA and iCCA after transplantation.
              </p>
              <span className="text-accent font-semibold">Learn more →</span>
            </Link>
            <Link href="/oslo-trials" className="medical-card hover:shadow-lg cursor-pointer">
              <h3 className="text-2xl font-bold text-foreground mb-3">Oslo Trials</h3>
              <p className="text-secondary mb-4">
                Comprehensive overview of TESLA 1, TESLA 2, and SURE-LT trials pioneering transplant oncology for CCA.
              </p>
              <span className="text-accent font-semibold">Learn more →</span>
            </Link>
            <Link href="/sure-lt" className="medical-card hover:shadow-lg cursor-pointer">
              <h3 className="text-2xl font-bold text-foreground mb-3">SURE-LT Protocol</h3>
              <p className="text-secondary mb-4">
                An innovative technical approach developed by the Oslo group. Discover how this protocol enhances surgical outcomes.
              </p>
              <span className="text-accent font-semibold">Learn more →</span>
            </Link>
            <Link href="/trials-registry" className="medical-card hover:shadow-lg cursor-pointer">
              <h3 className="text-2xl font-bold text-foreground mb-3">Clinical Trials Registry</h3>
              <p className="text-secondary mb-4">
                Active clinical trials recruiting patients with direct links to ClinicalTrials.gov for enrollment information.
              </p>
              <span className="text-accent font-semibold">Learn more →</span>
            </Link>
            <Link href="/future" className="medical-card hover:shadow-lg cursor-pointer">
              <h3 className="text-2xl font-bold text-foreground mb-3">Future Directions</h3>
              <p className="text-secondary mb-4">
                Emerging molecular profiling, biomarkers, and therapeutic innovations shaping the future of CCA transplantation.
              </p>
              <span className="text-accent font-semibold">Learn more →</span>
            </Link>
            <Link href="/references" className="medical-card hover:shadow-lg cursor-pointer">
              <h3 className="text-2xl font-bold text-foreground mb-3">References</h3>
              <p className="text-secondary mb-4">
                Comprehensive bibliography of all citations organized by topic for easy reference and further reading.
              </p>
              <span className="text-accent font-semibold">Learn more →</span>
            </Link>
            <Link href="/about" className="medical-card hover:shadow-lg cursor-pointer">
              <h3 className="text-2xl font-bold text-foreground mb-3">About the Oslo Group</h3>
              <p className="text-secondary mb-4">
                Learn about the Transplant Oncology Group's research mission, team members, and collaborative network.
              </p>
              <span className="text-accent font-semibold">Learn more →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Research Group Section */}
      <section className="bg-gradient-to-r from-blue-50 to-teal-50 border-t border-gray-200 py-12">
        <div className="container max-w-4xl">
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Transplant Oncology Research Group</h2>
            <p className="text-secondary leading-relaxed mb-6">
              This website is developed by the Transplant Oncology Research Group at Oslo University Hospital, a leading center for transplant-based oncology research and clinical innovation.
            </p>
            <a href="https://www.med.uio.no/klinmed/english/research/groups/transplant-oncology/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90">
              Visit Research Group Website
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
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
