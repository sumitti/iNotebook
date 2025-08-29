import React,{useEffect} from 'react'
import { BookOpen, Plus, Edit3, Trash2, Search, Tag, Calendar, Shield, Cloud, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const videoModal = document.getElementById("videoModal");
    const demoVideo = document.getElementById("demoVideo");
  
    // Play when modal opens
    videoModal.addEventListener("shown.bs.modal", () => {
      demoVideo.play();
    });
  
    // Pause & reset when modal closes
    videoModal.addEventListener("hidden.bs.modal", () => {
      demoVideo.pause();
      demoVideo.currentTime = 0;
    });
  }, []);
  

  const handleClick = () => {
    navigate('/about');
  };
  const handleNote = () => {
    navigate('/login');
  };
  return (
    <div>

      {/* Hero Section */}
      <section className="bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center" style={{ minHeight: '80vh' }}>
            <div className="col-lg-6">
              <div className="mb-5">
                <h1 className="display-2 fw-bold mb-4">
                  Welcome to <span className="text-warning">iNotebook</span>
                </h1>
                <p className="lead fs-4 mb-4 opacity-90">
                  Organize your thoughts, ideas, and notes in one beautiful place.
                  Create, edit, and manage your notes with ease.
                </p>
                <div className="d-flex gap-3 flex-wrap">
                  <button className="btn btn-warning btn-lg px-4 py-3" onClick={handleNote}>
                    <Plus size={20} className="me-2" />
                    Start Taking Notes
                  </button>
                  <button className="btn btn-outline-light btn-lg px-4 py-3" onClick={handleClick}>
                    Learn More
                  </button>
                </div>
              </div>

              {/* Stats */}
              <div className="row g-4 mt-4">
                <div className="col-4 text-center">
                  <h2 className="fw-bold text-warning mb-1">50+</h2>
                  <p className="text-light mb-0">Happy Users</p>
                </div>
                <div className="col-4 text-center">
                  <h2 className="fw-bold text-warning mb-1">100+</h2>
                  <p className="text-light mb-0">Notes Created</p>
                </div>
                <div className="col-4 text-center">
                  <h2 className="fw-bold text-warning mb-1">99.9%</h2>
                  <p className="text-light mb-0">Uptime</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 text-center">
              <div className="position-relative">
                {/* Main illustration card */}
                <div className="position-relative d-inline-block">
                  <div className="bg-white rounded p-5 mb-4 shadow">
                    <BookOpen size={64} className="text-primary mb-3" />
                    <h4 className="text-dark fw-bold">Your Digital Notebook</h4>
                  </div>

                  {/* Floating icon elements */}
                  <div className="bg-warning rounded p-3 shadow position-absolute top-0 end-0 translate-middle">
                    <Edit3 size={24} className="text-white" />
                  </div>

                  <div className="bg-success rounded p-3 shadow position-absolute bottom-0 start-0 translate-middle">
                    <Search size={24} className="text-white" />
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="position-absolute top-0 start-0 m-5">
                  <div className="bg-warning rounded opacity-75" style={{ width: '15px', height: '15px' }}></div>
                </div>
                <div className="position-absolute bottom-0 end-0 m-5">
                  <div className="bg-light rounded opacity-75" style={{ width: '20px', height: '20px' }}></div>
                </div>
                <div className="position-absolute" style={{ top: '30%', right: '10%' }}>
                  <div className="bg-success rounded opacity-50" style={{ width: '12px', height: '12px' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold text-dark mb-3">Powerful Features</h2>
            <p className="lead text-muted">Everything you need to organize your thoughts and boost productivity</p>
          </div>

          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="card border-0 shadow h-100 text-center p-4">
                <div className="bg-primary bg-opacity-25 rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
                  <Plus size={32} className="text-primary" />
                </div>
                <h5 className="fw-bold mb-3">Create Notes</h5>
                <p className="text-muted">Quickly create new notes with rich text formatting and organize them by categories.</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="card border-0 shadow h-100 text-center p-4">
                <div className="bg-success bg-opacity-25 rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
                  <Edit3 size={32} className="text-success" />
                </div>
                <h5 className="fw-bold mb-3">Edit & Update</h5>
                <p className="text-muted">Seamlessly edit your notes anytime. Your changes are saved instantly and securely.</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="card border-0 shadow h-100 text-center p-4">
                <div className="bg-danger bg-opacity-25 rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
                  <Trash2 size={32} className="text-danger" />
                </div>
                <h5 className="fw-bold mb-3">Delete Notes</h5>
                <p className="text-muted">Remove unwanted notes with a simple click. Safe deletion with confirmation prompts.</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="card border-0 shadow h-100 text-center p-4">
                <div className="bg-warning bg-opacity-25 rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
                  <Search size={32} className="text-warning" />
                </div>
                <h5 className="fw-bold mb-3">Smart Search</h5>
                <p className="text-muted">Find any note instantly with our powerful search that works across titles and content.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold mb-4">Why Choose iNotebook?</h2>

              <div className="d-flex mb-4">
                <div className="bg-primary bg-opacity-25 rounded-circle me-3 d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '50px', height: '50px' }}>
                  <Tag size={20} className="text-primary" />
                </div>
                <div>
                  <h5 className="fw-bold mb-2">Smart Categories</h5>
                  <p className="text-muted mb-0">Organize notes with color-coded tags and categories for easy filtering and management.</p>
                </div>
              </div>

              <div className="d-flex mb-4">
                <div className="bg-success bg-opacity-25 rounded-circle me-3 d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '50px', height: '50px' }}>
                  <Calendar size={20} className="text-success" />
                </div>
                <div>
                  <h5 className="fw-bold mb-2">Time Tracking</h5>
                  <p className="text-muted mb-0">Automatic timestamps help you track when notes were created and last modified.</p>
                </div>
              </div>

              <div className="d-flex mb-4">
                <div className="bg-info bg-opacity-25 rounded-circle me-3 d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '50px', height: '50px' }}>
                  <Cloud size={20} className="text-info" />
                </div>
                <div>
                  <h5 className="fw-bold mb-2">Cloud Sync</h5>
                  <p className="text-muted mb-0">Access your notes from anywhere with secure cloud synchronization across all devices.</p>
                </div>
              </div>

              <div className="d-flex">
                <div className="bg-warning bg-opacity-25 rounded-circle me-3 d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '50px', height: '50px' }}>
                  <Shield size={20} className="text-warning" />
                </div>
                <div>
                  <h5 className="fw-bold mb-2">Secure & Private</h5>
                  <p className="text-muted mb-0">Your notes are encrypted and stored securely. Your privacy is our top priority.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="text-center">
                {/* Illustration placeholder */}
                <div className="position-relative">
                  <div className="bg-primary text-white rounded p-5">
                    <BookOpen size={80} className="mb-3" />
                    <h4 className="fw-bold">Beautiful Interface</h4>
                    <p>Clean, modern design that helps you focus on what matters most - your ideas.</p>
                  </div>

                  {/* Floating elements */}
                  <div className="position-absolute bg-warning rounded-circle shadow top-0 end-0 m-3" style={{ width: '40px', height: '40px' }}></div>
                  <div className="position-absolute bg-success rounded-circle shadow bottom-0 start-0 m-4" style={{ width: '25px', height: '25px' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-dark text-white">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="display-4 fw-bold mb-4">Ready to Get Started?</h2>
              <p className="lead mb-4">
                Join thousands of users who have already transformed their note-taking experience with iNotebook.
              </p>

              <div className="d-flex justify-content-center gap-3 mb-4">
                <button className="btn btn-warning btn-lg px-4 py-3" onClick={handleNote}>
                  <Plus size={20} className="me-2" />
                  Start Free Today
                </button>

                {/* View Demo Button (opens modal) */}
                <button
                  className="btn btn-outline-light btn-lg px-4 py-3"
                  data-bs-toggle="modal"
                  data-bs-target="#videoModal"
                >
                  View Demo
                </button>
              </div>

              {/* Star rating */}
              <div className="d-flex justify-content-center align-items-center gap-2 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-warning" fill="currentColor" />
                ))}
                <span className="ms-2 text-white-50">4.9/5 from 2,000+ reviews</span>
              </div>

              <p className="small text-white-50 mb-0">
                No credit card required • Free forever • Premium features available
              </p>
            </div>
          </div>
        </div>

        {/* Video Modal */}
        <div className="modal fade" id="videoModal" tabIndex="-1" aria-labelledby="videoModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content bg-dark">
              <div className="modal-header border-0">
                <h5 className="modal-title text-light" id="videoModalLabel">Website Demo</h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body p-0">
                <video id="demoVideo" className="w-100 rounded" controls autoPlay>
                  <source src="/videos/demo.mp4" type="video/mp4" />  {/* 👈 place your demo.mp4 in /public/videos/ */}
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}