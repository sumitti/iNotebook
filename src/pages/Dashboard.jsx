import React, { useContext, useEffect, useState } from 'react';
import { Plus, LogOut, Search, MoreVertical, Calendar, Share2, Edit3, Trash2, BookOpen, Package } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import noteContext from '../context/notes/noteContext';
import Swal from 'sweetalert2';
import '../App.css';

const Dashboard = () => {
  const context = useContext(noteContext);
  const { notes, deleteNote, getNotes } = context;
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();
  const storedName = localStorage.getItem("name");

  const handleLogout = async () => {
    const result = await Swal.fire({
      theme: 'dark',
      title: 'Confirm Logout',
      width: '24em',
      text: 'Are you sure you want to log out?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel'
    });
    if (result.isConfirmed) {
      localStorage.removeItem('token');
      localStorage.removeItem('name');
      navigate('/', { replace: true });
    }
  };

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);

  const addNewNote = () => {
    navigate('/addnote');
  };

  const toggleDropdown = (noteId, event) => {
    event.stopPropagation();
    setActiveDropdown(activeDropdown === noteId ? null : noteId);
  };

  const handleShare = (note) => {
    navigator.share ?
      navigator.share({ title: note.title, text: note.description }) :
      alert(`Sharing: ${note.title}`);
    setActiveDropdown(null);
  };

  const handleEdit = async (note) => {
    const result = await Swal.fire({
      theme: 'dark',
      title: 'Confirm Edit?',
      html: `You are about to edit the note: <strong>${note.title}</strong>.<br>Proceed to the edit page?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#007bff',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Yes, Edit!',
      cancelButtonText: 'No, Cancel'
    });

    if (result.isConfirmed) {
      navigate('/addnote', { state: { note } });
    }
    setActiveDropdown(null);
  };

  const handleDelete = async (noteId) => {
    setActiveDropdown(null);
    const result = await Swal.fire({
      theme: 'dark',
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel'
    });
    if (result.isConfirmed) {
      // User clicked "Yes, delete it!"      
      deleteNote(noteId); // Call delete function
      Swal.fire({
        theme: 'dark',
        toast: true,
        position: 'bottom-end',
        icon: 'success',
        title: 'Your note has been deleted.',
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
        showCloseButton: true,
        customClass: {
          container: 'swal2-bottom-end-blinking-toast'
        }
      });
    }
  };

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-vh-100 bg-dark text-light" onClick={() => setActiveDropdown(null)}>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-dark border-bottom border-secondary sticky-top">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <Link className="navbar-brand fw-bold text-warning d-flex align-items-center" to="/dashboard">
            <BookOpen size={24} className="me-2" />
            iNOTEBOOK
          </Link>

          <div className="d-flex align-items-center gap-3">
            {/* Search Bar (hidden on small screens) */}
            <div className="position-relative d-none d-sm-block">
              <Search className="position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary" size={16} />
              <input
                type="text"
                placeholder="Search notes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="form-control bg-dark text-light border-secondary rounded-pill ps-5"
                style={{ width: '250px' }}
              />
            </div>

            {/* User Avatar */}
            <img
              src={`https://api.dicebear.com/9.x/initials/svg?seed=${storedName}&backgroundColor=2563EB&backgroundType=gradientLinear`}
              alt="User Avatar"
              className="rounded-circle border border-2 border-secondary"
              width="40"
              height="40"
            />

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="btn btn-outline-danger p-2"
              title="Logout"
            >
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container-fluid py-4">

        {/* Header Section */}
        <div className="mb-4">
          <h2 className="fw-bold text-light mb-1">Your Notes</h2>
          <p className="text-secondary my-2">Capture your thoughts and ideas</p>
        </div>

        {/* Action Bar */}
        <div className="row justify-content-between align-items-center mb-4">
          <div className="col-auto">
            <div className="d-flex gap-2">
              <button
                onClick={addNewNote}
                className="btn btn-primary rounded-pill px-4 py-2 fw-semibold shadow-sm"
              >
                <Plus size={18} className="me-2" />
                New Note
              </button>
            </div>
          </div>
          <div className="col-auto">
            <small className="text-secondary fw-medium">{filteredNotes.length} notes found</small>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="mb-4 d-sm-none">
          <div className="position-relative">
            <Search className="position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary" size={16} />
            <input
              type="text"
              placeholder="Search notes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-control bg-dark text-light border-secondary rounded-pill ps-5"
            />
          </div>
        </div>

        {/* Notes Grid */}
        <div className="row g-4 border-top border-secondary p-4 mx-1 my-2">
          {/* If no notes */}
          {filteredNotes.length === 0 && !searchQuery ? (
            <div className="col-12 text-center py-5">
              {/* Empty Box Icon */}
              <div className="mb-3 text-secondary d-flex justify-content-center">
                <Package size={64} strokeWidth={1.5} />
              </div>

              {/* Message */}
              <h5 className="text-light fw-semibold">No notes yet</h5>
              <p className="text-secondary small">Your notes will appear here once added.</p>
            </div>) : (
            filteredNotes.map((note) => (
              <div key={note._id} className="col-12 col-sm-6 col-lg-4 col-xl-3">
                <div
                  className="card h-100 bg-dark border border-secondary shadow-sm position-relative"
                  style={{ cursor: "pointer" }}
                >
                  {note.hasImage && (
                    <div
                      className="card-img-top"
                      style={{
                        height: "120px",
                        backgroundImage: `url(${note.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                  )}

                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <h5 className="card-title fw-semibold text-light text-truncate flex-grow-1 me-2">
                        {note.title}
                      </h5>
                      <div className="dropdown">
                        <button
                          onClick={(e) => toggleDropdown(note._id, e)}
                          className="btn btn-link p-0 text-secondary border-0 bg-transparent"
                          style={{ fontSize: "0" }}
                        >
                          <MoreVertical size={16} />
                        </button>

                        {activeDropdown === note._id && (
                          <div className="dropdown-menu dropdown-menu-end show position-absolute shadow border-0 rounded-3 py-2 bg-dark border border-secondary" style={{ top: "100%", right: "0", zIndex: 1000 }}>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleShare(note);
                              }}
                              className="dropdown-item d-flex align-items-center py-2 px-3 bg-dark text-light border-0"
                            >
                              <Share2 size={16} className="me-3" />
                              Share
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleEdit(note);
                              }}
                              className="dropdown-item d-flex align-items-center py-2 px-3 bg-dark text-light border-0"
                            >
                              <Edit3 size={16} className="me-3" />
                              Edit
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDelete(note._id);
                              }}
                              className="dropdown-item d-flex align-items-center py-2 px-3 text-danger bg-dark border-0"
                            >
                              <Trash2 size={16} className="me-3" />
                              Delete
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    <p
                      className="card-text text-secondary small lh-base mb-3"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {note.description}
                    </p>

                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-secondary d-flex align-items-center">
                        <Calendar size={12} className="me-1" />
                        {new Date(note.date).toLocaleString()}
                      </small>
                      <div
                        className={`rounded-circle ${note.color}`}
                        style={{ width: "12px", height: "12px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Empty State */}
        {filteredNotes.length === 0 && searchQuery && (
          <div className="text-center py-5">
            <div className="bg-secondary rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '64px', height: '64px' }}>
              <Search size={32} className="text-light" />
            </div>
            <h4 className="fw-medium text-light mb-2">No notes found</h4>
            <p className="text-secondary">Try searching with different keywords</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
