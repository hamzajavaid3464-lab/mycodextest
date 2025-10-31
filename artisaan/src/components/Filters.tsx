import { AppCategory } from '../data/apps';

const categories: { label: string; value: AppCategory | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Anime', value: 'anime' },
  { label: 'Flowers', value: 'flowers' },
  { label: 'Wallpapers', value: 'wallpapers' },
  { label: 'Kids', value: 'kids' },
  { label: 'Butterflies', value: 'butterflies' },
];

const sorts = [
  { label: 'Popularity', value: 'popularity' },
  { label: 'Newest', value: 'newest' },
  { label: 'A–Z', value: 'az' },
];

type FiltersProps = {
  activeCategory: AppCategory | 'all';
  onCategoryChange: (category: AppCategory | 'all') => void;
  query: string;
  onQueryChange: (query: string) => void;
  sort: string;
  onSortChange: (value: string) => void;
};

const Filters = ({
  activeCategory,
  onCategoryChange,
  query,
  onQueryChange,
  sort,
  onSortChange,
}: FiltersProps) => (
  <div className="glass flex flex-col gap-4 rounded-[var(--radius-lg)] p-6 lg:flex-row lg:items-center lg:justify-between">
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category.value}
          type="button"
          onClick={() => onCategoryChange(category.value)}
          className={`rounded-full px-4 py-2 text-sm transition ${
            activeCategory === category.value
              ? 'bg-brand-gradient text-white'
              : 'bg-white/70 text-text/70 hover:text-text'
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <input
        type="search"
        placeholder="Search apps"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        className="w-full rounded-full border border-transparent bg-white/80 px-4 py-2 text-sm text-text shadow-inner outline-none transition focus:border-accent focus:bg-white"
      />
      <select
        value={sort}
        onChange={(e) => onSortChange(e.target.value)}
        className="rounded-full border border-transparent bg-white/80 px-4 py-2 text-sm text-text shadow-inner outline-none transition focus:border-accent focus:bg-white"
      >
        {sorts.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  </div>
);

export default Filters;
