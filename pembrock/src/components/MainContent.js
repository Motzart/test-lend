import * as React from 'react'
import { Link } from 'gatsby'

export const MainContent = () => (
  <main className="container">
    <section className="image-gallery content-section">
      <h2>PembRock</h2>
      <div className="gallery">
        <div className="gallery-item">
          <p>
            Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
            luctus metus libero eu augue. Morbi purus libero, faucibus
            adipiscing, commodo quis, gravida id, est.
          </p>
          <p className="gallery-link">
            <Link to="/">Back to the Home Page</Link>
          </p>
        </div>
      </div>
    </section>
  </main>
)
