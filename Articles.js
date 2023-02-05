import React from 'react'

function Articles({items}) {
    
    return (
        <>
            {items.results && items.results.map(item => {
                return ( 
                <div style={{padding: '10px'}}>
                    <div>Naslov:{item.title}</div>
                    <div>Opis:{item.abstract}</div>
                </div>
            )
            })}
        </>
    )
}

export default Articles