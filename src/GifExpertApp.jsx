import React from 'react'
import { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState( ['One Punch', 'Dragon Ball'] );

  const onAddCategory = ( newCategory ) => {

    if ( categories.includes( newCategory )  ) return;

    // categories.push('Valorant!!!!!');
    // setCategories([ ...categories, 'Valorant' ])
    setCategories( [newCategory, ...categories ] );

  }

  return (
      <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
          <AddCategory 
          // setCategories= { setCategories }
            onNewCategory= { event => onAddCategory(event) }
          />

        {/* Listado de Gif */}
        
        <ol>
          { categories.map( category => {
            return <li key={ category }>{ category }</li>
            } ) 
          }
        </ol>
            {/* Gif item */}
      </>
  )
}
