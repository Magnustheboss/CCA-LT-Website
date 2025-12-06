import { useState, useEffect } from "react";
import { Link, useSearch } from "wouter";
import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/SearchBar";
import { searchContent, SearchResult } from "@/lib/searchIndex";
import { ArrowLeft } from "lucide-react";

export default function SearchResults() {
  const search = useSearch();
  const query = new URLSearchParams(search).get("q") || "";
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (query.trim()) {
      const searchResults = searchContent(query);
      setResults(searchResults);
    } else {
      setResults([]);
    }
    setLoading(false);
  }, [query]);

  // Group results by page
  const groupedResults = results.reduce(
    (acc, result) => {
      if (!acc[result.pageTitle]) {
        acc[result.pageTitle] = [];
      }
      acc[result.pageTitle].push(result);
      return acc;
    },
    {} as Record<string, SearchResult[]>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white border-b border-gray-200 shadow-sm z-50">
        <div className="container flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0 py-4">
          <h1 className="text-2xl font-bold text-foreground">CCA-LT</h1>
          <div className="flex gap-8 items-center">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/perihilar" className="nav-link">Perihilar CCA</Link>
            <Link href="/intrahepatic" className="nav-link">Intrahepatic CCA</Link>
            <Link href="/outcomes" className="nav-link">Outcomes</Link>
            <Link href="/sure-lt" className="nav-link">SURE-LT</Link>
            <Link href="/future" className="nav-link">Future</Link>
            <Link href="/references" className="nav-link">References</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="container py-12">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/">
              <Button variant="outline" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-6">
            Search Results
          </h1>
          <div className="max-w-2xl">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="bg-background py-16">
        <div className="container max-w-4xl">
          {loading ? (
            <div className="text-center py-12">
              <p className="text-secondary">Loading results...</p>
            </div>
          ) : query.trim() ? (
            <>
              {results.length > 0 ? (
                <div>
                  <p className="text-lg text-secondary mb-8">
                    Found <span className="font-bold text-foreground">{results.length}</span> result{results.length !== 1 ? "s" : ""} for "<span className="font-bold text-foreground">{query}</span>"
                  </p>

                  {/* Results grouped by page */}
                  <div className="space-y-12">
                    {Object.entries(groupedResults).map(([pageTitle, pageResults]) => (
                      <div key={pageTitle}>
                        <h2 className="text-2xl font-bold text-foreground mb-6 pb-4 border-b-2 border-accent">
                          {pageTitle}
                        </h2>
                        <div className="space-y-4">
                          {pageResults.map((result) => (
                            <Link
                              key={result.id}
                              href={result.url}
                              className="block"
                            >
                              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-accent transition-all cursor-pointer">
                                <div className="flex items-start justify-between mb-3">
                                  <h3 className="text-xl font-bold text-foreground flex-1">
                                    {result.title}
                                  </h3>
                                  <span className="ml-4 px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded whitespace-nowrap">
                                    {result.category}
                                  </span>
                                </div>
                                <p className="text-secondary leading-relaxed mb-4">
                                  {result.excerpt}
                                </p>
                                <div className="flex items-center text-accent font-semibold text-sm">
                                  View on {pageTitle} →
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-xl text-secondary mb-4">
                    No results found for "<span className="font-bold text-foreground">{query}</span>"
                  </p>
                  <p className="text-secondary mb-8">
                    Try different keywords or browse the site using the navigation menu.
                  </p>
                  <Link href="/">
                    <Button className="bg-accent text-white hover:bg-teal-700">
                      Return to Home
                    </Button>
                  </Link>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-secondary mb-8">
                Enter a search term to find topics and references.
              </p>
              <Link href="/">
                <Button className="bg-accent text-white hover:bg-teal-700">
                  Return to Home
                </Button>
              </Link>
            </div>
          )}
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
