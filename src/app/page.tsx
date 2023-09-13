import Hero from './component/views/Hero'
import Promotions from './component/views/Promotions'
import Jewellery from './component/views/Jewellery'
import News from './component/views/News'
import ProductCarousel from './component/views/ProductCarousel'

export default async function Home() {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Promotions />
      <ProductCarousel />
      <Jewellery />
      <News />
    </div>
  )
}
