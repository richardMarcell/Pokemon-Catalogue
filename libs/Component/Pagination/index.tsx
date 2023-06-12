import { Flex, Box, Button } from "@chakra-ui/react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    handleNext: () => void;
    handlePrevious: () => void;
    renderPageNumber: () => JSX.Element[];
}

const Pagination = ({
    currentPage,
    totalPages,
    handleNext,
    handlePrevious,
    renderPageNumber,
}: PaginationProps) => {
    return (
        <Flex justifyContent="center" mt="5">
            <Box>
                <Button
                    disabled={currentPage === 1 ? true : false}
                    colorScheme="blue"
                    onClick={handlePrevious}
                    mx="1"
                >
                    Previous
                </Button>
                {renderPageNumber()}
                <Button
                    disabled={currentPage === totalPages}
                    colorScheme="blue"
                    onClick={handleNext}
                    mx="1"
                >
                    Next
                </Button>
            </Box>
        </Flex>
    );
};

export default Pagination;
