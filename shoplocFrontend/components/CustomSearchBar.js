import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from "./../assets/colors";
const SearchBar = () => {
    return (
        <View style={styles.searchContainer}>
            <TextInput
                placeholder="Chercher un produit..."
                placeholderTextColor={colors.light}
                style={styles.input}
            />
            <Icon name="search" size={24} color={colors.secondary} style={styles.icon} />
        </View>
    );
};

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: colors.primary,
        borderRadius: 32.5,
        paddingHorizontal: 10,
        marginHorizontal: 20,
        marginTop: 15,
        marginBottom:0,
        backgroundColor:"white",
        flex:1,
        height : 43,
        
    },
    input: {
        flex: 1,
        color: colors.primary,
        fontStyle: 'italic',
        paddingLeft: 10,
        height:75,
    },
    icon: {
        marginRight: 5,
    },
});

export default SearchBar;
