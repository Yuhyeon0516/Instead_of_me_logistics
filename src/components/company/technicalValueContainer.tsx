import { Box, Grid, Image, Text, VStack } from "@chakra-ui/react";

export default function TechnicalValueContainer() {
    return (
        <Box w={"100dvw"} h={"100dvh"} mt={"50px"} backgroundColor={"white"}>
            <Grid templateColumns={"repeat(2,1fr)"}>
                <Box w={"100%"} h={"80dvh"} px={"50px"}>
                    <Text
                        fontSize={"48px"}
                        fontWeight={"extrabold"}
                        lineHeight={"1.5"}
                    >
                        우리는
                        <br />
                        기술적 가치에
                        <br />큰 중요성을 둡니다.
                    </Text>
                </Box>
                <VStack
                    w={"100%"}
                    h={"80dvh"}
                    pr={"20px"}
                    fontSize={"24px"}
                    fontWeight={"semibold"}
                    lineHeight={"1.5"}
                    display={"flex"}
                    alignItems={"flex-start"}
                >
                    <Text flex={1}>
                        우리는 물류 업계에서 기술의 역할을 중요시하며,
                        <br />
                        최신 기술과 혁신을 통해 물류 프로세스를 현대화하고자
                        합니다.
                        <br />
                        기술은 우리의 핵심 원칙 중 하나이며,
                        <br />
                        고객에게 가치 있는 솔루션을 제공하는 데 핵심 역할을
                        합니다.
                    </Text>

                    <Box
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        w={"100%"}
                        h={"100%"}
                        my={"30px"}
                        position={"relative"}
                    >
                        <Image
                            src={require("../../assets/frank-mckenna-tjX_sniNzgQ-unsplash.jpg")}
                            w={"100%"}
                            h={"100%"}
                            objectFit={"cover"}
                            position={"absolute"}
                        />
                        <Text
                            color={"white"}
                            position={"relative"}
                            fontSize={"48px"}
                            lineHeight={"1.2"}
                            fontWeight={"extrabold"}
                        >
                            INSTEADOFME
                            <br />
                            LOGISTICS
                        </Text>
                    </Box>

                    <Text flex={1}>
                        우리의 팀은 기술에 대한 열정과 전문 지식을 갖추고
                        있으며,
                        <br />
                        기술적 혁신을 통해 고객의 요구를 충족하고
                        <br />
                        비즈니스를 성장시키는데 기여합니다.
                        <br />
                        우리는 기술의 발전을 추구하며,
                        <br />
                        최고 수준의 기술적 가치를 제공하기 위해 노력하고
                        있습니다.
                    </Text>
                </VStack>
            </Grid>
        </Box>
    );
}
