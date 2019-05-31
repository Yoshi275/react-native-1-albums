import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
    const { title, artist, image, url } = album;
    const { 
        albumHeaderContentStyle, 
        albumHeaderTextStyle, 
        artistThumbnailStyle, 
        thumbnailContainerStyle,
        imageStyle } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        style={artistThumbnailStyle}
                        source={{ uri: 'https://i.imgur.com/K3KJ3w4h.jpg' }} 
                    />
                </View>
                <View style={albumHeaderContentStyle}>
                        <Text style={albumHeaderTextStyle}>{ title }</Text>
                        <Text>{ artist }</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image 
                    source={{ uri: image }} 
                    style={imageStyle}
                />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    albumHeaderContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    albumHeaderTextStyle: {
        fontSize: 18,
    },
    artistThumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null,
    }
};

export default AlbumDetail;
