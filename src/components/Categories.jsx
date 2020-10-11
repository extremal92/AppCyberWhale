import React from 'react'

const Categories = React.memo(function Categories({ activeCategory, items, onClickCategory }) {

    return (
        <>

                {/* <li className={ activeCategory === null ? 'active' : '' }
                onClick={ () => onClickCategory (null) }>
                    Все
                </li> */}
                { items && items.map((item, key)=>(
                    // <li 
                    //     onClick={ () => onClickCategory (item.type) }
                    //     key={`${item}_${key}`}
                    // >
                    //     {item.name}
                    // </li>
                    <th scope="col main__table-sort" key={`${item}_${key}`}>
                        <button onClick={ () => onClickCategory (item.type) }>
                        {item.name}<i className="fa fa-long-arrow-down" aria-hidden="true"></i>
                        </button>
                    </th>
                ))}
  
        </>
    )
})


export default Categories;
