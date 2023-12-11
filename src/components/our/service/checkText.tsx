import { HStack, Icon, Text } from "@chakra-ui/react";
import { FaRegCheckCircle } from "react-icons/fa";

export default function CheckText({ text }: { text: string }) {
    return (
        <HStack alignItems={"center"} spacing={3}>
            <Icon fontSize={"30px"} as={FaRegCheckCircle} color={"#FC6307"} />
            <Text fontWeight={"semibold"}>{text}</Text>
        </HStack>
    );
}
