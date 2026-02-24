'use client';

import { useState, useEffect } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

interface LinkItem {
  title: string;
  type: string;
  link: string;
  about: string;
}

const typeColors: Record<string, string> = {
  Books: 'bg-blue-100 text-blue-800',
  Blogs: 'bg-purple-100 text-purple-800',
  Articles: 'bg-green-100 text-green-800',
  Videos: 'bg-orange-100 text-orange-800',
  Movies: 'bg-red-100 text-red-800',
};

const FILTER_TYPES = ['Books', 'Blogs', 'Articles', 'Videos', 'Movies'];
const LINKS_PER_PAGE = 20;

export default function Home() {
  const [links, setLinks] = useState<LinkItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleLinks, setVisibleLinks] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await fetch('/links.json');
        const data: LinkItem[] = await response.json();
        setLinks(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch links:', error);
        setLoading(false);
      }
    };

    fetchLinks();
  }, []);

  // Filter links based on selected type
  const filteredLinks = selectedFilter
    ? links.filter((link) => link.type === selectedFilter)
    : links;

  // Animate links appearing in sequence
  useEffect(() => {
    if (filteredLinks.length === 0) return;

    const startIdx = (currentPage - 1) * LINKS_PER_PAGE;
    const endIdx = startIdx + LINKS_PER_PAGE;
    const pageLinks = filteredLinks.slice(startIdx, endIdx);

    setVisibleLinks(0);

    const interval = setInterval(() => {
      setVisibleLinks((prev) => {
        if (prev < pageLinks.length) {
          return prev + 1;
        }
        return prev;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [filteredLinks.length, currentPage]);

  // Reset to page 1 when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedFilter]);

  const startIdx = (currentPage - 1) * LINKS_PER_PAGE;
  const endIdx = startIdx + LINKS_PER_PAGE;
  const paginatedLinks = filteredLinks.slice(startIdx, endIdx);
  const totalPages = Math.ceil(filteredLinks.length / LINKS_PER_PAGE);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-slate-950 to-slate-900">
        <div className="text-white text-xl">Loading links...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-linear-to-br from-slate-950 to-slate-900">
      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-3 sm:mb-4">
              Links
            </h1>
            <p className="text-slate-400 text-base sm:text-lg">
              Something to Read and Watch.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            <button
              onClick={() => setSelectedFilter(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 touch-manipulation ${selectedFilter === null
                ? 'bg-blue-500 text-white'
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700 active:bg-slate-600'
                }`}
            >
              All
            </button>
            {FILTER_TYPES.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedFilter(type)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 touch-manipulation ${selectedFilter === type
                  ? 'bg-blue-500 text-white'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700 active:bg-slate-600'
                  }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Links Container */}
          <div className="space-y-2 sm:space-y-3">
            {paginatedLinks.map((item, index) => (
              <div
                key={`${currentPage}-${index}`}
                className={`transform transition-all duration-500 ${index < visibleLinks
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
                  }`}
              >
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-3 sm:p-4 bg-slate-800 hover:bg-slate-700 active:bg-slate-600 rounded-lg border border-slate-700 hover:border-slate-600 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-3 sm:gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-blue-400 group-active:text-blue-400 transition-colors mb-2">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span
                          className={`inline-block px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${typeColors[item.about] ||
                            'bg-slate-700 text-slate-300'
                            }`}
                        >
                          {item.about}
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 sm:w-5 sm:h-5 text-slate-400 group-hover:text-blue-400 group-active:text-blue-400 transition-colors shrink-0 mt-1" />
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {paginatedLinks.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-400 text-base sm:text-lg">
                {selectedFilter
                  ? `No ${selectedFilter} available`
                  : 'No links available'}
              </p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-12">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="p-2.5 sm:p-3 rounded-lg bg-slate-800 hover:bg-slate-700 active:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed text-slate-400 hover:text-white active:text-white transition-colors touch-manipulation"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-6 h-6 sm:w-5 sm:h-5" />
              </button>
              <span className="text-slate-400 font-medium text-sm sm:text-base whitespace-nowrap">
                {currentPage} / {totalPages}
              </span>
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="p-2.5 sm:p-3 rounded-lg bg-slate-800 hover:bg-slate-700 active:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed text-slate-400 hover:text-white active:text-white transition-colors touch-manipulation"
                aria-label="Next page"
              >
                <ChevronRight className="w-6 h-6 sm:w-5 sm:h-5" />
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-4 sm:py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto flex items-center justify-center">
          <a
            href="https://x.com/sidhbad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 active:text-blue-500 transition-colors flex items-center gap-2 text-sm sm:text-base"
          >
            <span>Siddharth</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </footer>
    </div>
  );
}
