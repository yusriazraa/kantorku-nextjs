import React from "react";
import DataTable from "react-data-table-component";

const ExpandedComponent = ({ data }) => (
  <pre>{JSON.stringify(data, null, 2)}</pre>
);
const TableRapat = ({ props }) => {
  const [selectedRows, setSelectedRows] = React.useState(false);
  //   const [toggledClearRows, setToggleClearRows] = React.useState(false);

  const handleChange = ({ selectedRows }) => {
    // You can set state or dispatch with something like Redux so we can use the retrieved data
    console.log("Selected Rows: ", selectedRows);
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
  ];

  const data = [
    {
      id: 1,
      judulRapat: "Rapat Internal",
      ruangan: "R. Aula",
      jadwal: "19-November-2001",
    },
    {
      id: 2,
      judulRapat: "Rapat Internal",
      ruangan: "R. Aula",
      jadwal: "19-November-2001",
    },
    {
      id: 3,
      judulRapat: "Rapat Internal",
      ruangan: "R. Aula",
      jadwal: "19-November-2001",
    },
    {
      id: 4,
      judulRapat: "Rapat Internal",
      ruangan: "R. Aula",
      jadwal: "19-November-2001",
    },
  ];
  return (
    <DataTable
      columns={columns}
      data={data}
      expandableRows
      expandableRowsComponent={ExpandedComponent}
      selectableRows
      onSelectedRowsChange={handleChange}
      pagination
    />
  );
};

export default TableRapat;
