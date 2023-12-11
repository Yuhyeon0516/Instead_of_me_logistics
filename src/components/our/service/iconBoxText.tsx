import { Box, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { useRecoilValue } from "recoil";
import { DisplayResolution } from "../../../global/recoil";

export default function IconBoxText({
    icon,
    title,
    description,
}: {
    icon: IconType;
    title: string;
    description: string;
}) {
    const displayResolution = useRecoilValue(DisplayResolution);

    return (
        <Box
            backgroundColor={"white"}
            w={displayResolution === "web" ? "250px" : "auto"}
            h={displayResolution === "web" ? "300px" : "auto"}
            px={"20px"}
            py={"30px"}
            borderRadius={"10px"}
        >
            <VStack alignItems={"flex-start"} spacing={5}>
                <HStack display={"flex"} alignItems={"center"} spacing={3}>
                    <Icon
                        color={"#FC6307"}
                        fontSize={displayResolution === "web" ? "30px" : "20px"}
                        as={icon}
                    />
                    <Text
                        fontSize={displayResolution === "web" ? "20px" : "14px"}
                        fontWeight={"extrabold"}
                    >
                        {title}
                    </Text>
                </HStack>
                <Text
                    fontSize={displayResolution === "web" ? "16px" : "12px"}
                    fontWeight={"medium"}
                    lineHeight={"1.5"}
                >
                    {description}
                </Text>
            </VStack>
        </Box>
    );
}
