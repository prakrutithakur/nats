import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import {
  Card,
  CardBody,
  // CardTitleWrap,
  // CardTitle,
} from "@/shared/components/Card";
import { Button } from "@/shared/components/Button";
import ReactTableBase from "@/shared/components/table/ReactTableBase";
// import TableNoData from "@/shared/components/TableNoData";
import CreateTableData from "./CreateData";

const Listing = ({ data }) => {
  const reactTableData = CreateTableData();
  const [isSortable, setIsSortable] = useState(true);
  const [isResizable, setIsResizable] = useState(false);
  const [withPagination, setWithPaginationTable] = useState(true);
  const [numberofRecords, setNumberofRecords] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);

  const tableConfig = {
    isSortable,
    isResizable,
    withPagination,
    manualPageSize: [10, 20, 30, 40],
  };

  const pagination = {
    totalPages: 0,
    totalRecords: 0,
  };

  const fetchApiData = (pageIndex, pageSize) => {
    setNumberofRecords(pageSize);
    // dispatch(getNotificationList(pageIndex + 1, pageSize, reactTableData.sort));
  };

  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} md={12}>
          <Card>
            <CardBody>
              <ReactTableBase
                columns={reactTableData.tableHeaderData}
                data={data || []}
                tableConfig={tableConfig}
                paginationDetail={pagination}
                loading={false}
                fetchData={fetchApiData}
                dashboardType={"Diagnostics"}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Listing;
