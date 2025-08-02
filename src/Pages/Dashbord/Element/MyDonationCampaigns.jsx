

// export default MyDonationCampaigns;



import React, { useEffect, useState } from 'react';
import { Typography, Card, CardBody, Progress, IconButton, Tooltip } from '@material-tailwind/react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useAuthContext } from '../../../context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaPause, FaPlay, FaEye } from 'react-icons/fa';
import DonatorsModal from '../Eidt/Edonator';

const MyDonationCampaigns = () => {
    const { user } = useAuthContext();
    const [campaigns, setCampaigns] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDonators, setSelectedDonators] = useState([]);
    const [selectedPetName, setSelectedPetName] = useState('');
    const navigate = useNavigate();

    const fetchCampaigns = async () => {
        if (!user?.email) return;
        setLoading(true);
        try {
            const response = await axios.get(`https://pet-adoupt-platfrom-serverr.vercel.app/my-donation-campaigns/${user.email}`);
            setCampaigns(response.data);
            setLoading(false);
        } catch (err) {
            console.error('Error fetching donation campaigns:', err);
            setError(err);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCampaigns();
    }, [user]);

    const handlePauseUnpause = async (id, isPaused) => {
        try {
            await axios.patch(`https://pet-adoupt-platfrom-serverr.vercel.app/donation-campaigns/${id}/pause`, { paused: !isPaused });
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: `Campaign ${!isPaused ? 'paused' : 'unpaused'} successfully.`,
            });
            fetchCampaigns();
        } catch (err) {
            console.error('Error pausing/unpausing campaign:', err);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        }
    };

    const handleViewDonators = async (id, petName) => {
        try {
            const response = await axios.get(`https://pet-adoupt-platfrom-serverr.vercel.app/donation-campaigns/${id}/donators`);
            setSelectedDonators(response.data);
            setSelectedPetName(petName);
            setIsModalOpen(true);
        } catch (err) {
            console.error('Error fetching donators:', err);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Failed to fetch donators list!',
            });
        }
    };

    const handleEdit = (id) => {
        navigate(`/dashbord/edit-donation-campaign/${id}`);
    };

    if (loading) {
        return <div className="text-center p-8">Loading your campaigns...</div>;
    }

    if (error) {
        return <div className="text-center p-8 text-red-500">Error loading data.</div>;
    }

    return (
        <div className="p-8">
            <Typography variant="h4" color="blue-gray" className="mb-6 text-center">
                My Donation Campaigns
            </Typography>
            {campaigns.length === 0 ? (
                <div className="text-center text-gray-500">You have not created any donation campaigns yet.</div>
            ) : (
                <Card className="shadow-xl">
                    <CardBody>
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-max table-auto text-left">
                                <thead>
                                    <tr>
                                        <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                            <Typography variant="small" color="blue-gray" className="font-bold">
                                                Pet Name
                                            </Typography>
                                        </th>
                                        <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                            <Typography variant="small" color="blue-gray" className="font-bold">
                                                Maximum Donation
                                            </Typography>
                                        </th>
                                        <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                            <Typography variant="small" color="blue-gray" className="font-bold">
                                                Donation Progress
                                            </Typography>
                                        </th>
                                        <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                            <Typography variant="small" color="blue-gray" className="font-bold">
                                                Actions
                                            </Typography>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {campaigns.map((campaign, index) => {
                                        const progress = (campaign.donatedAmount / campaign.maximumDonation) * 100;
                                        const isLast = index === campaigns.length - 1;
                                        const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50';

                                        return (
                                            <tr key={campaign._id}>
                                                <td className={classes}>
                                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                                        {campaign.petName}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                                        ${campaign.maximumDonation}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <div className="flex items-center gap-2">
                                                        <Progress
                                                            value={progress}
                                                            size="lg"
                                                            color={progress >= 100 ? 'green' : 'blue'}
                                                            label={`${progress.toFixed(2)}%`}
                                                        />
                                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                                            ${campaign.donatedAmount} of ${campaign.maximumDonation}
                                                        </Typography>
                                                    </div>
                                                </td>
                                                <td className={classes}>
                                                    <div className="flex items-center gap-2">
                                                        <Tooltip content="Edit Donation">
                                                            <IconButton variant="text" color="blue" onClick={() => handleEdit(campaign._id)}>
                                                                <FaEdit className="h-4 w-4" />
                                                            </IconButton>
                                                        </Tooltip>
                                                        <Tooltip content={campaign.paused ? 'Unpause Campaign' : 'Pause Campaign'}>
                                                            <IconButton
                                                                variant="text"
                                                                color={campaign.paused ? 'green' : 'red'}
                                                                onClick={() => handlePauseUnpause(campaign._id, campaign.paused)}
                                                            >
                                                                {campaign.paused ? <FaPlay className="h-4 w-4" /> : <FaPause className="h-4 w-4" />}
                                                            </IconButton>
                                                        </Tooltip>
                                                        <Tooltip content="View Donators">
                                                            <IconButton variant="text" color="blue-gray" onClick={() => handleViewDonators(campaign._id, campaign.petName)}>
                                                                <FaEye className="h-4 w-4" />
                                                            </IconButton>
                                                        </Tooltip>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </CardBody>
                </Card>
            )}
            <DonatorsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} donators={selectedDonators} petName={selectedPetName} />
        </div>
    );
};

export default MyDonationCampaigns;