


// This is a hypothetical component based on the provided requirements.
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import {
  Card,
  Typography,
  Button,
  
} from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useAdmin from '../../../hooks/useAdmin';


const AllPets = () => {
    const [pets, setPets] = useState([]);
    const { user } = useAuth();
    const [isAdmin] = useAdmin();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAdmin) {
            fetchPets();
        } else {
            navigate('/');
        }
    }, [isAdmin, navigate]);

    const fetchPets = async () => {
        try {
            const res = await axios.get('https://pet-adoupt-platfrom-serverr.vercel.app/all-pets');
            setPets(res.data);
        } catch (error) {
            console.error('Error fetching pets:', error);
        }
    };

    // Admin can delete any pet
    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        });

        if (result.isConfirmed) {
            try {
                const res = await axios.delete(`https://pet-adoupt-platfrom-serverr.vercel.app/all-pets/${id}`);
                if (res.status === 200) {
                    Swal.fire('Deleted!', 'The pet has been deleted.', 'success');
                    fetchPets();
                }
            } catch (error) {
                Swal.fire('Error!', 'Failed to delete the pet.', 'error');
            }
        }
    };

    // Admin can update any pet
    const handleUpdate = (id) => {
        navigate(`/dashbord/update-pet/${id}`);
    };
    
    // Admin can change the pet’s status to adopted or not adopted
    const handleAdoptedStatus = async (id, currentStatus) => {
        try {
            const newStatus = !currentStatus;
            const res = await axios.patch(`https://pet-adoupt-platfrom-serverr.vercel.app/all-pets/${id}`, { adopted: newStatus });
            if (res.status === 200) {
                Swal.fire('Updated!', `Pet status changed to ${newStatus ? 'adopted' : 'not adopted'}.`, 'success');
                fetchPets();
            }
        } catch (error) {
            Swal.fire('Error!', 'Failed to update pet status.', 'error');
        }
    };

    return (
        <div className="flex justify-center p-8 bg-gray-50">
            <Card className="w-full  p-8 shadow-lg">
                <Typography variant="h4" color="blue-gray" className="text-center mb-4">
                    All Pets
                </Typography>
                <div className="overflow-x-auto">
                    <table className="w-full min-w-max table-auto text-left">
                        <thead>
                            <tr>
                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">Pet Name</th>
                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">Category</th>
                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">Location</th>
                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">Added By</th>
                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">Status</th>
                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pets.map(({ _id, petName, petCategory, petLocation, ownerEmail, adopted }) => (
                                <tr key={_id}>
                                    <td className="p-4">{petName}</td>
                                    <td className="p-4">{petCategory}</td>
                                    <td className="p-4">{petLocation}</td>
                                    <td className="p-4">{ownerEmail}</td>
                                    <td className="p-4">
                                        <Button
                                            color={adopted ? "green" : "orange"}
                                            onClick={() => handleAdoptedStatus(_id, adopted)}
                                        >
                                            {adopted ? "Adopted" : "Not Adopted"}
                                        </Button>
                                    </td>
                                    <td className="p-4 flex gap-2">
                                        <Button color="blue" onClick={() => handleUpdate(_id)}>
                                            Edit
                                        </Button>
                                        <Button color="red" onClick={() => handleDelete(_id)}>
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
};

export default AllPets;