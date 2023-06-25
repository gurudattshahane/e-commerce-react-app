/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2020 Adobe Systems Incorporated
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

 import { MapTo } from '@adobe/cq-react-editable-components';
 import React, { Component } from 'react';
 import extractModelId from '../../utils/extract-model-id';
 
 require('./Header.css');
 
 const HeaderEditConfig = {
    emptyLabel: 'Header',
  
    isEmpty: function(props) {
      return !props || !props.text || props.text.trim().length < 1;
    }
  };

 /**
  * Header React component
  */
 class Header extends Component {
 
   render() {
     return (
        <header>
            <nav>
                <h1><a href="#">Logo</a></h1>
                <ul>
                    <li>Home</li>
                    <li>Products</li>
                    <li>Contact Us</li>
                </ul>
            </nav>
        </header>
     );
   }
 }
 
 export default MapTo('e-commerce-react-app/components/header')(
   Header,
   HeaderEditConfig
 );
 