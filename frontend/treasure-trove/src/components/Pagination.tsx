import React, { useState } from 'react';
import { Button, ButtonGroup, IconButton } from '@chakra-ui/react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

/**
 * 
 * @returns JSX element
 */
const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10); // Replace 10 with your actual total number of pages

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <ButtonGroup>
        <IconButton
          aria-label="Previous" 
          icon={<FiChevronLeft/>} 
          onClick={() => handlePageChange(currentPage - 1)} 
          disabled={currentPage === 1}
        />
        {Array.from({ length: totalPages }, (_, index) => (
          <Button key={index} onClick={() => handlePageChange(index + 1)} variant={currentPage === index + 1 ? 'solid' : 'outline'}>
            {index + 1}
          </Button>
        ))}
        <IconButton 
          aria-label="Next" 
          icon={<FiChevronRight/>} 
          onClick={() => handlePageChange(currentPage + 1)} 
          disabled={currentPage === totalPages}
        />
      </ButtonGroup>
    </div>
  );
};

export default Pagination;
