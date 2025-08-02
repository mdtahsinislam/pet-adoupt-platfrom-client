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
import useAdmin from '../../../hooks/useAdmin'; // Assuming a useAdmin hook for checking admin status

const AllDonations = () => {
    const [campaigns, setCampaigns] = useState([]);
    const [isAdmin] = useAdmin();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAdmin) {
            fetchAllCampaigns();
        } else {
            navigate('/'); // Redirect non-admins
        }
    }, [isAdmin, navigate]);

    const fetchAllCampaigns = async () => {
        try {
            // This route fetches all donation campaigns
            const res = await axios.get('https://pet-adoupt-platfrom-serverr.vercel.app/all-donation-campaigns');
            setCampaigns(res.data);
        } catch (error) {
            console.error('Error fetching donation campaigns:', error);
        }
    };

    // Admin can delete any donation campaign
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
                const res = await axios.delete(`https://pet-adoupt-platfrom-serverr.vercel.app/donation-campaigns/${id}`);
                if (res.status === 200) {
                    Swal.fire('Deleted!', 'The donation campaign has been deleted.', 'success');
                    fetchAllCampaigns(); // Refresh the list
                }
            } catch (error) {
                Swal.fire('Error!', 'Failed to delete the campaign.', 'error');
            }
        }
    };

    // Admin can edit any donation campaign
    const handleEdit = (id) => {
        navigate(`/dashbord/edit-donation-campaign/${id}`);
    };

    // Admin can pause or unpause a donation campaign
    const handlePauseStatus = async (id, currentStatus) => {
        try {
            const newStatus = !currentStatus;
            const res = await axios.patch(`https://pet-adoupt-platfrom-serverr.vercel.app/donation-campaigns/${id}/pause`, { paused: newStatus });
            if (res.status === 200) {
                Swal.fire('Updated!', `Campaign status changed to ${newStatus ? 'paused' : 'active'}.`, 'success');
                fetchAllCampaigns(); // Refresh the list
            }
        } catch (error) {
            Swal.fire('Error!', 'Failed to update campaign status.', 'error');
        }
    };

    return (
        <div className="flex justify-center p-8 bg-gray-50">
            <Card className="w-full  p-8 shadow-lg">
                <Typography variant="h4" color="blue-gray" className="text-center mb-4">
                    All Donation Campaigns
                </Typography>
                <div className="overflow-x-auto">
                    <table className="w-full min-w-max table-auto text-left">
                        <thead>
                            <tr>
                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">Pet Name</th>
                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">Creator</th>
                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">Donated Amount</th>
                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">Max Donation</th>
                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">Status</th>
                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {campaigns.map(({ _id, petName, createdBy, donatedAmount, maximumDonation, paused }) => (
                                <tr key={_id}>
                                    <td className="p-4">{petName}</td>
                                    <td className="p-4">{createdBy}</td>
                                    <td className="p-4">${donatedAmount}</td>
                                    <td className="p-4">${maximumDonation}</td>
                                    <td className="p-4">
                                        <Button
                                            color={paused ? "orange" : "green"}
                                            onClick={() => handlePauseStatus(_id, paused)}
                                        >
                                            {paused ? "Paused" : "Active"}
                                        </Button>
                                    </td>
                                    <td className="p-4 flex gap-2">
                                        <Button color="blue" onClick={() => handleEdit(_id)}>
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

export default AllDonations;


//delete feature not worked 