const Overflow = () => {
  return (
    <div className="p-4 border rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-2">Overflow Example</h2>
      <div className="border h-32 w-64 p-2 overflow-hidden hover:overflow-y-scroll transition-all duration-300 bg-gray-100">
        <p>
          This box has overflow set to hidden. When you hover over it, the
          overflow will change to scroll, allowing you to see more content
          inside the box. It’s great for hiding content in fixed-size
          containers.
        </p>
        <p>
          Additional content here...scroll to see it! Additional content
          here...scroll to see it! Additional content here...scroll to see it!
        </p>
      </div>
    </div>
  );
};

export default Overflow;
