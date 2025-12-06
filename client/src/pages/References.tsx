import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function References() {
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
            <Link href="/outcomes" className="nav-link">Outcomes</Link>
            <Link href="/sure-lt" className="nav-link">SURE-LT</Link>
            <Link href="/future" className="nav-link">Future</Link>
            <Link href="/references" className="nav-link active">References</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="container py-12">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            References and Citations
          </h1>
          <p className="text-xl text-secondary leading-relaxed">
            Comprehensive bibliography of all sources cited in this review of liver transplantation for cholangiocarcinoma, organized by topic for easy reference.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-background py-16">
        <div className="container max-w-4xl">
          {/* Table of Contents */}
          <div className="bg-white rounded-lg p-8 border border-gray-200 mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Contents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-accent font-semibold mb-2">• Epidemiology and Disease Biology</p>
                <p className="text-accent font-semibold mb-2">• Clinical Guidelines and Practice</p>
                <p className="text-accent font-semibold mb-2">• Diagnosis and Staging</p>
                <p className="text-accent font-semibold mb-2">• Perihilar CCA and Transplantation</p>
              </div>
              <div>
                <p className="text-accent font-semibold mb-2">• Intrahepatic CCA and Transplantation</p>
                <p className="text-accent font-semibold mb-2">• Neoadjuvant Therapies</p>
                <p className="text-accent font-semibold mb-2">• Biomarkers and Molecular Profiling</p>
                <p className="text-accent font-semibold mb-2">• Advanced Imaging and Radiomics</p>
              </div>
            </div>
          </div>

          {/* Epidemiology and Disease Biology */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Epidemiology and Disease Biology</h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-foreground mb-2">
                  <span className="font-bold">[1]</span> Razumilava, N. & Gores, G. J. Cholangiocarcinoma. <em>Lancet</em> 383, 2168-2179, doi:10.1016/S0140-6736(13)61903-0 (2014).
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-foreground mb-2">
                  <span className="font-bold">[2]</span> Khan, S. A., Tavolari, S. & Brandi, G. Cholangiocarcinoma: Epidemiology and risk factors. <em>Liver Int</em> 39 Suppl 1, 19-31, doi:10.1111/liv.14095 (2019).
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-foreground mb-2">
                  <span className="font-bold">[3]</span> Saha, S. K., Zhu, A. X., Fuchs, C. S. & Brooks, G. A. Forty-Year Trends in Cholangiocarcinoma Incidence in the U.S.: Intrahepatic Disease on the Rise. <em>Oncologist</em> 21, 594-599, doi:10.1634/theoncologist.2015-0446 (2016).
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-foreground mb-2">
                  <span className="font-bold">[32]</span> Banales, J. M. et al. Cholangiocarcinoma 2020: the next horizon in mechanisms and management. <em>Nat Rev Gastroenterol Hepatol</em> 17, 557-588, doi:10.1038/s41575-020-0310-z (2020).
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-foreground mb-2">
                  <span className="font-bold">[43]</span> Nakamura, H. et al. Genomic spectra of biliary tract cancer. <em>Nat Genet</em> 47, 1003-1010, doi:10.1038/ng.3375 (2015).
                </p>
              </div>
            </div>
          </div>

          <div className="section-divider"></div>

          {/* Clinical Guidelines */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Clinical Guidelines and Practice</h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-foreground mb-2">
                  <span className="font-bold">[10]</span> Vogel, A. et al. Biliary tract cancer: ESMO Clinical Practice Guideline for diagnosis, treatment and follow-up. <em>Ann Oncol</em> 34, 127-140, doi:10.1016/j.annonc.2022.10.506 (2023).
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-foreground mb-2">
                  <span className="font-bold">[11]</span> Benson, A. B. et al. Hepatobiliary Cancers, Version 2.2021, NCCN Clinical Practice Guidelines in Oncology. <em>J Natl Compr Canc Netw</em> 19, 541-565, doi:10.6004/jnccn.2021.0022 (2021).
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-foreground mb-2">
                  <span className="font-bold">[12]</span> Vogel, A., Ducreux, M. & clinicalguidelines@esmo.org, E. G. C. E. a. ESMO Clinical Practice Guideline interim update on the management of biliary tract cancer. <em>ESMO Open</em> 10, 104003, doi:10.1016/j.esmoop.2024.104003 (2025).
                </p>
              </div>
            </div>
          </div>

          <div className="section-divider"></div>

          {/* Diagnosis and Staging */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Diagnosis and Staging</h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-foreground mb-2">
                  <span className="font-bold">[4]</span> Ito, F., Cho, C. S., Rikkers, L. F. & Weber, S. M. Hilar cholangiocarcinoma: current management. <em>Ann Surg</em> 250, 210-218, doi:10.1097/SLA.0b013e3181afe0ab (2009).
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-foreground mb-2">
                  <span className="font-bold">[30]</span> Kim, J. Y. et al. Clinical role of 18F-FDG PET-CT in suspected and potentially operable cholangiocarcinoma: a prospective study compared with conventional imaging. <em>Am J Gastroenterol</em> 103, 1145-1151, doi:10.1111/j.1572-0241.2007.01710.x (2008).
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-foreground mb-2">
                  <span className="font-bold">[31]</span> Heimbach, J. K., Sanchez, W., Rosen, C. B. & Gores, G. J. Trans-peritoneal fine needle aspiration biopsy of hilar cholangiocarcinoma is associated with disease dissemination. <em>HPB (Oxford)</em> 13, 356-360, doi:10.1111/j.1477-2574.2011.00298.x (2011).
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-foreground mb-2">
                  <span className="font-bold">[33]</span> Boberg, K. M. et al. Diagnostic benefit of biliary brush cytology in cholangiocarcinoma in primary sclerosing cholangitis. <em>J Hepatol</em> 45, 568-574, doi:10.1016/j.jhep.2006.05.010 (2006).
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-foreground mb-2">
                  <span className="font-bold">[34]</span> Navaneethan, U. et al. Comparative effectiveness of biliary brush cytology and intraductal biopsy for detection of malignant biliary strictures: a systematic review and meta-analysis. <em>Gastrointest Endosc</em> 81, 168-176, doi:10.1016/j.gie.2014.09.017 (2015).
                </p>
              </div>
            </div>
          </div>

          <div className="section-divider"></div>

          {/* Perihilar CCA and Transplantation */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Perihilar CCA and Liver Transplantation</h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-foreground mb-2">
                  <span className="font-bold">[7]</span> Darwish Murad, S. et al. Efficacy of neoadjuvant chemoradiation, followed by liver transplantation, for perihilar cholangiocarcinoma at 12 US centers. <em>Gastroenterology</em> 143, 88-98 e83; quiz e14, doi:10.1053/j.gastro.2012.04.008 (2012).
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-foreground mb-2">
                  <span className="font-bold">[29]</span> Bismuth, H. & Corlette, M. B. Intrahepatic cholangioenteric anastomosis in carcinoma of the hilus of the liver. <em>Surg Gynecol Obstet</em> 140, 170-178 (1975).
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-foreground mb-2">
                  <span className="font-bold">[35]</span> Hoogwater, F. J. H. et al. Role of neoadjuvant chemoradiotherapy in liver transplantation for unresectable perihilar cholangiocarcinoma: multicentre, retrospective cohort study. <em>BJS Open</em> 7, doi:10.1093/bjsopen/zrad025 (2023).
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-foreground mb-2">
                  <span className="font-bold">[16]</span> Line, P. D. et al. A Novel Transplant Approach for Locally Advanced Unresectable Perihilar Cholangiocarcinoma: The SURE-LT Concept. <em>Ann Surg</em>, doi:10.1097/SLA.0000000000006892 (2025).
                </p>
              </div>
            </div>
          </div>

          <div className="section-divider"></div>

          {/* Intrahepatic CCA and Transplantation */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Intrahepatic CCA and Liver Transplantation</h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-foreground mb-2">
                  <span className="font-bold">[13]</span> Sapisochin, G. et al. Liver transplantation for "very early" intrahepatic cholangiocarcinoma: International retrospective study supporting a prospective assessment. <em>Hepatology</em> 64, 1178-1188, doi:10.1002/hep.28744 (2016).
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-foreground mb-2">
                  <span className="font-bold">[14]</span> Lunsford, K. E. et al. Liver transplantation for locally advanced intrahepatic cholangiocarcinoma treated with neoadjuvant therapy: a prospective case-series. <em>Lancet Gastroenterol Hepatol</em> 3, 337-348, doi:10.1016/S2468-1253(18)30045-1 (2018).
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-foreground mb-2">
                  <span className="font-bold">[15]</span> Yaqub, S. et al. Liver transplantation for locally advanced non-resectable intrahepatic cholangiocarcinoma treated with neoadjuvant therapy: early results from the TESLA trial. <em>Br J Surg</em> 112, doi:10.1093/bjs/znaf054 (2025).
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-foreground mb-2">
                  <span className="font-bold">[17]</span> Maspero, M. et al. Liver Transplantation for Intrahepatic Cholangiocarcinoma After Chemotherapy and Radioembolization: An Intention-To-Treat Study. <em>Transpl Int</em> 37, 13641, doi:10.3389/ti.2024.13641 (2024).
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-foreground mb-2">
                  <span className="font-bold">[36]</span> Sapisochin, G., Ivanics, T. & Heimbach, J. Liver Transplantation for Intrahepatic Cholangiocarcinoma: Ready for Prime Time? <em>Hepatology</em> 75, 455-472, doi:10.1002/hep.32258 (2022).
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-foreground mb-2">
                  <span className="font-bold">[40]</span> Sapisochin, G. et al. Intrahepatic cholangiocarcinoma or mixed hepatocellular-cholangiocarcinoma in patients undergoing liver transplantation: a Spanish matched cohort multicenter study. <em>Ann Surg</em> 259, 944-952, doi:10.1097/SLA.0000000000000494 (2014).
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-foreground mb-2">
                  <span className="font-bold">[41]</span> Vilchez, V. et al. Long-term outcome of patients undergoing liver transplantation for mixed hepatocellular carcinoma and cholangiocarcinoma: an analysis of the UNOS database. <em>HPB (Oxford)</em> 18, 29-34, doi:10.1016/j.hpb.2015.10.001 (2016).
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-foreground mb-2">
                  <span className="font-bold">[42]</span> Beaufrere, A., Calderaro, J. & Paradis, V. Combined hepatocellular-cholangiocarcinoma: An update. <em>J Hepatol</em> 74, 1212-1224, doi:10.1016/j.jhep.2021.01.035 (2021).
                </p>
              </div>
            </div>
          </div>

          <div className="section-divider"></div>

          {/* Neoadjuvant Therapies */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Neoadjuvant Therapies and Systemic Treatment</h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-foreground mb-2">
                  <span className="font-bold">[5]</span> Oh, D. Y. et al. Durvalumab plus Gemcitabine and Cisplatin in Advanced Biliary Tract Cancer. <em>NEJM Evid</em> 1, EVIDoa2200015, doi:10.1056/EVIDoa2200015 (2022).
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-foreground mb-2">
                  <span className="font-bold">[6]</span> Oh, D. Y. et al. Durvalumab or placebo plus gemcitabine and cisplatin in participants with advanced biliary tract cancer (TOPAZ-1): updated overall survival from a randomised phase 3 study. <em>Lancet Gastroenterol Hepatol</em> 9, 694-704, doi:10.1016/S2468-1253(24)00095-5 (2024).
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-foreground mb-2">
                  <span className="font-bold">[37]</span> Aceituno, L., Gravely, A. K., O'Kane, G. M., Vogel, A. & Sapisochin, G. The use of immunotherapy pre-liver transplant. <em>J Hepatol</em> 82, 757-759, doi:10.1016/j.jhep.2024.11.005 (2025).
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-foreground mb-2">
                  <span className="font-bold">[38]</span> Rezaee-Zavareh, M. S. et al. Impact of pre-transplant immune checkpoint inhibitor use on post-transplant outcomes in HCC: A systematic review and individual patient data meta-analysis. <em>J Hepatol</em> 82, 107-119, doi:10.1016/j.jhep.2024.06.042 (2025).
                </p>
              </div>
            </div>
          </div>

          <div className="section-divider"></div>

          {/* Hepatic Artery Infusion */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Hepatic Artery Infusion and Liver-Directed Therapies</h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-foreground mb-2">
                  <span className="font-bold">[45]</span> Cercek, A. et al. Assessment of Hepatic Arterial Infusion of Floxuridine in Combination With Systemic Gemcitabine and Oxaliplatin in Patients With Unresectable Intrahepatic Cholangiocarcinoma: A Phase 2 Clinical Trial. <em>JAMA Oncol</em> 6, 60-67, doi:10.1001/jamaoncol.2019.3718 (2020).
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-foreground mb-2">
                  <span className="font-bold">[46]</span> Cowzer, D. et al. Long-term outcomes in patients with advanced intrahepatic cholangiocarcinoma treated with hepatic arterial infusion chemotherapy. <em>J Natl Cancer Inst</em> 117, 279-286, doi:10.1093/jnci/djae202 (2025).
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-foreground mb-2">
                  <span className="font-bold">[47]</span> He, J. & Cameron, A. M. Is Hepatic Artery Infusion Pump Therapy a New Bridging Strategy to Liver Transplant for Advanced Liver Malignancy? <em>Ann Surg Oncol</em> 30, 4569-4570, doi:10.1245/s10434-023-13674-2 (2023).
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-foreground mb-2">
                  <span className="font-bold">[48]</span> Franssen, S. et al. Hepatic Arterial Infusion Pump Chemotherapy in Patients With Unresectable Intrahepatic Cholangiocarcinoma-PUMP-2 Trial. <em>J Clin Oncol</em>, JCO2500923, doi:10.1200/JCO-25-00923 (2025).
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-foreground mb-2">
                  <span className="font-bold">[49]</span> Konstantinidis, I. T. et al. Unresectable intrahepatic cholangiocarcinoma: Systemic plus hepatic arterial infusion chemotherapy is associated with longer survival in comparison with systemic chemotherapy alone. <em>Cancer</em> 122, 758-765, doi:10.1002/cncr.29824 (2016).
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-foreground mb-2">
                  <span className="font-bold">[50]</span> Lopiano, S., Guarrera, J. V. & Lunsford, K. E. Therapeutic Advances in Initially Unresectable Locally Advanced Intrahepatic Cholangiocarcinoma: Emerging Treatments and the Role of Liver Transplantation. <em>Curr Oncol</em> 32, doi:10.3390/curroncol32060293 (2025).
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-foreground mb-2">
                  <span className="font-bold">[51]</span> Hill, A. L. et al. Liver Transplantation After Hepatic Artery Infusion Pump Therapy: Single-Center Experience and Technical Considerations. <em>Ann Surg Oncol</em> 30, 4775-4780, doi:10.1245/s10434-023-13652-8 (2023).
                </p>
              </div>
            </div>
          </div>

          <div className="section-divider"></div>

          {/* Biomarkers and Molecular */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Biomarkers and Molecular Profiling</h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-foreground mb-2">
                  <span className="font-bold">[28]</span> Lowery, M. A. et al. Comprehensive Molecular Profiling of Intrahepatic and Extrahepatic Cholangiocarcinomas: Potential Targets for Intervention. <em>Clin Cancer Res</em> 24, 4154-4161, doi:10.1158/1078-0432.CCR-18-0078 (2018).
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-foreground mb-2">
                  <span className="font-bold">[44]</span> Wang, Y. et al. Circulating tumor DNA in cholangiocarcinoma: current clinical applications and future perspectives. <em>Front Cell Dev Biol</em> 13, 1616064, doi:10.3389/fcell.2025.1616064 (2025).
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-foreground mb-2">
                  <span className="font-bold">[52]</span> Rizzo, A., Ricci, A. D., Tavolari, S. & Brandi, G. Circulating Tumor DNA in Biliary Tract Cancer: Current Evidence and Future Perspectives. <em>Cancer Genomics Proteomics</em> 17, 441-452, doi:10.21873/cgp.20203 (2020).
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-foreground mb-2">
                  <span className="font-bold">[53]</span> Yoo, C. et al. Circulating tumor DNA status and dynamics predict recurrence in patients with resected extrahepatic cholangiocarcinoma. <em>J Hepatol</em> 82, 861-870, doi:10.1016/j.jhep.2024.10.043 (2025).
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-foreground mb-2">
                  <span className="font-bold">[54]</span> Awosika, J. A., Monge, C. & Greten, T. F. Integration of circulating tumor DNA in biliary tract cancer: the emerging landscape. <em>Hepat Oncol</em> 11, 2403334, doi:10.1080/20450923.2024.2403334 (2024).
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-foreground mb-2">
                  <span className="font-bold">[55]</span> Yu, J., Avriett, T. A., Ray, C. M. & Kim, R. D. Circulating tumor DNA analysis guiding adjuvant treatment in resected stage III cholangiocarcinoma: a case report. <em>J Gastrointest Oncol</em> 15, 485-490, doi:10.21037/jgo-23-815 (2024).
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-foreground mb-2">
                  <span className="font-bold">[56]</span> Abdelrahim, M. et al. Tumor-informed circulating tumor DNA assay for surveillance post-liver transplantation in patients with hepatocellular and cholangiocarcinoma. <em>J Gastrointest Oncol</em> 16, 1573-1585, doi:10.21037/jgo-24-791 (2025).
                </p>
              </div>
            </div>
          </div>

          <div className="section-divider"></div>

          {/* Advanced Imaging and Radiomics */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Advanced Imaging and Radiomics</h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-foreground mb-2">
                  <span className="font-bold">[57]</span> Lambin, P. et al. Radiomics: extracting more information from medical images using advanced feature analysis. <em>Eur J Cancer</em> 48, 441-446, doi:10.1016/j.ejca.2011.11.036 (2012).
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-foreground mb-2">
                  <span className="font-bold">[58]</span> Chen, P. et al. Personalized intrahepatic cholangiocarcinoma prognosis prediction using radiomics: Application and development trend. <em>Front Oncol</em> 13, 1133867, doi:10.3389/fonc.2023.1133867 (2023).
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-foreground mb-2">
                  <span className="font-bold">[59]</span> Zhan, P. C. et al. Radiomics using CT images for preoperative prediction of lymph node metastasis in perihilar cholangiocarcinoma: a multi-centric study. <em>Eur Radiol</em> 34, 1280-1291, doi:10.1007/s00330-023-10108-1 (2024).
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-foreground mb-2">
                  <span className="font-bold">[60]</span> Bo, Z. et al. Machine learning radiomics to predict the early recurrence of intrahepatic cholangiocarcinoma after curative resection: A multicentre cohort study. <em>Eur J Nucl Med Mol Imaging</em> 50, 2501-2513, doi:10.1007/s00259-023-06184-6 (2023).
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-foreground mb-2">
                  <span className="font-bold">[61]</span> Miao, G. et al. An MRI-Based Radiomics Model for Preoperative Prediction of Microvascular Invasion and Outcome in Intrahepatic Cholangiocarcinoma. <em>Eur J Radiol</em> 183, 111896, doi:10.1016/j.ejrad.2024.111896 (2025).
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="section-divider"></div>
          <div className="flex gap-4 justify-between">
            <Link href="/future">
              <Button variant="outline">← Back to Future Directions</Button>
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
