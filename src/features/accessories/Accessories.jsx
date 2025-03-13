import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAccessories } from './accessorySlice'

const Accessories = () => {
    const dispatch = useDispatch()
    
    const {selectedCategory} = useSelector(state => state.category)
    const {accessories, status, error} = useSelector(state => state.accessories)

    console.log('in accessories', selectedCategory)

    useEffect(() => {
        dispatch(fetchAccessories())
    }, [])
    return (
        <>
            <h1>Landing</h1>
           
                {accessories && 
                    <div className='row'>
                        {accessories.map(accessory => {
                            console.log(accessory)
                            return (
                                <div className='card col-md-3'> 
                                    <p>{accessory.name} - </p>
                                    <p>{accessory.description} - </p>
                                    <p>{accessory.category}</p>
                                    <p>{accessory.age}</p>
                                </div>
                            )
                        })}
                    </div>
                }
            
        </>
    )
}

export default Accessories