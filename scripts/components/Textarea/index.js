/**
 * @module Textarea
 *
 *  {'type': 'textarea',
 *   'label': 'I am multiple line text'
 *  }
 **/

import React, { PropTypes } from 'react';
import PureComponent from 'react-pure-render/component';

import Question from '../Question/index';

require('./style.css');

class Textarea extends PureComponent {

    /* constructor() {
        super();
    }*/

    componentDidMount() {
        // TODO: i18n
    }

    componentDidUpdate() {
        // TODO: i18n
    }

    render() {
        const { id, item, onChangeHandle } = this.props;
        const rows = item.rows ? item.rows : 3;
        return (
            <div>
                <Question
                    id={ id }
                    text={ item.label }
                />
                <div>
                    <textarea
                        id={ `textarea_${id}` }
                        rows={ rows }
                        onChange={ onChangeHandle }
                    />
                </div>
            </div>
        );
    }

}

Textarea.PropTypes = {
    id: PropTypes.number.isRequired,
    item: PropTypes.object.isRequired,
    onChangeHandle: PropTypes.func.isRequired
};

Textarea.defaultProps = {};

export default Textarea;
