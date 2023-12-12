import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import YelloButton from "../common/yelloButton";

export default function QuotoMobile() {
    return (
        <Box
            position={"relative"}
            w={"100dvw"}
            color={"white"}
            mt={"100px"}
            px={"30px"}
            py={"50px"}
        >
            <Box
                w={"100%"}
                h={"100%"}
                position={"absolute"}
                top={0}
                left={0}
                zIndex={-1}
            >
                <Image
                    src={require("../../assets/quoto.png")}
                    w={"100%"}
                    h={"100%"}
                    objectFit={"cover"}
                    opacity={0.8}
                />
            </Box>

            <VStack textAlign={"start"} spacing={5} alignItems={"flex-start"}>
                <Text fontSize={"36px"} fontWeight={"bold"}>
                    우리는 효율적인
                    <br />
                    물류 솔루션을
                    <br />
                    제공하는 업계의
                    <br />
                    선도 기업입니다.
                </Text>
                <VStack
                    fontSize={"14px"}
                    fontWeight={"semibold"}
                    spacing={3}
                    lineHeight={"1.2"}
                    alignItems={"flex-start"}
                >
                    <Text>
                        운송, 창고 보관, 인벤토리 관리, 해상/항공 물류 등 다양한
                        서비스를 제공합니다.
                    </Text>

                    <Text>
                        데이터 분석과 인공지능을 활용하여 예측 가능하고 정확한
                        물류 솔루션을 제공합니다.
                    </Text>

                    <Text>
                        우리의 물류 솔루션을 통해 고객이 어떻게 비용을 절감하고
                        효율성을 향상시켰는지 살펴보세요.
                    </Text>

                    <Text>
                        우리와 함께 더 나은 물류 솔루션을 탐색하려면 아래
                        연락처로 연락하십시오.
                    </Text>
                </VStack>

                <HStack mt={"10px"} spacing={5}>
                    <YelloButton text="Get a Quoto" />

                    <Box cursor={"pointer"} _hover={{ color: "#FC630790" }}>
                        <Text fontSize={"16px"} fontWeight={"semibold"}>
                            Contact
                        </Text>
                    </Box>
                </HStack>
            </VStack>
        </Box>
    );
}
