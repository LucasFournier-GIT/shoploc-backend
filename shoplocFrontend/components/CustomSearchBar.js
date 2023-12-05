import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBar = () => {
    return (
        <View style={styles.searchContainer}>
            <TextInput
                placeholder="Chercher un produit..."
                placeholderTextColor="#B18F84"
                style={styles.input}
            />
            <Icon name="search" size={24} color="#5D3528" style={styles.icon} />
        </View>
    );
};

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: '#5D3528',
        borderRadius: 32.5,
        paddingHorizontal: 10,
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom:10,
        backgroundColor:"#fff",
        height : 43
    },
    input: {
        flex: 1,
        color: '#5D3528',
        fontStyle: 'italic',
        paddingLeft: 10,
    },
    icon: {
        marginRight: 5,
    },
});

export default SearchBar;
