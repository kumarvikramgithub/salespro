import {useState} from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
} from "@tanstack/react-table";
// import EditableCell from './EditableCell';

const AutoSelectRowTable = ({DATA,columns}) => {
  const [data, setData] = useState(DATA);
  
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    meta: {
      updateData: (rowIndex, columnId, value) =>
        setData((prev) =>
          prev.map((row, index) =>
            index === rowIndex ? { ...prev[rowIndex], [columnId]: value } : row
          )
        ),
    },
    getPaginationRowModel: getPaginationRowModel(), //load client-side pagination code
    autoResetPageIndex: true, //turn off auto reset of pageIndex
  });


  const [selectedRowIndex, setSelectedRowIndex] = useState(0);
  const handleKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      setSelectedRowIndex((prev) =>
        prev === 0
          ? 1
          : Math.min(prev + 1, table.getState().pagination.pageSize - 1)
      );
    } else if (event.key === "ArrowUp") {
      setSelectedRowIndex((prev) =>
        prev === 0 ? 0 : Math.max(prev - 1, 0)
      );

    }
    else if(event.key === "Enter") {
      console.log(data[selectedRowIndex]);
    }
  };
  
  return (
    <div tabIndex={0} onKeyDown={(e) => handleKeyDown(e)}>
      <table className="Table">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => {
            return (
              <tr key={headerGroup.id} className="flex">
                {headerGroup.headers.map(
                  (
                    header // map over the headerGroup headers array
                  ) => (
                    <th
                      key={header.id}
                      className={header.column.columnDef.meta?.headerClassName}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </th>
                  )
                )}
              </tr>
            );
          })}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row, index) => (
            <tr
              key={row.id}
              className={`row flex ${
                index === selectedRowIndex ? "selectedRowBg" : ""
              }`}
            >
              {row.getVisibleCells().map((cell) => {
                return (
                  <td
                    // style={{width: '100%', border:'1px solid gray',margin: 0, padding: 5}}
                    className={cell.column.columnDef.meta?.cellClassName}
                    key={cell.id}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ textAlign: "center", marginTop: 5 }}>
        <button
          className="BtnPagination"
          onClick={() => table.firstPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {"<<"}
        </button>
        <button
          className="BtnPagination"
          style={{ margin: "5px 10px" }}
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {"<"}
        </button>
        <button
          className="BtnPagination"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {">"}
        </button>
        <button
          className="BtnPagination"
          onClick={() => table.lastPage()}
          disabled={!table.getCanNextPage()}
        >
          {">>"}
        </button>

        <select
          className="BtnPagination"
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default AutoSelectRowTable;

// Explanation
// State Management: The useState hook initializes selectedRow to null. This state will hold the ID of the currently selected row.
// Event Handling: The handleRowClick function updates the selectedRow state with the ID of the clicked row.
// Conditional Styling: The style attribute in the <tr> element changes the background color based on whether the row is selected.

// This example provides a basic implementation. You can further customize it by adding more features like keyboard navigation, multi-select, or integrating with other components. If you need more advanced functionality, consider using libraries like react-table or material-ui which offer built-in support for row selection and other table features.
