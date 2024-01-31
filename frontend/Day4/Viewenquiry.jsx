// EnquiryListPage.js

// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Viewenquiry.css'; // Import the CSS file

const Viewenquiry = () => {
  const [enquiries, setEnquiries] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', message: 'Interested in your services.', courseName: 'Advanced English Grammar and Composition' },
    { id: 2, name: 'John Doe', email: 'john@example.com', message: 'Need more information.', courseName: 'Professional Business English Communication' },
    // Add more sample data as needed
  ]);

  const handleDelete = (enquiryId) => {
    // Filter out the enquiry with the specified ID
    const updatedEnquiries = enquiries.filter(enquiry => enquiry.id !== enquiryId);
    setEnquiries(updatedEnquiries);
  };

  return (
    <div>
        <div className='bod-enq'>
      <h2>Enquiry List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Course Name</th> {/* New column for Course Name */}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {enquiries.map(enquiry => (
            <tr key={enquiry.id}>
              <td>{enquiry.id}</td>
              <td>{enquiry.name}</td>
              <td>{enquiry.email}</td>
              <td>{enquiry.message}</td>
              <td>{enquiry.courseName}</td> {/* Display Course Name */}
              <td>
                <button className="delete-button" onClick={() => handleDelete(enquiry.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Viewenquiry;
