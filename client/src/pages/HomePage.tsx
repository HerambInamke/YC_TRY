import ExploreSection from '../components/sections/ExploreSection'
import FeaturedTextSection from '../components/sections/FeaturedTextSection'
import BestSellerSection from '../components/sections/BestSellerSection'
import PackagesSection from '../components/sections/PackagesSection'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gradient-to-br from-festival-purple/20 to-white flex items-center">
        <div className="container">
          <div className="max-w-2xl">
            <h1 className="text-6xl font-bold mb-6">
              MUSIC FESTIVAL 2024
            </h1>
            <p className="text-xl mb-8">
              Experience the ultimate music festival with world-class artists
              <span className="block mt-2 text-festival-purple font-semibold">
                20-21 AUGUST 2024
              </span>
            </p>
          </div>
        </div>
        
        {/* Circular design element */}
        <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-radial from-festival-purple/30 to-transparent" />
      </section>

      <ExploreSection />
      <FeaturedTextSection />
      <BestSellerSection />
      <PackagesSection />
    </div>
  )
}