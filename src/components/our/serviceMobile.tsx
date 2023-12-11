import { Box, VStack, Text, Grid } from "@chakra-ui/react";
import CheckText from "./service/checkText";
import YelloButton from "../common/yelloButton";
import IconBoxText from "./service/iconBoxText";
import { FaBell, FaClock, FaStar } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";

export default function ServiceMobile() {
    return (
        <Box w={"100%"} px={"30px"} py={"50px"} bgColor={"whitesmoke"}>
            <VStack alignItems={"flex-start"} spacing={7}>
                <Text color={"#FC6307"} fontSize={"20px"}>
                    Our Service
                </Text>
                <Text
                    fontSize={"36px"}
                    fontWeight={"extrabold"}
                    lineHeight={"1.2"}
                >
                    Logistics
                    <br />
                    Solution
                </Text>
                <Text color={"black"} lineHeight={"2"}>
                    우리의 물류 솔루션은 물류 업계의 현실적인 과제를 해결하고
                    비즈니스를 향상시키는데 도움을 줍니다.
                    <br />
                    우리는 혁신적인 기술과 업계 전문 지식을 바탕으로 효과적인
                    물류 솔루션을 제공합니다.
                    <br />
                    이를 통해 고객은 물류 프로세스를 최적화하고 비용을 절감할 수
                    있으며, 고객의 요구를 충족시키기 위해 맞춤형 솔루션을
                    제공합니다.
                    <br />
                    우리의 물류 솔루션을 선택하면 효율성을 극대화하고 경쟁
                    우위를 확보할 수 있습니다.
                </Text>

                <VStack spacing={5} alignItems={"flex-start"}>
                    <CheckText text="효율적인 물류 프로세스 관리" />
                    <CheckText text="비용 절감과 최적화" />
                    <CheckText text="맞춤형 솔루션 제공" />
                </VStack>

                <YelloButton text="View Details" />

                <Grid
                    templateColumns={"repeat(2, 1fr)"}
                    gridColumnGap={"20px"}
                    gridRowGap={"20px"}
                >
                    <IconBoxText
                        icon={FaClock}
                        title="Supply chain"
                        description="제품 및 자원의 실시간 추적을 통해 물류 프로세스를 투명하게 관리하고 문제를 신속하게 해결합니다."
                    />
                    <IconBoxText
                        icon={IoSettingsSharp}
                        title="Contract logistics"
                        description="우리는 고객의 고유한 요구를 고려하며, 물류와 공급망 운영을 신뢰할 수 있게 해줍니다."
                    />
                    <IconBoxText
                        icon={FaStar}
                        title="Digital solutions"
                        description="최신 기술과 데이터 분석을 활용하여 실시간 모니터링, 예측 분석 및 효율적인 자원 할당을 제공하여 물류 운영을 최적화합니다."
                    />
                    <IconBoxText
                        icon={FaBell}
                        title="End-to-end"
                        description="공급망의 모든 단계를 통합적으로 관리합니다. 제품의 수령, 창고 보관, 주문 처리, 운송 및 마지막 고객에게의 납품에 이르기까지 물류 과정의 모든 측면을 다룹니다."
                    />
                </Grid>
            </VStack>
        </Box>
    );
}
