import React from 'react'
import { BookOpen, Users, Target, Heart, Award, Lightbulb, Shield, Zap, Github, Linkedin, Twitter, Mail } from 'lucide-react'

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center py-5">
            <div className="col-lg-6">
              <h1 className="display-3 fw-bold mb-4">
                About <span className="text-warning">iNotebook</span>
              </h1>
              <p className="lead fs-4 mb-4">
                We're passionate about helping people organize their thoughts and ideas. 
                Our mission is to make note-taking simple, beautiful, and accessible to everyone.
              </p>
              <div className="d-flex gap-4 mb-4">
                <div className="text-center">
                  <h3 className="fw-bold text-warning mb-1">2025</h3>
                  <p className="mb-0">Founded</p>
                </div>
                <div className="text-center">
                  <h3 className="fw-bold text-warning mb-1">50+</h3>
                  <p className="mb-0">Users</p>
                </div>
                <div className="text-center">
                  <h3 className="fw-bold text-warning mb-1">20+</h3>
                  <p className="mb-0">Active users</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <div className="position-relative">
                <div className="bg-white rounded p-5 shadow d-inline-block">
                  <Heart size={80} className="text-primary mb-3" />
                  <h4 className="text-dark fw-bold">Made with Love</h4>
                  <p className="text-muted">For productivity enthusiasts</p>
                </div>
                
                {/* Floating elements */}
                <div className="position-absolute bg-warning rounded-circle shadow top-0 end-0 translate-middle d-flex align-items-center justify-content-center" style={{width: '50px', height: '50px'}}>
                  <Lightbulb size={20} className="text-white" />
                </div>
                <div className="position-absolute bg-success rounded-circle shadow bottom-0 start-0 translate-middle d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px'}}>
                  <Target size={16} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="card border-0 shadow h-100 p-4">
                <div className="card-body">
                  <div className="bg-primary bg-opacity-25 rounded-circle mb-4 d-flex align-items-center justify-content-center mx-auto" style={{width: '80px', height: '80px'}}>
                    <Target size={32} className="text-primary" />
                  </div>
                  <h2 className="text-center fw-bold mb-4">Our Mission</h2>
                  <p className="text-muted fs-5 text-center">
                    To empower individuals and teams with intuitive note-taking tools that enhance productivity, 
                    creativity, and knowledge management. We believe everyone deserves access to beautiful, 
                    functional digital notebooks that adapt to their unique workflow.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card border-0 shadow h-100 p-4">
                <div className="card-body">
                  <div className="bg-warning bg-opacity-25 rounded-circle mb-4 d-flex align-items-center justify-content-center mx-auto" style={{width: '80px', height: '80px'}}>
                    <Lightbulb size={32} className="text-warning" />
                  </div>
                  <h2 className="text-center fw-bold mb-4">Our Vision</h2>
                  <p className="text-muted fs-5 text-center">
                    To become the world's most loved note-taking platform by 2030, helping millions of users 
                    capture, organize, and transform their ideas into reality. We envision a world where 
                    great ideas never get lost.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-3">Our Core Values</h2>
            <p className="lead text-muted">The principles that guide everything we do</p>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="text-center">
                <div className="bg-primary bg-opacity-25 rounded-circle mb-3 d-flex align-items-center justify-content-center mx-auto" style={{width: '80px', height: '80px'}}>
                  <Users size={32} className="text-primary" />
                </div>
                <h5 className="fw-bold mb-3">User-Centric</h5>
                <p className="text-muted">Every feature we build starts with understanding our users' needs and challenges.</p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="text-center">
                <div className="bg-success bg-opacity-25 rounded-circle mb-3 d-flex align-items-center justify-content-center mx-auto" style={{width: '80px', height: '80px'}}>
                  <Shield size={32} className="text-success" />
                </div>
                <h5 className="fw-bold mb-3">Privacy First</h5>
                <p className="text-muted">Your notes are yours. We implement the highest security standards to protect your data.</p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="text-center">
                <div className="bg-warning bg-opacity-25 rounded-circle mb-3 d-flex align-items-center justify-content-center mx-auto" style={{width: '80px', height: '80px'}}>
                  <Zap size={32} className="text-warning" />
                </div>
                <h5 className="fw-bold mb-3">Innovation</h5>
                <p className="text-muted">We constantly push boundaries to bring you cutting-edge features and experiences.</p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="text-center">
                <div className="bg-danger bg-opacity-25 rounded-circle mb-3 d-flex align-items-center justify-content-center mx-auto" style={{width: '80px', height: '80px'}}>
                  <Heart size={32} className="text-danger" />
                </div>
                <h5 className="fw-bold mb-3">Simplicity</h5>
                <p className="text-muted">Complex problems deserve elegant solutions. We make powerful tools feel effortless.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold mb-4">Our Story</h2>
              <p className="fs-5 text-muted mb-4">
                iNotebook was born from a simple frustration: existing note-taking apps were either too complex 
                or too basic. Our founder, a productivity enthusiast and software developer, spent countless hours 
                jumping between different apps, never finding the perfect balance of simplicity and power.
              </p>
              <p className="fs-5 text-muted mb-4">
                In late 2024, after one too many lost ideas and scattered notes, the decision was made: 
                build the note-taking app that should exist. Something beautiful, fast, and intuitive, 
                yet powerful enough for serious knowledge workers.
              </p>
              <p className="fs-5 text-muted">
                Today, iNotebook is trusted by thousands of users worldwide, from students and writers 
                to entrepreneurs and researchers. Every feature we add is driven by real user feedback 
                and our commitment to making note-taking a joy, not a chore.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="text-center">
                <div className="bg-primary rounded p-5 text-white shadow">
                  <BookOpen size={100} className="mb-4" />
                  <h3 className="fw-bold mb-3">The Journey Continues</h3>
                  <p className="fs-5">
                    We're just getting started. With your feedback and support, 
                    we're building the future of digital note-taking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-3">Meet Our Team</h2>
            <p className="lead text-muted">The passionate people behind iNotebook</p>
          </div>
          
          <div className="row g-4 justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow text-center">
                <div className="card-body p-4">
                  <div className="bg-primary bg-opacity-25 rounded-circle mb-3 d-flex align-items-center justify-content-center mx-auto" style={{width: '80px', height: '80px'}}>
                    <Users size={32} className="text-primary" />
                  </div>
                  <h5 className="fw-bold mb-2">Sumit Tiwari</h5>
                  <p className="text-warning mb-2">Founder & CEO</p>
                  <p className="text-muted small mb-3">
                    Full-stack developer with 8+ years of experience building user-centric applications.
                  </p>
                  <div className="d-flex justify-content-center gap-2">
                    <a href="https://linkedin.com" target='_blank' rel="noreferrer" className="btn btn-outline-primary btn-sm">
                      <Linkedin size={16} />
                    </a>
                    <a href="https://github.com" target='_blank' rel="noreferrer" className="btn btn-outline-dark btn-sm">
                      <Github size={16} />
                    </a>
                    <a href="https://x.com" target='_blank' rel="noreferrer" className="btn btn-outline-info btn-sm">
                      <Twitter size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow text-center">
                <div className="card-body p-4">
                  <div className="bg-success bg-opacity-25 rounded-circle mb-3 d-flex align-items-center justify-content-center mx-auto" style={{width: '80px', height: '80px'}}>
                    <Award size={32} className="text-success" />
                  </div>
                  <h5 className="fw-bold mb-2">Sumit</h5>
                  <p className="text-warning mb-2">Lead Designer</p>
                  <p className="text-muted small mb-3">
                    UX/UI specialist passionate about creating beautiful and intuitive user experiences.
                  </p>
                  <div className="d-flex justify-content-center gap-2">
                    <a href="https://linkedin.com" target='_blank' rel="noreferrer" className="btn btn-outline-primary btn-sm">
                      <Linkedin size={16} />
                    </a>
                    <a href="https://github.com" target='_blank' rel="noreferrer" className="btn btn-outline-dark btn-sm">
                      <Github size={16} />
                    </a>
                    <a href="https://x.com" target='_blank' rel="noreferrer" className="btn btn-outline-info btn-sm">
                      <Twitter size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow text-center">
                <div className="card-body p-4">
                  <div className="bg-warning bg-opacity-25 rounded-circle mb-3 d-flex align-items-center justify-content-center mx-auto" style={{width: '80px', height: '80px'}}>
                    <Zap size={32} className="text-warning" />
                  </div>
                  <h5 className="fw-bold mb-2">Sumit Tiwari</h5>
                  <p className="text-warning mb-2">Backend Engineer</p>
                  <p className="text-muted small mb-3">
                    Infrastructure expert ensuring iNotebook is fast, reliable, and secure for all users.
                  </p>
                  <div className="d-flex justify-content-center gap-2">
                    <a href="https://linkedin.com" target='_blank' rel="noreferrer" className="btn btn-outline-primary btn-sm">
                      <Linkedin size={16} />
                    </a>
                    <a href="https://github.com" target='_blank' rel="noreferrer" className="btn btn-outline-dark btn-sm">
                      <Github size={16} />
                    </a>
                    <a href="https://x.com" target='_blank' rel="noreferrer" className="btn btn-outline-info btn-sm">
                      <Twitter size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-5 bg-dark text-white">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="display-4 fw-bold mb-4">Get in Touch</h2>
              <p className="lead mb-4">
                Have questions, feedback, or just want to say hello? We'd love to hear from you.
              </p>
              
              <div className="d-flex justify-content-center gap-3 mb-4">
                <button className="btn btn-warning btn-lg px-4 py-3">
                  <Mail size={20} className="me-2" />
                  Contact Us
                </button>
                <button className="btn btn-outline-light btn-lg px-4 py-3">
                  Join Community
                </button>
              </div>
              
              <p className="text-white-50">
                response within 24 hours • Available Monday-Friday
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}