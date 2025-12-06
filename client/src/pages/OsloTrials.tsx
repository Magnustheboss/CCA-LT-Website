import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SearchBar } from "@/components/SearchBar";
import { CheckCircle2, Target, Users, TrendingUp } from "lucide-react";

export default function OsloTrials() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white border-b border-gray-200 shadow-sm z-50">
        <div className="container flex items-center justify-between py-4">
          <h1 className="text-2xl font-bold text-foreground">CCA-LT</h1>
          <div className="flex gap-6 items-center">
            <div className="flex gap-8">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/perihilar" className="nav-link">Perihilar CCA</Link>
              <Link href="/intrahepatic" className="nav-link">Intrahepatic CCA</Link>
              <Link href="/sure-lt" className="nav-link">SURE-LT Protocol</Link>
              <Link href="/future" className="nav-link">Future Directions</Link>
            </div>
            <SearchBar />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="container py-12">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            The Oslo Trials: TESLA 1, TESLA 2, and SURE-LT
          </h1>
          <p className="text-xl text-secondary leading-relaxed max-w-3xl">
            A comprehensive transplant-oncology program establishing standardized, scalable liver transplantation protocols for biliary tract cancers. These three coordinated clinical trials represent the first European initiatives to evaluate transplant oncology across the full spectrum of non-resectable cholangiocarcinoma.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-background py-16">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">Program Overview</h2>
          
          <div className="bg-white rounded-lg border border-gray-200 p-8 mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6">Transforming CCA Treatment</h3>
            <p className="text-secondary leading-relaxed mb-6">
              The current standard oncological treatment for cholangiocarcinoma offers a median survival of just 6–12 months. The Oslo trials program aims to triple survival in carefully selected patients through transplant oncology, offering curative potential to individuals currently deemed ineligible for surgical treatment. This represents a paradigm shift in how we approach non-resectable biliary tract cancers.
            </p>
            <p className="text-secondary leading-relaxed">
              By replacing infrastructure-dependent interventions with widely accessible technologies, expanding inclusion criteria through careful risk stratification, and embedding translational endpoints (circulating tumor DNA, radiomics, quality of life), the program makes curative-intent treatment accessible to a broader group of patients who have an expected survival of six months with standard therapy.
            </p>
          </div>

          {/* Key Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-accent" />
                <h4 className="font-bold text-foreground">Primary Endpoint</h4>
              </div>
              <p className="text-secondary">
                {'>'}50% 5-year overall survival in non-resectable CCA patients treated with LT-based protocols
              </p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-accent" />
                <h4 className="font-bold text-foreground">Patient Population</h4>
              </div>
              <p className="text-secondary">
                20-30 patients across three trials; Oslo University Hospital performs 70% of CCA resections annually in Norway
              </p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-accent" />
                <h4 className="font-bold text-foreground">Timeline</h4>
              </div>
              <p className="text-secondary">
                2025-2029 project period with interim analyses and publications planned
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trials Comparison */}
      <section className="bg-white border-t border-gray-200 py-16">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-12">The Three Coordinated Trials</h2>
          
          <Tabs defaultValue="tesla1" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="tesla1">TESLA 1</TabsTrigger>
              <TabsTrigger value="tesla2">TESLA 2</TabsTrigger>
              <TabsTrigger value="surelt">SURE-LT</TabsTrigger>
            </TabsList>

            {/* TESLA 1 */}
            <TabsContent value="tesla1" className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg border border-blue-200 p-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">TESLA 1 Trial</h3>
                <p className="text-secondary font-semibold">Intrahepatic Cholangiocarcinoma</p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <h4 className="text-xl font-bold text-foreground mb-4">Study Objective</h4>
                <p className="text-secondary leading-relaxed">
                  Patients with non-resectable intrahepatic cholangiocarcinoma (iCCA) confined to the liver can obtain a 5-year survival probability exceeding 50% by liver transplantation if selected by stringent transplant criteria.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <h4 className="text-xl font-bold text-foreground mb-4">Patient Population</h4>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-secondary">Non-resectable iCCA confined to the liver</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-secondary">Demonstrated response to neoadjuvant therapy</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-secondary">No distant metastases or unresectable vascular involvement</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-secondary">Preserved liver function and no significant portal hypertension</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <h4 className="text-xl font-bold text-foreground mb-4">Neoadjuvant Approach</h4>
                <p className="text-secondary leading-relaxed">
                  TESLA 1 employs the <strong>SYS-TARE framework</strong>, combining systemic chemotherapy with transarterial radioembolization (TARE). This approach allows clinicians to observe tumor behavior during treatment and identify patients with favorable biology suitable for transplantation.
                </p>
                <p className="text-secondary leading-relaxed">
                  The test-of-time principle is central: patients demonstrating disease control or response during neoadjuvant therapy are selected for transplantation, while those with progressive disease are managed with alternative therapies.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <h4 className="text-xl font-bold text-foreground mb-4">Enrollment Status</h4>
                <p className="text-secondary font-semibold mb-2">As of May 2025:</p>
                <p className="text-secondary">5 patients enrolled in TESLA 1 with active recruitment ongoing</p>
              </div>

              <div className="bg-blue-50 rounded-lg border border-blue-300 p-8">
                <h4 className="text-xl font-bold text-foreground mb-4">Early Results (Published February 2025)</h4>
                <p className="text-secondary leading-relaxed mb-4">
                  <strong>Publication:</strong> Yaqub S, et al. Liver transplantation for locally advanced non-resectable intrahepatic cholangiocarcinoma treated with neoadjuvant therapy: early results from the TESLA trial. British Journal of Surgery. 2025;112(3):znaf054.
                </p>
                <div className="space-y-3">
                  <div className="bg-white rounded p-4 border-l-4 border-accent">
                    <p className="text-secondary font-semibold mb-2">Patient Demographics (n=5)</p>
                    <ul className="text-secondary text-sm space-y-1">
                      <li>Median age: 45 years (range 28-62)</li>
                      <li>60% female, 40% male</li>
                      <li>Median tumor diameter: 11.5 cm</li>
                      <li>Median time from diagnosis to LT: 26 months</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded p-4 border-l-4 border-accent">
                    <p className="text-secondary font-semibold mb-2">Post-Transplant Outcomes</p>
                    <ul className="text-secondary text-sm space-y-1">
                      <li>Median follow-up: 15 months (range 10-55)</li>
                      <li>Recurrence rate: 40% (2 of 5 patients)</li>
                      <li>All 5 patients alive at last follow-up</li>
                      <li>Perioperative mortality: 0%</li>
                      <li>R0 resection achieved in all cases</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <h4 className="text-xl font-bold text-foreground mb-4">Expected Outcomes</h4>
                <p className="text-secondary leading-relaxed">
                  TESLA 1 aims to demonstrate that carefully selected patients with non-resectable iCCA can achieve 5-year overall survival exceeding 50% through liver transplantation, compared to historical median survival of 12 months with standard systemic therapy. Early results support the feasibility and safety of this approach.
                </p>
              </div>
            </TabsContent>

            {/* TESLA 2 */}
            <TabsContent value="tesla2" className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg border border-green-200 p-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">TESLA 2 Trial</h3>
                <p className="text-secondary font-semibold">Perihilar Cholangiocarcinoma with Modified Protocol</p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <h4 className="text-xl font-bold text-foreground mb-4">Study Objective</h4>
                <p className="text-secondary leading-relaxed">
                  Patients with non-resectable perihilar cholangiocarcinoma (pCCA) who satisfy the Mayo Clinic inclusion criteria can obtain a 5-year survival rate exceeding 50% in a treatment protocol where the neoadjuvant endobronchial brachytherapy is replaced by stereotactic body radiation therapy (SBRT).
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <h4 className="text-xl font-bold text-foreground mb-4">Patient Population</h4>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-secondary">Non-resectable pCCA satisfying Mayo Clinic inclusion criteria</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-secondary">No prior surgery, tumor biopsy, or nodal metastases</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-secondary">Preserved liver function and no significant portal hypertension</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-secondary">Confirmed negative lymph nodes on staging operation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <h4 className="text-xl font-bold text-foreground mb-4">Modified Neoadjuvant Protocol</h4>
                <p className="text-secondary leading-relaxed mb-4">
                  TESLA 2 builds upon the Mayo Clinic protocol but replaces endobronchial brachytherapy with <strong>stereotactic body radiation therapy (SBRT)</strong>. This modification aims to:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span className="text-secondary">Improve accessibility by eliminating the need for specialized endoscopic procedures</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span className="text-secondary">Maintain or improve radiation dose delivery to the tumor</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span className="text-secondary">Reduce treatment burden on patients</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span className="text-secondary">Enable broader adoption of the protocol across European centers</span>
                  </li>
                </ul>
                <p className="text-secondary leading-relaxed">
                  The protocol includes external-beam radiation therapy, maintenance chemotherapy, and mandatory staging operation to confirm negative lymph nodes.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <h4 className="text-xl font-bold text-foreground mb-4">Enrollment Status</h4>
                <p className="text-secondary font-semibold mb-2">As of May 2025:</p>
                <p className="text-secondary">3 patients enrolled in TESLA 2 with active recruitment ongoing</p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <h4 className="text-xl font-bold text-foreground mb-4">Expected Outcomes</h4>
                <p className="text-secondary leading-relaxed">
                  TESLA 2 aims to demonstrate that the modified protocol with SBRT can achieve comparable or superior outcomes to the original Mayo protocol while improving accessibility and reducing treatment burden for pCCA patients.
                </p>
              </div>
            </TabsContent>

            {/* SURE-LT */}
            <TabsContent value="surelt" className="space-y-6">
              <div className="bg-gradient-to-r from-purple-50 to-teal-50 rounded-lg border border-purple-200 p-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">SURE-LT Trial</h3>
                <p className="text-secondary font-semibold">Salvage Unresectable Resectable Explant Liver Transplantation</p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <h4 className="text-xl font-bold text-foreground mb-4">Study Objective</h4>
                <p className="text-secondary leading-relaxed">
                  Patients with locally advanced, non-resectable perihilar cholangiocarcinoma beyond the Mayo Clinic inclusion criteria can obtain a 5-year survival rate exceeding 50% by extensive en bloc resection of the liver and surrounding structures to eliminate all relevant routes of cancer dissemination.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <h4 className="text-xl font-bold text-foreground mb-4">Patient Population</h4>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-secondary">Locally advanced, non-resectable pCCA beyond Mayo criteria</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-secondary">Vascular involvement requiring reconstruction</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-secondary">Completed neoadjuvant therapy without distant metastases</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-secondary">Preserved liver function and adequate performance status</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <h4 className="text-xl font-bold text-foreground mb-4">Surgical Innovation</h4>
                <p className="text-secondary leading-relaxed mb-4">
                  SURE-LT represents a novel technical approach combining aggressive surgical resection with en bloc vascular reconstruction. The procedure involves:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span className="text-secondary">Complete liver explantation with en bloc resection of invaded vascular structures</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span className="text-secondary">Vascular reconstruction using interposition grafts (aorto-hepatic conduits, portal vein grafts)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span className="text-secondary">Hepatic resection to achieve R0 resection margins</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span className="text-secondary">Elimination of all relevant routes of cancer dissemination</span>
                  </li>
                </ul>
                <p className="text-secondary leading-relaxed">
                  This approach extends transplant oncology to patients with more advanced disease who would otherwise have no curative options.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <h4 className="text-xl font-bold text-foreground mb-4">Early Outcomes</h4>
                <p className="text-secondary leading-relaxed mb-4">
                  Preliminary data from the SURE-LT protocol demonstrate:
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-secondary"><strong>98% R0 resection rate</strong> - achieving complete tumor resection with negative margins</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-secondary"><strong>Promising disease-free survival</strong> in carefully selected patients</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-secondary"><strong>Acceptable morbidity profile</strong> comparable to standard liver transplantation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <h4 className="text-xl font-bold text-foreground mb-4">Enrollment Status</h4>
                <p className="text-secondary font-semibold mb-2">As of May 2025:</p>
                <p className="text-secondary">1 patient enrolled and awaiting transplantation; 2 additional patients currently being evaluated</p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <h4 className="text-xl font-bold text-foreground mb-4">Publication Status</h4>
                <p className="text-secondary">
                  A feasibility report on the SURE-LT procedure is currently under review in the <em>Annals of Surgery</em> and is expected to be published shortly.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Shared Infrastructure */}
      <section className="bg-background py-16">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">Integrated Trial Infrastructure</h2>
          
          <p className="text-secondary leading-relaxed mb-8">
            While each trial targets a distinct CCA subgroup, they are conceptually and logistically interlinked. Together, they constitute a comprehensive clinical platform spanning a wide spectrum of non-resectable cholangiocarcinoma, currently offered only palliative oncological treatment. The trials share common infrastructure for:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h4 className="font-bold text-foreground mb-3">Biobanking & Profiling</h4>
              <p className="text-secondary text-sm">
                Comprehensive tissue and blood sample collection with molecular profiling capabilities
              </p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h4 className="font-bold text-foreground mb-3">Circulating Tumor DNA</h4>
              <p className="text-secondary text-sm">
                ctDNA analysis as a prognostic tool and marker of minimal residual disease
              </p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h4 className="font-bold text-foreground mb-3">Advanced Imaging</h4>
              <p className="text-secondary text-sm">
                Radiomics and imaging biomarkers for treatment response assessment
              </p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h4 className="font-bold text-foreground mb-3">Quality of Life</h4>
              <p className="text-secondary text-sm">
                EORTC QLQ-C30 assessment up to 3 years post-transplant
              </p>
            </div>
          </div>

          <p className="text-secondary leading-relaxed">
            Each trial includes sub-studies examining circulating tumor DNA as a prognostic tool, developing a predictive clinical-biological score, and assessing quality-of-life outcomes post-transplant. This integrated approach facilitates comprehensive data analysis and translational research across the trials.
          </p>
        </div>
      </section>

      {/* Key Objectives */}
      <section className="bg-white border-t border-gray-200 py-16">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">Key Research Objectives</h2>
          
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-accent/5 to-transparent rounded-lg border border-accent/20 p-6">
              <h4 className="font-bold text-foreground mb-2">Primary Objective</h4>
                <p className="text-secondary">
                  {'>'}50% 5-year overall survival in non-resectable CCA patients treated with LT-based protocols (TESLA 1, TESLA 2, SURE-LT).
                </p>
            </div>

            <div className="bg-gradient-to-r from-accent/5 to-transparent rounded-lg border border-accent/20 p-6">
              <h4 className="font-bold text-foreground mb-2">Secondary Objectives</h4>
              <ul className="space-y-2 text-secondary">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Validate circulating tumor DNA as a prognostic biomarker and marker of minimal residual disease</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Develop a clinical-translational decision algorithm based on imaging, histopathology, and liquid biopsy data</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Evaluate patient-reported quality of life using EORTC QLQ-C30 up to 3 years post-transplant</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Assess surgical morbidity as major complications (Clavien-Dindo grade 3-5)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Explore correlations between survival and translational biomarkers including proteomics, microarray profiles, and ctDNA dynamics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feasibility & Impact */}
      <section className="bg-background py-16">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">Feasibility and Expected Impact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Feasibility</h3>
              <p className="text-secondary leading-relaxed mb-4">
                Oslo University Hospital serves as the only transplant centre and main hub for hepatobiliary surgery in Norway, performing approximately 70% of CCA resections annually. The hospital has:
              </p>
              <ul className="space-y-2 text-secondary">
                <li className="flex gap-2">
                  <span className="text-accent font-bold">✓</span>
                  <span>Established infrastructure and capacity</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">✓</span>
                  <span>National referral pathways and collaboration agreements</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">✓</span>
                  <span>Solid donor liver program (20-22 donors per million population)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">✓</span>
                  <span>Median waiting time of 50 days</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Expected Deliverables (2025-2029)</h3>
              <ul className="space-y-3 text-secondary">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Enrollment of 20-30 patients across three trials</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Completion of interim analysis for TESLA 1 and TESLA 2</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>At least one publication from each trial</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Integration of biomarker data with clinical endpoints</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Presentations at major international congresses</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-accent/10 to-transparent rounded-lg border border-accent/30 p-8">
            <h3 className="text-xl font-bold text-foreground mb-4">Transformative Potential</h3>
            <p className="text-secondary leading-relaxed mb-4">
              Broader implementation of transplant oncology protocols for cholangiocarcinoma could shift paradigms in hepatobiliary oncology. By establishing evidence-based transplant criteria, the project may influence clinical practice guidelines worldwide, similar to how the Oslo group's research on transplant oncology for colorectal liver metastases has shaped international recommendations.
            </p>
            <p className="text-secondary leading-relaxed">
              This could result in improved quality-adjusted life years (QALYs) and more efficient use of healthcare resources, particularly for younger patients with primary sclerosing cholangitis who would otherwise face progressive liver failure and cancer-related mortality.
            </p>
          </div>
        </div>
      </section>

      {/* Safety & Ethics */}
      <section className="bg-white border-t border-gray-200 py-16">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">Safety, Ethics, and Governance</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Ethical Framework</h3>
              <p className="text-secondary leading-relaxed mb-4">
                All studies adhere to Good Clinical Practice (GCP) guidelines and the Declaration of Helsinki. Protocols are approved by the Regional Ethics Committee (REK) and comply with Norwegian regulations for clinical research.
              </p>
              <p className="text-secondary leading-relaxed">
                Given a median survival of 6–12 months with standard treatment, aiming for 50% 5-year survival through transplantation is ethically and clinically justified. Patients with disease progression during neoadjuvant therapy receive the best available alternative therapies.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Safety Profile</h3>
              <p className="text-secondary leading-relaxed mb-4">
                Liver transplantation carries established safety data:
              </p>
              <ul className="space-y-2 text-secondary">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>30-day mortality near zero in recent trials</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Complication rates comparable to standard liver transplantation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Study participants have preserved liver function and no significant portal hypertension</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Donor allocation does not impact waiting times for standard candidates</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Patient-Centered Outcomes</h3>
              <p className="text-secondary leading-relaxed">
                The trials emphasize patient-centered outcomes through rigorous quality-of-life assessment using the validated EORTC QLQ-C30 instrument at multiple time points. Previous liver transplant trials demonstrate sustained quality of life for up to 3 years post-transplant, even with intensified pre-treatment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Group Section */}
      <section className="bg-gradient-to-r from-blue-50 to-teal-50 border-t border-gray-200 py-12">
        <div className="container max-w-4xl">
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Transplant Oncology Research Group</h2>
            <p className="text-secondary leading-relaxed mb-6">
              The TESLA 1, TESLA 2, and SURE-LT trials are conducted by the Transplant Oncology Research Group at Oslo University Hospital, a leading center for transplant-based oncology research and clinical innovation.
            </p>
            <a href="https://www.med.uio.no/klinmed/english/research/groups/transplant-oncology/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90">
              Visit Research Group Website
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="bg-background py-12">
        <div className="container max-w-4xl">
          <div className="flex gap-4 justify-between">
            <Link href="/sure-lt">
              <Button variant="outline">← Back to SURE-LT Protocol</Button>
            </Link>
            <Link href="/future">
              <Button className="bg-accent text-white hover:bg-teal-700">
                Future Directions →
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
