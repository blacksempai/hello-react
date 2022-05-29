import axios from "axios";
import React from "react";
import classes from "./Dating.module.css"
import UserBadge from './user-badge/UserBadge';

class Dating extends React.Component {

    componentDidMount() {
        axios.get(`/api/users`)
        .then((res)=> {
            this.props.setUsers(res.data.users, res.data.total);
        })
    }

    render() { 
        let changePage = (page) => {
            this.props.changePage(page);
            axios.get(`/api/users?page=${page}`)
            .then((res)=> {
                this.props.setUsers(res.data.users, res.data.total);
            })
        }

        let pagesNumber = Math.ceil(this.props.total / this.props.limit);
        let pages = [];
        for(let i = 0; i < pagesNumber; i++) {
            pages.push(i);
        }
        let pageButtons = pages.map(p => <button key={p} className={this.props.currentPage === p ? classes.active:''} onClick={()=> { changePage(p) }}>{p}</button>)

        let users = this.props.users.map(u => <UserBadge key={u._id} user={u} date={this.props.date}/>)
        
        return (
            <div className={classes.dating}>
                <h1>Dating</h1>
                <div className={classes.pageSwitcher}>
                    { pageButtons }
                </div>
                <div className={classes.datingGrid}>
                    {users}
                </div>
            </div>
        )
    }
}

export default Dating;