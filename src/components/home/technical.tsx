import { Box, Image, Text, VStack } from "@chakra-ui/react";
import YelloButton from "../common/yelloButton";
import { useNavigate } from "react-router-dom";

export default function Technical() {
    const navigate = useNavigate();

    function onClick() {
        navigate("/company");
    }

    return (
        <Box
            position={"relative"}
            w={"100dvw"}
            h={"100dvh"}
            backgroundColor={"white"}
            cursor={"pointer"}
            onClick={onClick}
        >
            <Box
                w={"100%"}
                h={"100%"}
                boxSizing="border-box"
                px={"30px"}
                position={"absolute"}
                top={0}
                left={0}
                zIndex={1}
            >
                <Image
                    src={require("../../assets/axel-hjEesK4KSDs-unsplash.jpg")}
                    objectFit={"cover"}
                />
            </Box>

            <Box zIndex={2} position={"relative"} pl={"80px"} pt={"70px"}>
                <VStack
                    spacing={7}
                    alignItems={"flex-start"}
                    color={"blackAlpha.700"}
                >
                    <VStack spacing={3} alignItems={"flex-start"}>
                        <Text fontSize={"18px"} fontWeight={"semibold"}>
                            Company Overview
                        </Text>

                        <Text fontSize={"60px"} fontWeight={"extrabold"}>
                            우리는 기술적 가치에
                            <br />큰 중요성을 둡니다.
                        </Text>
                    </VStack>

                    <YelloButton text="About Us" />
                </VStack>
            </Box>
        </Box>
    );
}
