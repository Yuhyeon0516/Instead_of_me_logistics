import { Box, Center, Grid, Text, VStack } from "@chakra-ui/react";
import BringingTextBox from "./partnersBringing/bringingTextBox";

export default function PartenrsBringing() {
    return (
        <Box
            position={"relative"}
            w={"100dvw"}
            height={"100dvh"}
            color={"black"}
            backgroundColor={"white"}
            px={"30px"}
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
                        우리의 파트너, 모두가 하나 되었습니다.
                    </Text>

                    <Grid
                        mt={"25px"}
                        templateColumns={"repeat(4,1fr)"}
                        columnGap={"20px"}
                        rowGap={"20px"}
                    >
                        <BringingTextBox name="ConnectFlows" />
                        <BringingTextBox name="GreenlightMasters" />
                        <BringingTextBox name="PowerPlates" />
                        <BringingTextBox name="PowerSolutions" />
                        <BringingTextBox name="NeoFly" />
                        <BringingTextBox name="GrowPlus" />
                        <BringingTextBox name="FlightGlobal" />
                        <BringingTextBox name="SafeTrades" />
                        <BringingTextBox name="DeltaSoft" />
                        <BringingTextBox name="PerfectPartners" />
                        <BringingTextBox name="MasterDistributors" />
                        <BringingTextBox name="SmartNetworks" />
                        <BringingTextBox name="SunshineCircles" />
                        <BringingTextBox name="GlobalTraders" />
                        <BringingTextBox name="ExpressCubes" />
                    </Grid>
                </VStack>
            </Center>
        </Box>
    );
}
