import { Box, Image, VStack, Text } from "@chakra-ui/react";
import VisionTextBox from "./vision/visionTextBox";

export default function VisionMobile() {
    return (
        <Box w={"100%"} mt={"100px"} position={"relative"}>
            <Image
                src={require("../../assets/bernd-dittrich-mjhvx4CO6G8-unsplash.jpg")}
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
                        Our Vision
                    </Text>
                    <Text fontSize={"36px"} fontWeight={"extrabold"}>
                        혁신적이고
                        <br /> 상호 운용 가능한 플랫폼
                    </Text>
                    <Text color={"black"} lineHeight={"2"}>
                        우리의 물류 플랫폼은 혁신적인 기술과 상호 운용 가능성을
                        통해 물류 업계를 변화시킵니다.
                        <br />
                        우리의 플랫폼을 통해 다양한 물류 프로세스를 효율적으로
                        관리하고, 다른 시스템과의 연동을 간편하게 구현할 수
                        있습니다.
                        <br />
                        이를 통해 비용을 절감하고 물류 운영을 최적화할 수
                        있습니다.
                        <br />
                        우리의 혁신적인 플랫폼을 통해 물류 업무를 효율적으로
                        수행하고 경쟁력을 강화하세요.
                    </Text>

                    <Box
                        w={"100%"}
                        h={"2px"}
                        backgroundColor={"black"}
                        my={"30px"}
                    />

                    <VStack w={"100%"} spacing={10} mb={"50px"}>
                        <VisionTextBox
                            title="97%"
                            description="Customer satisfaction"
                            descriptionColor="black"
                            isBold
                        />
                        <VisionTextBox
                            title="25K"
                            description="Monthly active users"
                            descriptionColor="black"
                            isBold
                        />
                    </VStack>
                </VStack>
            </Box>
        </Box>
    );
}
