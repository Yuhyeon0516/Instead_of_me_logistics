import { Box, Icon, Text, VStack } from "@chakra-ui/react";
import { IconType } from "react-icons";

export default function IconBoxText({
    icon,
    title,
    description,
}: {
    icon: IconType;
    title: string;
    description: string;
}) {
    return (
        <Box
            backgroundColor={"white"}
            w={"250px"}
            h={"300px"}
            px={"20px"}
            py={"30px"}
            borderRadius={"10px"}
        >
            <VStack alignItems={"flex-start"} spacing={7}>
                <Icon color={"#FC6307"} fontSize={"30px"} as={icon} />
                <Text fontSize={"20px"} fontWeight={"extrabold"}>
                    {title}
                </Text>
                <Text
                    fontSize={"16px"}
                    fontWeight={"medium"}
                    lineHeight={"1.5"}
                >
                    {description}
                </Text>
            </VStack>
        </Box>
    );
}
