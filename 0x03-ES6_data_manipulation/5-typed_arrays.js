export default function createInt8TypedArray(length, position, value) {
  // Create an ArrayBuffer of the specified length
  const buffer = new ArrayBuffer(length);

  // Create a DataView to manipulate the buffer
  const view = new DataView(buffer);

  // Check if the position is within the valid range of the buffer
  if (position >= length) {
    throw new Error('Position outside range');
  }

  // Set the Int8 value at the specified position
  view.setInt8(position, value);

  // Return both the DataView and the ArrayBuffer
  return { view };
}
