import {data} from './sidebarData'

export default function Sidebar({page, setPage, setLink}){
    return(
        <div className="Sidebar">
            {/* <div className='sidebar-title' onClick={()=>setLink("Home")}>
                EVALUESERVE SCREENER
            </div> */}
            <ul className="Sidebar-list">
                {
                    data.map(ele => 
                        (<div className='side-item'>
                            <li className= {`sidebar-${ele.type} row`} onClick={()=>setPage(ele.name)}>
                                {`${ele.name}`}
                            </li>
                        </div>)
                    )
                }
            </ul>
        </div>
    )
}