export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <h1>✈️ Tan Son Nhat Airport (SGN) Fast Track Services</h1>
        <p>Skip the queues at Ho Chi Minh City Airport - Compare the best VIP immigration services</p>
      </header>

      <div className="info-section">
        <h2>Why Use Fast Track Service?</h2>
        <p>Tan Son Nhat Airport is at capacity, with immigration queues often taking 60+ minutes during peak times. Fast track services can reduce this to just 5-20 minutes, saving you valuable time and stress.</p>
        <ul>
          <li><strong>Time Savings:</strong> Clear immigration in 5-20 minutes vs 60+ minutes</li>
          <li><strong>Personal Assistance:</strong> Professional staff meets you at the gate with a name board</li>
          <li><strong>Priority Lane:</strong> Skip regular queues through dedicated VIP immigration</li>
          <li><strong>Luggage Help:</strong> Assistance with baggage collection</li>
          <li><strong>Peace of Mind:</strong> Especially valuable for families, elderly, first-time visitors, and business travelers</li>
        </ul>
      </div>

      <div className="services-grid">
        <div className="service-card">
          <div className="service-header">
            <h3>Vietnam-Visa.com</h3>
            <span className="badge popular">Most Popular</span>
          </div>

          <div className="pricing-section">
            <h4>💰 Pricing (USD per person)</h4>

            <div style={{marginBottom: '15px'}}>
              <strong>Arrival - Visa Stamping Fast Track:</strong>
              <div className="price-item">
                <span className="price-label">1-2 passengers (day)</span>
                <span className="price-value">$30</span>
              </div>
              <div className="price-item">
                <span className="price-label">1-2 passengers (night)</span>
                <span className="price-value">$37</span>
              </div>
              <div className="price-item">
                <span className="price-label">3-4 passengers (day)</span>
                <span className="price-value">$29</span>
              </div>
              <div className="price-item">
                <span className="price-label">5+ passengers (day)</span>
                <span className="price-value">$28</span>
              </div>
            </div>

            <div style={{marginBottom: '15px'}}>
              <strong>Arrival - Full Fast Track Service:</strong>
              <div className="price-item">
                <span className="price-label">1-2 passengers (day)</span>
                <span className="price-value">$65</span>
              </div>
              <div className="price-item">
                <span className="price-label">1-2 passengers (night)</span>
                <span className="price-value">$72</span>
              </div>
              <div className="price-item">
                <span className="price-label">5+ passengers (day)</span>
                <span className="price-value">$61</span>
              </div>
            </div>

            <div>
              <strong>Departure Fast Track:</strong>
              <div className="price-item">
                <span className="price-label">1-2 passengers</span>
                <span className="price-value">$55</span>
              </div>
              <div className="price-item">
                <span className="price-label">5+ passengers</span>
                <span className="price-value">$51</span>
              </div>
            </div>
          </div>

          <div className="features">
            <h4>✨ What's Included</h4>
            <ul>
              <li>Meet and greet with welcome board</li>
              <li>Support at visa stamping counter</li>
              <li>Fast track immigration line</li>
              <li>Luggage assistance</li>
              <li>Guidance to transfer area</li>
            </ul>
          </div>

          <div className="reviews">
            <h4>⭐ Customer Reviews</h4>
            <div className="review-item">
              "Clear communication from booking, straight through immigration in less than 10 minutes, worth the money."
            </div>
            <div className="review-item">
              "Picking up my baggage within 15 minutes of first encounter with the staff... Cannot fault it."
            </div>
            <div className="review-item">
              "Through immigration in probably 5 mins... well worth the money to save an hour or more."
            </div>
          </div>

          <a href="https://www.vietnam-visa.com/tan-son-nhat-airport-fast-track/" className="cta-button" target="_blank" rel="noopener noreferrer">
            Book with Vietnam-Visa.com →
          </a>
        </div>

        <div className="service-card">
          <div className="service-header">
            <h3>Vietnam Airport Assistance</h3>
            <span className="badge">Highly Rated</span>
          </div>

          <div className="pricing-section">
            <h4>💰 Pricing (USD per person)</h4>
            <div className="price-item">
              <span className="price-label">VIP Arrival Fast Track</span>
              <span className="price-value">$55</span>
            </div>
            <div className="price-item">
              <span className="price-label">VIP Departure Fast Track</span>
              <span className="price-value">$55</span>
            </div>
            <div className="price-item">
              <span className="price-label">VIP Connecting (Int'l to Domestic)</span>
              <span className="price-value">$85</span>
            </div>
          </div>

          <div className="features">
            <h4>✨ What's Included</h4>
            <ul>
              <li>Welcome before immigration</li>
              <li>Expedited visa stamping</li>
              <li>Escort through passport control</li>
              <li>Luggage assistance</li>
              <li>Customs clearance</li>
              <li>Optional car pickup</li>
              <li>24/7 multilingual support</li>
            </ul>
          </div>

          <div className="reviews">
            <h4>⭐ Customer Testimonials</h4>
            <div className="review-item">
              "Prompt assistance and professional staff." - Christopher Babcock
            </div>
            <div className="review-item">
              "Unparalleled experience, treated like royalty." - Russell Sanford
            </div>
            <div className="review-item">
              "No other VIP airport greeter comes close to VAA's quality." - Allan Jones
            </div>
          </div>

          <a href="https://www.vietnamairportassistance.com/ho-chi-minh-airport-vip-service/" className="cta-button" target="_blank" rel="noopener noreferrer">
            Book with VAA →
          </a>
        </div>

        <div className="service-card">
          <div className="service-header">
            <h3>AsiaFastTrack.com</h3>
            <span className="badge premium">Celebrity Service</span>
          </div>

          <div className="pricing-section">
            <h4>💰 Pricing</h4>
            <p style={{color: '#6b7280', fontStyle: 'italic'}}>Contact for quote - Premium pricing for VIP clientele</p>
          </div>

          <div className="features">
            <h4>✨ What's Included</h4>
            <ul>
              <li>Meet and greet at arrival gate or kerbside</li>
              <li>Personal attention throughout</li>
              <li>Immigration & border control assistance</li>
              <li>Visa on Arrival help</li>
              <li>Baggage retrieval support</li>
              <li>Flight connection assistance</li>
              <li>Language barrier support</li>
              <li>Optional chauffeur service</li>
            </ul>
          </div>

          <div className="reviews">
            <h4>⭐ Clientele</h4>
            <p style={{color: '#6b7280'}}>
              Serves A-List travelers including movie stars, musicians, celebrities, CEOs, royalty, and billionaires.
              Greeters have airport security clearance for seamless service.
            </p>
          </div>

          <a href="https://asiafasttrack.com/ho-chi-minh-airport/" className="cta-button" target="_blank" rel="noopener noreferrer">
            Contact AsiaFastTrack →
          </a>
        </div>

        <div className="service-card">
          <div className="service-header">
            <h3>Royal Airport Concierge</h3>
            <span className="badge">Global Network</span>
          </div>

          <div className="pricing-section">
            <h4>💰 Pricing</h4>
            <p style={{color: '#6b7280', fontStyle: 'italic'}}>Typically $50-80 USD per person depending on service level</p>
          </div>

          <div className="features">
            <h4>✨ What's Included</h4>
            <ul>
              <li>Expert greeters with identifying signs</li>
              <li>Meet at aircraft or air bridge</li>
              <li>Seamless airport entry</li>
              <li>Fast track through all checkpoints</li>
              <li>Available at 500+ airports worldwide</li>
              <li>Professional concierge service</li>
            </ul>
          </div>

          <div className="reviews">
            <h4>⭐ Reputation</h4>
            <p style={{color: '#6b7280'}}>
              Part of a global network serving major airports worldwide. Established reputation with corporate and leisure travelers.
            </p>
          </div>

          <a href="https://royalairportconcierge.com/Airport/sgn/" className="cta-button" target="_blank" rel="noopener noreferrer">
            Visit Royal Airport Concierge →
          </a>
        </div>

        <div className="service-card">
          <div className="service-header">
            <h3>GetYourGuide & Klook</h3>
            <span className="badge">Platform Bookings</span>
          </div>

          <div className="pricing-section">
            <h4>💰 Pricing</h4>
            <p style={{color: '#6b7280', fontStyle: 'italic'}}>Varies by provider, typically $33-45 USD per person</p>
          </div>

          <div className="features">
            <h4>✨ Features</h4>
            <ul>
              <li>Book through trusted travel platforms</li>
              <li>Multiple provider options</li>
              <li>Verified customer reviews</li>
              <li>Secure payment processing</li>
              <li>Easy cancellation policies</li>
              <li>Customer support</li>
            </ul>
          </div>

          <div className="reviews">
            <h4>⭐ Platform Benefits</h4>
            <p style={{color: '#6b7280'}}>
              These booking platforms aggregate multiple service providers, allowing you to compare options and read verified reviews.
              Average rating: 4.5/5 stars across hundreds of reviews.
            </p>
          </div>

          <a href="https://www.getyourguide.com/ho-chi-minh-city-l272/fast-track-services-tan-son-nhat-airport-hcm-no-waiting-t694577/" className="cta-button" target="_blank" rel="noopener noreferrer">
            Browse on GetYourGuide →
          </a>
        </div>

        <div className="service-card">
          <div className="service-header">
            <h3>Vietnam Fast Track Service</h3>
            <span className="badge">15+ Years Experience</span>
          </div>

          <div className="pricing-section">
            <h4>💰 Pricing Range</h4>
            <div className="price-item">
              <span className="price-label">Basic Fast Track Immigration</span>
              <span className="price-value">$25-35</span>
            </div>
            <div className="price-item">
              <span className="price-label">Full VIP Meet & Greet + Lounge</span>
              <span className="price-value">$50-80</span>
            </div>
          </div>

          <div className="features">
            <h4>✨ What's Included</h4>
            <ul>
              <li>15+ years of experience</li>
              <li>Thousands of travelers assisted</li>
              <li>Basic to premium service levels</li>
              <li>Lounge access (premium package)</li>
              <li>Full luggage handling</li>
              <li>Professional airport team</li>
            </ul>
          </div>

          <div className="reviews">
            <h4>⭐ Track Record</h4>
            <p style={{color: '#6b7280'}}>
              Established service with over 15 years assisting travelers through Vietnamese airports.
              Offers flexible service levels from basic fast track to full VIP experience.
            </p>
          </div>

          <a href="https://www.vietnamfasttrackservice.com/" className="cta-button" target="_blank" rel="noopener noreferrer">
            Book with VietnamFastTrack →
          </a>
        </div>
      </div>

      <div className="comparison-table">
        <h2>📊 Quick Comparison</h2>
        <table>
          <thead>
            <tr>
              <th>Provider</th>
              <th>Starting Price</th>
              <th>Best For</th>
              <th>Key Advantage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Vietnam-Visa.com</strong></td>
              <td>$28-30 (arrival)</td>
              <td>Budget-conscious travelers, groups</td>
              <td>Transparent pricing, group discounts</td>
            </tr>
            <tr>
              <td><strong>Vietnam Airport Assistance</strong></td>
              <td>$55</td>
              <td>Business travelers, families</td>
              <td>24/7 multilingual support, excellent reviews</td>
            </tr>
            <tr>
              <td><strong>AsiaFastTrack.com</strong></td>
              <td>Premium (contact)</td>
              <td>VIPs, celebrities, executives</td>
              <td>White-glove service, high-profile clientele</td>
            </tr>
            <tr>
              <td><strong>Royal Airport Concierge</strong></td>
              <td>$50-80</td>
              <td>Frequent travelers</td>
              <td>Global network (500+ airports)</td>
            </tr>
            <tr>
              <td><strong>GetYourGuide/Klook</strong></td>
              <td>$33-45</td>
              <td>First-time bookers</td>
              <td>Verified reviews, easy booking</td>
            </tr>
            <tr>
              <td><strong>Vietnam Fast Track Service</strong></td>
              <td>$25-35 (basic)</td>
              <td>Flexible service needs</td>
              <td>15+ years experience, tiered options</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="info-section">
        <h2>📝 Booking Tips</h2>
        <ul>
          <li><strong>Book in Advance:</strong> Reserve at least 24-48 hours before your flight for guaranteed availability</li>
          <li><strong>Night Surcharges:</strong> Some providers charge extra for arrivals between 10 PM and 6 AM</li>
          <li><strong>Group Discounts:</strong> Save money by booking for 3+ passengers together</li>
          <li><strong>Provide Flight Details:</strong> Have your flight number, arrival time, and passport info ready</li>
          <li><strong>WhatsApp Communication:</strong> Most services use WhatsApp to coordinate meeting points</li>
          <li><strong>Visa Requirements:</strong> If you need a visa on arrival, book the service that includes visa stamping assistance</li>
          <li><strong>Save Time:</strong> Even with fast track, expect 5-20 minutes depending on flight arrival times and overall airport congestion</li>
        </ul>
      </div>

      <div className="info-section">
        <h2>🏆 Our Recommendations</h2>
        <div style={{marginTop: '20px'}}>
          <h3 style={{color: '#667eea', fontSize: '1.2rem'}}>Best Value: Vietnam-Visa.com</h3>
          <p style={{marginBottom: '20px'}}>Starting at $28-30 for arrival assistance with group discounts. Excellent reviews and transparent pricing.</p>

          <h3 style={{color: '#667eea', fontSize: '1.2rem'}}>Best Service: Vietnam Airport Assistance</h3>
          <p style={{marginBottom: '20px'}}>$55 flat rate with outstanding customer testimonials and 24/7 multilingual support.</p>

          <h3 style={{color: '#667eea', fontSize: '1.2rem'}}>Most Convenient: GetYourGuide or Klook</h3>
          <p style={{marginBottom: '20px'}}>Easy booking through familiar platforms with verified reviews and secure payment.</p>

          <h3 style={{color: '#667eea', fontSize: '1.2rem'}}>Premium Experience: AsiaFastTrack.com</h3>
          <p>For VIP travelers who want the highest level of personalized service and discretion.</p>
        </div>
      </div>

      <footer className="footer">
        <p>💡 Information current as of January 2025. Prices and services subject to change. Always confirm details with the service provider before booking.</p>
        <p style={{marginTop: '10px', fontSize: '0.9rem'}}>Tan Son Nhat International Airport (SGN) • Ho Chi Minh City, Vietnam</p>
      </footer>
    </div>
  )
}
