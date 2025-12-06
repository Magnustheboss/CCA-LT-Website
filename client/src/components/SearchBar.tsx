import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Search, X } from "lucide-react";
import { searchContent, getSearchSuggestions, SearchResult } from "@/lib/searchIndex";

export function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Handle search input
  useEffect(() => {
    if (query.trim()) {
      const searchResults = searchContent(query);
      setResults(searchResults);
      
      const searchSuggestions = getSearchSuggestions(query);
      setSuggestions(searchSuggestions);
      
      setIsOpen(true);
    } else {
      setResults([]);
      setSuggestions([]);
      setIsOpen(false);
    }
  }, [query]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleResultClick = () => {
    setQuery("");
    setIsOpen(false);
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary w-5 h-5" />
        <input
          type="text"
          placeholder="Search topics, references..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.trim() && setIsOpen(true)}
          className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-foreground placeholder-secondary"
        />
        {query && (
          <button
            onClick={() => {
              setQuery("");
              setIsOpen(false);
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-secondary hover:text-foreground"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && (query.trim() || results.length > 0) && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          {results.length > 0 ? (
            <div>
              {/* Results by category */}
              {results.length > 0 && (
                <div className="p-4">
                  <p className="text-sm text-secondary font-semibold mb-3">
                    Found {results.length} result{results.length !== 1 ? "s" : ""}
                  </p>
                  <div className="space-y-2">
                    {results.map((result) => (
                      <Link
                        key={result.id}
                        href={result.url}
                        onClick={handleResultClick}
                        className="block p-3 hover:bg-gray-50 rounded-lg border border-transparent hover:border-gray-200 transition-colors cursor-pointer"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <p className="font-semibold text-foreground text-sm">
                              {result.title}
                            </p>
                            <p className="text-xs text-secondary mt-1 line-clamp-2">
                              {result.excerpt}
                            </p>
                            <div className="flex gap-2 mt-2">
                              <span className="inline-block px-2 py-1 bg-accent/10 text-accent text-xs rounded font-medium">
                                {result.category}
                              </span>
                              <span className="inline-block px-2 py-1 bg-gray-100 text-secondary text-xs rounded">
                                {result.pageTitle}
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="p-4 text-center">
              <p className="text-secondary text-sm">
                No results found for "{query}"
              </p>
              {suggestions.length > 0 && (
                <div className="mt-4">
                  <p className="text-xs text-secondary font-semibold mb-2">
                    Did you mean:
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {suggestions.map((suggestion) => (
                      <button
                        key={suggestion}
                        onClick={() => setQuery(suggestion)}
                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-foreground text-xs rounded transition-colors"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
