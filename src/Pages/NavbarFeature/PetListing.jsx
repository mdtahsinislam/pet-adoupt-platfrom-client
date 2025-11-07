import React, { useState, useEffect, Fragment } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Select from 'react-select';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,  
  Input,
  Spinner,
} from "@material-tailwind/react";

// You can define your pet categories here or import them from a shared file
const petCategories = [
  { value: '', label: 'All Categories' },
  { value: 'dogs', label: 'Dogs' },
  { value: 'cats', label: 'Cats' },
  { value: 'birds', label: 'Birds' },
  { value: 'rabbits', label: 'Rabbits' },
  { value: 'fish', label: 'Fish' },
  { value: 'other', label: 'Other' },
];

const fetchPets = async ({ pageParam = 0, queryKey }) => {
  const [_, search, category] = queryKey;
  const res = await axios.get(`https://pet-adoupt-platfrom-serverr.vercel.app/all-pets/unadopted`, {
    params: {
      page: pageParam,
      limit: 9, // Number of items to fetch per page
      search: search,
      category: category,
    },
  });
  return res.data;
};

const PetListing = () => {
  const { ref, inView } = useInView();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(petCategories[0]);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: ['unadoptedPets', searchQuery, selectedCategory.value],
    queryFn: fetchPets,
    // getNextPageParam: (lastPage) => {
    //   // Check if there's a next page. lastPage.length should be equal to the limit
    //   if (lastPage.length < 9) {
    //     return undefined;
    //   }
    //   return (data?.pages.length || 0) + 1;
    // } 
    getNextPageParam: (lastPage, allPages) => {
  if (lastPage.length < 9) {
    return undefined;
  }
  return allPages.length;
}
,
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner className="h-12 w-12" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Typography color="red">Error fetching data. Please try again.</Typography>
      </div>
    );
  }

  const allPets = data?.pages?.flatMap(page => page) || [];

  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* Search Field */}
        <div className="md:w-1/2">
          <Input
            type="text"
            label="Search by pet name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        {/* Category Dropdown */}
        <div className="md:w-1/2">
          <Select
            options={petCategories}
            value={selectedCategory}
            onChange={setSelectedCategory}
            placeholder="Select a category"
            className="w-full"
          />
        </div>
      </div>
      
      {allPets.length === 0 ? (
        <div className="flex justify-center p-12">
          <Typography variant="h5" color="gray">No pets found matching your criteria.</Typography>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  ">
          {allPets.map((pet) => (
            <Card key={pet._id} className="w-full max-w-[26rem] shadow-lg bg-white dark:bg-gray-800">
              <CardHeader floated={false} color="blue-gray" className="relative h-56">
                <img
                  src={pet.petImage}
                  alt={pet.petName}
                  className="h-full w-full object-cover"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2 text-black dark:text-white">
                  {pet.petName}
                </Typography>
                <Typography className=' text-black dark:text-white'>
                  <span className="font-semibold text-black dark:text-white">Age:</span> {pet.petAge} years
                </Typography>
                <Typography className='text-black dark:text-white'>
                  <span className="font-semibold">Location:</span> {pet.petLocation}
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Link to={`/pet-details/${pet._id}`}>
                  <Button variant="gradient" fullWidth>
                    View Details
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      {/* Infinite Scroll trigger */}
      <div className="flex justify-center mt-8">
        {isFetchingNextPage ? (
          <Spinner className="h-12 w-12" />
        ) : hasNextPage ? (
          <div ref={ref}>
            <Typography>Loading more pets...</Typography>
          </div>
        ) : (
          allPets.length > 0 && <Typography color="gray">You've reached the end!</Typography>
        )}
      </div>
    </div>
  );
};

export default PetListing;