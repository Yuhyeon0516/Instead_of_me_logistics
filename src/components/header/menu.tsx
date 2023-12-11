import { HStack } from "@chakra-ui/react";
import MenuItem from "./menuItem";

export default function Menu({ menuHoverColor }: { menuHoverColor: string }) {
    return (
        <HStack justifyContent={"space-between"}>
            <MenuItem label="Home" path="/" menuHoverColor={menuHoverColor} />
            <MenuItem label="Our" path="/our" menuHoverColor={menuHoverColor} />
            <MenuItem
                label="Company Overview"
                path="/company"
                menuHoverColor={menuHoverColor}
            />
        </HStack>
    );
}
