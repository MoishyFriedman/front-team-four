import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useState } from 'react';
import axios from 'axios';

const columns: GridColDef[] = [
  { field: 'product_name', headerName: 'product_name', width: 70 },
  { field: 'category_id', headerName: 'category_id', width: 130 },
  { field: 'price', headerName: 'price', width: 130 },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 90,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params: GridValueGetterParams) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
];

// להכניס את כל המוצרים לפי הפרטים  שלהם, כל מוצר שיבחר יתווסף לקומפוננטת ההשוואה
// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];



export default function ComparisonTable() {
    const [selectedProduct, setSelectedProduct] = useState()
    // axios.get("")
    const handleCheckboxChange = (product_name, category_id, price, isChecked)=>{
        if(isChecked){
            const newProductInTable = {name:product_name , id : category_id , price : price}
            setSelectedProduct([...selectedProduct, newProductInTable])
        }
        // else{
        //     const updatedProducts = selectedProducts.filter(
        //       product => product.name !== productName
        //     );
        //     setSelectedProducts(updatedProducts);
        //   }

    }



  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
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