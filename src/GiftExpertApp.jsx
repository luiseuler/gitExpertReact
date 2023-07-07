import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  const onAddCategory = () => {
    setCategories([...categories, 'Valorant']);
  }

  return (
    <>
      {/* titulo */}
      <h1>GiftExpertApp</h1>

      {/* Input */}
      <AddCategory
        setCategories={setCategories} />

      {/* Listado de gift */}
      <ol>
        {/* Gift Item */}
        {categories.map(category => {
          return <li key={category}>{category}</li>
        })}
      </ol>

    </>
  );
}