import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white border-top">
      <div className="container py-3">
        <div className="d-flex justify-content-center align-items-center flex-wrap">
          <span>&copy; {currentYear} INOTEBOOK. All rights reserved.</span>          
          <span>Made with</span>
          <Heart className="text-danger mx-1" size={16} />
          <span>by our team</span>
        </div>
      </div>
    </footer>
  );
}
