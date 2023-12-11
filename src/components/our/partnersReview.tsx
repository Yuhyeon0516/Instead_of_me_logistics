import { Box, Center, Grid, Text, VStack } from "@chakra-ui/react";
import YelloButton from "../common/yelloButton";
import ReviewBox from "./partnersReview/reviewBox";

export default function PartnersReview() {
    return (
        <Box
            position={"relative"}
            w={"100dvw"}
            height={"100dvh"}
            color={"white"}
            backgroundColor={"blackAlpha.900"}
        >
            <Center w={"100%"} h={"100%"}>
                <VStack spacing={5}>
                    <Text color={"#FC6307"} fontSize={"20px"}>
                        Our Partners
                    </Text>

                    <Text
                        fontSize={"54px"}
                        fontWeight={"extrabold"}
                        mb={"25px"}
                    >
                        전 세계 고객으로부터 받은 긍정적인 피드백
                    </Text>

                    <YelloButton text="Get a Quoto" />

                    <Grid
                        mt={"25px"}
                        templateColumns={"repeat(4,1fr)"}
                        columnGap={"3px"}
                    >
                        <ReviewBox
                            sector="Agricultural products processing"
                            corporation="A Corp"
                            reviewText="이 물류 회사는 항상 우리의 요구에 신속하게 대응하며, 우리와 함께 무결점 물류 서비스를 제공합니다. 그들의 전문성과 탁월한 고객 서비스는 우리 비즈니스에 큰 가치를 제공하며, 그들과의 협력을 통해 우리의 제품이 전 세계 고객에게 시간에 맞게 도착할 수 있었습니다."
                        />
                        <ReviewBox
                            sector="Electronic product sales"
                            corporation="B Corp"
                            reviewText="이 물류 회사는 비즈니스의 성장을 위한 중요한 동반자입니다. 그들의 계약 물류 서비스는 비용을 줄이고 우리의 물류 프로세스를 최적화하는 데 도움이 되었습니다. 그들은 항상 고객 중심의 솔루션을 제공하며, 우리의 요구에 맞게 맞춤형 서비스를 제공합니다."
                        />
                        <ReviewBox
                            sector="Agricultural products processing"
                            corporation="C Corp"
                            reviewText="우리는 이 물류 회사와의 디지털 솔루션을 통해 물류 프로세스를 향상시켰습니다. 실시간 데이터 모니터링과 예측 분석을 통해 우리는 재고 관리와 주문 처리를 향상시키는 데 그들의 지원을 활용하고 있습니다. 이 회사와의 협력을 통해 우리는 물류 영업을 혁신하고 성장시키는 데 큰 도움을 얻고 있습니다."
                        />
                        <ReviewBox
                            sector="Electronic product sales"
                            corporation="D Corp"
                            reviewText="End-to-End 물류 서비스를 제공하는 이 회사는 우리의 공급망을 효과적으로 관리하고 우리의 물류 과정을 통합하는 데 큰 도움을 주고 있습니다. 그들과 함께 일하는 것은 우리 비즈니스를 강화하고 글로벌 시장에서 경쟁력을 유지하는 데 큰 장점이 됩니다. 그들은 항상 우리의 목표를 달성하는 데 도움을 주며, 고객 중심의 물류 솔루션을 제공합니다."
                        />
                    </Grid>
                </VStack>
            </Center>
        </Box>
    );
}
