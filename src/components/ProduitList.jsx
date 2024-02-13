import React from 'react'
import Produit from './Produit'

function ProduitList() {
    return (
        <div style={{display:"flex", justifyContent:"space-between", flexWrap:"wrap"}}>
            <Produit />
            <Produit />
            <Produit />
            <Produit />
            <Produit />
            <Produit />
            <Produit />
            <Produit />
            <Produit />
        </div>
    )
}

export default ProduitList