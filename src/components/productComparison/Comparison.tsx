import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import axios from "axios";

const columns: GridColDef[] = [
  { field: "product_name", headerName: "product_name", width: 70 },
  { field: "category_id", headerName: "category_id", width: 130 },
  { field: "price", headerName: "price", width: 130 },
//   {
//     field: "age",
//     headerName: "Age",
//     type: "number",
//     width: 90,
//   },
//   {
//     field: "fullName",
//     headerName: "Full name",
//     description: "This column has a value getter and is not sortable.",
//     sortable: false,
//     width: 160,
//     valueGetter: (params: GridValueGetterParams) =>
//       `${params.row.firstName || ""} ${params.row.lastName || ""}`,
//   },
];


interface Rows {
    product_name: string;
    category_id: number;
    price: number
}
const rowsTable: Rows[]
// interface Product {
//     product_name: string;
//     product_image_url: string;
//     description: string;
//     category_id: string;
//     price: number;
//     stock_quantity: number;
//     view: number;
//   }

const getProducts = async ()=>{
const response = await axios.get("")
// const rows = [{product_name: "hkjhk",
//     category_id: 7,
//     price: 7},{product_name: "hkjhk",
//     category_id: 7,
//     price: 7}]
const rows = {response.data.product_name, response.data.category_id , response.data.price} 
rowsTable.push(rows)    

}
getProducts()

export default function DataTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rowsTable}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
