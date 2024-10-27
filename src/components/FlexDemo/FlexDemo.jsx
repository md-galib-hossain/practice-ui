
const FlexDemo = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col gap-8">
    {/* Flex Example */}
    <div className="p-4 border rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4">Flex Example</h2>
      <p className="mb-2">
        The `flex` display type makes elements behave like a block-level container, taking up the full width of the parent, with the ability to align items flexibly.
      </p>
      <div className="flex gap-2 bg-blue-100 p-4 rounded-md">
        <div className="p-4 bg-blue-300 rounded-md">Item 1</div>
        <div className="p-4 bg-blue-300 rounded-md">Item 2</div>
        <div className="p-4 bg-blue-300 rounded-md">Item 3</div>
      </div>
    </div>

    {/* Inline-Flex Example */}
    <div className="p-4 border rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4">Inline-Flex Example</h2>
      <p className="mb-2">
        The `inline-flex` display type makes elements behave like inline elements, allowing them to align side-by-side without taking up the full width.
      </p>
      <div className="inline-flex gap-2 bg-green-100 p-4 rounded-md">
        <div className="w-[200px] p-4 bg-green-300 rounded-md">Item 1</div>
        <div className="p-4 bg-green-300 rounded-md">Item 2</div>
        <div className="p-4 bg-green-300 rounded-md">Item 3</div>
      </div>
    </div>
  </div>

  )
}

export default FlexDemo