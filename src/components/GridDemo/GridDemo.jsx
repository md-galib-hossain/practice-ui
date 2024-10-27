const GridDemo = () => {
    return (
      <div className="container mx-auto p-4 flex flex-col gap-8">
        
        {/* Grid Example */}
        <div className="p-4 border rounded-md shadow-md">
          <h2 className="text-lg font-semibold mb-4">CSS Grid Example</h2>
          <p className="mb-2">
            The `grid` display type allows you to create a layout with defined rows and columns.
          </p>
          <div className="grid grid-cols-3 gap-4 bg-blue-100 p-4 rounded-md">
            <div className="p-4 bg-blue-300 rounded-md">Item 1</div>
            <div className="p-4 bg-blue-300 rounded-md">Item 2</div>
            <div className="p-4 bg-blue-300 rounded-md">Item 3</div>
            <div className="p-4 bg-blue-300 rounded-md">Item 4</div>
            <div className="p-4 bg-blue-300 rounded-md">Item 5</div>
            <div className="p-4 bg-blue-300 rounded-md">Item 6</div>
          </div>
        </div>
  
        {/* Subgrid Example */}
        <div className="p-4 border rounded-md shadow-md">
          <h2 className="text-lg font-semibold mb-4">CSS Subgrid Example</h2>
          <p className="mb-2">
            The `subgrid` display type lets nested grid containers align to the parent grids columns and rows.
          </p>
          <div className="grid grid-cols-3 gap-4 bg-green-100 p-4 rounded-md">
            {/* First Row - Parent Grid */}
            <div className="col-span-3 bg-green-200 p-4 rounded-md">
              Parent Item 1 (col-span 3)
            </div>
  
            {/* Second Row with Subgrid */}
            <div className="grid grid-cols-2 gap-2 col-span-3 bg-green-200 p-2 rounded-md">
              <div className="bg-green-300 p-4 rounded-md">Subgrid Item 1</div>
              <div className="bg-green-300 p-4 rounded-md">Subgrid Item 2</div>
            </div>
  
            {/* Third Row - Parent Grid */}
            <div className="col-span-3 bg-green-200 p-4 rounded-md">
              Parent Item 2 (col-span 3)
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default GridDemo;
  