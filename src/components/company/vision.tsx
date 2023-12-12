import { Box, Grid, HStack, Image, Text, VStack } from "@chakra-ui/react";
import PdfBox from "./vision/pdfBox";

export default function Vision() {
    return (
        <Box w={"100dvw"} h={"100dvh"}>
            <VStack w={"100%"} h={"100%"} spacing={0}>
                <Box w={"100%"} h={"50%"}>
                    <Image
                        src={require("../../assets/Screenshot-2020-09-18-at-15.20.20.png")}
                        w={"100%"}
                        h={"100%"}
                        objectFit={"cover"}
                    />
                </Box>
                <Box w={"100%"} h={"50%"}>
                    <Grid templateColumns={"repeat(2,1fr)"}>
                        <Box w={"100%"} h={"80%"} px={"30px"} py={"50px"}>
                            <Text
                                fontSize={"48px"}
                                fontWeight={"extrabold"}
                                lineHeight={"1.5"}
                            >
                                우리는
                                <br />
                                비전을 가지고 거래합니다.
                            </Text>
                        </Box>

                        <VStack
                            w={"100%"}
                            h={"100%"}
                            display={"flex"}
                            alignItems={"flex-start"}
                            pt={"50px"}
                        >
                            <Text
                                fontSize={"22px"}
                                fontWeight={"semibold"}
                                lineHeight={"1.5"}
                                flex={1}
                            >
                                우리의 비전은 물류와 공급망 관리의 미래를
                                형성하고,
                                <br />
                                물류 업계를 혁신하며 최고 수준의 서비스를
                                제공하는 것입니다.
                                <br />
                                우리는 항상 고객 중심을 지향하며, 기술과 혁신을
                                통해 효율적이고
                                <br />
                                지속 가능한 물류 솔루션을 제공합니다.
                                <br />
                                물류 프로세스를 간소화하고, 실시간 데이터와
                                분석을 통해
                                <br />
                                고객의 요구에 빠르게 대응합니다.
                                <br />
                                우리의 비전은 물류 및 공급망 분야에서 최고의
                                파트너가 되어
                                <br />
                                고객과 함께 성장하며 미래를 모색하는 것입니다.
                            </Text>

                            <HStack py={"20px"}>
                                <PdfBox text="Company Profile" />
                                <PdfBox text="Business Plan" />
                            </HStack>
                        </VStack>
                    </Grid>
                </Box>
            </VStack>
        </Box>
    );
}
