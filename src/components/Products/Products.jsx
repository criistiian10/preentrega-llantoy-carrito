import React from 'react'


const Products = () => {
  const db = getFirestore();

  const itemRef = doc(db, "juegos", "DSnrHYh3Hdo5Io9oYMcQ")
  getDoc (itemRef).then((documento) => {
    console.log(documento.data())
  })
}

export default Products
