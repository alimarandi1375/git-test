import { Injectable } from '@angular/core';
import {Blogs, blogsApi} from "../shared/data/blogs";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public blogs : Blogs[]


  constructor() {
    this.blogs = blogsApi.blogs
  }
}
