import React from 'react';
import styled from 'styled-components';

const CertificationsContainer = styled.div`
  padding: 50px 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const Certification = styled.div`
  margin-bottom: 30px;
`;

const CertificationTitle = styled.h3`
  font-size: 22px;
  margin-bottom: 10px;
`;

const Issuer = styled.p`
  font-size: 16px;
  line-height: 1.4;
`;

function Certifications() {
  return (
    <CertificationsContainer>
      <h2>Licenses & Certifications</h2>
      <Certification>
        <CertificationTitle>Certified Professional in [Field]</CertificationTitle>
        <Issuer>Issuing Organization, Date Obtained</Issuer>
      </Certification>
      {/* Add more certifications as needed */}
    </CertificationsContainer>
  );
}

export default Certifications;