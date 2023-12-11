import { Box, Center, HStack, Text, VStack } from "@chakra-ui/react";
import TextBox from "./innovation/textBox";

export default function Innovation() {
    return (
        <Box
            w={"100dvw"}
            h={"100dvh"}
            backgroundColor={"white"}
            color={"black"}
        >
            <Center w={"100%"} h={"100%"}>
                <VStack spacing={"60px"}>
                    <Text fontSize={"54px"} fontWeight={"extrabold"}>
                        물류 혁신을 위한 새로운 출발
                    </Text>

                    <Box
                        fontSize={"18px"}
                        fontWeight={"semibold"}
                        color={"gray.600"}
                    >
                        <VStack spacing={3}>
                            <Text>
                                우리의 목표는 물류 업계를 혁신하고자 합니다.
                            </Text>
                            <Text>
                                우리는 효율적이고 혁신적인 방식으로 물류를
                                관리하고 있습니다.
                            </Text>
                            <Text>
                                고객의 요구를 충족시키며, 우리의 최상급 팀과
                                함께 물류 프로세스를 개선하고 최적화하는 방법을
                                찾아보세요.
                            </Text>

                            <Text>
                                우리는 물류 혁신을 위한 협력 파트너로 여러분을
                                지원하겠습니다.
                            </Text>
                        </VStack>
                    </Box>

                    <HStack spacing={0}>
                        <TextBox title="$100m" description="Trending value" />
                        <TextBox title="15,000" description="Orders executed" />
                        <TextBox
                            isRight
                            title="350m"
                            description="Clients connected"
                        />
                    </HStack>
                </VStack>
            </Center>
        </Box>
    );
}
