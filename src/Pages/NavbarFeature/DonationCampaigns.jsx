

// export default DonationCampaigns;

// if i create donation campain double card in one campain added here

import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Card, CardBody, CardFooter, Typography, Button, Progress, Spinner } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const DonationCampaigns = () => {
    const [campaigns, setCampaigns] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const fetchCampaigns = useCallback(async () => {
        if (loading || !hasMore) return;
        setLoading(true);
        try {
            const res = await axios.get(`https://pet-adoupt-platfrom-serverr.vercel.app/donation-campaigns?page=${page}&limit=9`);
            const newCampaigns = res.data.campaigns;
            // A more robust check to avoid adding duplicates
            setCampaigns((prevCampaigns) => {
                const existingIds = new Set(prevCampaigns.map(c => c._id));
                const filteredNewCampaigns = newCampaigns.filter(c => !existingIds.has(c._id));
                return [...prevCampaigns, ...filteredNewCampaigns];
            });
            setHasMore(newCampaigns.length === 9);
        } catch (error) {
            console.error('Failed to fetch donation campaigns:', error);
        } finally {
            setLoading(false);
        }
    }, [page, loading, hasMore]);

    // Initial load and state reset
    useEffect(() => {
        // Reset state whenever the component mounts
        setCampaigns([]);
        setPage(1);
        setHasMore(true);
        // Then, fetch the first page
        // We use an empty dependency array here to ensure this only runs once on mount.
        // The fetchCampaigns callback will be called immediately after the state resets.
    }, []);

    // Effect to trigger fetching when the page number changes
    useEffect(() => {
        if (page > 0) { // Make sure this runs after the initial state reset
            fetchCampaigns();
        }
    }, [page, fetchCampaigns]);


    const handleScroll = useCallback(() => {
        if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
            if (!loading && hasMore) {
                setPage((prevPage) => prevPage + 1);
            }
        }
    }, [loading, hasMore]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <div className="container mx-auto p-4 md:p-8">
            <Typography variant="h2" color="blue-gray" className="mb-8 text-center dark:text-white">
                All Donation Campaigns
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {campaigns.map((campaign) => (
                    <Card key={campaign._id} className="w-full max-w-[24rem] shadow-lg overflow-hidden">
                        <img
                            src={campaign.petPicture}
                            alt={campaign.petName}
                            className="h-56 w-full object-cover"
                        />
                        <CardBody>
                            <Typography variant="h5" color="blue-gray" className="mb-2">
                                {campaign.petName || 'Pet Name Here'}
                            </Typography>
                            <div className="flex items-center justify-between mt-4">
                                <Typography variant="small" color="gray">
                                    <span className="font-semibold">Max Donation:</span> ${campaign.maximumDonation}
                                </Typography>
                                <Typography variant="small" color="gray">
                                    <span className="font-semibold">Donated:</span> ${campaign.donatedAmount}
                                </Typography>
                            </div>
                            <Progress
                                value={(campaign.donatedAmount / campaign.maximumDonation) * 100}
                                size="lg"
                                color="blue"
                                className="mt-4"
                            />
                        </CardBody>
                        <CardFooter className="pt-0">
                            <Link to={`/donation-campaigns/${campaign._id}`}>
                                <Button fullWidth color="blue">
                                    View Details
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            {loading && (
                <div className="flex justify-center my-8">
                    <Spinner color="blue" className="h-10 w-10" />
                </div>
            )}
            {!hasMore && !loading && (
                <Typography className="text-center mt-8 text-gray-500">
                    You have reached the end of the list.
                </Typography>
            )}
        </div>
    );
};

export default DonationCampaigns;