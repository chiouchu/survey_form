/**
 * @module Select
 *
 *  {'type': 'select',
 *   'label': 'I am select question text',
 *   'data': [
 *       {'value': '1', 'label': 'select label 1'},
 *       {'value': '2', 'label': 'select label 2'},
 *       {'value': '3', 'label': 'select label 3'},
 *       ...
 *   ]
 *  }
 **/

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import PureComponent from 'react-pure-render/component';
import classNames from 'classnames';

import Question from '../Question/index';

require('./style.css');

class Select extends PureComponent {

    constructor(props) {
        super(props);
        // set initial states
        this.state = {
            isOpen: false,
            selectedValue: ''
        };
        this._onToggleOpen = this._onToggleOpen.bind(this);
        this._onClickCallback = this._onClickCallback.bind(this);
        this._handleDocumentClick = this._handleDocumentClick.bind(this);
    }

    componentDidMount() {
        // TODO: i18n
        window.addEventListener('click', this._handleDocumentClick);
    }

    componentDidUpdate() {
        // TODO: i18n
    }

    componentWillUnmount() {
        window.removeEventListener('click', this._handleDocumentClick);
    }

    render() {
        const { id, item } = this.props;
        const selectClass = {
            selectGrp: true,
            open: this.state.isOpen
        };
        const selectedItem = item.data.find((obj) => obj.value === this.state.selectedValue);
        return (
            <div>
                <Question
                    id={ id }
                    text={ item.label }
                />
                <div
                    className={ classNames(selectClass) }
                    onClick={ this._onToggleOpen }
                >
                    <span className="placeholder">
                        { selectedItem === undefined ? '--' : selectedItem.label }
                    </span>
                    <div className="options">
                        <ul>
                            { this._renderSelectItem() }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

    _renderSelectItem() {
        const { id, item } = this.props;
        const items = item.data.map((itm, idx) => {
            const inputID = `select_${id}_${idx}`;
            const val = itm.value ? itm.value : itm.label;
            const label = itm.label;
            const optClass = {
                selectItem: true,
                selected: this.state.selectedValue === val
            };
            return (
                <li
                    className={ classNames(optClass) }
                    key={ idx }
                    id={ inputID }
                    data-value={ val }
                    onClick={ this._onClickCallback }
                >
                    <span>{ label }</span>
                </li>
            );
        });
        return items;
    }

    _onToggleOpen() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    _onClickCallback(e) {
        this.setState({
            isOpen: false,
            selectedValue: e.currentTarget.getAttribute('data-value')
        });
        this.props.onChangeHandle(e);
    }

    _handleDocumentClick(e) {
        // if there are more than two dropdown list, checking the target
        if (!ReactDOM.findDOMNode(this).contains(e.target)) {
            this.setState({
                isOpen: false
            });
        }
    }

}

Select.PropTypes = {
    id: PropTypes.number.isRequired,
    item: PropTypes.object.isRequired,
    onChangeHandle: PropTypes.func.isRequired
};

Select.defaultProps = {};

export default Select;
