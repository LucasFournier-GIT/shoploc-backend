import React from "react";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const Icons = {
    FontAwesome
}

const Icon = ({ type, name, color, size = 24, style }) => {
    const fontSize = 24;
    const Tag = type;
    return (
        <>
            {type && name && (
                <Tag name={name} size={size || fontSize} color={color} style={style} />
            )}
        </>
    )
}

export { Icon }; // Ajout de l'exportation du composant Icon
