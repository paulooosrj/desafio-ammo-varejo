import React, {Component} from 'react';
import {connect} from 'react-redux';
import {filterByValue, loadData, loadExactPage, loadNewPage, sortByAlphabet, sortByPrice} from "./store";
import "bulma/css/bulma.min.css"

class App extends Component {

    componentDidMount() {
        const params = new URLSearchParams(window.location.search);
        const pageQueryParam = params.get('page');
        if (!pageQueryParam) {
            window.history.pushState({page: 1}, "title 1", "?page=1");
        } else {

        }

        let url = 'http://localhost:3000/produtos';

        let options = {
            method: 'GET', 
            mode: "no-cors",
            headers: {'Content-Type': 'application/json'}
        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => this.setState({ filteredProducts: json }))
            .catch(err => console.error('error:' + err));
       
    }

    filterByInput(e){
        let input = e.target.value;
        this.props.dispatch(filterByValue({value: input}))
    }

    nextPage() {
        this.props.dispatch(loadNewPage({page: 1}))
    }

    previousPage() {
        this.props.dispatch(loadNewPage({page: -1}));
    }

    goToPage(page) {
        this.props.dispatch(loadExactPage({page}))
    }

    sortByInput(e){
        let value = e.target.value;
        let direction = value.endsWith('asc') ? "asc" : "desc";

        if (value.startsWith('price')){
            this.props.dispatch(sortByPrice({direction}))
        }else {
            this.props.dispatch(sortByAlphabet({direction}));
        }
    }

    render() {
        let products = this.props.state.filteredProducts;
        return (
            <div className="App">
                <section className="hero">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                Pagination, Filtering and Sorting with React
                            </h1>
                            <h2 className="subtitle">
                                A detailed guide
                            </h2>
                        </div>
                    </div>
                </section>
                <section className='section'>
                    <div className='container'>
                        <div>
                            <div className="field is-grouped" style={{alignItems: "center"}}>
                                <div className="control">
                                    <div className="select">
                                        <select onChange={e => {
                                            this.sortByInput(e)
                                        }}>
                                            <option value="" disabled selected>Filtrar por</option>

                                            <option value='alphabet_asc'>Nome - A-Z</option>
                                            <option value='alphabet_desc'>Nome - Z-A</option>

                                            <option value='price_asc'>Preço - Menor ao Maior</option>
                                            <option value='price_desc'>Preço - Maior ao Menor</option>

                                        </select>
                                    </div>
                                </div>

                                <div className='control' style={{minWidth: "300px"}}>
                                    <input onChange={e => {
                                        this.filterByInput(e);
                                    }} style={{width: "100%"}} class="input" type="text" placeholder='Filtrar por' type='text'/>
                                </div>
                            </div>
                        </div>
                        <div className='tile is-ancestor' style={{flexWrap: "wrap"}}>
                            {
                                products && products.length && products.map(product => (
                                    <div className='tile is-parent is-3'>
                                        <div className='tile is-child box'>
                                            <p>
                                                <b>Name: </b>
                                                {product.name}
                                            </p>
                                            <p>
                                                <b>Designer: </b>
                                                {product.designer}
                                            </p>
                                            <p>
                                                <b>Type: </b>
                                                {product.type}
                                            </p>
                                            <p>
                                                <b>Price: </b>
                                                ${product.price}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
                <section className='section'>
                    <div className='container'>
                        <nav className="pagination" role="navigation" aria-label="pagination">
                            <button className="button pagination-previous" onClick={() => {
                                this.previousPage()
                            }}>Anterior
                            </button>
                            <button className="button pagination-next" onClick={() => {
                                this.nextPage()
                            }}>Proxima página
                            </button>
                            <ul className="pagination-list">
                                {
                                    [...Array(this.props.state.filteredPages)].map((value, index) => (
                                        <button
                                            className={`button pagination-link ${this.props.state.currentPage === index + 1 ? "is-current" : ""}`}
                                            aria-label="Page 1"
                                            onClick={() => this.goToPage(index + 1)}
                                            aria-current="page">
                                            {index + 1}
                                        </button>
                                    ))
                                }
                            </ul>
                        </nav>

                    </div>
                </section>
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {state};
}

export default connect(mapStateToProps)(App);
