import { Box, Image, Text, VStack } from "@chakra-ui/react";
import YelloButton from "../common/yelloButton";
import { useNavigate } from "react-router-dom";

export default function TechnicalMobile() {
    const navigate = useNavigate();

    function onClick() {
        navigate("/company");
    }

    return (
        <Box
            position={"relative"}
            w={"100%"}
            h={"500px"}
            backgroundColor={"white"}
            cursor={"pointer"}
            onClick={onClick}
        >
            <Box
                w={"100%"}
                h={"100%"}
                boxSizing="border-box"
                position={"absolute"}
                top={0}
                left={0}
                zIndex={1}
            >
                <Image
                    src={require("../../assets/axel-hjEesK4KSDs-unsplash.jpg")}
                    objectFit={"cover"}
                    w={"100%"}
                    h={"100%"}
                    opacity={0.7}
                />
            </Box>

            <Box zIndex={2} position={"relative"} px={"30px"} pt={"30px"}>
                <VStack
                    spacing={7}
                    alignItems={"flex-start"}
                    color={"blackAlpha.700"}
                >
                    <VStack spacing={10} alignItems={"flex-start"}>
                        <Text fontSize={"18px"} fontWeight={"semibold"}>
                            Company Overview
                        </Text>

                        <Text fontSize={"36px"} fontWeight={"extrabold"}>
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
