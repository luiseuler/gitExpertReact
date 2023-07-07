import { useState } from 'react';

import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(['Dragon Ball']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([...categories, newCategory]);
  }

  return (
    <>
      {/* titulo */}
      <h1>GiftExpertApp</h1>

      {/* Input */}
      <AddCategory
        // setCategories={setCategories} 
        onNewCategory={event => onAddCategory(event)}
      />

      {
        categories.map(category =>
        (
          <GiftGrid
            key={category}
            category={category} />
        ))
      }
    </>
  );
}