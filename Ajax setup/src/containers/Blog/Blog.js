import React, { Component } from 'react';

import './Blog.css';
import Posts from './Posts/Posts'; 
//import NewPost from './NewPost/NewPost'
import asyncComponent from '../../hoc/asyncComponent';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

const AsyncNewPost =  asyncComponent(() => import('./NewPost/NewPost'));



class Blog extends Component {

    state = {
        auth: false
    }
    
    render () {
        
        
        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                to='/' 
                                exact
                                activeClassName='my-active' //override active class
                                activeStyle={{
                                    textDecoration: 'underline'
                                }}//another way to add styles
                                >Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post', 
                                hash: '#submit', 
                                search: '?quick-submit=true'}}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path='/' exact render={() => <h1>Home</h1>} />*/}
                <Switch>
                    {/*{this.state.auth ? <Route path='/new-post' exact component={NewPost} /> : null}*/}

                    <Route path="/new-post" component={AsyncNewPost} />
                    <Route path="/posts" component={Posts} />
                    <Redirect from="/" to="/posts" />
                    {/* <Route path="/" component={Posts} /> */}
                    
                    {/*<Redirect from='/' to='/posts' />
                    <Route path='/' component={Posts} />*/}      
                </Switch>
            </div>
        );
    }
}

export default Blog;