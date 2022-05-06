import React, { useState} from 'react'

const Search = ({onSearch}) => {
    const [search, setSearch] = useState('');
    const onInputChange = (value) =>{
        setSearch(value);
        onSearch(value);
    }
  // console.log(search)
    return ( 
      <>
      <div id="search2">
            <div className="title">
                <h3 className='h3'>search</h3>
            </div>
            <div className="search">
                <form role="search" method="get" className="search-form" action="">
                    <div className="input-group"> 
                        {/* <input id="s" placeholder="Enter Post Title" onChange={event => searchQuery(event.target.value)} /> */}
                        <input id="s" placeholder="Enter Post Title" value={search} onChange={e => onInputChange(e.target.value)} />
                        <span className="input-group-btn"> 
                            {/* <Link to={"/search"} className="submit button" name="submit" value="Search"> <FontAwesomeIcon icon={faSearch} /></Link> */}
                        </span> 
                    </div>
                </form>
            </div>
        </div>
      
      </>
    )
}
export default Search;