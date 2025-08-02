

// export default DonationDetails;

// i want if user compleate  Your donation has been successfully than user navigate   /donationampaigns





import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom'; // 1. Import useNavigate
import { Card, CardBody, Typography, Button, Spinner, Dialog, DialogHeader, DialogBody, DialogFooter, Input } from '@material-tailwind/react';
import Swal from 'sweetalert2';
import { Elements, useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useAuthContext } from '../../context/AuthProvider';

// The main donation details component
const DonationDetails = () => {
    const { id } = useParams();
    const [campaign, setCampaign] = useState(null);
    const [loading, setLoading] = useState(true);
    const [openModal, setOpenModal] = useState(false);
    const [recommended, setRecommended] = useState([]);

    const fetchCampaignDetails = async () => {
        try {
            const res = await axios.get(`https://pet-adoupt-platfrom-serverr.vercel.app/donation-campaigns/${id}`);
            setCampaign(res.data);
            fetchRecommended(res.data._id);
        } catch (error) {
            console.error('Failed to fetch campaign details:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Could not load donation campaign details.',
            });
        } finally {
            setLoading(false);
        }
    };

    const fetchRecommended = async (campaignId) => {
        try {
            const res = await axios.get(`https://pet-adoupt-platfrom-serverr.vercel.app/donation-campaigns/recommended/${campaignId}`);
            setRecommended(res.data);
        } catch (error) {
            console.error('Failed to fetch recommended campaigns:', error);
        }
    };

    useEffect(() => {
        fetchCampaignDetails();
    }, [id]);

    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <Spinner color="blue" className="h-16 w-16" />
            </div>
        );
    }

    if (!campaign) {
        return <div className="text-center mt-10">Campaign not found.</div>;
    }

    return (
        <div className="container mx-auto p-4 md:p-8">
            <Card className="w-full mb-8">
                <CardBody className="grid md:grid-cols-2 gap-8">
                    <div>
                        <img
                            src={campaign.petPicture}
                            alt={campaign.petName}
                            className="h-full w-full object-cover rounded-lg"
                        />
                    </div>
                    <div>
                        <Typography variant="h3" color="blue-gray" className="mb-4">
                            {campaign.petName || 'Pet Name Here'}
                        </Typography>
                        <Typography variant="h6" color="gray" className="mb-4">
                            {campaign.shortDescription}
                        </Typography>
                        <hr className="my-4" />
                        <Typography variant="paragraph" color="blue-gray" className="mb-2">
                            <span className="font-semibold">Maximum Donation:</span> ${campaign.maximumDonation}
                        </Typography>
                        <Typography variant="paragraph" color="blue-gray" className="mb-2">
                            <span className="font-semibold">Donated Amount:</span> ${campaign.donatedAmount}
                        </Typography>
                        <Typography variant="paragraph" color="blue-gray" className="mb-2">
                            <span className="font-semibold">Last Date to Donate:</span> {new Date(campaign.lastDate).toLocaleDateString()}
                        </Typography>
                        <Typography variant="small" color="gray" className="mt-4">
                            {campaign.longDescription}
                        </Typography>
                        <Button
                            color="blue"
                            className="mt-6"
                            onClick={handleOpenModal}
                            disabled={campaign.donatedAmount >= campaign.maximumDonation}
                        >
                            Donate Now
                        </Button>
                    </div>
                </CardBody>
            </Card>
            
            <DonationModal
                open={openModal}
                handleClose={handleCloseModal}
                campaignId={id}
                maxAmount={campaign.maximumDonation - campaign.donatedAmount}
                onSuccess={fetchCampaignDetails}
            />
        </div>
    );
};

// Donation Modal Component
const DonationModal = ({ open, handleClose, campaignId, maxAmount, onSuccess }) => {
    const [donationAmount, setDonationAmount] = useState('');
    const [processing, setProcessing] = useState(false);
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate(); // 2. Initialize the navigate hook
    
    // Assume user is logged in using a context or hook
    // const user = { name: '', email: '' }; // i want login user who donate (name; email)
     const { user } = useAuthContext(); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements || !user) return;
        setProcessing(true);

        const cardElement = elements.getElement(CardElement);
        if (!cardElement) {
            Swal.fire('Error', 'Card details not provided.', 'error');
            setProcessing(false);
            return;
        }

        const donationValue = parseFloat(donationAmount);
        if (isNaN(donationValue) || donationValue <= 0 || donationValue > maxAmount) {
            Swal.fire('Error', `Please enter a valid amount (1 - ${maxAmount})`, 'error');
            setProcessing(false);
            return;
        }

        try {
            // A more robust solution would involve a backend call to Stripe.
            // For this example, we'll assume success and update the database.

            await axios.post(`https://pet-adoupt-platfrom-serverr.vercel.app/donation-campaigns/donate/${campaignId}`, {
                amount: donationValue,
                // donatorName: user.name,
                donatorName: user.displayname || user.name,
                donatorEmail: user.email,
            });

            Swal.fire('Success!', 'Your donation has been successfully processed.', 'success');
            onSuccess(); // Re-fetch campaign data to show updated amount
            handleClose();
            
            // 3. Navigate to the donation campaigns page
            navigate('/donationampaigns');
            
        } catch (error) {
            console.error('Donation submission error:', error);
            Swal.fire('Error!', 'Something went wrong with your donation. Please try again.', 'error');
        } finally {
            setProcessing(false);
        }
    };

    return (
        <Dialog open={open} handler={handleClose} size="sm">
            <DialogHeader>Make a Donation</DialogHeader>
            <form onSubmit={handleSubmit}>
                <DialogBody divider>
                    <div className="space-y-4">
                        <Typography variant="small" color="gray">
                            Maximum amount you can donate: ${maxAmount}
                        </Typography>
                        <Input
                            label="Donation Amount"
                            type="number"
                            value={donationAmount}
                            onChange={(e) => setDonationAmount(e.target.value)}
                            min="1"
                            max={maxAmount}
                            step="any"
                            required
                        />
                        <div className="border p-4 rounded-md">
                            <Typography variant="small" color="blue-gray" className="mb-2">
                                Credit Card Details
                            </Typography>
                            <CardElement options={{
                                style: {
                                    base: {
                                        fontSize: '16px',
                                        '::placeholder': {
                                            color: '#aab7c4',
                                        },
                                    },
                                    invalid: {
                                        color: '#9e2146',
                                    },
                                },
                            }} />
                        </div>
                    </div>
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleClose}
                        className="mr-1"
                        disabled={processing}
                    >
                        Cancel
                    </Button>
                    <Button variant="gradient" color="green" type="submit" disabled={!stripe || processing}>
                        {processing ? <Spinner color="white" /> : `Donate $${donationAmount || '0'}`}
                    </Button>
                </DialogFooter>
            </form>
        </Dialog>
    );
};

export default DonationDetails;  


