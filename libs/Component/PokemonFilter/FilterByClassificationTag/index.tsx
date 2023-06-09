const FilterByClassificationTag = () => {
    // function untuk menghandle chip pilihan user pada filter classification
    // const handleClassificationTagSelected = (classification: string) => {
    //     if (selectedClassifications.includes(classification)) {
    //         setSelectedClassifications(
    //             selectedClassifications.filter((c) => c !== classification)
    //         );
    //     } else {
    //         setSelectedClassifications([
    //             ...selectedClassifications,
    //             classification,
    //         ]);
    //     }
    // };

    return (
        <div>
            {/* <Box width="50%">
                <FormControl mb="4" mt="4">
                    <FormLabel ml="80px">Filter By Classification</FormLabel>
                    <Box
                        width="600px"
                        ml="80px"
                        mt="20px"
                        mb="300px"
                        height="55px"
                        p="10px"
                    >
                        <Flex
                            justifyContent="start"
                            alignItems="center"
                            wrap="wrap"
                        >
                            {filterOptionsClicked.classifications.map(
                                (classification) => (
                                    <Tag
                                        key={classification}
                                        size="lg"
                                        borderRadius="full"
                                        colorScheme={
                                            selectedClassifications.includes(
                                                classification
                                            )
                                                ? "blue"
                                                : "gray"
                                        }
                                        mx="5px"
                                        my="5px"
                                        cursor="pointer"
                                        onClick={() =>
                                            handleClassificationTagSelected(
                                                classification
                                            )
                                        }
                                    >
                                        <TagLabel>{classification}</TagLabel>
                                    </Tag>
                                )
                            )}
                        </Flex>
                    </Box>
                </FormControl>
            </Box> */}
        </div>
    );
};

export default FilterByClassificationTag;
