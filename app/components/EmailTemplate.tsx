import React from 'react';

interface EmailTemplateProps {
  senderName: string;
  senderEmail: string;
  message: string;
}

const EmailTemplate = ({ senderName, senderEmail, message }: EmailTemplateProps) => {
  return (
    <div className="font-sans text-gray-800 leading-relaxed">
      <h2 className="text-xl font-bold mb-4">New Connection Request</h2>
      <p className="mb-2"><strong>From:</strong> {senderName} ({senderEmail})</p>
      <p className="mb-2"><strong>Message:</strong></p>
      <p>{message}</p>
    </div>
  );
};

export default EmailTemplate;
