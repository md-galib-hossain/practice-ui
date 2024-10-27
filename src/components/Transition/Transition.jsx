
const Transition = () => {
  return (
    <div className="p-4 border rounded-md shadow-md">
    <h2 className="text-lg font-semibold mb-2">Hover to Expand Example</h2>
    <div
      className="overflow-hidden transition-all duration-500 ease-in-out bg-blue-100 p-4 rounded-md max-h-10 hover:max-h-40"
    >
      <p>This box expands smoothly when you hover over it.</p>
      <p className="mt-2">
        Additional content visible only when the box is expanded! This makes the hover effect smoother and more visually appealing.
      </p>
    </div>
  </div>
  )
}

export default Transition