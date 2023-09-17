import React, { useState } from 'react'
import './userList.css'
import { DataGrid, GridColDef} from '@mui/x-data-grid';
import {DeleteOutline} from "@mui/icons-material"
import {userRows} from "../../../dummyData"
import {Link} from 'react-router-dom'
export default function UserList() {
    const [data,setData]=useState(userRows)
    const handleDelete=(id)=>{
        setData(data.filter((item)=>item.id!==id))
    }
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'user', headerName: 'User', width: 200,renderCell:(params)=>{
           return(
            <div className='userListUser'>
                <img className='userListimg' src={params.row.avatar} alt="" />
                {params.row.username}
            </div>
           )  
        } },
        { field: 'email', headerName: 'Email', width: 200 },
        {
            field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
          field: 'transaction',
          headerName: 'Transaction Volume',
          width: 160,
        },
        {
          field: 'action',
          headerName: 'Action',
          width: 150,
          renderCell:(params)=>{
            return(
                <>
                <Link to={"/user/"+params.row.id}>
                <button className="userListEdit">Edit</button>
                </Link>
                <DeleteOutline className='userListDelete' onClick={()=>handleDelete(params.row.id)}/>
                </>
            )
          }
        },

      ];
    return (
    <div className='userList'>
         <DataGrid
         disableRowSelectionOnClick
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}
