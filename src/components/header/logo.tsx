import { Box, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Logo() {
    const navigate = useNavigate();

    function onClickLogo() {
        navigate("/");
    }
    return (
        <Box onClick={onClickLogo} cursor={"pointer"}>
            <VStack
                alignItems={"flex-start"}
                fontSize={"20px"}
                fontWeight={"bold"}
            >
                <Text>INSTEADOFME</Text>
                <Text>LOGISTICS</Text>
            </VStack>
        </Box>
    );
}
