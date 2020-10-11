import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import ReactApexChart from 'react-apexcharts'

import { fetchChart } from '../redux/actions/chart';



function Charts() {

    const dispatch = useDispatch();
    const items = useSelector(({ chart }) => chart.items);
    const isLoaded = useSelector(({ chart }) => chart.isLoaded);

    React.useEffect(() => {
        dispatch(fetchChart());
    }, []);


    return (
        <div className='main__chart'>
            <div className='container'>
                
                <div className='main__chart-items'>
                    {isLoaded && items.map((item, key)=>{
                        return(
                            <ReactApexChart options={item.options} series={item.series} type={item.options.chart.type} width={item.options.chart.width} key={key}/>
                        )})
                    }
                </div>
    
            </div>
        </div>
    )
}

export default Charts;
