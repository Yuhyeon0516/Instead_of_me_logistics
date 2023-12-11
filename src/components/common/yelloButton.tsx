import { Box, Text } from "@chakra-ui/react";

export default function YelloButton({ text }: { text: string }) {
    return (
        <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            backgroundColor={"#FC6307"}
            color={"white"}
            px={"15px"}
            py={"15px"}
            borderRadius={"10px"}
            cursor={"pointer"}
        >
            <Text fontSize={"16px"} fontWeight={"semibold"}>
                {text}
            </Text>
        </Box>
    );
}
