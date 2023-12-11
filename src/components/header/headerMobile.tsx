import { Box, HStack, Text } from "@chakra-ui/react";
import Logo from "./logo";
import { useNavigate } from "react-router-dom";

export default function HeaderMobile() {
    const navigate = useNavigate();

    return (
        <Box
            w={"100%"}
            h={"100px"}
            display={"flex"}
            position={"fixed"}
            bgColor={"white"}
            textColor={"black"}
            alignItems={"center"}
            justifyContent={"space-between"}
            zIndex={10}
            top={0}
            px={"20px"}
        >
            <Logo />
            <HStack
                spacing={7}
                fontSize={"14px"}
                color={"black"}
                fontWeight={"semibold"}
            >
                <Text onClick={() => navigate("/our")}>Our</Text>
                <Text onClick={() => navigate("/company")}>Company</Text>
            </HStack>
        </Box>
    );
}
