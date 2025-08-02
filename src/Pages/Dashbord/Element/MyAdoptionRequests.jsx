import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import {
    Typography,
    Card,
    CardBody,
    Button,
    Spinner,
    Chip
} from "@material-tailwind/react";
import { useAuthContext } from '../../../context/AuthProvider';
import { Link } from 'react-router-dom';

const MyAdoptionRequests = () => {
    const { user } = useAuthContext();
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            fetchAdoptionRequests();
        }
    }, [user]);

    const fetchAdoptionRequests = async () => {
        try {
            setLoading(true);
            const res = await axios.get(`https://pet-adoupt-platfrom-serverr.vercel.app/my-adoption-requests/${user.email}`);
            setRequests(res.data);
        } catch (error) {
            console.error('Error fetching adoption requests:', error);
            Swal.fire('Error!', 'Failed to fetch adoption requests.', 'error');
        } finally {
            setLoading(false);
        }
    };

    const handleAcceptRequest = async (requestId, petId) => {
        try {
            await axios.patch(`https://pet-adoupt-platfrom-serverr.vercel.app/adoption-requests/accept/${requestId}`, { petId });
            Swal.fire('Accepted!', 'The adoption request has been accepted.', 'success');
            fetchAdoptionRequests(); // Refresh the list
        } catch (error) {
            console.error('Error accepting request:', error);
            Swal.fire('Error!', 'Failed to accept the request.', 'error');
        }
    };

    const handleRejectRequest = async (requestId) => {
        try {
            await axios.patch(`https://pet-adoupt-platfrom-serverr.vercel.app/adoption-requests/reject/${requestId}`);
            Swal.fire('Rejected!', 'The adoption request has been rejected.', 'success');
            fetchAdoptionRequests(); // Refresh the list
        } catch (error) {
            console.error('Error rejecting request:', error);
            Swal.fire('Error!', 'Failed to reject the request.', 'error');
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Spinner className="h-12 w-12" />
            </div>
        );
    }

    if (requests.length === 0) {
        return (
            <div className="flex justify-center p-12">
                <Typography variant="h5" color="gray">You have not received any adoption requests yet.</Typography>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-8">
            <Typography variant="h4" color="blue-gray" className="mb-8">
                Adoption Requests for Your Pets
            </Typography>
            <Card className="h-full w-full overflow-scroll">
                <CardBody>
                    <table className="w-full min-w-max table-auto text-left">
                        <thead>
                            <tr>
                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                                        Pet Name
                                    </Typography>
                                </th>
                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                                        Adopter Name
                                    </Typography>
                                </th>
                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                                        Adopter Email
                                    </Typography>
                                </th>
                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                                        Phone Number
                                    </Typography>
                                </th>
                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                                        Location
                                    </Typography>
                                </th>
                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                                        Status
                                    </Typography>
                                </th>
                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                                        Actions
                                    </Typography>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {requests.map((request, index) => (
                                <tr key={request._id} className={index % 2 === 0 ? "bg-blue-gray-50/50" : ""}>
                                    <td className="p-4 border-b border-blue-gray-50">
                                        <Link to={`/pet-details/${request.petId}`} className="font-medium text-blue-500 hover:underline">
                                            {request.petName}
                                        </Link>
                                    </td>
                                    <td className="p-4 border-b border-blue-gray-50">
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {request.adopterName}
                                        </Typography>
                                    </td>
                                    <td className="p-4 border-b border-blue-gray-50">
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {request.adopterEmail}
                                        </Typography>
                                    </td>
                                    <td className="p-4 border-b border-blue-gray-50">
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {request.adopterPhoneNumber}
                                        </Typography>
                                    </td>
                                    <td className="p-4 border-b border-blue-gray-50">
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {request.adopterAddress}
                                        </Typography>
                                    </td>
                                    <td className="p-4 border-b border-blue-gray-50">
                                        <Chip
                                            variant="ghost"
                                            color={request.status === 'pending' ? 'yellow' : request.status === 'accepted' ? 'green' : 'red'}
                                            value={request.status}
                                        />
                                    </td>
                                    <td className="p-4 border-b border-blue-gray-50">
                                        {request.status === 'pending' && (
                                            <>
                                                <Button
                                                    size="sm"
                                                    color="green"
                                                    onClick={() => handleAcceptRequest(request._id, request.petId)}
                                                    className="mr-2"
                                                >
                                                    Accept
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    color="red"
                                                    onClick={() => handleRejectRequest(request._id)}
                                                >
                                                    Reject
                                                </Button>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </CardBody>
            </Card>
        </div>
    );
};

export default MyAdoptionRequests;