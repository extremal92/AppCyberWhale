import React from 'react'

const Categories = React.memo(function Categories({ activeCategory, items, onClickCategory }) {

    return (
        <>

            { items && items.map((item, key)=>(
                <th 
                    scope="col" 
                    className={ activeCategory === item.type ? ' main__table-sort active' : 'main__table-sort' }
                    key={`${item}_${key}`}>
                    <button 
                        onClick={ () => onClickCategory (item.type) }>
                        {item.name}<i className="fa fa-long-arrow-down" aria-hidden="true"></i>
                    </button>
                </th>
            ))}
        </>
    )
})


export default React.memo(Categories);
