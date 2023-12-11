import { Box, Center, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

export default function TextBox({
    isRight = false,
    title,
    description,
}: {
    isRight?: boolean;
    title: string;
    description: string;
}) {
    return (
        <Box
            w={"350px"}
            h={"250px"}
            border={"1px solid gray"}
            px={"15px"}
            py={"30px"}
            borderRight={isRight ? "1px" : "none"}
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
