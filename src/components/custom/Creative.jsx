import React from 'react';

function Creative() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9', color: '#333' }}>
      {/* Back Button */}
      <button
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          padding: '10px 15px',
          backgroundColor: '#f44336',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={() => window.history.back()}
      >
        Back
      </button>

      <h1 style={{ textAlign: 'center', color: '#333' }}>YouTube Career</h1>

      {/* Section for adding an image */}
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <h2>Profile Image</h2>
        <div
          style={{
            width: '150px',
            height: '150px',
            margin: '0 auto',
            backgroundColor: '#e0e0e0',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            color: '#666',
          }}
        >
          Add Image
        </div>
      </div>

      {/* Section for adding games and achievements */}
      <div style={{ marginTop: '20px' }}>
        <h2>Games and Achievements</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {/* Game Item Template */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              padding: '10px',
              backgroundColor: '#fff',
            }}
          >
            <img
              src="https://via.placeholder.com/50"
              alt="Game Thumbnail"
              style={{ borderRadius: '5px' }}
            />
            <div>
              <h3 style={{ margin: '0' }}>Game Title</h3>
              <p style={{ margin: '5px 0', color: '#666' }}>Achievement details go here.</p>
            </div>
          </div>
          {/* Add more game items similarly */}
        </div>
      </div>
    </div>
  );
}

export default Creative;
