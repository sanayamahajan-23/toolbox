import React, { forwardRef } from 'react';
import '../styles/downloadables.css';

const DownloadableResources = forwardRef((props, ref) => {
  const sectionStyle = {
    backgroundColor: '#27262f',
    padding: '40px 20px',
    borderTop: '4px solid #b24525',
  };

  const titleStyle = {
    fontFamily: "'Rubik', sans-serif",
    fontSize: '2rem',
    marginBottom: '20px',
    textAlign: 'left',
    position: 'relative',
    padding: '10px',
    color: '#fff',
  };

  const resourceContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '20px',
    flexWrap: 'wrap',
  };

  const resourceStyle = {
    flex: '1 1 200px',
    borderRadius: '8px',
    textAlign: 'center',
    maxWidth: '350px',
    cursor: 'pointer',  
  };

  const resourceImageStyle = {
    width: '80%',
    borderRadius: '8px',
    marginBottom: '10px',
  };
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/docs/journal.pdf';  
    link.download = 'Board_of_Advisorsjournal.pdf';   
    link.click();
  };

  return (
    <section style={sectionStyle} ref={ref}>
      <h2 style={titleStyle}>Downloadable Resources</h2>
      <div style={resourceContainerStyle}>
      <div style={resourceStyle} onClick={handleDownload}>
          <img src="/assets/resource1.png" alt="Resource 1" style={resourceImageStyle} />
        </div>
        <div style={resourceStyle}>
          <a href="https://stgmembership.s3-us-west-1.amazonaws.com/21+Questions+to+Extraordinary+Goal-Setting.pdf" target="_blank" rel="noopener noreferrer">
            <img src="/assets/resource2.png" alt="Business Tolerations" style={resourceImageStyle} />
          </a>
        </div>
        <div style={resourceStyle}>
          <a href="https://stgmembership.s3-us-west-1.amazonaws.com/Business+Tolerations.pdf" target="_blank" rel="noopener noreferrer">
            <img src="/assets/resource3.png" alt="Action Brainstorming Worksheet" style={resourceImageStyle} />
          </a>
        </div>
        <div style={resourceStyle}>
          <a href="https://stgmembership.s3-us-west-1.amazonaws.com/Action+Brainstorming+Worksheet.pdf" target="_blank" rel="noopener noreferrer">
            <img src="/assets/resource4.png" alt="21 Questions to Extraordinary Goal-Setting" style={resourceImageStyle} />
          </a>
        </div>
        <div style={resourceStyle}>
          <a href="https://stgmembership.s3-us-west-1.amazonaws.com/Cognitive+Distortions+List.pdf" target="_blank" rel="noopener noreferrer">
            <img src="/assets/resource5.png" alt="Additional Resource" style={resourceImageStyle} />
          </a>
        </div>
      </div>
    </section>
  );
});

export default DownloadableResources;
