import React, { Component } from 'react';
import { View, TextInput, StyleSheet, ScrollView, Text} from 'react-native';
import { makeLocationSearch } from '../../DevsUberAPI';
import SearchBoxItem from './SearchBoxItem';

export default class SearchBox extends Component {
    timer = null;

    constructor(props){
        super(props);
        this.state = {
            txt: '',
            results: []
        }

        this.txtFill = this.txtFill.bind(this);
        this.doSearch = this.doSearch.bind(this);

        // this.props.dataClick();
    }

    txtFill(text){
        this.setState({txt: text, results: []});

        if(typeof this.timer != null){
            clearTimeout(this.timer)
        }

        this.timer = setTimeout(this.doSearch, 1000);
    }

    doSearch(){
        makeLocationSearch(this.state.txt)
            .then((results)=>{
                this.setState({results});
            })
            .catch(()=>{
                alert("Ocorreu um erro");
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.box}>
                    <TextInput 
                        style={styles.input} 
                        value={this.state.txt}
                        onChangeText={this.txtFill}
                        placeholder="Para onde você quer ir?" 
                    />
                </View>
                {this.state.results.length > 0 && 
                    <ScrollView style={styles.results}>
                        {this.state.results.map((item)=>{
                            return (
                                <SearchBoxItem dataClick={()=>{
                                    this.props.dataClick(item);
                                    this.setState({results: [], txt: item.label});
                                }}  key={item.id} data={item} />
                            );
                        })}
                    </ScrollView>
                }
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    box: {
        width: '80%',
        height: 50,
        marginTop: 40,
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        elevation: 4,
        shadowOffset: {width:20, height: 20},
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },
    input: {
        width: '100%',
        height: '100%',
        padding: 10,
        fontSize: 19
    },
    results: {
        width: '80%',
        marginBottom: 40,
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',

    }
})