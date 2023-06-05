import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import { useRouter } from "next/router";

interface PaginationProps {
    currentPage: number;
    hasNextPage: boolean;
}

const Pagination = ({ currentPage, hasNextPage }: PaginationProps) => {
    const router = useRouter();

    const goToPage = (page: number) => {
        router.push({
            pathname: router.pathname,
            query: { ...router.query, page: page.toString() },
        });
    };

    const renderPageNumbers = () => {
        const totalVisiblePages = 4; // Jumlah halaman yang ditampilkan
        const pageNumbers = [];

        const startPage = Math.max(1, currentPage - 1); // Halaman pertama yang ditampilkan
        const endPage = startPage + totalVisiblePages - 1; // Halaman terakhir yang ditampilkan

        for (let i = startPage; i <= endPage; i++) {
            if (i <= currentPage + 1) {
                pageNumbers.push(
                    <Button
                        key={i}
                        colorScheme={i === currentPage ? "blue" : undefined}
                        onClick={() => goToPage(i)}
                    >
                        {i}
                    </Button>
                );
            }
        }

        return pageNumbers;
    };

    return (
        <Box mt="4" textAlign="center">
            <ButtonGroup>
                {currentPage > 1 && (
                    <Button
                        colorScheme="orange"
                        onClick={() => goToPage(currentPage - 1)}
                    >
                        Previous
                    </Button>
                )}

                {renderPageNumbers()}

                {hasNextPage && (
                    <Button
                        colorScheme="orange"
                        onClick={() => goToPage(currentPage + 1)}
                    >
                        Next
                    </Button>
                )}
            </ButtonGroup>
        </Box>
    );
};

export default Pagination;
