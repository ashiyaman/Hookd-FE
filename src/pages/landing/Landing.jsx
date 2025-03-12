import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchCategories, fetchCategoryById } from './landingSlice'
import { fetchAccessories } from '../../features/accessories/accessorySlice'

const Landing = () => {
    const dispatch = useDispatch()
    const {categories, selctedCategory, status, error} = useSelector(state => state.categories)

    useEffect(() => {
        dispatch(fetchCategories())
    }, [])    

    const categoryClickHandler = (categoryId) => {
        console.log('...here...', categoryId)
        dispatch(fetchCategoryById(categoryId))
        selctedCategory && dispatch(fetchAccessories)
    }

   return ( 
    <main className='container'>
        {categories && 
        <>
            <h6 className='text-uppercase fw-semibold py-3'>popular categories</h6>
            <div className='row row-cols-sm-5 row-cols-2 g-2'>
                
                {categories.map(category => (
                    <Link onClick={() => categoryClickHandler(category._id)} className='col text-decoration-none' key={category._id}>
                        <img src={category.image} 
                            className='img-fluid rounded' 
                            style={{height: '20vh', width: 'auto', objectFit: 'cover'}}
                            alt={category.name}/>
                        <p className='fw-semibold text-light'>{category.name}</p>
                    </Link>
                ))}
            </div>
        </>
        }
        <section className='py-5'>
            <img className='img-fluid' src='../images/hero_image1.jpg'/>
        </section>
    </main>
   )
}

export default Landing