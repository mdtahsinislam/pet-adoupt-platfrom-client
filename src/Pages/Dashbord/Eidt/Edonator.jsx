// // import React from 'react';
// // import { Dialog, DialogHeader, DialogBody, Typography } from '@material-tailwind/react';
// // import { format } from 'date-fns';

// // const  Edonator= ({ isOpen, onClose, donators, petName }) => {
// //     return (
// //         <Dialog open={isOpen} handler={onClose} size="sm">
// //             <DialogHeader className="flex justify-between items-center">
// //                 <Typography variant="h5" color="blue-gray">
// //                     Donators for {petName}
// //                 </Typography>
// //             </DialogHeader>
// //             <DialogBody divider>
// //                 {donators.length > 0 ? (
// //                     <ul className="space-y-4">
// //                         {donators.map((donator) => (
// //                             <li key={donator._id} className="border-b pb-2 last:border-b-0">
// //                                 <Typography variant="h6" color="blue-gray">
// //                                     {donator.name}
// //                                 </Typography>
// //                                 <Typography variant="small" color="gray">
// //                                     Amount: ${donator.amount}
// //                                 </Typography>
// //                                 <Typography variant="small" color="gray">
// //                                     Donated on: {format(new Date(donator.donatedAt), 'MMMM d, yyyy h:mm a')}
// //                                 </Typography>
// //                             </li>
// //                         ))}
// //                     </ul>
// //                 ) : (
// //                     <Typography>No one has donated to this campaign yet.</Typography>
// //                 )}
// //             </DialogBody>
// //         </Dialog>
// //     );
// // };

// // export default   Edonator;


// import React from 'react';
// import { Dialog, DialogHeader, DialogBody, Typography } from '@material-tailwind/react';
// import { format } from 'date-fns';

// const Edonator = ({ isOpen, onClose, donators, petName }) => {
//     return (
//         <Dialog open={isOpen} handler={onClose} size="sm">
//             <DialogHeader className="flex justify-between items-center">
//                 <Typography variant="h5" color="blue-gray">
//                     Donators for {petName}
//                 </Typography>
//             </DialogHeader>
//             <DialogBody divider>
//                 {donators.length > 0 ? (
//                     <ul className="space-y-4">
//                         {donators.map((donator) => (
//                             <li key={donator._id} className="border-b pb-2 last:border-b-0">
//                                 <Typography variant="h6" color="blue-gray">
//                                     {donator.name}
//                                 </Typography>
//                                 <Typography variant="small" color="gray">
//                                     Email: {donator.email}
//                                 </Typography>
//                                 <Typography variant="small" color="gray">
//                                     Amount: ${donator.amount}
//                                 </Typography>
//                                 <Typography variant="small" color="gray">
//                                     Donated on: {format(new Date(donator.donatedAt), 'MMMM d, yyyy h:mm a')}
//                                 </Typography>
//                             </li>
//                         ))}
//                     </ul>
//                 ) : (
//                     <Typography>No one has donated to this campaign yet.</Typography>
//                 )}
//             </DialogBody>
//         </Dialog>
//     );
// };

// export default Edonator;



import React from 'react';
import { Dialog, DialogHeader, DialogBody, Typography } from '@material-tailwind/react';
import { format } from 'date-fns';

const  Edonator= ({ isOpen, onClose, donators, petName }) => {
    return (
        <Dialog open={isOpen} handler={onClose} size="sm">
            <DialogHeader className="flex justify-between items-center">
                <Typography variant="h5" color="blue-gray">
                    Donators for {petName}
                </Typography>
            </DialogHeader>
            <DialogBody divider>
                {donators.length > 0 ? (
                    <ul className="space-y-4">
                        {donators.map((donator) => (
                            <li key={donator._id} className="border-b pb-2 last:border-b-0">
                                <Typography variant="h6" color="blue-gray">
                                    {donator.donatorEmail} 
                                </Typography>
                                <Typography variant="small" color="gray">
                                    Amount: ${donator.amount}
                                </Typography>
                                <Typography variant="small" color="gray">
                                    Donated on: {format(new Date(donator.donatedAt), 'MMMM d, yyyy h:mm a')}
                                </Typography>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <Typography>No one has donated to this campaign yet.</Typography>
                )}
            </DialogBody>
        </Dialog>
    );
};

export default Edonator;
