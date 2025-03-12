import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAccessories } from '../features/accessories/accessorySlice'

const Landing = () => {
    const dispatch = useDispatch()
    const {accessories, status, error} = useSelector(state => state.accessories)

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

export default Landing