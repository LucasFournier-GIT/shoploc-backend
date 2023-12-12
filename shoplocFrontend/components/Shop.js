import { View } from "react-native/types";
import colors from "./../assets/colors";

export default function Shop() {
    return (
        <View>
            <StatusBar
                animated={true}
                backgroundColor={colors.primary}
            />
        </View>
    );
}   