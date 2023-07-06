import { useState } from 'react';

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  return (
    <>
      {/* titulo */}
      <h1>GiftExpertApp</h1>

      {/* Input */}

      {/* Listado de gift */}
      <ol>
        {/* Gift Item */}
        { categories.map(category => {
          return <li key={category}>{category}</li>
        }) }
      </ol>

    </>
  );
}