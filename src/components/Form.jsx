import React, { useState } from 'react'
import { useDocs } from '../context/DocsContext'

const Form = ({ onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    isDownload: '',
    color: '#10b981',
    dataAmount: '',
    progress: 0
  })

  const { addDocs } = useDocs()

  const handleInputChange = (e) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? parseInt(value) || 0 : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validate required fields
    if (!formData.title.trim()) {
      alert('Please enter a title')
      return
    }
    
    if (!formData.isDownload) {
      alert('Please select if download button is needed')
      return
    }

    if (!formData.dataAmount.trim()) {
      alert('Please enter data amount')
      return
    }

    // Add the document
    addDocs(
      formData.isDownload === 'Yes',
      formData.progress,
      formData.color,
      formData.dataAmount,
      formData.title
    )

    // Reset form
    setFormData({
      title: '',
      isDownload: '',
      color: '#10b981',
      dataAmount: '',
      progress: 0
    })

    // Close form automatically after successful creation
    onClose()
  }

  const handleCancel = () => {
    // Reset form
    setFormData({
      title: '',
      isDownload: '',
      color: '#10b981',
      dataAmount: '',
      progress: 0
    })
    
    onClose()
  }

  const handleBackdropClick = (e) => {
    // Close form when clicking outside the modal
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div 
      className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4'
      onClick={handleBackdropClick}
    >
      <div className='bg-zinc-700 rounded-lg shadow-2xl w-full max-w-md max-h-[90vh] flex flex-col relative'>
        {/* Close Button */}
        <button 
          onClick={onClose}
          className='absolute top-4 right-4 text-white hover:text-red-400 text-2xl font-bold transition-colors z-10'
          type="button"
        >
          ×
        </button>

        <div className='p-4 sm:p-6'>
          <h2 className='text-white text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center pr-8'>Create New Document</h2>
          
          <form onSubmit={handleSubmit} className='space-y-3 sm:space-y-4'>
            {/* Title Input */}
            <div>
              <label htmlFor="title" className='block text-white text-lg sm:text-xl mb-1 sm:mb-2'>
                Document Title <span className='text-red-400'>*</span>
              </label>
              <input 
                type="text" 
                id='title'
                name='title'
                value={formData.title}
                onChange={handleInputChange}
                placeholder='Enter document title' 
                className='w-full bg-zinc-900 text-sm sm:text-lg text-white placeholder:text-zinc-500 py-2 sm:py-3 px-3 sm:px-4 rounded-lg border-2 border-zinc-600 focus:border-zinc-400 focus:outline-none transition-colors'
                required
              />
            </div>

            {/* Download Option */}
            <div>
              <label htmlFor="isDownload" className='block text-white text-lg sm:text-xl mb-1 sm:mb-2'>
                Needs Download Button? <span className='text-red-400'>*</span>
              </label>
              <select 
                id='isDownload'
                name='isDownload'
                value={formData.isDownload}
                onChange={handleInputChange}
                className='w-full bg-zinc-900 text-sm sm:text-lg text-white py-2 sm:py-3 px-3 sm:px-4 rounded-lg border-2 border-zinc-600 focus:border-zinc-400 focus:outline-none transition-colors'
                required
              >
                <option value="">Select option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            {/* Data Amount */}
            <div>
              <label htmlFor="dataAmount" className='block text-white text-lg sm:text-xl mb-1 sm:mb-2'>
                Data Amount <span className='text-red-400'>*</span>
              </label>
              <input 
                type="text" 
                id='dataAmount'
                name='dataAmount'
                value={formData.dataAmount}
                onChange={handleInputChange}
                placeholder='e.g., 1.5 MB, 250 KB' 
                className='w-full bg-zinc-900 text-sm sm:text-lg text-white placeholder:text-zinc-500 py-2 sm:py-3 px-3 sm:px-4 rounded-lg border-2 border-zinc-600 focus:border-zinc-400 focus:outline-none transition-colors'
                required
              />
            </div>

            {/* Progress */}
            <div>
              <label htmlFor="progress" className='block text-white text-lg sm:text-xl mb-1 sm:mb-2'>
                Progress (0-100)
              </label>
              <input 
                type="range" 
                id='progress'
                name='progress'
                min="0"
                max="100"
                value={formData.progress}
                onChange={handleInputChange}
                className='w-full h-2 sm:h-3 bg-zinc-900 rounded-lg appearance-none cursor-pointer slider'
              />
              <div className='flex justify-between text-zinc-400 text-xs sm:text-sm mt-1'>
                <span>0%</span>
                <span className='text-white font-semibold'>{formData.progress}%</span>
                <span>100%</span>
              </div>
            </div>

            {/* Color Picker */}
            <div>
              <label htmlFor="color" className='block text-white text-lg sm:text-xl mb-1 sm:mb-2'>
                Accent Color
              </label>
              <div className='flex items-center gap-2 sm:gap-3'>
                <input 
                  type="color" 
                  id='color'
                  name='color'
                  value={formData.color}
                  onChange={handleInputChange}
                  className='w-12 h-8 sm:w-16 sm:h-10 bg-zinc-900 rounded-lg border-2 border-zinc-600 cursor-pointer'
                />
                <span className='text-white text-xs sm:text-sm font-mono bg-zinc-900 px-2 sm:px-3 py-1 sm:py-2 rounded-lg'>
                  {formData.color}
                </span>
              </div>
            </div>
          </form>
        </div>

        {/* Action Buttons */}
        <div className='flex gap-2 sm:gap-3 p-4 sm:p-6 pt-0 sm:pt-4 border-t border-zinc-600 mt-4'>
          <button 
            type="button"
            onClick={handleCancel}
            className='flex-1 bg-zinc-600 hover:bg-zinc-500 text-white text-sm sm:text-lg font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors'
          >
            Cancel
          </button>
          <button 
            type="submit"
            onClick={handleSubmit}
            className='flex-1 bg-green-600 hover:bg-green-500 text-white text-sm sm:text-lg font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors'
          >
            Create Document
          </button>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #10b981;
          cursor: pointer;
          border: 2px solid #ffffff;
        }
        
        .slider::-moz-range-thumb {
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #10b981;
          cursor: pointer;
          border: 2px solid #ffffff;
        }

        @media (min-width: 640px) {
          .slider::-webkit-slider-thumb {
            height: 20px;
            width: 20px;
          }
          
          .slider::-moz-range-thumb {
            height: 20px;
            width: 20px;
          }
        }
      `}</style>
    </div>
  )
}

export default Form