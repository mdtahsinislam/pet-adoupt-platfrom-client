

// export default MyAddedPets;



import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { useAuthContext } from '../../../context/AuthProvider';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getSortedRowModel,
  getPaginationRowModel,
} from '@tanstack/react-table';
import {
  Card,
  Typography,
  IconButton,
  Button,
  Spinner,
} from "@material-tailwind/react";
import Swal from 'sweetalert2';
import { FaEdit, FaTrash, FaCheckCircle, FaSortUp, FaSortDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyAddedPets = () => {
  const { user } = useAuthContext();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sorting, setSorting] = useState([]);
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });

  const fetchData = async () => {
    if (!user?.email) return;
    setLoading(true);
    try {
      const res = await axios.get(`https://pet-adoupt-platfrom-serverr.vercel.app/my-added-pets/${user.email}`); // Corrected API endpoint
      setData(res.data);
    } catch (error) {
      console.error('Error fetching pets:', error);
      Swal.fire('Error!', 'Failed to fetch pets.', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [user]);

  const handleDelete = async (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`https://pet-adoupt-platfrom-serverr.vercel.app/all-pets/${id}`);
          Swal.fire('Deleted!', 'Your pet has been deleted.', 'success');
          fetchData(); // Refresh the table
        } catch (error) {
          console.error('Error deleting pet:', error);
          Swal.fire('Error!', 'Failed to delete pet.', 'error');
        }
      }
    });
  };

  const handleMarkAdopted = async (id) => {
    Swal.fire({
      title: 'Mark as Adopted?',
      text: "This action cannot be undone.",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, mark as adopted!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.patch(`https://pet-adoupt-platfrom-serverr.vercel.app/all-pets/adopt/${id}`);
          Swal.fire('Adopted!', 'Pet has been marked as adopted.', 'success');
          fetchData(); // Refresh the table
        } catch (error) {
          console.error('Error marking as adopted:', error);
          Swal.fire('Error!', 'Failed to mark as adopted.', 'error');
        }
      }
    });
  };

  const columns = useMemo(() => [
    {
      header: 'S.No',
      cell: (info) => info.row.index + 1 + (pagination.pageIndex * pagination.pageSize),
      accessorKey: 'serial',
      enableSorting: false,
    },
    {
      header: 'Pet Name',
      accessorKey: 'petName',
      cell: info => info.getValue(),
    },
    {
      header: 'Pet Category',
      accessorKey: 'petCategory',
      cell: info => info.getValue(),
    },
    {
      header: 'Pet Image',
      accessorKey: 'petImage',
      cell: info => (
        <img
          src={info.getValue()}
          alt={info.row.original.petName}
          className="h-16 w-16 object-cover rounded-md"
        />
      ),
      enableSorting: false,
    },
    {
      header: 'Adoption Status',
      accessorKey: 'adopted',
      cell: info => (
        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${info.getValue() ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
          {info.getValue() ? 'Adopted' : 'Not Adopted'}
        </span>
      ),
    },
    {
      header: 'Actions',
      cell: info => (
        <div className="flex items-center gap-2">
          {/* Update Button */}
          <Link to={`/dashbord/update-pet/${info.row.original._id}`}>
            <IconButton color="blue" size="sm">
              <FaEdit className="h-4 w-4" />
            </IconButton>
          </Link>
          {/* Delete Button */}
          <IconButton color="red" size="sm" onClick={() => handleDelete(info.row.original._id)}>
            <FaTrash className="h-4 w-4" />
          </IconButton>
          {/* Adopted button (only show if not adopted) */}
          {!info.row.original.adopted && (
            <IconButton color="green" size="sm" onClick={() => handleMarkAdopted(info.row.original._id)}>
              <FaCheckCircle className="h-4 w-4" />
            </IconButton>
          )}
        </div>
      ),
      enableSorting: false,
    },
  ], [pagination]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      pagination,
    },
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner className="h-12 w-12" />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <Card className="p-6 shadow-lg">
        <Typography variant="h4" color="blue-gray" className="text-center mb-6">
          My Added Pets
        </Typography>
        {data.length === 0 ? (
          <div className="text-center p-8">
            <Typography variant="h5" color="gray">
              You haven't added any pets yet.
            </Typography>
            <Link to="/add-pet">
              <Button className="mt-4">Add a Pet</Button>
            </Link>
          </div>
        ) : (
          <div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-max table-auto text-left">
                <thead>
                  {table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id}>
                      {headerGroup.headers.map(header => (
                        <th key={header.id} className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50" onClick={header.column.getToggleSortingHandler()}>
                          <Typography variant="small" color="blue-gray" className="flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                            {flexRender(header.column.columnDef.header, header.getContext())}
                            {{
                              asc: <FaSortUp className="h-4 w-4" />,
                              desc: <FaSortDown className="h-4 w-4" />,
                            }[header.column.getIsSorted()] ?? (header.column.getCanSort() && <FaSortDown className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />)}
                          </Typography>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody>
                  {table.getRowModel().rows.map(row => (
                    <tr key={row.id}>
                      {row.getVisibleCells().map(cell => (
                        <td key={cell.id} className="p-4 border-b border-blue-gray-50">
                          {/* Here is the change: use a component that renders a div. */}
                          <Typography as="div" variant="small" color="blue-gray" className="font-normal">
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                          </Typography>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {table.getPageCount() > 1 && (
              <div className="flex items-center justify-between p-4 border-t border-blue-gray-50">
                <Button variant="outlined" size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
                  Previous
                </Button>
                <Typography variant="small" color="gray" className="font-normal">
                  Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
                </Typography>
                <Button variant="outlined" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
                  Next
                </Button>
              </div>
            )}
          </div>
        )}
      </Card>
    </div>
  );
};

export default MyAddedPets;