const FilterByGenderTag = () => {
    const filterOptionsClicked = {
        genders: [
            "Mayoritas Male",
            "Minoritas Male",
            "Balance",
            "Mayoritas Female",
            "Minoritas Female",
        ],
        classifications: [
            "Seed Pokémon",
            "Lizard Pokémon",
            "Flame Pokémon",
            "Tiny Turtle Pokémon",
            "Turtle Pokémon",
            "Shellfish Pokémon",
            "Worm Pokémon",
            "Cocoon Pokémon",
            "Butterfly Pokémon",
            "Hairy Pokémon",
            "Poison Bee Pokémon",
            "Tiny Bird Pokémon",
            "Bird Pokémon",
            "Mouse Pokémon",
            "Beak Pokémon",
            "Snake Pokémon",
            "Cobra Pokémon",
            "Poison Pin Pokémon",
            "Drill Pokémon",
            "Fairy Pokémon",
            "Fox Pokémon",
            "Balloon Pokémon",
            "Bat Pokémon",
            "Weed Pokémon",
            "Flower Pokémon",
            "Duck Pokémon",
        ],
        type: [
            "grass",
            "fire",
            "water",
            "bug",
            "normal",
            "poison",
            "electric",
            "ground",
            "fairy",
            "fighting",
            "psychic",
            "rock",
            "ghost",
            "ice",
            "dragon",
            "dark",
            "steel",
            "flying",
        ],
    };

    // function untuk menghandle chip pilihan user pada filter gender
    // const handleGenderTagSelected = (gender: string) => {
    //     const mayoritasMale = "Mayoritas Male";
    //     const minoritasMale = "Minoritas Male";
    //     const mayoritasFemale = "Mayoritas Female";
    //     const minoritasFemale = "Minoritas Female";
    //     const balance = "Balance";

    //     if (selectedGenders.includes(gender)) {
    //         setSelectedGenders(selectedGenders.filter((g) => g !== gender));
    //     } else {
    //         if (
    //             gender === mayoritasMale &&
    //             selectedGenders.includes(minoritasFemale)
    //         ) {
    //             setSelectedGenders(
    //                 selectedGenders.filter((g) => g !== mayoritasMale)
    //             );
    //         } else if (
    //             gender === minoritasMale &&
    //             selectedGenders.includes(mayoritasFemale)
    //         ) {
    //             setSelectedGenders(
    //                 selectedGenders.filter((g) => g !== minoritasFemale)
    //             );
    //         } else if (
    //             gender === mayoritasFemale &&
    //             selectedGenders.includes(minoritasMale)
    //         ) {
    //             setSelectedGenders(
    //                 selectedGenders.filter((g) => g !== minoritasFemale)
    //             );
    //         } else if (
    //             gender === minoritasFemale &&
    //             selectedGenders.includes(mayoritasMale)
    //         ) {
    //             setSelectedGenders(
    //                 selectedGenders.filter((g) => g !== minoritasFemale)
    //             );
    //         } else {
    //             setSelectedGenders([...selectedGenders, gender]);
    //         }
    //     }
    // };
    return (
        <div>
            {/* <FormControl mb="4" mt="4">
                <FormLabel ml="80px">Filter By Gender</FormLabel>
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
                        {filterOptionsClicked.genders.map((gender) => (
                            <Tag
                                key={gender}
                                size="lg"
                                borderRadius="full"
                                colorScheme={
                                    selectedGenders.includes(gender)
                                        ? "green"
                                        : "gray"
                                }
                                mx="5px"
                                my="5px"
                                cursor="pointer"
                                onClick={() => handleGenderTagSelected(gender)}
                            >
                                <TagLabel>{gender}</TagLabel>
                            </Tag>
                        ))}
                    </Flex>
                </Box>
            </FormControl> */}
        </div>
    );
};

export default FilterByGenderTag;
