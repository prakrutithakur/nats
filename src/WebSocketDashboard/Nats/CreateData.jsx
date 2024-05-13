import { useState, useMemo } from "react";
import { GetTableHeader } from "@/utils/helpers";

const CreateTableData = () => {
  const [sort, setSort] = useState();

  const sortData = (props) => {
    setSort(props);
  };

  const columns = useMemo(
    () => [
      {
        Header: (props) => (
          <GetTableHeader
            item={props}
            headerName={"code"}
            key={"code"}
            onClick={() => sortData(props)}
          />
        ),
        accessor: "code",
        disableGlobalFilter: true,
      },
      {
        Header: (props) => (
          <GetTableHeader
            item={props}
            headerName={"date"}
            key={"date"}
            onClick={() => sortData(props)}
          />
        ),
        accessor: "date",
        disableGlobalFilter: true,
      },
      {
        Header: (props) => (
          <GetTableHeader
            item={props}
            headerName={"index"}
            key={"index"}
            onClick={() => sortData(props)}
          />
        ),
        accessor: "index",
        disableGlobalFilter: true,
      },
      {
        Header: (props) => (
          <GetTableHeader
            item={props}
            headerName={"occurence"}
            key={"occurence"}
            onClick={() => sortData(props)}
          />
        ),
        accessor: "occurence",
        disableGlobalFilter: true,
      },
      {
        Header: (props) => (
          <GetTableHeader
            item={props}
            headerName={"time"}
            key={"time"}
            onClick={() => sortData(props)}
          />
        ),
        accessor: "time",
        disableGlobalFilter: true,
      },
    ],
    []
  );

  const columns2 = useMemo(
    () => [
      {
        Header: (props) => (
          <GetTableHeader
            item={props}
            headerName={"timestamp"}
            key={"timestamp"}
            onClick={() => sortData(props)}
          />
        ),
        accessor: "timestamp",
        disableGlobalFilter: true,
      },
      {
        Header: (props) => (
          <GetTableHeader
            item={props}
            headerName={"lat"}
            key={"lat"}
            onClick={() => sortData(props)}
          />
        ),
        accessor: "lat",
        disableGlobalFilter: true,
      },
      {
        Header: (props) => (
          <GetTableHeader
            item={props}
            headerName={"lon"}
            key={"lon"}
            onClick={() => sortData(props)}
          />
        ),
        accessor: "lon",
        disableGlobalFilter: true,
      },
      {
        Header: (props) => (
          <GetTableHeader
            item={props}
            headerName={"alt"}
            key={"alt"}
            onClick={() => sortData(props)}
          />
        ),
        accessor: "alt",
        disableGlobalFilter: true,
      },
    ],
    []
  );

  const reactTableData = {
    tableHeaderData: columns,
    sort,
  };
  return reactTableData;
};

export default CreateTableData;
