import classes from './Content.module.css';
import { useRouter } from './../../routes';

const Content = (props) => {
    let routes = useRouter(props.isAuthenticated);
    return (
        <main className={classes.main}>
            {routes}
        </main>
    );
}

export default Content;
