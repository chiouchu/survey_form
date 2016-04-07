
import React from 'react';
import PureComponent from 'react-pure-render/component';

import Radio from './components/Radio/index';
import Checkbox from './components/Checkbox/index';
import Text from './components/Text/index';
import Textarea from './components/Textarea/index';
import Select from './components/Select/index';

class App extends PureComponent {
    render() {
        // TODOS:
        // dynamic load json
        // common components / ratio components
        // question error msg
        // submit button / required field
        // focus field animation
        // multiple pages
        // i18n with google translate (maybe)

        const surveyList = require('JSON/survey.json');
        const list = surveyList.survey.map(
            (itm, idx) => this._renderQuestion(itm, idx));

        return (
            <div className="container">
                <h1>Survey Form</h1>
                { list }
            </div>
        );
    }

    _renderQuestion(item, idx) {
        const pros = {
            id: idx,
            key: idx,
            item: item,
            onChangeHandle: this._onChangeHandle
        };
        switch (item.type) {
        case 'radio':
            return (
                <Radio {...pros} />
            );
        case 'checkbox':
            return (
                <Checkbox {...pros} />
            );
        case 'text':
            return (
                <Text {...pros} />
            );
        case 'textarea':
            return (
                <Textarea {...pros} />
            );
        case 'select':
            return (
                <Select {...pros} />
            );
        default:
            return (<div key={ idx }>Can't find the survey component: { item.type }</div>);
        }
    }

    _onChangeHandle(e) {
        // TODOS: record the answer, add to store
        console.log(e.currentTarget);
    }
}

export default App;
