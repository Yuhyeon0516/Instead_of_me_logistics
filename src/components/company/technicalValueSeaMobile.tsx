import { Box, Image, VStack, Text } from "@chakra-ui/react";
import CEOMobile from "./technicalValue/ceoMobile";

export default function TechnicalValueSeaMobile() {
    return (
        <Box w={"100%"} mt={"100px"} position={"relative"}>
            <Image
                src={require("../../assets/axel-hjEesK4KSDs-unsplash.jpg")}
                objectFit={"fill"}
                position={"absolute"}
                w={"100%"}
                h={"100%"}
                zIndex={-1}
                opacity={0.3}
            />
            <Box h={"100%"} w={"100%"} pt={"50px"} px={"30px"}>
                <VStack alignItems={"flex-start"} spacing={5}>
                    <Text color={"#FC6307"} fontSize={"20px"}>
                        Our Service
                    </Text>
                    <Text fontSize={"36px"} fontWeight={"extrabold"}>
                        우리는 기술적 가치에
                        <br />큰 중요성을 둡니다.
                    </Text>
                    <Text color={"black"} lineHeight={"2"}>
                        우리 회사는 항상 기술적 가치에 큰 중요성을 두고
                        있습니다.
                        <br />
                        기술은 우리 물류 업무의 핵심 요소 중 하나이며, 우리의
                        역량을 극대화하고 고객 서비스를 향상시키는데 결정적인
                        역할을 합니다.
                        <br />
                        우리의 기술적 솔루션은 물류 프로세스를 최적화하고 실시간
                        데이터 모니터링,
                        <br />
                        예측 분석 및 효율적인 자원 할당을 통해 우리의 물류
                        운영을 개선하는데 기여합니다.
                        <br />
                        또한, 우리는 최신 기술과 물류 분야에서의 전문 지식을
                        결합하여 고객에게 최고의 기술적 가치를 제공합니다.
                        <br />
                        우리 회사의 기술적 역량을 통해 물류 프로세스를 혁신하고,
                        경쟁력을 강화하는 데 기여하고자 합니다.
                    </Text>

                    <CEOMobile />
                </VStack>
            </Box>
        </Box>
    );
}
