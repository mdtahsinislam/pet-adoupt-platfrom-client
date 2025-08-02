

// export default MyDonations;



import React, { useState, useEffect } from 'react';
import { Card, Typography, Button, Spinner, Tooltip, IconButton, CardBody } from '@material-tailwind/react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useAuthContext } from '../../../context/AuthProvider';
import { FaTrash } from 'react-icons/fa';

const MyDonations = () => {
    const [donations, setDonations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refunding, setRefunding] = useState(null);
    const { user } = useAuthContext();

    const fetchDonations = async () => {
        if (!user || !user.email) {
            setLoading(false);
            return;
        }
        try {
            const res = await axios.get(`https://pet-adoupt-platfrom-serverr.vercel.app/my-donations/${user.email}`);
            setDonations(res.data);
        } catch (error) {
            console.error('Error fetching donations:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Failed to load your donations. Please try again.',
            });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDonations();
    }, [user]);

//     useEffect(() => {
//   if (user?.email) {
//     fetchDonations();
//   }
// }, [user?.email]);


    const handleRefund = async (campaignId, donationId) => {
        setRefunding(donationId);
        try {
            const result = await Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, refund it!'
            });

            if (result.isConfirmed) {
                const response = await axios.patch(`https://pet-adoupt-platfrom-serverr.vercel.app/donation-campaigns/refund/${campaignId}`, {
                    donationId
                });

                if (response.status === 200) {
                    setDonations(donations.filter(d => d._id !== donationId));
                    Swal.fire({
                        icon: 'success',
                        title: 'Refunded!',
                        text: 'Your donation has been refunded successfully!',
                    });
                } else {
                    throw new Error(response.data.message || 'Refund failed');
                }
            }
        } catch (error) {
            console.error('Error processing refund:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error.response?.data?.message || 'Failed to process refund. Please try again.',
            });
        } finally {
            setRefunding(null);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <Spinner className="h-12 w-12" />
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4">
            <Typography variant="h4" className="mb-6 text-center">
                My Donations
            </Typography>
            <Card className="shadow-xl">
                <CardBody>
                    {donations.length > 0 ? (
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-max table-auto text-left">
                                <thead>
                                    <tr>
                                        <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                            <Typography variant="small" color="blue-gray" className="font-bold">
                                                Pet Image
                                            </Typography>
                                        </th>
                                        <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                            <Typography variant="small" color="blue-gray" className="font-bold">
                                                Pet Name
                                            </Typography>
                                        </th>
                                        <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                            <Typography variant="small" color="blue-gray" className="font-bold">
                                                Donated Amount
                                            </Typography>
                                        </th>
                                        <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                            <Typography variant="small" color="blue-gray" className="font-bold">
                                                Action
                                            </Typography>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {donations.map((donation, index) => {
                                        const isLast = index === donations.length - 1;
                                        const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50';
                                        return (
                                            <tr key={donation._id}>
                                                <td className={classes}>
                                                    <img
                                                        src={donation.petPicture}
                                                        alt={donation.petName}
                                                        className="h-16 w-16 object-cover rounded-md"
                                                    />
                                                </td>
                                                <td className={classes}>
                                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                                        {donation.petName}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                                        ${donation.donationAmount}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <Tooltip content="Request Refund">
                                                        <IconButton
                                                            variant="text"
                                                            color="red"
                                                            onClick={() => handleRefund(donation.campaignId, donation._id)}
                                                            disabled={refunding === donation._id}
                                                        >
                                                            {refunding === donation._id ? (
                                                                <Spinner className="h-4 w-4" />
                                                            ) : (
                                                                <FaTrash className="h-4 w-4" />
                                                            )}
                                                        </IconButton>
                                                    </Tooltip>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <Typography variant="lead" className="text-center p-8">
                            You haven't made any donations yet.
                        </Typography>
                    )}
                </CardBody>
            </Card>
        </div>
    );
};

export default MyDonations;