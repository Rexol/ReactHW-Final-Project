import React, { useState } from 'react';

function Header({ onSearch }) {
    const [query, setQuery] = useState('');

    function search(e) {
        e.preventDefault();
        const searchCallback = onSearch || ((q) => { });
        searchCallback(query);
        setQuery('');
    }

    return (
        <header className="p-3 bg-dark text-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <h2>Who are they?</h2>
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    </ul>

                    <form className="col-12 col-lg-5 mb-2 mb-md-0" onSubmit={(e) => search(e)}>
                        <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
                    </form>

                    {/*<div className="text-end">
                        <button type="button" className="btn btn-outline-light me-2">Login</button>
                        <button type="button" className="btn btn-warning">Sign-up</button>
            </div>*/}
                </div>
            </div>
        </header>
    );
}

export default Header;