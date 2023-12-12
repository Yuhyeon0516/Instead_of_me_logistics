import { Box, HStack, Text, VStack } from "@chakra-ui/react";

export default function CEOMobile() {
    return (
        <HStack w={"100%"} mt={"20px"} mb={"50px"} alignItems={"center"}>
            <Box
                w={"40px"}
                h={"40px"}
                borderRadius={"50%"}
                backgroundColor={"gray.300"}
                border={"1px solid #FC6307"}
                mr={"10px"}
            />

            <VStack alignItems={"flex-start"}>
                <Text fontSize={"18px"} fontWeight={"semibold"}>
                    Hong GilDong
                </Text>
                <Text fontSize={"12px"} fontWeight={"medium"} color={"black"}>
                    CEO at INSTEADOFME
                </Text>
            </VStack>
        </HStack>
    );
}
