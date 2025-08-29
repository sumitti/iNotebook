import React, { useState, useContext } from 'react';
import '../App.css'
import { useNavigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import noteContext from '../context/notes/noteContext';
import html2pdf from "html2pdf.js";
import MDEditor from "@uiw/react-md-editor";
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import {
  ArrowLeft, Save, MoreVertical, Calendar, WrapText
} from 'lucide-react';

const AddNotePage = () => {
  const context = useContext(noteContext);
  const { addNote, editNote } = context;

  const navigate = useNavigate();
  const location = useLocation();
  const editingNote = location.state?.note || null;

  const [newNote, setNewNote] = useState({
    title: editingNote?.title || "",
    description: editingNote?.description || "",
  });

  const [wordCount, setWordCount] = useState(
    newNote.description.split(" ").filter(word => word.length > 0).length
  );

  const handleContentChange = (value) => {
    setNewNote({ ...newNote, description: value });
    setWordCount(value.split(" ").filter(word => word.length > 0).length);
  };

  const handleTitleChange = (e) => {
    setNewNote({ ...newNote, title: e.target.value });
  };

  const exportAsPDF = () => {
    if (!newNote.title.trim() || !newNote.description.trim()) {
      Swal.fire({
        theme: 'dark',
        icon: 'warning',
        title: 'Nothing to export!',
        text: 'Please write a title and description before exporting.',
      });
      return;
    }
    try {
      Swal.fire({
        theme: 'dark',
        title: 'Generating PDF...',
        html: 'Please wait while we create your PDF.',
        allowOutsideClick: false,
        showConfirmButton: false,
        didOpen: () => {
          Swal.showLoading();
        }
      });
      // Create a hidden container for PDF export
      const pdfContent = document.createElement("div");
      pdfContent.style.padding = "20px";
      pdfContent.style.fontFamily = "Arial, sans-serif";

      // Add title
      const title = document.createElement("h2");
      title.innerText = newNote.title;
      pdfContent.appendChild(title);

      // Add date & word count
      const meta = document.createElement("p");
      const wordCount = newNote.description.trim().split(/\s+/).length;
      meta.innerText = `Date: ${new Date().toLocaleDateString()} | Word count: ${wordCount}`;
      meta.style.fontSize = "12px";
      meta.style.color = "#555";
      pdfContent.appendChild(meta);

      // Add description (keep formatting)
      const desc = document.createElement("div");
      desc.innerHTML = newNote.description.replace(/\n/g, "<br>");
      desc.style.marginTop = "15px";
      pdfContent.appendChild(desc);
      Swal.close();

      // Export with html2pdf
      const opt = {
        margin: 10,
        filename: `${newNote.title}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
      };

      html2pdf().set(opt).from(pdfContent).save();
      

      Swal.fire({
        theme: 'dark',
        icon: 'success',
        title: 'PDF Generated!',
        text: 'Your note has been exported as PDF successfully.',
        timer: 2000,
        showConfirmButton: false
      });

    }
    catch (error) {
      console.error('Error generating PDF:', error);
      Swal.close();
      Swal.fire({
        theme: 'dark',
        icon: 'error',
        title: 'Export Failed',
        text: 'There was an error generating the PDF. Please try again.',
      });
    }
  };


  const saveNote = async () => {
    if (!newNote.title.trim()) {
      Swal.fire({ theme: 'dark', icon: 'warning', title: 'Title is required!' });
      return;
    }

    if (newNote.description.trim().length < 6) {
      Swal.fire({ theme: 'dark', icon: 'warning', title: 'Description too short!' });
      return;
    }

    try {
      if (editingNote) {
        await editNote(editingNote._id, newNote.title, newNote.description);
      } else {
        await addNote(newNote.title, newNote.description);
      }
      Swal.fire({
        theme: 'dark',
        toast: true,
        position: 'bottom-end',
        icon: 'success',
        title: 'Note saved successfully!',
        timer: 3000,
        showConfirmButton: false,
      });
      navigate('/dashboard');
    } catch (error) {
      console.error("Error saving note:", error);
      Swal.fire({ theme: 'dark', icon: 'error', title: 'Oops...', text: 'Save failed!' });
    }
  };

  const goBack = () => {
    Swal.fire({
      theme: 'dark',
      title: 'Are you sure?',
      text: 'Unsaved changes will be lost.',
      icon: 'warning',
      showCancelButton: true,
    }).then((res) => {
      if (res.isConfirmed) navigate('/dashboard');
    });
  };

  return (
    <div className="min-vh-100 bg-dark text-light">
      {/* Header */}
      <div className="border-bottom border-secondary bg-dark">
        <div className="container-fluid py-3 d-flex align-items-center justify-content-between">
          {/* Back button */}
          <button onClick={goBack} className="btn btn-link text-light p-0 me-3">
            <ArrowLeft size={24} />
          </button>

          {/* Title Input */}
          <div className="flex-grow-1 mx-3">
            <input
              type="text"
              name="title"
              value={newNote.title}
              onChange={handleTitleChange}
              className="form-control no-focus bg-transparent border-0 text-light fs-4 fw-bold p-0"
              placeholder="Note title..."
            />
          </div>

          {/* Save + Menu */}
          <div className="d-flex align-items-center gap-2">
            <button onClick={saveNote} className="btn btn-outline-secondary rounded-pill px-4">
              <Save size={18} className="me-2" />
              Save
            </button>
            <div className="dropdown">
              <button className="btn btn-link text-light p-1" data-bs-toggle="dropdown">
                <MoreVertical size={20} />
              </button>
              <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end">
                <li>
                  <button onClick={exportAsPDF} className="dropdown-item">
                    Export as PDF
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container py-4">
        {/* Date + Word count just under title */}
        <div className="d-flex gap-3 small mx-2 mb-1">
          <span><Calendar size={14} className="me-1" /> {new Date().toLocaleDateString()}</span>
          <span><WrapText size={14} className="me-1" /> {wordCount} words</span>
        </div>
        <div className="bg-dark p-2 rounded" data-color-mode="dark">
          <MDEditor
            value={newNote.description}
            onChange={handleContentChange}
            height={600}   // bigger editor space
            preview="live"
            visibleDragbar={false}
            textareaProps={{
              placeholder: "Write your note in Markdown...",
              maxLength: 1000,
              autoFocus: true,
              autoFocusEnd: true,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AddNotePage;
