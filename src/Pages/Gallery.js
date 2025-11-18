import React from 'react';
import { Image } from 'lucide-react';
import './Gallery.css';

function Gallery() {
  const galleryItems = [
    { id: 1, title: 'Office Premises', category: 'Infrastructure', image: 'https://images.pexels.com/photos/2467506/pexels-photo-2467506.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 2, title: 'Customer Service', category: 'Team', image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 3, title: 'Financial Consultation', category: 'Services', image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 4, title: 'Team Meeting', category: 'Team', image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 5, title: 'Modern Workspace', category: 'Infrastructure', image: 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 6, title: 'Client Interaction', category: 'Services', image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 7, title: 'Conference Room', category: 'Infrastructure', image: 'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 8, title: 'Professional Team', category: 'Team', image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 9, title: 'Gold Loan Processing', category: 'Services', image: 'https://images.pexels.com/photos/6289065/pexels-photo-6289065.jpeg?auto=compress&cs=tinysrgb&w=800' },
  ];

  return (
    <div>

      {/* HERO SECTION */}
      <section className="gallery-hero text-white py-5">
        <div className="container py-5 text-center">
          <div className="icon-circle mb-4">
            <Image size={48} />
          </div>
          <h1 className="display-4 fw-bold mb-3">Our Gallery</h1>
          <p className="lead">A glimpse into our workspace, team, and services</p>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="py-5">
        <div className="container py-5">
          <div className="row g-4">
            {galleryItems.map((item) => (
              <div key={item.id} className="col-md-6 col-lg-4">
                <div className="card border-0 shadow-sm overflow-hidden h-100 gallery-card">
                  <div className="gallery-img-wrapper">
                    <img src={item.image} alt={item.title} className="gallery-img" />
                    <span className="category-badge">{item.category}</span>
                  </div>

                  <div className="card-body">
                    <h5 className="card-title mb-0">{item.title}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="gallery-hero  py-5">
        <div className="container py-5 text-center">
          <h2 className="display-5 text-white fw-bold mb-4">Visit Our Office</h2>
          <p className="lead  text-white mb-4">
            Experience our state-of-the-art facilities and meet our professional team
          </p>
          <a href="/contact" className="cta-btn btn btn-lg px-5">
            Get Directions
          </a>
        </div>
      </section>

    </div>
  );
}

export default Gallery;
