import React from 'react';

function Landing() {
  return (
    <>
      <div className='content text-center p-6 bg-gray-100 min-h-screen flex flex-col items-center'>
        <h2 className='text-3xl font-bold mb-4'>Welcome to Auction App</h2>
        <img 
          src='https://source.unsplash.com/800x400/?auction,bidding' 
          alt='Auction Banner' 
          className='w-full max-w-2xl rounded-lg shadow-lg mb-4' 
        />
        <p className='text-lg max-w-2xl text-gray-700'>
          An auction is usually a process of buying and selling goods or services by offering them up for bids, taking bids, and then selling the item to the highest bidder or buying the item from the lowest bidder. Some exceptions to this definition exist and are described in the section about different types.
        </p>
        <img 
          src='https://source.unsplash.com/600x300/?gavel,auction-house' 
          alt='Gavel and Auction House' 
          className='w-full max-w-lg rounded-lg shadow-md mt-4' 
        />
      </div>
    </>
  );
}

export default Landing;
