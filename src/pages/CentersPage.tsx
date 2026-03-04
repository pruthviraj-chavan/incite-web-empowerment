import { useState, useMemo, useCallback, useEffect, memo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Search, MapPin, Phone, Mail, Building2, Filter, X, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface Center {
  _id: string;
  center_name: string;
  center_code: string;
  district_name: string;
  taluka_name: string;
  address: string;
  CenterCoordinator: string;
  CenterCoordinatorMobileNo: string;
  email: string;
  state_name: string;
}

const DATA_URL = "https://www.incitecomputerphondaghat.co.in/data/mscit-centers.json";

// Fetch and flatten centers
async function fetchCenters(): Promise<Center[]> {
  const res = await fetch(DATA_URL);
  if (!res.ok) throw new Error("Failed to fetch centers");
  const json = await res.json();
  const result = json?.FetchQueryData?.result;
  if (!result) return [];
  // Flatten all arrays inside result
  return Object.values(result).flat() as Center[];
}

// Memoized center card
const CenterCard = memo(({ center }: { center: Center }) => (
  <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl p-4 md:p-5 hover:shadow-lg hover:border-incite-blue/20 transition-all duration-200 group">
    <div className="flex items-start gap-3 mb-3">
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-incite-blue to-incite-purple flex items-center justify-center flex-shrink-0">
        <Building2 className="w-5 h-5 text-white" />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="font-semibold text-gray-900 text-sm md:text-base leading-tight line-clamp-2 group-hover:text-incite-blue transition-colors">
          {center.center_name}
        </h3>
        <span className="text-xs text-gray-400 font-mono">#{center.center_code}</span>
      </div>
    </div>

    <div className="space-y-2 text-sm text-gray-600">
      <div className="flex items-start gap-2">
        <MapPin className="w-3.5 h-3.5 text-incite-blue mt-0.5 flex-shrink-0" />
        <span className="line-clamp-2 text-xs md:text-sm">{center.address}</span>
      </div>
      <div className="flex items-center gap-2">
        <MapPin className="w-3.5 h-3.5 text-incite-purple flex-shrink-0" />
        <span className="text-xs md:text-sm font-medium">{center.taluka_name}, {center.district_name}</span>
      </div>
      {center.CenterCoordinator && (
        <div className="flex items-center gap-2">
          <Building2 className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
          <span className="text-xs md:text-sm">{center.CenterCoordinator}</span>
        </div>
      )}
    </div>

    <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-gray-100">
      {center.CenterCoordinatorMobileNo && (
        <a
          href={`tel:${center.CenterCoordinatorMobileNo}`}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-50 text-green-700 text-xs font-medium hover:bg-green-100 transition-colors"
        >
          <Phone className="w-3 h-3" />
          {center.CenterCoordinatorMobileNo}
        </a>
      )}
      {center.email && (
        <a
          href={`mailto:${center.email}`}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-medium hover:bg-blue-100 transition-colors"
        >
          <Mail className="w-3 h-3" />
          Email
        </a>
      )}
    </div>
  </div>
));
CenterCard.displayName = "CenterCard";

// Filter dropdown component
const FilterSelect = memo(({ label, value, options, onChange, icon: Icon }: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
  icon: typeof MapPin;
}) => (
  <div className="relative">
    <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none z-10" />
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full appearance-none pl-9 pr-8 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-incite-blue/30 focus:border-incite-blue cursor-pointer"
    >
      <option value="">{label}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
  </div>
));
FilterSelect.displayName = "FilterSelect";

const BATCH_SIZE = 30;

const CentersPage = () => {
  const [search, setSearch] = useState("");
  const [district, setDistrict] = useState("");
  const [taluka, setTaluka] = useState("");
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);

  const { data: centers = [], isLoading, error } = useQuery({
    queryKey: ["mscit-centers"],
    queryFn: fetchCenters,
    staleTime: 30 * 60 * 1000, // 30 min cache
    gcTime: 60 * 60 * 1000, // 1 hour
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  // Extract unique districts & talukas
  const districts = useMemo(() =>
    [...new Set(centers.map((c) => c.district_name))].filter(Boolean).sort(),
    [centers]
  );

  const talukas = useMemo(() => {
    const filtered = district
      ? centers.filter((c) => c.district_name === district)
      : centers;
    return [...new Set(filtered.map((c) => c.taluka_name))].filter(Boolean).sort();
  }, [centers, district]);

  // Filter centers
  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return centers.filter((c) => {
      if (district && c.district_name !== district) return false;
      if (taluka && c.taluka_name !== taluka) return false;
      if (q) {
        return (
          c.center_name?.toLowerCase().includes(q) ||
          c.center_code?.toLowerCase().includes(q) ||
          c.address?.toLowerCase().includes(q) ||
          c.CenterCoordinator?.toLowerCase().includes(q) ||
          c.taluka_name?.toLowerCase().includes(q) ||
          c.district_name?.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [centers, search, district, taluka]);

  // Reset visible count on filter change
  useEffect(() => {
    setVisibleCount(BATCH_SIZE);
  }, [search, district, taluka]);

  const visibleCenters = useMemo(() =>
    filtered.slice(0, visibleCount),
    [filtered, visibleCount]
  );

  const hasMore = visibleCount < filtered.length;

  const loadMore = useCallback(() => {
    setVisibleCount((p) => Math.min(p + BATCH_SIZE, filtered.length));
  }, [filtered.length]);

  const clearFilters = useCallback(() => {
    setSearch("");
    setDistrict("");
    setTaluka("");
  }, []);

  const hasActiveFilters = search || district || taluka;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
      <section className="relative pt-24 pb-8 md:pt-32 md:pb-12 bg-gradient-to-br from-incite-blue via-incite-purple to-incite-blue overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNnKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')] opacity-40" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-white mb-3"
          >
            MSCIT Centers
          </motion.h1>
          <p className="text-white/80 text-sm md:text-lg max-w-2xl mx-auto">
            Find authorized MSCIT centers across Maharashtra. Search by name, district, or taluka.
          </p>
          {!isLoading && (
            <p className="text-white/60 text-xs mt-2">
              {centers.length.toLocaleString()} centers available
            </p>
          )}
        </div>
      </section>

      {/* Filters */}
      <section className="container mx-auto px-4 -mt-6 md:-mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 md:p-6">
          {/* Search */}
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Search by center name, code, address, coordinator..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-12 pr-4 py-3 text-base rounded-xl border-gray-200 focus:ring-incite-blue/30"
            />
          </div>

          {/* Filter row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <FilterSelect
              label="All Districts"
              value={district}
              options={districts}
              onChange={(v) => { setDistrict(v); setTaluka(""); }}
              icon={MapPin}
            />
            <FilterSelect
              label="All Talukas"
              value={taluka}
              options={talukas}
              onChange={setTaluka}
              icon={Filter}
            />
            {hasActiveFilters && (
              <Button
                variant="outline"
                onClick={clearFilters}
                className="rounded-xl border-red-200 text-red-500 hover:bg-red-50"
              >
                <X className="w-4 h-4 mr-1" /> Clear Filters
              </Button>
            )}
          </div>

          {/* Results count */}
          <div className="mt-3 flex items-center justify-between text-sm text-gray-500">
            <span>
              Showing <strong className="text-gray-800">{Math.min(visibleCount, filtered.length)}</strong> of{" "}
              <strong className="text-gray-800">{filtered.length.toLocaleString()}</strong> centers
            </span>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="container mx-auto px-4 py-6 md:py-10">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-xl p-5 animate-pulse">
                <div className="flex gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-200" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-3/4" />
                    <div className="h-3 bg-gray-100 rounded w-1/3" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-100 rounded" />
                  <div className="h-3 bg-gray-100 rounded w-2/3" />
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-16">
            <p className="text-red-500">Failed to load centers. Please try again later.</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-16">
            <Building2 className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500 text-lg">No centers found</p>
            <p className="text-gray-400 text-sm mt-1">Try adjusting your search or filters</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {visibleCenters.map((center) => (
                <CenterCard key={center._id} center={center} />
              ))}
            </div>

            {hasMore && (
              <div className="flex justify-center mt-8">
                <Button
                  onClick={loadMore}
                  className="px-8 py-3 rounded-full gradient-blue text-white shadow-lg hover:scale-105 transition-transform"
                >
                  Load More ({(filtered.length - visibleCount).toLocaleString()} remaining)
                </Button>
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
};

export default CentersPage;
