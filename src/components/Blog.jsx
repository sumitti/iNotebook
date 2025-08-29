import React, { useState } from 'react';
import Swal from 'sweetalert2';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [email, setEmail] = useState("");

  const handleClick = () => {
    // Trim spaces
    const trimmedEmail = email.trim();

    // Empty validation
    if (!trimmedEmail) {
      Swal.fire({
        toast: true,
        position: 'bottom-end',
        icon: 'error',
        title: 'Email is required!',
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
        showCloseButton: true,
      });
      return;
    }

    // Regex for simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(trimmedEmail)) {
      Swal.fire({
        toast: true,
        position: 'bottom-end',
        icon: 'error',
        title: 'Enter a valid email address!',
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
        showCloseButton: true,
      });
      return;
    }

    // Success case
    Swal.fire({
      toast: true,
      position: 'bottom-end',
      icon: 'success',
      title: `Subscribed with ${trimmedEmail}`,
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false,
      showCloseButton: true,
    });

    setEmail(""); // Clear input
  };


  const blogPosts = [
    {
      id: 1,
      title: "10 Proven Note-Taking Strategies That Will Transform Your Productivity",
      excerpt: "Discover evidence-based techniques that successful professionals use to capture, organize, and recall information more effectively than ever before.",
      content: "In today's fast-paced world, effective note-taking isn't just a skill—it's a superpower. Whether you're a student, professional, or lifelong learner, mastering the art of note-taking can dramatically improve your productivity and retention...",
      category: "Productivity",
      author: "Sarah Chen",
      authorImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=64&h=64&fit=crop&crop=face",
      date: "2024-03-15",
      readTime: "8 min read",
      url:"https://nocal.app/blog/2025/05/10-effective-note-taking-methods",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=400&fit=crop",
      tags: ["productivity", "note-taking", "organization", "study-tips"],
      featured: true
    },
    {
      id: 2,
      title: "The Science Behind Digital Note-Taking: Why Your Brain Loves iNotebook",
      excerpt: "Research shows that digital note-taking can enhance memory retention by up to 42%. Learn how iNotebook leverages cognitive science principles.",
      content: "Recent neuroscience research has revealed fascinating insights about how our brains process and retain information from digital notes...",
      category: "Science",
      author: "Dr. Michael Rodriguez",
      authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
      date: "2024-03-12",
      readTime: "6 min read",
      url:"https://www.scientificamerican.com/article/why-writing-by-hand-is-better-for-memory-and-learning/",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop",
      tags: ["science", "memory", "digital-tools", "research"],
      featured: false
    },
    {
      id: 3,
      title: "From Chaos to Clarity: How Students Are Revolutionizing Study Habits",
      excerpt: "Meet three students who transformed their academic performance using innovative note-taking methods and digital organization systems.",
      content: "Academic success isn't just about studying harder—it's about studying smarter. These student success stories showcase the power of organized thinking...",
      category: "Student Success",
      author: "Emma Thompson",
      authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
      date: "2024-03-10",
      readTime: "5 min read",
      url:"https://medium.com/@sranharkirat15/from-chaos-to-clarity-improved-study-habits-for-student-success-2467aead42c5",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop",
      tags: ["students", "success-stories", "study-methods", "organization"],
      featured: false
    },
    {
      id: 4,
      title: "Building Better Habits: The Psychology of Consistent Note-Taking",
      excerpt: "Unlock the secrets of habit formation and discover how to make note-taking a natural, effortless part of your daily routine.",
      content: "Creating lasting habits isn't about willpower—it's about understanding the psychology behind behavioral change and designing systems that work with your brain...",
      category: "Psychology",
      author: "James Wilson",
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
      date: "2024-03-08",
      readTime: "7 min read",
      url:"https://skooloflife.medium.com/10-habits-of-highly-effective-note-takers-c81bd1c9201d",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
      tags: ["habits", "psychology", "productivity", "behavior"],
      featured: false
    },
    {
      id: 5,
      title: "Remote Work Revolution: Essential Note-Taking Tools for Distributed Teams",
      excerpt: "As remote work becomes the norm, discover the collaborative note-taking strategies that keep distributed teams aligned and productive.",
      content: "The shift to remote work has fundamentally changed how teams collaborate and share knowledge. Effective note-taking has become more critical than ever...",
      category: "Remote Work",
      author: "Lisa Park",
      authorImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=64&h=64&fit=crop&crop=face",
      date: "2024-03-05",
      readTime: "9 min read",
      url:"https://www.tsedal.com/book/remote-work-revolution/",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop",
      tags: ["remote-work", "collaboration", "teams", "productivity"],
      featured: true
    },
    {
      id: 6,
      title: "Creative Mind Mapping: Unleashing Innovation Through Visual Note-Taking",
      excerpt: "Discover how visual note-taking techniques can boost creativity, improve problem-solving, and help you generate breakthrough ideas.",
      content: "Traditional linear notes only engage one side of your brain. Visual note-taking techniques activate both hemispheres, leading to enhanced creativity...",
      category: "Creativity",
      author: "Alex Chen",
      authorImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=64&h=64&fit=crop&crop=face",
      date: "2024-03-02",
      readTime: "6 min read",
      url:"https://realitypathing.com/how-to-use-mind-mapping-for-creative-ideas-generation/",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=400&fit=crop",
      tags: ["creativity", "mind-mapping", "visual-thinking", "innovation"],
      featured: false
    }
  ];

  const categories = ['All', 'Productivity', 'Science', 'Student Success', 'Psychology', 'Remote Work', 'Creativity'];

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);
  // eslint-disable-next-line
  const recentPosts = blogPosts.slice(0, 4);

  return (
    <>
      {/* SEO Meta Tags (would typically be in document head) */}
      <div style={{ display: 'none' }}>
        <meta name="description" content="Discover expert tips, research-backed strategies, and inspiring stories about note-taking, productivity, and digital organization. Transform how you capture and organize your thoughts with iNotebook." />
        <meta name="keywords" content="note-taking, productivity, digital notes, organization, study tips, iNotebook, note-taking app, productivity blog" />
        <meta property="og:title" content="iNotebook Blog - Expert Tips for Better Note-Taking & Productivity" />
        <meta property="og:description" content="Discover proven strategies and expert insights to revolutionize your note-taking and boost productivity with iNotebook." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://inotebook.com/blog" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="iNotebook Blog - Expert Note-Taking Tips" />
        <title>iNotebook Blog - Expert Tips for Better Note-Taking & Productivity</title>
      </div>

      <div className="min-vh-100 bg-light">

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary text-white py-5" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <h1 className="display-4 fw-bold mb-4">
                  Master the Art of <span className="text-warning">Note-Taking</span>
                </h1>
                <p className="lead mb-4 opacity-90">
                  Discover expert insights, proven strategies, and inspiring stories that will transform
                  how you capture, organize, and use your thoughts and ideas.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <div className="d-flex align-items-center">
                    <div className="bg-dark bg-opacity-20 rounded-circle p-2 me-2">
                      <svg className='align-text-bottom' width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.374.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                      </svg>
                    </div>
                    <span className="small">50+ Readers</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="bg-dark bg-opacity-20 rounded-circle p-2 me-2">
                      <svg className='align-text-bottom' width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                    <span className="small">Expert Insights</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="bg-dark bg-opacity-20 rounded-circle p-2 me-2">
                      <svg className='align-text-bottom' width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.5-1.5H2V1.78a1.5 1.5 0 0 1 2.136-1.454l1.71.426L7.71.326a1.5 1.5 0 0 1 .58 0l1.865.472 1.71-.426z" />
                      </svg>
                    </div>
                    <span className="small">Weekly Updates</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 text-center">
                <div className="bg-white bg-opacity-10 rounded-3 p-4 backdrop-blur">
                  <h5 className="mb-3">📧 Never Miss an Update</h5>
                  <p className="small opacity-90 mb-3">Get our latest productivity tips delivered to your inbox</p>
                  <div className="input-group">
                    <input type="email" className="form-control" placeholder="Enter your email" required={true} value={email} onChange={(e) => setEmail(e.target.value)} />
                    <button className="btn btn-warning fw-semibold" type="button" onClick={handleClick}>Subscribe</button>
                  </div>
                  <small className="text-white-50 mt-2 d-block">Join 10,000+ productive people</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-5">
          <div className="container">
            <div className="row mb-5">
              <div className="col-12">
                <h2 className="h3 fw-bold text-center mb-2">Featured Articles</h2>
                <p className="text-muted text-center">Hand-picked stories to inspire and educate</p>
              </div>
            </div>
            <div className="row g-4">
              {featuredPosts.map((post) => (
                <div key={post.id} className="col-lg-6">
                  <article className="card h-100 shadow-sm border-0 overflow-hidden hover-lift">
                    <div className="position-relative">
                      <img src={post.image} className="card-img-top" alt={post.title} style={{ height: '250px', objectFit: 'cover' }} />
                      <div className="position-absolute top-0 start-0 m-3">
                        <span className="badge bg-primary bg-opacity-90 backdrop-blur">{post.category}</span>
                      </div>
                    </div>
                    <div className="card-body d-flex flex-column p-4">
                      <a href={post.url} target='_blank' rel="noreferrer">
                      <h3 className="card-title h5 fw-bold mb-3">{post.title}</h3>
                      </a>
                      <p className="card-text text-muted mb-4 flex-grow-1">{post.excerpt}</p>                      
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <img src={post.authorImage} className="rounded-circle me-2" width="32" height="32" alt={post.author} />
                          <div className="small">
                            <div className="fw-semibold">{post.author}</div>
                            <div className="text-muted">{new Date(post.date).toLocaleDateString()}</div>
                          </div>
                        </div>
                        <span className="badge bg-light text-dark">{post.readTime}</span>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter & Blog Grid */}
        <section className="py-5 bg-white">
          <div className="container">
            <div className="row">
              <div className="col-12 mb-5">
                <h2 className="h3 fw-bold text-center mb-4">Explore All Articles</h2>

                {/* Category Filter */}
                <div className="d-flex justify-content-center mb-4">
                  <div className="btn-group flex-wrap" role="group">
                    {categories.map((category) => (
                      <button
                        key={category}
                        type="button"
                        className={`btn ${selectedCategory === category ? 'btn-primary' : 'btn-outline-primary'} btn-sm`}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="row g-4">
              {filteredPosts.map((post) => (
                <div key={post.id} className="col-lg-4 col-md-6">
                  <article className="card h-100 shadow-sm border-0 hover-lift">
                    <div className="position-relative">
                      <img src={post.image} className="card-img-top" alt={post.title} style={{ height: '200px', objectFit: 'cover' }} />
                      <div className="position-absolute top-0 start-0 m-3">
                        <span className="badge bg-white text-primary">{post.category}</span>
                      </div>
                    </div>
                    <div className="card-body d-flex flex-column p-4">
                      <a href={post.url} target='_blank' rel="noreferrer">
                      <h3 className="card-title h6 fw-bold mb-3">{post.title}</h3>
                      </a>
                      <p className="card-text text-muted small mb-3 flex-grow-1">{post.excerpt}</p>

                      {/* Tags */}
                      <div className="mb-3">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="badge bg-light text-secondary me-1 small">#{tag}</span>
                        ))}
                      </div>

                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <img src={post.authorImage} className="rounded-circle me-2" width="28" height="28" alt={post.author} />
                          <div className="small text-muted">
                            <div>{post.author}</div>
                            <div>{new Date(post.date).toLocaleDateString()}</div>
                          </div>
                        </div>
                        <span className="badge bg-primary bg-opacity-10 text-primary">{post.readTime}</span>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-5" style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8">
                <div className="text-white">
                  <h2 className="display-6 fw-bold mb-4">Stay Ahead of the Curve</h2>
                  <p className="lead mb-5 opacity-90">
                    Join thousands of productive professionals who get our weekly insights on note-taking,
                    productivity, and digital organization delivered straight to their inbox.
                  </p>
                  <div className="row justify-content-center">
                    <div className="col-md-8">
                      <div className="input-group input-group-lg mb-3">
                        <input type="email" className="form-control" placeholder="Your email address" required={true} value={email} onChange={(e) => setEmail(e.target.value)} />
                        <button className="btn btn-warning btn-lg fw-semibold px-4" type="button" onClick={handleClick}>
                          Subscribe Free
                        </button>
                      </div>
                      <small className="text-white-75">
                        ✨ Free forever • 📧 Weekly updates • 🚫 No spam, unsubscribe anytime
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

    </>)
};