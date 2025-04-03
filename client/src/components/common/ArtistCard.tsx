import { Artist } from '../../types/Artist'
import { HeartIcon as HeartOutline } from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid'

interface ArtistCardProps extends Artist {
  onFavoriteToggle?: () => void
}

export default function ArtistCard({
  image,
  name,
  colorDot,
  isFavorite,
  onFavoriteToggle,
}: ArtistCardProps) {
  const dotColors = {
    red: 'bg-red-500',
    blue: 'bg-blue-500',
    yellow: 'bg-yellow-500',
  }

  return (
    <div className="group relative aspect-square rounded-lg overflow-hidden bg-white shadow-md">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      
      {/* Color Dot */}
      <div
        className={`absolute top-4 right-4 w-3 h-3 rounded-full ${dotColors[colorDot]}`}
      />
      
      {/* Favorite Button */}
      {onFavoriteToggle && (
        <button
          onClick={onFavoriteToggle}
          className="absolute top-4 left-4 text-white hover:scale-110 transition-transform"
        >
          {isFavorite ? (
            <HeartSolid className="w-6 h-6 text-red-500" />
          ) : (
            <HeartOutline className="w-6 h-6" />
          )}
        </button>
      )}
      
      {/* Artist Name */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-white text-lg font-semibold">{name}</h3>
      </div>
    </div>
  )
}