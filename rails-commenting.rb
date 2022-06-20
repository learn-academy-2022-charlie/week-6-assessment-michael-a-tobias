# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) BlogPostsController belongs to the superclass ApplicationController. It holds all the methods that would define this blog's RESTful routes.
class BlogPostsController < ApplicationController
  def index
    # ---2) @posts is an instance variable that will display all the BlogPosts as part of the index route.
    @posts = BlogPost.all
  end

  # ---3) This is the method for the show route that will display a single database entry for BlogPost.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) This method will make a form to create a new entry for BlogPost.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) @post is an instance variable assigned to BlogPost.create() that will be passed information from BlogPost.new to create a new entry for BlogPost. (blog_post_params) refers to the method at the bottom of this file that defines what is acceptable for the title and content of the blog post.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6) @post is an instance variable for BlogPost.find that will create a form to edit a BlogPost with the id: parameter given.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) @post.update() will pass along the information given in the edit method to update a BlogPost. It takes parameters as definined in blog_post_params shown at the bottom of this file.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) If the destroy method fails to delete an entry, it'll redirect the user to the post it failed to destroy.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) The private keyword restricts the scope of code written below it in that it can only be called within the object.
  private
  def blog_post_params
    # ---10) The parameters require a blog_post object which will ONLY have a title and content. Any columns not explicitly listed here will not be saved to the database.
    params.require(:blog_post).permit(:title, :content)
  end
end
