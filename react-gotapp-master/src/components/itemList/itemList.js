import React, {Component} from 'react';
//import './itemList.css';
import styled from 'styled-components';
const Item=styled.ul`
.item-list .list-group-item {
    cursor: pointer;
}`
export default class ItemList extends Component {

    render() {
        return (<Item>
            <ul className="item-list list-group">
                <li className="list-group-item">
                    John Snow
                </li>
                <li className="list-group-item">
                    Brandon Stark
                </li>
                <li className="list-group-item">
                    Geremy
                </li>
            </ul>
            </Item>
        );
    }
}