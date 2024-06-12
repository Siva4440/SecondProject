import React, { useState, useRef } from 'react';
import './Table.css';

export default function Table() {
  const tableData = [
    {
     uploadSource: 'Bank Statement',
      docType: 'Email Body',
      fileName: 'email from the file name',
      status: 'Process Ignored',
      uploadDate: '15-12-1998',
      errorDescription: 'Invalid Document',
      uploadBy: 'Staples_admin',
      emailReceivedFrom: 'abc@gmail.com'
    },
    {
     uploadSource: 'Bank Statement',
      docType: 'Email Body',
      fileName: 'email from the file name',
      status: 'Process Ignored',
      uploadDate: '15-12-1998',
      errorDescription: 'Invalid Document',
      uploadBy: 'Staples_admin',
      emailReceivedFrom: 'abc@gmail.com'
    },
    {
     uploadSource: 'Bank Statement',
      docType: 'Email Body',
      fileName: 'email from the file name email from the file name email from the file name ',
      status: 'Process Ignored',
      uploadDate: '15-12-1998',
      errorDescription: 'Invalid Document',
      uploadBy: 'Staples_admin',
      emailReceivedFrom: 'abc@gmail.com'
    },
    {
     uploadSource: 'Bank Statement',
      docType: 'Email Body',
      fileName: 'email from the file name',
      status: 'Process Ignored',
      uploadDate: '15-12-1998',
      errorDescription: 'Invalid Document',
      uploadBy: 'Staples_admin',
      emailReceivedFrom: 'abc@gmail.com'
    },
    {
     uploadSource: 'Bank Statement',
      docType: 'Email Body',
      fileName: 'email from the file name',
      status: 'Process Ignored',
      uploadDate: '15-12-1998',
      errorDescription: 'Invalid Document',
      uploadBy: 'Staples_admin',
      emailReceivedFrom: 'abc@gmail.com'
    },
    {
     uploadSource: 'Bank Statement',
      docType: 'Email Body',
      fileName: 'email from the file name',
      status: 'Process Ignored',
      uploadDate: '15-12-1998',
      errorDescription: 'Invalid Document',
      uploadBy: 'Staples_admin',
      emailReceivedFrom: 'abc@gmail.com'
    },
    {
     uploadSource: 'Bank Statement',
      docType: 'Email Body',
      fileName: 'email from the file name',
      status: 'Process Ignored',
      uploadDate: '15-12-1998',
      errorDescription: 'Invalid Document',
      uploadBy: 'Staples_admin',
      emailReceivedFrom: 'abc@gmail.com'
    },
    {
     uploadSource: 'Bank Statement',
      docType: 'Email Body',
      fileName: 'email from the file name',
      status: 'Process Ignored',
      uploadDate: '15-12-1998',
      errorDescription: 'Invalid Document',
      uploadBy: 'Staples_admin',
      emailReceivedFrom: 'abc@gmail.com'
    },
    {
     uploadSource: 'Bank Statement',
      docType: 'Email Body',
      fileName: 'email from the file name',
      status: 'Process Ignored',
      uploadDate: '15-12-1998',
      errorDescription: 'Invalid Document',
      uploadBy: 'Staples_admin',
      emailReceivedFrom: 'abc@gmail.com'
    },
    {
     uploadSource: 'Bank Statement',
      docType: 'Email Body',
      fileName: 'email from the file name',
      status: 'Process Ignored',
      uploadDate: '15-12-1998',
      errorDescription: 'Invalid Document',
      uploadBy: 'Staples_admin',
      emailReceivedFrom: 'abc@gmail.com'
    },
    {
     uploadSource: 'Bank Statement',
      docType: 'Email Body',
      fileName: 'email from the file name',
      status: 'Process Ignored',
      uploadDate: '15-12-1998',
      errorDescription: 'Invalid Document',
      uploadBy: 'Staples_admin',
      emailReceivedFrom: 'abc@gmail.com'
    },
    {
      uploadSource: 'Bank Statement',
      docType: 'Email Body',
      fileName: 'email from the file name',
      status: 'Process Ignored',
      uploadDate: '15-12-1998',
      errorDescription: 'Invalid Document',
      uploadBy: 'Staples_admin',
      emailReceivedFrom: 'abc@gmail.com'

    },
    {
     uploadSource: 'Bank Statement',
      docType: 'Email Body',
      fileName: 'email from the file name',
      status: 'Process Ignored',
      uploadDate: '15-12-1998',
      errorDescription: 'Invalid Document',
      uploadBy: 'Staples_admin',
      emailReceivedFrom: 'abc@gmail.com'
     
    }
    // Additional rows can be added here
  ];

  const [checkedState, setCheckedState] = useState(
    new Array(tableData.length).fill(false)
  );

  const [isHeaderChecked, setIsHeaderChecked] = useState(false);

  const tableContainerRef = useRef(null);

  const handleHeaderCheckboxChange = () => {
    const newCheckedState = checkedState.map(() => !isHeaderChecked);
    setCheckedState(newCheckedState);
    setIsHeaderChecked(!isHeaderChecked);
  };

  const handleRowCheckboxChange = (index) => {
    const newCheckedState = checkedState.map((item, idx) =>
      idx === index ? !item : item
    );
    setCheckedState(newCheckedState);
    setIsHeaderChecked(newCheckedState.every((item) => item));
  };

  const handleScrollRight = () => {
    if (tableContainerRef.current) {
      tableContainerRef.current.scrollBy({ left: 100, behavior: 'smooth' });
    }
  };

  const handleScrollLeft = () => {
    if (tableContainerRef.current) {
      tableContainerRef.current.scrollBy({ left: -100, behavior: 'smooth' });
    }
  };

  return (
    <div className='table-container' ref={tableContainerRef}>
      <table className='table-data'>
        <thead>
          <tr>
            <th>
              <input
                type='checkbox'
                checked={isHeaderChecked}
                onChange={handleHeaderCheckboxChange}
              />
            </th>
            <th>Upload Source</th>
            <th>Doc Type</th>
            <th>File Name</th>
            <th>Status</th>
            <th>Upload Date</th>
            <th>Error Description</th>
            <th>Upload By</th>
            <th>Email Received From</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>
                <input
                  type='checkbox'
                  checked={checkedState[index]}
                  onChange={() => handleRowCheckboxChange(index)}
                />
              </td>
              <td>{row.uploadSource}</td>
              <td>{row.docType}</td>
              <td>{row.fileName}</td>
              <td>{row.status}</td>
              <td>{row.uploadDate}</td>
              <td>{row.errorDescription}</td>
              <td>{row.uploadBy}</td>
              <td>{row.emailReceivedFrom}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className='arrow-button left' onClick={handleScrollLeft}>←</button>
      <button className='arrow-button right' onClick={handleScrollRight}>→</button>
    </div>
  );
}
