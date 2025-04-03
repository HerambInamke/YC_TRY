import { Package } from '../../types/Package'

interface PackageCardProps extends Package {
  onMoreInfoClick: () => void
}

export default function PackageCard({
  image,
  concertName,
  artistName,
  timeRange,
  locationDetails,
  hotelName,
  hotelDetails,
  onMoreInfoClick,
}: PackageCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div
        className="aspect-video bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold">{concertName}</h3>
          <p className="text-festival-purple">{artistName}</p>
        </div>
        
        <div className="space-y-2 text-sm text-gray-600">
          <p>{timeRange}</p>
          <p>{locationDetails}</p>
        </div>
        
        <div className="pt-4 border-t">
          <h4 className="font-medium mb-2">{hotelName}</h4>
          <p className="text-sm text-gray-600">{hotelDetails}</p>
        </div>
        
        <button
          onClick={onMoreInfoClick}
          className="w-full py-3 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition-colors"
        >
          MORE INFO
        </button>
      </div>
    </div>
  )
}