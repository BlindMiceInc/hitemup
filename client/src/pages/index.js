import React from 'react';
import MailInForm from './components/mailInForm';
import 'bootstrap/dist/css/bootstrap.css';

// Put any other imports below so that CSS from your
// components takes precedence over default styles.

export default function Home() {
  return (
    <div className="jumbotron">
      <h1>Mail Activism Website</h1>
      <MailInForm></MailInForm>
    </div>
  );
}
