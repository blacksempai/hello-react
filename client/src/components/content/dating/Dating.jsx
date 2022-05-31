import classes from "./Dating.module.css"
import UserBadge from './user-badge/UserBadge';
import Loader from './../../common/loader/Loader';

const Dating = (props) => {  
        let pagesNumber = Math.ceil(props.total / props.limit);
        let pages = [];
        for(let i = 0; i < pagesNumber; i++) {
            pages.push(i);
        }
        let pageButtons = pages.map(p => <button key={p} className={props.currentPage === p ? classes.active:''} onClick={()=> { props.changePage(p) }}>{p}</button>)

        let users = props.users.map(u => <UserBadge key={u._id} user={u} date={props.dateUser}/>)
        
        return (
            <div className={classes.dating}>
                <h2>Dating</h2>
                <div className={classes.pageSwitcher}>
                    { pageButtons }
                </div>
                    { props.isFetching ?  <Loader/> :<div className={classes.datingGrid}>{ users }</div>}
            </div>
        )
}

export default Dating;