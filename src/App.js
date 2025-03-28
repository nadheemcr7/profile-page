import React, { useEffect, useState } from 'react';
import './App.css';
import { supabase } from './supabaseClient';

function App() {
  const [skills, setSkills] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('useEffect triggered'); // Debug: Confirm useEffect runs
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    console.log('Fetching skills from Supabase...'); // Debug: Confirm function runs
    try {
      const { data, error } = await supabase
        .from('skills') // Ensure this matches your Supabase table name
        .select('*');
      if (error) {
        setError(error.message);
        console.log('Error fetching skills:', error);
      } else {
        console.log('Raw data from Supabase:', data); // Debug: Log raw data
        setSkills(data);
        console.log('Skills state updated:', data); // Debug: Confirm state update
      }
    } catch (err) {
      setError(err.message);
      console.log('Unexpected error:', err);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>M. Mohamed Nadheem</h1>
        <p>BTech Computer Science Engineering (CSE) - 2nd Year</p>
      </header>
      <section>
        <h2>Technical Skills</h2>
        <ul>
          <li><strong>Programming:</strong> Advanced in Python (Streamlit, Pandas, Plotly, etc.)</li>
          <li><strong>Web Development:</strong> Basic problem-solving skills, experience with Figma</li>
          <li><strong>Image Editing:</strong> Proficient in Photoshop & Canva</li>
          <li><strong>Linux:</strong> Red Hat Linux user, working on secure Linux environments</li>
        </ul>
      </section>
      <section>
        <h2>Projects & Experience</h2>
        <ul>
          <li><strong>Data Visualization & Web Apps:</strong></li>
          <ul>
            <li>Developed a Streamlit app for Excel to table conversion & Plotly visualization</li>
            <li>Built a CSV-based trading data analysis tool with calculated profit/loss metrics</li>
          </ul>
          <li><strong>AI & Security:</strong></li>
          <ul>
            <li>Working on an anonymous biometric authentication system using fingerprint verification & Zero-Knowledge Proofs (ZKP) for a hackathon</li>
          </ul>
          <li><strong>Event Organizer:</strong></li>
          <ul>
            <li>Organized a college event on AI-powered full-stack app development</li>
          </ul>
        </ul>
      </section>
      <section>
        <h2>Current Goals</h2>
        <ul>
          <li><strong>Internship Preparation:</strong> Applying for an internship that requires Python expertise</li>
          <li><strong>Linux & Security:</strong> Implementing a secure Linux environment for an assignment</li>
        </ul>
      </section>
      <section>
        <h2>Interests</h2>
        <ul>
          <li>Web development & AI tools</li>
          <li>Exploring cybersecurity & system administration</li>
        </ul>
      </section>
      <section>
        <h2>Skills Table (from Supabase)</h2>
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        <table>
          <thead>
            <tr>
              <th>Skill</th>
              <th>Proficiency</th>
            </tr>
          </thead>
          <tbody>
            {skills.length > 0 ? (
              skills.map((skill) => (
                <tr key={skill.id}>
                  <td>{skill.name}</td>
                  <td>{skill.proficiency}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2">No skills found</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default App;