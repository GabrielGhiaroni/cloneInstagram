import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity
} from 'react-native';

class Lista extends Component {

    constructor(props) {
        super(props);
        this.state = {
            feed: this.props.data
        }

        this.mostraLikes = this.mostraLikes.bind(this);
        this.like = this.like.bind(this);
        this.alterarIconeLike = this.alterarIconeLike.bind(this);
    };

    alterarIconeLike(likeada) {
        return likeada ? require('../img/likeada.png') : require('../img/heart.png');
    };

    like() {
        let feed = this.state.feed;

        if (feed.likeada === true) {
            this.setState({
                feed: {
                    ...feed,
                    likeada: false,
                    likes: feed.likes - 1
                }
            });
        } else {
            this.setState({
                feed: {
                    ...feed,
                    likeada: true,
                    likes: feed.likes + 1
                }
            });
        }
    };

    mostraLikes(likes) {
        let feed = this.state.feed;

        if(feed.likes <= 0) {
            return
        };

        return(
            <Text style={styles.likes}>{feed.likes} {feed.likes > 1 ? 'likes' : 'like'}</Text>
        );
    };
    
    render() {
        return(
            <View style={styles.areaFeed}>

                <View style={styles.viewPerfil}>
                    <Image
                        source={{uri: this.state.feed.imgPerfil}}
                        style={styles.fotoPerfil}
                    />

                    <Text style={styles.nomeUsuario}>{this.state.feed.nome}</Text>
                </View>

                <Image
                    resizeMode='cover'
                    style={styles.fotoPublicacao}
                    source={{uri: this.state.feed.imgPublicacao}}
                />

                <View style={styles.areaBtn}>
                    <View style={styles.iconesAreaBtn}>
                    <TouchableOpacity onPress={this.like}>
                        <Image
                        source={this.alterarIconeLike(this.state.feed.likeada)}
                        style={styles.iconeCoracao}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                        source={require('../img/chat.png')}
                        style={styles.iconeComentario}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                        source={require('../img/send.png')}
                        style={styles.iconeEnviar}
                        />
                    </TouchableOpacity>
                    </View>

                    <TouchableOpacity>
                        <Image
                        source={require('../img/save-instagram.png')}
                        style={styles.iconeSalvar}
                        />
                    </TouchableOpacity>
                </View>

                {(this.mostraLikes(this.state.feed.likes))}

                <View style={styles.viewRodape}>
                    <Text style={styles.nomeRodape}>{this.state.feed.nome}</Text>
                    <Text style={styles.descRodape}>{this.state.feed.descricao}</Text>
                </View>
                <Text style={styles.comentarios}>View all 3 comments</Text>

            </View>
        );
    };
};

const styles = StyleSheet.create({
    areaFeed: {
        
    },
    nomeUsuario: {
        fontSize: 18,
        textAlign: 'left',
        color: '#000000',
        fontWeight: 'bold',
        marginLeft: 10
    },
    fotoPerfil: {
        width: 40,
        height: 40,
        borderRadius: 50
    },
    viewPerfil: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        padding: 10
    },
    fotoPublicacao: {
        flex: 1,
        height: 400,
        alignItems: 'center'
    },
    areaBtn: {
        marginTop: 10,
        flexDirection: 'row',
        padding: 5
    },
    iconesAreaBtn: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconeCoracao: {
        height: 25,
        width: 25,
        marginLeft: 5,
        marginRight: 12
    },
    iconeComentario: {
        height: 28,
        width: 28,
        marginRight: 12
    },
    iconeEnviar: {
        height: 25,
        width: 25,
    },
    iconeSalvar: {
        height: 25,
        width: 20,
        marginRight: 10
    },
    viewRodape: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    descRodape: {
        paddingLeft: 5,
        fontSize: 15,
        color: '#000000',
    },
    nomeRodape: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
        paddingLeft: 10,
    },
    comentarios: {
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 30,
    },
    likes: {
        marginTop: 10,
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 15
    }
});

export default Lista