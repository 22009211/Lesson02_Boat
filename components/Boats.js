import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const Boat = ({name, description, photo})=> {
    return (
        <View>
            <Icon name="boat" size={50} />
            <Text>
                {name} size={50}
            </Text>
            <Text>
                {description}
            </Text>
            <Image source={photo} style={{width: 400, height: 500}} />
        </View>
    );
};

export default Boat;