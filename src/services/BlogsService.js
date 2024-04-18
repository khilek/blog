import { AppState } from "../AppState.js"
import { Blog } from "../models/Blog.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class BlogsService{
  async getBlogs(){
const response = await api.get('api/blogs')
logger.log('Getting Blogs', response.data)
AppState.blogs = response.data.map(blog => new Blog(blog))

}

async getBlogById(blogId){
AppState.activeBlog = null
const response = await api.get(`api/blogs/${blogId}`)
logger.log('Getting Blogs', response.data)
const foundBlog = new Blog(response.data)
AppState.activeBlog = foundBlog

}

async getProfileBlogs(profileId) {
  AppState.profileBlogs = []
const response = await api.get(`api/blogs?creatorId=${profileId}`)
logger.log("Getting Blogs By Creator Id")
const blogs = response.data.map( blog => new Blog(blog))
AppState.profileBlogs = blogs
}
}

export const blogsService = new BlogsService()