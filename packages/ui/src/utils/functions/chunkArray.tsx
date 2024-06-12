import React from 'react' // Only necessary if you are using JSX in the same file.

/**
 * Breaks an array into chunks of a specified size.
 * @param array - The array to be chunked.
 * @param size - The size of each chunk.
 * @returns An array containing the chunked arrays.
 */
function chunkArray<T>(array: T[], size: number): T[][] {
  const chunked: T[][] = []
  for (let i = 0; i < array.length; i += size) {
    chunked.push(array.slice(i, i + size))
  }
  return chunked
}

export default chunkArray
