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

import Lista from './src/Lista';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        feed: [
          {
            id: 1,
            nome: 'gabrielghiaroni',
            descricao: 'Dev Fullstack Web && Mobile 👨🏻‍💻',
            imgPerfil: 'https://media-exp1.licdn.com/dms/image/C5603AQEfCcLWStbDGQ/profile-displayphoto-shrink_800_800/0/1647175033684?e=1669852800&v=beta&t=-WnVW3zUTdkSvNq_4oX3NaYBPYwSmZjreytxl6Uv9OA',
            imgPublicacao: 'https://media-exp1.licdn.com/dms/image/C5603AQEfCcLWStbDGQ/profile-displayphoto-shrink_800_800/0/1647175033684?e=1669852800&v=beta&t=-WnVW3zUTdkSvNq_4oX3NaYBPYwSmZjreytxl6Uv9OA',
            likeada: false,
            likes: 0
          },
          {
            id: 2,
            nome: 'juliette',
            descricao: 'Obrigadaaa Brasilll!! 🌽🌽💰💰 ',
            imgPerfil: 'https://emoff.ig.com.br/wp-content/uploads/2022/03/juliette-freire-volta-atras-de-decisao-e-anuncia-turne-pelo-brasil.jpg',
            imgPublicacao: 'https://static1.purepeople.com.br/articles/7/31/98/27/@/3608241-juliette-contou-que-ja-deu-seu-primeiro-624x600-3.jpg',
            likeada: false,
            likes: 127
          },
          {
            id: 3,
            nome: 'galvaobueno',
            descricao: 'haja coração, amigo! 🇧🇷🇧🇷🥇🥇🏆',
            imgPerfil: 'https://s2.glbimg.com/U29CEcFylqUsLTNvXmTq94ohp80=/0x0:3333x5000/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/1/y/ZpO9BFR2qbM02sxSZFSw/galvao.jpg',
            imgPublicacao: 'https://midias.correiobraziliense.com.br/_midias/jpg/2021/07/20/675x450/1_20210720183507284863i-6767710.jpg?20220324150443?20220324150443',
            likeada: false,
            likes: 330
          },
          {
            id: 4,
            nome: 'fluminensefc',
            descricao: 'É CAMPEÃOOOO!! 🇮🇹🇮🇹',
            imgPerfil: 'https://upload.wikimedia.org/wikipedia/pt/thumb/a/a3/FFC_escudo.svg/1200px-FFC_escudo.svg.png',
            imgPublicacao: 'https://f.i.uol.com.br/fotografia/2022/04/02/16489427236248de832383d_1648942723_3x2_md.jpg',
            likeada: false,
            likes: 560
          },
          {
            id: 5,
            nome: 'diogodefante',
            descricao: 'Alegriiiiiia!!!! 😄😄',
            imgPerfil: 'https://www.saogoncalo.rj.gov.br/wp-content/uploads/2022/09/Diogo-Defante-foto-Divulgacao.jpeg',
            imgPublicacao: 'https://i.ytimg.com/vi/luTt70iTidM/maxresdefault.jpg',
            likeada: false,
            likes: 115
          },
          
          
        ]
    };
  };

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <TouchableOpacity>
            <Image 
              source={require('./src/img/instagram_logo.png')}
              style={styles.logo}
            />
          </TouchableOpacity>
           
          <View style={styles.itensHeader}>
            <TouchableOpacity>
              <Image 
                source={require('./src/img/more.png')}
                style={styles.more}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image 
              source={require('./src/img/heart.png')}
              style={styles.heart}
              />
            </TouchableOpacity>
            
            <TouchableOpacity>
              <Image 
                  source={require('./src/img/messenger.png')}
                  style={styles.messenger}
                />
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
        showsHorizontalScrollIndicator={false}
        data={this.state.feed}
        renderItem={({item}) => <Lista data={item}/>}
        />

      </View>
    );
  }




};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70
  },
  header: {
    flexDirection: 'row',
    height: 55,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 1
  },
  itensHeader: {
    flexDirection: 'row'
  },
  logo: {
   height: 30,
   width: 100,
   marginLeft: 10
  },
  more: {
    height: 23,
    width: 23,
    marginRight: 20
  }, 
  heart: {
    height: 23,
    width: 23,
    marginRight: 20
  },
  messenger: {
    height: 23,
    width: 23,
    marginRight: 20
  }
});

export default App;