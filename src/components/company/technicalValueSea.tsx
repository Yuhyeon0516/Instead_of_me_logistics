import { Box, Image, Text, VStack } from "@chakra-ui/react";
import CEO from "./technicalValue/ceo";

export default function TechnicalValueSea() {
    return (
        <Box w={"100dvw"} h={"200dvh"} position={"relative"}>
            <Box
                position={"absolute"}
                w={"100%"}
                h={"100%"}
                top={0}
                left={0}
                zIndex={0}
            >
                <Box
                    w={"100%"}
                    h={"100dvh"}
                    backgroundColor={"blackAlpha.900"}
                />
                <Box w={"100%"} h={"100dvh"} backgroundColor={"white"} />
            </Box>
            <VStack
                w={"100%"}
                h={"100%"}
                zIndex={5}
                py={"200px"}
                px={"50px"}
                position={"relative"}
                alignItems={"flex-start"}
            >
                <Text color={"#FC6307"} fontSize={"20px"} mb={"15px"}>
                    Our Service
                </Text>

                <Text
                    color={"white"}
                    fontSize={"48px"}
                    fontWeight={"extrabold"}
                    mb={"50px"}
                >
                    우리는 기술적 가치에 큰 중요성을 둡니다.
                </Text>

                <Image
                    src={require("../../assets/axel-hjEesK4KSDs-unsplash.jpg")}
                    w={"100%"}
                    h={"auto"}
                    objectFit={"cover"}
                    mb={"50px"}
                />

                <Text
                    fontSize={"24px"}
                    color={"black"}
                    fontWeight={"semibold"}
                    lineHeight={"1.8"}
                    mb={"30px"}
                >
                    우리 회사는 항상 기술적 가치에 큰 중요성을 두고 있습니다.
                    <br />
                    기술은 우리 물류 업무의 핵심 요소 중 하나이며, 우리의 역량을
                    극대화하고 고객 서비스를 향상시키는데 결정적인 역할을
                    합니다.
                    <br />
                    우리의 기술적 솔루션은 물류 프로세스를 최적화하고 실시간
                    데이터 모니터링,
                    <br />
                    예측 분석 및 효율적인 자원 할당을 통해 우리의 물류 운영을
                    개선하는데 기여합니다.
                    <br />
                    또한, 우리는 최신 기술과 물류 분야에서의 전문 지식을
                    결합하여 고객에게 최고의 기술적 가치를 제공합니다.
                    <br />
                    우리 회사의 기술적 역량을 통해 물류 프로세스를 혁신하고,
                    경쟁력을 강화하는 데 기여하고자 합니다.
                </Text>

                <CEO />
            </VStack>

            <Box
                backgroundColor={"gray.300"}
                w={"100%"}
                minH={"1px"}
                maxH={"1px"}
            />
        </Box>
    );
}
