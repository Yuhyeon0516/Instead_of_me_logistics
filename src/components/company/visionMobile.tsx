import { Box, VStack, Text, Image, HStack } from "@chakra-ui/react";
import PdfBox from "./vision/pdfBox";

export default function VisionMobile() {
    return (
        <Box w={"100%"} position={"relative"}>
            <Image
                src={require("../../assets/Screenshot-2020-09-18-at-15.20.20.png")}
                w={"100%"}
                h={"100%"}
                objectFit={"fill"}
                position={"absolute"}
                top={0}
                left={0}
                zIndex={-1}
                opacity={0.5}
            />
            <VStack
                alignItems={"flex-start"}
                px={"30px"}
                py={"40px"}
                color={"black"}
                spacing={5}
            >
                <Text fontSize={"36px"} fontWeight={"extrabold"}>
                    우리는 비전을
                    <br />
                    가지고 거래합니다.
                </Text>

                <Text lineHeight={"2"}>
                    우리의 비전은 물류와 공급망 관리의 미래를 형성하고, 물류
                    업계를 혁신하며 최고 수준의 서비스를 제공하는 것입니다.
                    <br />
                    우리는 항상 고객 중심을 지향하며, 기술과 혁신을 통해
                    효율적이고 지속 가능한 물류 솔루션을 제공합니다.
                    <br />
                    물류 프로세스를 간소화하고, 실시간 데이터와 분석을 통해
                    고객의 요구에 빠르게 대응합니다.
                    <br />
                    우리의 비전은 물류 및 공급망 분야에서 최고의 파트너가 되어
                    고객과 함께 성장하며 미래를 모색하는 것입니다.
                </Text>

                <HStack>
                    <PdfBox text="Company Profile" />
                    <PdfBox text="Business Plan" />
                </HStack>
            </VStack>
        </Box>
    );
}
