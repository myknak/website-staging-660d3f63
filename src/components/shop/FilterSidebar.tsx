import { FC } from "react";

interface FilterState {
  collections: string[];
  scents: string[];
  priceRange: [number, number];
}

interface FilterSidebarProps {
  activeFilters: FilterState;
  handleFilterChange: (filterType: keyof FilterState, value: string | [number, number]) => void;
  clearFilters: () => void;
  isOpen: boolean;
  toggleFilter: () => void;
}

const FilterSidebar: FC<FilterSidebarProps> = ({
  activeFilters,
  handleFilterChange,
  clearFilters,
  isOpen,
  toggleFilter,
}) => {
  const collections = [
    { id: "signature", name: "Signature Collection" },
    { id: "seasonal", name: "Seasonal Collection" },
    { id: "limited", name: "Limited Editions" },
    { id: "gift", name: "Gift Sets" },
  ];

  const scents = [
    { id: "woody", name: "Woody" },
    { id: "floral", name: "Floral" },
    { id: "citrus", name: "Citrus" },
    { id: "spice", name: "Spice" },
    { id: "fresh", name: "Fresh" },
    { id: "vanilla", name: "Vanilla" },
  ];

  return (
    <aside
      className={`w-full md:w-64 bg-white p-6 md:p-0 fixed md:relative top-0 left-0 h-full md:h-auto z-50 md:z-auto transform ${
        isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      } transition-transform duration-300 md:transition-none overflow-auto md:overflow-visible`}
    >
      <div className="md:hidden flex justify-between items-center mb-6">
        <h2 className="text-xl font-medium">Filters</h2>
        <button onClick={toggleFilter}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4">Collections</h3>
        <div className="space-y-2">
          {collections.map((collection) => (
            <div key={collection.id} className="flex items-center">
              <input
                type="checkbox"
                id={`collection-${collection.id}`}
                checked={activeFilters.collections.includes(collection.id)}
                onChange={() => handleFilterChange("collections", collection.id)}
                className="mr-2"
              />
              <label htmlFor={`collection-${collection.id}`}>
                {collection.name}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4">Scent Family</h3>
        <div className="space-y-2">
          {scents.map((scent) => (
            <div key={scent.id} className="flex items-center">
              <input
                type="checkbox"
                id={`scent-${scent.id}`}
                checked={activeFilters.scents.includes(scent.id)}
                onChange={() => handleFilterChange("scents", scent.id)}
                className="mr-2"
              />
              <label htmlFor={`scent-${scent.id}`}>{scent.name}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4">Price Range</h3>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span>${activeFilters.priceRange[0]}</span>
            <span>${activeFilters.priceRange[1]}</span>
          </div>
          <input
            type="range"
            min="0"
            max="200"
            step="10"
            value={activeFilters.priceRange[1]}
            onChange={(e) =>
              handleFilterChange("priceRange", [
                activeFilters.priceRange[0],
                parseInt(e.target.value),
              ])
            }
            className="w-full"
          />
        </div>
      </div>

      <button
        onClick={clearFilters}
        className="w-full py-2 px-4 border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
      >
        Clear All Filters
      </button>
    </aside>
  );
};

export default FilterSidebar;
