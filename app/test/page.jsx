import React from 'react'
import { addBadgeGroup } from '@/actions/posts/main'

const RamdomPage = () => {


  return (
    <div className='w-full flex items-center justify-center min-h-screen'>

      <div class="max-w-lg mx-auto p-6 bg-zinc-800 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4 text-white">Add Badge Group</h2>
        <p class="text-gray-400 mb-6">Fill out the form to add a new badge group.</p>

        <form action={addBadgeGroup} class="space-y-4">
          <div>
            <label for="title" class="block text-sm font-medium text-gray-300">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              class="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-white"
              placeholder="Enter the title"
              required
            />
          </div>

          <div>
            <label for="description" class="block text-sm font-medium text-gray-300">Description</label>
            <textarea
              id="description"
              name="description"
              rows="3"
              class="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-white"
              placeholder="Enter the description"
              required
            ></textarea>
          </div>

          <div>
            <label for="badgeType" class="block text-sm font-medium text-gray-300">Badge Type</label>
            <select
              id="badgeType"
              name="badgeType"
              class="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-white"
              required
            >
              <option value="" class="text-gray-400">Select a badge type</option>
              <option value="gold" class="text-white">Gold</option>
              <option value="silver" class="text-white">Silver</option>
              <option value="bronze" class="text-white">Bronze</option>
            </select>
          </div>

          <div>
            <button
              type="submit"
              class="w-full bg-zinc-200 text-black py-2 px-4 rounded-md shadow-sm hover:bg-zinc-300 focus:ring-2 focus:ring-indigo-500"
            >
              Send
            </button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default RamdomPage