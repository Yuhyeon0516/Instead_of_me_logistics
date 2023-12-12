import { Box, HStack, Text } from "@chakra-ui/react";

export default function BringingTextBox({ name }: { name: string }) {
    return (
        <Box
            backgroundColor={"whitesmoke"}
            w={"100%"}
            maxH={"100px"}
            py={"20px"}
            px={"40px"}
            borderRadius={"15px"}
        >
            <HStack spacing={3}>
                <Box
                    backgroundColor={"blackAlpha.300"}
                    w={"50px"}
                    h={"50px"}
                    borderRadius={"50%"}
                />

                <Text
                    color={"blackAlpha.600"}
                    fontSize={"18px"}
                    fontWeight={"bold"}
                >
                    {name}
                </Text>
            </HStack>
        </Box>
    );
}
