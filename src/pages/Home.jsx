import React from 'react'
import { Categories, SortPopup, Charts } from '../components';
import { useSelector, useDispatch } from 'react-redux'
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchDb } from '../redux/actions/db';

const sortItems = [
  { name: '10', type:'10', order: 'asc'}, 
  { name:'50', type:'50', order: 'asc'}, 
  { name: '100', type:'100', order: 'asc'}, 
  { name: '200', type:'200', order: 'asc'}, 
  { name: '500', type:'500', order: 'asc'}, 
  { name: '1000', type:'1000', order: 'asc'}, 
];

const categoryNames = [ 
  { name: 'Sort by id', type:'transaction_id', order: 'asc'}, 
  { name: 'Sort by date', type:'date', order: 'asc'}, 
  { name: 'Sort by debit', type:'debitAmount', order: 'asc'}, 
  { name: 'Sort by credit', type:'creditAmount', order: 'asc'}, 
  { name: 'Sort by sender', type:'sender', order: 'asc'}, 
  { name: 'Sort by reciver', type:'receiver', order: 'asc'}, 
];


function Home() {

  const dispatch = useDispatch();
  const { items, sortBy, isLoaded, category  } = useSelector(({db, filters}) => {
    return{
      items: db.items,
      sortBy: filters.sortBy,
      isLoaded: db.isLoaded,
      category: filters.category,
    }
  });

  React.useEffect(() => {
      dispatch(fetchDb(category, sortBy));
  },[category, sortBy])

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  },[]);

  const onSelectSortType = React.useCallback((key) => {
    dispatch(setSortBy(key));
  },[]);

  return (
    <div className='container'>
      <div className="main">
        
        <Charts/>

        <div className="main__top">

          <SortPopup 
            activeSortType={sortBy.type}
            items={sortItems}
            onClickSortType={onSelectSortType}/>

        </div>

        {isLoaded ? <div className="main__table">
          <table className="table">
              <thead>
                <tr>
                  <Categories 
                    activeCategory={category}
                    items={categoryNames}
                    onClickCategory={onSelectCategory}/>
                </tr>
              </thead>
              <tbody>
              {isLoaded && items.map((item, index)=>{
                  return(
                      <tr key={item.transaction_id} className={index}>
                          <td>{item.transaction_id}</td>
                          <td>{item.date}</td>
                          <td>{item.debitAmount}</td>
                          <td>{item.creditAmount}</td>
                          <td>{item.sender.first} {item.sender.last}</td>
                          <td>{item.receiver.first} {item.receiver.last}</td>
                      </tr>
                  )})
               }
              </tbody>
          </table>
        </div>: null }
      </div>
    </div>
  )
}

export default Home
