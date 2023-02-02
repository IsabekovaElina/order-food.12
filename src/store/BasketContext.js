import React, { createContext, useState } from 'react'

const BasketContext = createContext({
    items:[],

})

 export const BasketProvider = () =>{

    const [items, setItems] = useState([])
const addToBasket = (item) =>{
setItems(prevState => {
    return [...prevState,item]
})
}

return <BasketContext.Provider value={items}>

</BasketContext.Provider>
}