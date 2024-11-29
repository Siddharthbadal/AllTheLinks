import React from 'react'

export default function SearchInput({ inputValue, setInputValue, isHandling }) {
  return (
    <div className="relative mt-8 mb-5">
    <input
      value={inputValue}
      onChange={(e) => {
        setInputValue(e.target.value)
      }}
      placeholder="Search movies"
      className="text-base"
    />
    
</div>
  )
}
