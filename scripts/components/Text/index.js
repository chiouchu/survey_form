/**
 * @module Text
 *
 *  {'type': 'text',
 *   'label': 'I am single line text'
 *  }
 **/

import React, { PropTypes } from 'react';
import PureComponent from 'react-pure-render/component';

import Question from '../Question/index';

require('./style.css');

class Text extends PureComponent {

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
        return (
            <div>
                <Question
                    id={ id }
                    text={ item.label }
                />
                <div>
                    <input
                        id={ `text_${id}` }
                        type="text"
                        onChange={ onChangeHandle }
                    />
                </div>
            </div>
        );
    }

}

Text.PropTypes = {
    id: PropTypes.number.isRequired,
    item: PropTypes.object.isRequired,
    onChangeHandle: PropTypes.func.isRequired
};

Text.defaultProps = {};

export default Text;
