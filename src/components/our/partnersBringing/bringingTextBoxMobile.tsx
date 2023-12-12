import { Box, VStack, Text } from "@chakra-ui/react";

export default function BringingTextBoxMobile({ name }: { name: string }) {
    return (
        <Box
            py={"20px"}
            px={"2vw"}
            backgroundColor={"whitesmoke"}
            w={"100%"}
            h={"100%"}
            borderRadius={"10px"}
        >
            <VStack spacing={2}>
                <Box
                    backgroundColor={"blackAlpha.300"}
                    w={"8vw"}
                    h={"8vw"}
                    borderRadius={"50%"}
                />

                <Text
                    color={"blackAlpha.600"}
                    fontSize={"10px"}
                    fontWeight={"bold"}
                >
                    {name}
                </Text>
            </VStack>
        </Box>
    );
}
