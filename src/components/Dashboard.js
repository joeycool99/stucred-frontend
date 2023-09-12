import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Card, Header,Pagination } from 'semantic-ui-react';

const Dashboard = () => {
  const [schemes, setSchemes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const schemesPerPage = 5;
  const [totalSchemes, setTotalSchemes] = useState(1);
  const handlePageChange = (e, { activePage }) => {
    setCurrentPage(activePage);
  };

  useEffect(() => {
    axios
      .get(`/dashboard?page=${currentPage}&limit=${schemesPerPage}`, {
        headers: {
          Authorization: `${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        setSchemes(response.data);
        setTotalSchemes(15); 
      })
      .catch((error) => {
        console.error('Dashboard error:', error);
      });
  }, [currentPage]); 

  return (
    <Container text>
      <div className="dashboard">
        <Header as="h1">Student Loan Schemes</Header>
        <Card.Group>
          {schemes.map((scheme) => (
            <Card key={scheme._id}>
              <Card.Content>
                <Card.Header>{scheme.name}</Card.Header>
                <Card.Description>{scheme.description}</Card.Description>
                <Card.Meta>Interest Rate: {scheme.interestRate}%</Card.Meta>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
        <div className="pagination-container" style={{paddingTop:"20px"}}>
        <Pagination
          activePage={currentPage}
          onPageChange={handlePageChange}
          totalPages={Math.ceil(totalSchemes / schemesPerPage)}
        />
      </div>
      </div>
    </Container>
  );
};

export default Dashboard;
