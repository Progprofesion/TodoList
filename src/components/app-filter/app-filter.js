import { Component } from 'react';

import "./app-filter.css";

class AppFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: ''
        }
    }


    filterItem = (filter) => {
        this.setState({
            filter: filter
        })
    }


    render() {
        return (
            <div className="btn-group">
                <button type="button"
                    className="btn btn-light">
                    Все сотрудники
                </button>
                <button type="button"
                    className="btn btn-outline-light">
                    На повышение
                </button>
                <button type="button"
                    className="btn btn-outline-light">
                    З/П больше 1000$
                </button>
            </div>
        )
    }
}

export default AppFilter;