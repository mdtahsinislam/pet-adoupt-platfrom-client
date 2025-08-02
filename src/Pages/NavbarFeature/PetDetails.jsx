

// export default PetDetails;



import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Spinner,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import { useAuthContext } from '../../context/AuthProvider';
import Swal from 'sweetalert2';
import MDEditor from '@uiw/react-md-editor';

const PetDetails = () => {
  const { id } = useParams();
  const { user } = useAuthContext();
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [adoptModalOpen, setAdoptModalOpen] = useState(false);
  const [adoptionFormData, setAdoptionFormData] = useState({
    phoneNumber: '',
    address: '',
  });
  const [adopterName, setAdopterName] = useState(''); // New state for adopter's name

  useEffect(() => {
    const fetchPetDetails = async () => {
      try {
        const res = await axios.get(`https://pet-adoupt-platfrom-serverr.vercel.app/all-pets/pet-details/${id}`);
        setPet(res.data);
      } catch (error) {
        console.error('Error fetching pet details:', error);
        Swal.fire('Error!', 'Failed to fetch pet details.', 'error');
      } finally {
        setLoading(false);
      }
    };

    const fetchAdopterName = async () => {
      if (user?.email) {
        try {
          const res = await axios.get(`https://pet-adoupt-platfrom-serverr.vercel.app/users/${user.email}`);
          setAdopterName(res.data.name); // Assuming your backend returns a 'name' field
        } catch (error) {
          console.error('Error fetching user details:', error);
          // Fallback to displayName if backend fetch fails
          setAdopterName(user.displayName || ''); 
        }
      }
    };

    fetchPetDetails();
    fetchAdopterName();
  }, [id, user]);

  const handleOpenAdoptModal = () => {
    setAdoptModalOpen(true);
  };

  const handleCloseAdoptModal = () => {
    setAdoptModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdoptionFormData({ ...adoptionFormData, [name]: value });
  };

  const handleAdoptSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      Swal.fire('Login Required!', 'You must be logged in to adopt a pet.', 'warning');
      return;
    }

    const adoptionRequestData = {
      petId: pet._id,
      petName: pet.petName,
      petImage: pet.petImage,
      petOwnerEmail: pet.ownerEmail,
      adopterName: adopterName, // Use the state variable here
      adopterEmail: user?.email,
      adopterPhoneNumber: adoptionFormData.phoneNumber,
      adopterAddress: adoptionFormData.address,
      status: 'pending',
      createdAt: new Date(),
    };

    try {
      const res = await axios.post('https://pet-adoupt-platfrom-serverr.vercel.app/adoption-requests', adoptionRequestData);
      if (res.status === 201) {
        Swal.fire('Success!', 'Your adoption request has been submitted!', 'success');
        handleCloseAdoptModal();
      }
    } catch (error) {
      console.error('Error submitting adoption request:', error);
      Swal.fire('Error!', 'Failed to submit adoption request.', 'error');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner className="h-12 w-12" />
      </div>
    );
  }

  if (!pet) {
    return (
      <div className="flex justify-center p-12">
        <Typography variant="h5" color="red">Pet not found!</Typography>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <Card className="flex-col md:flex-row p-6 shadow-lg">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 md:w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src={pet.petImage}
            alt={pet.petName}
            className="h-full w-full object-cover rounded-lg md:rounded-r-none"
          />
        </CardHeader>
        <CardBody className="md:p-8">
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            {pet.petCategory}
          </Typography>
          <Typography variant="h3" color="blue-gray" className="mb-2">
            {pet.petName}
          </Typography>
          <Typography color="gray" className="font-normal mb-2">
            <span className="font-semibold">Age:</span> {pet.petAge} years
          </Typography>
          <Typography color="gray" className="font-normal mb-2">
            <span className="font-semibold">Location:</span> {pet.petLocation}
          </Typography>
          <Typography color="gray" className="font-normal mb-4">
            <span className="font-semibold">Description:</span> {pet.shortDescription}
          </Typography>
          <Typography color="gray" className="font-normal">
            <span className="font-semibold">Details:</span>
            <div data-color-mode="light">
              <MDEditor.Markdown source={pet.longDescription} />
            </div>
          </Typography>
          <Button
            variant="gradient"
            color="light-blue"
            className="flex items-center gap-3 mt-6"
            onClick={handleOpenAdoptModal}
            disabled={pet.adopted}
          >
            {pet.adopted ? 'Already Adopted' : 'Adopt Me'}
          </Button>
        </CardBody>
      </Card>

      {/* Adoption Modal */}
      <Dialog open={adoptModalOpen} handler={handleCloseAdoptModal} size="sm">
        <DialogHeader className="flex justify-between items-center">
          <Typography variant="h5">Adopt {pet?.petName}</Typography>
        </DialogHeader>
        <form onSubmit={handleAdoptSubmit}>
          <DialogBody divider className="space-y-4">
            <Typography>
              Please provide your contact information to submit an adoption request.
            </Typography>
            {/* User Name (Auto-filled and disabled) */}
            <div>
              <Input
                label="Your Name"
                value={adopterName} // Use the new state variable here
                disabled
              />
            </div>
            {/* User Email (Auto-filled and disabled) */}
            <div>
              <Input
                label="Your Email"
                value={user?.email || ''}
                disabled
              />
            </div>
            {/* Phone Number */}
            <div>
              <Input
                label="Phone Number"
                name="phoneNumber"
                value={adoptionFormData.phoneNumber}
                onChange={handleInputChange}
                required
              />
            </div>
            {/* Address */}
            <div>
              <Input
                label="Address"
                name="address"
                value={adoptionFormData.address}
                onChange={handleInputChange}
                required
              />
            </div>
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleCloseAdoptModal}
              className="mr-1"
            >
              Cancel
            </Button>
            <Button variant="gradient" color="green" type="submit">
              Submit
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </div>
  );
};

export default PetDetails;

