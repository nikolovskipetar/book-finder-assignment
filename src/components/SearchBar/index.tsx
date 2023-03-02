import { ChangeEvent, FC, FormEvent, useState } from 'react'
import styles from './style.module.scss'

interface SearchBarProps {
  searchQuery: string
  setSearchQuery: (query: string) => void,
  onSearch: (query: string) => void,
  onClearSearch: () => void,
}

const SearchBar: FC<SearchBarProps> = ({ searchQuery, setSearchQuery, onSearch, onClearSearch }) => {

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSearch(searchQuery)
  }

  const handleClearSearch = () => {
    setSearchQuery('')
    onClearSearch()
  }

  return (
    <form className={styles['search-bar']} onSubmit={handleSearchSubmit}>
      <input
        className={styles['search-bar__input']}
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <button
        type="submit"
        className={styles['search-bar__button']}
      >
        Search <i className="fas fa-search"/>
      </button>

      {searchQuery && (
        <button
          className={styles['search-bar__button']}
          onClick={handleClearSearch}
        >
          Clear
        </button>
      )}
    </form>
  )
}

export default SearchBar
