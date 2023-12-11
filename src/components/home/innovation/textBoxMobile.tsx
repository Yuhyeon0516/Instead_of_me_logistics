import { Box, Center, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

export default function TextBoxMobile({
    isBottom = false,
    title,
    description,
}: {
    isBottom?: boolean;
    title: string;
    description: string;
}) {
    return (
        <Box
            w={"300px"}
            h={"200px"}
            border={"1px solid gray"}
            px={"15px"}
            py={"30px"}
            borderBottom={isBottom ? "1px" : "none"}
        >
            <Center w={"100%"} h={"100%"}>
                <VStack spacing={3}>
                    <HStack spacing={2}>
                        <Text fontSize={"48px"} fontWeight={"extrabold"}>
                            {title}
                        </Text>

                        <Icon
                            fontSize={"28px"}
                            as={FaPlus}
                            color={"#FC6307"}
                            fontWeight={"extrabold"}
                        />
                    </HStack>

                    <Text
                        fontSize={"18px"}
                        fontWeight={"normal"}
                        color={"gray.500"}
                    >
                        {description}
                    </Text>
                </VStack>
            </Center>
        </Box>
    );
}
