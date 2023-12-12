import {
    Box,
    Center,
    Grid,
    HStack,
    Image,
    Text,
    VStack,
} from "@chakra-ui/react";
import VisionTextBox from "./vision/visionTextBox";

export default function Vision() {
    return (
        <Grid
            w={"100dvw"}
            h={"100dvh"}
            mt={"50px"}
            templateColumns={"repeat(2, 1fr)"}
        >
            <Box h={"100%"}>
                <Box
                    h={"100%"}
                    w={"100%"}
                    pl={"50px"}
                    display={"flex"}
                    alignItems={"center"}
                >
                    <VStack alignItems={"flex-start"} spacing={5}>
                        <Text color={"#FC6307"} fontSize={"20px"}>
                            Our Vision
                        </Text>
                        <Text fontSize={"48px"} fontWeight={"extrabold"}>
                            혁신적이고
                            <br /> 상호 운용 가능한 플랫폼
                        </Text>
                        <Text color={"gray.500"} lineHeight={"2"}>
                            우리의 물류 플랫폼은 혁신적인 기술과 상호 운용
                            가능성을 통해 물류 업계를 변화시킵니다.
                            <br />
                            우리의 플랫폼을 통해 다양한 물류 프로세스를
                            효율적으로 관리하고,
                            <br />
                            다른 시스템과의 연동을 간편하게 구현할 수 있습니다.
                            <br />
                            이를 통해 비용을 절감하고 물류 운영을 최적화할 수
                            있습니다.
                            <br />
                            우리의 혁신적인 플랫폼을 통해 물류 업무를 효율적으로
                            수행하고 경쟁력을 강화하세요.
                        </Text>

                        <Box
                            w={"100%"}
                            h={"0.5px"}
                            backgroundColor={"gray.600"}
                            my={"30px"}
                        />

                        <HStack
                            w={"100%"}
                            justifyContent={"space-between"}
                            px={"50px"}
                        >
                            <VisionTextBox
                                title="97%"
                                description="Customer satisfaction"
                            />
                            <VisionTextBox
                                title="25K"
                                description="Monthly active users"
                            />
                        </HStack>
                    </VStack>
                </Box>
            </Box>
            <Box h={"100%"} pr={"50px"}>
                <Center w={"100%"} h={"100%"}>
                    <Box w={"100%"} h={"50%"}>
                        <Image
                            src={require("../../assets/bernd-dittrich-mjhvx4CO6G8-unsplash.jpg")}
                            objectFit={"cover"}
                        />
                    </Box>
                </Center>
            </Box>
        </Grid>
    );
}
