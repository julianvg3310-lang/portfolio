'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function GalleryTab({ photos }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map(photo => (
          <div
            key={photo.id}
            onClick={() => setSelectedPhoto(photo)}
            className="cursor-pointer overflow-hidden rounded bg-gray-200 aspect-square hover:opacity-80 transition-opacity"
          >
            <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
              <span className="text-gray-500 text-lg">{photo.title}</span>
            </div>
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-2xl w-full" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute -top-10 right-0 text-white text-2xl"
            >
              ✕
            </button>
            <div className="bg-gray-200 w-full aspect-square rounded flex items-center justify-center">
              <span className="text-gray-500 text-xl">{selectedPhoto.title}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
