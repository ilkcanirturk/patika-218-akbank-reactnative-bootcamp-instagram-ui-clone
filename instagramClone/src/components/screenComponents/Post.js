import { View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import React , {useState} from 'react';
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionic from "react-native-vector-icons/Ionicons";

// Vector Icons'dan Feather,AntDesign ve Ionic kullanıldı.
const Post = () => {
    // Toplam 3 gönderi bulunmakta ancak bu kısımda bu sayı değiştiğinde sayıdan bağımsız olarak 'Rendered more hooks than during the previous render(React)' hatası oluşuyor.
    const postInfo = [
        {
            postTitle:'spotify',
            postPersonImage: require('../../storage/images/spotify.png'),
            postImage: require('../../storage/images/maldives.jpg'),
            likes: 345,
            isLiked: false,
            content: 'Music lists are available in bio for Maldives.'
        },
        {
            postTitle:'tesla',
            postPersonImage: require('../../storage/images/car.jpg'),
            postImage: require('../../storage/images/lotr.jpg'),
            likes: 1.456,
            isLiked: false,
            content: 'We are fan of LOTR!'
        },
        {
            postTitle:'react-native',
            postPersonImage: require('../../storage/images/rn.jpg'),
            postImage: require('../../storage/images/lion.jpg'),
            likes: 5780,
            isLiked: false,
            content: 'Do you want to be strong like a lion?'
        }
        

    ]

  return (
    <View>
        {postInfo.map((data, index) => {
                    const [like, setLike] = useState(data.isLiked)
                return (
                    <View key={index} style={{
                        paddingBottom: 10,
                        borderBottomColor: 'gray',
                        borderBottomWidth: 0.1
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: 5,
                        }}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Image 
                                source={data.postPersonImage} 
                                style={{width: 40, height: 40, borderRadius:100}}
                                />
                                <View style={{paddingLeft: 5}}>
                                    <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                                        {data.postTitle}
                                    </Text>
                                </View>
                            </View>
                            <TouchableOpacity>
                                <Feather name="more-horizontal" style={{fontSize: 20}}/>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            position: 'relative',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            {/* Gönderi resmi */}
                            <Image 
                            source={data.postImage} 
                            style={{width: '100%', height: 400}}
                            />
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingHorizontal: 12,
                            paddingVertical: 15,
                            }}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                {/* Like yapılırsa kırmızı renk yapılmazsa normal ikon rengi */}
                                <TouchableOpacity onPress={() =>setLike(!like)}>
                                    <AntDesign 
                                    name={like ? "heart" : "hearto"} 
                                    style={{
                                        paddingRight: 10, 
                                        fontSize: 20, 
                                        color: like ? "red" : "black"}}/>
                                </TouchableOpacity>
                                {/* gönderi altında like ikonu yanındaki yorum ve paylaş ikonları */}
                                <TouchableOpacity>
                                    <Ionic 
                                    name="ios-chatbubble-outline" 
                                    style={{
                                        fontSize: 20, 
                                        paddingRight: 10,
                                        color: 'black'}}/>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Feather 
                                    name="navigation" 
                                    style={{
                                        fontSize: 20,
                                        color: 'black'}}/>
                                </TouchableOpacity>
                            </View>
                            {/* gönderiyi kaydetme ikonu. (Ayrı bir View oluşturulup diğerleri ile arasında boşluk olması için bir  üstteki View'da justify-content:space-between kullanıldı.) */}
                            <TouchableOpacity>
                                <Feather 
                                name='bookmark' 
                                style={{
                                    fontSize:20,
                                    color: 'black'}}/>
                            </TouchableOpacity>
                        </View>
                        <View style={{paddingHorizontal: 15}}>
                            {/* Gönderi altında kaç kişi tarafından beğenildiği ve kullanıcı like yaparsa beğeni sayısına dahil edilmesi. Burası instagramın bir eski versiyonu mantığındadır. Yeni versiyonda sadece  like sayısını otomatik 1 arttırmakta. */}
                            <Text>
                                Liked by {like ? "you and " : " "}
                                {like ? data.likes : data.likes + 0} others
                            </Text>
                            <View style={{flexDirection: 'row', paddingVertical: 2}}>
                                <Text 
                                    style={{
                                        fontWeight:'700', 
                                        fontSize: 14,
                                        }}>
                                            {data.postTitle + ' '}
                                </Text>
                                <Text 
                                    style={{
                                        fontWeight: '400', 
                                        fontSize: 14,
                                        }}>
                                            {data.content}
                                </Text>
                            </View>
                            <Text style={{opacity: 0.4,paddingVertical: 2}}>
                                View all comments
                            </Text>
                            <View>
                                {/* her postun altındaki 'yorum yap..' yazısının yanındaki ufak profil fotografı */}
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Image 
                                        source={require('../../storage/images/astronaut.jpg')} 
                                        style={{
                                            width: 25, 
                                            height: 25, 
                                            borderRadius: 100, 
                                            backgroundColor: 'orange', 
                                            marginRight: 10
                                        }}
                                    />
                                    <TextInput 
                                        placeholder="Add a comment " 
                                        style={{opacity: 0.5}}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                )
            })
        }
    </View>
  )
}

export default Post