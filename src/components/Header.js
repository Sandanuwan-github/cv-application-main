import React from 'react'

const Header = () => {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f8f9fa', padding: '10px' }}>
      <h3>Find Jobs</h3>
      <nav>
        <a style={{ textDecoration: 'none', color: '#007bff', marginRight: '10px', fontSize: '16px' }} href="#link1">Fill CV |</a>
        <a style={{ textDecoration: 'none', color: '#007bff', fontSize: '16px' }} href="#link2">Seach Candidate</a>
      </nav>
    </header>
  );
};


export default Header


