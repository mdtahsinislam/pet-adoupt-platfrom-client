

// //written same code again add the feature i wanted 


import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ReactSelect from 'react-select';
import axios from 'axios';
import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
  Alert,
} from "@material-tailwind/react";
import { useAuthContext } from '../../../context/AuthProvider';
import MDEditor from '@uiw/react-md-editor';
import Swal from 'sweetalert2';

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
  petImage: Yup.mixed().required('Pet image is required'),
});

const Addpet = () => {
  const { user } = useAuthContext();
  const [uploading, setUploading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const imageUploadKey = import.meta.env.VITE_IMAGE_UPLOAD_KEY || '02c389cce07e04b0919c7842bd33096b';

  const initialValues = {
    petImage: null,
    petName: '',
    petAge: '',
    petCategory: null,
    petLocation: '',
    shortDescription: '',
    longDescription: '',
  };

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

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      setErrorMessage('');
      setSuccessMessage('');
      
      if (!values.petImage) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please select an image!',
        });
        return;
      }

      const imageUrl = await uploadImage(values.petImage);

      if (!imageUrl) {
        Swal.fire({
          icon: 'error',
          title: 'Upload Failed',
          text: 'Failed to upload image. Please try again.',
        });
        return;
      }

      const petData = {
        petName: values.petName,
        petAge: values.petAge,
        petCategory: values.petCategory.value,
        petLocation: values.petLocation,
        shortDescription: values.shortDescription,
        longDescription: values.longDescription,
        petImage: imageUrl,
        ownerEmail: user?.email,
      };

      const res = await axios.post('https://pet-adoupt-platfrom-serverr.vercel.app/all-pets', petData);

      if (res.status === 201) {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Pet added successfully!',
          showConfirmButton: false,
          timer: 2000
        });
        resetForm();
      }
    } catch (error) {
      console.error('Error adding pet:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.response?.data?.message || 'Something went wrong. Please try again.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center p-8 bg-gray-50">
      <Card className="w-full max-w-2xl p-8 shadow-lg">
        <Typography variant="h4" color="blue-gray" className="text-center mb-4">
          Add a Pet 
        </Typography>
        <Typography color="gray" className="mt-1 font-normal text-center mb-8">
          Fill in the details below to find a loving home for your pet.
        </Typography>
        
        {/* You can keep these Alert components as fallback or remove them */}
        {successMessage && <Alert color="green" className="mb-4">{successMessage}</Alert>}
        {errorMessage && <Alert color="red" className="mb-4">{errorMessage}</Alert>}

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue, values }) => (
            <Form className="space-y-6">
              {/* Pet Image Upload */}
              <div>
                <Typography variant="h6" color="blue-gray">
                  Pet Image
                </Typography>
                <input
                  type="file"
                  name="petImage"
                  onChange={(event) => {
                    setFieldValue('petImage', event.currentTarget.files[0]);
                  }}
                  className="w-full mt-2"
                  accept="image/*"
                />
                <ErrorMessage name="petImage" component="div" className="text-red-500 text-sm mt-1" />
                {values.petImage && (
                  <div className="mt-2">
                    <img 
                      src={URL.createObjectURL(values.petImage)} 
                      alt="Preview" 
                      className="h-32 object-cover rounded"
                    />
                  </div>
                )}
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
                {uploading ? 'Uploading Image...' : isSubmitting ? 'Submitting...' : 'Add Pet'}
              </Button>
            </Form>
          )}
        </Formik>
      </Card>
    </div>
  );
};

export default Addpet;

