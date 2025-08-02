

// export default EditDonationCampaign;


import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardBody, Input, Textarea, Button, Typography } from '@material-tailwind/react';
import axios from 'axios';
import Swal from 'sweetalert2';

const EditDonationCampaign = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        petName: '',
        maximumDonation: '',
        lastDate: '',
        shortDescription: '',
        longDescription: '',
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchCampaignData = async () => {
            try {
                const response = await axios.get(`https://pet-adoupt-platfrom-serverr.vercel.app/donation-campaigns/edit/${id}`);
                const campaign = response.data;
                const lastDate = new Date(campaign.lastDate).toISOString().split('T')[0];
                setFormData({
                    petName: campaign.petName,
                    maximumDonation: campaign.maximumDonation,
                    lastDate,
                    shortDescription: campaign.shortDescription,
                    longDescription: campaign.longDescription,
                });
            } catch (error) {
                console.error('Error fetching campaign data:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Failed to load campaign data!',
                });
                navigate('/dashbord/my-donation-campaigns');
            }
        };

        fetchCampaignData();
    }, [id, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const updateData = {
                ...formData,
                maximumDonation: parseFloat(formData.maximumDonation),
            };
            const response = await axios.put(`https://pet-adoupt-platfrom-serverr.vercel.app/donation-campaigns/${id}`, updateData);
            if (response.data.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Donation campaign updated successfully!',
                });
                navigate('/dashbord/my-donation-campaigns');
            }
        } catch (error) {
            console.error('Error updating donation campaign:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.response?.data?.message || 'Something went wrong!',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center p-8 bg-gray-50 min-h-screen">
            <Card className="w-full max-w-2xl shadow-xl">
                <CardBody>
                    <Typography variant="h4" color="blue-gray" className="mb-6 text-center">
                        Edit Donation Campaign
                    </Typography>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <Typography variant="h6" color="blue-gray" className="mb-2">
                                Pet Name
                            </Typography>
                            <Input
                                type="text"
                                name="petName"
                                value={formData.petName}
                                onChange={handleChange}
                                label="Pet Name"
                                required
                            />
                        </div>
                        <div>
                            <Typography variant="h6" color="blue-gray" className="mb-2">
                                Maximum Donation Amount
                            </Typography>
                            <Input
                                type="number"
                                name="maximumDonation"
                                value={formData.maximumDonation}
                                onChange={handleChange}
                                label="Maximum Donation"
                                required
                            />
                        </div>
                        <div>
                            <Typography variant="h6" color="blue-gray" className="mb-2">
                                Last Date of Donation
                            </Typography>
                            <Input
                                type="date"
                                name="lastDate"
                                value={formData.lastDate}
                                onChange={handleChange}
                                label="Last Date"
                                required
                            />
                        </div>
                        <div>
                            <Typography variant="h6" color="blue-gray" className="mb-2">
                                Short Description
                            </Typography>
                            <Input
                                type="text"
                                name="shortDescription"
                                value={formData.shortDescription}
                                onChange={handleChange}
                                label="Short Description"
                                required
                            />
                        </div>
                        <div>
                            <Typography variant="h6" color="blue-gray" className="mb-2">
                                Long Description
                            </Typography>
                            <Textarea
                                name="longDescription"
                                value={formData.longDescription}
                                onChange={handleChange}
                                label="Long Description"
                                required
                            />
                        </div>
                        <Button type="submit" color="blue" className="mt-6 w-full" loading={loading}>
                            {loading ? 'Updating...' : 'Update Campaign'}
                        </Button>
                    </form>
                </CardBody>
            </Card>
        </div>
    );
};

export default EditDonationCampaign;