import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/SearchBar";
import { ExternalLink, CheckCircle2, Target, Users, Calendar } from "lucide-react";

export default function TrialsRegistry() {
  const iccaTrials = [
    {
      id: "nct4195503",
      title: "Liver Transplant for Stable, Advanced Intrahepatic Cholangiocarcinoma",
      nctNumber: "NCT04195503",
      sponsor: "Univ Health Network Toronto, Canada",
      inclusion: "Unresectable, non-metastatic iCCA, histologically confirmed, disease stability/regression ≥6 months after neoadjuvant therapy, living donor available",
      primaryOutcome: "5-year OS",
      secondaryOutcomes: "5-year DFS, one-year patient survival",
      status: "Recruiting",
      link: "https://clinicaltrials.gov/study/NCT04195503",
    },
    {
      id: "nct6862934",
      title: "Liver Transplantation for Unresectable Intrahepatic Cholangiocarcinoma After Sustained Response to Neoadjuvant Treatments (iCOLA)",
      nctNumber: "NCT06862934",
      sponsor: "Fondazione IRCCS Istituto Nazionale dei Tumori, Milano, Italy",
      inclusion: "Successful and sustained tumor control before LT",
      primaryOutcome: "3-year OS vs unresectable patients",
      secondaryOutcomes: "3-year RFS vs unresectable patients, 90-day morbidity, HRQoL",
      status: "Recruiting",
      link: "https://clinicaltrials.gov/study/NCT06862934",
    },
    {
      id: "nct6098547",
      title: "LIRICA – Liver Transplantation for Non-Resectable Intrahepatic Cholangiocarcinoma",
      nctNumber: "NCT06098547",
      sponsor: "Azienda Sanitaria Ospedaliera, Italy",
      inclusion: "Unresectable iCCA after initial therapy, biological marker evaluation, disease control",
      primaryOutcome: "3 and 5-year OS",
      secondaryOutcomes: "OS comparison with chemotherapy alone, DFS",
      status: "Recruiting",
      link: "https://clinicaltrials.gov/study/NCT06098547",
    },
    {
      id: "nct4556214",
      title: "Liver Transplantation for Non-Resectable iCCA: TESLA trial",
      nctNumber: "NCT04556214",
      sponsor: "Oslo University Hospital, Norway",
      inclusion: "Ineligible for resection, no extrahepatic disease, good performance status",
      primaryOutcome: "3-year OS",
      secondaryOutcomes: "OS from relapse, DFS, new treatments, HRQoL",
      status: "Recruiting",
      link: "https://clinicaltrials.gov/study/NCT04556214",
    },
    {
      id: "nct6140134",
      title: "Liver Transplantation in Intrahepatic Cholangiocarcinoma",
      nctNumber: "NCT06140134",
      sponsor: "Rutgers, The State University of New Jersey, USA",
      inclusion: "Locally advanced unresectable iCCA with no vascular invasion, lymph node, or extrahepatic disease",
      primaryOutcome: "5-year OS",
      secondaryOutcomes: "RFS, Intent-to-treat, Overall Survival Rate (ITT ORS), adverse events",
      status: "Recruiting",
      link: "https://clinicaltrials.gov/study/NCT06140134",
    },
  ];

  const phccaTrials = [
    {
      id: "nct6986486",
      title: "Liver Transplantation for Unresectable Perihilar Cholangiocarcinoma (pCOLA)",
      nctNumber: "NCT06986486",
      sponsor: "Fondazione IRCCS Istituto Nazionale dei Tumori, Milano, Italy",
      inclusion: "Unresectable hilar cholangiocarcinoma, disease stable/downstaged after neoadjuvant therapy",
      primaryOutcome: "3-year OS",
      secondaryOutcomes: "3-year RFS, Safety, feasibility, HRQoL",
      status: "Recruiting",
      link: "https://clinicaltrials.gov/study/NCT06986486",
    },
    {
      id: "nct4993131",
      title: "Liver Transplantation for Non-resectable Perihilar Cholangiocarcinoma (TESLA II)",
      nctNumber: "NCT04993131",
      sponsor: "Oslo University Hospital, Norway",
      inclusion: "Non-resectable pCCA",
      primaryOutcome: "3-year OS",
      secondaryOutcomes: "Recurrence, quality of life, functional endpoints",
      status: "Recruiting",
      link: "https://clinicaltrials.gov/study/NCT04993131",
    },
    {
      id: "nct4378023",
      title: "Liver Transplant Combined With Neoadjuvant Chemo-radiotherapy in the Treatment of Unresectable Hilar Cholangiocarcinoma. A Prospective Multicenter Study",
      nctNumber: "NCT04378023",
      sponsor: "Hospital Vall d'Hebron, Spain",
      inclusion: "Unresectable hilar cholangiocarcinoma, response to neoadjuvant chemo-radiation",
      primaryOutcome: "1, 3 and 5-year OS",
      secondaryOutcomes: "Recurrence, ITT at 1, 3 and 5 years",
      status: "Recruiting",
      link: "https://clinicaltrials.gov/study/NCT04378023",
    },
    {
      id: "nct6125769",
      title: "Liver Transplantation for Non-resectable Peri-hilar cholangioCarcinoma (LITALHICA)",
      nctNumber: "NCT06125769",
      sponsor: "Azienda Sanitaria Ospedaliera, Italy",
      inclusion: ">6 months of chemotherapy, SD or PR",
      primaryOutcome: "3 and 5 year-OS",
      secondaryOutcomes: "OS at 3 years vs chemotherapy, PFS, Recurrence",
      status: "Recruiting",
      link: "https://clinicaltrials.gov/study/NCT06125769",
    },
    {
      id: "nct6850753",
      title: "En Bloc Resection of the Liver and Pancreas With a 'Non-touch' Technique Followed by Liver Transplantation to Improve the Overall Survival in Patients With Non-resectable Hilar Cholangiocarcinoma Beyond the Mayo Clinic Transplant Criteria (SURE-LT)",
      nctNumber: "NCT06850753",
      sponsor: "Oslo University Hospital, Norway",
      inclusion: ">6 months of chemotherapy +/- radiochemotherapy, SD or PR",
      primaryOutcome: "1, 3, and 5-year OS",
      secondaryOutcomes: "DFS, SAR, HRQoL, Complications",
      status: "Recruiting",
      link: "https://clinicaltrials.gov/study/NCT06850753",
    },
  ];

  const TrialCard = ({ trial, type }: { trial: typeof iccaTrials[0]; type: "iCCA" | "pCCA" }) => (
    <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-foreground mb-2">{trial.title}</h3>
          <div className="flex flex-wrap gap-3 mb-4">
            <a
              href={trial.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent rounded hover:bg-accent/20 transition-colors"
            >
              <span className="font-mono text-sm font-semibold">{trial.nctNumber}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 rounded text-sm font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              {trial.status}
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-bold text-foreground mb-1">Sponsor</h4>
          <p className="text-sm text-secondary">{trial.sponsor}</p>
        </div>

        <div>
          <h4 className="text-sm font-bold text-foreground mb-1">Inclusion Criteria</h4>
          <p className="text-sm text-secondary">{trial.inclusion}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-sm font-bold text-foreground mb-1">Primary Outcome</h4>
            <p className="text-sm text-secondary">{trial.primaryOutcome}</p>
          </div>
          <div>
            <h4 className="text-sm font-bold text-foreground mb-1">Secondary Outcomes</h4>
            <p className="text-sm text-secondary">{trial.secondaryOutcomes}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white border-b border-gray-200 shadow-sm z-50">
        <div className="container flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0 py-4">
          <h1 className="text-2xl font-bold text-foreground">CCA-LT</h1>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center w-full md:w-auto">
            <div className="flex gap-8">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/perihilar" className="nav-link">Perihilar CCA</Link>
              <Link href="/intrahepatic" className="nav-link">Intrahepatic CCA</Link>
              <Link href="/oslo-trials" className="nav-link">Oslo Trials</Link>
              <Link href="/future" className="nav-link">Future</Link>
            </div>
            <SearchBar />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="container py-12">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Clinical Trials Registry
          </h1>
          <p className="text-xl text-secondary leading-relaxed max-w-3xl">
            A comprehensive registry of active clinical trials recruiting patients for liver transplantation in cholangiocarcinoma. All trials listed are actively recruiting patients in 2025 and include links to ClinicalTrials.gov for detailed information and enrollment inquiries.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-background py-12">
        <div className="container max-w-4xl">
          <div className="bg-white rounded-lg border border-gray-200 p-8 mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">About This Registry</h2>
            <p className="text-secondary leading-relaxed mb-4">
              Liver transplantation has emerged as a potentially curative treatment for carefully selected patients with non-resectable cholangiocarcinoma. This registry compiles all active clinical trials recruiting patients in 2025, organized by disease type (intrahepatic and perihilar CCA).
            </p>
            <p className="text-secondary leading-relaxed">
              Each trial entry includes the NCT number, sponsor institution, inclusion criteria, primary and secondary outcomes, and a direct link to ClinicalTrials.gov for enrollment information. Clinicians and patients can use this registry to identify appropriate trials and connect with research centers.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-6 h-6 text-accent" />
                <h3 className="font-bold text-foreground">Total Trials</h3>
              </div>
              <p className="text-3xl font-bold text-accent">{iccaTrials.length + phccaTrials.length}</p>
              <p className="text-sm text-secondary mt-2">Active trials recruiting in 2025</p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-3">
                <Target className="w-6 h-6 text-accent" />
                <h3 className="font-bold text-foreground">Disease Types</h3>
              </div>
              <p className="text-3xl font-bold text-accent">2</p>
              <p className="text-sm text-secondary mt-2">iCCA and pCCA trials</p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="w-6 h-6 text-accent" />
                <h3 className="font-bold text-foreground">Global Coverage</h3>
              </div>
              <p className="text-3xl font-bold text-accent">4</p>
              <p className="text-sm text-secondary mt-2">Countries represented</p>
            </div>
          </div>
        </div>
      </section>

      {/* iCCA Trials */}
      <section className="bg-white border-t border-gray-200 py-16">
        <div className="container max-w-4xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-2">Intrahepatic Cholangiocarcinoma (iCCA) Trials</h2>
            <p className="text-secondary">
              {iccaTrials.length} active trials recruiting patients with unresectable intrahepatic cholangiocarcinoma
            </p>
          </div>

          {iccaTrials.map((trial) => (
            <TrialCard key={trial.id} trial={trial} type="iCCA" />
          ))}
        </div>
      </section>

      {/* pCCA Trials */}
      <section className="bg-background py-16">
        <div className="container max-w-4xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-2">Perihilar Cholangiocarcinoma (pCCA) Trials</h2>
            <p className="text-secondary">
              {phccaTrials.length} active trials recruiting patients with non-resectable perihilar cholangiocarcinoma
            </p>
          </div>

          {phccaTrials.map((trial) => (
            <TrialCard key={trial.id} trial={trial} type="pCCA" />
          ))}
        </div>
      </section>

      {/* How to Participate */}
      <section className="bg-white border-t border-gray-200 py-16">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">How to Participate</h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-accent/5 to-transparent rounded-lg border border-accent/20 p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">For Patients</h3>
              <ol className="space-y-3 text-secondary">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">1.</span>
                  <span>Review the trial information and inclusion criteria to identify trials that match your disease type and stage</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">2.</span>
                  <span>Click the NCT number to visit ClinicalTrials.gov for detailed information and contact information</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">3.</span>
                  <span>Contact the trial sponsor or research center directly to discuss eligibility and enrollment</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">4.</span>
                  <span>Work with your healthcare provider to arrange evaluation and enrollment if eligible</span>
                </li>
              </ol>
            </div>

            <div className="bg-gradient-to-r from-accent/5 to-transparent rounded-lg border border-accent/20 p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">For Healthcare Providers</h3>
              <ol className="space-y-3 text-secondary">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">1.</span>
                  <span>Identify appropriate trials based on patient disease type, stage, and treatment history</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">2.</span>
                  <span>Review inclusion/exclusion criteria to assess patient eligibility</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">3.</span>
                  <span>Contact the trial sponsor to discuss patient referral and enrollment process</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">4.</span>
                  <span>Facilitate patient evaluation and coordinate care with the research center</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Key Considerations */}
      <section className="bg-background py-16">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">Key Considerations</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-foreground mb-3">Eligibility Varies</h3>
              <p className="text-secondary text-sm">
                Each trial has specific inclusion and exclusion criteria. Not all patients will be eligible for all trials. Careful evaluation by the research team is essential.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-foreground mb-3">Geographic Considerations</h3>
              <p className="text-secondary text-sm">
                Trials are located in different countries (Canada, Italy, Spain, USA, Norway). Travel and accommodation may be necessary for participation.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-foreground mb-3">Neoadjuvant Therapy</h3>
              <p className="text-secondary text-sm">
                Most trials require prior neoadjuvant therapy with documented response. Disease control is a key selection criterion across all trials.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-foreground mb-3">Research Commitment</h3>
              <p className="text-secondary text-sm">
                Trial participation involves research assessments, biomarker collection, and long-term follow-up. Commitment to the research protocol is expected.
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
              This registry is maintained by the Transplant Oncology Research Group at Oslo University Hospital, which leads multiple clinical trials for liver transplantation in cholangiocarcinoma.
            </p>
            <a href="https://www.med.uio.no/klinmed/english/research/groups/transplant-oncology/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90">
              Visit Research Group Website
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="bg-white border-t border-gray-200 py-12">
        <div className="container max-w-4xl">
          <div className="flex gap-4 justify-between">
            <Link href="/oslo-trials">
              <Button variant="outline">← Oslo Trials</Button>
            </Link>
            <Link href="/references">
              <Button className="bg-accent text-white hover:bg-teal-700">
                References →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-gray-200 py-12 mt-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-foreground mb-4">About This Registry</h4>
              <p className="text-secondary text-sm">
                This registry compiles active clinical trials recruiting patients for liver transplantation in cholangiocarcinoma as of 2025.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Data Source</h4>
              <p className="text-secondary text-sm">
                Trial information sourced from ClinicalTrials.gov and institutional trial databases. Please verify current status on ClinicalTrials.gov.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Disclaimer</h4>
              <p className="text-secondary text-sm">
                This registry is for informational purposes. Always consult with healthcare providers for personalized medical advice and trial eligibility assessment.
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
