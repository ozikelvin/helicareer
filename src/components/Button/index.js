/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import colors from '../../assets/colors';
import { TouchableOpacity , Text ,
     ActivityIndicator , View } from 'react-native';
import { styles } from './styles';

export const Button = ({ title , variant  , onClick , disabled , loading })  =>{

    const getBg = () =>{
        if (disabled){
            return colors.grey;
        }

        if (variant === 'primary'){
            return colors.primary;
        }
        if (variant === 'danger'){
            return colors.danger;
        }
        if (variant ===  'secondary'){
            return colors.secondary;
        }
        if (variant ===  'success'){
            return colors.success;
        }
       
    }; 
    const getColor = () =>{
        if (disabled){
            return 'black';
        }
        if (variant === 'white'){
            return colors.secondary;
        }
        else {
            return colors.white;
        }
    };

    const getFontSize = () =>{
        if (variant === 'white'){
            return 12;
        }
        else {
            return 14;
        }
    };
    const getMarginTop = () =>{
        if (variant === 'white'){
            return -20;
        }
    };

return (
    <TouchableOpacity
    onPress={onClick}
    style={[styles.container , {backgroundColor:getBg()}]}
    >
    <View style={styles.loadingIcon} >
    {
        loading ? <ActivityIndicator color={colors.primary} /> : <Text style={
            [{color:getColor()}, {fontSize:getFontSize()}, {marginTop:getMarginTop()} ]
        } > { title } </Text>
    }
    
    </View>
    </TouchableOpacity>
);
};
