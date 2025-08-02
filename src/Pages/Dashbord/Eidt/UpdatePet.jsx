

import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ReactSelect from 'react-select';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
  Alert,
  Spinner,
} from "@material-tailwind/react";
//import { useAuthContext } from '../../../context/AuthProvider/AuthProvider';
import MDEditor from '@uiw/react-md-editor';
import Swal from 'sweetalert2';
import { useAuthContext } from '../../../context/AuthProvider';

// Pet categories array as defined in Addpet.jsx
const petCategories = [
  { value: 'dogs', label: 'Dogs' },
  { value: 'cats', label: 'Cats' },
  { value: 'birds', label: 'Birds' },
  { value: 'rabbits', label: 'Rabbits' },
  { value: 'fish', label: 'Fish' },
  { value: 'other', label: 'Other' },
];

const validationSchema = Yup.object().shape({
  petName: Yup.string().required('Pet name is required'),
  petAge: Yup.number()
    .required('Pet age is required')
    .positive('Age must be a positive number')
    .integer('Age must be an integer'),
  petCategory: Yup.object().shape({
    value: Yup.string().required(),
    label: Yup.string().required(),
  }).required('Pet category is required').nullable(),
  petLocation: Yup.string().required('Pet location is required'),
  shortDescription: Yup.string().required('Short description is required'),
  longDescription: Yup.string().required('Long description is required'),
  // Pet image is not required for update since it can be optional
  petImage: Yup.mixed().nullable(), 
});

const UpdatePet = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const [loading, setLoading] = useState(true);
  const [petData, setPetData] = useState(null);
  const [uploading, setUploading] = useState(false);
  const imageUploadKey = import.meta.env.VITE_IMAGE_UPLOAD_KEY || '02c389cce07e04b0919c7842bd33096b';

  useEffect(() => {
    const fetchPetData = async () => {
      try {
        const res = await axios.get(`https://pet-adoupt-platfrom-serverr.vercel.app/all-pets/pet-details/${id}`);
        setPetData(res.data);
      } catch (error) {
        console.error('Error fetching pet data:', error);
        Swal.fire('Error!', 'Failed to fetch pet details.', 'error');
        navigate('/dashboard/my-added-pets');
      } finally {
        setLoading(false);
      }
    };
    fetchPetData();
  }, [id, navigate]);

  const uploadImage = async (file) => {
    setUploading(true);
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=${imageUploadKey}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );
      setUploading(false);
      return response.data.data.url;
    } catch (error) {
      console.error('Image upload error:', error);
      setUploading(false);
      return null;
    }
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      let imageUrl = values.petImage;
      const isNewImageSelected = values.petImage instanceof File;

      if (isNewImageSelected) {
        imageUrl = await uploadImage(values.petImage);
        if (!imageUrl) {
          Swal.fire({
            icon: 'error',
            title: 'Upload Failed',
            text: 'Failed to upload image. Please try again.',
          });
          return;
        }
      }

      const updatedPetData = {
        petName: values.petName,
        petAge: values.petAge,
        petCategory: values.petCategory.value,
        petLocation: values.petLocation,
        shortDescription: values.shortDescription,
        longDescription: values.longDescription,
        petImage: imageUrl,
      };

      const res = await axios.patch(`https://pet-adoupt-platfrom-serverr.vercel.app/all-pets/${id}`, updatedPetData);

      if (res.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Pet updated successfully!',
          showConfirmButton: false,
          timer: 2000
        });
        navigate('/dashbord/myaddedpets');
      }
    } catch (error) {
      console.error('Error updating pet:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.response?.data?.message || 'Something went wrong. Please try again.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner className="h-12 w-12" />
      </div>
    );
  }

  // Find the category object to pre-fill the ReactSelect component
  const initialCategory = petCategories.find(cat => cat.value === petData.petCategory) || null;

  const initialValues = {
    petImage: petData.petImage,
    petName: petData.petName,
    petAge: petData.petAge,
    petCategory: initialCategory,
    petLocation: petData.petLocation,
    shortDescription: petData.shortDescription,
    longDescription: petData.longDescription,
  };

  return (
    <div className="flex justify-center p-8 bg-gray-50">
      <Card className="w-full max-w-2xl p-8 shadow-lg">
        <Typography variant="h4" color="blue-gray" className="text-center mb-4">
          Update Pet
        </Typography>
        <Typography color="gray" className="mt-1 font-normal text-center mb-8">
          Edit the details of your pet below.
        </Typography>
        
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          enableReinitialize={true}
        >
          {({ isSubmitting, setFieldValue, values }) => (
            <Form className="space-y-6">
              {/* Pet Image Upload and Preview */}
              <div>
                <Typography variant="h6" color="blue-gray">
                  Pet Image
                </Typography>
                <div className="flex items-center gap-4 mt-2">
                  <input
                    type="file"
                    name="petImage"
                    onChange={(event) => {
                      setFieldValue('petImage', event.currentTarget.files[0]);
                    }}
                    className="w-full"
                    accept="image/*"
                  />
                  {values.petImage && (
                    <img
                      src={values.petImage instanceof File ? URL.createObjectURL(values.petImage) : values.petImage}
                      alt="Preview"
                      className="h-24 w-24 object-cover rounded-md"
                    />
                  )}
                </div>
                <ErrorMessage name="petImage" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Pet Name */}
              <div>
                <Typography variant="h6" color="blue-gray">
                  Pet Name
                </Typography>
                <Field
                  name="petName"
                  as={Input}
                  size="lg"
                  placeholder="Enter pet's name"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                />
                <ErrorMessage name="petName" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Pet Age */}
              <div>
                <Typography variant="h6" color="blue-gray">
                  Pet Age (years)
                </Typography>
                <Field
                  name="petAge"
                  type="number"
                  as={Input}
                  size="lg"
                  placeholder="Enter pet's age"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  min="0"
                />
                <ErrorMessage name="petAge" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Pet Category Dropdown */}
              <div>
                <Typography variant="h6" color="blue-gray">
                  Pet Category
                </Typography>
                <ReactSelect
                  name="petCategory"
                  options={petCategories}
                  value={values.petCategory}
                  onChange={(option) => setFieldValue('petCategory', option)}
                  className="mt-2"
                  placeholder="Select pet category"
                />
                <ErrorMessage name="petCategory" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Pet Location */}
              <div>
                <Typography variant="h6" color="blue-gray">
                  Pet Location
                </Typography>
                <Field
                  name="petLocation"
                  as={Input}
                  size="lg"
                  placeholder="e.g., New York, NY"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                />
                <ErrorMessage name="petLocation" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Short Description */}
              <div>
                <Typography variant="h6" color="blue-gray">
                  Short Description
                </Typography>
                <Field
                  name="shortDescription"
                  as={Textarea}
                  size="lg"
                  placeholder="A short, catchy description..."
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                />
                <ErrorMessage name="shortDescription" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Long Description with WYSIWYG */}
              <div>
                <Typography variant="h6" color="blue-gray">
                  Long Description
                </Typography>
                <MDEditor
                  value={values.longDescription}
                  onChange={(value) => setFieldValue('longDescription', value)}
                  height={300}
                  preview="edit"
                />
                <ErrorMessage name="longDescription" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <Button
                type="submit"
                className="mt-6"
                fullWidth
                disabled={isSubmitting || uploading}
              >
                {uploading ? 'Uploading New Image...' : isSubmitting ? 'Updating...' : 'Update Pet'}
              </Button>
            </Form>
          )}
        </Formik>
      </Card>
    </div>
  );
};

export default UpdatePet;