import { Box, Center, HStack, Text, VStack } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

export default function ReviewBox({
    reviewText,
    corporation,
    sector,
}: {
    reviewText: string;
    corporation: string;
    sector: string;
}) {
    return (
        <Center w={"100%"} h={"100%"} color={"black"}>
            <VStack
                w={"90%"}
                h={"100%"}
                backgroundColor={"white"}
                p={"15px"}
                alignItems={"flex-start"}
                spacing={"20px"}
                borderRadius={"10px"}
            >
                <HStack color={"#FC6307"} alignItems={"flex-start"}>
                    <FaStar fontSize={"15px"} />
                    <FaStar fontSize={"15px"} />
                    <FaStar fontSize={"15px"} />
                    <FaStar fontSize={"15px"} />
                    <FaStar fontSize={"15px"} />
                </HStack>

                <Text>{reviewText}</Text>

                <HStack spacing={4}>
                    <Box
                        w={"40px"}
                        h={"40px"}
                        borderRadius={"50%"}
                        backgroundColor={"gray"}
                    ></Box>
                    <VStack alignItems={"flex-start"}>
                        <Text fontSize={"20px"} fontWeight={"extrabold"}>
                            {corporation}
                        </Text>
                        <Text
                            fontSize={"12px"}
                            fontWeight={"semibold"}
                            color={"gray.300"}
                        >
                            {sector}
                        </Text>
                    </VStack>
                </HStack>
            </VStack>
        </Center>
    );
}
