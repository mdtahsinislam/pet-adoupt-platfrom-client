

// export default CreateDonationCampaign;


import React, { useState } from 'react';
import { Card, CardBody, Input, Textarea, Button, Typography } from '@material-tailwind/react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useAuthContext } from '../../../context/AuthProvider';

const imageUploadKey = import.meta.env.VITE_IMAGE_UPLOAD_KEY;
const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageUploadKey}`;

const CreateDonationCampaign = () => {
    const { user } = useAuthContext();
    const [formData, setFormData] = useState({
        petPicture: null,
        petName: '',
        maximumDonation: '',
        lastDate: '',
        shortDescription: '',
        longDescription: '',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // 1. Upload image to imgbb
            const petPictureFile = formData.petPicture;
            if (!petPictureFile) {
                throw new Error('Please select a pet picture.');
            }
            const imageData = new FormData();
            imageData.append('image', petPictureFile);

            const imgbbResponse = await axios.post(imageHostingApi, imageData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (imgbbResponse.data.success) {
                const petPictureUrl = imgbbResponse.data.data.url;

                // 2. Prepare campaign data for the database
                const campaignData = {
                    petPicture: petPictureUrl,
                    petName: formData.petName,
                    maximumDonation: parseFloat(formData.maximumDonation),
                    lastDate: formData.lastDate,
                    shortDescription: formData.shortDescription,
                    longDescription: formData.longDescription,
                    createdAt: new Date(),
                    donatedAmount: 0,
                    // 💡 The user's email is now correctly stored here
                    createdBy: user.email, 
                    donators: [], // Initialize donators array
                };

                // 3. Post data to your backend
                const response = await axios.post('https://pet-adoupt-platfrom-serverr.vercel.app/donation-campaigns', campaignData);

                if (response.status === 201) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success!',
                        text: 'Donation campaign created successfully!',
                    });
                    setFormData({
                        petPicture: null,
                        petName: '',
                        maximumDonation: '',
                        lastDate: '',
                        shortDescription: '',
                        longDescription: '',
                    });
                }
            }
        } catch (error) {
            console.error('Error creating donation campaign:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.message || 'Something went wrong!',
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
                        Create a Donation Campaign
                    </Typography>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <Typography variant="h6" color="blue-gray" className="mb-2">
                                Pet Picture
                            </Typography>
                            <Input
                                type="file"
                                name="petPicture"
                                onChange={handleChange}
                                required
                                className="file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-blue-gray-50 file:text-blue-gray-700 hover:file:bg-blue-gray-100"
                                label="Upload Pet Picture"
                                containerProps={{ className: "min-w-0" }}
                            />
                        </div>
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
                                placeholder="Enter the pet's name"
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
                                placeholder="e.g., 500"
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
                                placeholder="A brief summary of the campaign"
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
                                placeholder="A detailed description of the campaign"
                                required
                            />
                        </div>
                        <Button
                            type="submit"
                            color="blue"
                            className="mt-6 w-full"
                            loading={loading}
                        >
                            {loading ? 'Creating...' : 'Create Campaign'}
                        </Button>
                    </form>
                </CardBody>
            </Card>
        </div>
    );
};

export default CreateDonationCampaign;


