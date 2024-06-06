import React from "react";
import DataTable from "react-data-table-component";
import { saveAs } from "file-saver";

const ExpandedComponent = ({ data }) => (
  <pre>{JSON.stringify(data, null, 2)}</pre>
);

const TableRapat = ({ dataset }) => {
  const [selectedRows, setSelectedRows] = React.useState(false);

  const handleChange = ({ selectedRows }) => {
    console.log("Selected Rows: ", selectedRows);
  };

  const handleEdit = (row) => {
    console.log("Edit row:", row);
    // Implement your edit logic here
  };

  const handleDelete = (row) => {
    console.log("Delete row:", row);
    // Implement your delete logic here
  };

  const handlePrint = () => {
    const rows = dataset.map((data) => ({
      "Judul Rapat": data.judulRapat,
      Ruangan: data.ruangan,
      Jadwal: data.jadwal,
    }));

    const csv = [
      Object.keys(rows[0]).join(","),
      ...rows.map((row) => Object.values(row).join(",")),
    ].join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    saveAs(blob, "table.csv");
  };

  const columns = [
    {
      name: "Judul Rapat",
      selector: (row) => row.judulRapat,
    },
    {
      name: "Ruangan",
      selector: (row) => row.ruangan,
    },
    {
      name: "Jadwal",
      selector: (row) => row.jadwal,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex gap-2">
          <button
            onClick={() => handleEdit(row)}
            className="btn btn-xs btn-success rounded-lg shadow-md text-white"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(row)}
            className="btn btn-xs btn-error rounded-lg shadow-md text-white"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="mb-4 flex justify-between w-full items-center">
        <h1 className="text-lg font-semibold">Jadwal Rapat</h1>
        <button
          onClick={handlePrint}
          className="btn btn-xs btn-primary rounded-lg shadow-md text-white"
        >
          Print
        </button>
      </div>
      <DataTable
        columns={columns}
        data={dataset}
        expandableRows
        expandableRowsComponent={ExpandedComponent}
        selectableRows
        onSelectedRowsChange={handleChange}
        pagination
      />
    </>
  );
};

export default TableRapat;
