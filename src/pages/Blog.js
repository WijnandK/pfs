import React, {   Fragment } from 'react';

 
 import Button from "../components/Button/Button"
 import Blogcomp from "../components/Blogcomp/Blogcomp"

import {BLOGZ , blogs1} from "../data"


class Blog   extends React.Component {
  state={blogs: BLOGZ, loading: true, title: BLOGZ[0].title}


    componentDidMount() {
      this.setState({
        blogs: BLOGZ,
        loading: false
      })
    }
    setProgrammingBlock = () => {
      let blogs =  BLOGZ;
   let title = blogs[0].title
      this.setState({blogs: blogs, title: title})
    }
 setFreeBlock = () => {
      let blogs = blogs1;
      let title = blogs[0].title
      this.setState({blogs: blogs, title: title})
    }
    render() {
     
    return (
     <Fragment>
           
            <div className="blogwrapper">
              <div className="blogbtns">
    <Button design="accent" onClick={this.setProgrammingBlock}> Programming topics </Button>
      <Button design="accent" onClick={this.setFreeBlock}>Freetime topics </Button>
              </div>
          
              <div className="blog_program_banner">
                <Blogcomp blogs={this.state.blogs} />
                              </div>
               
            
       {/* <Post image={fity} date={`2-dec-2020`} title={'Yoga for better coding skills'}/>
              <Post image={fit} date={`11-nov-2020`} title={'You get out wat you put in'}/> */}        
            </div>
          </Fragment>    
      
    )
  }
}

    // <Fragment>
    //           {this.state.blogs.map((blog, i) => (
    //           <Post key={blog.date + `${i}`} id={blog.id} author="Wijnand" image={blog.image} date={blog.date} title={blog.title} content={blog.content} clicked={() => this.setpostHandler(blog)}/> 

    //           ))}
    //         </Fragment  >
export default Blog;