import { DataGrid, GridColDef } from "@mui/x-data-grid";
import axios from "axios";

const columns: GridColDef[] = [
  { field: "product_name", headerName: "product_name", width: 70 },
  { field: "category_id", headerName: "category_id", width: 130 },
  { field: "price", headerName: "price", width: 130 },
];

interface Rows {
  product_name: string;
  category_id: number;
  price: number;
}
let rowsTable: Rows[];

const getProducts = async () => {
  const response = await axios.get("");

  const rows = {
    product_name: response.data.product_name,
    category_id: response.data.category_id,
    price: response.data.price,
  };
  rowsTable.push(rows);
};
getProducts();

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
