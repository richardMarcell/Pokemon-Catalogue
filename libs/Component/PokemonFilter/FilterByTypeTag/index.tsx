const FilterByTypeTag = () => {
    // function untuk menghandle chip pilihan user pada filter type
    // const handleTypeTagSelected = (type: string) => {
    //     if (selectedTypes.includes(type)) {
    //         setSelectedTypes(selectedTypes.filter((t) => t !== type));
    //     } else {
    //         setSelectedTypes([...selectedTypes, type]);
    //     }
    // };

    return (
        <div>
            {/* <FormControl mb="4" mt="4">
                <FormLabel ml="80px">Filter By Type</FormLabel>
                <Box
                    width="600px"
                    ml="80px"
                    mt="20px"
                    mb="50px"
                    height="55px"
                    p="10px"
                >
                    <Flex
                        justifyContent="start"
                        alignItems="center"
                        wrap="wrap"
                    >
                        {filterOptionsClicked.type.map((type) => (
                            <Tag
                                key={type}
                                size="lg"
                                borderRadius="full"
                                colorScheme={
                                    selectedTypes.includes(type)
                                        ? "red"
                                        : "gray"
                                }
                                mx="5px"
                                my="5px"
                                cursor="pointer"
                                onClick={() => handleTypeTagSelected(type)}
                            >
                                <TagLabel>{type}</TagLabel>
                            </Tag>
                        ))}
                    </Flex>
                </Box>
            </FormControl> */}
        </div>
    );
};

export default FilterByTypeTag;
