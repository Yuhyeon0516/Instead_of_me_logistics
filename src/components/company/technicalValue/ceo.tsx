import { Box, HStack, Text, VStack } from "@chakra-ui/react";

export default function CEO() {
    return (
        <HStack w={"100%"}>
            <Box
                w={"70px"}
                h={"70px"}
                borderRadius={"50%"}
                backgroundColor={"gray.300"}
                border={"2px solid #FC6307"}
                mr={"20px"}
            />

            <VStack alignItems={"flex-start"}>
                <Text fontSize={"24px"} fontWeight={"semibold"}>
                    Hong GilDong
                </Text>
                <Text fontSize={"16px"} fontWeight={"medium"} color={"black"}>
                    CEO at INSTEADOFME
                </Text>
            </VStack>
        </HStack>
    );
}
