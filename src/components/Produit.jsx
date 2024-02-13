import React from 'react'

function Produit() {
  return (
    <>
        <div style={{width:"300px", border:"5px solid black", margin:"10px", borderRadius:"15px", boxShadow:"10px 10px 20px grey"}}>
            <img style={{width:"100%"}} src="/airpods.png" alt="" />
            <div style={{display:"flex", justifyContent:"space-between", padding:"30px"}}>
                <div style={{backgroundColor:"blue", color:'white', padding:'5px', borderRadius:'5px'}}>Afficher</div>
                <div style={{backgroundColor:"red", color:'white', padding:'5px', borderRadius:'5px'}}>Supprimer</div>
                <div style={{backgroundColor:"green", color:'white', padding:'5px', borderRadius:'5px'}}>Modifier</div>
            </div>
        </div>
    </>
  )
}

export default Produit